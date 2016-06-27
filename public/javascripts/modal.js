
(function() {

    this.Modal = function() {
        this.overlay = null;
        this.closeTrigger = null;

        var defaults = {
            el: '',
            close: true,
            overlay: true,
            content: '',
            theme: 'dark',
            component: '',
            role: '',
            animation: 'fromBottom',
            destroy: true
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

    }

}());

Modal.prototype.create = function(data) {
    var $modal = $('.' + this.options.component + '-modal');
    if ($modal.length) {
        $modal.remove();
        $('.modal-overlay').remove();
    }

    $modal = $('<div />');
    
    $modal.hide();
    
    $modal.addClass('modal ' + this.options.component + '-modal ' + this.options.component + '-modal-' + this.options.role);
    $modal.html(data);
    
    $('body').append($modal);
    this.options.el = $modal;
    this.options.content = $modal.children().first();
}

Modal.prototype.open = function() {
    if ($(this.options.el).css('display') == 'none') {
        $(this.options.el).show();
    }
    if (this.options.overlay === true) {
        buildOverlay.call(this);
    }
    if (this.options.close === true) {
        buildCloseTrigger.call(this);
    }

    initializeEvents.call(this);

    toggleContent.call(this);

    animateContent(this.options.content, this.options.animation);
}

Modal.prototype.close = function() {
    var $overlay = $(this.overlay),
        $close = $(this.closeTrigger),
        _ = this,
        destroy = this.options.destroy;

    if (this.overlay) {
        $overlay
            .velocity("reverse", 
                function(){ 
                    $(this).remove();
                    $close.remove();
                    delete _;
                }
            );
    }

    $(this.options.content)
        .velocity("reverse",
            function() {
                toggleContent.call(_);
                delete _;
                if (destroy) {
                    $(this).parent().remove();
                }
            }
        );

    $(window).unbind('keyup');

}

function toggleContent() {
    $(this.options.el).toggleClass("is-open");
}

function buildOverlay() {
    this.overlay = document.createElement("div");
    this.overlay.className = "modal-overlay modal-overlay-" + this.options.theme + " modal-overlay-" + this.options.component + ' modal-overlay-' + this.options.component + '-' + this.options.role;
    $(this.options.el).after(this.overlay);
    $(this.overlay).velocity("fadeIn", { duration: 200})
}

function buildCloseTrigger() {
    this.closeTrigger = document.createElement("a");
    this.closeTrigger.href = 'javascript:;';
    this.closeTrigger.className = 'modal-close';
    $(this.options.content).prepend(this.closeTrigger);
}

function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
        if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
        }
    }
    
    return source;
}

function initializeEvents() {

    var modal = this;

        if (this.closeTrigger) {
            this.closeTrigger.addEventListener('click', this.close.bind(this));
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }

        $(window).on('keyup', function(event) {
            if (event.keyCode == 27) {
                modal.close();
                return false;
            }
        });

}
