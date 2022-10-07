/* eslint-disable */
const axios = require('../../node_modules/axios/dist/axios');
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Lp892LNiEBWkF08FibkwNb9TwsSG5iDoGFGGp5BY8igHfUGAzeHnjHkdPf6qUNwZFAcF3EagNr98tuXjRvc7GQg00vy011IIE'
);

export const bookTour = async (tourId) => {
  try {
    // 1)  Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Creat checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
