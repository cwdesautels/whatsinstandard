define([
    'jquery',
    'jquery.xdomainajax'
], function($) {
    var setName = /.*<li><em>(.*)<\/em>.*/img;

    return {
        scrap: function(properties, callback) {
            $.ajax({
                url: properties.url,
                type: 'GET',
                success: function(response) {
                    if (setName.test(response.responseText)) {
                        var payload  = [], temp;

                        while ((temp = setName.exec(response.responseText)) !== null) {
                            payload.push(temp[1].replace(/^<strong>(.*)<\/strong>(.*)$/ig,'$1$2'));
                        }

                        callback.call(this, undefined, payload);
                    }
                    else {
                        callback.call(this, 'Regex match failed for [' + setName.toString() + '] in [' + response.responseText + ']');
                    }
                },
                error: function(response) {
                    callback.call(this, 'XHR failed at URL [' + properties.url + ']');
                }
            });
        }
    };
});