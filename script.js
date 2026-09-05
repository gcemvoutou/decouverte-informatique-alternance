// script.js - Portfolio Dynamique Clara 

// Fallback de données pour s'assurer que le site fonctionne parfaitement même en local (sans serveur HTTP local)
const PROJECTS_FALLBACK = [];

let projectsData = [];

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation de la navbar au scroll
  initNavbarScroll();
  
  // Initialisation du menu mobile
  initMobileMenu();
  
  // Initialisation des FAQ accordions
  initFaqAccordion();
  
  // Chargement des projets
  loadProjects();

  // Initialisation de l'arbre des compétences
  renderSkillsTree();

  // Mise à jour dynamique de l'année du copyright
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
});

// 1. Gestion de la barre de navigation
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// 2. Menu mobile Hamburger
function initMobileMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Ferme le menu mobile quand on clique sur un lien
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// 3. Accordéon FAQ interactif
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Si un autre élément est déjà ouvert, on peut optionnellement le fermer
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // On toggle l'élément cliqué
      item.classList.toggle('active');
    });
  });
}

// 4. Chargement et rendu des projets
async function loadProjects() {
  try {
    // Tenter de charger le JSON
    const response = await fetch('projects.json');
    if (!response.ok) {
      throw new Error("Impossible de charger projects.json");
    }
    projectsData = await response.json();
  } catch (error) {
    console.warn("Utilisation du fallback local pour les projets :", error);
    projectsData = PROJECTS_FALLBACK;
  }
  
  // Afficher les projets initiaux (Tous)
  renderProjects(projectsData);
  
  // Initialiser les filtres de catégorie
  initFilters();
}

function renderProjects(projectsToRender) {
  const grid = document.querySelector('.projects-grid');
  grid.innerHTML = '';
  
  if (projectsToRender.length === 0) {
    grid.innerHTML = `<div class="no-projects">Aucun projet trouvé dans cette catégorie.</div>`;
    return;
  }
  
  // Regrouper les projets par contexte (entreprise, scolaire, perso)
  const categories = {
    'entreprise': {
      title: 'Projets en Entreprise',
      icon: 'fa-building-shield',
      projects: []
    },
    'scolaire': {
      title: 'Projets Scolaires',
      icon: 'fa-graduation-cap',
      projects: []
    },
    'perso': {
      title: 'Projets Personnels',
      icon: 'fa-laptop-code',
      projects: []
    }
  };
  
  projectsToRender.forEach(project => {
    const ctx = project.contexte;
    if (categories[ctx]) {
      categories[ctx].projects.push(project);
    } else {
      categories['perso'].projects.push(project);
    }
  });
  
  // Rendu de chaque catégorie
  Object.keys(categories).forEach(key => {
    const group = categories[key];
    if (group.projects.length === 0) return;
    
    // Créer la section du groupe
    const groupSection = document.createElement('div');
    groupSection.classList.add('projects-group');
    
    // Titre de la rubrique
    const groupHeader = document.createElement('h3');
    groupHeader.classList.add('projects-group-title');
    groupHeader.innerHTML = `<i class="fa-solid ${group.icon}"></i> ${group.title}`;
    groupSection.appendChild(groupHeader);
    
    // Grille spécifique à cette rubrique
    const groupGrid = document.createElement('div');
    groupGrid.classList.add('projects-group-grid');
    
    group.projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');
      card.setAttribute('data-id', project.id);
      
      const techSpanList = project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join(' • ');
      
      let categoryIcon = 'fa-server';
      if (project.categorie === 'infrastructure') categoryIcon = 'fa-network-wired';
      if (project.categorie === 'réseau') categoryIcon = 'fa-shield-halved';
      if (project.categorie === 'dev') categoryIcon = 'fa-code';
      
      let cardThumbnailContent = `<i class="fa-solid ${categoryIcon}"></i>`;
      let cardTitleContent = `<div class="card-title-fallback">${project.titre}</div>`;
      if (project.image) {
        cardThumbnailContent = `<img src="${project.image}" alt="${project.titre}" onclick="window.open('${project.image}', '_blank')" title="Cliquez pour agrandir l'image (pleine résolution)">`;
        cardTitleContent = '';
      }
      
      const catSlug = (project.categorie || '')
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

      card.innerHTML = `
        <div class="card-thumbnail">
          <div class="card-tech-overlay">
            ${cardThumbnailContent}
          </div>
          ${cardTitleContent}
        </div>
        <div class="card-info">
          <div class="card-actions">
            <button class="action-btn play-btn" onclick="openProjectModal(${project.id})" title="Plus d'informations">
              <i class="fa-solid fa-play"></i>
            </button>
            ${(project.lien !== '#' && project.statut !== 'a_venir') ? `
              <a href="${project.lien}" target="_blank" class="action-btn link-btn" title="Voir le code">
                <i class="fa-brands fa-github"></i>
              </a>
            ` : ''}
          </div>
          <h4 class="project-title">${project.titre}</h4>
          <div class="project-meta">
            ${project.statut === 'a_venir' ? `<span class="status-badge" style="background-color: rgba(128, 128, 128, 0.15); color: #aaaaaa; border: 1px solid rgba(128, 128, 128, 0.3);">À venir</span>` : ''}
            <span class="project-category category-${catSlug}">${project.categorie.toUpperCase()}</span>
          </div>
          <p class="project-excerpt">${project.description}</p>
          <div class="project-techs">${techSpanList}</div>
        </div>
      `;
      
      groupGrid.appendChild(card);
    });
    
    groupSection.appendChild(groupGrid);
    grid.appendChild(groupSection);
  });
}

