import React, { useState } from "react";
import "../styles/ordertrackingcustomer.css";
import {
  FaShippingFast,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const ordersData = [
  { id: 101, product: "تيشيرت مخصص", status: "قيد التنفيذ", date: "2025-03-30" },
  { id: 102, product: "كوب بتصميم خاص", status: "مكتمل", date: "2025-03-28" },
  { id: 103, product: "إطار صور مخصص", status: "قيد الشحن", date: "2025-03-29" },
  { id: 104, product: "لوحة حائط", status: "مكتمل", date: "2025-03-27" },
  { id: 105, product: "حافظة موبايل", status: "قيد التنفيذ", date: "2025-03-30" },
  { id: 106, product: "ساعة مطبوعة", status: "قيد الشحن", date: "2025-03-28" },
  { id: 107, product: "مجسم 3D", status: "قيد الشحن", date: "2025-03-29" },
  { id: 108, product: "ميدالية مفاتيح", status: "مكتمل", date: "2025-03-27" },
  { id: 109, product: "جاكت مطبوع", status: "قيد التنفيذ", date: "2025-03-30" },
  { id: 110, product: "كوب سيراميك", status: "قيد التنفيذ", date: "2025-03-30" },
  { id: 111, product: "إطار صور ذهبي", status: "مكتمل", date: "2025-03-28" },
  { id: 112, product: "لوحة باسم", status: "قيد التنفيذ", date: "2025-03-29" },
  { id: 113, product: "بنطلون مطبوع", status: "قيد الشحن", date: "2025-03-28" },
  { id: 114, product: "فستان مخصص", status: "مكتمل", date: "2025-03-27" },
  { id: 115, product: "حامل أقلام", status: "قيد التنفيذ", date: "2025-03-30" },
  { id: 116, product: "حافظة مفاتيح", status: "قيد الشحن", date: "2025-03-29" },
];

const statusConfig = {
  "قيد التنفيذ": {
    className: "in-progress",
    icon: <FaHourglassHalf />,
    progress: 33,
  },
  "قيد الشحن": {
    className: "shipped",
    icon: <FaShippingFast />,
    progress: 66,
  },
  "مكتمل": {
    className: "completed",
    icon: <FaCheckCircle />,
    progress: 100,
  },
};

const CustomerOrderTracking = () => {
  const [orders] = useState(ordersData);

  return (
    <div className="customer-order-tracking-container">
      <h2 className="tracking-title">📦 تتبع طلباتك</h2>
      <table className="tracking-table">
        <thead>
          <tr>
            <th>رقم الطلب</th>
            <th>المنتج</th>
            <th>التاريخ</th>
            <th>الحالة</th>
            <th>التقدم</th>
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
