import React, { useState, useEffect, useContext } from 'react';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import '../Style/AllBlog.css'; 

const AllBlog = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', description: '', photo: null });
    const [blogs, setBlogs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogData')) || [];
        setBlogs(storedBlogs);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, photo: reader.result });
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const stripHtmlTags = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    const handleUpdate = () => {
        if (!user) {
            toast.error('Please login to update a blog.');
            return;
        }
        if (!formData.title.trim() || !formData.description.trim() || !formData.photo) {
            toast.error('Please fill in all the required fields.');
            return;
        }
        const plainDescription = stripHtmlTags(formData.description);
        const updatedBlogs = blogs.map((blog) =>
            blog.id === editId ? { ...blog, title: formData.title, description: plainDescription, photo: formData.photo } : blog
        );
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
        setFormData({ title: '', description: '', photo: null });
        setIsEditing(false);
        setEditId(null);
        setShowModal(false);
        toast.success('Blog updated successfully.');
    };

    const handleView = () => {
        navigate('/BlogCard');
    };

    const handleEdit = (id) => {
        const blogToEdit = blogs.find((blog) => blog.id === id);
        if (!user) {
            toast.error('Please login to edit a blog.');
            return;
        }
        setFormData({ title: blogToEdit.title, description: blogToEdit.description, photo: blogToEdit.photo });
        setIsEditing(true);
        setEditId(id);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (!user) {
            toast.error('Please login to delete a blog.');
            return;
        }
        const updatedBlogs = blogs.filter((blog) => blog.id !== id);
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
        toast.success('Blog deleted successfully.');
    };

    return (
        <div className="main-container">
            <div className="container-fluid justify-content-center align-items-center d-flex flex-column blog">
                <h1 className="mt-5 text-light">TechTrends All Blogs!</h1>
            </div>

            <div className="container-fluid table-responsive">
                <table className="user-table table-hover table-bordered ">
                    <thead className="table-dark">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Photo</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id}>
                                <td className='text-light'>{blog.title}</td>
                                <td className="text-truncate text-light" style={{ maxWidth: '150px' }}>{blog.description}</td>
                                <td><img src={blog.photo} alt="Blog" className="img-fluid" style={{ maxWidth: '100px', height: 'auto' }} /></td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-info" onClick={() => handleEdit(blog.id)}>Edit</button>
                                        <button className="btn btn-success ms-3" onClick={handleView}>View</button>
                                        <button className="btn btn-danger ms-3" onClick={() => handleDelete(blog.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label text-dark">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label text-dark">Description</label>
                            <ReactQuill value={formData.description} onChange={(value) => setFormData({ ...formData, description: value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo" className="form-label text-dark">Photo</label>
                            <input type="file" className="form-control" id="photo" name="photo" onChange={handleInputChange} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleUpdate}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllBlog;
