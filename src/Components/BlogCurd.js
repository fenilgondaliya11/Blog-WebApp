import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Style/homepage.css';
import '../Style/BlogCurd.css';

const BlogCrud = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', description: '', photo: null });
    const [blogs, setBlogs] = useState([]);

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

    const handleCreate = () => {
        if (!user) {
            toast.error('Please login to create a blog.');
            return;
        }
        if (!formData.title.trim() || !formData.description.trim() || !formData.photo) {
            toast.error('Please fill in all the required fields.');
            return;
        }
        const plainDescription = stripHtmlTags(formData.description);
        const newData = {
            id: Date.now(),
            title: formData.title,
            description: plainDescription,
            photo: formData.photo,
        };
        const updatedBlogs = [...blogs, newData];
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
        setFormData({ title: '', description: '', photo: null });
        toast.success('Blog created successfully.');
    };

    const handleView = () => {
        navigate('/BlogCard');
    };

    return (
        <>
        <div className="blg">
            <div className="blur-circle1"></div>
            <div className="blur-circle2"></div>
            <div className="container-fluid justify-content-center align-items-center d-flex flex-column blog">
                <h1 className="mt-5 text-light" style={{ fontFamily: 'Cursive' }}>TechTrends!</h1>

                <div className="blog-container col-md-6 row mt-4">
                    <div className="col-md-12 mb-3">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter blog title"
                        />
                    </div>

                    <div className="col-md-12 mb-3 blog-description-container">
                        <ReactQuill
                            value={formData.description}
                            onChange={(value) => setFormData({ ...formData, description: value })}
                            placeholder="Enter blog description"
                        />
                    </div>

                    <div className="col-md-12 mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="photo"
                            accept="image/*"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-md-12 mt-3">
                        <button className="btn btn-primary" onClick={handleCreate}>Post</button>
                        <button className="btn btn-success ms-3" onClick={handleView}>View</button>
                    </div>
                </div>
            </div>
            </div>
        </>

    );
};

export default BlogCrud;
