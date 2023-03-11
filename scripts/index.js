(function () {
    const assetDirectory = '/assets/index';

    const menuIcon = createHeader();
    createMenu(menuIcon);
    createBanner();
    createPopup();
    createIllustration('hero', 'hero', ['mobile', 'desktop'], assetDirectory);
    createFeatures(assetDirectory);
    createIllustration('visual-info', 'info', ['mobile', 'desktop'], assetDirectory);
    createAccordion();
    createGoals();
    createIllustration('visual-goals', 'goals', ['desktop'], assetDirectory);
    createFooter();

    changeLanguage();
})();

function createBanner() {
    const banner = document.querySelector('#banner');
    const select = document.querySelector('#select');

    const title = createHTMLElement('p', {'id': 'title', 'data-locale': 'banner-title'});

    const subtitle = createHTMLElement('p', {'id': 'subtitle', 'data-locale': 'banner-subtitle'});

    const buttonContainer = createHTMLElement('div', {'class': 'button-container'});

    const primaryButton = createHTMLElement('button', {'class': 'button primary', 'data-locale': 'banner-button-primary'});

    const secondaryButton = createHTMLElement('button', {'class': 'button secondary', 'data-locale': 'banner-button-secondary'});

    buttonContainer.append(primaryButton, secondaryButton);

    banner.append(title, subtitle, buttonContainer);

    primaryButton.addEventListener('click', () => {
        select.style.setProperty('display', 'flex');
        document.body.style.setProperty('overflow', 'hidden');
    });

    secondaryButton.addEventListener('click', () => {
        window.location.href = 'plans.html'
    });
}

function createFeatures(assetDirectory) {
    const features = document.querySelector('#features');

    const title = createHTMLElement('p', {'class': 'section-title', 'data-locale': 'features-title'});
    features.appendChild(title);

    const featureContainer = createHTMLElement('div', {'class': 'feature-container'});

    const featureList = ['comprehensive', 'international', 'anonymous', 'evolving'];

    for (const name of featureList) {
        const feature = createHTMLElement('div', {'class': 'feature'});

        const object = createHTMLElement('object',
            {
                'data': `${assetDirectory}/features/${name}.svg`,
                'class': 'feature-icon'
            });

        const title = createHTMLElement('p', {'class': 'feature-title', 'data-locale': `feature-${name}-title`});

        const text = createHTMLElement('p', {'class': 'feature-text', 'data-locale': `feature-${name}-text`});

        feature.append(object, title, text);
        featureContainer.appendChild(feature);
    }

    features.appendChild(featureContainer);
}

function createGoals() {
    const goals = document.querySelector('#goals');

    const title = createHTMLElement('p', {'class': 'section-title', 'data-locale': 'goals-title'});
    goals.appendChild(title);

    const goalList = ['experience', 'data', 'reports'];

    for (const name of goalList) {
        const goal = createHTMLElement('div', {'class': 'paragraph-item'});
        const title = createHTMLElement('p', {'class': 'semi-bold', 'data-locale': `goals-${name}-title`});
        const text = createHTMLElement('p', {'data-locale': `goals-${name}-text`});
        goal.append(title, text);
        goals.appendChild(goal);
    }
}