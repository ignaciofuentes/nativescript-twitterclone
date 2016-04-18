"use strict";
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var view;
var dataLoaded;
var observableTweets;
var that;
var vm;
vm = new observable_1.Observable();
observableTweets = new observable_array_1.ObservableArray([]);
vm.set("tweets", observableTweets);
function loaded(args) {
    view = args.object;
    view.bindingContext = vm;
    observableTweets.push(fetchData().map(function (item) {
        return new observable_1.Observable(item);
    }));
}
exports.loaded = loaded;
;
function fetchData() {
    var tweets = [
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
        { imageUrl: "https://bs2.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6310-fdad-11e5-b02f-f17031d4570f", author: "Ignacio Fuentes", handle: "@ignacioafuentes",
            body: "Does this mean that third-party Whatsapp clients are basically impossible to build? Or nothing has changed on this?" },
        { imageUrl: "https://bs3.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f6311-fdad-11e5-b02f-f17031d4570f", author: "Business Insider", handle: "@businessinsider",
            body: "Here's what Goldman Sachs is paying CEO Lloyd Blankfein to make sure he stays motivated" },
        { imageUrl: "https://bs1.cdn.telerik.com/v1/fuhh34x1s2f0jgyz/356f3c00-fdad-11e5-b02f-f17031d4570f", author: "Telerik", handle: "@telerik",
            body: "Master the perfect split between #iOSDev and #Androiddev. Build native #mobileapps with JavaScript. Free sign-up " },
    ];
    return tweets;
}
//# sourceMappingURL=list.js.map