var module = {};

module.init = function() {
	this.$textContainer = $('.js-text-container');
	this.$contentBtn = $('.js-content-btn');
	this.eventHandlers();
};

module.eventHandlers = function() {
	module.$contentBtn.click( function() {
		module.updateContent(this);
	});
};	

module.updateContent = function( btn ) {
	var msgId = $(btn).data('btn'); // get message ID
	var msg = $('.js-content-msg[data-msg="' + msgId + '"]'); //find selected message
	$('.js-content-msg').hide();
	msg.fadeIn(); //show the message text

	$('.js-content-btn').removeClass('active');
	$(btn).addClass('active');
};

$(document).ready(function() {
	module.init();
});
