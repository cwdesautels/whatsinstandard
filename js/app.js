require.config({
    paths: {
        // Libs via Github CDN
        jquery: 'http://cwdesautels.github.io/libs/js/jquery-1.10.2.min',
        bootstrap: 'http://cwdesautels.github.io/libs/js/bootstrap-3.0.0.min',
        // Local app modules
        app: 'app',
        scrapper: 'scrapper',
        urls: 'urls'
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
    'urls'
], function ($, Scrapper, Urls) {
    console.log("App Initialized");

    // Scrap legal set data off of url constant with stored regex
    Scrapper.scrap({
        url: Urls.legalSetUrl
    }, function(e, payload) {
        if (e) {
            console.log(e);
        }
        else {
            console.log(JSON.stringify(payload));
        }
    });
});