import { components, pages, clicks, actions } from './globals';

module.exports = function () {
    'use strict';


    this.Then(/^I should land on (.*) url$/, function (expectedPath) {
        // Turn full URL to absolute path
        const path = browser.getUrl().replace(/https?:\/\/.*?\//, '/');

        expect(path).toBe(expectedPath);
    });

    this.Then(/^url should change from (.*)$/, function (previousPath) {
        // Turn full URL to absolute path
        const path = browser.getUrl().replace(/https?:\/\/.*?\//, '/');

        expect(path).not.toBe(previousPath);
    });

    this.Then(/^I should see ranked list of tips$/, function () {
        expect(pages.tips.isRankedTipsVisible()).toBe(true);
    });

    this.Then(/^I should see accordingly ranked list of tips$/, function () {
        expect(pages.tips.isTipsListAccordinglyRanked()).toBe(true);
    });

    this.Then(/^I should see modal with rating system info$/, function () {
        expect(pages.tips.isRatingSystemModalVisible()).toBe(true);
    });
};
