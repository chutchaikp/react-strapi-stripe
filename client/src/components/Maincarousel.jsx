import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import './mainCarousel.scss';

const MainCarousel = () => {
  const images = [
    'http://localhost:1337/uploads/chris_ghinda_w_K2_E_Sl_RRZQ_8_unsplash_6dca347a66.jpeg?updated_at=2023-03-09T23:23:17.099Z',
    'http://localhost:1337/uploads/larm_rmah_R1_Ku62_Z7zq_E_unsplash_59eab0237c.jpeg?updated_at=2023-03-09T23:23:17.071Z',
    'http://localhost:1337/uploads/brooke_cagle_a_VT_8_Vkmz_ML_4_unsplash_4bf92d3c53.jpeg?updated_at=2023-03-09T23:23:16.848Z',
    'http://localhost:1337/uploads/jc_gellidon_JM_8_Tk_WJ_9_UIY_unsplash_92b70bcbdb.jpeg?updated_at=2023-03-09T23:23:16.828Z',
    'http://localhost:1337/uploads/toa_heftiba_dti56waif_B4_unsplash_432656f0fb.jpeg?updated_at=2023-03-09T23:23:16.646Z',
  ];

  return (
    <div className="mainCarousel">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(handleClick, hasPrev, label) => (
          <div onClick={handleClick} className="leftArrowIcon">
            <MdArrowLeft size={100} />
          </div>
        )}
        renderArrowNext={(handleClick, hasPrev, label) => (
          <div onClick={handleClick} className="rightArrowIcon">
            <MdArrowRight size={100} />
          </div>
        )}
      >
        {images.map((img, idx) => (
          <div key={idx} className="item">
            <img src={images[idx]} alt="" className="imgItem" />
            <div className="desc">
              -- NEW ITEMS
              <h1>SUMMER SALE</h1>
              Discover more
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default MainCarousel;
