var pageContext = (function(){
	
	var initElements = function() {
		$('.skill-cloud a').tagcloud();
	};
	
	var bindPageEvents = function() {
		$("header").find(".about-shan").click(function(e){
			e.preventDefault();

			$("#profile").fadeOut("fast", function(){
				$("#intro").fadeIn("fast");
			});
		});
		
		$("header").find(".view-resume").click(function(e){
			e.preventDefault();

			$("#intro").fadeOut("fast", function(){
				$("#profile").fadeIn("fast");
			});
		});
	};
	
	function _config() {
		$.fn.tagcloud.defaults = {
			size: {start: 0.8, end: 1.6, unit: 'em'},
			color: {start: '#888', end: '#000'}
		};
	}
	
	function _init() {
		initElements();
		bindPageEvents();
	}
	
	return {
		config : _config,
		init : _init
	};
})(jQuery);


(function($) {

	pageContext.config();

	$(document).ready(function(){
		pageContext.init();
	});

})(jQuery)