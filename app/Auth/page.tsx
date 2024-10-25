/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
// import { loginRequest } from "../service/Blog.service";
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import service from '../service';

const Page = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Clear any previous error messages
  
    if (userName && password) {
      service.loginRequest(userName, password).subscribe({
        next: (result: any) => {
          console.log('API Response:', result);
          if (result === true) {
            console.log('Login successful:', result);
            router.push('/Post');
          } else {
            setErrorMessage('Invalid login credentials.');
          }
        },
        error: (error: any) => {
          console.error('An error occurred:', error);
          setErrorMessage('An error occurred. Please try again.');
        },
      });
    } else {
      setErrorMessage('Please fill in both fields.');
    }
  };
  
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.logo}>
        <img src="/assets/logo2.png" alt="Twitter" />
      </div>
      <div className={`text-center mt-4 ${styles.name}`}>Bit By Bits</div>
      <form className={`p-3 mt-3 ${styles.form}`} onSubmit={handleLogin}>
        <div className={`${styles.formField} d-flex align-items-center`}>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={`${styles.formField} d-flex align-items-center`}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={`btn mt-3 ${styles.btn}`}>Login</button>
        {errorMessage && (
          <div className={`text-danger mt-3 ${styles.errorMessage}`}>
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
