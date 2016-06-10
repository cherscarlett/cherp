var $trigger = $('.navigation-item a'),
    $section;

$trigger.on("click", function(event) {
    event.preventDefault();

    item = {
        id: $(this).data('id'),
        path: this.href,
        section: $('section').attr('class'),
        clicked: this
    }

    item.path !== '/' ? item.title = "Cher Stewart | Software Engineer | " + $(this).html() : item.title = "Cher Stewart | Software Engineer";

    loadPartial(item);
});


$(window).on("popstate", function(event) {
    window.location.href = $(".active").attr("href");
});

function loadPartial(item) {

    updateContent(item);

    $.get(item.path + "?ajax=true", function(data) {
        history.pushState(null, item.title, item.path);

        $section = $("section");

        $section.attr("class", "");

        $section.addClass(item.id).html(data);

    });
}

function updateContent(item) {
    $(".active").removeClass('active');
    $(item.clicked).addClass('active');
}
