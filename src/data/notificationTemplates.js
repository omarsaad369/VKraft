const notificationTemplates = [
  {
    key: "order_completed",
    title: "Order Completed",
    message: (orderId) => `Your order #${orderId} is ready and being shipped.`,
  },
  {
    key: "order_processing",
    title: "Product in Process",
    message: () => "Your order is being processed – it will be delivered within 3 days.",
  },
  {
    key: "design_completed",
    title: "Your Product is Customized",
    message: () => "Your 3D model has been designed.",
  },
  {
    key: "support_reply",
    title: "Support Response",
    message: (reply) => `In response to your inquiry: ${reply}`,
  },
  {
    key: "shipped",
    title: "Order Shipped",
    message: (orderId, trackingNumber) => `Your order #${orderId} has been shipped. Tracking Number: ${trackingNumber}`,
  },
  {
    key: "promo_offer",
    title: "Special Offer Available",
    message: () => "10% discount on 3D printing – Today only!",
  },
  {
    key: "favorite_available",
    title: "Your Favorite Product is Back",
    message: () => "The product you added to favorites is now available to order.",
  },
  {
    key: "new_product",
    title: "New Product Added",
    message: () => "We’ve added new products – check them out now!",
  },
  {
    key: "order_updated",
    title: "Your Order Was Updated",
    message: () => "Your order details were updated based on our recent communication.",
  },
  {
    key: "shipping_delay",
    title: "Shipping Delay",
    message: () => "There is a slight delay in delivering your order – we apologize and will deliver as soon as it's ready.",
  },
  {
    key: "delivered",
    title: "Order Delivered",
    message: (orderId) => `Your order #${orderId} has been delivered to the specified location.`,
  },
  {
    key: "customization_required",
    title: "Awaiting Customization",
    message: () => "Please provide your details so we can start designing your 3D model.",
  },
  {
    key: "design_uploaded",
    title: "Design Uploaded",
    message: () => "Your custom design has been uploaded. Please review it before printing.",
  },
  {
    key: "payment_received",
    title: "Payment Received",
    message: (orderId) => `We’ve received your payment for order #${orderId}.`,
  },
  {
    key: "invoice_ready",
    title: "Your Invoice is Ready",
    message: (orderId) => `Click here to download the invoice for your order #${orderId}.`,
  },
  {
    key: "order_issue",
    title: "Order Issue",
    message: () => "We encountered an issue with your design – please contact support.",
  },
  {
    key: "design_review",
    title: "Design Under Review",
    message: () => "Our designer is currently reviewing your order.",
  },
  {
    key: "quality_check",
    title: "Product Quality Check",
    message: () => "We’re verifying the model’s quality before shipping it to you.",
  },
  {
    key: "packaged",
    title: "Product Packaged",
    message: (orderId) => `Your order #${orderId} has been packaged and is ready for shipment.`,
  },
  {
    key: "review_request",
    title: "Share Your Feedback",
    message: (orderId) => `Help us improve – rate your experience with order #${orderId}.`,
  }
];

export default notificationTemplates;
