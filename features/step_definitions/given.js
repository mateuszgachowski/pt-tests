import { components, pages, clicks, actions } from './globals';


module.exports = function () {
    'use strict';

    const availablePages = Object.keys(pages);

    // Constructs universal expression made from `pages` variable keys, e.g.
    //   /^I am on the ProTipster (home|match|picks|...) page$/
    const pagesRegExp = new RegExp(
        `^I am on the ProTipster (${availablePages.join('|')}) page$`
    );

    // I am on the ProTipster <page> page
    this.Given(pagesRegExp, function (page) {
        return pages[page].visit();
    });

    this.Given(/^I do nothing$/, function () {
        return true;
    });

    this.Given(/^I wait (\d+) seconds$/, function (seconds) {
        return browser.pause(seconds * 1000);
    });

};
