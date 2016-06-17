var path,
    $body = $('body'),
    modal;


$body.on("click", ".item-new-description-more", function(event) {
    event.preventDefault();

    addDescription();

});

$body.on("click", ".admin-new", function(event) {
    event.preventDefault();

    path = this.href;

    modal = new Modal({
        component: 'admin',
        theme: "light",
        animation: "expandIn"
    })

    $.get(path, function(data) {
        loadPartial(data, modal);
    });
});

$body.on("submit", "form", function(event){

    event.preventDefault();

    var form = $(this).serialize(),
        component = $(this).parent().attr("class"),
        pathFragment = '/admin/portfolio/',
        pathFull;

    if (component === 'item-new') {
        pathFull = pathFragment + "create";
        $.ajax({
            url: pathFull,
            data: form,
            type: "POST",
            success: function(data) {
                console.log(data);
                
                if ($('.items-list').length === 0) {
                    $('.items').append('<ul class="items-list" />');
                    $('.no-items').remove();
                }

                $('.items-list').prepend(data);

                modal.close();
            }
        });
    }

});

function loadPartial(content, modal) {
    if (!$('.is-open').length) {
        modal.create(content);
        modal.open();
    }
    else {
        modal.close();
    }
}

function showItem(data) {
    console.log(data);
    if ($('.items-list').length === 0) {
        $('.items').append('<ul class="items-list" />');
        $('.no-items').remove();
    }
    $('.items-list').prepend(data);
}

function showMessage(message, type) {
    $body.append();
}

function addDescription() {
    $(".item-new-description").append('<input name="description_text" placeholder="Writing code" type="text">');
}
