function createFooter() {
    const footer = document.querySelector('footer');

    const footerDiv = createHTMLElement('div', {'id': 'footer'});
    const footerList = createHTMLElement('div', {'class': 'footer-list'});

    function FooterItem(page, sections) {
        this.page = page;
        this.sections = sections;
    }

    const footerItemList = [
        new FooterItem(
            {name: 'Home', href: 'index.html'},
            [
                {name: 'Features', href: 'features'},
                {name: 'Information', href: 'info'},
                {name: 'Goals', href: 'goals'}
            ]
        ),
        new FooterItem(
            {name: 'Future Plans', href: 'plans.html'},
            [
                {name: 'Questions', href: 'questions'},
                {name: 'Data', href: 'data'},
                {name: 'Results', href: 'results'}
            ]
        ),
        new FooterItem(
            {name: 'Take the Test', href: ''},
            [
                {name: 'Complete Test', href: ''},
                {name:'Basic Test', href: ''},
            ]
        )
    ];

    for (const itemObject of footerItemList) {
        const item = createHTMLElement('div', {'class': 'footer-item'});

        const page = createHTMLElement('a', {'href': itemObject.page.href, 'class': 'semi-bold'});
        page.innerText = itemObject.page.name;
        item.appendChild(page);

        for (const section of itemObject.sections) {
            const sectionAnchor = createHTMLElement('a', {'href': `${itemObject.page.href}#${section.href}`});
            sectionAnchor.innerText = section.name;
            item.appendChild(sectionAnchor);
        }

        footerList.appendChild(item);
    }

    const feedbackBox = createHTMLElement('div', {'class': 'feedback-box'});
    const label = createHTMLElement('label', {'for': 'feedback', 'class': 'semi-bold'});
    label.innerText = 'Give us your feedback';

    const form = createHTMLElement('form', {'action': '', 'method': 'post'});
    const textArea = createHTMLElement('textarea', {'id': 'feedback'});
    const submitButton = createHTMLElement('input',
        {
            'type': 'button',
            'name': 'submit-feedback',
            'value': 'Submit feedback',
            'class': 'button secondary'
        });
    form.append(textArea, submitButton);
    feedbackBox.append(label, form);

    footerDiv.append(footerList, feedbackBox);

    footer.appendChild(footerDiv);
}