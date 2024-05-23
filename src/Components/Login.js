import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../Context/AuthContext';
const bcrypt = require('bcryptjs');

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const submitForm = (e) => {
        e.preventDefault();


        if (email === 'admin@gmail.com' && password === '111' && role === 'admin') {
            const adminUser = { email: email, role: 'admin' };
            toast.success('Admin login successful!');
            login(adminUser);
            navigate('/');
            return;
        }


        const userDataJSON = localStorage.getItem('userData');

        if (!userDataJSON) {
            toast.error('No user data found. Please register now.');
            return;
        }

        const userData = JSON.parse(userDataJSON);

        const user = userData.find(user => user.email === email && user.role === role);

        if (!user) {
            toast.error('User not found or incorrect role. Please register or select correct role.');
            return;
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return;
            }

            if (!isMatch) {
                toast.error('Invalid email or password');
                return false;
            }

            toast.success('Login successful!');
            login(user);
            navigate('/');
        });

        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div className="login-container">
                <form className="login-form" onSubmit={submitForm} >
                    <h2 className='text-light'>Login</h2>

                    <div className="form-group">
                        <label htmlFor="role" className="form-label">Role:</label>
                        <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="form-select">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    

                    <button type="submit" className='btn btn-primary btn2'>Login</button>
                    <p className='text-light'>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;
