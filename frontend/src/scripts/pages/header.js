export function getHeaderPage(pageNames) {
    let headerHTML = "";
    headerHTML+=`<nav>`
    for (let pageName of pageNames) {
        headerHTML+=`<button onclick="showPage('${pageName}')" class="${pageName}">${pageName}</button>`;
    }
    headerHTML+=`</nav>`;
    return headerHTML;
}