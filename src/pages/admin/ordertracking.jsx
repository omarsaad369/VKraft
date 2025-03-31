// src/pages/admin/OrderTracking.jsx

import React, { useMemo, useState } from "react";
import "../../styles/ordertracking.css";
import {
  FaShippingFast,
  FaCheckCircle,
  FaHourglassHalf,
  FaFilter,
  FaSearch,
} from "react-icons/fa";

const statusConfig = {
  "قيد التنفيذ": { className: "in-progress", icon: <FaHourglassHalf /> },
  "مكتمل": { className: "completed", icon: <FaCheckCircle /> },
  "قيد الشحن": { className: "shipped", icon: <FaShippingFast /> },
};

const OrderTracking = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("الكل");

  const orders = useMemo(
    () => [
      { id: 1, customer: "أحمد علي", phone: "01098765432", date: "2025-03-01", payment: "بطاقة ائتمان", amount: "750 ج.م", status: "قيد التنفيذ" },
  { id: 2, customer: "منى خليل", phone: "01123456789", date: "2025-03-03", payment: "فودافون كاش", amount: "1230 ج.م", status: "قيد الشحن" },
  { id: 3, customer: "محمد سعيد", phone: "01234567890", date: "2025-03-04", payment: "دفع عند الاستلام", amount: "980 ج.م", status: "مكتمل" },
  { id: 4, customer: "نهى سالم", phone: "01022334455", date: "2025-03-05", payment: "بطاقة ائتمان", amount: "520 ج.م", status: "قيد التنفيذ" },
  { id: 5, customer: "رامي حسن", phone: "01200112233", date: "2025-03-06", payment: "تحويل بنكي", amount: "1100 ج.م", status: "مكتمل" },
  { id: 6, customer: "مها طارق", phone: "01155667788", date: "2025-03-06", payment: "دفع عند الاستلام", amount: "890 ج.م", status: "قيد الشحن" },
  { id: 7, customer: "عبدالله يوسف", phone: "01067891234", date: "2025-03-07", payment: "بطاقة ائتمان", amount: "645 ج.م", status: "قيد التنفيذ" },
  { id: 8, customer: "سارة خالد", phone: "01299887766", date: "2025-03-07", payment: "فودافون كاش", amount: "720 ج.م", status: "مكتمل" },
  { id: 9, customer: "خالد عبدالعزيز", phone: "01010101010", date: "2025-03-08", payment: "تحويل بنكي", amount: "1115 ج.م", status: "قيد التنفيذ" },
  { id: 10, customer: "ليلى عماد", phone: "01111223344", date: "2025-03-08", payment: "دفع عند الاستلام", amount: "840 ج.م", status: "قيد الشحن" },
  { id: 11, customer: "فاطمة يوسف", phone: "01137049595", date: "2025-03-09", payment: "تحويل بنكي", amount: "782 ج.م", status: "قيد الشحن" },
  { id: 12, customer: "إيهاب جمال", phone: "01190752622", date: "2025-03-10", payment: "دفع عند الاستلام", amount: "823 ج.م", status: "قيد التنفيذ" },
  { id: 13, customer: "يسرا سامي", phone: "01042605012", date: "2025-03-11", payment: "فودافون كاش", amount: "902 ج.م", status: "مكتمل" },
  { id: 14, customer: "علاء كرم", phone: "01062553533", date: "2025-03-12", payment: "دفع عند الاستلام", amount: "625 ج.م", status: "قيد الشحن" },
  { id: 15, customer: "هدى ناصر", phone: "01216739825", date: "2025-03-13", payment: "تحويل بنكي", amount: "538 ج.م", status: "مكتمل" },
  { id: 16, customer: "أنور فؤاد", phone: "01040184536", date: "2025-03-14", payment: "دفع عند الاستلام", amount: "885 ج.م", status: "قيد الشحن" },
  { id: 17, customer: "جهاد مصطفى", phone: "01053601136", date: "2025-03-15", payment: "فودافون كاش", amount: "626 ج.م", status: "قيد الشحن" },
  { id: 18, customer: "يمنى السيد", phone: "01285286316", date: "2025-03-16", payment: "فودافون كاش", amount: "504 ج.م", status: "مكتمل" },
  { id: 19, customer: "أدهم طارق", phone: "01290894768", date: "2025-03-17", payment: "بطاقة ائتمان", amount: "677 ج.م", status: "قيد الشحن" },
  { id: 20, customer: "شيرين حسن", phone: "01138192041", date: "2025-03-18", payment: "دفع عند الاستلام", amount: "913 ج.م", status: "مكتمل" },
  { id: 21, customer: "مازن خالد", phone: "01219242430", date: "2025-03-19", payment: "دفع عند الاستلام", amount: "631 ج.م", status: "قيد الشحن" },
  { id: 22, customer: "نهال عمرو", phone: "01112695503", date: "2025-03-20", payment: "بطاقة ائتمان", amount: "985 ج.م", status: "قيد التنفيذ" },
  { id: 23, customer: "سامر أيمن", phone: "01018907846", date: "2025-03-21", payment: "فودافون كاش", amount: "553 ج.م", status: "قيد الشحن" },
  { id: 24, customer: "رشا عبد الله", phone: "01115265449", date: "2025-03-22", payment: "فودافون كاش", amount: "1039 ج.م", status: "قيد التنفيذ" },
  { id: 25, customer: "حنان شكري", phone: "01092496434", date: "2025-03-23", payment: "دفع عند الاستلام", amount: "914 ج.م", status: "قيد التنفيذ" },
  { id: 26, customer: "سيف مراد", phone: "01192189223", date: "2025-03-24", payment: "فودافون كاش", amount: "1475 ج.م", status: "قيد التنفيذ" },
  { id: 27, customer: "نرمين طه", phone: "01180880414", date: "2025-03-25", payment: "دفع عند الاستلام", amount: "1257 ج.م", status: "قيد الشحن" },
  { id: 28, customer: "زياد حسين", phone: "01270099766", date: "2025-03-26", payment: "دفع عند الاستلام", amount: "515 ج.م", status: "مكتمل" },
  { id: 29, customer: "لبنى تامر", phone: "01040326129", date: "2025-03-27", payment: "تحويل بنكي", amount: "876 ج.م", status: "قيد الشحن" },
  { id: 30, customer: "تيم الله", phone: "01266749277", date: "2025-03-28", payment: "بطاقة ائتمان", amount: "1400 ج.م", status: "قيد الشحن" },
    ],
    []
  );

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = order.customer.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "الكل" || order.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, filterStatus, orders]);

  return (
    <div className="order-tracking-container">
      <h2 className="order-tracking-title">📦 تتبُّع الطلبات</h2>

      <div className="tracking-controls">
        <div className="search-group">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="ابحث باسم العميل..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <FaFilter className="icon" />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="الكل">الكل</option>
            <option value="قيد التنفيذ">قيد التنفيذ</option>
            <option value="قيد الشحن">قيد الشحن</option>
            <option value="مكتمل">مكتمل</option>
          </select>
        </div>

        <div className="count-label">📋 الإجمالي: {filteredOrders.length}</div>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="no-results">🚫 لا توجد طلبات مطابقة</p>
      ) : (
        <table className="order-tracking-table">
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>اسم العميل</th>
              <th>رقم الجوال</th>
              <th>تاريخ الطلب</th>
              <th>طريقة الدفع</th>
              <th>المبلغ الإجمالي</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(({ id, customer, phone, date, payment, amount, status }) => (
              <tr key={id}>
                <td>#{id}</td>
                <td>{customer}</td>
                <td>{phone}</td>
                <td>{date}</td>
                <td>{payment}</td>
                <td>{amount}</td>
                <td className={`status-cell ${statusConfig[status]?.className}`}>
                  {statusConfig[status]?.icon} {status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderTracking;
