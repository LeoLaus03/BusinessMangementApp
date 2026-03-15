import { createInputField, createTextAreaField } from "../elements/inputField"

export function getKundenEingabePage() {
    return `
    <div class="mainBox">
        <div class="inputBox">
            <div class="column columnLeft">
                ${createInputField(3, "Vorname", "Maximilian", "text")}
                ${createInputField(3, "Nachname", "Mustermann", "text")}
                ${createInputField(6, "Telefon", "+49 161 5432789", "text")}
                ${createInputField(6, "E-Mail", "max.mustermann@gmail.com", "text")}
            </div>
            <div class="column columnRight">
                ${createInputField(4, "Straße", "Musterstraße", "text")}
                ${createInputField(2, "Hausnummer", "23A", "text")}
                ${createInputField(3, "PLZ", "02383", "text")}
                ${createInputField(3, "Ort", "Musterstadt", "text")}
                ${createInputField(6, "Land", "Wunderland", "text")}
            </div>
        </div>
        <div class="textArea">
            ${createTextAreaField("Notizen", "Notizen")}
        </div>
        <div class="submitButton">
            <button type="submit">Speichern</button>
        </div>
    </div>`
}

