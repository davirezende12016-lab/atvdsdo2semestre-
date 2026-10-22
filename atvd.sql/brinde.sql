USE cardgame;

CREATE TABLE brinde
(
    cod INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    qtd_total INT,
    qtd_sorteada INT
)