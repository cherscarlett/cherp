var svgs = ['wind'],
    $canvas = $('.animation-canvas-about'),
    $skills = $('.animation-canvas-skills');

$(document).ready(function() {
    if ($canvas.length) {
        loadSvgs(svgs, $canvas);
    }
    if ($skills.length) {
        initSkills();
    }
});

document.addEventListener("touchstart", function() {}, false);

function loadSvgs(svgs, canvas) {
    for( var i = 0; i < svgs.length; i++) {
        var svg = svgs[i];
            $canvas = $(canvas);

        $.get('/animation' + '?id=' + svg, function(data){
            $canvas.prepend(data);
        });
    }
}

window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


var Configs = {
    particleNum: 1000,
    step: 20,
    base: 1000,
    zInc: 0.001
};

var canvas,
    context,
    screenWidth,
    screenHeight,
    centerX,
    centerY,
    particles = [],
    hueBase = 0,
    simplexNoise,
    zoff = 0;


function initSkills() {
    canvas = document.getElementById('animation');

    window.addEventListener('resize', draw, false);
    draw(null);

    for (var i = 0, len = Configs.particleNum; i < len; i++) {
        initParticle((particles[i] = new Particle()));
    }

    simplexNoise = new SimplexNoise();

    update();
}


// Event listeners

function draw(e) {
    screenWidth  = canvas.width  = window.innerWidth;
    screenHeight = canvas.height = window.innerHeight;

    centerX = screenWidth / 2;
    centerY = screenHeight / 2;

    context = canvas.getContext('2d');
    context.lineWidth = 0.1;
    context.lineCap = context.lineJoin = 'round';
}


// Functions

function getNoise(x, y, z) {
    var octaves = 4,
        fallout = 0.5,
        amp = 1, f = 1, sum = 0,
        i;

    for (i = 0; i < octaves; ++i) {
        amp *= fallout;
        sum += amp * (simplexNoise.noise3D(x * f, y * f, z * f) + 1) * 0.5;
        f *= 2;
    }

    return sum;
}

function initParticle(p) {
    p.x = p.pastX = screenWidth * Math.random();
    p.y = p.pastY = screenHeight * Math.random();
    p.color.h = hueBase + Math.atan2(centerY - p.y, centerX - p.x) * 180 / Math.PI;
    p.color.s = 1;
    p.color.l = 0.5;
    p.color.a = 0;
}


// Update

function update() {
    var step = Configs.step,
        base = Configs.base,
        i, p, angle;
    
    for (i = 0, len = particles.length; i < len; i++) {
        p = particles[i];

        p.pastX = p.x;
        p.pastY = p.y;
    
        angle = Math.PI * 6 * getNoise(p.x / base * 1.618, p.y / base * 1.618, zoff);
        p.x += Math.cos(angle) * step;
        p.y += Math.sin(angle) * step;
        
        if (p.color.a < 1) p.color.a += 0.003;

        context.beginPath();
        context.strokeStyle = p.color.toString();
        context.moveTo(p.pastX, p.pastY);
        context.lineTo(p.x, p.y);
        context.stroke();
        
        if (p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight) {
            initParticle(p);
        }
    }
    
    hueBase += 0.1;
    zoff += Configs.zInc;

    requestAnimationFrame(update);
}

function HSLA(h, s, l, a) {
    this.h = h || 255;
    this.s = s || 255;
    this.l = l || 255;
    this.a = a || 0;
}

HSLA.prototype.toString = function() {
    return 'hsla(' + this.h + ',' + (this.s * 35) + '%,' + (this.l * 100) + '%,' + this.a + ')';
}

function Particle(x, y, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || new HSLA();
    this.pastX = this.x;
    this.pastY = this.y;
}