// 5. Système de filtrage
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Activer visuellement le bouton cliqué
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      // Filtrer les données
      if (filterValue === 'all') {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(proj => proj.categorie === filterValue);
        renderProjects(filtered);
      }
    });
  });
}

// 6. Gestion de la Modale de Détails (More Info)
const modal = document.getElementById('projectModal');

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  
  // Remplissage des données du modal
  document.getElementById('modalTitle').innerText = project.titre;
  const modalCatSlug = (project.categorie || '')
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  const modalCategoryElem = document.getElementById('modalCategory');
  modalCategoryElem.className = `modal-category category-${modalCatSlug}`;
  modalCategoryElem.innerText = project.categorie.toUpperCase();
  
  // Description formatée (conversion des puces markdown en HTML, et \n en <br>)
  let formattedHtml = '';
  const lines = project.description_detaillee.split('\n');
  let inList = false;
  
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        formattedHtml += '<ul class="modal-desc-list">';
        inList = true;
      }
      // Retirer le tiret et l'espace
      let itemContent = trimmed.substring(2);
      formattedHtml += `<li>${itemContent}</li>`;
    } else {
      if (inList) {
        formattedHtml += '</ul>';
        inList = false;
      }
      formattedHtml += line + '<br>';
    }
  });
  if (inList) {
    formattedHtml += '</ul>';
  }
  
  // Remplacer les successions de multiples <br> inutiles après la fermeture de liste
  formattedHtml = formattedHtml.replace(/<\/ul><br>/g, '</ul>');
  
  document.getElementById('modalDescription').innerHTML = formattedHtml;
  
  // Remplissage de la liste des technologies
  const techContainer = document.getElementById('modalTechnologies');
  techContainer.innerHTML = '';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.classList.add('tech-pill');
    span.innerText = tech;
    techContainer.appendChild(span);
  });
  
  // Remplissage du bouton de lien GitHub
  const githubBtnContainer = document.getElementById('modalGithubBtnContainer');
  if (project.lien !== '#') {
    githubBtnContainer.innerHTML = `
      <a href="${project.lien}" target="_blank" class="btn-primary">
        <i class="fa-brands fa-github"></i> Explorer sur GitHub
      </a>
    `;
  } else {
    githubBtnContainer.innerHTML = `
      <button class="btn-disabled" disabled>
        <i class="fa-solid fa-lock"></i> Code privé / Non disponible
      </button>
    `;
  }
  
  // Déterminer l'icône ou l'image d'arrière-plan de la bannière du modal
  let modalBannerContent = '';
  if (project.image) {
    modalBannerContent = `<img src="${project.image}" alt="${project.titre}" onclick="window.open('${project.image}', '_blank')" title="Cliquez pour agrandir l'image (pleine résolution)">`;
  } else {
    let categoryIcon = 'fa-server';
    if (project.categorie === 'infrastructure') categoryIcon = 'fa-network-wired';
    if (project.categorie === 'réseau') categoryIcon = 'fa-shield-halved';
    if (project.categorie === 'dev') categoryIcon = 'fa-code';
    modalBannerContent = `<div class="modal-banner-icon"><i class="fa-solid ${categoryIcon}"></i></div>`;
  }
  
  const modalBanner = document.querySelector('.modal-banner');
  modalBanner.innerHTML = `
    ${modalBannerContent}
    <div class="modal-banner-overlay"></div>
  `;
  
  // Affichage du modal avec animation
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Empêcher le scroll en arrière-plan
}

function closeProjectModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Réactiver le scroll
}

// Fermer le modal en cliquant à l'extérieur
window.onclick = function(event) {
  if (event.target == modal) {
    closeProjectModal();
  }
}

// ==================================================
// FORMULAIRE DE CONTACT (EmailJS)
// ==================================================

// Clé publique EmailJS - sans risque à exposer côté client (faite pour ça)
emailjs.init('DcFh8IKc1fnIFAjHn');

