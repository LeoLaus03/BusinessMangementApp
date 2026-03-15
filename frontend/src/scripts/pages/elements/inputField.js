export function createInputField(gridSpan=6, label, placeholder, fieldType) {
    return `
        <div class="customInputField" style="grid-column: span ${gridSpan}">
            <input type="${fieldType}" class="inputField" placeholder="${placeholder}">
            <label class="inputLabel">${label}</label>
        </div>
    `
}

export function createTextAreaField(label, placeholder) {
    return `
        <div class="customTextArea">
            <textarea class="inputField" placeholder="${placeholder}"></textarea>
            <label class="inputLabel">${label}</label>
        </div>
    `
}