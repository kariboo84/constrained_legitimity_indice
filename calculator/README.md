# 🧮 ILC Calculator

Calculateur web d'Indice de Légitimité Contrainte (ILC).

## Utilisation

Ouvrez simplement `index.html` dans votre navigateur. Aucun serveur requis, aucune dépendance externe.

```bash
# Option 1 : double-clic sur index.html
# Option 2 : serveur local simple
python -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Fonctionnalités

- **Couche 0 vitaliste (ILC-VI)** : arrêt immédiat si mortalité, mutilation ou humiliation systémique est déclenchée
- **3 familles d'indices** : ILC-ÉG (égalitarisme), ILC-LB (liberté de marché), ILC-UT (utilitarisme)
- **3 exemples pré-remplis** : téléphone au volant, taxe Coca-Cola, radiation RSA
- **Détecteur de Langue de Bois v1 simplifié** : Id_sem, Id_var et Id_op
- **Data Layer** : indicateur de complétude des sources
- **Filtre Constitutionnel** : prend en compte le verrouillage de la Constitution
- **Calcul en temps réel** : résultat immédiat avec verdict coloré

## Structure

```
calculator/
├── index.html              # Interface principale
├── css/
│   └── style.css           # Styles (thème sombre)
├── js/
│   ├── ilc-calculator.js       # Moteur de calcul
│   └── ilc-calculator.test.js  # Tests Node.js
└── examples/
    ├── telephone-volant.json
    ├── taxe-coca.json
    └── radiation-rsa.json
```

## Développement

Le calculateur est en **vanilla JS** — aucun framework. Pour modifier :

1. Les formules : éditez `js/ilc-calculator.js` (objet `ILCCalculator`)
2. Les tests : éditez `js/ilc-calculator.test.js`
3. Les styles : éditez `css/style.css`
4. Les exemples : ajoutez des entrées dans `ILCCalculator.examples`

Vérifications :

```bash
node --check calculator/js/ilc-calculator.js
node calculator/js/ilc-calculator.test.js
```

## Licence

- Code : AGPL-3.0
- Documentation : CC-BY-SA-4.0


## Déploiement automatique (GitHub Pages)

Le calculateur se déploie automatiquement sur GitHub Pages à chaque push sur `main`.

### Activation

1. Va sur ton repo → `Settings` → `Pages`
2. Source : `GitHub Actions`
3. Le workflow `.github/workflows/deploy.yml` s'occupe du reste

### URL de production

```
https://kariboo84.github.io/constrained_legitimacy_indice/
```
