import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serverEndpoint = 'https://your-server.com/send-email'; // Replace with your server-side endpoint URL

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string) {
    const body = {
      name: name,
      email: email,
      message: message,
    };

    return this.http.post(this.serverEndpoint, body);
  }
}