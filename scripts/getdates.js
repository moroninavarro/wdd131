


const lastModification = document.lastModified; 
const elemento = document.getElementById('last-modification');
elemento.textContent =  <span class="modification">${lastModification}</span>;




document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentyear").innerHTML = new Date().getFullYear();
  });