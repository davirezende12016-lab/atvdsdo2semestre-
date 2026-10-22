from conexao import conectar

def listar_cartas():
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM carta")
    cartas = cursor.fetchall()
    print(cartas)
    cursor.close()
    conexao.close()

def excluir_carta(id):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("DELETE FROM carta WHERE cod = %s", (id,))
    conexao.commit()
    cursor.close()
    conexao.close() 

def cadastrar_carta(nome, desc, eft, atk, de, crit):
    conexao = conectar()
    cursor = conexao.cursor()
    comando = """
    INSERT INTO carta 
    (nome, descricao, efeito, ataque, defesa, critico) 
    VALUES (%s, %s, %s, %s, %s, %s)
 
     """
    valores = (nome, desc, eft, atk, de, crit)
    cursor.execute(comando, valores)
    conexao.commit()
    cursor.close()
    conexao.close()

def buscar_carta_por_cod(cod):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute(
        "SELECT * FROM carta WHERE cod = %s", (cod,))
    carta = cursor.fetchone()
    print(carta)
    cursor.close()
    conexao.close()


cadastrar_carta("Radiotatividade", "desc", "", 12, 8 , 80)
listar_cartas()

buscar_carta_por_cod(3)