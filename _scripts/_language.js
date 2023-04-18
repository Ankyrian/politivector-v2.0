(function () {
    const locales = ['en', 'tr'];

    const selector = document.querySelector('#language-selector');

    const lang = selector.getAttribute('data-locale');
    let path = selector.getAttribute('data-path');

    const selected = document.createElement('div');
    selected.setAttribute('id', `${lang}-selected`);
    selected.setAttribute('class', 'language selected');

    selected.innerHTML = `<img src="/assets/navigation/flags/${lang}.png" class="flag" alt=""><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></svg>`;

    selector.appendChild(selected);

    selected.addEventListener('click', () => {handleExpand(selector)});

    const dropdown = document.createElement('div');
    dropdown.setAttribute('id', 'language-dropdown');
    dropdown.setAttribute('class', 'collapsed');

    for (const locale of locales) {
        const option = document.createElement('div');
        option.setAttribute('id', `${locale}-selected`);
        option.setAttribute('class', `language ${locale === lang ? 'hidden' : ''}`);

        option.innerHTML = `<img src="/assets/navigation/flags/${locale}.png" class="flag option" data-locale="${locale}" alt=""><svg class="arrow invisible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></svg>`;

        dropdown.appendChild(option);
    }

    selector.appendChild(dropdown);

    window.addEventListener('click', (event) => {handleClickOut(event, selector)});

    for (const option of dropdown.children) {
        const flag = option.children[0];
        flag.addEventListener('click', () => {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            params.set('lang', flag.getAttribute('data-locale'));

            window.location.href = `${path}?${params}`;
        });
    }
})();

function handleExpand(selector) {
    const selected = selector.children[0];
    const dropdown = selector.children[1];
    const isCollapsed = dropdown.getAttribute('class') === 'collapsed';

    dropdown.setAttribute('class', isCollapsed ? 'expanded' : 'collapsed');
    dropdown.style.setProperty('max-height', isCollapsed ? `${24 * dropdown.children.length}px` : '0');
    selected.children[1].setAttribute('class', `arrow ${isCollapsed ? 'down' : 'right'}`);
}

function handleClickOut(event, selector) {
    const selected = selector.children[0];
    const dropdown = selector.children[1];
    if (!selector.contains(event.target) && dropdown.getAttribute('class') === 'expanded') {
        selected.click();
    }
}