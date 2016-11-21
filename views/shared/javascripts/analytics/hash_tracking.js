
// tracks window hash change events

jQuery(document).ready(function() {

	window.onhashchange = function() {
		ga('send', 'event', {
			eventCategory: 'Hash Changed',
			eventAction: 'click',
			eventLabel: jQuery('.title').html()
		});
	};
});
