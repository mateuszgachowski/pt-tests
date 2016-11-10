const Page = require('./page');

class Tips extends Page {

    constructor () {
        super();

        this.uri = '/tips';

        // Page Selectors
        this.sportFilters         = '.sport-selector__sport';
        this.tipsWrapper          = '.tips-component__content';
        this.tipComponent         = '.tip-component';
        this.proTipComponent      = `${this.tipComponent}--pro`;
        this.regularTipComponent  = `${this.tipComponent}:not(${this.proTipComponent})`;
        this.rankedTip            = `${this.tipComponent} .rating-component`;
        this.rankValue            = `${this.tipComponent} .rating-component .rating-component__value`;
        this.goToPickPage         = `${this.tipComponent} .outcome-component__details`;
        this.goToNonProPickPage   = `${this.regularTipComponent} .outcome-component__details`;
        this.goToProPickPage      = `${this.tipComponent}.tip-component--pro .outcome-component__details`;
        this.predictionRegular    = `${this.regularTipComponent} .outcome-component__prediction`;
        this.predictionPro        = `${this.proTipComponent} .outcome-component__prediction`;
        this.unlockPro            = `${this.tipComponent}.tip-component--pro .outcome-component [data-show-outcome]`;
        this.tipBreadcrumbs       = `${this.tipComponent} .category-component`;
        this.tipSport             = `${this.tipBreadcrumbs} .category-component__icon`;
        this.tipCategory          = `${this.tipBreadcrumbs} .category-component__link:nth-of-type(2)`;
        this.tipTournament        = `${this.tipBreadcrumbs} .category-component__link:nth-of-type(3)`;
        this.ratingSystemInfoIcon = `${this.tipComponent} .rating-component .rating-component__info`;
        this.ratingSystemModal    = `#modal-rating-system .explanation-dialog__content`;

        // Coupon Related
        this.addedToCoupon       = '.action-component--added';
        this.addToCouponInactive = '.action-component--inactive';
        this.addToCouponLink     = `.action-component:not(${this.addedToCoupon}):not(${this.addToCouponInactive})`;
        this.addPro              = `${this.proTipComponent} ${this.addToCouponLink}`;
        this.addNonPro           = `${this.regularTipComponent} ${this.addToCouponLink}`;
    }

    visit () {
        super.visit();
        browser.defaultWait(this.tipComponent);
    }

    clickOnSportFilter (filter) {
        const filters = ['All Sports','Football','Basketball','Tennis','Ice Hockey','Baseball','American Football'];
        const filterIndex = filters.indexOf(filter);

        if (filterIndex === -1) {
            throw new Error(`Unknown sport to open "${filter}" on tips page`);
        }

        const filterSelector = `${this.sportFilters}:nth-child(${filterIndex + 1})`;

        // browser.scrollTo(filterSelector);

        return browser.click(filterSelector);
    }

    clickOnFirstTipSport () {
        // Amend selector to pick element for the first tip only
        const selector = `${this.tipsWrapper} > :first-of-type ${this.tipSport}`;

        browser.scrollTo(selector);
        return browser.click(selector);
    }

    clickOnFirstTipCategory () {
        // Amend selector to pick element for the first tip only
        const selector = `${this.tipsWrapper} > :first-of-type ${this.tipCategory}`;

        browser.scrollTo(selector);
        return browser.click(selector);
    }

    clickOnFirstTipTournament () {
        // Amend selector to pick element for the first tip only
        const selector = `${this.tipsWrapper} > :first-of-type ${this.tipTournament}`;

        browser.scrollTo(selector);
        return browser.click(selector);
    }

    clickProUnlockLink () {
        browser.defaultWait(this.unlockPro);

        return browser.click(this.unlockPro);
    }

    addToCoupon (selector = '', index = 1) {
        browser.defaultWait(selector);

        const elements  = browser.elements(selector).value;
        const elementId = elements[index - 1].ELEMENT;

        browser.scrollToElementId(elementId);
        return browser.elementIdClick(elementId);
    }

    addProToCoupon (index = 1) {
        return this.addToCoupon(this.addPro, index);
    }

    addNonProToCoupon (index = 1) {
        return this.addToCoupon(this.addNonPro, index);
    }

    clickLinkToPickPage () {
        const selector = this.goToPickPage;

        browser.defaultWait(selector);

        const elementId = browser.elements(selector).value[0].ELEMENT;

        browser.scrollToElementId(elementId);
        return browser.elementIdClick(elementId);
    }

    clickLinkToNonProPickPage () {
        const selector = this.goToNonProPickPage;

        browser.defaultWait(selector);

        const elementId = browser.elements(selector).value[0].ELEMENT;

        browser.scrollToElementId(elementId);
        return browser.elementIdClick(elementId);
    }

    clickLinkToProPickPage () {
        const selector = this.goToProPickPage;

        browser.defaultWait(selector);

        const elementId = browser.elements(selector).value[0].ELEMENT;

        browser.scrollToElementId(elementId);
        return browser.elementIdClick(elementId);
    }

    clickOnRatingSystemInfoIcon () {
        return browser.element(this.ratingSystemInfoIcon).click();
    }

    isRankedTipsVisible () {
        return browser.defaultWait(this.rankedTip);
    }

    isTipsListAccordinglyRanked () {
        const elements = browser.elements(this.rankValue).value;
        const ranks    = elements.map((element) => browser.elementIdText(element.ELEMENT).value);

        return ranks.toString() === ranks.sort().reverse().toString();
    }

    isRatingSystemModalVisible () {
        browser.defaultWait(this.ratingSystemModal);
        return browser.element(this.ratingSystemModal).isVisible();
    }
}

module.exports = new Tips();
