/* eslint-disable @typescript-eslint/no-explicit-any */
// services/loginService.js
import axios from 'axios';
import { from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IBlogCreateRequest } from '../interface/Blog.interface';

export const loginRequest = (userName: string | number | boolean, password: string | number | boolean) => {
  const url = `https://bloging-backend-production.up.railway.app/blog/check?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;
  
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
  const url = 'https://bloging-backend-production.up.railway.app/blog/create'; // Adjust URL as needed

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


