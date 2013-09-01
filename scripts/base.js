/**
* base JavaScript Object
*
* @author  Zone
* @url     http://www.zonecontent.com/
* @copyright   Copyright (c) 2012, zonecontent.com. All rights reserved.
* @version 1.0.0
*/

var base;

(function ($) {
    base = {

        /* CONSTANTS
        ----------------------------------------------------------------------------- */

        CONSTANTS: {
            /* base */
            ALERT_FALLBACK: false,
            HTML_SNIPPETS_URL: '/scripts/snippets.html',
            LOGSTYLE_INFO:  'background-color: #c5c5f4; padding: 10px; line-height: 3em; font-family: Arial,sans-serif; font-size: 1.1em;'

        },

        animation : {
            'speed' : 350,
            'easing' : 'easeInOutQuad'     
        },

        /* FUNCTIONS
        - init()
        - define_console_log()
        - load_html_snippets()

        ----------------------------------------------------------------------------- */

        init: function initFn() {

        // Initial setup
        base.define_console_log();
        base.placeholder_fallback();
        base.outerhtml_fallback();
        base.load_html_snippets();

    },

    /* Define console.log */
    define_console_log: function define_console_logFn() {
        if (typeof console === 'undefined' || typeof console.log === 'undefined') {
            /*bases console:true*/
            console = {};
            if (base.CONSTANTS.ALERT_FALLBACK) {
                console.log = function(msg) {
                    alert(msg);
                };
            } else {
                console.log = function() {};
            }
        }
    },

    /* Placeholder fallback */
    placeholder_fallback: function placeholder_fallback() {
        /*bases Modernizr:true*/
        if (!Modernizr.input.placeholder) {
            $('[placeholder]').focus(function () {
                var input = $(this);
                if (input.val() === input.attr('placeholder')) {
                    input.val('').removeClass('placeholder');
                }
            }).blur(function () {
                var input = $(this);
                if (input.val() === '') {
                    input.val(input.attr('placeholder')).addClass('placeholder');
                }
            }).blur();
            $('form').submit(function () {
                $('[placeholder]', this).each(function () {
                    var input = $(this);
                    if (input.val() === input.attr('placeholder')) {
                        input.val('').removeClass('placeholder');
                    }
                });
            });
        }
    },

    outerhtml_fallback: function outerhtml_fallback() {
        $.fn.outerHTML = function(){

            // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
            return (!this.length) ? this : (this[0].outerHTML || (
                function(el){
                    var div = document.createElement('div');
                    div.appendChild(el.cloneNode(true));
                    var contents = div.innerHTML;
                    div = null;
                    return contents;
                })(this[0]));
        };
    },

    /* Load HTML snippets */
    load_html_snippets: function load_html_snippets() {
        $.ajax({
            url: base.CONSTANTS.HTML_SNIPPETS_URL,
            datatype: 'text/html',
            async: false,
            success: function(data) {
                base.CONSTANTS.HTML_SNIPPETS = data;
            }
        });
    }


};

base.init();

})(jQuery);