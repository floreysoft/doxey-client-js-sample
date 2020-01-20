const doxeyapi = require('doxey-client-js');

var url = "https://api.doxey.io/merge";

window.addEventListener("load", () => {
    var btn = document.querySelector("#convert");
    btn.addEventListener("click", () => {
        var locale = document.getElementById("locale").value;
        var timezone = document.getElementById("timezone").value;
        var currency = document.getElementById("currency").value;
        var format = document.getElementById("format").value;
        var apiKey = document.getElementById("apikey").value;
        var model = JSON.parse(document.getElementById("model").value);

        if (document.getElementById('thefile').files.length > 0) {
            var files = document.getElementById('thefile').files;
            doxeyapi.doConvertInput(url, files, format, model, locale, timezone, currency, apiKey);
        } else {
            var template = document.getElementById("template").value;
            doxeyapi.doConvertUrl(url, template, format, model, locale, timezone, currency, apiKey);
        }
    });
});