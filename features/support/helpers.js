module.exports = function () {
    'use strict';

    this.Before(function () {
        if (this.browser.scrollModalTo && this.browser.scrollTo && this.browser.scrollToElementId && this.browser.clickVisible && this.browser.defaultWait) {
            return;
        }


        this.browser.addCommand('defaultWait', function (selector, reverse = false) {
            if (!selector) {
                throw new Error(
                    'defaultWait requires selector to be provided, e.g. client.defaultWait(".selector")'
                );
            }

            return browser.waitForExist(selector, 15000, reverse);
        });


        this.browser.addCommand('scrollModalTo', function (selector) {
            if (!selector) {
                throw new Error(
                    'scrollModalTo requires selector to be provided, e.g. client.scrollModalTo(".header")'
                );
            }

            const elementsFound = browser.elements(selector).value.length;

            if (elementsFound > 1) {
                throw new Error(
                    `scrollModalTo requires selector to point to a single element on page, "${selector}" finds ${elementsFound} elements instead. Please make your selector more specific`
                );
            }

            const elementLocation = browser.getLocation(selector, 'y');

            // Detect if modal scroll was successful
            expect(browser.execute((yPosition) => {
                try {
                    document.querySelector('.modal.fade.in').scrollTop = yPosition;
                    return true;
                } catch (error) {
                    return false;
                }
            }, elementLocation).value).toBe(true, '(successful .modal.fade.in scroll)');

            return browser;
        });


        this.browser.addCommand('scrollTo', function (selector) {
            if (!selector) {
                throw new Error(
                    'scrollTo requires selector to be provided, e.g. client.scrollTo(".header")'
                );
            }

            const elementsFound = browser.elements(selector).value.length;

            if (elementsFound > 1) {
                throw new Error(
                    `scrollTo requires selector to point to a single element on page, "${selector}" finds ${elementsFound} elements instead. Please make your selector more specific`
                );
            }

            const elementLocation         = browser.getLocation(selector, 'y');

            return browser.scroll(null, 0, elementLocation);
        });


        this.browser.addCommand('scrollToElementId', function (elementId) {
            if (!elementId) {
                throw new Error(
                    'scrollToElementId requires elementId to be provided, e.g. client.scrollToElementId(542)'
                );
            }

            const elementLocation         = browser.elementIdLocation(elementId).value.y;

            return browser.scroll(null, 0, elementLocation);
        });


        this.browser.addCommand('clickVisible', function (selector) {
            if (!selector) {
                throw new Error(
                    'clickVisible requires selector to be provided, e.g. client.clickVisible(".header")'
                );
            }

            const elements = browser.elements(selector).value;

            if (elements.length === 0) {
                throw new Error(
                    `clickVisible must match at least one element. Zero elements matched "${selector}" selector`
                );
            }

            const visibleElements = elements.filter(element => {
                return browser.elementIdDisplayed(element.ELEMENT).value;
            });

            if (visibleElements.length === 0) {
                throw new Error(
                    `clickVisible didn't found any of the "${selector}" elements to be visible`
                );
            }

            if (visibleElements.length > 1) {
                throw new Error(
                    `clickVisible found more than one visible "${selector}" element. Please make it more specific`
                );
            }

            return browser.elementIdClick(visibleElements[0].ELEMENT);
        });


    });
};
