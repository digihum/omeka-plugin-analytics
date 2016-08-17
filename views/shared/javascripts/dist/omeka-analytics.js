// loads and initialises google analytics 
// from https://developers.google.com/analytics/devguides/collection/analyticsjs/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', window.settings.property_id, 'auto');
ga('send', 'pageview');

jQuery("audio").on("play", function(event) {
	console.log("playing", event.target.currentSrc);
	ga('send', 'event', {
    	eventCategory: 'Playing Audio',
    	eventAction: 'click',
    	eventLabel: event.target.currentSrc
  	});
});
