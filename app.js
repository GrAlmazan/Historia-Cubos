/**
 * app.js - Lógica Principal de Historia Cubos
 * Gestión de estados, física de animación, tiradas aleatorias y controles de interfaz.
 */

import { EDICIONES, PALETAS_EDICION } from './data.js';
import { soundManager } from './audio.js';

// Estado de la Aplicación
const state = {
    cantidades: {
        Original: 9,
        Acciones: 0,
        Viajes: 0,
        Fantasia: 0,
        Heroes: 0,
        Misterio: 0
    },
    // Lista de dados en mesa: { id, edicion, dadoIndex, caraActual: { emoji, texto }, locked: boolean }
    dadosEnMesa: [],
    animando: false,
    promptActual: 0
};

const PROMPTS_HISTORIA = [
    "Érase una vez, en un rincón olvidado donde el tiempo parecía haberse detenido...",
    "Todo comenzó la noche en que una extraña señal iluminó el horizonte...",
    "Nadie en el pueblo creía en las leyendas antiguas, hasta que ocurrió...",
    "El viaje prometía ser tranquilo, pero a mitad de camino sucedió lo impensable...",
    "En un mundo donde la magia estaba prohibida por ley, un descubrimiento lo cambió todo...",
    "El detective abrió el sobre confidencial y supo de inmediato que no había marcha atrás...",
    "Cuando las sirenas de alarma resonaron en la torre central, descubrieron que...",
    "Una puerta secreta en el antiguo muro reveló un misterio sellado por generaciones...",
    "En los confines de lo desconocido, un inesperado hallazgo cambió el destino de todos...",
    "Aquel artefacto brillante no pertenecía a ninguna civilización conocida...",
    "La profecía decía que cuando los símbolos se alinearan, comenzaría la gran prueba..."
];

