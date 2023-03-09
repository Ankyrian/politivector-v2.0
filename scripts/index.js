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
})();

function createBanner() {
    const banner = document.querySelector('#banner');
    const select = document.querySelector('#select');

    const title = createHTMLElement('p', {'id': 'title'});
    title.innerHTML = 'Get a sense of your <br><span class="semi-bold">ideology</span> with <span class="semi-bold">Politivector</span>.';

    const subtitle = createHTMLElement('p', {'id': 'subtitle'});
    subtitle.innerText = 'A global test designed for a global audience to better comprehend where they stand.';

    const buttonContainer = createHTMLElement('div', {'class': 'button-container'});

    const primaryButton = createHTMLElement('button', {'class': 'button primary'});
    primaryButton.innerText = 'Get Started';

    const secondaryButton = createHTMLElement('button', {'class': 'button secondary'});
    secondaryButton.innerText = 'Learn More';

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

    features.innerHTML = '<p class="section-title">All ideologies.<br><span class="semi-bold">One political test.</span></p>';

    const featureContainer = createHTMLElement('div', {'class': 'feature-container'});

    function Feature(name, title, text) {
        this.name = name;
        this.title = title;
        this.text = text;
    }

    const featureList = [
        new Feature('comprehensive',
            'Fully<br>comprehensive',
            'We evaluate your answers across 24 ideologies, the most numerous among common tests.'),
        new Feature('international',
            'International<br>questions',
            'Our questions are designed with global users in mind, no single country, no single culture.'),
        new Feature('anonymous',
            'Stay<br>anonymous',
            'Information you explicitly provide is all we are going to get. No permission means no data.'),
        new Feature('evolving',
            'Constantly<br>evolving',
            'We do our best to stay up-to-date, and renovate the test according to the results you provide.')
    ];

    for (const featureObject of featureList) {
        const feature = createHTMLElement('div', {'class': 'feature'});

        const object = createHTMLElement('object',
            {
                'data': `${assetDirectory}/features/${featureObject.name}.svg`,
                'class': 'feature-icon'
            });

        const title = createHTMLElement('p', {'class': 'feature-title'});
        title.innerHTML = featureObject.title;

        const text = createHTMLElement('p', {'class': 'feature-text'});
        text.innerHTML = featureObject.text;

        feature.append(object, title, text);
        featureContainer.appendChild(feature);
    }

    features.appendChild(featureContainer);
}

function createGoals() {
    const goals = document.querySelector('#goals');

    goals.innerHTML = '<p class="section-title">What do we plan<br>to <span class="semi-bold">accomplish</span>?</p>';

    function Goal(title, text) {
        this.title = title;
        this.text = text;
    }

    const goalList = [
        new Goal('Provide an experience',
            'This test is a great resource for newcomers to politics to feel their initial beliefs, compare their results with those around them, and get insight on their values. We expect our users to use Politivector as a starting point for their journey to understanding the world, or consider it as the periodic inspection of their ideologies.'),
        new Goal('Gather data',
            'By gathering anonymous data that does not exist anywhere else we wish to map the world’s ideologies, how they shift over time, and how they react to global events. Data driven understanding of how our belief systems behave is invaluable knowledge, and may take an active role in shaping the political landscape for the better.'),
        new Goal('Generate reports',
            'Data is meaningless when its raw information. In order to actualize our vision of providing a useful guide for global ideologies, we have to present this information in informative ways. Politivector will prepare reports of its most recent batches of anonymous data with data analysis and visualization to make a clearer picture of what the world believes.')
    ];

    for (const goalObject of goalList) {
        const goal = createHTMLElement('div', {'class': 'paragraph-item'});
        const title = createHTMLElement('p', {'class': 'semi-bold'});
        title.innerText = goalObject.title;
        const text = document.createElement('p');
        text.innerText = goalObject.text;
        goal.append(title, text);
        goals.appendChild(goal);
    }
}