import Component from '@ember/component';

export default Component.extend({
	actions: {
		transitionTo() {
			this.sendAction('transitionTo', 'create');
		}
	}
});
