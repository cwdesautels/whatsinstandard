require.config({
    paths: {
        app: 'app',
        jquery: 'http://cwdesautels.github.io/libs/js/jquery-1.10.2.min',
        bootstrap: 'http://cwdesautels.github.io/libs/js/bootstrap-3.0.0.min',
        scrapper: 'scrapper'
    }
});

// Start the main app logic.
require([
    'jquery',
    'scrapper'
], function ($, Scrapper) {
    console.log("App Initialized");

    var cb = function(e, payload) {
        console.log(e);
        console.log(payload);
    };

    Scrapper.scrap({}, cb);
});