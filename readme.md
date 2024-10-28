**Preparação dos projeto Node:**
mkdir <nome do projeto> **cria um projeto**
cd  <nome do projeto>   **entra no projeto**
npm init -y **Estalão do pacote node.js**
npm install express **estalação da estenção para criar rotas**

 ** Cria uma pasta coloque depois coloca os arquivo Dockerfile e o scriot.pt 
 
** dentro do Dockrfile coloque  
 FROM python:3  **(Apartir de onde começa)**

WORKDIR /app   **( Definir a pasta de trabalho )**

COPY script.py ./  **( Para copiar da pasta de origem para a de destino )**
**
CMD ["python", "app/script.py"]  **( Comando para esescutar um arquivo )**


** dento do script  coloque o comando  print("criar imagem ")

**Construção da imagem**

docker build -t <nome da imagem> **Para criar**

docker run -p 8080:3000 <nome da imagem> **busca a imagem**


