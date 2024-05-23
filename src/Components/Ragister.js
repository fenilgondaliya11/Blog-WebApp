import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Style/ragister.css'
const bcrypt = require('bcryptjs');

const getLocalItem = () => {
    let list = localStorage.getItem('userData');
    if (list) {
        return JSON.parse(localStorage.getItem('userData'));
    } else {
        return [];
    }
}

function Ragister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const GotoLoginPage = () => {
        navigate('/Login');
    }

    const SubmitForm = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.error('Error hashing password:', err);
                return;
            }
            const newEntry = { name: name, email: email, password: hash, role: 'user' }; 
            const allData = getLocalItem();
            const updatedData = [...allData, newEntry];
            localStorage.setItem('userData', JSON.stringify(updatedData));
            toast.success("Registration successful!");
            GotoLoginPage();
        });
        
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <>

            <div className="login-container">
                <form className="login-form" onSubmit={SubmitForm}  >
                    <h2 className='text-light'>Registration</h2>
                    <div className="form-group">
                        <label className='lable' htmlFor="name">Name:</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name "
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='lable ' htmlFor="email">Email:</label>
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
                        <label className='lable' htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className='lable' htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className='btn2'>Register</button>

                    <p className='text-light'>
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Ragister;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Style/ragister.css';
// const bcrypt = require('bcryptjs');

// const getLocalItem = () => {
//     let list = localStorage.getItem('userData');
//     if (list) {
//         return JSON.parse(localStorage.getItem('userData'));
//     } else {
//         return [];
//     }
// }

// function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate();

//     const gotoLoginPage = () => {
//         navigate('/login');
//     }

//     const submitForm = (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         bcrypt.hash(password, 10, (err, hash) => {
//             if (err) {
//                 console.error('Error hashing password:', err);
//                 return;
//             }
//             const newEntry = { name: name, email: email, password: hash, role: 'user' }; // Default role is user

//             const allData = getLocalItem();
//             const updatedData = [...allData, newEntry];
//             localStorage.setItem('userData', JSON.stringify(updatedData));
//             toast.success("Registration successful!");
//             gotoLoginPage();

//         });

//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//     }

//     return (
//         <div className="register-container">
//             <form className="register-form" onSubmit={submitForm}>
//                 <h2>Registration</h2>
//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="name"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password:</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="Confirm your password"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn2">Register</button>
//                 <p>
//                     Already registered? <Link to="/login">Login</Link>
//                 </p>
//             </form>
//         </div>
//     );
// }

// export default Register;



