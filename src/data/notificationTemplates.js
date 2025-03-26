const notificationTemplates = [
    {
      key: "order_completed",
      title: "تم تنفيذ الطلب",
      message: (orderId) => `طلبك #${orderId} جاهز وجاري شحنه`,
    },
    {
      key: "order_processing",
      title: "جاري تجهيز المنتج",
      message: () => "طلبك قيد التنفيذ – سيتم تسليمه خلال 3 أيام",
    },
    {
      key: "design_completed",
      title: "تم تخصيص منتجك",
      message: () => "تم تصميم مجسمك الثلاثي الأبعاد",
    },
    {
      key: "support_reply",
      title: "رسالة من الدعم",
      message: (reply) => `ردًا على استفسارك: ${reply}`,
    },
    {
      key: "shipped",
      title: "تم شحن الطلب",
      message: (orderId, trackingNumber) => `تم شحن الطلب رقم #${orderId}، رقم التتبع: ${trackingNumber}`,
    },
    {
      key: "promo_offer",
      title: "عرض خاص متاح",
      message: () => "خصم 10% على الطباعة الثلاثية الأبعاد اليوم فقط!",
    },
    {
      key: "favorite_available",
      title: "منتجك المفضل متوفر الآن",
      message: () => "المنتج اللي أضفته للمفضلة متاح الآن للطلب",
    },
    {
      key: "new_product",
      title: "منتج جديد مضاف",
      message: () => "أضفنا منتجات جديدة – شوفها الآن!",
    },
    {
      key: "order_updated",
      title: "تم تحديث طلبك",
      message: () => "تم تعديل تفاصيل طلبك بناءً على تواصلك معنا",
    },
    {
      key: "shipping_delay",
      title: "تأخير في الشحن",
      message: () => "فيه تأخير بسيط في توصيل طلبك – نعتذر وحنوصلك أول ما يجهز",
    },
    {
      key: "delivered",
      title: "تم توصيل الطلب",
      message: (orderId) => `طلبك #${orderId} وصل للمكان المحدد`,
    },
    {
      key: "customization_required",
      title: "طلبك في انتظار التخصيص",
      message: () => "رجاءً زود تفاصيلك علشان نبدأ تصميم مجسمك",
    },
    {
      key: "design_uploaded",
      title: "تم تحميل التصميم",
      message: () => "تم رفع التصميم المخصص لك، راجعه قبل الطباعة",
    },
    {
      key: "payment_received",
      title: "تم استلام الدفع",
      message: (orderId) => `تم استلام مدفوعاتك لطلب #${orderId}`,
    },
    {
      key: "invoice_ready",
      title: "فاتورتك جاهزة",
      message: (orderId) => `اضغط هنا لتحميل فاتورة طلبك #${orderId}`,
    },
    {
      key: "order_issue",
      title: "مشكلة في الطلب",
      message: () => "واجهتنا مشكلة في تصميمك – اتواصل مع الدعم",
    },
    {
      key: "design_review",
      title: "جاري مراجعة التصميم",
      message: () => "المصمم بيشتغل حاليًا على مراجعة طلبك",
    },
    {
      key: "quality_check",
      title: "اختبار المنتج قبل الشحن",
      message: () => "بنراجع جودة المجسم قبل ما نشحنه لك",
    },
    {
      key: "packaged",
      title: "تم تغليف المنتج",
      message: (orderId) => `طلبك #${orderId} تم تغليفه وجاهز للشحن`,
    },
    {
      key: "review_request",
      title: "شارك رأيك",
      message: (orderId) => `ساعدنا نحسن الخدمة – قيم تجربتك مع طلب #${orderId}`,
    }
  ];
  
  export default notificationTemplates;
  