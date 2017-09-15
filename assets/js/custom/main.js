//
// Global Variables
//

// Elements
var $window = $(window);
var $document = $(document);
var $body = $('body');
var imageSrc="";
//
// Device Info
//
var switchImage = function (pos){
    $('#slider_content').attr("src","assets/images/hero_bg.jpg");
}
// Is Touch Device ?
var isMobile = Modernizr.touch;
