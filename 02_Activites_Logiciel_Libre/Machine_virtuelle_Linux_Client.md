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
*Note : Pour cette partie, j'utilise un système de fichiers **ext4** et un partitionnement standard.*

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
