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



  
const trigger = document.getElementById("more");
const tenda = document.getElementById("find-more1");

trigger.addEventListener("click", function() {
    if (tenda.classList.contains("aperto")) {
        // chiusura
        tenda.style.maxHeight = tenda.scrollHeight + "px"; // fissa altezza attuale
        requestAnimationFrame(() => {
            tenda.style.maxHeight = "0px";
        });
        tenda.classList.remove("aperto");
    } else {
        // apertura
        tenda.style.maxHeight = tenda.scrollHeight + "px";
        tenda.classList.add("aperto");
    }
});