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
  "In Progress": { className: "in-progress", icon: <FaHourglassHalf /> },
  "Completed": { className: "completed", icon: <FaCheckCircle /> },
  "Shipped": { className: "shipped", icon: <FaShippingFast /> },
};

const OrderTracking = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const orders = useMemo(
    () => [
      { id: 1, customer: "Ahmed Ali", phone: "01098765432", date: "2025-03-01", payment: "Credit Card", amount: "EGP 750", status: "In Progress" },
      { id: 2, customer: "Mona Khalil", phone: "01123456789", date: "2025-03-03", payment: "Vodafone Cash", amount: "EGP 1230", status: "Shipped" },
      { id: 3, customer: "Mohamed Said", phone: "01234567890", date: "2025-03-04", payment: "Cash on Delivery", amount: "EGP 980", status: "Completed" },
      { id: 4, customer: "Noha Salem", phone: "01022334455", date: "2025-03-05", payment: "Credit Card", amount: "EGP 520", status: "In Progress" },
      { id: 5, customer: "Ramy Hassan", phone: "01200112233", date: "2025-03-06", payment: "Bank Transfer", amount: "EGP 1100", status: "Completed" },
      { id: 6, customer: "Maha Tarek", phone: "01155667788", date: "2025-03-06", payment: "Cash on Delivery", amount: "EGP 890", status: "Shipped" },
      { id: 7, customer: "Abdullah Youssef", phone: "01067891234", date: "2025-03-07", payment: "Credit Card", amount: "EGP 645", status: "In Progress" },
      { id: 8, customer: "Sara Khaled", phone: "01299887766", date: "2025-03-07", payment: "Vodafone Cash", amount: "EGP 720", status: "Completed" },
      { id: 9, customer: "Khaled Abdelaziz", phone: "01010101010", date: "2025-03-08", payment: "Bank Transfer", amount: "EGP 1115", status: "In Progress" },
      { id: 10, customer: "Laila Emad", phone: "01111223344", date: "2025-03-08", payment: "Cash on Delivery", amount: "EGP 840", status: "Shipped" },
      { id: 11, customer: "Fatma Youssef", phone: "01137049595", date: "2025-03-09", payment: "Bank Transfer", amount: "EGP 782", status: "Shipped" },
      { id: 12, customer: "Ehab Gamal", phone: "01190752622", date: "2025-03-10", payment: "Cash on Delivery", amount: "EGP 823", status: "In Progress" },
      { id: 13, customer: "Yousra Sami", phone: "01042605012", date: "2025-03-11", payment: "Vodafone Cash", amount: "EGP 902", status: "Completed" },
      { id: 14, customer: "Alaa Karam", phone: "01062553533", date: "2025-03-12", payment: "Cash on Delivery", amount: "EGP 625", status: "Shipped" },
      { id: 15, customer: "Hoda Nasser", phone: "01216739825", date: "2025-03-13", payment: "Bank Transfer", amount: "EGP 538", status: "Completed" },
      { id: 16, customer: "Anwar Fouad", phone: "01040184536", date: "2025-03-14", payment: "Cash on Delivery", amount: "EGP 885", status: "Shipped" },
      { id: 17, customer: "Jehad Mostafa", phone: "01053601136", date: "2025-03-15", payment: "Vodafone Cash", amount: "EGP 626", status: "Shipped" },
      { id: 18, customer: "Yomna Elsayed", phone: "01285286316", date: "2025-03-16", payment: "Vodafone Cash", amount: "EGP 504", status: "Completed" },
      { id: 19, customer: "Adham Tarek", phone: "01290894768", date: "2025-03-17", payment: "Credit Card", amount: "EGP 677", status: "Shipped" },
      { id: 20, customer: "Shereen Hassan", phone: "01138192041", date: "2025-03-18", payment: "Cash on Delivery", amount: "EGP 913", status: "Completed" },
      { id: 21, customer: "Mazen Khaled", phone: "01219242430", date: "2025-03-19", payment: "Cash on Delivery", amount: "EGP 631", status: "Shipped" },
      { id: 22, customer: "Nihal Amr", phone: "01112695503", date: "2025-03-20", payment: "Credit Card", amount: "EGP 985", status: "In Progress" },
      { id: 23, customer: "Samer Ayman", phone: "01018907846", date: "2025-03-21", payment: "Vodafone Cash", amount: "EGP 553", status: "Shipped" },
      { id: 24, customer: "Rasha Abdallah", phone: "01115265449", date: "2025-03-22", payment: "Vodafone Cash", amount: "EGP 1039", status: "In Progress" },
      { id: 25, customer: "Hanan Shokry", phone: "01092496434", date: "2025-03-23", payment: "Cash on Delivery", amount: "EGP 914", status: "In Progress" },
      { id: 26, customer: "Saif Murad", phone: "01192189223", date: "2025-03-24", payment: "Vodafone Cash", amount: "EGP 1475", status: "In Progress" },
      { id: 27, customer: "Nermin Taha", phone: "01180880414", date: "2025-03-25", payment: "Cash on Delivery", amount: "EGP 1257", status: "Shipped" },
      { id: 28, customer: "Ziad Hussein", phone: "01270099766", date: "2025-03-26", payment: "Cash on Delivery", amount: "EGP 515", status: "Completed" },
      { id: 29, customer: "Lubna Tamer", phone: "01040326129", date: "2025-03-27", payment: "Bank Transfer", amount: "EGP 876", status: "Shipped" },
      { id: 30, customer: "Tim Allah", phone: "01266749277", date: "2025-03-28", payment: "Credit Card", amount: "EGP 1400", status: "Shipped" },
    ],
    []
  );

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = order.customer.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "All" || order.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, filterStatus, orders]);

  return (
    <div className="order-tracking-container">
      <h2 className="order-tracking-title">📦 Order Tracking</h2>

      <div className="tracking-controls">
        <div className="search-group">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search by customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <FaFilter className="icon" />
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="In Progress">In Progress</option>
            <option value="Shipped">Shipped</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="count-label">📋 Total: {filteredOrders.length}</div>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="no-results">🚫 No matching orders</p>
      ) : (
        <table className="order-tracking-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Order Date</th>
              <th>Payment Method</th>
              <th>Total Amount</th>
              <th>Status</th>
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
