const nome = (req, res) => {
    const nome = req.query.nome; 
    
    if (nome) {
        res.send(`Olá, ${nome}! Seja bem-vindo! 👋`);
    } else {
        res.send("Por favor, informe seu nome Ex: localhost:3000/perguntar-nome?nome=Márcio");
    };

}
module.exports = {nome};