# 🌐 Chatbot Inteligente com Ionic + Rasa  
### Um Frontend Moderno e um Backend Baseado em IA Conversacional

---

## ✨ Visão Geral

Este projeto apresenta um **frontend desenvolvido em Ionic/Angular** que se comunica com um **modelo conversacional Rasa**, criando uma interface moderna, responsiva e pronta para ser usada em aplicações reais de suporte ao usuário.

O backend Rasa utilizado está disponível no repositório:

➡️ **https://github.com/DomingosGnd/rasa-chatbot-model**

---

## 🎨 Design da Interface (UI/UX)

A interface foi desenvolvida com foco em:

- Simplicidade  
- Navegação fluida  
- Ambiente agradável de conversa  
- Experiência semelhante a apps modernos de chat  

### 📸 Inserir imagens aqui

Você pode adicionar imagens no README assim:

```md
![Nome da Imagem](./assets/images/home.png)
```

Ou usando links externos:

```md
![Tela Home](https://link-da-imagem.com/home.png)
```

---

## 📱 Estrutura das Telas

### 🟦 Welcome Page
- Tela inicial de boas-vindas  
- Botões de Login e Registrar  

📸 *Coloque a imagem da Welcome Page aqui*

---

### 🔐 Login Page
- Autenticação do usuário  
- UI minimalista  

📸 *Coloque a imagem da Login Page aqui*

---

### 📝 Register Page
- Cadastro de novos usuários  
- Input validado  

📸 *Coloque a imagem da Register Page aqui*

---

### 🏠 Home Page
- Tela principal após login  
- Menu e navegação  
- Acesso ao chat  

📸 *Coloque a imagem da Home Page aqui*

---

### 💬 Chat Page
- Interface de chat estilo Messenger  
- Envio e recepção de mensagens via API Rasa  

📸 *Coloque a imagem da Chat Page aqui*

---

## 🔗 Comunicação com o Backend Rasa

A comunicação é feita via:

```
POST http://localhost:5005/webhooks/rest/webhook
```

Exemplo de requisição:

```ts
sendMessage(message: string) {
  return this.http.post('http://localhost:5005/webhooks/rest/webhook', {
    sender: 'user',
    message: message
  });
}
```

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Instalar dependências
```
npm install
```

### 2️⃣ Rodar o servidor Ionic
```
ionic serve
```

### 3️⃣ Rodar o backend Rasa
No diretório do Rasa:

```
rasa run --enable-api --cors "*"
```

---

## 📂 Estrutura do Projeto

```
src/
 ├─ app/
 │   ├─ pages/
 │   │    ├─ welcome/
 │   │    ├─ login/
 │   │    ├─ register/
 │   │    └─ chat/
 │   └─ home/
 └─ assets/
      └─ images/
```

---

## 📤 Como inserir imagens no GitHub

1. Crie uma pasta no seu projeto:  
   ```
   src/assets/images
   ```

2. Coloque suas imagens lá.

3. Referencie no README:

   ```
   ![Tela Inicial](src/assets/images/welcome.png)
   ```

---

## 🛠️ Tecnologias Usadas

- **Ionic 7 + Angular**
- **Rasa 3.x**
- **TypeScript**
- **HTML e SCSS**
- **API REST**

---

## 🤝 Contribuições

Sinta-se à vontade para enviar PRs, melhorias, issues ou sugestões!  
Este projeto faz parte do desenvolvimento de uma aplicação de apoio conversacional.

---

## 👤 Autor

**Domingos Bié**  
Desenvolvedor | IA | Chatbots | Mobile  
GitHub: https://github.com/DomingosGnd

---

## 📝 Licença

Este projeto é distribuído sob a licença **MIT**.

---

