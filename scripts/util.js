function setAttributes(elem, elemAttributes) {
    Object.keys(elemAttributes).forEach(attribute => {
        elem.setAttribute(attribute, elemAttributes[attribute]);
    });
}

function createHTMLElement(tagName, elemAttributes) {
    let elem;

    if (tagName === 'svg' || tagName === 'rect') {
        elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    } else {
        elem = document.createElement(tagName);
    }

    if (tagName === 'object') {
        elemAttributes.type = 'image/svg+xml';
    }

    setAttributes(elem, elemAttributes);

    return elem;
}

function setMedia(mediaQuery, menu) {
    if (mediaQuery.matches) {
        menu.style.setProperty('height', 'auto');
    } else {
        menu.style.setProperty('height', '0px');
    }
}

function createIllustration(id, name, layouts, directory) {
    const illustration = document.querySelector(`#${id}`);

    for (const layout of layouts) {
        const object = createHTMLElement('object',
            {
                'data': `${directory}/illustrations/${layout}/${name}.svg`,
                'class': layout
            });
        illustration.appendChild(object);
    }
}