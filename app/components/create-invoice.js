import Ember from 'ember';
import Component from '@ember/component';
const { $ } = Ember;

export default Component.extend({
	didRender() {
		$('input.amount').focus();
	},
	actions: {
		onChange(e) {
			this.setAmount(e.target.value);
		},
		chooseDate(date) {
			this.setDateRange(date);
		},
		saveInvoice() {
			this.createAndSaveInvoice();
		}
	}
});
