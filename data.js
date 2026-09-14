/**
 * Historia Cubos - Base de datos de Ediciones y Caras de Dados
 * Todos los dados cuentan con iconos claros, nombres descriptivos en español
 * y paletas de colores armónicas para una experiencia visual de primera calidad.
 */

export const PALETAS_EDICION = {
    Original: {
        nombre: "Original",
        descripcion: "Elementos clásicos de la vida cotidiana, naturaleza y relatos tradicionales.",
        frente: "#f97316",    // Orange 500
        superior: "#fb923c",  // Orange 400
        lateral: "#ea580c",   // Orange 600
        borde: "#c2410c",     // Orange 700
        fondoBadge: "rgba(249, 115, 22, 0.15)",
        textoBadge: "#fdba74"
    },
    Acciones: {
        nombre: "Acciones",
        descripcion: "Verbos dinámicos, actividades físicas, ingenio y movimiento.",
        frente: "#0284c7",    // Sky 600
        superior: "#38bdf8",  // Sky 400
        lateral: "#0369a1",   // Sky 700
        borde: "#075985",     // Sky 800
        fondoBadge: "rgba(14, 165, 233, 0.15)",
        textoBadge: "#7dd3fc"
    },
    Viajes: {
        nombre: "Viajes",
        descripcion: "Expediciones, medios de transporte, destinos exóticos y aventuras.",
        frente: "#16a34a",    // Green 600
        superior: "#4ade80",  // Green 400
        lateral: "#15803d",   // Green 700
        borde: "#166534",     // Green 800
        fondoBadge: "rgba(34, 197, 94, 0.15)",
        textoBadge: "#86efac"
    },
    Fantasia: {
        nombre: "Fantasía",
        descripcion: "Magia, criaturas míticas, hechizos y reinos legendarios.",
        frente: "#9333ea",    // Purple 600
        superior: "#c084fc",  // Purple 400
        lateral: "#7e22ce",   // Purple 700
        borde: "#6b21a8",     // Purple 800
        fondoBadge: "rgba(168, 85, 247, 0.15)",
        textoBadge: "#d8b4fe"
    },
    Heroes: {
        nombre: "Héroes",
        descripcion: "Poderes sobrehumanos, villanos, tecnología futurista y batallas épicas.",
        frente: "#dc2626",    // Red 600
        superior: "#f87171",  // Red 400
        lateral: "#b91c1c",   // Red 700
        borde: "#991b1b",     // Red 800
        fondoBadge: "rgba(239, 68, 68, 0.15)",
        textoBadge: "#fca5a5"
    },
    Misterio: {
        nombre: "Misterio",
        descripcion: "Casos policiales, enigmas, casas embrujadas y suspense gótico.",
        frente: "#6d28d9",    // Violet 700
        superior: "#a78bfa",  // Violet 400
        lateral: "#5b21b6",   // Violet 800
        borde: "#4c1d95",     // Violet 900
        fondoBadge: "rgba(109, 40, 217, 0.15)",
        textoBadge: "#c4b5fd"
    }
};

