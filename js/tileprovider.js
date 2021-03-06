/*jslint
  indent: 4
*/

/*global
  google
*/


function tileUrl(template, servers, coord, zoom) {
    'use strict';

    var limit = Math.pow(2, zoom),
        x = ((coord.x % limit) + limit) % limit,
        y = coord.y,
        s = servers[(Math.abs(x + y)) % servers.length];

    return template.replace(/%s/, s).replace(/%x/, x).replace(/%y/, y).replace(/%z/, zoom);
}


function osmProvider(name) {
    'use strict';

    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return tileUrl("http://%s.tile.openstreetmap.org/%z/%x/%y.png", ["a", "b", "c"], coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: name,
        alt: "OpenStreetMap",
        maxZoom: 18
    });
}


function osmDeProvider(name) {
    'use strict';

    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return tileUrl("http://%s.tile.openstreetmap.de/tiles/osmde/%z/%x/%y.png", ["a", "b", "c"], coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: name,
        alt: "OpenStreetMap (german style)",
        maxZoom: 18
    });
}


function ocmProvider(name) {
    'use strict';

    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return tileUrl("http://%s.tile.opencyclemap.org/cycle/%z/%x/%y.png", ["a", "b", "c"], coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: name,
        alt: "OpenCycleMap",
        maxZoom: 17
    });
}


function thunderforestOutdoorsProvider(name) {
    'use strict';

    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return tileUrl("http://%s.tile.thunderforest.com/outdoors/%z/%x/%y.png", ["a", "b", "c"], coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: name,
        alt: "Thunderforest Outdoors",
        maxZoom: 18
    });
}


function opentopomapProvider(name) {
    'use strict';

    return new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return tileUrl("https://%s.tile.opentopomap.org/%z/%x/%y.png", ["a", "b", "c"], coord, zoom);
        },
        tileSize: new google.maps.Size(256, 256),
        name: name,
        alt: "OpenTopoMap",
        maxZoom: 15
    });
}
