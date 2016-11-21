
// tracks video tag events

jQuery(document).ready(function() {

	jQuery("video").on("play", function(event) {
		console.log("playing", event.target.currentSrc);
		ga('send', 'event', {
			eventCategory: 'Playing Video',
			eventAction: 'click',
			eventLabel: event.target.currentSrc
		});
	});

	jQuery("video").on("pause", function(event) {
		console.log("paused", event.target.currentSrc);
		ga('send', 'event', {
			eventCategory: 'Paused Video',
			eventAction: 'click',
			eventLabel: event.target.currentSrc
		});
	});
});