// Elementos del DOM
const editionsContainer = document.getElementById('editions-container');
const diceContainer = document.getElementById('dice-container');
const emptyState = document.getElementById('empty-state');
const totalDiceCountEl = document.getElementById('total-dice-count');
const lockedDiceCountEl = document.getElementById('locked-dice-count');
const btnRoll = document.getElementById('btn-roll');
const btnRollText = document.getElementById('btn-roll-text');
const btnCopy = document.getElementById('btn-copy');
const btnUnlockAll = document.getElementById('btn-unlock-all');
const promptDisplay = document.getElementById('prompt-display');
const btnRefreshPrompt = document.getElementById('btn-refresh-prompt');
const btnSoundToggle = document.getElementById('btn-sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const toastEl = document.getElementById('toast');
const toastMsgEl = document.getElementById('toast-msg');

/**
 * Inicialización de la aplicación
 */
function init() {
    renderEditionsControls();
    reconstruirDadosEnMesa();
    setupEventListeners();
    setupModals();
    actualizarPromptAleatorio();
}

/**
 * Renderiza los selectores de cantidad de cada edición
 */
function renderEditionsControls() {
    editionsContainer.innerHTML = '';

    Object.entries(PALETAS_EDICION).forEach(([key, paleta]) => {
        const card = document.createElement('div');
        card.className = 'edition-card';
        card.style.setProperty('--ed-color', paleta.frente);

        const cant = state.cantidades[key] || 0;

        card.innerHTML = `
            <div class="edition-info">
                <div class="edition-swatch" style="background: ${paleta.frente};"></div>
                <div>
                    <div class="edition-name">${paleta.nombre}</div>
                    <div class="edition-desc" title="${paleta.descripcion}">${paleta.descripcion}</div>
                </div>
            </div>
            <div class="counter-controls">
                <button class="counter-btn" data-action="dec" data-ed="${key}" aria-label="Reducir ${paleta.nombre}" ${cant <= 0 ? 'disabled' : ''}>-</button>
                <span class="counter-value" id="val-${key}">${cant}</span>
                <button class="counter-btn" data-action="inc" data-ed="${key}" aria-label="Aumentar ${paleta.nombre}" ${cant >= 9 ? 'disabled' : ''}>+</button>
            </div>
        `;

        editionsContainer.appendChild(card);
    });
}

/**
 * Reconstruye la mesa de dados respetando los dados bloqueados si es posible
 */
function reconstruirDadosEnMesa() {
    const nuevosDados = [];
    let idCounter = 1;

    Object.entries(state.cantidades).forEach(([edicion, cantidad]) => {
        if (cantidad <= 0) return;

        // Recuperar los dados de esta edición que ya estaban bloqueados
        const existentesBloqueados = state.dadosEnMesa.filter(d => d.edicion === edicion && d.locked);
        
        // Obtener la colección de 9 dados físicos de esta edición
        const dadosDisponibles = [...EDICIONES[edicion]];
        // Barajar para seleccionar dados diferentes
        shuffleArray(dadosDisponibles);

        for (let i = 0; i < cantidad; i++) {
            if (i < existentesBloqueados.length) {
                // Conservar dado bloqueado
                nuevosDados.push(existentesBloqueados[i]);
            } else {
                const dadoFisico = dadosDisponibles[i % dadosDisponibles.length];
                const caraInicial = dadoFisico[Math.floor(Math.random() * dadoFisico.length)];
                
                nuevosDados.push({
                    id: `die-${idCounter++}`,
                    edicion,
                    dadoFisico,
                    caraActual: caraInicial,
                    locked: false
                });
            }
        }
    });

    state.dadosEnMesa = nuevosDados;
    renderBoard();
    actualizarContadores();
}

/**
 * Renderiza los dados en la mesa de juego con estética 3D isométrica
 */
function renderBoard() {
    diceContainer.innerHTML = '';

    if (state.dadosEnMesa.length === 0) {
        diceContainer.style.display = 'none';
        emptyState.style.display = 'block';
        btnRoll.disabled = true;
        btnCopy.disabled = true;
        return;
    }

    diceContainer.style.display = 'grid';
    emptyState.style.display = 'none';
    btnRoll.disabled = false;
    btnCopy.disabled = false;

    state.dadosEnMesa.forEach((die, index) => {
        const paleta = PALETAS_EDICION[die.edicion];

        const wrapper = document.createElement('div');
        wrapper.className = `cube-wrapper ${die.locked ? 'locked' : ''}`;
        wrapper.id = die.id;
        wrapper.setAttribute('role', 'button');
        wrapper.setAttribute('tabindex', '0');
        wrapper.setAttribute('aria-label', `Dado de ${die.edicion}: ${die.caraActual.texto}. Clic para bloquear o desbloquear`);
        wrapper.title = `${die.caraActual.texto} (${die.edicion}) - Haz clic para bloquear`;

        wrapper.style.setProperty('--cube-front', paleta.frente);
        wrapper.style.setProperty('--cube-top', paleta.superior);
        wrapper.style.setProperty('--cube-right', paleta.lateral);
        wrapper.style.setProperty('--cube-border', paleta.borde);

        wrapper.innerHTML = `
            <div class="cube-shadow"></div>
            <div class="cube-3d">
                <div class="face-top"></div>
                <div class="face-right"></div>
                <div class="face-front">
                    <span class="cube-emoji">${die.caraActual.emoji}</span>
                    <span class="cube-text">${die.caraActual.texto}</span>
                </div>
            </div>
            <div class="cube-lock-badge" title="Dado fijado">🔒</div>
        `;

        // Evento de clic para bloquear o desbloquear
        wrapper.addEventListener('click', () => toggleLockDie(die));
        wrapper.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') toggleLockDie(die);
        });

        diceContainer.appendChild(wrapper);
    });
}

/**
 * Alterna el estado de bloqueo de un dado individual
 */
function toggleLockDie(die) {
    if (state.animando) return;
    die.locked = !die.locked;
    soundManager.playClick();
    
    const el = document.getElementById(die.id);
    if (el) {
        el.classList.toggle('locked', die.locked);
    }
    actualizarContadores();
}

/**
 * Desbloquea todos los dados en la mesa
 */
function desbloquearTodos() {
    state.dadosEnMesa.forEach(d => d.locked = false);
    document.querySelectorAll('.cube-wrapper.locked').forEach(el => el.classList.remove('locked'));
    soundManager.playClick();
    actualizarContadores();
    showToast("Todos los dados han sido desbloqueados");
}

/**
 * Actualiza los contadores numéricos y badges de la interfaz
 */
function actualizarContadores() {
    const total = state.dadosEnMesa.length;
    const bloqueados = state.dadosEnMesa.filter(d => d.locked).length;

    totalDiceCountEl.textContent = total;
    
    if (bloqueados > 0) {
        lockedDiceCountEl.style.display = 'inline';
        lockedDiceCountEl.textContent = `(${bloqueados} fijados)`;
        btnUnlockAll.style.display = 'inline-flex';
    } else {
        lockedDiceCountEl.style.display = 'none';
        btnUnlockAll.style.display = 'none';
    }

    // Actualizar botones de las ediciones
    Object.keys(state.cantidades).forEach(key => {
        const valEl = document.getElementById(`val-${key}`);
        if (valEl) valEl.textContent = state.cantidades[key];

        const decBtn = document.querySelector(`button[data-action="dec"][data-ed="${key}"]`);
        const incBtn = document.querySelector(`button[data-action="inc"][data-ed="${key}"]`);
        if (decBtn) decBtn.disabled = state.cantidades[key] <= 0;
        if (incBtn) incBtn.disabled = state.cantidades[key] >= 9;
    });
}

