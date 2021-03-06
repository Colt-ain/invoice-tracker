import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
	model() {
		return Ember.RSVP.hash({
			invoice: this.store.createRecord('invoice'),
		});
	}
});
