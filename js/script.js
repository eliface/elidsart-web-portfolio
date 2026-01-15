//MENU OVERLAY
function toggleMenu() {
    const overlay = document.getElementById("mobileOverlay");
    if (overlay) {
        if (overlay.style.width === "100%") {
            overlay.style.width = "0";
        } else {
            overlay.style.width = "100%";
        }
    }
}

//CARGA DOM
document.addEventListener('DOMContentLoaded', () => {

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    //JSON
    const datosProyectos = [
        { 
            "id": 1, 
            "categories": ["branding"], 
            "imageUrl": "../images/proyectos/enredo1.jpg", 
            "position": "cover", 
            "placeholderColor": "#86c035",
            "tituloDetalle": "Enredo. Identidad visual",
            "intro": "Descripción breve del proyecto Enredo y su concepto visual.",
            "bloques": []
        },
        { 
            "id": 2, 
            "categories": ["branding"], 
            "imageUrl": "../images/proyectos/jacitattoo.png", 
            "position": "cover", 
            "placeholderColor": "#000000",
            "tituloDetalle": "Jaci Tattoo Studio",
            "intro": "Branding diseñado para estudio de tatuajes con estética minimalista.",
            "bloques": []
        },
        { 
            "id": 3, 
            "categories": ["branding"], 
            "imageUrl": "../images/proyectos/geshi2.jpg", 
            "position": "cover", 
            "placeholderColor": "#003f23",
            "tituloDetalle": "Geshi Branding",
            "intro": "Proyecto de identidad visual enfocado en recreación ecológica.",
            "bloques": [
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-1.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-2.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-3.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-4.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-5.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-6.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-7.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-8.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/geshi-9.jpg" },
            ]
        },
        { 
            "id": 4, 
            "categories": ["poster"], 
            "imageUrl": "../images/proyectos/pinup.jpg", 
            "position": "cover", 
            "placeholderColor": "#f0aece",
            "tituloDetalle": "Pinup Poster Series",
            "intro": "Ilustración de estilo retro inspirada en la cultura Pinup aplicada a la sociedad actual.",
            "bloques": []
        },
        { 
            "id": 5, 
            "categories": ["redesSociales"], 
            "imageUrl": "../images/proyectos/aureastone2.jpg", 
            "position": "cover", 
            "placeholderColor": "#eae9e4",
            "tituloDetalle": "Aurea Stone Social Media",
            "intro": "Campaña visual para redes sociales de Aurea Stone.",
            "bloques": [
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-1.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-2.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-3.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-4.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-5.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-6.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-7.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-8.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/aureastone-9.jpg" },
            ]
        },
        { 
            "id": 6, 
            "categories": ["branding", "redesSociales"], 
            "imageUrl": "../images/proyectos/legends2.jpg", 
            "position": "center 20%", 
            "placeholderColor": "#000000",
            "tituloDetalle": "Legends. Real Madrid Store",
            "intro": "Sistema visual ilustrado para campaña de verano.",
            "bloques": [
                { "tipo": "full", "url": "../images/proyectos/detalle/legendscampaign-1.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/legendscampaign-2.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/legendscampaign-3.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/legendscampaign-4.jpg" },
            ]
        },
        { 
            "id": 7, 
            "categories": ["poster"], 
            "imageUrl": "../images/proyectos/ateneo2.jpg", 
            "position": "cover", 
            "placeholderColor": "#000000",
            "tituloDetalle": "Ateneo Cultural Poster",
            "intro": "Cartelería diseñada para eventos del Ateneo.",
            "bloques": [
                { "tipo": "full", "url": "../images/proyectos/detalle/ateneo-4.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/ateneo-2.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/ateneo-3.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/ateneo-1.jpg" },
            ]
        },
        { 
            "id": 8, 
            "categories": ["branding"], 
            "imageUrl": "../images/proyectos/kaleido.jpg", 
            "position": "cover", 
            "placeholderColor": "#b7bbf7",
            "tituloDetalle": "Kaleido Visual System",
            "intro": "Exploración cromática y geométrica para Kaleido.",
            "bloques": [
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-1.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-2.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-3.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-4.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-5.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-6.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-7.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-8.jpg" },
                { "tipo": "full", "url": "../images/proyectos/detalle/kaleido-9.jpg" }
            ]
        }
    ];

    // PAGINA DE DISEÑO
    const contenedorCuadricula = document.querySelector('.cuadriculaProyectos');
    
    if (contenedorCuadricula) {
        const itemsFiltro = document.querySelectorAll('.itemFiltro');

        // LLENAR PROYECTOS
        function pintarProyectos(proyectos) {
            contenedorCuadricula.innerHTML = ''; 
            proyectos.forEach(proyecto => {
                const divProyecto = document.createElement('div');
                divProyecto.classList.add('itemProyecto');
                divProyecto.setAttribute('data-category', proyecto.categories.join(' '));
                divProyecto.style.backgroundColor = proyecto.placeholderColor; 

                divProyecto.onclick = () => {
                    window.location.href = `proyectos.html?id=${proyecto.id}`;
                };

                const imgInterior = document.createElement('div');
                imgInterior.classList.add('imagenProyecto');
                imgInterior.style.backgroundImage = `url(${proyecto.imageUrl})`;
                imgInterior.style.backgroundPosition = proyecto.position || 'center';
                
                divProyecto.appendChild(imgInterior);
                contenedorCuadricula.appendChild(divProyecto);
            });
        }

        // FILTROS
        function configurarFiltros() {
            itemsFiltro.forEach(item => {
                item.addEventListener('click', function() {
                    const actualActivo = document.querySelector('.itemFiltro.activo');
                    if (actualActivo) actualActivo.classList.remove('activo');
                    this.classList.add('activo');

                    const filtro = this.getAttribute('data-filter');
                    document.querySelectorAll('.itemProyecto').forEach(proy => {
                        const categorias = proy.getAttribute('data-category');
                        if (filtro === 'all' || categorias.includes(filtro)) {
                            proy.classList.remove('oculto');
                            setTimeout(() => proy.style.display = 'flex', 10);
                        } else {
                            proy.classList.add('oculto');
                            setTimeout(() => proy.style.display = 'none', 300);
                        }
                    });
                });
            });
        }
        pintarProyectos(datosProyectos);
        configurarFiltros();
    }

    // PAGINA DE PROYECTOS
    const contenedorDetalle = document.getElementById('cuerpo-proyecto');

    if (contenedorDetalle) {
        const queryParams = new URLSearchParams(window.location.search);
        const proyectoId = queryParams.get('id');
        const proy = datosProyectos.find(p => p.id == proyectoId);

        if (proy) {
            let htmlContenido = `
                <section class="proyecto-intro">
                    <h1>${proy.tituloDetalle}</h1>
                    <p class="descripcion-proy">${proy.intro}</p>
                </section>
            `;

            proy.bloques.forEach(bloque => {
                if (bloque.tipo === 'full') {
                    htmlContenido += `<div class="bloque-full"><img src="${bloque.url}" alt="Diseño"></div>`;
                } 
                else if (bloque.tipo === 'doble') {
                    htmlContenido += `
                        <div class="bloque-doble">
                            <img src="${bloque.urls[0]}" alt="Detalle">
                            <img src="${bloque.urls[1]}" alt="Detalle">
                        </div>`;
                }
                else if (bloque.tipo === 'texto') {
                    htmlContenido += `<div class="bloque-texto"><p>${bloque.cuerpo}</p></div>`;
                }
            });

            contenedorDetalle.innerHTML = htmlContenido;
        }
    }

    // ANIMACION DE MANOS
    const itemDesign = document.querySelector('.menuItem:nth-child(1)');

    if (itemDesign) {
        
        // MANO 1 (Diseño)
        const handDesign = itemDesign.querySelector('.hand-design');
        if (handDesign) {
            const tlDesign = gsap.timeline({ paused: true });
            tlDesign.fromTo(handDesign, 
                { left: "-400%", top: "-200%", opacity: 100 },
                { 
                    top: "-185%", left: "-80%", rotation: 30, scale: 0.7, opacity: 100,
                    duration: 0.5, ease: "power3.out"
                }
            );
            itemDesign.addEventListener('mouseenter', () => tlDesign.play());
            itemDesign.addEventListener('mouseleave', () => tlDesign.reverse());
        }

        // MANO 2 (Ilustración)
        const itemIlusto = document.querySelector('.menuItem:nth-child(2)');
        const handIlusto = itemIlusto ? itemIlusto.querySelector('.hand-illustration') : null;
        if (handIlusto) {
            const tlIlusto = gsap.timeline({ paused: true });
            tlIlusto.fromTo(handIlusto, 
                { right: "-400%", top: "-200%", opacity: 100 },
                { 
                    top: "-250%", right: "-180%", rotation: -45, scale: 1.2, opacity: 100,
                    duration: 0.5, ease: "power3.out"
                }
            );
            itemIlusto.addEventListener('mouseenter', () => tlIlusto.play());
            itemIlusto.addEventListener('mouseleave', () => tlIlusto.reverse());
        }

        // MANO 3 (About)
        const itemAbout = document.querySelector('.menuItem:nth-child(3)');
        const handAbout = itemAbout ? itemAbout.querySelector('.hand-about') : null;
        if (handAbout) {
            const tlAbout = gsap.timeline({ paused: true });
            tlAbout.fromTo(handAbout, 
                { left: "-400%", top: "-100%", opacity: 100 },
                { 
                    top: "22%", left: "-130%", rotation: 8, opacity: 100,
                    duration: 0.5, ease: "power3.out"
                }
            );
            itemAbout.addEventListener('mouseenter', () => tlAbout.play());
            itemAbout.addEventListener('mouseleave', () => tlAbout.reverse());
        }

        // MANO 4 (Contacto)
        const itemContact = document.querySelector('.menuItem:nth-child(4)');
        const handContact = itemContact ? itemContact.querySelector('.hand-contact') : null;
        if (handContact) {
            const tlContact = gsap.timeline({ paused: true });
            tlContact.fromTo(handContact, 
                { right: "-400%", top: "-200%", opacity: 100 },
                {
                    top: "80%", right: "-140%", rotation: 45, opacity: 100,
                    duration: 0.5, ease: "power3.out"
                }
            );
            itemContact.addEventListener('mouseenter', () => tlContact.play());
            itemContact.addEventListener('mouseleave', () => tlContact.reverse());
        }
    }
    /* -----------------------------------------------------
       LÓGICA D: PÁGINA ILUSTRACIÓN (PARALLAX Y COLORES)
       Solo se ejecuta si detecta que estamos en la galería
    ----------------------------------------------------- */
    const isIllustrationPage = document.querySelector('body.illustration');

    if (isIllustrationPage) {
        
        // 1. Configuración de Parallax para las imágenes
        document.querySelectorAll(".parallax").forEach((img) => {
            const speed = parseFloat(img.dataset.speed);
            
            if (!isNaN(speed)) {
                gsap.to(img, {
                    y: () => ScrollTrigger.maxScroll(window) * speed,
                    ease: "none",
                    scrollTrigger: {
                        start: 0,
                        end: "max",
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                });
            }
        });

        // PAGINA ILUSTRACION BACKGROUND COLOR
        gsap.set("body", { backgroundColor: "#FFFFFF" });

        // COLOR 1
        if (document.querySelector(".art3")) {
            gsap.to("body", {
                backgroundColor: "#D8BFD8", 
                scrollTrigger: {
                    trigger: ".art3",       
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    id: "cambio-1"
                }
            });
        }

        // COLOR 2
        if (document.querySelector(".art12")) {
            gsap.to("body", {
                backgroundColor: "#B0E0E6", 
                scrollTrigger: {
                    trigger: ".art12",      
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    id: "cambio-2"
                }
            });
        }

        // COLOR 3
        if (document.querySelector(".art20")) {
            gsap.to("body", {
                backgroundColor: "#E8E6E2",
                scrollTrigger: {
                    trigger: ".art20",      
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    id: "cambio-final"
                }
            });
        }
    }
});