/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./page.module.scss"
import CreateBlog from '../componemt/CreateBlog'

const page = () => {
  return (
    <div>
        
    <div className={`${styles.wrapper} container `}>
      <div className={styles.logo}>
        <img
          src="/assets/logo2.png"
          alt="Twitter"
        />
      </div>
      <div className={`text-center mt-4 ${styles.name}`}>Bit By Bits</div>
      <form className={`p-3 mt-3 ${styles.form}`}>
        <div className={`${styles.formField} d-flex align-items-center`}>
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className={`${styles.formField} d-flex align-items-center`}>
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button className={`btn mt-3 ${styles.btn}`}>Login</button>
      </form>
      {/* <div className={`text-center fs-6 ${styles.links}`}>
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div> */}
    </div>

<CreateBlog/>


    </div>
  )
}

export default page