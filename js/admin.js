document.addEventListener("DOMContentLoaded", function() {
    const submenus = document.querySelectorAll('.has-submenu');

    submenus.forEach(menu => {
        let timeout;
        menu.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            this.querySelector('.submenu').style.display = 'block';
        });
        menu.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            timeout = setTimeout(() => {
                submenu.style.display = 'none';
            }, 175);
        });
    });
});
