var pageContext = (function(){
	
	var initElements = function() {
		$('.skill-cloud a').tagcloud();
	};
	
	var bindPageEvents = function() {
		$("header").find(".view-resume").click(function(e){
			e.preventDefault();
			
			var _this = $(this);
			var html = _this.html();
			
			if (html.indexOf("View") >= 0) {
				$("#intro").fadeOut("fast", function(){
					$("#profile").fadeIn("fast");
				});
				$(_this.html(html.replace("View","Hide")));
			}
			else {
				$("#profile").fadeOut("fast", function(){
					$("#intro").fadeIn("fast");
				});
				$(_this.html(html.replace("Hide","View")));
			}
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