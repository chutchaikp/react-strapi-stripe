import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initProducts } from '../redux/productSlice';
import { publicRequest } from '../requestMethods.js';
import Product from './Product.jsx';
import './products.scss';
const Products = () => {
  const dispatch = useDispatch();

  const [topRated, setTopRated] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  // request all product
  // add all product to redux

  useEffect(() => {
    async function onLoad() {
      try {
        const res = await publicRequest('/items?populate=*');
        dispatch(initProducts(res.data.data));

        setTopRated(() => {
          return res.data.data.filter(
            (p) => p.attributes?.category === 'topRated'
          );
        });

        setNewArrivals(() => {
          return res.data.data.filter(
            (p) => p.attributes?.category === 'newArrivals'
          );
        });

        setBestSellers(() => {
          return res.data.data.filter(
            (p) => p.attributes?.category === 'bestSellers'
          );
        });
      } catch (error) {
        debugger;
      }
    }
    onLoad();
  }, []);

  return (
    <div className="products">
      <h1> TOP RATED PRODUCTS </h1>
      <div className="items">
        {topRated.map((p, idx) => {
          return (
            <div key={idx} className="item">
              <Product item={p} />
            </div>
          );
        })}
      </div>

      <h1> NEW ARRIVAL PRODUCTS </h1>
      <div className="items">
        {newArrivals.map((p, idx) => {
          return (
            <div key={idx} className="item">
              <Product item={p} />
            </div>
          );
        })}
      </div>

      <h1> BEST SELLER PRODUCTS </h1>
      <div className="items">
        {bestSellers.map((p, idx) => {
          return (
            <div key={idx} className="item">
              <Product item={p} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
