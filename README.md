# 📰Site de Noticias

Aplicativo full‑stack construído com o stack **MERN** (MongoDB, Express.js, React, Node.js).

## 🏠Pagina Inicial
![image](https://github.com/user-attachments/assets/b944c6d9-eb5d-4eac-bdd4-64c5d9c24a8b)

## 👤Pagina de Login e Cadastro
![image](https://github.com/user-attachments/assets/3f25ac12-dd21-40de-9efc-60ba9d9a8755)

## 🚀 Funcionalidades

- 👥 **CRUD completo** de usuários, produtos ou itens (dependendo do contexto).
- 🔄 **API REST** backend com Express.js — endpoints para criação, leitura, atualização e exclusão.
- 🗄️ **Banco de dados MongoDB** para persistência dos dados.
- 🎨 **Interface React** responsiva e dinâmica no frontend.
- 🔐 (Opcional) **Autenticação JWT** e rotas protegidas.
- 📦 Organização modular do código (pastas `server`, `client`, roteadores, controladores, modelos).

## 🛠 Instalação
#### 1° Passo - Execute os seguintes comandos no terminal:
```bash
git clone https://github.com/kamikazedojapan/MERN.git
cd MERN
cd server && npm install
cd ../client && npm install
```
#### 2° Passo - Crie um .env com, ao mínimo:
```
MONGODB_URI=<sua conexão MongoDB>
JWT_SECRET=<JWT do MongoDB>
```

## ▶️Como rodar
#### 3° Passo
No backend (server):
```bash
npm start dev 
```
No frontend (client)
```bash
npm run dev
```

## 🔧Estrutura do projeto
#### Arquitetura das pastas e do software:
```bash
/server      - API Node.js + Express  
/client      - SPA React  
/models      - Schemas do banco (Mongoose)  
/routes      - Definições das rotas  
/controllers - Lógica de negócio  
```

## 💎Tecnologias
- Node.js, Express.js
- MongoDB + Mongoose
- React, React Router, Redux (se houver)
- JWT, bcryptjs (para segurança)
- CSS ou framework visual (Bootstrap, Tailwind…)

## 📚 Contribuições
Contribuições são bem-vindas! Abra uma issue ou pull request.
