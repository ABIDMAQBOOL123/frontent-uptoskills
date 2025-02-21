import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5); // Number of blogs per page
  const [totalPages, setTotalPages] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch blogs from the backend API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/blogs?page=${currentPage}&limit=${blogsPerPage}&search=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log("API Response:", data); // Log the response
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, searchQuery, blogsPerPage]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className={`loading ${darkMode ? "dark" : ""}`}>
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`error ${darkMode ? "dark" : ""}`}>Error: {error}</div>
    );
  }

  return (
    <div className={`blog-page ${darkMode ? "dark" : ""}`}>
      <h1>Blog</h1>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => {
            console.log("Rendering Blog:", blog); // Log each blog
            return (
              <div key={blog._id} className="blog-card">
                <h2>{blog.title}</h2>
                <p>{blog.summary}</p>
                <Link to={`/blogs/${blog._id}`} className="read-more">
                  Read More
                </Link>
              </div>
            );
          })
        ) : (
          <p>No blogs found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
