// ==UserScript==
// @name         Github Material Design Extras
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extra features to the Github Material Design theme
// @author       maicol07
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @match        https://github.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // INPUTS CLASS INJECTION
    $('.input-contrast:not(.header-search-input)').addClass('form_control');
    $('label + .input-contrast:not(.header-search-input)').wrapAll('<div class="form_group"></div>');

    // INPUTS ACTIVATION
    $(document).ready(function() {
        $(".form_control").click(function() {
            $(this).parent().addClass("label-animate");
        });

        $(window).click(function() {
            if (!$(event.target).is('.form_control')) {
                $(".form_control").each(function() {
                    if ($(this).val() == '') {
                        $(this).parent().removeClass("label-animate");
                    }
                });
            }
        });
    });

})();
