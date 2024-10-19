'use client'
import React, { useEffect } from 'react';
import Styles from "./Cursor.module.scss"
const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement | null;

    const handleMouseMove = (e: { pageY: number; pageX: number }) => {
      if (cursor) {
        cursor.setAttribute(
          'style',
          `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`
        );
      }
    };

    const handleClick = () => {
      if (cursor) {
        cursor.classList.add(Styles.expand);
        setTimeout(() => {
          cursor.classList.remove(Styles.expand);
        }, 500);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div className={`cursor ${Styles.cursor}`}></div>;
};

export default Cursor;
