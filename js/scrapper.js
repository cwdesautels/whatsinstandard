define([
    'jquery',
    'jquery.xdomainajax'
], function($) {
    return {
        scrap: function(properties, callback) {
            $.ajax({
                url: properties.url,
                type: 'GET',
                success: function(response) {
                    callback.call(this, undefined, {
                        url: properties.url
                    });
                    console.log(response);
                },
                error: function(response) {
                    callback.call(this, 'XHR failed at URL: ' + properties.url);
                    console.log(response);
                }
            });
        }
    };
});