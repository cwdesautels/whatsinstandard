require.config({
    paths: {
        app: 'js/app',
        jquery: 'http://code.jquery.com/jquery-1.10.1.min',
        bootstrap: 'js/libs/bootstrap.min'
    }
});

// Start the main app logic.
require(
    ['jquery'],

    function ($) {
        console.log("App Initialized");
    }
);