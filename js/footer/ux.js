//ADD

// Fixing bug in reveal on mobile devices
var scrollPosition = 0;
var modalOpen = false;
var $reveal = $('.reveal');
$reveal.on('closeme.zf.reveal', function () {
    if (!modalOpen) scrollPosition = $(document).scrollTop();
});
$reveal.on('open.zf.reveal', function () {
    modalOpen = true;
});
$reveal.on('closed.zf.reveal', function () {
    $(document).scrollTop(scrollPosition);
    modalOpen = false;
});

// fixed mobile policy details button toggler

jQuery(function () {
    jQuery(".view-current-details").click(function () {
        jQuery(this).text(function (i, text) {
            return text === "View Current Details" ? "Hide Current Details" : "View Current Details";
        })
    });
})

// Carousels
$("#owl-cover-usp").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: false,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        1000: {
            items: 4,
            loop: false
        }
    }
});


$("#owl-cover-options").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed: 450,
    center: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        1000: {
            items: 4,
            loop: false
        }
    }
});


$("#owl-type-insurance").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed: 450,
    center: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        1000: {
            items: 4,
            loop: false
        }
    }
});



$("#owl-why-choose").owlCarousel({
    nav: false,
    touchDrag: false,
    mouseDrag: true,
    smartSpeed: 450,
    center: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        },
        1000: {
            items: 4,
            loop: false
        }
    }
});


// prevent default behaviour on clicking search inputs as popovers are being triggered instead

$(".search input").click(function (event) {
    $(this).trigger('blur');
});

$(".input-group-field").click(function () {
    $(this).css("border-bottom-color", "#ff5722");
    $(this).css("border-bottom-width", "2px");
    $(this).css("border-bottom-style", "solid");
});



$(document).mouseup(function (e) {
    var container = $(".input-group");

    // if the target of the click isn't the container nor a descendant of thecontainer	
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.input-group-field').css("border-bottom-width", "1px");
        $('.input-group-field').css("border-bottom-color", "#cacaca");
    }
});


// where do you normally live?	

$(".resident-trigger").click(function () {

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;


    $(".resident-popover-menu").toggleClass("showMenu");

    //hide other menus if open	
    $(".whotravelling-popover-menu").removeClass("showMenu");
    $(".wherecover-popover-menu").removeClass("showMenu");
    $(".dates-popover-menu").removeClass("showMenu");




    $(".country-name").click(function () {
        var country = $(this).find("span").text();
        $('.resident-trigger input').val(country);

        // $(".resident-trigger > p").html(jQuery(this).find("span").html());	
        $(".resident-popover-menu").removeClass("showMenu");
    });
});

$(".resident-popover-close").click(function () {
    $(".resident-popover-menu").removeClass("showMenu");
});

// who is travelling?
//var howmany = $(".howmanytravellers").spinner({
//    min: 1,
//    max: 10
//});

//$(".spinnerup").on("click", function (e) {
//    howmany.spinner("stepUp", 1);
//    e.preventDefault();
//});

//$(".spinnerdown").on("click", function (e) {
//    howmany.spinner("stepDown", 1);
//    e.preventDefault();
//});

$(".button-clear-main").on("click", function (e) {
    if (document.getElementById("traveller-1").hasAttribute("style")) {
        if (document.getElementById("traveller-1").style.display == "block") {
            $(".numericOnly").val("");
            for (var x = 1; x < 7; x++) {
                $(".traveller-" + x).hide();
            }
            wherecover.spinner("value", 1);
        }
    }
    AgeTextBox();
    e.preventDefault();
});



$(".button-done").on("click", function (e) {
    var noOfTravellers = wherecover.spinner("value");
    if (noOfTravellers == "0" || noOfTravellers == null || noOfTravellers == "") {
        $('#AgeAlerttextBox').foundation('open');
        return false;}
    else {
    var allAges = [];
    for (var x = 1; x < noOfTravellers + 1; x++) {
        var tempage = $("#traveller-input-" + x).val();
        if (tempage == "") {
            $('#AgeAlert').foundation('open');
            return false;
        }
        else {
            if (noOfTravellers == 1) {
                allAges.push(parseInt(tempage, 10));
            }
            else {
                allAges.push(parseInt(tempage, 10));
                allAges.join(", ");
            }
        }        
    }
    //allAges = allAges.sort(function (a, b) {
    //    return a - b;
    //});
    allAges = allAges.toString();
    allAges = allAges.replace(/,/g, ", ");
    $(".whotravelling-trigger input").val(allAges);
        $(".whotravelling-popover-menu").removeClass("showMenu");
    }
    e.preventDefault();
});



