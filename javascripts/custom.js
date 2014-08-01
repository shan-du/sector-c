(function($) {


$(document).ready(function(){

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

});

})(jQuery)