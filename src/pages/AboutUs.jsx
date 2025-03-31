import React from 'react';
import "../styles/aboutUs.css";
import aboutImage from "../assets/images/image-removebg-preview (2).png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header */}
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>VKraft is your creative corner for personalized clothing that tells your story.</p>
      </section>

      {/* Our Story */}
      <section className="about-us-content">
        <div className="about-us-text">
          <h2>Our Story</h2>
          <p>Founded in 2020, VKraft was born to blend personality with fashion. We offer made-to-order, high-quality clothing to help you stand out in style.</p>
        </div>
        <div className="about-us-image">
          <img src={aboutImage} alt="VKraft Story" />
        </div>
      </section>

      {/* Mission */}
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>To create customizable fashion that reflects who you are — with quality, comfort, and a touch of imagination.</p>
      </section>

      {/* Values */}
      <section className="about-us-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>🧵 Quality</h3>
            <p>We use durable fabrics and premium materials for every product.</p>
          </div>
          <div className="value-item">
            <h3>🎨 Creativity</h3>
            <p>Design what you feel. Every idea matters — no rules, just style.</p>
          </div>
          <div className="value-item">
            <h3>🤝 Customer Care</h3>
            <p>We're here to make sure you’re happy — every step of the way.</p>
          </div>
          <div className="value-item">
            <h3>🌱 Sustainability</h3>
            <p>Eco-friendly choices in packaging and production processes.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-us-timeline">
        <h2>Our Journey</h2>
        <ul className="timeline">
          <li className="timeline1"><span>2020</span> VKraft was founded.</li>
          <li className="timeline1"><span>2021</span> Expanded to hoodies & DTF printing.</li>
          <li className="timeline1"><span>2022</span> Added custom previews & 3D models.</li>
          <li className="timeline1"><span>2023</span> Reached 10k+ happy customers.</li>
          <li className="timeline1"><span>2024</span> Launched eco-packaging & AR previews.</li>
        </ul>
      </section>

      {/* Testimonials */}
<section className="about-us-testimonials">
  <h2>Customer Testimonials</h2>
  <div className="testimonial-boxes">
    <div className="testimonial">
      <p>"The quality and fit were amazing. Definitely ordering again!"</p>
      <span>— Sarah, Giza</span>
    </div>
    <div className="testimonial">
      <p>"They really listened to what I wanted. Fast shipping too!"</p>
      <span>— Kareem, Cairo</span>
    </div>
    <div className="testimonial">
      <p>"Loved the attention to detail. My hoodie looks even better in person!"</p>
      <span>— Laila, Alexandria</span>
    </div>
    <div className="testimonial">
      <p>"Great material and colors. I’ve already recommended you to friends."</p>
      <span>— Ahmed, Mansoura</span>
    </div>
    <div className="testimonial">
      <p>"Customer support was super helpful with my custom design!"</p>
      <span>— Dina, Tanta</span>
    </div>
    <div className="testimonial">
      <p>"Exactly what I ordered — size, color, and design. Perfect!"</p>
      <span>— Mina, Minya</span>
    </div>
    <div className="testimonial">
      <p>"I made a mistake in the order and they fixed it immediately. Thank you!"</p>
      <span>— Youssef, Nasr City</span>
    </div>
    <div className="testimonial">
      <p>"The printing is high quality and the fabric feels premium."</p>
      <span>— Nouran, Port Said</span>
    </div>
    <div className="testimonial">
      <p>"Very happy with the packaging and fast delivery. 10/10."</p>
      <span>— Hassan, Helwan</span>
    </div>
    <div className="testimonial">
      <p>"This is my third order from VKraft. Always impressed!"</p>
      <span>— Rania, 6th of October</span>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
  <div className="team-member">
    <img src="src/assets/images/images.jpeg" alt="Mostafa" />
    <h4>Mostafa Elzayady</h4>
    <p>Product Designer</p>
  </div>

  <div className="team-member">
    <img src="src/assets/images/images (2).jpeg" alt="Asmaa" />
    <h4>Asmaa Ibrahim</h4>
    <p>Assistant Team Leader</p>
  </div>

  <div className="team-member leader">
    <div className="crown">👑</div>
    <div className="badge">⭐ Leader</div>
    <img src="src/assets/images/465653614_2336094590059756_6436360577971108406_n.jpg" alt="Omar" />
    <h4>Omar Saad</h4>
    <p>Founder & Team Leader</p>
  </div>

  <div className="team-member">
    <img src="src/assets/images/images (1).jpeg" alt="Nada" />
    <h4>Nada Gad</h4>
    <p>UI/UX & Customer Experience</p>
  </div>

  <div className="team-member">
    <img src="src/assets/images/eea72326616a2e77ded5dfbdd4b60d44.jpg" alt="Alaa" />
    <h4>Alaa Elnaggar</h4>
    <p>Content & Research</p>
  </div>
</div>
      </section>

      {/* Footer */}
      <section className="about-us-footer">
        <p>&copy; 2025 VKraft. All rights reserved.</p>
      </section>
    </div>
  );
};

export default AboutUs;
