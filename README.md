# constrained_legitimacy_indice
meta-manifeste pour un indice de légitimité constrainte.


# Méta-Manifeste des Indices de Légitimité Contrainte (ILC)
## Version 0.0.0 — Draft Fondateur

```
Statut        : Brouillon ouvert à contribution
Licence       : CC0 1.0 Universal + Clause d'Honnêteté
Gouvernance   : Aucune institution détenue — fork encouragé
Dernière mise à jour : 2026-05-05
```

---

## Abstract

Ce document définit le cadre épistémique et éthique dans lequel tout **Indice de Légitimité Contrainte (ILC)** doit être construit, évalué et déployé. Il ne prétend pas à la neutralité. Il affirme que la neutralité est un leurre politique. Son objectif est de fournir un **protocole de calcul explicite** des rapports de force entre décideurs et concernés par une décision politique, en rendant chaque biais visible, vérifiable et contestable.

**Mots-clés** : légitimité démocratique, proportionnalité, réciprocité, détection de langue de bois, éthique des algorithmes politiques, gouvernance ouverte.

---

## 1. Principe cardinal : L'explicitation du biais

> **Postulat 0** : *Aucun indice de légitimité n'est neutre. Prétendre le contraire est une opération de pouvoir.*

Tout outil qui chiffre la justice d'une décision politique porte en lui une conception du bien, du juste et du mesurable. L'erreur fondamentale des indicateurs existants (IPC, IDH, Gini) est de masquer cette conception sous une couche de technicité. Le citoyen voit un chiffre sans voir la morale qui l'a produit.

**Règle d'or du méta-manifeste** :
Avant tout calcul, tout promoteur d'un ILC doit publier un **Manifeste de Valeurs** répondant aux cinq questions non négociables suivantes :

