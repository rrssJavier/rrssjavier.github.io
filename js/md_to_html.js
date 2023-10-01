// script.js
function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

const articleContent = document.getElementById('article-content');
const mdFileName = getParameterByName('article');

fetch(mdFileName)
    .then((response) => response.text())
    .then((markdownContent) => {
        const converter = new showdown.Converter();
        const htmlContent = converter.makeHtml(markdownContent);
        articleContent.innerHTML = htmlContent;
    })
    .catch((error) => {
        console.error('Error al cargar el artículo:', error);
    });
