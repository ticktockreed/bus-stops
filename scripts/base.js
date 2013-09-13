define(['globals'], function(globals) {
    'use strict';

    var base = {

        init: function() {
            this.defineConsoleLog();
            this.placeholderFallback();
            this.outerhtmlFallback();
            this.loadHtmlSnippets();
        },

        /* Define console.log */
        defineConsoleLog: function defineConsoleLogFn() {
            if (typeof console === 'undefined' || typeof console.log === 'undefined') {
                /*bases console:true*/
                console = {};
                if (globals.alertFallback) {
                    console.log = function(msg) {
                        alert(msg);
                    };
                } else {
                    console.log = function() {};
                }
            }
        },

        /* Placeholder fallback */
        placeholderFallback: function placeholderFallbackFn() {
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

        outerhtmlFallback: function outerhtmlFallbackFn() {
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
        loadHtmlSnippets: function loadHtmlSnippetsFn() {
            $.ajax({
                url: globals.htmlSnippetsURL,
                datatype: 'text/html',
                async: false,
                success: function(data) {
                    globals.htmlSnippets = data;
                }
            });
        }

    };

    return base;
});