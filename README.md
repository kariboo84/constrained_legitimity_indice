# Constrained Legitimacy Indice (ILC)

Méta-manifeste et prototype de calculateur pour un **Indice de Légitimité Contrainte**.

> L'ILC ne sert pas à dire « cette loi est bonne parce que son score est élevé ».
> Il sert à révéler quand une décision politique contredit les valeurs qu'elle prétend défendre.

## En une phrase

Un ILC est un outil anti-langue-de-bois : il force chaque score à exposer son biais moral, ses sources, ses définitions et ses zones d'incalculabilité.

## Ce que contient le projet

- **Méta-manifeste** : cadre politique, éthique et anti-capture.
- **Spécification mathématique** : variables, familles d'indices et seuils.
- **Calculateur web** : prototype vanilla JS publié sur GitHub Pages.
- **Charte d'honnêteté** : règles minimales pour les forks et réutilisations.

## Liens

- Calculateur en ligne : https://kariboo84.github.io/constrained_legitimacy_indice/calculator/
- Manifeste : https://kariboo84.github.io/constrained_legitimacy_indice/Meta_Manifeste_ILC_v0
- Repo GitHub : https://github.com/kariboo84/constrained_legitimacy_indice

## Source de vérité actuelle

La spécification conceptuelle principale est :

```text
Meta_Manifeste_ILC_v0.md
```

Le calculateur suit progressivement cette version, notamment :

1. **Couche 0 vitaliste (ILC-VI)** : mortalité, mutilation, humiliation systémique.
2. **Familles d'indices** : égalitarisme, liberté de marché, utilitarisme.
3. **Détecteur de Langue de Bois (DLB)** : cohérence sémantique, variables, opacité.
4. **Data Layer** : obligation de traçabilité des sources.

## Structure du repo

```text
├── calculator/                     # Calculateur web (GitHub Pages)
│   ├── index.html                  # Interface principale
│   ├── css/style.css               # Styles
│   ├── js/ilc-calculator.js        # Moteur de calcul
│   ├── js/ilc-calculator.test.js   # Tests Node.js
│   └── examples/                   # Exemples JSON
├── .github/workflows/deploy.yml    # Déploiement GitHub Pages + vérifications JS
├── CHARTER.md                      # Charte d'honnêteté
├── LICENSE                         # AGPL-3.0 (code)
├── LICENSE-DOCS                    # CC-BY-SA-4.0 (textes)
├── Meta_Manifeste_ILC_v0.md        # Manifeste principal
├── ilc_paper.md                    # Spécification mathématique v0.1
└── README.md
```

## Développement local

Aucune dépendance applicative n'est nécessaire.

```bash
cd calculator
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

Vérifier le JavaScript :

```bash
node --check calculator/js/ilc-calculator.js
node calculator/js/ilc-calculator.test.js
```

## Statut

Prototype alpha.

Le manifeste v1 est plus avancé que le calculateur. Le chantier principal est l'alignement progressif du calculateur avec :

- ILC-VI complet ;
- Dictionnaire de Termes Critiques ;
- Data Layer traçable par variable ;
- export version experte / version citoyenne ;
- tests de cohérence plus complets.

## Contribuer

Les forks, contradictions et réfutations sont encouragés.

Pour contribuer :

1. ouvrir une issue ;
2. proposer un cas d'usage documenté ;
3. fournir les sources et la méthodologie ;
4. expliciter le biais moral utilisé ;
5. ne jamais supprimer le Détecteur de Langue de Bois.

## Licences

- **Code du calculateur** : AGPL-3.0 (`LICENSE`)
- **Documents / manifeste** : CC-BY-SA-4.0 (`LICENSE-DOCS`)
- **Intégrité éthique** : `CHARTER.md`
