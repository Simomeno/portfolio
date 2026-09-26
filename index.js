//ORARIO

function aggiornaOrologio() {
    
    const oraAttuale = new Date();
    
    const ore = String(oraAttuale.getHours()).padStart(2, '0');
    const minuti = String(oraAttuale.getMinutes()).padStart(2, '0');
    const secondi = String(oraAttuale.getSeconds()).padStart(2, '0');
    
    const tempoFormattato = `${ore}:${minuti}:${secondi} IT`;
    
    document.getElementById("orologio").textContent = tempoFormattato;
  }

  aggiornaOrologio();
  
  setInterval(aggiornaOrologio, 1000);


// Tendina progetti
  
const triggers = document.querySelectorAll(".more-btn");

triggers.forEach(trigger => {
    trigger.addEventListener("click", function() {
        
        const projectContainer = this.closest(".p1");
        
        const tenda = projectContainer.querySelector(".find-more-content");

        if (tenda.classList.contains("aperto")) {
            tenda.style.maxHeight = tenda.scrollHeight + "px"; 
            requestAnimationFrame(() => {
                tenda.style.maxHeight = "0px";
            });
            tenda.classList.remove("aperto");
            
        } else {
            tenda.style.maxHeight = tenda.scrollHeight + "px";
            tenda.classList.add("aperto");
        }
    });
});

//GESTIONE SCROLL

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Blocca salto 

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Posizioni di partenza e arrivo
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            
            const duration = 1500; 
            let start = null;

            //Ease-in-out
            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                // Calcolo fluido dell'animazione
                const percentage = Math.min(progress / duration, 1);
                const ease = percentage < 0.5 
                    ? 2 * percentage * percentage 
                    : -1 + (4 - 2 * percentage) * percentage;
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            });
        }
    });
});