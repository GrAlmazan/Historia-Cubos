import pygame
import random
import sys

# Inicialización
pygame.init()

# Configuración de ventana
ANCHO, ALTO = 920, 750
pantalla = pygame.display.set_mode((ANCHO, ALTO))
pygame.display.set_caption("Historia Cubos")

# Colores de Interfaz Tema Oscuro (Dark Theme)
COLOR_FONDO = (18, 24, 38)          # Azul noche / Slate oscuro
COLOR_PANEL = (30, 41, 59)          # Gris azulado oscuro para elementos
COLOR_TEXTO = (241, 245, 249)        # Blanco hueso para alta legibilidad
COLOR_TEXTO_MUTED = (148, 163, 184)  # Gris claro para subtítulos
COLOR_BOTON = (37, 99, 235)          # Azul primario
COLOR_BOTON_HOVER = (29, 78, 216)    # Azul interactivo
COLOR_BOTON_SEC = (51, 65, 85)       # Gris botón secundario
COLOR_SOMBRA = (10, 14, 23)          # Sombra profunda para el tema oscuro

# Paletas de colores por Edición Oficial
PALETAS_EDICION = {
    "Original": {
        "frente": (255, 140, 0),      # Naranja
        "superior": (255, 165, 0),
        "lateral": (205, 102, 0),
        "borde": (180, 80, 0)
    },
    "Acciones": {
        "frente": (14, 165, 233),     # Azul
        "superior": (56, 189, 248),
        "lateral": (2, 132, 199),
        "borde": (3, 105, 161)
    },
    "Viajes": {
        "frente": (34, 197, 94),      # Verde
        "superior": (74, 222, 128),
        "lateral": (22, 163, 74),
        "borde": (21, 128, 61)
    },
    "Fantasía": {
        "frente": (168, 85, 247),     # Púrpura / Lila
        "superior": (192, 132, 252),
        "lateral": (147, 51, 234),
        "borde": (126, 34, 206)
    },
    "Héroes": {
        "frente": (239, 68, 68),      # Rojo
        "superior": (248, 113, 113),
        "lateral": (220, 38, 38),
        "borde": (185, 28, 28)
    },
    "Misterio": {
        "frente": (109, 40, 217),     # Morado Misterio
        "superior": (139, 92, 246),
        "lateral": (91, 33, 182),
        "borde": (76, 29, 149)
    }
}

# Fuentes
fuente_emoji = pygame.font.SysFont("Segoe UI Emoji", 26)
fuente_texto = pygame.font.SysFont("Segoe UI", 11, bold=True)
fuente_boton = pygame.font.SysFont("Segoe UI", 16, bold=True)
fuente_titulo = pygame.font.SysFont("Segoe UI", 24, bold=True)
fuente_sub = pygame.font.SysFont("Segoe UI", 14)

