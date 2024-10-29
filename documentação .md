**Preparação dos projeto Node:**
mkdir <nome do projeto> **cria um projeto**
cd  <nome do projeto>   **entra no projeto**
npm init -y **Estalão do pacote node.js**
npm install express **estalação da estenção para criar rotas**

 ** Cria um arquivo Dockerfile 

** dentro do Dockrfile coloque  
 FROM node   **(Define a imagem base como Node.js)**

WORKDIR /app   **( Define o diretório de trabalho dentro do container )**

RUN npm install **(Esta as dependencia na aria de trabalho)**

COPY package*.json ./  **( Para copiar da pasta de origem para a de destino )**

CMD ["node", "index.js"] **( Define o campo a ser executado  )**




**Construção da imagem**

docker build -t <nome-da-imagem> **Para criar**

docker run -d -p 8080:3000 <nome-da-imagem> **busca a imagem**


