function animateContent(object, animation, opts) {
    var translateAmount = 100;

    if (opts && typeof opts.multiplier === 'number') {
        translateAmount = translateAmount * opts.multiplier;
    }

    translateAmount = translateAmount + "%";

    if (animation === 'fromRight') {
        $(object)
            .velocity(
                { translateX: '-' + translateAmount },
                200
            );
    }
    else if (animation === 'fromLeft') {
        $(object)
            .velocity(
                { translateX: translateAmount },
                200
            );
    }
    else if (animation === 'fromBottom') {
        $(object)
            .velocity(
                { translateY: '-' + translateAmount },
                200
            );
    }
    else if (animation === 'fromTop') {
        $(object)
            .velocity(
                { translateY: translateAmount },
                200
            );
    } 

    else {
        $(object)
            .velocity('transition.' + animation,
                { duration: 200 }
            );
    }
}
