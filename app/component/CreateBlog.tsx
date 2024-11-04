// components/BlogForm.tsx
"use client";
import { useState } from "react";
import styles from "./CreateBlog.module.scss";
import { IBlogCreateRequest } from "../interface/Blog.interface"; // Adjust the path as needed
import service from "../service";

const CreateBlog = () => {
  const [formData, setFormData] = useState<IBlogCreateRequest>({
    title: "",
    content: {
      heading: "",
      subheading: "",
      detailsContent: "",
    },
    tags: [""],
    author: "",
    isTop: false,
    popUpText: "",
    category: "",
    thumbnail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // Use type assertion

    // Handle nested content fields
    if (name.startsWith("content.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        content: {
          ...prev.content,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    service.createBlogRequest(formData).subscribe({
      next: (data) => {
        if (!data.error) {
          alert("Blog created successfully!");
          setFormData({
            title: "",
            content: {
              heading: "",
              subheading: "",
              detailsContent: "",
            },
            tags: [""],
            author: "",
            isTop: false,
            popUpText: "",
            category: "",
            thumbnail: "",
          });
        } else {
          alert("Failed to create the blog: " + data.message);
        }
      },
      error: (err) => {
        console.error("Subscription error:", err);
        alert("An error occurred while creating the blog.");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`container-fluid mt-5 ${styles.form}`}
    >
      <div className="form-outline mb-4">
        <input
          type="text"
          name="title"
          style={{ width: "100%" }}
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          placeholder="Blog Title"
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="content.heading"
          style={{ width: "100%" }}
          value={formData.content.heading}
          onChange={handleChange}
          className="form-control"
          placeholder="Content Heading"
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="content.subheading"
          style={{ width: "100%" }}
          value={formData.content.subheading}
          onChange={handleChange}
          className="form-control"
          placeholder="Content Subheading"
        />
      </div>

      <div className="form-outline mb-4">
        <textarea
          name="content.detailsContent"
          style={{ width: "100%" }}
          value={formData.content.detailsContent}
          onChange={handleChange}
          className="form-control"
          placeholder="Details Content"
        ></textarea>
      </div>

      <div className="form-outline mb-4">
        {formData.tags.map((tag, index) => (
          <input
            key={index}
            type="text"
            value={tag}
            style={{ width: "100%" }}
            onChange={(e) => handleTagChange(index, e.target.value)}
            className="form-control mb-2"
            placeholder={`Tag ${index + 1}`}
          />
        ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setFormData((prev) => ({ ...prev, tags: [...prev.tags, ""] }))
            }
          >
            Add Tag
          </button>
        </div>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="author"
          value={formData.author}
          style={{ width: "100%" }}
          onChange={handleChange}
          className="form-control"
          placeholder="Author"
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="popUpText"
          value={formData.popUpText}
          onChange={handleChange}
          style={{ width: "100%" }}
          className="form-control"
          placeholder="Pop-up Text"
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{ width: "100%" }}
          className="form-control"
          placeholder="Category"
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          style={{ width: "100%" }}
          className="form-control"
          placeholder="Thumbnail URL"
        />
      </div>

      <div className="checkbox-container">
        <div className="form-check mb-4">
          <input
            type="checkbox"
            name="isTop"
            checked={formData.isTop}
            onChange={handleChange}
            id="isTop"
            className="form-check-input custom-checkbox"
          />
          <label className="form-check-label" htmlFor="isTop">
            Mark as Top Blog
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          type="submit"
          className={`btn btn-primary btn-block mb-4  ${styles.btn}`}
        >
          Create Blog
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
