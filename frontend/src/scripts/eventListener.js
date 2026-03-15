function autoGrow(element) {
    if (!element) return;

    // 1. Wir löschen die manuell gesetzte Höhe. 
    // Die Textarea fällt sofort auf ihr CSS (height: 100%) zurück.
    element.style.height = '';

    // 2. Wir berechnen die Dicke deines Rahmens (Border), 
    // damit die Pixel später zu 100% exakt stimmen.
    const borderHeight = element.offsetHeight - element.clientHeight;

    // 3. Die magische Prüfung: Ist der Text höher als die Box?
    if (element.scrollHeight > element.clientHeight) {
        // Ja, Text läuft über! Wir setzen die Höhe exakt auf den Inhalt + Rahmen.
        element.style.height = (element.scrollHeight + borderHeight) + 'px';
    }
    // Wenn Nein: Wir tun gar nichts. Das CSS (height: 100%) erledigt den Rest.
}

// Event Delegation - reagiert auf alle Eingaben
document.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        autoGrow(event.target);
    }
});

// Optional: Einmal beim Laden ausführen, falls Text vorgeladen wird
window.addEventListener('load', () => {
    const tx = document.querySelector('textarea');
    if (tx) autoGrow(tx);
});