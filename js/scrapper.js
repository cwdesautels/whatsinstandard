define([
    'jquery'
], function($) {
    var Scrapper = function(){

    };

    Scrapper.prototype.scrap = function(properties, callback) {
        if (typeof callback === 'function') {
            callback.call(this, undefined, {
                asdasd: "ASDASD"
            })
        }
    };

    return new Scrapper();
});