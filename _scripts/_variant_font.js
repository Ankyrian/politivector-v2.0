(function () {
    const elems = document.querySelectorAll('h1, h3, h4');
    for (const e of elems) {
        const regex = /([Gw])/g;
        e.innerHTML = e.innerHTML.replaceAll(regex, (char) => {
            const span = document.createElement('span');
            span.style.setProperty('font-feature-settings', '\"ss01\"');
            span.innerText = char;
            return span.outerHTML;
        });
    }
})();