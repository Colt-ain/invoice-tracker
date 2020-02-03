import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		transitionTo(route) {
			this.transitionToRoute(route);
		}
	}
});
