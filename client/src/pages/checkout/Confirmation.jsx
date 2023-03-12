import { useEffect } from 'react';
import { MdCheck, MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { resetItems } from '../../redux/cartSlice';
import './confirmation.scss';
const Confirmation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    dispatch(resetItems());
  }, []);

  return (
    <div className="confirmation">
      <div className="wrapper">
        <h1>
          <MdCheckCircle />
          Success
        </h1>
        <p>
          You have successfully made an Order -{' '}
          <b>Congrats on Making your Purchase</b>
        </p>
      </div>
    </div>
  );
};
export default Confirmation;
