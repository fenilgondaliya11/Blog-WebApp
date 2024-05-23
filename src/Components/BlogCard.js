import React, { useState, useEffect } from 'react';
import '../Style/blogCard.css';
import { Link, useNavigate } from 'react-router-dom';


const BlogCard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogData')) || [];
        setBlogs(storedBlogs);
    }, []);

    const handleReadMore = (id) => {
        navigate(`/ReadBlog`);
    };

    return (
        <div className="maincon">
            <div className="container blog mt-5">
                <h2 className="text-light text-center" style={{ fontFamily: 'Cursive' }}>Read The Blogs</h2>
                <div className="row mt-4">
                    {blogs.map(blog => (
                        <div className="col-lg-3 col-sm-6 mb-3" key={blog.id}>
                            <Link to="/ReadBlog" className="card-link">
                                <div className="card">
                                    <div className="card__header">
                                        <img src={blog.photo} className="card-img-top" alt={blog.title} />
                                    </div>
                                    <div className="card__body">
                                        <span className="tag tag-blue">Technology</span>
                                        <h4>{blog.title}</h4>
                                        <p className="card-text text-dark">{blog.description}</p>
                                    </div>
                                    <div className="card__footer">
                                        <div className="user">
                                            <img
                                                src="https://i.pravatar.cc/40?img=2"
                                                alt="user__image"
                                                className="user__image"
                                            />
                                            <div className="user__info">
                                                <h5 className="card-title">{blog.title}</h5>
                                                <small>2h ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <button className="btn btn-light w-25 mt-3 mx-auto " onClick={handleReadMore}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

