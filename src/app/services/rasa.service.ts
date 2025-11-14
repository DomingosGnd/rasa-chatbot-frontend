/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RasaService {
  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';  // URL do servidor Rasa

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const body = { sender: 'user', message: message };
    return this.http.post<any>(this.rasaUrl, body);
  }
}
*/

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class RasaService {
  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';  // URL do servidor Rasa

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const body = { sender: 'user', message: message };
    return this.http.post<any>(this.rasaUrl, body);
  }
}
*/



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RasaService {

  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';  // Verifique se o endereço está correto

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const payload = {
      sender: 'user',
      message: message
    };
    
    // Fazendo a requisição ao Rasa
    return this.http.post<any>(this.rasaUrl, payload);
  }
}
