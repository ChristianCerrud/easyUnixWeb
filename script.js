/* --- BASE DE DATOS DE CONTENIDO --- */

// 1. Textos de la Interfaz (Menús, Títulos)
const uiTranslations = {
  fr: {
    search_placeholder: "Rechercher une commande...",
    nav: [
      "Présentation",
      "Installation",
      "Fichiers",
      "Utilisateurs",
      "Groupes",
      "Serveur",
    ],
    titles: [
      "Présentation",
      "Installation et Programmes",
      "Gestion des Fichiers",
      "Gestion des Utilisateurs",
      "Gestion des Groupes",
      "Serveur et Réseau",
    ],
    intro:
      "Linux® est un système d'exploitation Open Source. Il gère les composants physiques (processeur, mémoire, stockage) et fait le lien entre les applications et le matériel.",
    btn_options: "Options / Exemples",
  },
  es: {
    search_placeholder: "Buscar comando...",
    nav: [
      "Presentación",
      "Instalación",
      "Archivos",
      "Usuarios",
      "Grupos",
      "Servidor",
    ],
    titles: [
      "Presentación",
      "Instalación y Programas",
      "Gestión de Archivos",
      "Gestión de Usuarios",
      "Gestión de Grupos",
      "Servidor y Red",
    ],
    intro:
      "Linux® es un sistema operativo de código abierto. Gestiona los componentes físicos (procesador, memoria, almacenamiento) y actúa como interfaz entre las aplicaciones y el hardware.",
    btn_options: "Opciones / Ejemplos",
  },
  en: {
    search_placeholder: "Search command...",
    nav: ["Presentation", "Installation", "Files", "Users", "Groups", "Server"],
    titles: [
      "Presentation",
      "Installation & Programs",
      "File Management",
      "User Management",
      "Group Management",
      "Server & Network",
    ],
    intro:
      "Linux® is an Open Source operating system. It manages physical components (CPU, memory, storage) and acts as the interface between applications and hardware.",
    btn_options: "Options / Examples",
  },
};

