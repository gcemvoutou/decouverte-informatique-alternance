# Activité : Machine virtuelle Linux (OS Client)

## 📂 1. Notions Théoriques
Avant l'installation, il est important de comprendre l'écosystème Linux en entreprise.

### Les distributions majeures
- **Ubuntu / Debian :** Très populaires pour leur stabilité et leur immense communauté.
- **Red Hat (RHEL) / CentOS :** Très utilisés pour les serveurs critiques en entreprise.

### Distinctions entre les versions Desktop et Server
- **Ubuntu Desktop :** Cette version intègre un environnement de bureau (interface graphique). Elle est conçue pour l'utilisateur final qui a besoin d'outils visuels et d'une navigation à la souris.
- **Ubuntu Server :** Contrairement à la version Desktop, elle est dépourvue d'interface graphique et s'utilise exclusivement en ligne de commande. Cette approche permet d'optimiser les ressources système (RAM et CPU) en supprimant la charge liée à l'affichage visuel.

### Qu'apporte les versions labellisées LTS ?
 En entreprise, ce label est crucial car il garantit un support technique et des mises à jour de sécurité critiques sur une période de 5 ans. C'est le choix de la stabilité et de la pérennité pour un parc informatique.

---

## 🛠️ 2. Installation et Configuration
## Configuration du stockage : Système de fichiers et Partitionnement

Avant de lancer l'installation, il est essentiel de configurer la manière dont Ubuntu va occuper l'espace sur le disque dur virtuel.

### Introduction aux concepts
- **Le système de fichiers :** C'est la structure logique qui permet à l'OS d'organiser, de stocker et de retrouver les fichiers sur le disque. Sans lui, le disque ne serait qu'une suite de données illisibles.
- **Le partitionnement :** Cela consiste à diviser le disque dur physique (ou virtuel) en plusieurs parties isolées, appelées "partitions". Cela permet de séparer, par exemple, le système d'exploitation des données personnelles ou de créer une zone de secours.

---

### Quel système de fichiers privilégier ?
Pour une installation Ubuntu moderne, le système de fichiers à privilégier est l'**ext4** (*fourth extended filesystem*).

**Pourquoi ce choix ?**
- **La Journalisation :** C'est sa fonctionnalité principale. Le système écrit chaque modification dans un "journal" avant de l'appliquer. En cas de coupure de courant, Linux lit ce journal pour réparer les erreurs éventuelles, ce qui évite la perte de données.
- **Performance et Stabilité :** C'est le standard sous Linux. Il gère très bien les gros volumes de données et limite la fragmentation des fichiers (contrairement au NTFS sous Windows).

### Quel partitionnement des disques ?
Pour cette machine virtuelle, j'ai opté pour un **partitionnement assisté sur l'intégralité du disque**.

Ce choix permet au programme d'installation de créer automatiquement les zones nécessaires :
1. **La Racine (`/`) :** La partition principale où sont installés l'OS et les logiciels.
2. **Le Swap (Espace d'échange) :** Une partition spéciale qui sert de "prolongement" à la mémoire RAM. Si la mémoire vive est saturée, le système utilise cet espace disque pour éviter que l'ordinateur ne se fige.

> **Note :** Dans un environnement de production plus complexe, on aurait pu créer une partition `/home` séparée pour isoler les données utilisateurs du système, mais pour ce TP de découverte, le partitionnement standard est le plus efficace.

> **[IMAGE ICI : Capture de l'écran d'installation d'Ubuntu]**

---

## 💻 3. Administration en Ligne de Commande
L'objectif est de ne plus utiliser la souris et de tout gérer via le **Terminal**.

### Mise à jour du système
Pour mettre à jour la liste des logiciels disponibles (les dépôts) et installer les nouveautés :
1. Mise à jour de la liste : `sudo apt update`
2. Installation des mises à jour : `sudo apt upgrade`

> **[IMAGE ICI : Capture du terminal après avoir tapé ces commandes]**

### C'est quoi un "Dépôt" ?
Un dépôt est comme un **"App Store" géant** mais pour Linux. C'est un serveur sur internet qui contient des milliers de logiciels vérifiés. Sur Ubuntu, ils sont configurés dans le fichier `/etc/apt/sources.list`.

---

## 🔒 4. Accès à distance (SSH)
Le SSH permet de prendre le contrôle d'une machine Linux à distance de manière sécurisée.

### Installation du serveur SSH
Commande utilisée : 
`sudo apt install openssh-server`

### Vérification
Une fois installé, je vérifie que le service fonctionne pour autoriser les connexions entrantes.

> **[IMAGE ICI : Capture du terminal montrant l'installation réussie de SSH]**
