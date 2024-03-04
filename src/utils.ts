import React from "react";

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