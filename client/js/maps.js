var SVGfile = ".svg"
var PNGfile = ".png"
var JPGfile = ".jpg"
var GIFfile = ".gif"
var terrainMapCSS = "_terrain"
var politicalMapCSS = "_political"
var urlCSSinMaps = "url(/client/img/maps/"
var urlCSSout = ")"

var mapFiles = {
    "enetivia": (urlCSSinMaps + "EnetiviaSVG" + SVGfile + urlCSSout),
    "vespazium": (urlCSSinMaps + "VespaziumSVG" + SVGfile + urlCSSout),
}
var mapNames = {
    "enetivia": "Enetivia",
    "vespazium": "Vespazium",
}
var mapInfo = {
    "enetivia": "A mass of land sandwiched in between two seas. No real need for Navies on this map.",
    "vespazium": "A Peninsula with a few islands around it that can be used as Trade Hubs.",
}
var mapTypes = {
    "enetivia": "Isthmus",
    "vespazium": "Peninsula",
}
var mapColonies = {
    "enetivia": 24,
    "vespazium": 24,
}