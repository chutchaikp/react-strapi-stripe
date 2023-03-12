import { publicRequest } from '../../requestMethods.js';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import './checkout.scss';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [saving, setSaving] = useState(false);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setSaving(false);

    handleCheckout();
  };

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const requestBody = {
        userName: 'dev',
        email: 'chutchai.kp@gmail.com',
        products: items.map((it) => {
          return {
            productId: it.product.id,
            quantity: it.quantity,
          };
        }),
      };

      const response = await publicRequest.post('/orders', requestBody);
      const session = response.data;
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      debugger;
      console.log(error);
    }
  };

  // return (
  //   <div>
  //     <button onClick={handleCheckout}>PLACE ORDER</button>
  //   </div>
  // );

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper">
          <h2>BILLING INFOMATION</h2>
          <div className="billing">
            <div className="name">
              <input
                type="text"
                placeholder="firstname"
                name="name"
                className={errors.firstName ? 'error' : ''}
                {...register('firstName', { required: true })}
              />

              <input
                type="text"
                placeholder="lastname"
                name="lastname"
                className={errors.lastName ? 'error' : ''}
                {...register('lastName', { required: true })}
              />
            </div>

            <input
              style={{ width: '100%' }}
              type="text"
              placeholder="country"
              name="country"
              {...register('country', { required: true })}
            />
            <div className="street">
              <input
                type="text"
                placeholder="street"
                name="street"
                className={errors.street ? 'error' : ''}
                {...register('street', { required: true })}
              />
              <input
                type="text"
                placeholder="street2"
                name="street2"
                className={errors.street2 ? 'error' : ''}
                {...register('street2', { required: true })}
              />
            </div>

            <div className="city">
              <input
                type="text"
                placeholder="city"
                name="city"
                className={errors.city ? 'error' : ''}
                {...register('city', { required: true })}
              />
              <div className="stateZip">
                <input
                  type="text"
                  placeholder="state"
                  name="state"
                  {...register('state', { required: true })}
                />
                <input
                  type="text"
                  placeholder="zip"
                  name="zip"
                  {...register('zipcode', { required: true })}
                />
              </div>
            </div>
          </div>
          <input type="submit" value="PLACE ORDER" />
        </div>
        <div className="shipping"></div>
      </form>
    </div>
  );
};
export default Checkout;