# Base de datos de Ediciones
EDICIONES = {
    "Original": [
        [("🏠", "Casa"), ("🍎", "Manzana"), ("⏳", "Reloj arena"), ("💬", "Bocadillo"), ("🔒", "Candado"), ("🔑", "Llave")],
        [("☀️", "Sol"), ("🌙", "Luna"), ("🌧️", "Lluvia"), ("🔥", "Fuego"), ("🌳", "Árbol"), ("🌸", "Flor")],
        [("➡️", "Flecha"), ("👣", "Huella"), ("🪂", "Paracaídas"), ("🪜", "Escalera"), ("🧲", "Imán"), ("🌉", "Puente")],
        [("😀", "Sonrisa"), ("😨", "Asustado"), ("👁️", "Ojo"), ("👆", "Huella dact"), ("🪄", "Varita"), ("❓", "Pregunta")],
        [("🏰", "Castillo"), ("🔺", "Pirámide"), ("⛺", "Tipi"), ("⛲", "Fuente"), ("🗼", "Torre"), ("🏢", "Edificio")],
        [("✈️", "Avión"), ("⛵", "Barco"), ("🐑", "Oveja"), ("🧭", "Brújula"), ("🔦", "Linterna"), ("✉️", "Carta")],
        [("✂️", "Tijeras"), ("💡", "Bombilla"), ("🪙", "Moneda"), ("⚙️", "Engranaje"), ("🪞", "Espejo"), ("📞", "Teléfono")],
        [("🎭", "Máscara"), ("📖", "Libro"), ("🎲", "Dado"), ("🎂", "Pastel"), ("👑", "Corona"), ("🏆", "Trofeo")],
        [("👽", "Alien"), ("🐉", "Dragón"), ("🪲", "Bicho"), ("🧬", "ADN"), ("🔭", "Telescopio"), ("🧩", "Rompecabezas")]
    ],
    "Acciones": [
        [("🏃", "Correr"), ("🚶", "Caminar"), ("🧗", "Escalar"), ("🏊", "Nadar"), ("🤾", "Lanzar"), ("🧘", "Meditar")],
        [("🗣️", "Hablar"), ("👂", "Escuchar"), ("📢", "Gritar"), ("✍️", "Escribir"), ("🤝", "Pactar"), ("🫵", "Señalar")],
        [("🛠️", "Reparar"), ("🪚", "Cortar"), ("⛏️", "Picar"), ("🧹", "Limpiar"), ("🧼", "Lavar"), ("🎨", "Pintar")],
        [("🔍", "Buscar"), ("🕵️", "Espiar"), ("🙈", "Esconder"), ("🔓", "Abrir"), ("📦", "Empacar"), ("🎁", "Entregar")],
        [("💥", "Explotar"), ("⚔️", "Luchar"), ("🛡️", "Proteger"), ("🎯", "Apuntar"), ("🏹", "Disparar"), ("💣", "Detonar")],
        [("🚀", "Despegar"), ("🛬", "Aterrizar"), ("🚗", "Manejar"), ("🚴", "Pedalear"), ("🚣", "Remar"), ("🪂", "Saltar")],
        [("🍳", "Cocinar"), ("🍕", "Comer"), ("☕", "Beber"), ("🌱", "Plantar"), ("🎣", "Pescar"), ("🛒", "Comprar")],
        [("😴", "Dormir"), ("⏰", "Despertar"), ("🎉", "Celebrar"), ("📸", "Fotografiar"), ("💻", "Programar"), ("🎶", "Cantar")],
        [("🧠", "Pensar"), ("💡", "Idear"), ("🧭", "Guiar"), ("📜", "Leer"), ("🔑", "Resolver"), ("🤝", "Ayudar")]
    ],
    "Viajes": [
        [("🧳", "Maleta"), ("Pass", "Pasaporte"), ("🎟️", "Boleto"), ("🗺️", "Mapa"), ("📸", "Cámara"), ("💳", "Tarjeta")],
        [("🗿", "Monumento"), ("🏛️", "Ruinas"), ("🗼", "Torre Eiffel"), ("🗽", "Estatua"), ("🏖️", "Playa"), ("Vol", "Volcán")],
        [("🚂", "Tren"), ("🚌", "Autobús"), ("🛵", "Moped"), ("🚀", "Cohete"), ("Sub", "Submarino"), ("🚁", "Helicóptero")],
        [("🏨", "Hotel"), ("🏕️", "Campamento"), ("🛖", "Cabaña"), ("Cru", "Crucero"), ("🛕", "Templo"), ("Ig", "Iglú")],
        [("🌴", "Isla"), ("🏜️", "Desierto"), ("🏔️", "Montaña"), ("🌊", "Océano"), ("🕳️", "Cueva"), ("🌌", "Aurora")],
        [("🎒", "Mochila"), ("🧢", "Gorra"), ("🕶️", "Gafas sol"), ("🧴", "Protector"), ("🥾", "Botas"), ("🗺️", "Guía")],
        [("🌮", "Comida loc"), ("🥥", "Bebida"), ("🎁", "Souvenir"), ("📸", "Foto postal"), ("🪙", "Divisa"), ("🎭", "Festival")],
        [("🐪", "Camello"), ("🐬", "Delfín"), ("🦅", "Águila"), ("🐘", "Elefante"), ("🦈", "Tiburón"), ("Peng", "Pingüino")],
        [("🌅", "Amanecer"), ("🌌", "Noche clara"), ("🌪️", "Tormenta"), ("🧭", "Norte"), ("📍", "Destino"), ("⚓", "Puerto")]
    ],
    "Fantasía": [
        [("🧙", "Mago"), ("🧝", "Elfo"), ("🧔", "Enano"), ("🧟", "Zombi"), ("🧜", "Sirena"), ("🧚", "Hada")],
        [("🔮", "Orbe místico"), ("📜", "Pergamino"), ("🧪", "Poción"), ("💍", "Anillo único"), ("Grim", "Grimorio"), ("💎", "Gema")],
        [("🗡️", "Daga"), ("🛡️", "Escudo runa"), ("🏹", "Arco elfo"), ("🔨", "Martillo"), ("⚔️", "Espada"), ("🪄", "Báculo")],
        [("🐉", "Dragón"), ("🦄", "Unicornio"), ("🦅", "Grifo"), ("🐺", "Hombre lobo"), ("🐙", "Kraken"), ("🦇", "Murciélago")],
        [("🏰", "Fortaleza"), ("🕳️", "Mazmorra"), ("🌲", "Bosque mag"), ("Portal", "Portal"), ("Altar", "Altar"), ("Abys", "Abismo")],
        [("👑", "Corona rey"), ("💀", "Calavera"), ("🪙", "Tesoro"), ("🔑", "Llave mística"), ("🕯️", "Vela"), ("🩸", "Pacto")],
        [("⚡", "Rayo mag"), ("🔥", "Fuego arcano"), ("❄️", "Hielo mag"), ("🌿", "Naturaleza"), ("👻", "Espectro"), ("⏳", "Tiempo")],
        [("🐴", "Montura"), ("🦅", "Familiar"), ("🕸️", "Trampa"), ("🗺️", "Mapa mapa"), ("👁️", "Ojo vidente"), ("🗿", "Golem")],
        [("🌟", "Estrella"), ("Eclipse", "Eclipse"), ("🌑", "Luna negra"), ("Comet", "Cometa"), ("Runa", "Runa"), ("Fénix", "Fénix")]
    ],
    "Héroes": [
        [("🦸", "Superhéroe"), ("🦹", "Villano"), ("🥷", "Ninja"), ("🤖", "Cíborg"), ("👽", "Invasor"), ("🦹‍♀️", "Némesis")],
        [("🦸‍♂️", "Capa"), ("⚡", "Superfuerza"), ("👓", "Identidad"), ("💍", "Anillo poder"), ("🧪", "Suero mutante"), ("📡", "Alarma")],
        [("☄️", "Meteorito"), ("🧪", "Tóxico"), ("🕳️", "Portal dim"), ("🔬", "Laboratorio"), ("🛸", "Nave alien"), ("💥", "Explosión")],
        [("🏙️", "Rascacielos"), ("🧪", "Cápsula"), ("🚁", "Helicóptero"), ("🛰️", "Satélite"), ("🛗", "Búnker"), ("🚨", "Sirena")],
        [("🥊", "Superpuño"), ("🛡️", "Escudo indest"), ("🧬", "Gen mutante"), ("👀", "Visión x"), ("🔥", "Poder fuego"), ("❄️", "Poder hielo")],
        [("📱", "Comunicador"), ("💻", "Hackeo"), ("🚗", "Batimóvil"), ("🕶️", "Visor"), ("🎒", "Jetpack"), ("📻", "Frecuencia")],
        [("🕸️", "Telaraña"), ("🗡️", "Katanas"), ("🪃", "Bumerán"), ("💣", "Granada"), ("🪢", "Lazo verdad"), ("🏹", "Flecha truco")],
        [("🤝", "Alianza"), ("👊", "Emboscada"), ("⚖️", "Justicia"), ("⛓️", "Captura"), ("🏆", "Victoria"), ("📜", "Profecía")],
        [("🪞", "Clon"), ("⏳", "Viaje tiempo"), ("🖤", "Lado oscuro"), ("💎", "Gema poder"), ("👑", "Trono galác"), ("🌟", "Origen")]
    ],
    "Misterio": [
        [("🕵️", "Detective"), ("🦹", "Sospechoso"), ("👻", "Fantasma"), ("🧛", "Vampiro"), ("🐺", "Hombre lobo"), ("🧟", "Monstruo")],
        [("🩸", "Sangre"), ("🔍", "Lupa"), ("👣", "Huella sospe"), ("🗝️", "Llave oxidada"), ("📄", "Nota anónima"), ("📜", "Testamento")],
        [("🏰", "Mansión"), ("🏛️", "Cripta"), ("🏚️", "Casa embruj"), ("🪦", "Cementerio"), ("🕳️", "Pasadizo"), ("🪜", "Sótano")],
        [("🕯️", "Vela"), ("🌕", "Luna llena"), ("🌫️", "Niebla"), ("⚡", "Tormenta eléctrica"), ("🦉", "Búho"), ("🦇", "Murciélago")],
        [("🧪", "Veneno"), ("🗡️", "Daga oculta"), ("📻", "Radio muerta"), ("🚪", "Puerta atranc"), ("🧳", "Maleta secre"), ("🔒", "Caja fuerte")],
        [("⏰", "Medianoche"), ("👁️", "Sombra"), ("📞", "Llamada mister"), ("📸", "Foto revelada"), ("📖", "Diario secr"), ("🔮", "Señales")],
        [("🎭", "Disfraz"), ("🪞", "Reflejo raro"), ("💎", "Joya robada"), ("🩸", "Poción raras"), ("🕸️", "Telarañas"), ("❓", "Coartada")],
        [("⛓️", "Cadenas"), ("🧪", "Antídoto"), ("🕯️", "Candelabro"), ("♟️", "Juego macabro"), ("📦", "Paquete anón"), ("✝️", "Amuleto")],
        [("☠️", "Calavera"), ("🧩", "Pista clave"), ("🔒", "Candado crip"), ("🗝️", "Secreto"), ("🔍", "Evidencia"), ("⚰️", "Ataúd")]
    ]
}

