# Doctrine du score conditionnel

Statut : proposition conceptuelle pour PR
Objet : clarifier que l'ILC est d'abord un protocole d'audit, et que le score n'est qu'une sortie conditionnelle.

---

## 1. Principe

L'Indice de Légitimité Contrainte ne doit pas être réduit à un score global.

Un score peut être utile lorsqu'une variable est simple, observable, sourcée et faiblement ambiguë. Mais sur une loi complexe, multidimensionnelle ou touchant des fonctions vitales, le score global peut produire une fausse précision.

> **Postulat du score conditionnel** : *L'ILC n'a pas pour vocation de tout réduire à un nombre. Il a pour vocation de dire quand un nombre est légitime, et quand il ne l'est pas.*

Conséquence :

```text
Un score sans protocole est suspect.
Un protocole sans score peut être parfaitement valide.
```

Le score n'est donc pas l'objectif premier de l'ILC. Il est une sortie possible, autorisée seulement si les conditions de calcul sont remplies.

---

## 2. Deux objets distincts

### 2.1 ILC-protocole

L'ILC-protocole est le workflow complet d'analyse :

- clarification de l'objet évalué ;
- identification des groupes contraints, bénéficiaires et exposés ;
- vérification sémantique ;
- Data Layer claim-by-claim ;
- précédence vitaliste et biophysique ;
- analyse de responsabilité, pouvoir, réciprocité, compensation ;
- déclaration des incertitudes ;
- choix ou refus d'une sortie chiffrée.

Il peut conclure sans score.

Exemples de verdicts valides :

```text
Score non publiable : données insuffisantes sur les coûts différenciés.
Objectif physiquement nécessaire, modalités socialement illégitimes.
Risque B4 : score ordinaire suspendu.
Contrainte plausible mais causalité non démontrée.
```

### 2.2 ILC-score

L'ILC-score est un résultat numérique local ou composite.

Il n'est légitime que si :

- les variables sont définies ;
- les sources sont traçables ;
- les pondérations sont explicites ;
- les seuils d'arrêt ne sont pas déclenchés ;
- les zones non calculables sont déclarées ;
- le résultat reste contestable et reproductible.

---

## 3. Typologie des sorties ILC

### 3.1 `diagnostic`

Sortie qualitative ou structurée sans score.

À utiliser quand l'objet est complexe, incertain, multidimensionnel ou politiquement chargé.

Exemples :

- cartographie des acteurs ;
- liste des contraintes ;
- flags d'asymétrie ;
- contradiction entre objectif affiché et effets probables ;
- Data Layer incomplet ;
- statut de publiabilité.

### 3.2 `simple_metric`

Score local sur une variable claire.

Exemples :

```text
contrainte_nette = coût_subi - compensation_reçue
ratio_asymétrie = contrainte_groupe_A / contrainte_groupe_B
réciprocité = exposition_décideurs / exposition_affectés
couverture_preuve = preuves_fournies / preuves_requises
```

Cette sortie est souvent la plus robuste : elle rend visible une disproportion sans prétendre résumer toute la légitimité.

### 3.3 `composite_score`

Score agrégé combinant plusieurs dimensions.

Il est autorisé seulement si les pondérations, seuils, sources et hypothèses sont publics.

Il doit toujours être accompagné de :

- ses dimensions constitutives ;
- ses pondérations ;
- ses sources ;
- ses incertitudes ;
- ses dimensions non calculées ;
- un statut de contestabilité.

### 3.4 `suspended_score`

Score temporairement interdit.

Causes typiques :

- Data Layer insuffisant ;
- ambiguïté sémantique ;
- variable critique non mesurée ;
- pondérations non déclarées ;
- risque B3-B5 mal traité ;
- confusion entre nécessité physique et imputation sociale.

### 3.5 `hard_block`

Score non pertinent parce qu'un verrou supérieur est déclenché.

Exemples :

- ILC-VI négatif : mortalité, mutilation, humiliation systémique ;
- B4/B5 non justifié : risque irréversible ou auto-destruction systémique ;
- violation manifeste d'une fonction vitale sans urgence supérieure bornée.

Dans ce cas, publier un score ordinaire serait trompeur : cela ferait croire qu'une atteinte non négociable peut être compensée par de bons résultats sur d'autres dimensions.

---

## 4. Règles de publiabilité du score

Un score ILC est publiable seulement si les conditions suivantes sont remplies :

| Condition | Question | Si échec |
|---|---|---|
| Objet stabilisé | Quelle version de la mesure est évaluée ? | `diagnostic` |
| Variables définies | Chaque terme critique a-t-il une définition opérationnelle ? | `suspended_score` |
| Sources traçables | Chaque chiffre pointe-t-il vers une source et une méthodologie ? | `suspended_score` |
| Pondérations explicites | Les arbitrages moraux sont-ils déclarés ? | `suspended_score` |
| Verrous respectés | ILC-VI et B0-B5 autorisent-ils un score ordinaire ? | `hard_block` ou `suspended_score` |
| Incertitudes déclarées | Les données manquantes sont-elles visibles ? | `diagnostic` |
| Reproductibilité | Un tiers peut-il recalculer ou contester ? | `suspended_score` |

---

## 5. Architecture recommandée pour une évaluation

Une évaluation ILC ne devrait pas publier :

```text
Loi X : ILC = 62/100
```

sans contexte.

Format recommandé :

```yaml
ilc_output:
  object: "texte, article ou mesure évaluée"
  status: diagnostic | simple_metric | composite_score | suspended_score | hard_block
  protocol_stage:
    semantic_check: pass | warning | fail
    data_layer: sketch | advanced_draft | defensible | publishable
    vitalist_layer: pass | hard_block
    biophysical_layer: pass | warning | hard_block | not_applicable
  scores:
    local_metrics: []
    composite: null
  non_calculable_dimensions: []
  uncertainty: low | medium | high
  verdict: "phrase courte et contestable"
```

---

## 6. Doctrine pratique

1. L'ILC commence toujours par clarifier, pas par calculer.
2. Un score simple est légitime si la variable est observable, sourcée et peu ambiguë.
3. Un score composite est fragile et doit être publié avec ses hypothèses.
4. Une loi complexe doit être évaluée par carte de légitimité, article par article, plutôt que par score global unique.
5. En cas de doute sérieux, le bon résultat est `score non publiable`, pas `score approximatif`.
6. Refuser de calculer peut être une sortie scientifique et démocratique plus honnête que produire un nombre trompeur.

---

## 7. Formule synthétique

```text
ILC = protocole d'audit de la contrainte publique
score = sortie conditionnelle du protocole
```

Ou, en version courte :

> **L'ILC ne garantit pas qu'un score existe. Il garantit que, si un score existe, ses conditions de légitimité sont visibles.**
