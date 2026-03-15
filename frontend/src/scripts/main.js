import { getHeaderPage } from "./pages/header.js";
import { getRechnungPage } from "./pages/mainPages/Rechnung.js";
import { getKundenPage } from "./pages/mainPages/Kunden.js";
import { getKundenEingabePage } from "./pages/mainPages/KundenEingabe.js";

const pageRegister = {
    "Rechnung": getRechnungPage,
    "Kunden": getKundenPage,
    "KundenEingabe": getKundenEingabePage
}

function initApp() {
    const testSeiten = ["Kunden", "Rechnung"];
    putHeaderPage(testSeiten);
}

function putHeaderPage(testSeiten) {
    const headerElement = document.getElementById('header');

    if (headerElement) {
        headerElement.innerHTML = getHeaderPage(testSeiten);
    } else {
        console.error('Fehler kein Element mit Id Header gefunden!');
    }
}

window.showPage = function(pageName) {
    const mainElement = document.getElementById("main");
    const pageFunction = pageRegister[pageName];

    if(pageFunction) {
        mainElement.innerHTML = pageFunction();
        for (let c of mainElement.classList) mainElement.classList.remove(c);
        mainElement.classList.add(pageName);
        if (pageName == "KundenEingabe") pageName = "Kunden";
        let headerButton = document.querySelector(`#header button.${pageName}`);
        for (let e of document.getElementsByClassName("active")) e.classList.remove("active");
        headerButton.classList.add("active");
    } else {
        console.error("Seite nicht im Register gefunden:", pageName);
        mainElement.innerHTML = "<h1>Fehler</h1><p>Seite nicht gefunden.</p>";
    }
}

initApp();