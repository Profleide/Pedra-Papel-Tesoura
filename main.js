// Função para gerar uma jogada aleatória do computador
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }
  
  // Função para jogar uma rodada
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Converter a escolha do jogador para minúsculas
    let message = "";
  
    if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        message = "Você perdeu! Papel vence pedra.";
      } else if (computerSelection == "scissors") {
        message = "Você venceu! Pedra vence tesoura.";
      } else {
        message = "Empate!";
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        message = "Você perdeu! Tesoura vence papel.";
      } else if (computerSelection == "rock") {
        message = "Você venceu! Papel vence pedra.";
      } else {
        message = "Empate!";
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        message = "Você perdeu! Pedra vence tesoura.";
      } else if (computerSelection == "paper") {
        message = "Você venceu! Tesoura vence papel.";
      } else {
        message = "Empate!";
      }
    }
  
    return message;
  }
  
  // Função principal para jogar o jogo
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt("Escolha pedra, papel ou tesoura: ");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Rodada ${i}: ${result}`);
  
      if (result.startsWith("Você venceu!")) {
        playerScore++;
      } else if (result.startsWith("Você perdeu!")) {
        computerScore++;
      }
    }
  
    console.log(`Placar final: Você ${playerScore}, Computador ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Parabéns, você venceu o jogo!");
    } else if (computerScore > playerScore) {
      console.log("Você perdeu o jogo. Tente novamente!");
    } else {
      console.log("O jogo terminou em empate.");
    }
  }
  
  // Iniciar o jogo
  game();
  