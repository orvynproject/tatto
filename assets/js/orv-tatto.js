!function(a){
	"use strict";
	a("a.page-scroll").bind("click",function(e){
		var l=a(this);
		a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),
		e.preventDefault()
	}),
	a("body").scrollspy({target:".navbar-fixed-top",offset:51}),
	a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);