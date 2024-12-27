const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalInput = document.getElementById("modal-input");
const modalOk = document.getElementById("modal-ok");

const alertModal = document.getElementById("alert-modal");
const alertText = document.getElementById("alert-text");
const alertOk = document.getElementById("alert-ok");

function showPrompt(message, callback) {
  modal.style.display = "block";
  modalText.textContent = message;
  modalInput.value = "";
  modalInput.focus();

  modalOk.onclick = () => {
    modal.style.display = "none";
    callback(modalInput.value);
  };
}

function showAlert(message) {
  alertModal.style.display = "block";
  alertText.innerHTML = message.replace(/\n/g, '<br>');
}

alertOk.onclick = () => {
  alertModal.style.display = "none";
};

document.getElementById("iniciarBatalha").addEventListener("click", () => {
  let name1, vida1, ataque1, defesa1, escudo1;
  let name2, vida2, ataque2, defesa2, escudo2;

  showPrompt("Qual o nome do personagem 1?", (value) => {
    name1 = value;
    showPrompt("Quanto de vida tem " + name1 + "?", (value) => {
      vida1 = parseFloat(value);
      showPrompt("Qual o poder de ATAQUE de " + name1 + "?", (value) => {
        ataque1 = parseFloat(value);
        showPrompt("Quanto de DEFESA " + name1 + " tem?", (value) => {
          defesa1 = parseFloat(value);
          showPrompt("Possui escudo? (S/N)", (value) => {
            escudo1 = value.toUpperCase();

            showPrompt("Qual o nome do personagem 2?", (value) => {
              name2 = value;
              showPrompt("Quanto de vida tem " + name2 + "?", (value) => {
                vida2 = parseFloat(value);
                showPrompt("Qual o poder de ATAQUE de " + name2 + "?", (value) => {
                  ataque2 = parseFloat(value);
                  showPrompt("Quanto de DEFESA " + name2 + " tem?", (value) => {
                    defesa2 = parseFloat(value);
                    showPrompt("Possui escudo? (S/N)", (value) => {
                      escudo2 = value.toUpperCase();

                      let resultado = "";
                      if (ataque1 > defesa2 && escudo2 === "N") {
                        resultado = "Parabéns, " + name1 + "! Você é o grande vencedor!" +
                          "\n\n⚔️ **Detalhes da Batalha:**" +
                          "\nDano de Ataque: " + ataque1 +
                          "\n\n🛡️ **Oponente Derrotado:**" +
                          "\nNome: " + name2 +
                          "\nPontos de Vida Restantes: " + vida2 +
                          "\nDefesa: " + defesa2 +
                          "\nPossui Escudo? " + escudo2 +
                          "\n\n🔥 **Resumo do Combate:**" +
                          "\nDano Causado: " + ataque1 +
                          "\nDefesa Restante após o ataque: " + (ataque1 - defesa2);
                      } else if (ataque1 > defesa2 && escudo2 === "S") {
                        resultado = "Parabéns, " + name1 + "! Você é o grande vencedor!" +
                          "\n\n⚔️ **Detalhes da Batalha:**" +
                          "\nDano de Ataque: " + ataque1 +
                          "\n\n🛡️ **Oponente Derrotado:**" +
                          "\nNome: " + name2 +
                          "\nPontos de Vida Restantes: " + vida2 +
                          "\nDefesa: " + defesa2 +
                          "\nPossui Escudo? " + escudo2 +
                          "\n\n🔥 **Resumo do Combate:**" +
                          "\nDano Causado após redução pelo escudo: " + ((ataque1 - defesa2) / 2);
                      } else if (ataque2 > defesa1 && escudo1 === "N") {
                        resultado = "Parabéns, " + name2 + "! Você é o grande vencedor!" +
                          "\n\n⚔️ **Detalhes da Batalha:**" +
                          "\nDano de Ataque: " + ataque2 +
                          "\n\n🛡️ **Oponente Derrotado:**" +
                          "\nNome: " + name1 +
                          "\nPontos de Vida Restantes: " + vida1 +
                          "\nDefesa: " + defesa1 +
                          "\nPossui Escudo? " + escudo1 +
                          "\n\n🔥 **Resumo do Combate:**" +
                          "\nDano Causado: " + ataque2 +
                          "\nDefesa Restante após o ataque: " + (ataque2 - defesa1);
                      } else {
                        resultado = "⚔️ O combate entre " + name1 + " e " + name2 + " terminou em empate!" +
                          "\n\n🤝 **Detalhes do Confronto:**" +
                          "\nPrepare-se para o próximo desafio!";
                      }
                      showAlert(resultado);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
