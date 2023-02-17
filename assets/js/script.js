/* Function activated by clicking the only button in the document
Requests identification, welcomes the visitor, and challenges them /
/*Função ativada por clique no único botão no documento.
Solicita identificação, dá boas vindas e desafia o visitante.*/
console.log(navigator.language)
function Click_me() {
    // Declares a "name" variable
    //Declara a variável "name"
    let name = "";
    // Identifies the browser's default language and applies the most suitable language
    //Identifica o idioma padrão do navegador e aplica o mais adequado
    switch (navigator.language.toLowerCase()) {
      case "pt-br":
      case "pt":
        //Inicia a execução em português 
        //Solicitação de identificação
        alert("Não sabemos quem você é.");
        name = prompt("Identifique-se!");
        //Cria a mensagem de boas vindas
        let welcomeMessage = document.createElement("p");
        welcomeMessage.innerText = "Seja bem vindo, " + name + ".";
        //Cria a mensagem de desafio
        let findUsMessage = document.createElement("p");
        findUsMessage.innerText = "Você consegue nos achar?";
        //Lança os novos elementos no html
        document.body.appendChild(welcomeMessage);
        document.body.appendChild(findUsMessage);
        //Encerra a execução em português
        break;
      default:
        // Starts execution in English, the default language
        // Requests identification
        alert("We don't know who you are.");
        name = prompt("Identfy yourself!");
        // Creates the welcome message
        let welcomeMessageEn = document.createElement("p");
        welcomeMessageEn.innerText = "Welcome, " + name + ".";
        // Creates the challenge message
        let findUsMessageEn = document.createElement("p");
        findUsMessageEn.innerText = "Can you find us?";
        // Appends new elements to the HTML
        document.body.appendChild(welcomeMessageEn);
        document.body.appendChild(findUsMessageEn);
        // Ends the English execution
        break;
    }
    //Our location. The challenge's prize
    //Nosso lugar. O prêmio do desafio.
    console.log(
      "http://6nhmgdpnyoljh5uzr5kwlatx2u3diou4ldeommfxjz3wkhalzgjqxzqd.onion/"
    );
  }
  