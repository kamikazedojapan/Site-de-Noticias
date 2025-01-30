const express = require("express");
const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    const nome = req.query.nome; 
    
    if (nome) {
        res.send(`Olá, ${nome}! Seja bem-vindo! 👋`);
    } else {
        res.send("Por favor, informe seu nome Ex: localhost:3000/?nome=Márcio");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
