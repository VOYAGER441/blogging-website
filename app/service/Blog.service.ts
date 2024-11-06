/* eslint-disable @typescript-eslint/no-explicit-any */
// services/loginService.js
import axios from 'axios';
import { from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IBlogCreateRequest } from '../interface/Blog.interface';

export const loginRequest = (userName: string | number | boolean, password: string | number | boolean) => {
  // const url = `https://bloging-backend-production.up.railway.app/blog/check?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;

  const url = `https://bloging-backend-q74o.onrender.com/blog/check?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;
  
  console.log(url);
  

  // Convert the axios promise into an observable using `from`
  return from(
    axios.get(url)
  ).pipe(
    map((response: { data: any; }) => response.data), // Extract data from the response
    catchError((error: any) => {
      console.error('Login error:', error);
      return of({ error: true, message: 'Login failed' });
    })
  );
};


// create

export const createBlogRequest = (blogData: IBlogCreateRequest) => {
  // const url = 'https://bloging-backend-production.up.railway.app/blog/create'; // Adjust URL as needed

  const url = 'https://bloging-backend-q74o.onrender.com/blog/create';
  // Convert the axios promise into an observable using `from`
  return from(
    axios.post(url, blogData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).pipe(
    map((response: { data: any; }) => response.data), // Extract data from the response
    catchError((error: any) => {
      console.error('Create blog error:', error);
      return of({ error: true, message: 'Failed to create blog' });
    })
  );
};



export const getAll = ({skip,limit}:{skip:any,limit:any}) => {
  // const url = `https://bloging-backend-production.up.railway.app/blog/getAll?skip=${skip}&limit=${limit}`; // Adjust URL as needed

   const url = `https://bloging-backend-q74o.onrender.com/blog/getAll?skip=${skip}&limit=${limit}`;
  // Convert the axios promise into an observable using `from`
  return from(
    axios.get(url )
  ).pipe(
    map((response: { data: any; }) => response.data), // Extract data from the response
    catchError((error: any) => {
      console.error('Create blog error:', error);
      return of({ error: true, message: 'Failed to create blog' });
    })
  );
};

export const getTop = ({skip,limit}:{skip:any,limit:any}) => {
  // const url = `https://bloging-backend-production.up.railway.app/blog/top?skip=${skip}&limit=${limit}`; // Adjust URL as needed

   const url = `https://bloging-backend-q74o.onrender.com/blog/top?skip=${skip}&limit=${limit}`;
  // Convert the axios promise into an observable using `from`
  return from(
    axios.get(url )
  ).pipe(
    map((response: { data: any; }) => response.data), // Extract data from the response
    catchError((error: any) => {
      console.error('Create blog error:', error);
      return of({ error: true, message: 'Failed to create blog' });
    })
  );
};


// service for get data by slug
export const getDataBySlug = ({slug}:{slug:any}) => {
  // const url = `https://bloging-backend-production.up.railway.app/blog/top?skip=${skip}&limit=${limit}`; // Adjust URL as needed

   const url = `https://bloging-backend-q74o.onrender.com/blog/slug/${slug}`;
  // Convert the axios promise into an observable using `from`
  return from(
    axios.get(url )
  ).pipe(
    map((response: { data: any; }) => response.data), // Extract data from the response
    catchError((error: any) => {
      console.error('Create blog error:', error);
      return of({ error: true, message: 'Failed to create blog' });
    })
  );
};