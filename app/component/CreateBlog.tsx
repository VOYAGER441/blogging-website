/* eslint-disable @typescript-eslint/no-explicit-any */
// components/BlogForm.js
'use client'
import { useState } from 'react';
import styles from './CreateBlog.module.scss';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
    additionalInfo: '',
    createAccount: true,
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Blog created successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          address: '',
          email: '',
          phone: '',
          additionalInfo: '',
          createAccount: true,
        });
      } else {
        alert('Failed to create the blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${styles.form}`}>
      <div className="row mb-4">
        <div className="col">
          <div className={`form-outline ${styles.formOutline}`}>
            <input
              type="text"
              id="form6Example1"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="col">
          <div className={`form-outline ${styles.formOutline}`}>
            <input
              type="text"
              id="form6Example2"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>

      <div className={`form-outline mb-4 ${styles.formOutline}`}>
        <input
          type="text"
          id="form6Example3"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="form-control"
          placeholder="Company Name"
        />
      </div>

      <div className={`form-outline mb-4 ${styles.formOutline}`}>
        <input
          type="text"
          id="form6Example4"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-control"
          placeholder="Address"
        />
      </div>

      <div className={`form-outline mb-4 ${styles.formOutline}`}>
        <input
          type="email"
          id="form6Example5"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
      </div>

      <div className={`form-outline mb-4 ${styles.formOutline}`}>
        <input
          type="number"
          id="form6Example6"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          placeholder="Phone"
        />
      </div>

      <div className={`form-outline mb-4 ${styles.formOutline}`}>
        <textarea
          className="form-control"
          id="form6Example7"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={()=>handleChange}
          
          placeholder="Additional information"
        ></textarea>
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          name="createAccount"
          checked={formData.createAccount}
          onChange={handleChange}
          id="form6Example8"
        />
        <label className="form-check-label" htmlFor="form6Example8">
          Create an account?
        </label>
      </div>

      <button type="submit" className={`btn btn-primary btn-block mb-4 ${styles.btn}`}>
        Place order
      </button>
    </form>
  );
};

export default CreateBlog;
