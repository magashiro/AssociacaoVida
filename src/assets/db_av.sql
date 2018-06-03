CREATE TABLE IF NOT EXISTS animal (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, status TEXT, tipo TEXT, nome TEXT, sexo TEXT, anos INTEGER, meses INTEGER, porte TEXT, temperamento TEXT, raca TEXT, vacinado TEXT, castrado TEXT, info TEXT, img TEXT, nomeDoador TEXT, cidadeDoador TEXT, telefoneDoador INTEGER, emailDoador TEXT, id_adotante INTEGER, FOREIGN KEY (id_adotante) REFERENCES adotante (id));
CREATE TABLE IF NOT EXISTS adotante (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT, endereco TEXT, bairro TEXT, cidade TEXT, telefone INTEGER, email TEXT, rg TEXT, cpf TEXT, Q1 TEXT, Q2 TEXT, Q3 TEXT, Q4 TEXT, Q5 TEXT, Q6 TEXT, Q7 TEXT, Q8 TEXT);
INSERT INTO temp (tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) VALUES ('cão', 'pan2', 'F', 7, 5, 'pequeno', 'dócil', 'SRD', 'sim', 'sim', 'nenhuma info', 'img');
INSERT INTO animal (status, tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) VALUES ('New', 'cão', 'New', 'F', 7, 5, 'pequeno', 'dócil', 'SRD', 'sim', 'sim', 'nenhuma info', 'img');
INSERT INTO animal (status, tipo, nome, sexo, anos, meses, porte, temperamento, raca, vacinado, castrado, info, img) VALUES ('Pending', 'cão', 'Pending', 'F', 7, 5, 'pequeno', 'dócil', 'SRD', 'sim', 'sim', 'nenhuma info', 'img');
