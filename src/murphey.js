/*
 * Murphey Animation Library
 * A lightweight animation library using CSS + JS
 * Author: Your Name
 * License: MIT
 */
(function(global){
    'use strict';

    function Murphey(selector){
        if(!(this instanceof Murphey)){
            return new Murphey(selector);
        }
        this.elements = document.querySelectorAll(selector);
    }

    Murphey.prototype.css = function(styles){
        this.elements.forEach(el => {
            for(let prop in styles){
                el.style[prop] = styles[prop];
            }
        });
        return this;
    };

    Murphey.prototype.animate = function(props, duration = 1000, easing = 'linear', callback){
        this.elements.forEach(el => {
            el.style.transition = `all ${duration}ms ${easing}`;
            for(let prop in props){
                el.style[prop] = props[prop];
            }
            if(callback){
                setTimeout(callback, duration);
            }
        });
        return this;
    };

    Murphey.prototype.fadeIn = function(duration = 1000){
        this.css({ opacity: 0, display: 'block' });
        setTimeout(() => {
            this.animate({ opacity: 1 }, duration);
        }, 10);
        return this;
    };

    Murphey.prototype.fadeOut = function(duration = 1000){
        this.animate({ opacity: 0 }, duration, 'linear', () => {
            this.css({ display: 'none' });
        });
        return this;
    };

    global.Murphey = Murphey;

})(window);