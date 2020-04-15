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
