define(['globals'], function(globals) {
    'use strict';

    var base = {

        alertFallback: globals.alertFallback,
        htmlSnippetsURL: globals.htmlSnippetsURL,
        htmlSnippets: '',
        logstyleInfo: globals.logstyleInfo,

        init: function() {
            this.defineConsoleLog();
            this.placeholderFallback();
            this.outerhtmlFallback();
            this.loadHtmlSnippets();
            console.log('%c' + this.htmlSnippetsURL, this.logstyleInfo);
            console.log(base.htmlSnippets);
        },

        /* Define console.log */
        defineConsoleLog: function defineConsoleLogFn() {
            if (typeof console === 'undefined' || typeof console.log === 'undefined') {
                /*bases console:true*/
                console = {};
                if (this.alertFallback) {
                    console.log = function(msg) {
                        alert(msg);
                    };
                } else {
                    console.log = function() {};
                }
            }
        },

        /* Placeholder fallback */
        placeholderFallback: function placeholderFallback() {
            /*bases Modernizr:true*/
            if (!Modernizr.input.placeholder) {
                $('[placeholder]').focus(function() {
                    var input = $(this);
                    if (input.val() === input.attr('placeholder')) {
                        input.val('').removeClass('placeholder');
                    }
                }).blur(function() {
                    var input = $(this);
                    if (input.val() === '') {
                        input.val(input.attr('placeholder')).addClass('placeholder');
                    }
                }).blur();
                $('form').submit(function() {
                    $('[placeholder]', this).each(function() {
                        var input = $(this);
                        if (input.val() === input.attr('placeholder')) {
                            input.val('').removeClass('placeholder');
                        }
                    });
                });
            }
        },

        outerhtmlFallback: function outerhtmlFallback() {
            $.fn.outerHTML = function() {

                // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
                return (!this.length) ? this : (this[0].outerHTML || (
                    function(el) {
                        var div = document.createElement('div');
                        div.appendChild(el.cloneNode(true));
                        var contents = div.innerHTML;
                        div = null;
                        return contents;
                    })(this[0]));
            };
        },

        /* Load HTML snippets */
        loadHtmlSnippets: function loadHtmlSnippets() {
            $.ajax({
                url: this.htmlSnippetsURL,
                datatype: 'text/html',
                async: false,
                success: function(data) {
                    base.htmlSnippets = data;
                }
            });
        }

    };

    return base;
});