import './footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <h2>DEV SHOP</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            porro sed maiores enim quaerat, culpa fugit facilis magnam incidunt
            inventore quasi atque ad iste ab ipsum cum, quo aspernatur. Tempore
            facere corrupti totam necessitatibus, a impedit temporibus
            reiciendis non. Sequi!
          </p>
        </div>
        <div className="right">
          <div className="about">
            <ul>
              <li>ABOUT US</li>
              <li>CAREERS</li>
              <li>Our Stores</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="customer">
            <ul>
              <li>CUSTOMER CARE</li>
              <li>Help Center</li>
              <li>Track Your Order</li>
              <li>Oorperate Bulk Purchaseing</li>
              <li>Returns & ...</li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <li>CONTACT US</li>
              <li>50 Noth Whater bivd, Washington, bc 22222</li>
              <li>Email: dev@gmail.com</li>
              <li>023456789</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
