function showPage(pageId) {
    // 1. Hide all text content blocks
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    // 2. Remove the highlight styling from all navigation tabs
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Make the selected content page visible
    document.getElementById(pageId).classList.add('active-page');

    // 4. Add highlight styling to the clicked tab
    event.currentTarget.classList.add('active');
}
