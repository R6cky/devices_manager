# devices_manager

Este projeto surgiu da necessidade de gerenciar alguns dispositivos,
na empresa onde eu trabalhei. Eramos um time de 3 pessoas,
E o parque tecnológico relativamente grande, atendíamos
Vários tripulantes de uma empresa aérea e existiam
muitos dispositivos sob nosssa responsabilidade no aeroporto
estávamos com dificuldades em gerenciar tudo em através de planilhas
então tive a idéia de criar esse sistema. Foi construído em NodeJS (Express+Prisma) e ReactJS ###no frontend. Você pode adaptá-lo a sua vontade, modificando as módels e adaptando o código a ###sua necessidade.

Instruções para utilizar:  
1 - clone o repositório em sua máquina local.  
o diretório principal é o "devices manager", ele possue os diretórios "reactjs-frontend"  
e o"node-js_backend", que são os diretórios do front e backend.  
2 - Entre no diretório "reactjs-frontend" e execute os comandos:

#npm install; npm run dev

3 - Entre no diretório "node-js_backend" e execute os comandos:

#npm install
#npx prisma migrade dev
#npm run build-data
#npm run dev

Após isso a aplicação deve iniciar e você já pode utilizá-la.

Deploy da aplicação:  
-> o frontend está hospedado no site "vercel.com"  
-> o backend está hospedado no site "render.com"  
Link da aplicação: https://devices-manageryxw.vercel.app/ 
Obs. O backend está hospedado gratuitamente no "render.com" e na versão gratuita a api demora de 30seg a 60seg para 
subir, a partir da primaira requisição feita. 



Usuários criados no banco que você pode usar para fazer login na aplicação: 
-----------------------------------
email: "rocky@mail.com"
password: "123456"
-----------------------------------
email: "alexandre@mail.com"
password: "123456"
-----------------------------------
email: "lucas@mail.com"    
password: "123456"
-----------------------------------
email: "adair@mail.com"
password: "123456"
