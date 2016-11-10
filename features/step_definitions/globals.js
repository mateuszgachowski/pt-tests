// jshint -W117, -W097

'use strict';


export const pages = {
    tips:       require('../pages/tips'),
};

export const clicks = {
    'pro tip add to coupon': () =>
        pages.tips.addProToCoupon(),
    'pro tip unlock': () =>
        pages.tips.clickProUnlockLink(),
    'link to pick page': () =>
        pages.tips.clickLinkToPickPage(),
    'link to non-pro pick page': () =>
        pages.tips.clickLinkToNonProPickPage(),
    'link to pro pick page': () =>
        pages.tips.clickLinkToProPickPage(),
    'first tip sport': () =>
        pages.tips.clickOnFirstTipSport(),
    'first tip category': () =>
        pages.tips.clickOnFirstTipCategory(),
    'first tip tournament': () =>
        pages.tips.clickOnFirstTipTournament(),
};
