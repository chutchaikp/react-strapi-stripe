'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
	async find(ctx) {
		debugger;
		const item = await strapi.service("api::item.item").findOne(2)
		return { data: 'All data ' }
	},
	findOne(ctx) {
		return { data: 'OK' }
	},
	async create(ctx) {
		try {
			const { products, userName, email, } = ctx.request.body;
			const lineItems = await Promise.all(
				products.map(async (product) => {
					const item = await strapi.service("api::item.item").findOne(product.productId)
					return {
						price_data: {
							currency: 'thb', // 'THB',
							product_data: {
								name: item.name,
							},
							unit_amount: item.price * 100,
						},
						quantity: product.quantity,
					}
				})
			)
			const customer_details = {
				address: "123456 bkk thailand, 10100",
				email: "example@example.com",
				name: "chutchai khoupoung",
				phone: "123456789",
				tax_exempt: "none",
				tax_ids: null,
			}
			const custom_text = {
				shipping_address: "123456 bkk thailand, 10100",
				submit: null
			}

			// create a stripe session
			// https://stripe.com/docs/api/checkout/sessions/create
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				customer_email: email,
				mode: 'payment',
				currency: 'thb',
				line_items: lineItems,
				success_url: 'http://localhost:3000/checkout/success',
				cancel_url: 'http://localhost:3000',
				locale: 'th',
				// not working
				// customer_details,
				// billing_address_collection: JSON.stringify(customer_details),
				// custom_text: custom_text,
			})

			// save order to database
			await strapi
				.service('api::order.order')
				.create({ data: { userName, products, stripeSessionId: session.id } })

			// return session id
			return { id: session.id, }
		} catch (error) {
			debugger;
		}
	}
}));
