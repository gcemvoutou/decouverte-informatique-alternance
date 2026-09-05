# Contexte — Portfolio de [MON NOM]

## Identité

- **Nom** : [MON NOM]
- **Formation** : BTS SIO option SISR — 2ème année (2026-2027)
- **École** : CFP Charmilles, Saint-Martin-d'Hères
- **Alternance** : Mairie de Saint-Égrève
- **Diplôme précédent** : Baccalauréat ST2S
- **Photo de profil** : `assets/photo.jpg`

---

## Phrase de présentation

Étudiante en BTS SIO SISR, je touche à tout en entreprise : support utilisateurs,
administration système, configuration réseau et cybersécurité. Ce que j'aime dans
le SISR, c'est exactement ça — ne jamais faire deux fois la même journée.
En alternance à la Mairie de Saint-Égrève, j'interviens aussi bien sur un ticket
helpdesk que sur la configuration d'un switch ou le suivi d'une alerte de sécurité.
Curieuse, rigoureuse et autonome, je vise une école d'ingénieurs après le BTS pour
me spécialiser en administration systèmes/réseaux ou en cybersécurité.

---

## Formation & Parcours

| Période | Diplôme / Formation | Établissement |
|---|---|---|
| 2025 – 2027 | BTS SIO option SISR (en cours) | CFP Charmilles, Saint-Martin-d'Hères |
| 2025 – 2027 | Apprentie technicienne systèmes & réseaux | Mairie de Saint-Égrève |
| Avant 2025 | Baccalauréat ST2S | [NOM LYCÉE] |

---

## Missions en alternance (Mairie de Saint-Égrève)

- Support helpdesk via Octopus ITSM (création de tickets, suivi, résolution)
- Création et gestion de comptes Active Directory
- Configuration de commutateurs (switches) et création de VLANs
- Administration systèmes Windows (dépannage, mises à jour, GPO)
- Suivi de la cyberassurance de la collectivité
- Veille sécurité, analyse d'alertes externes, remontée d'incidents
- Détection de comptes ou adresses e-mail compromis

---

## Compétences techniques

### Systèmes & Infrastructure
- Windows Server 2022 — Active Directory, DNS, DHCP, GPO — niveau : Intermédiaire
- Linux (Debian / Ubuntu) — administration en ligne de commande — niveau : Intermédiaire
- Virtualisation — VirtualBox, VMware Workstation Pro — niveau : Intermédiaire

### Réseaux
- Configuration de switches, création de VLANs — niveau : Intermédiaire
- Routage et adressage IP — niveau : Intermédiaire
- Firewall OPNsense (installation, règles, interfaces) — niveau : Débutant/Intermédiaire

### Sécurité
- Veille sécurité, analyse d'alertes, gestion d'incidents — niveau : Débutant
- Suivi cyberassurance — niveau : Débutant

### Scripting & Développement
- PowerShell (automatisation AD, scripts système) — niveau : Débutant/Intermédiaire
- Bash (administration Linux) — niveau : Débutant
- Python (manipulation de données, scripts) — niveau : Débutant/Intermédiaire
- HTML / CSS / JavaScript (portfolio statique) — niveau : Débutant

### Outils
- Octopus ITSM (helpdesk)
- GitHub / Git
- Docker, Docker Compose
- BookStack (wiki)

---

## Langues

- Français — Langue maternelle
- Anglais — B2
- Allemand — Notions (A2)

---

## Projets

### Projet 1 — Active Directory Lab
- **Catégorie** : système
- **Description** : Déploiement complet d'un domaine Windows Server 2022 en lab virtuel.
  - Déployer un contrôleur de domaine Active Directory (AD DS) et son service DNS
  - Structurer un annuaire avec des unités d'organisation (OU) et des groupes de sécurité selon le modèle AGDLP
  - Créer et administrer des comptes utilisateurs (manuellement et via PowerShell)
  - Joindre un poste client Windows 10 au domaine
  - Déployer des stratégies de groupe (GPO) : fond d'écran, restrictions, lecteur réseau
  - Configurer des profils itinérants et des répertoires personnels (lecteurs réseau)
- **Technologies** : Windows Server 2022, Active Directory, PowerShell, VMware Workstation Pro, DNS, DHCP, GPO
- **Lien GitHub** : [LIEN GITHUB AD]

---

