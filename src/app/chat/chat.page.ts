/*

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userInput: string = '';
  messages: Array<{text: string, sender: string}> = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    const message = {text: this.userInput, sender: 'user'};
    this.messages.push(message);
    
    // Envia a mensagem para o Rasa via API REST
    this.http.post('http://localhost:5005/webhooks/rest/webhook', {
      sender: 'user',  // Identificador do usuário
      message: this.userInput
    }).subscribe((response: any) => {
      response.forEach((resp: any) => {
        this.messages.push({text: resp.text, sender: 'bot'});
      });
    });

    // Limpa o input depois de enviar
    this.userInput = '';
  }
}



import { Component } from '@angular/core';
import { RasaService } from '../services/rasa.service';  // Importando o serviço

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInput: string = '';  // Variável para armazenar a entrada do usuário
  messages: string[] = []; // Array para armazenar mensagens

  constructor(private rasaService: RasaService) {}

  // Função para enviar mensagem ao Rasa
  sendMessage() {
    if (this.userInput.trim() !== '') {
      // Adiciona a mensagem do usuário à lista de mensagens
      this.messages.push(`Você: ${this.userInput}`);

      // Envia a mensagem ao Rasa e obtém a resposta
      this.rasaService.sendMessage(this.userInput).subscribe(
        (response) => {
          if (response && response.length > 0) {
            // Adiciona a resposta do Rasa à lista de mensagens
            this.messages.push(`Bot: ${response[0].text}`);
          }
        },
        (error) => {
          console.error('Erro ao conectar ao Rasa:', error);
        }
      );

      // Limpa o campo de entrada do usuário
      this.userInput = '';
    }
  }
}

*/





import { Component } from '@angular/core';
import { RasaService } from '../services/rasa.service';  // Importando o serviço

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class HomePage {
  userInput: string = '';  // Variável para armazenar a entrada do usuário
  messages: any[] = []; // Array para armazenar mensagens

  constructor(private rasaService: RasaService) {}
/*
  // Função para enviar mensagem ao Rasa
  sendMessage() {
    if (this.userInput.trim() !== '') {
      // Adiciona a mensagem do usuário à lista de mensagens
      this.messages.push({ text: this.userInput, from: 'user' });

      const userMessage = this.userInput;  // Armazena a mensagem antes de limpar o campo
      this.userInput = '';  // Limpa o campo de entrada do usuário

      // Envia a mensagem ao Rasa via serviço
      this.rasaService.sendMessage(userMessage).subscribe(
        (response: any) => {
          // Adiciona a resposta do Rasa à lista de mensagens
          if (response && response.length > 0) {
            response.forEach((resp: any) => {
              this.messages.push({ text: resp.text, from: 'bot' });
            });
          }
        },
        (error) => {
          console.error('Erro ao conectar ao Rasa:', error);
          // Em caso de erro, mostra uma mensagem genérica do bot
          this.messages.push({ text: 'Desculpe, ocorreu um erro ao conectar ao servidor.', from: 'bot' });
        }
      );
      */
      sendMessage() {
        if (this.userInput.trim() !== '') {
          this.messages.push({ text: this.userInput, from: 'user' });
          const userMessage = this.userInput;
          this.userInput = '';
      
          // Log da mensagem enviada
          console.log('Mensagem enviada ao bot:', userMessage);
      
          this.rasaService.sendMessage(userMessage).subscribe(
            (response: any) => {
              console.log('Resposta do bot:', response);  // Log da resposta
              if (response && response.length > 0) {
                response.forEach((resp: any) => {
                  this.messages.push({ text: resp.text, from: 'bot' });
                });
              }
            },
            (error) => {
              console.error('Erro ao conectar ao Rasa:', error);
              this.messages.push({ text: 'Desculpe, ocorreu um erro ao conectar ao servidor.', from: 'bot' });
            }
          );
    }
  }

  scrollToBottom() {
    const content = document.querySelector('ion-content');
    content?.scrollToBottom(300);
  }
}
