const proyectos = [
    {
        imagenFondo: "./Imagenes/previewRestaurante.png",
        titulo: "Restaurante Frites&Grill",
        descripcion: "Sitio web para un resturante construido con HTML, CSS y JavaScript.",
        demo: "https://fritesngrill.netlify.app"
    },
    {
        imagenFondo: "./Imagenes/previewCafe.png",
        titulo: "Cafe Artesanal HN",
        descripcion: "Pagina web para un cafe construida con HTML y CSS, haciendo uso de Mobile First.",
        demo: "https://cafeartesanalhn.netlify.app"
    }
];

const handlerBarsContext = {
    "/index.html": {
        "title": "Home",
        "proyectos": proyectos
    }
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] }
    return context;
}
export default pageContext;