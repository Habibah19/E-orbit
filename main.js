window.addEventListener("load",function(event) {
    var shapes = document.querySelectorAll('.shape');

    shapes.forEach(function (el) {
        el.addEventListener('mouseover', function (e) {
            var activeShape = document.querySelector('.shape.active');

            el.classList.toggle('active');
            activeShape.classList.toggle('active');
        });
    });
});
