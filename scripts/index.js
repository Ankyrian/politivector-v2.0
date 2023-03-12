(async function () {
    const locales = ['en', 'tr'];
    const locale = Util.getLocale(locales);
    const textData = await Util.getLocaleJSON(locale);
    Util.setAssetDirectory('/assets/index');

    const body = document.querySelector('body');
    const container = Util.createObjectHTML('div', {'class': 'grid-container'});
    const menu = new Menu(locale, locales, textData["menu"]);
    const select = createSelect(textData["test-select"]);
    const banner = createBanner(select, textData["banner"]);
    const hero = Util.createIllustration('hero', true);
    const features = createFeatures(textData["features"]);
    const visualInfo = Util.createIllustration('visual-info', true);
    const info = new Info(locale, textData["info"]);
    const goals = createGoals(textData["goals"]);
    const visualGoals = Util.createIllustration('visual-goals', false);
    const footer = new Footer(locale, textData["footer"]);

    container.append(menu.getHeader(), menu.getMenu(), banner, hero, features, visualInfo, info.getInfo(), goals, visualGoals);
    body.append(select, container, footer.getFooter());

    menu.menuIcon.addEventListener('click', () => menu.handleClick(menu));
    window.addEventListener('click', (event) => menu.languageSelector.handleClickOut(event, menu));
    info.accordion.setEventListeners();
})();

function createBanner(select, data) {
    const banner = Util.createObjectHTML('div', {'id': 'banner'});

    const title = Util.createObjectHTML('p', {'id': 'title', 'data-locale': 'title'});
    title.innerHTML = data[title.getAttribute('data-locale')];

    const subtitle = Util.createObjectHTML('p', {'id': 'subtitle', 'data-locale': 'subtitle'});
    subtitle.innerText = data[subtitle.getAttribute('data-locale')];

    const buttonContainer = Util.createObjectHTML('div', {'class': 'button-container'});

    const primaryButton = Util.createObjectHTML('button', {'class': 'button primary', 'data-locale': 'button-primary'});
    primaryButton.innerText = data[primaryButton.getAttribute('data-locale')];

    const secondaryButton = Util.createObjectHTML('button', {'class': 'button secondary', 'data-locale': 'button-secondary'});
    secondaryButton.innerText = data[secondaryButton.getAttribute('data-locale')];

    buttonContainer.append(primaryButton, secondaryButton);

    banner.append(title, subtitle, buttonContainer);

    primaryButton.addEventListener('click', () => {
        select.style.setProperty('display', 'flex');
        document.body.style.setProperty('overflow', 'hidden');
    });

    secondaryButton.addEventListener('click', () => {
        window.location.href = 'plans.html'
    });

    return banner;
}

function createFeatures(data) {
    const features = Util.createObjectHTML('div', {'id': 'features'});

    const title = Util.createObjectHTML('p', {'class': 'section-title', 'data-locale': 'title'});
    title.innerHTML = data[title.getAttribute('data-locale')];

    const featureContainer = Util.createObjectHTML('div', {'class': 'feature-container'});

    const featureList = ['comprehensive', 'international', 'anonymous', 'evolving'];

    for (const name of featureList) {
        const feature = Util.createObjectHTML('div', {'class': 'feature'});

        const object = Util.createObjectHTML('object',
            {
                'data': `${Util.getAssetDirectory()}/features/${name}.svg`,
                'class': 'feature-icon'
            });

        const title = Util.createObjectHTML('p', {'class': 'feature-title', 'data-locale': `${name}-title`});
        title.innerHTML = data[title.getAttribute('data-locale')];

        const text = Util.createObjectHTML('p', {'class': 'feature-text', 'data-locale': `${name}-text`});
        text.innerText = data[text.getAttribute('data-locale')];

        feature.append(object, title, text);
        featureContainer.appendChild(feature);
    }

    features.append(title, featureContainer);

    return features;
}

function createGoals(data) {
    const goals = Util.createObjectHTML('div', {'id': 'goals'});

    const title = Util.createObjectHTML('p', {'class': 'section-title', 'data-locale': 'title'});
    title.innerHTML = data['title'];

    goals.appendChild(title);

    const goalList = ['experience', 'data', 'reports'];

    for (const name of goalList) {
        const goal = Util.createObjectHTML('div', {'class': 'paragraph-item'});

        const title = Util.createObjectHTML('p', {'class': 'semi-bold', 'data-locale': `${name}-title`});
        title.innerText = data[title.getAttribute('data-locale')];

        const text = Util.createObjectHTML('p', {'data-locale': `${name}-text`});
        text.innerText = data[text.getAttribute('data-locale')];

        goal.append(title, text);
        goals.appendChild(goal);
    }

    return goals;
}