### Projet 2 — BookStack sur Raspberry Pi
- **Catégorie** : infrastructure
- **Description** : Déploiement d'un wiki auto-hébergé sur Raspberry Pi 4 avec Docker Compose.
  Stack : BookStack + MariaDB + Nginx Proxy Manager + Let's Encrypt SSL.
  Accessible via bookstack-clara.duckdns.org. Troubleshooting MariaDB, .env,
  port forwarding Bouygues. Migration depuis un Pi école vers un Pi personnel via SCP.
- **Technologies** : Docker, Docker Compose, Nginx Proxy Manager, MariaDB, Let's Encrypt, DuckDNS, Raspberry Pi
- **Lien GitHub** : [LIEN GITHUB BOOKSTACK]

---

### Projet 3 — Firewall OPNsense
- **Catégorie** : réseau
- **Description** : Installation d'OPNsense sur un WatchGuard Firebox T30 (matériel réel).
  Troubleshooting console série (PuTTY, câble null-modem, baud rate), récupération via
  clé USB bootable (diskpart). Pivot vers installation sur VirtualBox suite aux
  contraintes matérielles.
- **Technologies** : OPNsense, VirtualBox, Console série, PuTTY, diskpart
- **Lien GitHub** : [LIEN GITHUB OPNSENSE ou #]

---

### Projet 6 — Supervision réseau avec CheckMK
- **Catégorie** : réseau
- **Description** : CheckMK Raw Edition (CRE) est une solution de supervision réseau open source. Dans le cadre de mon alternance à la Mairie de Saint-Égrève, j'ai été chargée de centraliser et piloter la supervision d'une infrastructure hétérogène répartie sur de nombreux sites distants (Hôtel de Ville, écoles, gymnases, services techniques) afin de :
  - Garantir la continuité du service public
  - Anticiper les pannes matérielles ou réseau
  - Fiabiliser l'inventaire des équipements supervisés
  À ce jour, 204 hôtes sont enregistrés dans la solution, un chiffre amené à évoluer au fil des mises en production et des retraits de matériel.
- **Technologies** : CheckMK, CRE, Linux, Supervision, Réseau
- **Lien GitHub** : https://github.com/gcemvoutou/Checkmk-supervision-mairie

---

### Projet 7 — Projets Cisco Packet Tracer
- **Catégorie** : réseau
- **Description** : Ensemble de travaux pratiques réalisés en autonomie sous Cisco Packet Tracer dans le cadre de ma formation BTS SIO SISR. Les projets abordent des thématiques variées : configuration réseau, routage, services DHCP/DNS, interconnexion multi-sites, et bien d'autres à venir au fil de la formation.
- **Technologies** : Cisco Packet Tracer, Réseau, Routage, DHCP, DNS
- **Lien GitHub** : https://github.com/gcemvoutou/projets-cisco-packet-tracer

---

### Projet 4 — Portfolio Web (ce site)
- **Catégorie** : dev
- **Description** : Portfolio professionnel statique construit avec un agent IA (Gemini CLI).
  HTML sémantique, CSS Flexbox, JavaScript vanilla. Projets chargés dynamiquement
  depuis un fichier JSON, filtres par catégorie, menu mobile, animations CSS.
  Déployé sur Netlify.
- **Technologies** : HTML, CSS, JavaScript, JSON, Gemini CLI, Netlify
- **Lien** : [URL NETLIFY]

---

### Projet 5 — Pi-hole (à venir)
- **Catégorie** : réseau
- **Description** : Installation d'un serveur DNS avec filtrage publicitaire sur Raspberry Pi.
  Mode DNS uniquement (sans prise en charge du DHCP). Projet planifié.
- **Technologies** : Pi-hole, Raspberry Pi, DNS
- **Lien GitHub** : —

---

## Instructions pour l'agent IA

- Utilise `[MON NOM]` partout où mon nom doit apparaître (je le remplacerai moi-même).
- La photo de profil est dans `assets/photo.jpg`.
- Le CV téléchargeable est dans `assets/cv.pdf`.
- Pour les projets sans lien GitHub, utilise `#` comme valeur du champ `lien`.
- Le projet Pi-hole est prévu mais pas encore réalisé : affiche-le avec un badge "À venir".
- Respecte les catégories exactes : `système`, `infrastructure`, `réseau`, `dev`.
  Elles servent aux boutons de filtre JavaScript.