// 2. Datos de los Comandos (Trilingüe)
// cat: category (install, files, users, groups, server)
const commandsData = [
  // --- INSTALL ---
  {
    id: "dnf",
    cat: "install",
    title: "dnf",
    desc: {
      fr: "Utilisé pour installer des applications et mettre à jour le système.",
      es: "Utilizado para instalar aplicaciones y actualizar el sistema.",
      en: "Used to install applications and update the system.",
    },
    options: [
      {
        cmd: "install dnf",
        fr: "Mise à jour des commandes dnf.",
        es: "Actualizar comandos dnf.",
        en: "Update dnf commands.",
      },
      {
        cmd: "update dnf",
        fr: "Mise à jour dnf.",
        es: "Actualización de dnf.",
        en: "Update dnf.",
      },
      {
        cmd: "list",
        fr: "Cherche si un paquetage est disponible (nom exact).",
        es: "Busca si un paquete está disponible (nombre exacto).",
        en: "Check if a package is available (exact name).",
      },
      {
        cmd: "remove",
        fr: "Désinstaller le paquetage.",
        es: "Desinstalar el paquete.",
        en: "Uninstall the package.",
      },
    ],
  },
  {
    id: "rpm",
    cat: "install",
    title: "rpm",
    desc: {
      fr: "Gestionnaire de paquets pour Red Hat/Fedora (installer, vérifier, supprimer).",
      es: "Gestor de paquetes para Red Hat/Fedora (instalar, verificar, eliminar).",
      en: "Package manager for Red Hat/Fedora (install, verify, remove).",
    },
  },
  {
    id: "geany",
    cat: "install",
    title: "geany",
    desc: {
      fr: "Éditeur de texte pour modifier les fichiers de configuration.",
      es: "Editor de texto para modificar archivos de configuración.",
      en: "Text editor to modify configuration files.",
    },
  },
  {
    id: "firefox",
    cat: "install",
    title: "firefox",
    desc: {
      fr: "Lance le navigateur Firefox.",
      es: "Inicia el navegador Firefox.",
      en: "Launches the Firefox browser.",
    },
    code: "firefox http://localhost/~ProjwebA",
  },
  {
    id: "npm",
    cat: "install",
    title: "npm install",
    desc: {
      fr: "Installe la bibliothèque npm (Node.js).",
      es: "Instala la librería npm (Node.js).",
      en: "Installs the npm library (Node.js).",
    },
  },
  {
    id: "killport",
    cat: "install",
    title: "kill $(lsof -t -i :port)",
    desc: {
      fr: "Force la fermeture d'un processus sur un port spécifique.",
      es: "Fuerza el cierre de un proceso en un puerto específico.",
      en: "Forces a process on a specific port to close.",
    },
  },

  // --- FILES ---
  {
    id: "nano",
    cat: "files",
    title: "nano",
    desc: {
      fr: "Éditeur de texte en terminal.",
      es: "Editor de texto en terminal.",
      en: "Terminal text editor.",
    },
  },
  {
    id: "echo",
    cat: "files",
    title: "echo",
    desc: {
      fr: "Affiche du texte ou l'insère dans un fichier.",
      es: "Muestra texto o lo inserta en un archivo.",
      en: "Displays text or inserts it into a file.",
    },
  },
  {
    id: "cat",
    cat: "files",
    title: "cat",
    desc: {
      fr: "Affiche le contenu d'un fichier.",
      es: "Muestra el contenido de un archivo.",
      en: "Displays file content.",
    },
  },
  {
    id: "mkdir",
    cat: "files",
    title: "mkdir",
    desc: {
      fr: "Créer des dossiers.",
      es: "Crear carpetas.",
      en: "Create directories.",
    },
    options: [
      {
        cmd: "-p",
        fr: "Crée les parents s'ils n'existent pas.",
        es: "Crea los directorios padres si no existen.",
        en: "Create parents if not exist.",
      },
    ],
  },
  {
    id: "rm",
    cat: "files",
    title: "rm",
    desc: {
      fr: "Supprimer fichiers/répertoires.",
      es: "Eliminar archivos/directorios.",
      en: "Remove files/directories.",
    },
    options: [
      {
        cmd: "-f",
        fr: "Force la suppression.",
        es: "Fuerza el borrado.",
        en: "Force removal.",
      },
      { cmd: "-r", fr: "Récursif.", es: "Recursivo.", en: "Recursive." },
    ],
  },
  {
    id: "mv",
    cat: "files",
    title: "mv",
    desc: {
      fr: "Déplace ou renomme.",
      es: "Mueve o renombra.",
      en: "Moves or renames.",
    },
  },
  {
    id: "cp",
    cat: "files",
    title: "cp",
    desc: {
      fr: "Copie des fichiers.",
      es: "Copia archivos.",
      en: "Copies files.",
    },
    options: [
      {
        cmd: "-R",
        fr: "Copie récursive.",
        es: "Copia recursiva.",
        en: "Recursive copy.",
      },
    ],
  },
  {
    id: "ls",
    cat: "files",
    title: "ls",
    desc: {
      fr: "Liste le contenu.",
      es: "Lista el contenido.",
      en: "List content.",
    },
    options: [
      {
        cmd: "-l",
        fr: "Liste détaillée.",
        es: "Lista detallada.",
        en: "Detailed list.",
      },
      {
        cmd: "-a",
        fr: "Fichiers cachés.",
        es: "Archivos ocultos.",
        en: "Hidden files.",
      },
    ],
  },
  {
    id: "pwd",
    cat: "files",
    title: "pwd",
    desc: {
      fr: "Affiche le chemin actuel.",
      es: "Muestra la ruta actual.",
      en: "Show current path.",
    },
  },
  {
    id: "chmod",
    cat: "files",
    title: "chmod",
    desc: {
      fr: "Change les permissions.",
      es: "Cambia permisos.",
      en: "Change permissions.",
    },
    options: [
      {
        cmd: "u/g/o",
        fr: "User, Group, Other.",
        es: "Usuario, Grupo, Otros.",
        en: "User, Group, Other.",
      },
      {
        cmd: "r/w/x",
        fr: "Read, Write, Execute.",
        es: "Leer, Escribir, Ejecutar.",
        en: "Read, Write, Execute.",
      },
    ],
  },

  // --- USERS ---
  {
    id: "su",
    cat: "users",
    title: "su -",
    desc: {
      fr: "Changer d'utilisateur (root).",
      es: "Cambiar de usuario (root).",
      en: "Switch user (root).",
    },
  },
  {
    id: "useradd",
    cat: "users",
    title: "useradd",
    desc: {
      fr: "Créer un utilisateur.",
      es: "Crear un usuario.",
      en: "Create a user.",
    },
  },
  {
    id: "passwd",
    cat: "users",
    title: "passwd",
    desc: {
      fr: "Changer le mot de passe.",
      es: "Cambiar contraseña.",
      en: "Change password.",
    },
    options: [
      {
        cmd: "-d",
        fr: "Supprimer mot de passe.",
        es: "Eliminar contraseña.",
        en: "Delete password.",
      },
      {
        cmd: "-l",
        fr: "Verrouiller compte.",
        es: "Bloquear cuenta.",
        en: "Lock account.",
      },
    ],
  },
  {
    id: "userdel",
    cat: "users",
    title: "userdel",
    desc: {
      fr: "Supprimer un utilisateur.",
      es: "Eliminar un usuario.",
      en: "Delete a user.",
    },
    options: [
      {
        cmd: "-r",
        fr: "Supprimer dossier home.",
        es: "Eliminar carpeta home.",
        en: "Delete home folder.",
      },
    ],
  },
  {
    id: "usermod",
    cat: "users",
    title: "usermod",
    desc: {
      fr: "Modifier un utilisateur.",
      es: "Modificar un usuario.",
      en: "Modify a user.",
    },
    options: [
      {
        cmd: "-aG",
        fr: "Ajouter au groupe.",
        es: "Añadir a grupo.",
        en: "Add to group.",
      },
      { cmd: "-L", fr: "Verrouiller.", es: "Bloquear.", en: "Lock." },
    ],
  },

  // --- GROUPS ---
  {
    id: "groups",
    cat: "groups",
    title: "groups",
    desc: {
      fr: "Lister les groupes.",
      es: "Listar grupos.",
      en: "List groups.",
    },
  },
  {
    id: "groupadd",
    cat: "groups",
    title: "groupadd",
    desc: {
      fr: "Créer un groupe.",
      es: "Crear un grupo.",
      en: "Create a group.",
    },
  },
  {
    id: "chown",
    cat: "groups",
    title: "chown",
    desc: {
      fr: "Changer le propriétaire.",
      es: "Cambiar propietario.",
      en: "Change owner.",
    },
    code: "chown user:group file",
  },
  {
    id: "chgrp",
    cat: "groups",
    title: "chgrp",
    desc: {
      fr: "Changer le groupe.",
      es: "Cambiar grupo.",
      en: "Change group.",
    },
  },

  // --- SERVER ---
  {
    id: "hostnamectl",
    cat: "server",
    title: "hostnamectl",
    desc: {
      fr: "Voir/changer le nom d'hôte.",
      es: "Ver/cambiar nombre de host.",
      en: "View/change hostname.",
    },
  },
  {
    id: "systemctl",
    cat: "server",
    title: "systemctl",
    desc: {
      fr: "Gérer les services.",
      es: "Gestionar servicios.",
      en: "Manage services.",
    },
    options: [
      { cmd: "start", fr: "Démarrer.", es: "Iniciar.", en: "Start." },
      { cmd: "status", fr: "État.", es: "Estado.", en: "Status." },
    ],
  },
  {
    id: "firewall",
    cat: "server",
    title: "firewall-cmd",
    desc: { fr: "Pare-feu.", es: "Cortafuegos.", en: "Firewall." },
    options: [
      {
        cmd: "--reload",
        fr: "Recharger config.",
        es: "Recargar config.",
        en: "Reload config.",
      },
    ],
  },
  {
    id: "ping",
    cat: "server",
    title: "ping",
    desc: {
      fr: "Vérifier connectivité.",
      es: "Verificar conectividad.",
      en: "Check connectivity.",
    },
  },
  {
    id: "netstat",
    cat: "server",
    title: "netstat",
    desc: {
      fr: "Statistiques réseau.",
      es: "Estadísticas de red.",
      en: "Network stats.",
    },
    options: [
      {
        cmd: "-tlnp",
        fr: "TCP/Ports/PID.",
        es: "TCP/Puertos/PID.",
        en: "TCP/Ports/PID.",
      },
    ],
  },
];

