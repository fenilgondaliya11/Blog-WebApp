import React, { useState, useEffect } from 'react';
import '../Style/AllUsers.css';

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        const userDataJSON = localStorage.getItem('userData');
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            setUsers(userData);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setFormData({ name: user.name, email: user.email });
    };

    const handleUpdate = () => {
        if (!formData.name || !formData.email) {
            alert('Please fill out both fields');
            return;
        }
        const updatedUsers = users.map((user) =>
            user.email === editingUser.email ? { ...user, ...formData } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
        setEditingUser(null);
        setFormData({ name: '', email: '' });
    };

    const handleDelete = (user) => {
        const updatedUsers = users.filter((u) => u.email !== user.email);
        setUsers(updatedUsers);
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
    };

    return (
        <>
            <div className="main-container">
                <div className="blur-circle1"></div>
                <div className="blur-circle2"></div>
                <div className="all-users-container">
                    <h1>All Users</h1>

                    <div>
                        <div className="container row mt-4">
                            <div className="col-md-4 mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleUpdate}
                                    disabled={!editingUser}
                                >
                                    {editingUser ? 'Update' : 'Select a user to edit'}
                                </button>
                            </div>
                        </div>

                        <table className="user-table">
                            <thead >
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning me-3"
                                                onClick={() => handleEdit(user)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(user)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllUsers;
