function Page() {
    'use strict';

    this.hosts = {
        prod: 'https://www.protipster.com',
    };

    this.uri = '/';
}

Page.prototype = {

    host() {
        'use strict';

        // only prod testing here
        return this.hosts['prod'];
    },

    hostNoCredentials() {
        return this.host().replace(/.*?\:.*?\@/, '');
    },

    visit() {
        'use strict';

        return browser.url(this.host() + this.uri);
    },

};

module.exports = Page;
