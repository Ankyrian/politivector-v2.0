class Footer {
    constructor(locale, data) {
        this.data = data;

        function Item(page, links) {
            this.page = page;
            this.links = links;
        }

        this.items = [
            new Item(
                {name: 'Home', href: 'index.html'},
                [
                    {name: 'Features', href: 'features'},
                    {name: 'Information', href: 'info'},
                    {name: 'Goals', href: 'goals'}
                ]
            ),
            new Item(
                {name: 'Future Plans', href: 'plans.html'},
                [
                    {name: 'Questions', href: 'questions'},
                    {name: 'Data', href: 'data'},
                    {name: 'Results', href: 'results'}
                ]
            ),
            new Item(
                {name: 'Take the Test', href: ''},
                [
                    {name: 'Complete Test', href: ''},
                    {name:'Basic Test', href: ''},
                ]
            )
        ];

        this.createFooter();
    }

    getFooter() {return this.footer}

    createFooter() {
        this.footer = Util.createObjectHTML('footer');

        const footerDiv = Util.createObjectHTML('div', {'id': 'footer'});
        const footerList = this.createList();
        const feedbackBox = this.createFeedbackBox();

        footerDiv.append(footerList, feedbackBox);
        this.footer.appendChild(footerDiv);
    }

    createList() {
        const list = Util.createObjectHTML('div', {'class': 'footer-list'});

        for (const itemObject of this.items) {
            const item = Util.createObjectHTML('div', {'class': 'footer-item'});

            const page = Util.createObjectHTML('a', {'href': itemObject.page.href, 'class': 'semi-bold', 'data-locale': `footer-${itemObject.page.name}`});
            page.innerText = this.data[page.getAttribute('data-locale')];
            item.appendChild(page);

            for (const section of itemObject.links) {
                const sectionAnchor = Util.createObjectHTML('a', {'href': `${itemObject.page.href}#${section.href}`, 'data-locale': `footer-${section.name}`});
                sectionAnchor.innerText = this.data[sectionAnchor.getAttribute('data-locale')];
                item.appendChild(sectionAnchor);
            }

            list.appendChild(item);
        }

        return list;
    }

    createFeedbackBox() {
        const feedbackBox = Util.createObjectHTML('div', {'class': 'feedback-box'});
        const label = Util.createObjectHTML('label', {'for': 'feedback', 'class': 'semi-bold', 'data-locale': 'footer-feedback-title'});
        label.innerText = this.data[label.getAttribute('data-locale')];

        const form = Util.createObjectHTML('form', {'action': '', 'method': 'post'});
        const textArea = Util.createObjectHTML('textarea', {'id': 'feedback'});
        const submitButton = Util.createObjectHTML('input',
            {
                'type': 'button',
                'name': 'submit-feedback',
                'value': this.data['footer-submit-button'],
                'class': 'button secondary'
            });
        form.append(textArea, submitButton);
        feedbackBox.append(label, form);

        return feedbackBox;
    }
}