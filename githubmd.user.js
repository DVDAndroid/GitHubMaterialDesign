// ==UserScript==
// @name         Github Material Design Extras
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extra features to the Github Material Design theme
// @author       maicol07
// @match        https://github.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // INPUTS CLASS INJECTION
    /*$('input.input-contrast').addClass('form-field__input');
    $('textarea.input-contrast').addClass('form-field__textarea');
    $('label').addClass('form-field__label');*/
    $('.input-contrast').addClass('form-control').parent().addClass('form-group');
    //$('.input-contrast, label').wrapAll('<div class="form-group"></div>');

    // INPUTS ACTIVATION
    $(document).ready(function() {
        $(".form-control").click(function() {
            $(this).parent().addClass("label-animate");
        });

        $(window).click(function() {
            if (!$(event.target).is('.form-control')) {
                $(".form-control").each(function() {
                    if ($(this).val() == '') {
                        $(this).parent().removeClass("label-animate");
                    }
                });
            }
        });
    });

})();