/**
 * Lanza los dados con animación y efectos de sonido
 */
function lanzarDados() {
    if (state.animando || state.dadosEnMesa.length === 0) return;

    const dadosALanzar = state.dadosEnMesa.filter(d => !d.locked);
    if (dadosALanzar.length === 0) {
        showToast("Todos los dados están fijados. Desbloquea alguno para lanzar.");
        return;
    }

    state.animando = true;
    btnRoll.disabled = true;
    btnRollText.textContent = "Girando...";
    soundManager.playDiceRoll();

    // Activar animación CSS en los dados no bloqueados
    dadosALanzar.forEach(die => {
        const el = document.getElementById(die.id);
        if (el) {
            el.classList.add('rolling');
        }
    });

    // Cambios intermedios rápidos de caras durante la tirada
    let frames = 0;
    const maxFrames = 7;
    const interval = setInterval(() => {
        frames++;
        dadosALanzar.forEach(die => {
            const randomFace = die.dadoFisico[Math.floor(Math.random() * die.dadoFisico.length)];
            const el = document.getElementById(die.id);
            if (el) {
                const emojiEl = el.querySelector('.cube-emoji');
                const textEl = el.querySelector('.cube-text');
                if (emojiEl && textEl) {
                    emojiEl.textContent = randomFace.emoji;
                    textEl.textContent = randomFace.texto;
                }
            }
        });

        if (frames >= maxFrames) {
            clearInterval(interval);
            finalizarTirada(dadosALanzar);
        }
    }, 90);
}

/**
 * Concluye la tirada fijando las caras definitivas y restableciendo estados
 */
function finalizarTirada(dadosLanzados) {
    dadosLanzados.forEach(die => {
        // Seleccionar cara definitiva
        die.caraActual = die.dadoFisico[Math.floor(Math.random() * die.dadoFisico.length)];
        const el = document.getElementById(die.id);
        if (el) {
            el.classList.remove('rolling');
            const emojiEl = el.querySelector('.cube-emoji');
            const textEl = el.querySelector('.cube-text');
            if (emojiEl && textEl) {
                emojiEl.textContent = die.caraActual.emoji;
                textEl.textContent = die.caraActual.texto;
            }
            el.setAttribute('aria-label', `Dado de ${die.edicion}: ${die.caraActual.texto}. Clic para bloquear o desbloquear`);
            el.title = `${die.caraActual.texto} (${die.edicion}) - Haz clic para bloquear`;
        }
    });

    state.animando = false;
    btnRoll.disabled = false;
    btnRollText.textContent = "Lanzar Dados (Espacio)";
    soundManager.playSuccess();
}

/**
 * Copia la combinación actual de dados al portapapeles
 */
async function copiarResultado() {
    if (state.dadosEnMesa.length === 0) return;

    soundManager.playClick();
    const promptText = promptDisplay.textContent.trim();
    
    let textoResultado = `🎲 Historia Cubos\n${promptText}\n\n`;
    
    // Agrupar por edición para un formato hermoso
    const porEdicion = {};
    state.dadosEnMesa.forEach(d => {
        if (!porEdicion[d.edicion]) porEdicion[d.edicion] = [];
        porEdicion[d.edicion].push(`${d.caraActual.emoji} ${d.caraActual.texto}`);
    });

    Object.entries(porEdicion).forEach(([ed, items]) => {
        textoResultado += `• [${ed}]: ${items.join(' | ')}\n`;
    });

    textoResultado += `\n¡Crea tu historia con estos elementos! 📖✨`;

    try {
        await navigator.clipboard.writeText(textoResultado);
        showToast("¡Tirada copiada al portapapeles con éxito!");
    } catch (err) {
        console.error("Error al copiar:", err);
        showToast("No se pudo copiar automáticamente.");
    }
}

/**
 * Aplica una configuración rápida de dados predefinida
 */
