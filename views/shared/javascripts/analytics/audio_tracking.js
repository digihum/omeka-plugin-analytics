jQuery("audio").on("play", function(event) {
	console.log("playing", event.target.currentSrc);
	ga('send', 'event', {
    	eventCategory: 'Playing Audio',
    	eventAction: 'click',
    	eventLabel: event.target.currentSrc
  	});
});
