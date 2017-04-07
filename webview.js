module.exports = (Franz, options) => {
	function getMessages() {
		var bubble = document.querySelectorAll('[data-entity="Entity.UserNotification"]')[0].querySelectorAll('[class=scene-space-tab-button__count]')[0];
    var counter = parseInt(bubble.innerText);
		Franz.setBadge(counter);
	}

	Franz.loop(getMessages);

}
