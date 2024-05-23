import React, { useState, useEffect } from 'react';
import '../Style/ReadBlog.css';
import '../Style/homepage.css';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const ReadBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogData')) || [];
        setBlogs(storedBlogs.map(blog => ({ ...blog, showComments: false })));
    }, []);

    const handleAction = (index, action) => {
        const updatedBlogs = [...blogs];
        switch (action) {
            case 'like':
                const likedUsers = updatedBlogs[index].likedUsers || [];
                const currentUser = 'currentUser';
                if (likedUsers.includes(currentUser)) {
                    updatedBlogs[index].liked = false;
                    updatedBlogs[index].likes = (updatedBlogs[index].likes || 0) - 1;
                    updatedBlogs[index].likedUsers = likedUsers.filter(user => user !== currentUser);
                } else {
                    updatedBlogs[index].liked = true;
                    updatedBlogs[index].likes = (updatedBlogs[index].likes || 0) + 1;
                    updatedBlogs[index].likedUsers = [...likedUsers, currentUser];
                }
                break;
            case 'comment':
                updatedBlogs[index].showComments = !updatedBlogs[index].showComments;
                break;
            case 'share':
                console.log("Post shared:", updatedBlogs[index].title);
                break;
            default:
                break;
        }
        setBlogs(updatedBlogs);
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
    };

    const addComment = (index) => {
        const updatedBlogs = [...blogs];
        updatedBlogs[index].comments = updatedBlogs[index].comments || [];
        if (!Array.isArray(updatedBlogs[index].comments)) {
            updatedBlogs[index].comments = [commentInput];
        } else {
            updatedBlogs[index].comments.push(commentInput);
        }
        setBlogs(updatedBlogs);
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
        setCommentInput('');
    };

    return (
        <>
            <div className="main">
                <div className="blur-circle1"></div>
                <div className="blur-circle2"></div>
                <div id="main-content" className="blog-page">
                    <div className="container ">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 left-box">
                                {blogs.map((blog, index) => (
                                    <div className="cardd single_post mt-4" key={index}>
                                        <div className="body">
                                            <div className="img-post">
                                                <img
                                                    className="d-block img-fluid"
                                                    src={blog.photo}
                                                    alt={blog.title}
                                                />
                                            </div>
                                            <h3>
                                                <h4>{blog.title}</h4>
                                                <p className='text-dark'>{blog.description}</p>
                                            </h3>
                                            <div className="actions">
                                                <FaHeart
                                                    style={{ fontSize: '24px', color: blog.liked ? 'red' : 'grey' }}
                                                    onClick={() => handleAction(index, 'like')}
                                                />
                                                <FaCommentAlt
                                                    style={{ fontSize: '24px', color: '#e8a140' }}
                                                    onClick={() => handleAction(index, 'comment')}
                                                />
                                                <FaShare
                                                    style={{ fontSize: '24px', color: '#3bcafe' }}
                                                    onClick={() => handleAction(index, 'share')}
                                                />
                                            </div>
                                            <div className="like-comment-share">
                                                <span>{blog.likes || 0} Likes</span>
                                                <span>{blog.comments ? blog.comments.length : 0} Comments</span>
                                            </div>
                                            {blog.showComments && (
                                                <div className="comments">
                                                    {blog.comments && blog.comments.map((comment, commentIndex) => (
                                                        <div key={commentIndex}>{comment}</div>
                                                    ))}
                                                    <div className="comment-input ">
                                                        <input
                                                            type="text"
                                                            placeholder="Write a comment..."
                                                            value={commentInput}
                                                            onChange={(e) => setCommentInput(e.target.value)}
                                                        />
                                                        <button className='btn btn-primary mt-1' onClick={() => addComment(index)}>Post</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-4 col-md-12  mt-4 right-box">
                                <div className="card">
                                    <div className="header">
                                        <h2>
                                            Email Newsletter{" "}
                                            <small>
                                                Get our products/news earlier than others, let's get in touch.
                                            </small>
                                        </h2>
                                    </div>
                                    <div className="body widget newsletter">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                aria-label="Enter your email"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className=" mt-2">
                                    {blogs.map(blog => (
                                        <div className="col mb-3" key={blog.id}>
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReadBlog;