/* --- LÓGICA DE LA APLICACIÓN --- */

// Función principal que renderiza todo
function renderApp() {
  const lang = document.getElementById("langSelect").value;

  // 1. Traducir UI (Menús y Títulos)
  translateUI(lang);

  // 2. Generar Tarjetas de Comandos
  renderCategory("install", lang);
  renderCategory("files", lang);
  renderCategory("users", lang);
  renderCategory("groups", lang);
  renderCategory("server", lang);

  // 3. Re-aplicar filtro de búsqueda si hay texto
  filterContent();
}

function translateUI(lang) {
  const t = uiTranslations[lang];

  // Placeholder buscador
  document.getElementById("searchInput").placeholder = t.search_placeholder;

  // Intro text
  document.getElementById("title_pres").textContent = t.titles[0];
  document.getElementById("desc_pres").textContent = t.intro;

  // Títulos Secciones
  document.getElementById("title_install").textContent = t.titles[1];
  document.getElementById("title_files").textContent = t.titles[2];
  document.getElementById("title_users").textContent = t.titles[3];
  document.getElementById("title_groups").textContent = t.titles[4];
  document.getElementById("title_server").textContent = t.titles[5];

  // Menú Navegación
  document.getElementById("nav_pres").textContent = t.nav[0];
  document.getElementById("nav_install").textContent = t.nav[1];
  document.getElementById("nav_files").textContent = t.nav[2];
  document.getElementById("nav_users").textContent = t.nav[3];
  document.getElementById("nav_groups").textContent = t.nav[4];
  document.getElementById("nav_server").textContent = t.nav[5];
}

