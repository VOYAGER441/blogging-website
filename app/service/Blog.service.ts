/* eslint-disable @typescript-eslint/no-explicit-any */
// services/loginService.js
import axios from 'axios';
import { from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const loginRequest = (userName: string | number | boolean, password: string | number | boolean) => {
  const url = `http://localhost:5000/blog/check?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;
  
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
