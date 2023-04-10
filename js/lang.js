// define el idioma default en "esp"
let lang = "esp";
// Llama a la función actualizarBotones() y cambiarLenguaje() con el idioma default
actualizarBotones(lang);
cambiarLenguaje(lang);
// Función que cambia el idioma de la página según los datos en langs.json
function cambiarLenguaje(lang) {
    fetch('/lang/langs.json')
    .then(response => response.json())
    .then(datos => {
        var data= datos[lang][0];
        for (var clave in data) {
            document.getElementById(clave).innerHTML = data[clave];
        }
    });
}
// Función que actualiza los botones de idioma y agrega eventos a cada botón
function actualizarBotones(lang) {
    let link, idioma, botones;

    switch (lang) {
    case "esp":
        idioma = "Idioma";
        link = "https://www.canva.com/design/DAFerbPrrho/YZikfIoj_rDl1w-H07g02g/view?website#4";
        botones = `
            <li><a class="dropdown-item btn-eng" href="#">🇬🇧 Inglés</a></li>
            <li><a class="dropdown-item btn-fr" href="#">🇫🇷 francés</a></li>
        `
        break;
    case "eng":
        idioma = "Language";
        link = "https://www.canva.com/design/DAFd9AHFBEk/_z0_WRB6AFVbCCrpOipXsQ/view?website#4";
        botones = `
            <li><a class="dropdown-item btn-fr" href="#">🇫🇷 french</a></li>
            <li><a class="dropdown-item btn-esp" href="#">🇪🇦 Spanish</a></li>
        `
        break;
    default:
        idioma = "Langue";
        link = "https://www.canva.com/design/DAFd8Kx09_0/AS9jM7LOgu00uwThq_MgLA/view?website#4";
        botones = `
            <li><a class="dropdown-item btn-eng" href="#">🇬🇧 Anglais</a></li>
            <li><a class="dropdown-item btn-esp" href="#">🇪🇦 Espagnol</a></li>
        `;
    }
    // Crea el HTML para los botones de idioma con el enlace y los botones correspondientes
    let content = `
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <a href="${link}" target="_blank" rel="noopener noreferrer"><button class="boton-verde texto-oscuro btn me-md-2 btn-lg" type="button">CV</button></a>
            <div class="btn-group" role="group">
            <button type="button" class="boton-verde texto-oscuro btn dropdown-toggle btn-lg" data-bs-toggle="dropdown" aria-expanded="false">
                ${idioma}
            </button>
            <ul class="dropdown-menu">
                ${botones}
            </ul>
            </div>              
        </div>
    `;
    // Inserta el contenido de los botones de idioma en el elemento con ID "btns-hero"
    document.querySelector('#btns-hero').innerHTML = content;
    // Selecciona los botones de idioma y agrega un event listener a cada uno de ellos
    var btnsEng = document.querySelectorAll(".btn-eng");
    var btnsEsp = document.querySelectorAll(".btn-esp");
    var btnsFr = document.querySelectorAll(".btn-fr");

    btnsEng.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            lang = "eng";
            cambiarLenguaje(lang);
            actualizarBotones(lang);
        });
    });

    btnsEsp.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            lang = "esp";
            cambiarLenguaje(lang);
            actualizarBotones(lang);
        });
    });

    btnsFr.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            lang = "fr";
            cambiarLenguaje(lang);
            actualizarBotones(lang);
        });
    });
}