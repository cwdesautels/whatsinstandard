require.config({
    paths: {
        app: 'js/app',
        jquery: 'http://cwdesautels.github.io/libs/js/jquery-1.10.2.min',
        bootstrap: 'http://cwdesautels.github.io/libs/js/bootstrap-3.0.0.min'
    }
});

// Start the main app logic.
require(
    ['jquery'],

    function ($) {
        console.log("App Initialized");
    }
);