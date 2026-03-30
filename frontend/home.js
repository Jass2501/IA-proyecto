function CardProyecto({ titulo, descripcion, enlace }) {
    const card = document.createElement("article");
    card.className = "card-proyecto";

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = descripcion;

    card.appendChild(h3);
    card.appendChild(p);

    if (enlace) {
        const a = document.createElement("a");
        a.href = enlace;
        a.textContent = "Ver más";
        a.className = "card-proyecto-link";
        card.appendChild(a);
    }

    return card;
}

const container = document.getElementById("servicios-container");

container.appendChild(
    CardProyecto({
        titulo: "Branding Estratégico",
        descripcion: "Creamos identidades visuales coherentes y memorables.",
        enlace: "branding.html",
    })
);
container.appendChild(
    CardProyecto({
        titulo: "Diseño Gráfico Creativo",
        descripcion: "Diseñamos materiales visuales impactantes y efectivos.",
        enlace: "diseno-grafico.html",
    })
);
container.appendChild(
    CardProyecto({
        titulo: "Desarrollo Web Moderno",
        descripcion: "Creamos sitios web funcionales y atractivos.",
        enlace: "desarrollo-web.html",
    })
);

/* contacto */
const form = document.getElementById('contactForm');
const respuestaDiv = document.getElementById('respuesta');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && asunto && mensaje) {
        respuestaDiv.classList.remove('error');
        respuestaDiv.classList.add('exito');
        respuestaDiv.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
        respuestaDiv.style.display = 'block';
        form.reset();

        setTimeout(() => {
            respuestaDiv.style.display = 'none';
        }, 5000);
    } else {
        respuestaDiv.classList.remove('exito');
        respuestaDiv.classList.add('error');
        respuestaDiv.textContent = 'Por favor, completa todos los campos requeridos.';
        respuestaDiv.style.display = 'block';
    }
});