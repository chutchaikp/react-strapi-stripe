import { MdMailOutline } from 'react-icons/md';
import './newsletter.scss';
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="wrapper">
        <h1> SUBSCRIBE TO OUR NEW NEWSLETTER </h1>
        <h3>and receive $20 coupon for your first order when you checkout</h3>
        <div className="input">
          <input type="text" />
          <button>
            <MdMailOutline />
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
