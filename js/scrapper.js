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
                    if (properties.regex.test(response.responseText)) {
                        var result;

                        while ((result = properties.regex.exec(response.responseText)) !== null) {
                            callback.call(this, undefined, {
                                result: result[1]
                            });
                        }
                    }
                    else {
                        callback.call(this, 'Regex match failed for [' + properties.regex.toString() + ']');
                    }
                },
                error: function(response) {
                    callback.call(this, 'XHR failed at URL [' + properties.url + ']');
                }
            });
        }
    };
});