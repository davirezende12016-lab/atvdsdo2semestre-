from conexao import conectar

def listar_brinde():
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM brinde")
    brinde = cursor.fetchall()
    print(brinde)
    cursor.close()
    conexao.close()

def excluir_brinde(id):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute("DELETE brinde WHERE cod = %s", (id,))
    conexao.commit()
    cursor.close()
    conexao.close() 

def cadastrar_brinde(nome, desc, eft, atk, de, crit):
    conexao = conectar()
    cursor = conexao.cursor()
    comando = """
    INSERT INTO brinde 
    (nome, descricao, efeito, ataque, defesa, critico) 
    VALUES (%s, %s, %s, %s, %s, %s)
 
     """
    valores = (nome, desc, eft, atk, de, crit)
    cursor.execute(comando, valores)
    conexao.commit()
    cursor.close()
    conexao.close()

def buscar_brinde_por_cod(cod):
    conexao = conectar()
    cursor = conexao.cursor()
    cursor.execute(
        "SELECT * FROM brinde WHERE cod = %s", (cod,))
    brinde = cursor.fetchone()
    print(brinde)
    cursor.close()
    conexao.close()


cadastrar_brinde("Radiota" \
"atividade", "desc", "", 12, 8 , 80)
listar_brinde()

buscar_brinde_por_cod(3)