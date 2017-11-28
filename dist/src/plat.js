'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = plat;
function plat(str) {
    var translation = str;

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    var length = translation.length;
    if (length >= 10) {
        var primera = translation.slice(0, Math.round(length / 2));
        var segunda = translation.slice(Math.round(length / 2));

        translation = primera + '-' + segunda;
    }
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalze = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalze ? char.toUpperCase() : char.toLowerCase();
            capitalze = !capitalze;
        }
        return translation;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}