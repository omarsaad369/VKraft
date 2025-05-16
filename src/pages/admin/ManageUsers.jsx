import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/userSlice";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import "../../styles/ManageUsers.css";

const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!Array.isArray(users)) {
      setFilteredUsers([]);
      return;
    }

    if (search.trim() === "") {
      setFilteredUsers(users);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = users.filter(
        (u) =>
          u.name.toLowerCase().includes(lowerSearch) ||
          u.email.toLowerCase().includes(lowerSearch)
      );
      setFilteredUsers(filtered);
    }
  }, [search, users]);

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  if (loading) {
    return (
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
    );
  }

  return (
    <div className="manage-users-container">
      <h2 className="page-title">
        <FaUsers /> Manage Users
      </h2>

      <div className="user-tools">
        <input
          type="text"
          placeholder="... Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <span className="total-count">Total: {filteredUsers.length}</span>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="no-users">No users found.</p>
      ) : (
        <div className="user-list">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <FaUser className="user-icon" />
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(user.id)}
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
