import React from "react";

export function darkenColor(color: string, percent:number) {
    color = color.replace('#', '');

    var r = parseInt(color.substring(0,2),16);
    var g = parseInt(color.substring(2,4),16);
    var b = parseInt(color.substring(4,6),16);

    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));

    r = (r < 0) ? 0 : ((r > 255) ? 255 : r);
    g = (g < 0) ? 0 : ((g > 255) ? 255 : g);
    b = (b < 0) ? 0 : ((b > 255) ? 255 : b);

    var result = '#' + (r < 16 ? '0' : '') + r.toString(16) +
                        (g < 16 ? '0' : '') + g.toString(16) +
                        (b < 16 ? '0' : '') + b.toString(16);

    return result;
}

export function lightenColor(color: string, percent: number) {
    color = color.replace('#', '');

    var r = parseInt(color.substring(0,2),16);
    var g = parseInt(color.substring(2,4),16);
    var b = parseInt(color.substring(4,6),16);

    r = Math.floor(r + (255 - r) * percent / 100);
    g = Math.floor(g + (255 - g) * percent / 100);
    b = Math.floor(b + (255 - b) * percent / 100);

    r = (r < 0) ? 0 : ((r > 255) ? 255 : r);
    g = (g < 0) ? 0 : ((g > 255) ? 255 : g);
    b = (b < 0) ? 0 : ((b > 255) ? 255 : b);

    var result = '#' + (r < 16 ? '0' : '') + r.toString(16) +
                        (g < 16 ? '0' : '') + g.toString(16) +
                        (b < 16 ? '0' : '') + b.toString(16);

    return result;
}

export function debounce(func: Function, wait: number, immediate?: boolean) {
    var timeout: any = React.useRef(null);

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout.current = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout.current);

        timeout.current = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

export function round(value: number, precision: number) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}