var tpj = jQuery;

var revapi21;
tpj(document).ready(function () {
    if (tpj("#rev_slider_21_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_21_1");
    } else {
        revapi21 = tpj("#rev_slider_21_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "plugins/slider-revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                onHoverStop: "off",
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 700,
                levels: [2, 6, 10, 20, 25, 30, 35, 40, 45, 50, 47, 48, 49, 50, 51, 55],
                type: "mouse",
                disable_onmobile: "on"
            },
            shadow: 0,
            spinner: "spinner0",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});