USE cardgame;

CREATE TABLE jogador
(
    cod INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL,
    pontuacao INT,
    email VARCHAR(100),
    avaliacao INT,
    observacao VARCHAR (255)
)