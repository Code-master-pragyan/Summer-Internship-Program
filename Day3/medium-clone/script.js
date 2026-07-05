document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic
    const forYouTab = document.getElementById('for-you-tab');
    const featuredTab = document.getElementById('featured-tab');
    const forYouContent = document.getElementById('for-you-content');
    const featuredContent = document.getElementById('featured-content');

    if (forYouTab && featuredTab) {
        forYouTab.addEventListener('click', () => {
            forYouTab.classList.add('active');
            featuredTab.classList.remove('active');
            forYouContent.style.display = 'block';
            featuredContent.style.display = 'none';
        });

        featuredTab.addEventListener('click', () => {
            featuredTab.classList.add('active');
            forYouTab.classList.remove('active');
            featuredContent.style.display = 'flex';
            forYouContent.style.display = 'none';
        });
    }

    

    // Sidebar logic
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('side-menu');

    if (menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('open');
        });
    }
});
