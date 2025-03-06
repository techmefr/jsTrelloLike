# jsTrelloLike

Une application de gestion de tâches inspirée de Trello, construite en JavaScript vanilla, HTML et CSS. Ce projet implémente un système Kanban simple permettant d'organiser et de suivre des tâches au sein de tableaux et de listes.

![Aperçu du projet](https://via.placeholder.com/800x400?text=Aperçu+jsTrelloLike)

## 🎯 Fonctionnalités

- **Création de tableaux** pour organiser différents projets ou workflows
- **Ajout de listes** dans chaque tableau
- **Interface intuitive** avec une navigation simple
- **Design responsive** adapté à différentes tailles d'écran
- **Animations CSS** pour une expérience utilisateur améliorée

## 🚀 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Mise en page et animations fluides
- **JavaScript** (vanilla) - Logique d'application et interactions
- **Stockage local** - Persistance des données entre les sessions (en développement)

## 🔍 Structure du projet

```
jsTrelloLike/
├── index.html     # Structure principale de l'application
├── style.css      # Styles et animations CSS
└── script.js      # Logique JavaScript pour l'interactivité
```

## 💻 Implémentation technique

L'application utilise une architecture simple basée sur la manipulation du DOM et suit un pattern de conception modulaire :

### Gestion des tableaux
```javascript
// Création dynamique d'un nouveau tableau avec son système d'ajout de listes
function createBoard(name) {
    const newBoard = document.createElement("div");
    newBoard.classList.add("board");
    // ...
}
```

### Gestion des listes
```javascript
// Création de listes au sein d'un tableau
function createList(name, parent) {
    const newList = document.createElement("div");
    newList.classList.add("list");
    // ...
}
```

## 🔮 Évolutions prévues

Ce projet est en développement actif. Voici les fonctionnalités prévues pour les prochaines itérations :

- **Glisser-déposer (drag & drop)** pour déplacer les tâches entre les listes
- **Création et édition des tâches** avec descriptions, dates d'échéance, etc.
- **Persistance des données** via le localStorage ou une API backend
- **Système de filtres et de recherche** pour retrouver facilement les tâches
- **Thèmes visuels personnalisables** pour une meilleure expérience utilisateur
- **Mode responsive avancé** pour une utilisation optimale sur mobile

## 🛠️ Comment l'utiliser

1. Cloner le dépôt
```bash
git clone https://github.com/techmefr/jsTrelloLike.git
cd jsTrelloLike
```

2. Ouvrir l'application dans un navigateur
```bash
# Simplement ouvrir le fichier index.html dans votre navigateur préféré
# Ou utiliser un serveur local comme Live Server pour VS Code
```

3. Utilisation de l'application
   - Entrez un nom de tableau et cliquez sur "Ajouter"
   - Dans le tableau créé, vous pouvez ajouter des listes

## 📚 Ce que j'ai appris

Ce projet m'a permis de renforcer mes compétences dans plusieurs domaines :

- **Manipulation avancée du DOM** pour une création dynamique d'éléments
- **Gestion des événements** pour créer une interface interactive
- **Architecture modulaire** pour un code maintenable et évolutif
- **Conception d'animations CSS** pour une expérience utilisateur fluide

## 🤝 Contributions

Les suggestions et contributions sont les bienvenues ! N'hésitez pas à fork le projet et à soumettre vos pull requests.

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

✨ **Développé par [TechmeFR](https://github.com/techmefr)**
