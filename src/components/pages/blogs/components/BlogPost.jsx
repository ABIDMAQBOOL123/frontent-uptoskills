import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // For Markdown support
import rehypeHighlight from "rehype-highlight"; // For syntax highlighting
import "highlight.js/styles/github-dark.css"; // Syntax highlighting theme
import styles from "./BlogPost.module.css"; // CSS Module
import SocialShareButtons from "./SocialShareButtons"; // Social sharing component
import CommentsSection from "./CommentsSection"; // Comments component
import ErrorBoundary from "./ErrorBoundary"; // Error boundary for better error handling

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Dummy blog data
  const dummyBlog = {
    _id: "1",
    title: "First Blog Post",
    content: `
# Heading 1
This is a sample blog post with **Markdown** support.

## Heading 2
Here's some code with syntax highlighting:
\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

### Heading 3
You can also add images:
![Sample Image](https://via.placeholder.com/600x400)

And lists:
- Item 1
- Item 2
- Item 3
    `,
  };

  // Simulate fetching blog post
  useEffect(() => {
    // Simulate a delay to mimic network request
    setTimeout(() => {
      setBlog(dummyBlog);
      setLoading(false);
    }, 1000); // 1 second delay
  }, [id]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Generate table of contents from headings
  const generateTableOfContents = (content) => {
    const headings = content.match(/<h[1-6]>(.*?)<\/h[1-6]>/g);
    if (!headings) return null;

    return (
      <div className={styles.toc}>
        <h3>Table of Contents</h3>
        <ul>
          {headings.map((heading, index) => {
            const text = heading.replace(/<[^>]+>/g, "");
            return (
              <li key={index}>
                <a href={`#heading-${index}`}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  if (loading) {
    return <div className={styles.loading}>Loading blog post...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <ErrorBoundary>
      <div className={`${styles.blogPost} ${darkMode ? styles.darkMode : ""}`}>
        {/* Dark mode toggle button */}
        <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Blog title */}
        <h1>{blog.title}</h1>

        {/* Table of contents */}
        {generateTableOfContents(blog.content)}

        {/* Blog content with Markdown and syntax highlighting */}
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className={styles.image}
              />
            ),
            h1: ({ node, ...props }) => <h1 id="heading-1" {...props} />,
            h2: ({ node, ...props }) => <h2 id="heading-2" {...props} />,
            h3: ({ node, ...props }) => <h3 id="heading-3" {...props} />,
          }}
        >
          {blog.content}
        </ReactMarkdown>

        {/* Social sharing buttons */}
        <SocialShareButtons url={window.location.href} title={blog.title} />

        {/* Comments section */}
        <CommentsSection postId={id} />
      </div>
    </ErrorBoundary>
  );
};

export default BlogPost;
