
// tracks audio tag events

jQuery(document).ready(function() {

	jQuery("audio").on("play", function(event) {
		console.log("playing", event.target.currentSrc);
		ga('send', 'event', {
			eventCategory: 'Playing Audio',
			eventAction: 'click',
			eventLabel: event.target.currentSrc
		});
	});

	jQuery("audio").on("pause", function(event) {
		console.log("paused", event.target.currentSrc);
		ga('send', 'event', {
			eventCategory: 'Paused Audio',
			eventAction: 'click',
			eventLabel: event.target.currentSrc
		});
	});
});