function renderCategory(category, lang) {
  const container = document.getElementById(`container-${category}`);
  container.innerHTML = ""; // Limpiar contenido actual

  // Filtrar comandos de esta categoría
  const items = commandsData.filter((item) => item.cat === category);

  items.forEach((item) => {
    // Crear tarjeta HTML
    const card = document.createElement("article");
    card.className = "card searchable";

    // Título
    let html = `<h3>${item.title}</h3>`;

    // Descripción (en el idioma seleccionado)
    html += `<p>${item.desc[lang]}</p>`;

    // Código (si existe)
    if (item.code) {
      html += `<code>$ ${item.code}</code>`;
    }

    // Opciones (si existen)
    if (item.options && item.options.length > 0) {
      html += `<details>
                        <summary>${uiTranslations[lang].btn_options}</summary>
                        <ul>`;
      item.options.forEach((opt) => {
        html += `<li><code>${opt.cmd}</code> : ${opt[lang]}</li>`;
      });
      html += `   </ul>
                     </details>`;
    }

    card.innerHTML = html;
    container.appendChild(card);
  });
}

// Función de Búsqueda
function filterContent() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const cards = document.getElementsByClassName("searchable");

  for (let i = 0; i < cards.length; i++) {
    const textContent = cards[i].innerText || cards[i].textContent;
    if (textContent.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Iniciar app al cargar
document.addEventListener("DOMContentLoaded", renderApp);
