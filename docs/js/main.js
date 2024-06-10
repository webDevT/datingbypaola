document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menuWrapper = document.querySelector('.menu-wrapper');

    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        menuWrapper.classList.toggle('active');
    });
});