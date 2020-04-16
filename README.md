# Be The Hero
Aplicação completa escrita em Node.js no back-end, React JS no front-end web e React Native no front-end mobile.

Resultado do curso Semana Omnistack 11.
 
Tecnologias utilizadas:
- Javascript
- CSS
- HTML
- Node
  V8 ( engine do Chrome )
  Instalação utiliza gerenciador de pacotes:
    macOS: HomeBrew
    Windows: Chocolatey
    Linux: installing node.js via package manager
    Node.js v12x
     curl -sL https://deb.nodesource.com/setup_12.x | bash -apt-get install -y nodejs
     apt-get install -y nodejs
    npm: gerenciador de pacotes do Node.js
 - Visual Studio Code (editor)
 - Insomnia (para testar as rotas)
 - Nodemon (live reload)
 
Back-end (Node.js)
------------------
API Restfull construida no Node.js
- JSON - Javascript Object Notation (para transitar os dados entre as camadas) 
mkdir backend
cd backend
npm init -y
 para criar o arquivo package.json para armazenar as dependências do projeto

- Express (microframework: O Express é um framework para aplicativo da web do Node.js. Rotas, parâmetros, etc)
 npm install express
 http://expressjs.com/en/resources/middleware.html
 package-lock.json (cache)
 Porta Padrão: 3333
 ...
 const app = express();
 
 app.get('/', (request, response) => {
  return response.json({});
  });
 
 app.listen(3333);
 ...
 
 extensão para Chrome json-viewer

Express
-------
Rotas
Recursos
Métodos HTTP
- GET
- POST
- PUT
- DELETE

Tipos de Parâmetros:
-Query Params: Parâmetros nomeados enviados na rota após ?. Usados para: filtros, paginação
ex.: GET http://localhost:3333/users?name=julio&page=2
     app.get('/users/', (request, response)=>{ const params = request.query ...})
- Route Params: Parâmetros utilizados para identificar recursos
ex.: GET http://localhost:3333/users/1
     app.get('/users/:id', (request, response)=>{ const params = request.params ...})
- Request Body: corpo da requisição, utilizado para criar ou atualizar um recurso
ex.: POST http://localhost:3333/users Body/JSON: { "name": "Julio Oliveira", "sexo": "masculino"  }
     app.use(express.json());
     app.post('/users, (request, response)=>{ const body = request.body }

Rodar o projeto Node.js
node index.js 

instalar o nodemon (-D para salvar como dependência de desenvolvimento (devDependencies) e não de projeto (dependencies)
npm install nodemon -D


Front-end Web (React.js)
------------------------
Funcionalidades:
Paginação infinata
Abertura de E-mail e WhatsApp no mobile
Porta Padrão: 3000

- Inicializar o projeto:
npx create-react-app frontend
npm start

code . (abre o VS Code na pasta do projeto atual)




Front-end Mobile (React Native e Expo)
-------------------------------------
#Abordagem Tradicional: Uma aplicação para cada plataforma
 Objective C / Swift -> .ipa (iOS)
 Java / Kotlin -> .apk (Android)

#Abordagem React Native
 Implementa JavaScript Core
 Cõdigo escrito em Javascript e não é convertido
 A interface é nativa
 React Native -> .ipa (iOS) / .apk (Android)

#Expo
Conjunto de ferramentas e funcionalidades nativas do celular: Câmera, Mapa, Geolocalização, Sensores
Expo não suporta bluetooth
Android: Android Studio
iOS: XCode



Projeto prototipado no Figma