# Selección inicial
cantidades = {"Original": 9, "Acciones": 0, "Viajes": 0, "Fantasía": 0, "Héroes": 0, "Misterio": 0}

modo_menu = True
pool_dados_seleccionados = []
caras_actuales = []
animando = False
frames_animacion = 0

def preparar_pool_dados():
    global pool_dados_seleccionados, caras_actuales
    pool_dados_seleccionados = []
    for edicion, cant in cantidades.items():
        if cant > 0:
            dados_disponibles = list(EDICIONES[edicion])
            random.shuffle(dados_disponibles)
            for d in dados_disponibles[:cant]:
                pool_dados_seleccionados.append((d, edicion))
    
    caras_actuales = [(random.choice(dado), edicion) for dado, edicion in pool_dados_seleccionados]

def iniciar_animacion():
    global animando, frames_animacion
    if len(pool_dados_seleccionados) > 0:
        animando = True
        frames_animacion = 25

def dibujar_cubo_3d_coloreado(pantalla, x, y, ancho, alto, profundidad, item_cara, offset_y=0):
    y_anim = y + offset_y
    cara, edicion = item_cara
    emoji, texto = cara

    paleta = PALETAS_EDICION[edicion]

    p_frente = [(x, y_anim), (x + ancho, y_anim), (x + ancho, y_anim + alto), (x, y_anim + alto)]
    p_superior = [(x, y_anim), (x + profundidad, y_anim - profundidad), (x + ancho + profundidad, y_anim - profundidad), (x + ancho, y_anim)]
    p_derecha = [(x + ancho, y_anim), (x + ancho + profundidad, y_anim - profundidad), (x + ancho + profundidad, y_anim + alto - profundidad), (x + ancho, y_anim + alto)]

    sombra_ancho = max(10, ancho - int(abs(offset_y) * 0.5))
    pygame.draw.ellipse(pantalla, COLOR_SOMBRA, (x + (ancho - sombra_ancho) // 2, y + alto + 5, sombra_ancho, 12))

    pygame.draw.polygon(pantalla, paleta["superior"], p_superior)
    pygame.draw.polygon(pantalla, paleta["lateral"], p_derecha)
    pygame.draw.polygon(pantalla, paleta["frente"], p_frente)

    pygame.draw.polygon(pantalla, paleta["borde"], p_superior, 2)
    pygame.draw.polygon(pantalla, paleta["borde"], p_derecha, 2)
    pygame.draw.polygon(pantalla, paleta["borde"], p_frente, 2)

    lbl_emoji = fuente_emoji.render(emoji, True, (255, 255, 255))
    rect_emoji = lbl_emoji.get_rect(center=(x + (ancho // 2), y_anim + (alto // 2) - 8))
    pantalla.blit(lbl_emoji, rect_emoji)

    lbl_texto = fuente_texto.render(texto, True, (255, 255, 255))
    rect_texto = lbl_texto.get_rect(center=(x + (ancho // 2), y_anim + (alto // 2) + 20))
    pantalla.blit(lbl_texto, rect_texto)

clock = pygame.time.Clock()
rect_btn_lanzar = pygame.Rect(ANCHO // 2 - 110, ALTO - 75, 220, 50)
rect_btn_menu = pygame.Rect(30, 20, 120, 35)
rect_btn_iniciar = pygame.Rect(ANCHO // 2 - 110, ALTO - 80, 220, 50)

running = True
while running:
    pos_mouse = pygame.mouse.get_pos()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            if modo_menu:
                y_pos = 140
                for edicion in EDICIONES.keys():
                    rect_menos = pygame.Rect(ANCHO // 2 + 50, y_pos, 35, 35)
                    rect_mas = pygame.Rect(ANCHO // 2 + 140, y_pos, 35, 35)

                    if rect_menos.collidepoint(pos_mouse) and cantidades[edicion] > 0:
                        cantidades[edicion] -= 1
                    elif rect_mas.collidepoint(pos_mouse) and cantidades[edicion] < 9:
                        cantidades[edicion] += 1
                    y_pos += 65

                if rect_btn_iniciar.collidepoint(pos_mouse) and sum(cantidades.values()) > 0:
                    preparar_pool_dados()
                    modo_menu = False
            else:
                if rect_btn_menu.collidepoint(pos_mouse):
                    modo_menu = True
                elif rect_btn_lanzar.collidepoint(pos_mouse) and not animando:
                    iniciar_animacion()

    if animando and not modo_menu:
        frames_animacion -= 1
        caras_actuales = [(random.choice(dado), edicion) for dado, edicion in pool_dados_seleccionados]
        if frames_animacion <= 0:
            animando = False

    pantalla.fill(COLOR_FONDO)

    if modo_menu:
        titulo = fuente_titulo.render("CONFIGURAR CUBOS POR EDICIÓN", True, COLOR_TEXTO)
        pantalla.blit(titulo, titulo.get_rect(center=(ANCHO // 2, 40)))

        sub = fuente_sub.render("Selecciona cuántos dados de cada edición deseas combinar en la mesa:", True, COLOR_TEXTO_MUTED)
        pantalla.blit(sub, sub.get_rect(center=(ANCHO // 2, 80)))

        y_pos = 140
        for edicion, cant in cantidades.items():
            paleta = PALETAS_EDICION[edicion]

            pygame.draw.rect(pantalla, paleta["frente"], (ANCHO // 2 - 240, y_pos + 5, 20, 25), border_radius=4)

            lbl_ed = fuente_boton.render(f"Edición {edicion}:", True, COLOR_TEXTO)
            pantalla.blit(lbl_ed, (ANCHO // 2 - 205, y_pos + 5))

            rect_menos = pygame.Rect(ANCHO // 2 + 50, y_pos, 35, 35)
            pygame.draw.rect(pantalla, COLOR_BOTON_SEC, rect_menos, border_radius=6)
            txt_m = fuente_boton.render("-", True, COLOR_TEXTO)
            pantalla.blit(txt_m, txt_m.get_rect(center=rect_menos.center))

            lbl_cant = fuente_boton.render(str(cant), True, COLOR_TEXTO)
            pantalla.blit(lbl_cant, lbl_cant.get_rect(center=(ANCHO // 2 + 112, y_pos + 18)))

            rect_mas = pygame.Rect(ANCHO // 2 + 140, y_pos, 35, 35)
            pygame.draw.rect(pantalla, COLOR_BOTON_SEC, rect_mas, border_radius=6)
            txt_p = fuente_boton.render("+", True, COLOR_TEXTO)
            pantalla.blit(txt_p, txt_p.get_rect(center=rect_mas.center))

            y_pos += 65

        total_d = sum(cantidades.values())
        lbl_tot = fuente_sub.render(f"Total de dados seleccionados: {total_d}", True, COLOR_TEXTO_MUTED)
        pantalla.blit(lbl_tot, lbl_tot.get_rect(center=(ANCHO // 2, ALTO - 120)))

        color_iniciar = COLOR_BOTON if total_d > 0 else COLOR_BOTON_SEC
        pygame.draw.rect(pantalla, color_iniciar, rect_btn_iniciar, border_radius=12)
        txt_ini = fuente_boton.render("Comenzar Juego", True, COLOR_TEXTO)
        pantalla.blit(txt_ini, txt_ini.get_rect(center=rect_btn_iniciar.center))

    else:
        pygame.draw.rect(pantalla, COLOR_BOTON_SEC, rect_btn_menu, border_radius=8)
        txt_m = fuente_texto.render("Menú", True, COLOR_TEXTO)
        pantalla.blit(txt_m, txt_m.get_rect(center=rect_btn_menu.center))

        titulo = fuente_titulo.render("HISTORIA CUBOS", True, COLOR_TEXTO)
        pantalla.blit(titulo, titulo.get_rect(center=(ANCHO // 2, 35)))

        total_dados = len(pool_dados_seleccionados)
        
        cols = 3 if total_dados <= 9 else (4 if total_dados <= 16 else 5)
        ancho_cubo, alto_cubo = (120, 85) if cols <= 4 else (100, 70)
        espacio_x, espacio_y = (170, 120) if cols <= 4 else (140, 100)
        
        margen_x = (ANCHO - (cols * espacio_x)) // 2 + 25
        margen_y = 90

        for i in range(total_dados):
            col, fila = i % cols, i // cols
            x = margen_x + (col * espacio_x)
            y = margen_y + (fila * espacio_y)
            
            offset_y = -random.randint(5, 18) if animando else 0
            dibujar_cubo_3d_coloreado(pantalla, x, y, ancho_cubo, alto_cubo, 14, caras_actuales[i], offset_y)

        color_btn = COLOR_BOTON_HOVER if rect_btn_lanzar.collidepoint(pos_mouse) else COLOR_BOTON
        pygame.draw.rect(pantalla, color_btn, rect_btn_lanzar, border_radius=12)
        txt_btn = fuente_boton.render("Lanzar Dados" if not animando else "Girando...", True, COLOR_TEXTO)
        pantalla.blit(txt_btn, txt_btn.get_rect(center=rect_btn_lanzar.center))

    pygame.display.flip()
    clock.tick(30)

pygame.quit()
sys.exit()