var $trigger = $('.navigation-item a').not('[data-id="portfolio"]'),
    $portfolioTrigger = $('.navigation-item a[data-id="portfolio"], .navigation-item-portfolio'),
    $section,
    $menuTrigger = $('.menu'),
    $navigation = $('.navigation-footer'),
    component = $menuTrigger.data('component');


var navigationModal = new Modal({
    component: component,
    role: 'site',
    theme: "light"
});

var portfolioModal = new Modal({
    component: 'navigation',
    role: 'portfolio',
    theme: "light"
});

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

$portfolioTrigger.on("click", function(event) {
    event.preventDefault();

    item = {
        id: $(this).data('id'),
        path: this.href,
        section: $('section').attr('class'),
        clicked: this
    }

    item.path !== '/' ? item.title = "Cher Stewart | Software Engineer | " + $(this).html() : item.title = "Cher Stewart | Software Engineer";

    loadPartial(item);

    $.get('/portfolio/list', function(data) {
        if ($('.is-open').length) {
            navigationModal.close();
        }
        portfolioModal.create(data);
        portfolioModal.open();
    });  
});

$menuTrigger.on("click", function(event) {
    event.preventDefault();

    if (!$('.is-open').length) {
        navigationModal.create($navigation);
        navigationModal.open();
    }
    else {
        navigationModal.close();
    }

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

        if (item.id === 'about') {
            loadSvgs(['wind'], $('.animation-canvas'));
        }

        if (item.id === 'skillset') {
            initSkills();
        }

    });
}

function updateContent(item) {
    $(".active").removeClass('active');
    $(item.clicked).addClass('active');
    if ($('.is-open').length) {
        navigationModal.close();
    }
}
