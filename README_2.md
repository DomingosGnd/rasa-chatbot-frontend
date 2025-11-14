
# 🤰 Chatbot de Suporte à Gravidez — Frontend Ionic + Backend Rasa

Este repositório contém o **Frontend desenvolvido em Ionic/Angular** que se comunica com o **modelo Rasa** para fornecer suporte interativo para gestantes.  
O Backend (modelo Rasa) encontra-se disponível no repositório:

🔗 **Backend Rasa:** https://github.com/DomingosGnd/rasa-chatbot-model

---

## 📱 Visão Geral do Projeto

Este projeto consiste em:

- **Frontend em Ionic**: interface móvel moderna e responsiva para comunicação com o chatbot.  
- **Backend em Rasa**: modelo de NLP treinado para responder perguntas frequentes durante a gestação.  
- **Integração via REST API**: envio e recebimento de mensagens entre Ionic e Rasa.

---

# 📁 Estrutura do Projeto

```
rasa_chatbot_frontend/
│
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── welcome/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── home/
│   │   │   └── chat/
│   │   └── services/
│   ├── assets/
│   └── theme/
│
├── README.md
└── package.json
```

---

# 🖼️ Demonstração Visual

> **Adicione aqui prints, GIFs ou vídeos do projeto.**

### 📌 Tela de Boas-Vindas
(cole aqui o link ou imagem)

### 🔐 Tela de Login
(cole aqui o link ou imagem)

### 📝 Tela de Registro
(cole aqui o link ou imagem)

### 🏠 Tela Home
(cole aqui o link ou imagem)

### 💬 Tela do Chat
(cole aqui o link ou vídeo)

---

# 🔧 Tecnologias Utilizadas

### **Frontend**
- Ionic 7  
- Angular 17  
- TypeScript  
- HTML5  
- SCSS  

### **Backend**
- Rasa 3.x  
- Python 3.8+  
- Modelos NLU, Domain, Rules, Stories

---

# 🔌 Comunicação entre Frontend e Backend

A comunicação é feita via **Rasa REST API**:

### 📤 Enviar mensagem
```
POST http://localhost:5005/webhooks/rest/webhook
```

### Corpo da requisição:
```json
{
  "sender": "user",
  "message": "Olá!"
}
```

### 📥 Resposta:
```json
[
  {
    "recipient_id": "user",
    "text": "Olá! Como posso ajudar você hoje?"
  }
]
```

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU_USUARIO/rasa-chatbot-ionic.git
cd rasa-chatbot-ionic
```

---

# ▶️ 2️⃣ Instalar dependências do Ionic

```
npm install
```

Se aparecerem vulnerabilidades:

```
npm audit fix
```

---

# ▶️ 3️⃣ Iniciar o servidor Ionic

```
ionic serve
```

O app abrirá em:

👉 http://localhost:8100

---

# ▶️ 4️⃣ Iniciar o servidor Rasa

Abra um terminal separado:

```
cd rasa_chatbot_model
rasa run --enable-api --cors "*"
```

---

# 🔍 Testar comunicação Ionic → Rasa

No frontend, vá até a **Tela de Chat** e envie qualquer mensagem.

O console do Rasa deve mostrar:

```
Received message from user: Olá
```

E o Ionic deve exibir a resposta do bot.

---

# 📦 Build para Produção

```
ionic build
```

Os arquivos finais irão para:

```
/www
```

Podem ser hospedados em:
- Firebase Hosting  
- Vercel  
- Apache/Nginx local  
- GitHub Pages (com ajustes)

---

# 🤝 Contribuição

Pull requests são bem-vindas!  
Sugestões e melhorias podem ser enviadas na aba **Issues**.

---

# 📜 Licença

Este projeto é distribuído sob a licença **MIT**.

---

# 📞 Contato do Desenvolvedor

👤 **Domingos Bié**  
📧 *email pessoal ou profissional (opcional)*  
💼 *LinkedIn opcional*  
🌍 Luanda — Angola

---

Se precisar de ajuda para configurar, instalar, integrar ou melhorar o sistema, estou disponível! 🤖💬✨
