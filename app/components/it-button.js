import Component from '@ember/component';

export default Component.extend({
	actions: {
		onClick() {
			this.saveInvoice();
		}
	}
});
