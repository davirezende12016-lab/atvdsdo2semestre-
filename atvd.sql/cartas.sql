USE cardgame;

CREATE TABLE IF NOT EXISTS carta
(
    cod INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    efeito VARCHAR(255),
    ataque INT,
    defesa INT,
    critico INT
)