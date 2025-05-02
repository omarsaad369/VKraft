import React, { useState } from "react";
import "../styles/ordertrackingcustomer.css";
import {
  FaShippingFast,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const ordersData = [
  { id: 101, product: "Custom T-shirt", status: "In Progress", date: "2025-03-30" },
  { id: 102, product: "Personalized Mug", status: "Completed", date: "2025-03-28" },
  { id: 103, product: "Custom Photo Frame", status: "Shipped", date: "2025-03-29" },
  { id: 104, product: "Wall Art", status: "Completed", date: "2025-03-27" },
  { id: 105, product: "Phone Case", status: "In Progress", date: "2025-03-30" },
  { id: 106, product: "Printed Clock", status: "Shipped", date: "2025-03-28" },
  { id: 107, product: "3D Model", status: "Shipped", date: "2025-03-29" },
  { id: 108, product: "Keychain", status: "Completed", date: "2025-03-27" },
  { id: 109, product: "Printed Jacket", status: "In Progress", date: "2025-03-30" },
  { id: 110, product: "Ceramic Mug", status: "In Progress", date: "2025-03-30" },
  { id: 111, product: "Golden Frame", status: "Completed", date: "2025-03-28" },
  { id: 112, product: "Name Plate", status: "In Progress", date: "2025-03-29" },
  { id: 113, product: "Printed Pants", status: "Shipped", date: "2025-03-28" },
  { id: 114, product: "Custom Dress", status: "Completed", date: "2025-03-27" },
  { id: 115, product: "Pen Holder", status: "In Progress", date: "2025-03-30" },
  { id: 116, product: "Key Holder", status: "Shipped", date: "2025-03-29" },
];

const statusConfig = {
  "In Progress": {
    className: "in-progress",
    icon: <FaHourglassHalf />,
    progress: 33,
  },
  "Shipped": {
    className: "shipped",
    icon: <FaShippingFast />,
    progress: 66,
  },
  "Completed": {
    className: "completed",
    icon: <FaCheckCircle />,
    progress: 100,
  },
};

const CustomerOrderTracking = () => {
  const [orders] = useState(ordersData);

  return (
    <div className="customer-order-tracking-container">
      <h2 className="tracking-title">📦 Track Your Orders</h2>
      <table className="tracking-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Date</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ id, product, status, date }) => (
            <tr key={id}>
              <td>#{id}</td>
              <td>{product}</td>
              <td>{date}</td>
              <td>
                <div className={`status-cell ${statusConfig[status]?.className || "unknown"}`}>
                  {statusConfig[status]?.icon}
                  <span>{status}</span>
                </div>
              </td>
              <td>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${statusConfig[status]?.className}`}
                    style={{ width: `${statusConfig[status]?.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrderTracking;
