var path,
    $body = $('body'),
    modal;


$body.on("click", ".item-description-more", function(event) {
    event.preventDefault();

    addDescription();
});

$body.on("propertychange change input", ".item-related input", function(event) {
    uploadImages(event, function(data) {

        images = data.responseText.split(',');

        if (!$('.asides').length) {
            $('.item-related').before('<div class="asides"></div>');   
        }

        for(var i = 0; i < images.length; i++) {
            var image = images[i];

            $.get('/admin/portfolio/asides?image='+image, function(data) {
                loadAside(data);
            });
        }
    });
});

$body.on("click", ".admin-new", function(event) {
    event.preventDefault();

    path = this.href + '?order=' + $(this).data('order');

    modal = new Modal({
        component: 'admin',
        theme: "light",
        animation: "expandIn"
    })

    $.get(path, function(data) {
        loadModal(data, modal);
    });
});

$body.on("click", "a.item-edit", function(event) {
    event.preventDefault();

    path = this.href;

    modal = new Modal({
        component: 'admin',
        theme: "light",
        animation: "expandIn"
    })

    $.get(path, function(data) {
        loadModal(data, modal);
    });
});

$body.on("click", ".item-delete a", function(event) {
    event.preventDefault();

    path = this.href;

    $.ajax({
        url: path,
        type: 'DELETE',
        success: function() {
            location.href = "/admin/";
        }    
    });
});

$body.on("submit", "form", function(event){

    event.preventDefault();

    var form = $(this).serialize(),
        component = $(this).parent().data("component"),
        pathFragment = '/admin/portfolio/',
        pathFull;

    if (component === 'new') {
        pathFull = pathFragment + "create";
        $.ajax({
            url: pathFull,
            data: form,
            type: "POST",
            success: function(data) {
                
                if ($('.items-list').length === 0) {
                    $('.items').append('<ul class="items-list" />');
                    $('.no-items').remove();
                }

                $('.items-list').prepend(data);

                modal.close();
            }
        });
    }

    if(component === 'edit') {
        pathFull = pathFragment + "update/" + $(this).parent().data("id");

        $.ajax({
            url: pathFull,
            data: form,
            type: "POST",
            success: function(data) {
                modal.close();
            }
        });
    }

});

function loadModal(content, modal) {
    if (!$('.is-open').length) {
        modal.create(content);
        modal.open();
    }
    else {
        modal.close();
    }
}

function showItem(data) {
    if ($('.items-list').length === 0) {
        $('.items').append('<ul class="items-list" />');
        $('.no-items').remove();
    }
    $('.items-list').prepend(data);
}

// function showMessage(message, type) {
//     $body.append();
// }

function addDescription() {
    $(".item-description").append('<input name="description_text" placeholder="Writing code" type="text">');
}

function uploadImages(event, callback) {
    path = "/admin/portfolio/upload";

    var images = event.target.files,
        formData = new FormData(),
        xhr = new XMLHttpRequest(),
        form;

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        if (!image.type.match('image.*')) {
            continue;
        }

        formData.append('images[]', image, image.name);
        formData.append('length', images.length);
    }

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            callback(xhr);
        }
    };

    xhr.open("POST", path, true);

    xhr.send(formData);
}

function loadAside(data) {
    $('.item-related input[type="file"]').val('');
    $('.asides').append(data);
}
