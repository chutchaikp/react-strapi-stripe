import { useEffect, useState } from 'react';
import { MdAdd, MdRemove, MdSearch } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './product.scss';
const Product = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  // fix not scroll to top when route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="product">
      <div className="img">
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes.image.data.attributes.formats.medium.url
          }
          alt=""
        />

        <div className="detail">
          {/* <div className="link"> */}

          {/* TODO: now scroll to top ? */}

          <Link className="link" to={`/item/${item.id}`}>
            <MdSearch size={35} />
          </Link>
          {/* </div> */}
        </div>
        <div className="add">
          <div className="left">
            <button onClick={() => setQuantity(quantity - 1)}>
              <MdRemove />
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <MdAdd />
            </button>
          </div>
          <div className="right">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <p className="category">{item.attributes.category}</p>
      <p className="name">{item.attributes.name}</p>
      <p className="price">฿ {item.attributes.price}</p>

      {/* cmd + ctrl + space */}
    </div>
  );
};
export default Product;
