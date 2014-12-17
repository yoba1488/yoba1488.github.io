var sh = {};

sh.init = function() {
	sh.init_slider();
};

sh.init_slider = function() {
	var o = $('.nstSlider');
	if (o.length) {
		$().ready(function(){
			$('.nstSlider').nstSlider({
                "left_grip_selector": ".leftGrip",
                "value_changed_callback": function(cause, leftValue, rightValue) {
                $(this).parent().find('.leftLabel').text(leftValue);
                }
            });
		});
	}
};

$(sh.init);
