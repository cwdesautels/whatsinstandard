require.config({
    paths: {
        // Libs via Github CDN
        jquery: 'http://cwdesautels.github.io/libs/js/jquery-1.10.2.min',
        bootstrap: 'http://cwdesautels.github.io/libs/js/bootstrap-3.0.0.min',
        // Local app modules
        app: 'app',
        scrapper: 'scrapper',
        util: 'util'
    },
    shim: {
        // CORS hack
        'jquery.xdomainajax': ['jquery']
    }
});

// Start the main app logic
require([
    'jquery',
    'scrapper',
    'util'
], function ($, Scrapper, Utils) {
    console.log("App Initialized");

    Scrapper.scrap({
        url: Utils.legalSetUrl,
        regex: Utils.legalSetRegex
    }, function(e, payload) {
        if (e) {
            console.log(e);
        }
        else {
            console.log(payload);
        }
    });
});