class Info {
    constructor(locale, data) {
        this.info = Util.createObjectHTML('div', {'id': 'info'});

        const title = Util.createObjectHTML('p', {'class': 'section-title', 'data-locale': 'title'});
        title.innerHTML = data[title.getAttribute('data-locale')];
        this.info.appendChild(title);

        this.accordion = new Accordion(locale, data);
        this.info.appendChild(this.accordion.getAccordion());
    }

    getInfo() {return this.info}
}

class Accordion {
    constructor(locale, data) {
        this.data = data;
        this.clickables = [];
        this.textHeight = 0;

        this.createAccordion();
    }

    createAccordion() {
        this.accordion = Util.createObjectHTML('div', {'class': 'dropdown'});

        for (let i = 1; i <= 3; i++) {
            const item = this.createItem(i);
            this.accordion.appendChild(item);
        }
    }

    createItem(i) {
        const item = Util.createObjectHTML('div', {'class': 'accordion-item'});

        const titleDiv = Util.createObjectHTML('div', {'class': 'accordion-title'});
        const title = Util.createObjectHTML('p', {'data-locale': `accordion-title-${i}`});
        title.innerText = this.data[title.getAttribute('data-locale')];
        const arrow = Util.createObjectHTML('div', {'class': 'arrow'});
        titleDiv.append(title, arrow);

        this.clickables.push(titleDiv);

        const textDiv = Util.createObjectHTML('div', {'class': 'accordion-text'});
        const text = Util.createObjectHTML('p', {'data-locale': `accordion-text-${i}`});
        text.innerHTML = this.data[text.getAttribute('data-locale')];
        textDiv.appendChild(text);

        item.append(titleDiv, textDiv);

        return item;
    }

    setEventListeners() {
        for (const titleDiv of this.clickables) {
            titleDiv.addEventListener('click', () => {
                this.handleDrop(titleDiv.parentElement);
            });

            const height = titleDiv.parentElement.children[1].children[0].clientHeight;
            if (height > this.textHeight) {
                this.textHeight = height;
            }
        }

        this.clickables[0].click();
    }

    getAccordion() {return this.accordion};

    handleDrop(item) {
        const arrow = item.children[0].children[1];
        const textDiv = item.children[1];

        const items = item.parentElement.children;

        for (const sibling of items) {
            if (sibling === item) {
                continue;
            }

            const siblingArrow = sibling.children[0].children[1];
            const siblingText = sibling.children[1];

            if (siblingArrow.getAttribute('class') === 'arrow down') {
                siblingArrow.setAttribute('class', 'arrow right');
                siblingText.style.setProperty('height', '0');
            }
        }

        if (arrow.getAttribute('class') !== 'arrow down') {
            arrow.setAttribute('class', 'arrow down');
            textDiv.style.setProperty('height', `${this.textHeight}px`);
        }
    }
}