export const EDICIONES = {
    Original: [
        [
            { emoji: "🏠", texto: "Casa" },
            { emoji: "🍎", texto: "Manzana" },
            { emoji: "⏳", texto: "Reloj de arena" },
            { emoji: "💬", texto: "Bocadillo" },
            { emoji: "🔒", texto: "Candado" },
            { emoji: "🔑", texto: "Llave" }
        ],
        [
            { emoji: "☀️", texto: "Sol" },
            { emoji: "🌙", texto: "Luna" },
            { emoji: "🌧️", texto: "Lluvia" },
            { emoji: "🔥", texto: "Fuego" },
            { emoji: "🌳", texto: "Árbol" },
            { emoji: "🌸", texto: "Flor" }
        ],
        [
            { emoji: "➡️", texto: "Flecha" },
            { emoji: "👣", texto: "Huella" },
            { emoji: "🪂", texto: "Paracaídas" },
            { emoji: "🪜", texto: "Escalera" },
            { emoji: "🧲", texto: "Imán" },
            { emoji: "🌉", texto: "Puente" }
        ],
        [
            { emoji: "😀", texto: "Sonrisa" },
            { emoji: "😨", texto: "Miedo" },
            { emoji: "👁️", texto: "Ojo" },
            { emoji: "👆", texto: "Huella dactilar" },
            { emoji: "🪄", texto: "Varita" },
            { emoji: "❓", texto: "Pregunta" }
        ],
        [
            { emoji: "🏰", texto: "Castillo" },
            { emoji: "🔺", texto: "Pirámide" },
            { emoji: "⛺", texto: "Tienda" },
            { emoji: "⛲", texto: "Fuente" },
            { emoji: "🗼", texto: "Torre" },
            { emoji: "🏢", texto: "Edificio" }
        ],
        [
            { emoji: "✈️", texto: "Avión" },
            { emoji: "⛵", texto: "Barco" },
            { emoji: "🐑", texto: "Oveja" },
            { emoji: "🧭", texto: "Brújula" },
            { emoji: "🔦", texto: "Linterna" },
            { emoji: "✉️", texto: "Carta" }
        ],
        [
            { emoji: "✂️", texto: "Tijeras" },
            { emoji: "💡", texto: "Bombilla" },
            { emoji: "🪙", texto: "Moneda" },
            { emoji: "⚙️", texto: "Engranaje" },
            { emoji: "🪞", texto: "Espejo" },
            { emoji: "📞", texto: "Teléfono" }
        ],
        [
            { emoji: "🎭", texto: "Máscara" },
            { emoji: "📖", texto: "Libro" },
            { emoji: "🎲", texto: "Dado" },
            { emoji: "🎂", texto: "Pastel" },
            { emoji: "👑", texto: "Corona" },
            { emoji: "🏆", texto: "Trofeo" }
        ],
        [
            { emoji: "👽", texto: "Alien" },
            { emoji: "🐉", texto: "Dragón" },
            { emoji: "🪲", texto: "Escarabajo" },
            { emoji: "🧬", texto: "ADN" },
            { emoji: "🔭", texto: "Telescopio" },
            { emoji: "🧩", texto: "Rompecabezas" }
        ]
    ],
    Acciones: [
        [
            { emoji: "🏃", texto: "Correr" },
            { emoji: "🚶", texto: "Caminar" },
            { emoji: "🧗", texto: "Escalar" },
            { emoji: "🏊", texto: "Nadar" },
            { emoji: "🤾", texto: "Lanzar" },
            { emoji: "🧘", texto: "Meditar" }
        ],
        [
            { emoji: "🗣️", texto: "Hablar" },
            { emoji: "👂", texto: "Escuchar" },
            { emoji: "📢", texto: "Gritar" },
            { emoji: "✍️", texto: "Escribir" },
            { emoji: "🤝", texto: "Pactar" },
            { emoji: "🫵", texto: "Señalar" }
        ],
        [
            { emoji: "🛠️", texto: "Reparar" },
            { emoji: "🪚", texto: "Cortar" },
            { emoji: "⛏️", texto: "Picar" },
            { emoji: "🧹", texto: "Limpiar" },
            { emoji: "🧼", texto: "Lavar" },
            { emoji: "🎨", texto: "Pintar" }
        ],
        [
            { emoji: "🔍", texto: "Buscar" },
            { emoji: "🕵️", texto: "Espiar" },
            { emoji: "🙈", texto: "Esconder" },
            { emoji: "🔓", texto: "Abrir" },
            { emoji: "📦", texto: "Empacar" },
            { emoji: "🎁", texto: "Entregar" }
        ],
        [
            { emoji: "💥", texto: "Explotar" },
            { emoji: "⚔️", texto: "Luchar" },
            { emoji: "🛡️", texto: "Proteger" },
            { emoji: "🎯", texto: "Apuntar" },
            { emoji: "🏹", texto: "Disparar" },
            { emoji: "💣", texto: "Detonar" }
        ],
        [
            { emoji: "🚀", texto: "Despegar" },
            { emoji: "🛬", texto: "Aterrizar" },
            { emoji: "🚗", texto: "Manejar" },
            { emoji: "🚴", texto: "Pedalear" },
            { emoji: "🚣", texto: "Remar" },
            { emoji: "🪂", texto: "Saltar" }
        ],
        [
            { emoji: "🍳", texto: "Cocinar" },
            { emoji: "🍕", texto: "Comer" },
            { emoji: "☕", texto: "Beber" },
            { emoji: "🌱", texto: "Plantar" },
            { emoji: "🎣", texto: "Pescar" },
            { emoji: "🛒", texto: "Comprar" }
        ],
        [
            { emoji: "😴", texto: "Dormir" },
            { emoji: "⏰", texto: "Despertar" },
            { emoji: "🎉", texto: "Celebrar" },
            { emoji: "📸", texto: "Fotografiar" },
            { emoji: "💻", texto: "Programar" },
            { emoji: "🎶", texto: "Cantar" }
        ],
        [
            { emoji: "🧠", texto: "Pensar" },
            { emoji: "💡", texto: "Idear" },
            { emoji: "🧭", texto: "Guiar" },
            { emoji: "📜", texto: "Leer" },
            { emoji: "🔑", texto: "Resolver" },
            { emoji: "🤝", texto: "Ayudar" }
        ]
    ],
    Viajes: [
        [
            { emoji: "🧳", texto: "Maleta" },
            { emoji: "🛂", texto: "Pasaporte" },
            { emoji: "🎟️", texto: "Boleto" },
            { emoji: "🗺️", texto: "Mapa" },
            { emoji: "📸", texto: "Cámara" },
            { emoji: "💳", texto: "Tarjeta" }
        ],
        [
            { emoji: "🗿", texto: "Monumento" },
            { emoji: "🏛️", texto: "Ruinas" },
            { emoji: "🗼", texto: "Torre" },
            { emoji: "🗽", texto: "Estatua" },
            { emoji: "🏖️", texto: "Playa" },
            { emoji: "🌋", texto: "Volcán" }
        ],
        [
            { emoji: "🚂", texto: "Tren" },
            { emoji: "🚌", texto: "Autobús" },
            { emoji: "🛵", texto: "Motoneta" },
            { emoji: "🚀", texto: "Cohete" },
            { emoji: "🛥️", texto: "Submarino" },
            { emoji: "🚁", texto: "Helicóptero" }
        ],
        [
            { emoji: "🏨", texto: "Hotel" },
            { emoji: "🏕️", texto: "Campamento" },
            { emoji: "🛖", texto: "Cabaña" },
            { emoji: "🚢", texto: "Crucero" },
            { emoji: "🛕", texto: "Templo" },
            { emoji: "🧊", texto: "Iglú" }
        ],
        [
            { emoji: "🌴", texto: "Isla" },
            { emoji: "🏜️", texto: "Desierto" },
            { emoji: "🏔️", texto: "Montaña" },
            { emoji: "🌊", texto: "Océano" },
            { emoji: "🕳️", texto: "Cueva" },
            { emoji: "🌌", texto: "Aurora" }
        ],
        [
            { emoji: "🎒", texto: "Mochila" },
            { emoji: "🧢", texto: "Gorra" },
            { emoji: "🕶️", texto: "Gafas de sol" },
            { emoji: "🧴", texto: "Protector" },
            { emoji: "🥾", texto: "Botas" },
            { emoji: "🧭", texto: "Guía" }
        ],
        [
            { emoji: "🌮", texto: "Comida local" },
            { emoji: "🥥", texto: "Bebida exótica" },
            { emoji: "🎁", texto: "Recuerdo" },
            { emoji: "📬", texto: "Postal" },
            { emoji: "🪙", texto: "Divisa" },
            { emoji: "🎭", texto: "Festival" }
        ],
        [
            { emoji: "🐪", texto: "Camello" },
            { emoji: "🐬", texto: "Delfín" },
            { emoji: "🦅", texto: "Águila" },
            { emoji: "🐘", texto: "Elefante" },
            { emoji: "🦈", texto: "Tiburón" },
            { emoji: "🐧", texto: "Pingüino" }
        ],
        [
            { emoji: "🌅", texto: "Amanecer" },
            { emoji: "🌌", texto: "Noche clara" },
            { emoji: "🌪️", texto: "Tormenta" },
            { emoji: "🧭", texto: "Norte" },
            { emoji: "📍", texto: "Destino" },
            { emoji: "⚓", texto: "Puerto" }
        ]
    ],
    Fantasia: [
        [
            { emoji: "🧙", texto: "Mago" },
            { emoji: "🧝", texto: "Elfo" },
            { emoji: "🧔", texto: "Enano" },
            { emoji: "🧟", texto: "Zombi" },
            { emoji: "🧜", texto: "Sirena" },
            { emoji: "🧚", texto: "Hada" }
        ],
        [
            { emoji: "🔮", texto: "Orbe místico" },
            { emoji: "📜", texto: "Pergamino" },
            { emoji: "🧪", texto: "Poción" },
            { emoji: "💍", texto: "Anillo único" },
            { emoji: "📖", texto: "Grimorio" },
            { emoji: "💎", texto: "Gema mística" }
        ],
        [
            { emoji: "🗡️", texto: "Daga" },
            { emoji: "🛡️", texto: "Escudo rúnico" },
            { emoji: "🏹", texto: "Arco élfico" },
            { emoji: "🔨", texto: "Martillo" },
            { emoji: "⚔️", texto: "Espada legendaria" },
            { emoji: "🪄", texto: "Báculo" }
        ],
        [
            { emoji: "🐉", texto: "Dragón" },
            { emoji: "🦄", texto: "Unicornio" },
            { emoji: "🦅", texto: "Grifo" },
            { emoji: "🐺", texto: "Hombre lobo" },
            { emoji: "🐙", texto: "Kraken" },
            { emoji: "🦇", texto: "Murciélago" }
        ],
        [
            { emoji: "🏰", texto: "Fortaleza" },
            { emoji: "🕳️", texto: "Mazmorra" },
            { emoji: "🌲", texto: "Bosque mágico" },
            { emoji: "🌀", texto: "Portal" },
            { emoji: "🕯️", texto: "Altar sagrado" },
            { emoji: "🌋", texto: "Abismo" }
        ],
        [
            { emoji: "👑", texto: "Corona real" },
            { emoji: "💀", texto: "Calavera" },
            { emoji: "🪙", texto: "Tesoro" },
            { emoji: "🗝️", texto: "Llave mística" },
            { emoji: "🕯️", texto: "Vela ritual" },
            { emoji: "🩸", texto: "Pacto arcano" }
        ],
        [
            { emoji: "⚡", texto: "Rayo mágico" },
            { emoji: "🔥", texto: "Fuego arcano" },
            { emoji: "❄️", texto: "Hielo mágico" },
            { emoji: "🌿", texto: "Naturaleza viva" },
            { emoji: "👻", texto: "Espectro" },
            { emoji: "⏳", texto: "Tiempo" }
        ],
        [
            { emoji: "🐴", texto: "Montura alada" },
            { emoji: "🦅", texto: "Familiar" },
            { emoji: "🕸️", texto: "Trampa" },
            { emoji: "🗺️", texto: "Mapa antiguo" },
            { emoji: "👁️", texto: "Ojo vidente" },
            { emoji: "🗿", texto: "Golem" }
        ],
        [
            { emoji: "🌟", texto: "Estrella astral" },
            { emoji: "🌘", texto: "Eclipse" },
            { emoji: "🌑", texto: "Luna negra" },
            { emoji: "☄️", texto: "Cometa" },
            { emoji: "🔮", texto: "Runa mágica" },
            { emoji: "🔥", texto: "Fénix" }
        ]
    ],
    Heroes: [
        [
            { emoji: "🦸", texto: "Superhéroe" },
            { emoji: "🦹", texto: "Villano" },
            { emoji: "🥷", texto: "Ninja" },
            { emoji: "🤖", texto: "Cíborg" },
            { emoji: "👽", texto: "Invasor alien" },
            { emoji: "🦹‍♀️", texto: "Némesis" }
        ],
        [
            { emoji: "🦸‍♂️", texto: "Capa heroica" },
            { emoji: "⚡", texto: "Superfuerza" },
            { emoji: "👓", texto: "Identidad oculta" },
            { emoji: "💍", texto: "Anillo de poder" },
            { emoji: "🧪", texto: "Suero mutante" },
            { emoji: "📡", texto: "Alarma central" }
        ],
        [
            { emoji: "☄️", texto: "Meteorito" },
            { emoji: "☣️", texto: "Químico tóxico" },
            { emoji: "🌀", texto: "Portal dimensional" },
            { emoji: "🔬", texto: "Laboratorio" },
            { emoji: "🛸", texto: "Nave alienígena" },
            { emoji: "💥", texto: "Explosión" }
        ],
        [
            { emoji: "🏙️", texto: "Rascacielos" },
            { emoji: "🧪", texto: "Cápsula criogénica" },
            { emoji: "🚁", texto: "Helicóptero" },
            { emoji: "🛰️", texto: "Satélite orbital" },
            { emoji: "🛗", texto: "Búnker secreto" },
            { emoji: "🚨", texto: "Sirena de alerta" }
        ],
        [
            { emoji: "🥊", texto: "Superpuño" },
            { emoji: "🛡️", texto: "Escudo indestructible" },
            { emoji: "🧬", texto: "Gen mutante" },
            { emoji: "👀", texto: "Visión de rayos X" },
            { emoji: "🔥", texto: "Poder del fuego" },
            { emoji: "❄️", texto: "Poder del hielo" }
        ],
        [
            { emoji: "📱", texto: "Comunicador" },
            { emoji: "💻", texto: "Hackeo informático" },
            { emoji: "🚗", texto: "Superauto blindado" },
            { emoji: "🕶️", texto: "Visor táctico" },
            { emoji: "🎒", texto: "Propulsor jet" },
            { emoji: "📻", texto: "Frecuencia oculta" }
        ],
        [
            { emoji: "🕸️", texto: "Telaraña" },
            { emoji: "🗡️", texto: "Katanas gemelas" },
            { emoji: "🪃", texto: "Bumerán sónico" },
            { emoji: "💣", texto: "Granada" },
            { emoji: "🪢", texto: "Lazo de verdad" },
            { emoji: "🏹", texto: "Flecha truco" }
        ],
        [
            { emoji: "🤝", texto: "Alianza heroica" },
            { emoji: "👊", texto: "Emboscada" },
            { emoji: "⚖️", texto: "Justicia" },
            { emoji: "⛓️", texto: "Captura del villano" },
            { emoji: "🏆", texto: "Victoria épica" },
            { emoji: "📜", texto: "Profecía heroica" }
        ],
        [
            { emoji: "🪞", texto: "Clon holográfico" },
            { emoji: "⏳", texto: "Viaje en el tiempo" },
            { emoji: "🖤", texto: "Lado oscuro" },
            { emoji: "💎", texto: "Gema de poder" },
            { emoji: "👑", texto: "Trono galáctico" },
            { emoji: "🌟", texto: "Origen cósmico" }
        ]
    ],
    Misterio: [
        [
            { emoji: "🕵️", texto: "Detective" },
            { emoji: "🦹", texto: "Sospechoso" },
            { emoji: "👻", texto: "Fantasma" },
            { emoji: "🧛", texto: "Vampiro" },
            { emoji: "🐺", texto: "Hombre lobo" },
            { emoji: "🧟", texto: "Monstruo" }
        ],
        [
            { emoji: "🩸", texto: "Rastro de sangre" },
            { emoji: "🔍", texto: "Lupa de pesquisa" },
            { emoji: "👣", texto: "Huella sospechosa" },
            { emoji: "🗝️", texto: "Llave oxidada" },
            { emoji: "📄", texto: "Nota anónima" },
            { emoji: "📜", texto: "Testamento" }
        ],
        [
            { emoji: "🏰", texto: "Mansión antigua" },
            { emoji: "🏛️", texto: "Cripta familiar" },
            { emoji: "🏚️", texto: "Casa embrujada" },
            { emoji: "🪦", texto: "Cementerio" },
            { emoji: "🕳️", texto: "Pasadizo secreto" },
            { emoji: "🪜", texto: "Sótano oscuro" }
        ],
        [
            { emoji: "🕯️", texto: "Vela solitaria" },
            { emoji: "🌕", texto: "Luna llena" },
            { emoji: "🌫️", texto: "Niebla densa" },
            { emoji: "⚡", texto: "Tormenta eléctrica" },
            { emoji: "🦉", texto: "Búho nocturno" },
            { emoji: "🦇", texto: "Murciélago" }
        ],
        [
            { emoji: "🧪", texto: "Frasco de veneno" },
            { emoji: "🗡️", texto: "Daga oculta" },
            { emoji: "📻", texto: "Radio con estática" },
            { emoji: "🚪", texto: "Puerta atrancada" },
            { emoji: "💼", texto: "Maletín secreto" },
            { emoji: "🔒", texto: "Caja fuerte" }
        ],
        [
            { emoji: "⏰", texto: "Medianoche" },
            { emoji: "👁️", texto: "Sombra sospechosa" },
            { emoji: "📞", texto: "Llamada misteriosa" },
            { emoji: "📸", texto: "Foto revelada" },
            { emoji: "📓", texto: "Diario secreto" },
            { emoji: "🔮", texto: "Señales ocultas" }
        ],
        [
            { emoji: "🎭", texto: "Máscara de disfraz" },
            { emoji: "🪞", texto: "Reflejo extraño" },
            { emoji: "💎", texto: "Joya robada" },
            { emoji: "🧪", texto: "Poción misteriosa" },
            { emoji: "🕸️", texto: "Telaraña densa" },
            { emoji: "❓", texto: "Coartada dudosa" }
        ],
        [
            { emoji: "⛓️", texto: "Cadenas pesadas" },
            { emoji: "🧪", texto: "Antídoto secreto" },
            { emoji: "🕯️", texto: "Candelabro gótico" },
            { emoji: "♟️", texto: "Juego macabro" },
            { emoji: "📦", texto: "Paquete anónimo" },
            { emoji: "✝️", texto: "Amuleto protector" }
        ],
        [
            { emoji: "☠️", texto: "Calavera antigua" },
            { emoji: "🧩", texto: "Pista clave" },
            { emoji: "🔒", texto: "Candado críptico" },
            { emoji: "🗝️", texto: "Caja con secreto" },
            { emoji: "🔍", texto: "Evidencia clave" },
            { emoji: "⚰️", texto: "Ataúd cerrado" }
        ]
    ]
};