function aplicarPreset(presetName) {
    soundManager.playClick();

    switch (presetName) {
        case 'clasico':
            state.cantidades = { Original: 9, Acciones: 0, Viajes: 0, Fantasia: 0, Heroes: 0, Misterio: 0 };
            break;
        case 'rapido':
            state.cantidades = { Original: 3, Acciones: 0, Viajes: 0, Fantasia: 0, Heroes: 0, Misterio: 0 };
            break;
        case 'aventura':
            state.cantidades = { Original: 3, Acciones: 3, Viajes: 3, Fantasia: 0, Heroes: 0, Misterio: 0 };
            break;
        case 'fantasia':
            state.cantidades = { Original: 0, Acciones: 0, Viajes: 0, Fantasia: 9, Heroes: 0, Misterio: 0 };
            break;
        case 'misterio':
            state.cantidades = { Original: 0, Acciones: 0, Viajes: 0, Fantasia: 0, Heroes: 0, Misterio: 9 };
            break;
        case 'heroes':
            state.cantidades = { Original: 0, Acciones: 0, Viajes: 0, Fantasia: 0, Heroes: 9, Misterio: 0 };
            break;
        case 'variado':
            state.cantidades = { Original: 2, Acciones: 2, Viajes: 2, Fantasia: 2, Heroes: 2, Misterio: 2 };
            break;
        case 'limpiar':
            state.cantidades = { Original: 0, Acciones: 0, Viajes: 0, Fantasia: 0, Heroes: 0, Misterio: 0 };
            break;
    }

    reconstruirDadosEnMesa();
    showToast(`Preset "${presetName}" aplicado`);
}

/**
 * Muestra un nuevo prompt inspirador aleatorio
 */
function actualizarPromptAleatorio() {
    soundManager.playClick();
    let nuevoIndex;
    do {
        nuevoIndex = Math.floor(Math.random() * PROMPTS_HISTORIA.length);
    } while (nuevoIndex === state.promptActual && PROMPTS_HISTORIA.length > 1);

    state.promptActual = nuevoIndex;
    promptDisplay.textContent = `"${PROMPTS_HISTORIA[nuevoIndex]}"`;
}

/**
 * Muestra un aviso toast temporal
 */
function showToast(mensaje) {
    toastMsgEl.textContent = mensaje;
    toastEl.classList.add('show');
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 2800);
}

/**
 * Configuración de Eventos de la Interfaz
 */
function setupEventListeners() {
    // Incremento y decremento en selectores de edición
    editionsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.counter-btn');
        if (!btn) return;

        const action = btn.dataset.action;
        const ed = btn.dataset.ed;

        soundManager.playClick();

        if (action === 'inc' && state.cantidades[ed] < 9) {
            state.cantidades[ed]++;
        } else if (action === 'dec' && state.cantidades[ed] > 0) {
            state.cantidades[ed]--;
        }

        reconstruirDadosEnMesa();
    });

    // Chips de Presets
    document.querySelectorAll('.preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            aplicarPreset(chip.dataset.preset);
        });
    });

    // Botones de acción principales
    btnRoll.addEventListener('click', lanzarDados);
    btnCopy.addEventListener('click', copiarResultado);
    btnUnlockAll.addEventListener('click', desbloquearTodos);
    btnRefreshPrompt.addEventListener('click', actualizarPromptAleatorio);

    // Conmutador de audio
    btnSoundToggle.addEventListener('click', () => {
        const muted = soundManager.toggleMute();
        soundIcon.textContent = muted ? '🔇' : '🔊';
        btnSoundToggle.title = muted ? 'Sonido desactivado' : 'Sonido activado';
        btnSoundToggle.classList.toggle('active', !muted);
        showToast(muted ? "Sonido desactivado" : "Sonido activado");
    });

    // Atajo de teclado: Barra espaciadora para lanzar dados
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !e.target.matches('input, textarea, button')) {
            e.preventDefault();
            lanzarDados();
        }
    });
}

/**
 * Control de Modales
 */
function setupModals() {
    const openButtons = document.querySelectorAll('[data-open-modal], #btn-rules, #btn-about');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    const overlays = document.querySelectorAll('.modal-overlay');

    document.getElementById('btn-rules').addEventListener('click', () => {
        document.getElementById('modal-rules').classList.add('open');
        soundManager.playClick();
    });

    document.getElementById('btn-about').addEventListener('click', () => {
        document.getElementById('modal-about').classList.add('open');
        soundManager.playClick();
    });

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.openModal;
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add('open');
                soundManager.playClick();
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.closeModal;
            document.getElementById(modalId)?.classList.remove('open');
            soundManager.playClick();
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
                soundManager.playClick();
            }
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlays.forEach(m => m.classList.remove('open'));
        }
    });
}

// Inicialización al cargar la página
window.addEventListener('DOMContentLoaded', init);