1. **Quel est le bien premier ?** (Égalité des conditions ? Liberté négative ? Efficacité collective ? Souveraineté locale ?)
2. **Qui est l'agent moral de base ?** (L'individu vulnérable ? Le propriétaire ? L'écosystème ? La nation ?)
3. **Comment la souffrance est-elle mesurée ?** (Perte de revenu ? Perte d'autonomie ? Mort prématurée ? Effondrement psychique ?)
4. **Quel est le régime temporel ?** (Le présent prime-t-il ? Le futur a-t-il les mêmes droits ? Le passé est-il condamnable rétroactivement ?)
5. **Quel est le seuil d'irréversibilité ?** (Peut-on sacrifier une minorité pour la majorité ? Si oui, à quelle proportion ?)

**Conséquence** : Un indice sans Manifeste publié et daté n'est pas un ILC. C'est un instrument de propagande chiffrée.

---

## 2. Architecture des familles d'indices

Le méta-manifeste n'impose pas une seule formule. Il définit trois familles canoniques, chacune portant son biais en bandoulière. D'autres familles peuvent être proposées par fork, à condition de respecter la règle d'or.

### 2.1 ILC-ÉG — Égalitarisme
**Biais assumé** : Toute concentration de pouvoir non réciproque est structurellement suspecte. La légitimité naît de la symétrie des contraintes.

**Formule canonique** :
```
ILC-ÉG = (Rc × Sp × Rr) / Ci
```
- **Rc** : Responsabilité Causale (matrice 3 niveaux : direct / structurel / bénéficiaire)
- **Sp** : Symétrie du Pouvoir (ratio revenus × participation normalisée par échelle)
- **Rr** : Réciprocité (coût réel subi par le décideur / coût réel subi par le concerné)
- **Ci** : Contrainte Individuelle (coût total / revenu disponible, intégrant risque de perte d'emploi)

**Seuils de recevabilité** :
- < 0,10 : Rejet (déplacement de responsabilité structurelle)
- 0,10 — 0,30 : Révision majeure
- 0,30 — 0,60 : Révision mineure
- ≥ 0,60 : Recevable

### 2.2 ILC-LB — Liberté de marché
**Biais assumé** : La liberté individuelle est le bien suprême. L'État n'est légitime que comme gardien des contrats et des droits de propriété.

**Formule canonique** :
```
ILC-LB = 1 / (Ci × De)
```
- **Ci** : Contrainte fiscale et réglementaire sur l'individu
- **De** : Degré d'ingérence étatique (1 = intervention totale, 0 = aucune)

*Note* : Rc n'existe pas dans ce cadre. On ne punit pas la causalité sociale, on punit la violation de contrat.

### 2.3 ILC-UT — Utilitarisme collectif
**Biais assumé** : Seul le bilan net compte. Une décision est bonne si elle maximise le bien-être agrégé, peu importe la distribution.

**Formule canonique** :
```
ILC-UT = (Bcollectif − Ccollectif) / Cmax_individuel
```
- **B** : Bénéfices chiffrés (DALY, PIB, QALY)
- **C** : Coûts chiffrés
- **Cmax_individuel** : Coût supporté par l'individu le plus lésé (frein moral)

### 2.4 Création d'une nouvelle famille (Fork)
Toute communauté peut proposer un ILC-XX. Conditions :
1. Publier un Manifeste de Valeurs répondant aux 5 questions.
2. Définir les variables avec des sources mesurables.
3. Soumettre le tout à un test de déviation (voir §3).
4. Accepter que le nom de la famille soit réutilisable par d'autres, sous réserve de cohérence avec le Manifeste initial.

---

## 3. Protocole de validation : Le Détecteur de Langue de Bois (DLB)

### 3.1 Définition
Le DLB est un test de cohérence interne. Il ne juge pas la morale du Manifeste. Il vérifie si les variables calculées respectent la morale affichée.

### 3.2 Formule
```
Id = (Nombre de contradictions Manifeste/Variables) / (Nombre total de variables)
```

### 3.3 Exemples de contradictions détectables

| Situation | Contradiction détectée |
|---|---|
| Promoteur ILC-ÉG avec Rr = 0 | "Tu prônes l'égalité mais tu t'exemptes totalement." |
| Promoteur ILC-LB créant un monopole d'État | "Tu prônes la liberté mais tu interdis la concurrence." |
| Promoteur ILC-UT refusant de chiffrer les suicides | "Tu prônes l'efficacité mais tu caches les coûts humains." |
| Sp artificiellement gonflé par un référendum sans les concernés | "Tu prétends consulter mais tu exclus ceux qui subissent." |

### 3.4 Règle de sortie
- Si **Id > 0,30** : Le score technique est invalidé. Affichage obligatoire : **"SCORE INVALIDE — Langue de bois détectée"**.
- Si **Id ≤ 0,30** : Le score est publié avec mention des résidus de contradiction.

---

## 4. Gouvernance et versionnage

### 4.1 Le problème de la stabilité
Un indice qui change tous les mois ne sert à rien. Un indice figé pour l'éternité devient un outil d'oppression.

### 4.2 Règle des trois strates

| Strate | Durée de vie minimale | Contenu |
|---|---|---|
| **Noyau** | 20 ans | Les 5 questions du Manifeste + la structure mathématique |
| **Paramètres** | 5 ans | Seuils de pauvreté, revenus médians de référence, échelles de participation |
| **Données** | 1 an | Chiffres bruts de l'année en cours |

### 4.3 Règle de comparaison inter-temporelle
On ne compare jamais directement une loi de 2026 (ILC v1.0) avec une loi de 2046 (ILC v2.0). Toute loi historique doit être recalculée avec la version active de l'indice pour maintenir la comparabilité.

---

## 5. La Zone d'Incalculabilité (ZI)

### 5.1 Principe
Certaines réalités ne sont pas quantifiables de manière honnête. Plutôt que de les travestir en chiffres, nous les déclarons **hors champ du calcul** et leur assignons un effet de seuil.

### 5.2 Phénomènes de la ZI

| Phénomène | Pourquoi hors champ | Effet de seuil |
|---|---|---|
| Souffrance psychique | Subjective, non convertible en € sans travestissement | Si une loi est prouvée comme génératrice de souffrance psychique massive (suicides, dépressions documentées), son ILC est plafonné à 0,10, indépendamment du calcul. |
| Corruption d'intention | On ne lit pas dans les têtes | On mesure l'opacité. Débats secrets, lobbies non déclarés, rapports caviardés → Sp divisé par 10. |
| Langue de bois | Non quantifiable directement | Géré par Id (Détecteur de Langue de Bois). |
| Dignité bafouée | Irréductible à un coût | Si une loi institue une humiliation systémique (contrôles déshumanisants, stigmatisation publique), Ci est majoré artificiellement d'un coefficient 2. |

### 5.3 Règle d'or de la ZI
> *Ce qu'on ne peut pas mesurer honnêtement, on l'interdit comme argument de légitimité.*

On ne dit pas : "Cette loi est bonne car elle réduit la tristesse."
On dit : "Cette loi n'a pas fait augmenter le taux de suicide documenté" — ou on se tait.

---

## 6. Le Filtre Constitutionnel révisé (Fc)

### 6.1 Problème identifié
Faire de la Constitution un absolu ("conforme = bon, anticonstitutionnel = mauvais") revient à sanctifier un texte écrit par des gens du passé, souvent dans l'intention de verrouiller l'impuissance décisionnaire du peuple.

### 6.2 Solution : Le Verrouillage Constitutionnel (Vc)
On calcule d'abord le degré de verrouillage de la Constitution elle-même.

| Critère | Constitution verrouillée | Constitution ouverte |
|---|---|---|
| Rédaction | Nommée par un exécutif | Assemblée constituante tirée au sort ou élue pour ça |
| Révision | Seuls les élus proposent, seuil très haut (3/5, 2/3) | Initiative populaire, référendum facilité |
| Articles intangibles | Certains non révisables | Tout révisable par le peuple |
| Délai entre révisions | Long (5-10 ans) | Aucun |

**Estimation indicative** :
- Constitution française de 1958 : Vc ≈ 0,75
- Constitution de 1848 (IIe République) : Vc ≈ 0,40
- Constitution Rojava (communes, 2014) : Vc ≈ 0,10

### 6.3 Formule du Filtre
```
Fc = l × (1 − Vc) + (1 − l) × Vc
```
Où l = 1 si la loi est conforme, l = 0 si anticonstitutionnelle.

**Interprétation** :
- Si la Constitution est verrouillée (Vc élevé) et la loi la contourne (l=0), le filtre **augmente** la légitimité. Contourner le verrou devient un acte démocratique.
- Si la Constitution est ouverte (Vc faible) et la loi la viole (l=0), le filtre **pénalise** sévèrement. On casse les règles d'un bon système.

---

## 7. Feuille de route (Roadmap)

### v0.1.0 — Alpha (prévu)
- [ ] Publication des 3 familles canoniques avec Manifestes complets
- [ ] Calculatrice open-source (Python/JS) avec formulaire web
- [ ] Test sur 10 lois françaises récentes (téléphone au volant, ZFE, réforme RSA, etc.)
- [ ] Création du dépôt GitHub public avec licence CC0

### v0.2.0 — Bêta (prévu)
- [ ] Intégration des sources automatisées (API INSEE, Santé Publique France)
- [ ] Module de détection de langue de bois automatisé (vérification cohérence)
- [ ] Traduction multilingue (EN, ES, DE, AR)
- [ ] Premiers forks communautaires validés

### v1.0.0 — Stable (prévu)
- [ ] Congrès fondateur (assemblée citoyenne ouverte) pour valider le noyau
- [ ] Publication du noyau figé pour 20 ans
- [ ] Intégration dans au moins un média indépendant et un syndicat

---

## 8. Comment contribuer

### 8.1 Fork
Ce méta-manifeste est un point de départ, pas une vérité. Si vous pensez que le bien premier est la souveraineté nationale, le bien-être animal ou la stabilité macro-économique : **forkez**. Créez ILC-SV, ILC-AN, ILC-ST. Respectez la règle d'or (5 questions) et publiez.

### 8.2 Issue
Signalez les incohérences mathématiques, les sources biaisées, les failles de manipulation. Un indice qui peut être truqué sans être détecté est une arme, pas un outil.

### 8.3 Test
Appliquez les ILC à des lois locales, nationales, historiques. Publiez les résultats avec les sources brutes. La transparence est le seul rempart contre la capture idéologique.

---

## 9. Licence

**CC0 1.0 Universal** — Ce document est placé dans le domaine public.

**Clause d'Honnêteté obligatoire** : Toute réutilisation, fork ou adaptation doit :
1. Citer la version du méta-manifeste utilisée.
2. Publier intégralement le Manifeste de Valeurs.
3. Ne jamais supprimer le Détecteur de Langue de Bois.

Le non-respect de ces trois points constitue une déviation détectable et invalide automatiquement tout score produit.

---

## 10. Auteurs & Signataires fondateurs

Ce document est le fruit d'une conversation entre un citoyen et un assistant d'intelligence artificielle. Il n'a pas été validé par une institution. Il ne demande pas de validation institutionnelle.

> *"Les actes. Les politiciens nous doivent des actes. Nous, le seul pouvoir d'agir qu'on nous laisse, c'est trier nos plastiques et laisser des commentaires tout pourris sur les réseaux sociaux. Voici autre chose."*

**Version 0.0.0** — Brouillon ouvert.

## Licences

- **Code** (calculateurs, scripts, API) : [GNU AGPL-3.0](LICENSE)
- **Textes** (manifestes, documentation, méthodologies) : [CC-BY-SA-4.0](LICENSE-DOCS)
- **Intégrité éthique** : [CHARTER.md](CHARTER.md) — non juridique mais socialement contraignante

---

*Pour toute remarque, contradiction ou proposition de fork : ouvrez une issue. La seule chose que nous refusons est l'opacité.*
