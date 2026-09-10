function aggiornaOrologio() {
    // Recupera la data e l'ora attuali
    const oraAttuale = new Date();
    
    // Estrae ore, minuti e secondi, aggiungendo uno '0' iniziale se il numero è minore di 10
    const ore = String(oraAttuale.getHours()).padStart(2, '0');
    const minuti = String(oraAttuale.getMinutes()).padStart(2, '0');
    const secondi = String(oraAttuale.getSeconds()).padStart(2, '0');
    
    // Unisce i valori nel formato HH:MM:SS
    const tempoFormattato = `${ore}:${minuti}:${secondi} IT`;
    
    // Inserisce il testo aggiornato nel paragrafo
    document.getElementById("orologio").textContent = tempoFormattato;
  }

  // Esegue la funzione subito per mostrare l'orario senza aspettare un secondo
  aggiornaOrologio();
  
  // Imposta un timer che ripete la funzione ogni 1000 millisecondi (1 secondo)
  setInterval(aggiornaOrologio, 1000);


// Tendina progetti
  
// Prendi TUTTI i bottoni "Find more"
const triggers = document.querySelectorAll(".more-btn");

// Per ogni bottone trovato, fai questo:
triggers.forEach(trigger => {
    trigger.addEventListener("click", function() {
        
        // Cerca la "scatola" grande del progetto che ho appena cliccato
        const projectContainer = this.closest(".p1");
        
        // Cerca la tendina SOLO dentro questa scatola
        const tenda = projectContainer.querySelector(".find-more-content");

        // Se la tendina è già aperta, chiudila
        if (tenda.classList.contains("aperto")) {
            tenda.style.maxHeight = tenda.scrollHeight + "px"; 
            requestAnimationFrame(() => {
                tenda.style.maxHeight = "0px";
            });
            tenda.classList.remove("aperto");
            
        // Altrimenti, aprila
        } else {
            tenda.style.maxHeight = tenda.scrollHeight + "px";
            tenda.classList.add("aperto");
        }
    });
});