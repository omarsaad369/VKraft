import React from "react";
import "../styles/Help.css";
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const Help = () => {
  return (
    <div className="help-container">
      <header className="help-header">
        <FaQuestionCircle className="help-icon" />
        <h1>Help & Support Center</h1>
        <p>مرحبًا بك في مركز الدعم الخاص بـ VKraft – نساعدك في كل خطوة!</p>
      </header>

      <section className="faq-section">
        <h2>الأسئلة الشائعة</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>📌 كيف يمكنني تقديم طلب؟</h3>
            <p>توجه إلى قسم المنتجات، اختر ما يعجبك، ثم اضغط على "Customize" أو "Add to Cart" واستكمل خطوات الطلب بسهولة.</p>
          </div>
          <div className="faq-item">
            <h3>💳 ما هي طرق الدفع المتاحة؟</h3>
            <p>نوفر لك خيارات متعددة: الدفع عند الاستلام، التحويل البنكي، والدفع الإلكتروني عبر البطاقات.</p>
          </div>
          <div className="faq-item">
            <h3>🚚 كيف أتتبع طلبي؟</h3>
            <p>بعد تأكيد الطلب، ستحصل على رقم تتبع داخل حسابك في صفحة "طلباتك".</p>
          </div>
          <div className="faq-item">
            <h3>✏️ هل يمكن تعديل الطلب بعد إرساله؟</h3>
            <p>نعم، إذا لم تتم معالجته بعد. راسلنا مباشرة بأسرع وقت ممكن.</p>
          </div>
          <div className="faq-item">
            <h3>📦 كم يستغرق التوصيل؟</h3>
            <p>مدة التوصيل عادة من 2 إلى 5 أيام عمل حسب منطقتك.</p>
          </div>
          <div className="faq-item">
            <h3>🧵 هل يمكنني تخصيص المقاسات والألوان؟</h3>
            <p>بالطبع! من خلال صفحة التخصيص يمكنك اختيار الألوان والمقاس المناسب أو إدخال مقاس مخصص.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>📬 تواصل معنا</h2>
        <p>إذا لم تجد إجابتك، يمكنك مراسلتنا عبر الطرق التالية:</p>
        <div className="contact-info">
          <p><FaEnvelope /> TeamLeader@vkraft.com</p>
          <p><FaPhoneAlt /> +20 01007342123</p>
          <p><FaWhatsapp /> WhatsApp: +20 01007342123</p>
          <p><FaTelegramPlane /> Telegram: @VKraftSupport</p>
        </div>
        <div className="support-tips">
          <h4>نصائح سريعة:</h4>
          <ul>
            <li>📸 أرسل لقطة شاشة عند وجود مشكلة.</li>
            <li>⏱ الدعم متاح من 9 صباحًا حتى 6 مساءً يوميًا.</li>
            <li>🧾 رقم الطلب يساعدنا في خدمتك بشكل أسرع.</li>
          </ul>
        </div>
      </section>

      <footer className="help-footer">
        <p>شكراً لاختيارك VKraft – راحتك وسعادتك أولويتنا.</p>
      </footer>
    </div>
  );
};

export default Help;