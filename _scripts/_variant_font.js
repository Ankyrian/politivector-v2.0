const elems = document.querySelectorAll('h1, h3, h4');
for (const e of elems) {
    const regex = /[Gw]/g;
    const matches = e.innerHTML.match(regex);

    matches.forEach(match => {
        const span = document.createElement('span');
        span.style.setProperty('font-feature-settings', '\"ss01\"');
        span.innerText = match;
        e.innerHTML = e.innerHTML.replace(match, span.outerHTML);
    });
}