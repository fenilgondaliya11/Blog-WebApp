import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarComp from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import { CiLogin } from 'react-icons/ci';
import { FaUserCircle, FaUserShield, FaRegistered } from 'react-icons/fa';
import logo from '../Style/logo1.png';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    const handleLogin = () => {
        if (user) {
            logout();
        }
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    const about = () => {
        navigate('/about');
    };

    const contactUs = () => {
        navigate('/contactus');
    };

    const home = () => {
        navigate('/');
    };

    const blogNavigation = () => {
        if (user) {
            if (user.role === 'admin') {
                navigate('/blogcurd');
            } else {
                navigate('/BlogCard');
            }
        } else {
            navigate('/BlogCard');
        }
    };

    const allUsers = () => {
        navigate('/allusers');
    };

    const allBlogs = () => {
        navigate('/allblogs');
    };

    const Profile = () => {
        navigate('/profile');
    };

    const newsblogs = () => {
        navigate('/newsblogs');
    };

    return (
        <NavbarComp bg="dark" variant="dark" expand="lg">
            <Container>
                <NavbarComp.Brand onClick={home} style={{ cursor: 'pointer' }}>
                    <img
                        src={logo}
                        alt="Logo"
                        height="50"
                        className="d-inline-block align-top"
                        style={{ marginRight: '10px' }}
                    />
                </NavbarComp.Brand>
                <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
                <NavbarComp.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={home}>Home</Nav.Link>
                        <Nav.Link onClick={blogNavigation}>Blogs</Nav.Link>
                        <Nav.Link onClick={newsblogs}>News</Nav.Link>

                        
                        <Nav.Link onClick={about}>About</Nav.Link>
                        <Nav.Link onClick={contactUs}>Contact Us</Nav.Link>
                        {user && user.role === 'admin' && (
                            <NavDropdown title="Admin" id="admin-dropdown">
                                <NavDropdown.Item onClick={allBlogs}>All Blogs</NavDropdown.Item>
                                <NavDropdown.Item onClick={allUsers}>All Users</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <Nav.Item className="d-flex align-items-center">
                                    {user.role === 'admin' ? (
                                        <>
                                            <FaUserShield className="text-light fs-4 me-2" />
                                            <span className="text-light me-3">Admin</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaUserCircle className="text-light fs-4 me-2" onClick={Profile} />
                                            <span className="text-light me-3">{user.name}</span>
                                        </>
                                    )}
                                </Nav.Item>
                                <Nav.Link onClick={handleLogin} className="d-flex align-items-center">
                                    <CiLogin className="text-light fs-4" />
                                    <span className="text-light ms-1">Logout</span>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link onClick={handleRegister} className="d-flex align-items-center">
                                    <FaRegistered className="text-light fs-4" />
                                    <span className="text-light ms-1">Register</span>
                                </Nav.Link>

                                <Nav.Link onClick={handleLogin} className="d-flex align-items-center">
                                    <CiLogin className="text-light fs-4" />
                                    <span className="text-light ms-1">Login</span>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </NavbarComp.Collapse>
            </Container>
        </NavbarComp>
    );
};

export default Navbar;
