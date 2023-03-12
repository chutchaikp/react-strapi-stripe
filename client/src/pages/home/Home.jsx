import MainCousel from '../../components/Maincarousel.jsx';
import Products from '../../components/Products.jsx';
import Newsletter from '../../components/Newsletter.jsx';

import './home.scss';
const Home = () => {
  return (
    <div className="home">
      {/* OK */}
      <MainCousel />

      {/* TODO: Product list */}
      <Products />

      <Newsletter />
    </div>
  );
};
export default Home;