$(".whotravelling-trigger").click(function () {

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    $(".whotravelling-popover-menu").toggleClass("showMenu");

    //hide other menus if open

    $(".resident-popover-menu").removeClass("showMenu");
    $(".wherecover-popover-menu").removeClass("showMenu");
    $(".dates-popover-menu").removeClass("showMenu");

});

$(".whotravelling-popover-close").click(function () {
    $(".whotravelling-popover-menu").removeClass("showMenu");
});

$('.whotravelling-popover-menu').on('input', function () {

    $(".whotravelling-trigger input").val("");

});


//var wherecover = $(".howmanytravellers").spinner({
//    min: 0,
//    max: 6,
//    change: function (event, ui) {
//        var value = wherecover.spinner("value");
//        //alert(value);
//    }
//});

$(document).ready(function () {
    AgeTextBox();
});

var wherecover = $(".howmanytravellers").spinner({
    min: 1,
    max: 6
});

$(".ui-spinner").click(function (e) {
    AgeTextBox();
    e.preventDefault();
});

$(".ui-spinner").keyup(function (e) {
    AgeTextBox();
    e.preventDefault();
});

function AgeTextBox() {
    var value = wherecover.spinner("value");
    if (isNaN(value) || value < 1 || value > 6 || value == null) {
        wherecover.spinner("value", 1);
        value = "1";
    }
    if (value == "0") {
        $(".traveller-1").hide();
        $(".traveller-2").hide();
        $(".traveller-3").hide();
        $(".traveller-4").hide();
        $(".traveller-5").hide();
        $(".traveller-6").hide();
    }
    if (value == "1") {
        $(".traveller-1").show();
        $(".traveller-2").hide();
        $(".traveller-3").hide();
        $(".traveller-4").hide();
        $(".traveller-5").hide();
        $(".traveller-6").hide();
    }
    if (value == "2") {
        $(".traveller-1").show();
        $(".traveller-2").show();       
        $(".traveller-3").hide();
        $(".traveller-4").hide();
        $(".traveller-5").hide();
        $(".traveller-6").hide();
    }
    if (value == "3") {
        $(".traveller-1").show();
        $(".traveller-2").show();
        $(".traveller-3").show();       
        $(".traveller-4").hide();
        $(".traveller-5").hide();
        $(".traveller-6").hide();
    }
    if (value == "4") {
        $(".traveller-1").show();
        $(".traveller-2").show();
        $(".traveller-3").show();
        $(".traveller-4").show();       
        $(".traveller-5").hide();
        $(".traveller-6").hide();
    }
    if (value == "5") {
        $(".traveller-1").show();
        $(".traveller-2").show();
        $(".traveller-3").show();
        $(".traveller-4").show();
        $(".traveller-5").show();
        $(".traveller-6").hide();
    }
    if (value == "6") {
        $(".traveller-1").show();
        $(".traveller-2").show();
        $(".traveller-3").show();
        $(".traveller-4").show();
        $(".traveller-5").show();
        $(".traveller-6").show();
    }
}

$(".spinnerup").click(function (e) {
    wherecover.spinner("stepUp", 1);
    var value = wherecover.spinner("value");
    $(".traveller-" + value).show();
    e.preventDefault();
});

$(".spinnerdown").click(function (e) {
    wherecover.spinner("stepDown", 1);
    var value = wherecover.spinner("value");
    var valueoffset = value + 1;
    $(".traveller-" + valueoffset).hide();
    $("#traveller-input-" + valueoffset).val("");
    e.preventDefault();
});

//where do you need cover?

$("#radio-1, #radio-2, #radio-3, #radio-4").checkboxradio();


$(".wherecover-trigger").click(function () {

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    $(".wherecover-popover-menu").toggleClass("showMenu");

    //hide other menus if open
    $(".resident-popover-menu").removeClass("showMenu");
    $(".whotravelling-popover-menu").removeClass("showMenu");
    $(".dates-popover-menu").removeClass("showMenu");
});

//populate field with selection



$("label[for='radio-1']").click(function () {
    $(".wherecover-trigger input").val("Europe inc. Morocco, Egypt & Israel");
});

$("label[for='radio-2']").click(function () {

    $(".wherecover-trigger input").val("Australia & New Zealand");
});

$("label[for='radio-3']").click(function () {
    $(".wherecover-trigger input").val("Worldwide excluding USA/Canada");
});

$("label[for='radio-4']").click(function () {
    $(".wherecover-trigger input").val("Worldwide");
});


$(".wherecover-popover-menu label").click(function () {
    $(".wherecover-popover-menu").removeClass("showMenu");
    window.scrollTo(0, 0);
});


$(".wherecover-popover-close").click(function () {
    $(".wherecover-popover-menu").removeClass("showMenu");
});


// Activity selection

jQuery("input:checkbox").change(function () {
    jQuery(this).closest(".extra-option-box").toggleClass('selected', this.checked);
});
