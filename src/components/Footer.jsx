
import React from "react";  
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";  
import { MdHome, MdEmail, MdPhone, MdPrint } from "react-icons/md";  
import "../styles/footer.css"; 
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer"> {}
      
      {}
      <section className="social-media">
        <div className="me-5">
          <span>Get connected with us on social networks:</span> {}
        </div>
        <div className="social-icons">
          {}
          <a href="https://facebook.com" className="text-white me-4"><FaFacebookF /></a>
          <a href="https://twitter.com" className="text-white me-4"><FaTwitter /></a>
          <a href="https://google.com" className="text-white me-4"><FaGoogle /></a>
          <a href="https://instagram.com" className="text-white me-4"><FaInstagram /></a>
          <a href="https://linkedin.com" className="text-white me-4"><FaLinkedin /></a>
          <a href="https://github.com" className="text-white me-4"><FaGithub /></a>
        </div>
      </section>

      {}
      <section className="links-section">
        {}
        <div className="col">
          <h2>Company name</h2> {}
          <hr />
          <p className="colCompany">VKraft is the perfect destination for personalized clothing that adds a touch of creativity and distinction. We offer a variety of high-quality products at competitive prices, allowing you to express your personality through unique and comfortable designs. Whether you're looking for T-shirts, hoodies, or accessories, we offer options that meet all your needs with a modern style that suits all tastes. With VKraft, you can always find what makes you stand out, and we strive to provide the best in every product we offer to our customers. </p> {}
        </div>

        {}
        <div className="col">
          <h2>Products</h2> {}
          <hr />
          {}
          <p className="colProducts"><Link to="/3d-printing">3D Printing</Link></p>
          <p className="colProducts"><Link to="/dtf-clothing">Clothing & DTF</Link></p>
          <p className="colProducts"><Link to="/accessories">Accessories</Link></p>
        </div>

        {}
        <div className="col">
          <h2>Useful Links</h2> {}
          <hr />
          {}
          <p className="colUseful"><a href="/user-profile">Your Account</a></p>
          <p className="colUseful"><a href="/help">Help</a></p>
          <p className="colUseful"><a href="/faq">FAQ</a></p> {}
          <p className="colUseful"><a href="/about-us">About Us</a></p>
          <p className="colUseful"><a href="/contact-us">Contact Us</a></p>
        </div>

        {}
        <div className="col">
          <h2>Contact</h2> {}
          <hr />
          {}
          <p className="colContact"><MdHome className="mr-3" /> Tanta, Egypt</p>
          <p className="colContact"><MdEmail className="mr-3" /> TeamLeader@vkraft.com</p>
          <p className="colContact"><MdPhone className="mr-3" /> +20 01007342123</p>
          <p className="colContact"><MdPrint className="mr-3" /> +20 01001742658</p>
        </div>
      </section>

      {}
      <div className="footer-rights">
        <p>© 2025 Copyright: <a href="https://vkraft.com" className="text-dark">VKraft.com</a></p>
      </div>
    </footer>
  );
};

export default Footer; 