const EMAILJS_SERVICE_ID = 'service_w3vyoef';
const EMAILJS_TEMPLATE_ID = 'template_3wdf9mm';

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();
 
    const submitBtn = document.getElementById('submitBtn');
    const statusBox = document.getElementById('formStatus');

    // État "envoi en cours"
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
    statusBox.style.display = 'none';
    statusBox.className = 'form-status';

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);

      statusBox.classList.add('success');
      statusBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> Votre message a bien été envoyé, je vous répondrai rapidement !';
      contactForm.reset();
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      statusBox.classList.add('error');
      statusBox.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Une erreur est survenue. Merci de réessayer ou de m\'écrire directement à emvoutouclara@gmail.com';
    } finally {
      statusBox.style.display = 'flex';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer le message';
    }
  });
}

// ==================================================
// ARBRE DES COMPÉTENCES DÉROULANT (ACCORDÉON)
// ==================================================

const SKILLS_DATA = [
  {
    category: "Systèmes & Infrastructure",
    icon: "fa-server",
    subthemes: [
      {
        name: "Windows Server 2022",
        icon: "fa-brands fa-windows",
        tags: ["Active Directory", "PowerShell", "DNS", "DHCP", "GPO", "UOs"]
      },
      {
        name: "Linux (Debian / Ubuntu)",
        icon: "fa-brands fa-linux",
        tags: ["Administration CLI", "SSH", "Services", "Bash", "Configuration système"]
      },
      {
        name: "Virtualisation",
        icon: "fa-solid fa-cubes",
        tags: ["VirtualBox", "VMware Workstation Pro"]
      },
      {
        name: "Support utilisateurs / ITSM",
        icon: "fa-solid fa-headset",
        tags: ["Octopus ITSM", "Création & suivi tickets", "Résolution incidents"]
      }
    ]
  },
  {
    category: "Réseaux & Cybersécurité",
    icon: "fa-shield-halved",
    subthemes: [
      {
        name: "Routage & Commutation",
        icon: "fa-solid fa-network-wired",
        tags: ["VLAN", "Adressage IP", "Switches", "Routage"]
      },
      {
        name: "Supervision réseau",
        icon: "fa-solid fa-eye",
        tags: ["CheckMK", "SNMP", "Monitoring", "Analyse d'alertes"]
      },
      {
        name: "Firewall OPNsense",
        icon: "fa-solid fa-shield-halved",
        tags: ["Filtrage", "NAT", "Interfaces", "Configuration réseau"]
      },
      {
        name: "Sécurité active",
        icon: "fa-solid fa-lock",
        tags: ["Analyse alertes", "Détection comptes compromis", "Cyberassurance"]
      }
    ]
  }
];

function renderSkillsTree() {
  const container = document.getElementById('skills-tree');
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map((cat, catIdx) => {
    const catId = `cat-${catIdx}`;
    return `
      <div class="tree-category-wrapper">
        <button class="tree-category-btn" aria-expanded="false" aria-controls="${catId}-content" id="${catId}-btn">
          <span class="tree-title-wrapper">
            <i class="fa-solid ${cat.icon} tree-icon"></i>
            <span class="tree-category-name">${cat.category}</span>
          </span>
          <i class="fa-solid fa-chevron-right tree-chevron"></i>
        </button>
        <div id="${catId}-content" class="tree-category-content" role="region" aria-labelledby="${catId}-btn">
          <div class="tree-category-inner-wrapper">
            <div class="tree-category-inner">
              ${cat.subthemes.map((sub, subIdx) => {
                const subId = `sub-${catIdx}-${subIdx}`;
                return `
                  <div class="tree-subtheme-wrapper">
                    <button class="tree-subtheme-btn" aria-expanded="false" aria-controls="${subId}-content" id="${subId}-btn">
                      <span class="tree-title-wrapper">
                        <i class="${sub.icon} tree-icon-sub"></i>
                        <span class="tree-subtheme-name">${sub.name}</span>
                      </span>
                      <i class="fa-solid fa-chevron-right tree-chevron-sub"></i>
                    </button>
                    <div id="${subId}-content" class="tree-subtheme-content" role="region" aria-labelledby="${subId}-btn">
                      <div class="tree-subtheme-inner-wrapper">
                        <div class="tree-subtheme-inner">
                          <div class="skill-tags">
                            ${sub.tags.map((tag, tagIdx) => `
                              <span class="staggered-tag" style="--stagger-delay: ${tagIdx * 50}ms">${tag}</span>
                            `).join('')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners for category expand
  const categoryBtns = container.querySelectorAll('.tree-category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // Attach event listeners for subtheme expand
  const subthemeBtns = container.querySelectorAll('.tree-subtheme-btn');
  subthemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    });
  });
}
