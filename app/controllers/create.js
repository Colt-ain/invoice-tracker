import Controller from '@ember/controller';

export default Controller.extend({
	modelName: 'invoice',
	amount: '',
	createdAt: '',
	updatedAt: '',
	invoice: null,
	saveInvoice(invoice) {
		invoice.save()
			.then(() => {
				this.transitionToRoute('/');
			})
			.catch(() => {
				this.transitionToRoute('/');
			});
	},
	actions: {
		setAmount(amount) {
			this.set('amount', amount);
		},
		setDateRange(date) {
			this.set('createdAt', new Date(date));
		},
		createAndSaveInvoice() {
			const invoice = this.get('model.invoice');
			const amount = this.get('amount');
			const createdAt = this.get('createdAt');

			invoice.setProperties({
				amount,
				createdAt,
				updatedAt: createdAt
			});

			this.saveInvoice(invoice);
		},
	}
});

