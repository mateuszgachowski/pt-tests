import { components, pages, clicks, actions } from './globals';

module.exports = function () {
    'use strict';

    const availableClicks = Object.keys(clicks);

    // Constructs universal expression made from `clicks` variable keys, e.g.
    //   /^I click on the (sign-up|login|buy-link|...)$/
    const clicksRegExp = new RegExp(
        `^I click on the (${availableClicks.join('|')})$`
    );

    // I click on the <element>
    this.When(clicksRegExp, function (clickedElement) {
        return clicks[clickedElement]();
    });

    this.When(/^I refresh the page$/, function () {
        return this.browser.refresh();
    });

    this.When(/^I click on the (.*) sport filter$/, function (filter) {
        return pages.tips.clickOnSportFilter(filter);
    });

    this.When(/^I click on the rating system info icon$/, function () {
        return pages.tips.clickOnRatingSystemInfoIcon();
    });
};
