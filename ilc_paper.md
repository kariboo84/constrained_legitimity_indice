# Méta-Manifeste des Indices de Légitimité Contrainte (ILC)
## Version 0.1.0 — Spécification Mathématique

---

## 1. Définitions fondamentales

### 1.1 Espace des décisions

Soit $\mathcal{D}$ l'ensemble des décisions politiques soumises à évaluation. Une décision $d \in \mathcal{D}$ est un tuple :

$$d = (P, A, C, M, T)$$

où :
- $P$ : problème public déclaré
- $A$ : acteurs concernés (cibles de la contrainte)
- $C$ : acteurs décisionnaires (élus, administration, lobbies)
- $M$ : mesure de contrainte imposée
- $T$ : horizon temporel de la décision

### 1.2 Espace des indices

Soit $\mathcal{I}$ l'ensemble des familles d'indices ILC. Chaque famille $i \in \mathcal{I}$ est définie par :

$$i = (\mathcal{V}, \mathcal{F}, \Theta, \Lambda)$$

où :
- $\mathcal{V}$ : manifeste de valeurs (5 axiomes)
- $\mathcal{F}$ : formule de calcul
- $\Theta$ : seuils de recevabilité
- $\Lambda$ : étiquette des verdicts

---

## 2. Famille ILC-ÉG (Égalitarisme)

### 2.1 Formule principale

$$\text{ILC}_{\text{EG}} = \frac{R_c \cdot S_p \cdot R_r}{C_i} \cdot F_c$$

### 2.2 Variable $R_c$ — Responsabilité Causale

$$R_c = \frac{\alpha_1}{\sum_{k=2}^{3} \beta_k \cdot \gamma_k}$$

où :
- $\alpha_1$ : part du problème causée par le groupe ciblé (niveau 1 : acteur direct)
- $\beta_k$ : part causée par les acteurs de niveau $k \in \{2, 3\}$ (structurel, bénéficiaire)
- $\gamma_k$ : coefficient de majoration si présent aux 3 niveaux

$$\gamma_k = \begin{cases} 2 & \text{si acteur présent aux niveaux 1, 2 et 3} \\ 1 & \text{sinon} \end{cases}$$

### 2.3 Variable $S_p$ — Symétrie du Pouvoir

$$S_p = \left( \frac{R_{\text{concernes}}}{R_{\text{decideurs}}} \right) \cdot \left( \frac{P_{\text{reelle}}}{P_{\text{attendue}}(\epsilon)} \right)$$

où $\epsilon$ est l'échelle de la décision :

$$P_{\text{attendue}}(\epsilon) = \begin{cases} 0.05 & \text{si } \epsilon = \text{locale} \\ 0.005 & \text{si } \epsilon = \text{departementale} \\ 0.0001 & \text{si } \epsilon = \text{nationale} \\ 0.00001 & \text{si } \epsilon = \text{europeenne} \end{cases}$$

### 2.4 Variable $R_r$ — Réciprocité

$$R_r = \frac{C_{\text{reel}}(\text{decideur median})}{C_{\text{reel}}(\text{concerne median})}$$

où $C_{\text{reel}}$ est le coût total pondéré :

$$C_{\text{reel}} = c_{\text{monetaire}} + (h_{\text{perdues}} \cdot s_h) + (r_{\text{penal}} \cdot p_{\text{controle}}) + (p_{\text{emploi}} \cdot c_{\text{perte}})$$

### 2.5 Variable $C_i$ — Contrainte Individuelle

$$C_i = \frac{C_{\text{reel}}}{R_{\text{disponible}}}$$

### 2.6 Filtre Constitutionnel $F_c$

$$F_c = l \cdot (1 - V_c) + (1 - l) \cdot V_c$$

où :
- $l \in \{0, 1\}$ : conformité constitutionnelle
- $V_c \in [0, 1]$ : degré de verrouillage de la Constitution

---

## 3. Famille ILC-LB (Liberté de marché)

### 3.1 Formule principale

$$\text{ILC}_{\text{LB}} = \frac{1}{C_i \cdot D_e}$$

### 3.2 Variable $D_e$ — Degré d'ingérence étatique

$$D_e = \sum_{j=1}^{n} w_j \cdot \delta_j$$

où $\delta_j$ mesure l'ingérence sur le domaine $j$ et $w_j$ son poids relatif.

---

## 4. Famille ILC-UT (Utilitarisme)

### 4.1 Formule principale

$$\text{ILC}_{\text{UT}} = \frac{B_{\text{collectif}} - C_{\text{collectif}}}{C_{\text{max individuel}}}$$

### 4.2 Contrainte de frein moral

$$\text{Si } \frac{C_{\text{max individuel}}}{R_{\text{median}}} > 0.5 \text{ alors } \text{ILC}_{\text{UT}} = 0$$

---

## 5. Détecteur de Langue de Bois (DLB)

### 5.1 Indice de déviation

$$I_d = \frac{\sum_{k=1}^{m} \mathbb{1}_{[\text{contradiction}_k]}}{m}$$

où $\mathbb{1}$ est la fonction indicatrice et $m$ le nombre total de règles de cohérence.

### 5.2 Règles de cohérence pour ILC-ÉG

$$\text{Si } \mathcal{V} = \text{egalitarisme} \text{ alors } \begin{cases} R_r = 0 & \Rightarrow \text{contradiction} \\ S_p < 10^{-3} & \Rightarrow \text{contradiction} \\ R_c < 0.1 \land C_i > 0.2 & \Rightarrow \text{contradiction} \\ C_i > 0.3 & \Rightarrow \text{contradiction} \end{cases}$$

### 5.3 Verdict

$$\text{Validite} = \begin{cases} \text{INVALIDE} & \text{si } I_d > 0.30 \\ \text{VALIDE} & \text{si } I_d \leq 0.30 \end{cases}$$

---

## 6. Zone d'Incalculabilité (ZI)

### 6.1 Définition formelle

Soit $\mathcal{Z} \subset \mathcal{D}$ l'ensemble des décisions contenant au moins un phénomène de la ZI. Pour $d \in \mathcal{Z}$ :

$$\text{ILC}(d) \leq 0.10 \quad \text{(plafonnement automatique)}$$

### 6.2 Phénomènes de la ZI

| Phénomène | Condition de détection | Effet |
|---|---|---|
| Souffrance psychique | $\Delta_{\text{suicides}} > 2\sigma$ | Plafonnement |
| Dignité bafouée | $h_{\text{humiliation}} > 0$ | $C_i \leftarrow 2 \cdot C_i$ |
| Corruption d'intention | $\Omega_{\text{opacite}} > 0.7$ | $S_p \leftarrow S_p / 10$ |

où $\Omega_{\text{opacite}}$ mesure la proportion de décisions non publiques.

---

## 7. Versionnage

### 7.1 Strates temporelles

$$\mathcal{V}(t) = \mathcal{N} \cup \mathcal{P}(t) \cup \mathcal{D}(t)$$

où :
- $\mathcal{N}$ : noyau (20 ans) — axiomes et structure
- $\mathcal{P}(t)$ : paramètres (5 ans) — seuils de référence
- $\mathcal{D}(t)$ : données (1 an) — chiffres bruts

### 7.2 Règle de comparabilité

$$\forall d, \forall t_1, t_2 : \quad \text{ILC}_{\mathcal{V}(t_1)}(d) \not\sim \text{ILC}_{\mathcal{V}(t_2)}(d) \text{ si } \mathcal{V}(t_1) \neq \mathcal{V}(t_2)$$

Recalcul obligatoire avec la version active pour maintenir la comparabilité.

---

## 8. Protocole de sources

### 8.1 Ensemble des sources valides

$$\mathcal{S}_{\text{valide}} = \{\text{INSEE}, \text{SPF}, \text{Cour des comptes}, \text{DARES}, \text{OCDE}, \text{IPCC}, \text{rapports d'audit independants}\}$$

### 8.2 Règle de contradiction

$$\text{Si } \exists s_1, s_2 \in \mathcal{S}_{\text{valide}} : s_1(d) \neq s_2(d) \text{ alors } \text{publier } \{\text{ILC}_{s_1}(d), \text{ILC}_{s_2}(d)\}$$

---

## 9. Axiomes du Manifeste de Valeurs

### Axiome 1 : Bien premier ($\mathcal{B}$)

$$\mathcal{B} \in \{\text{Egalite}, \text{Liberte}, \text{Efficacite}, \text{Souverainete}\}$$

### Axiome 2 : Agent moral ($\mathcal{A}$)

$$\mathcal{A} \in \{\text{Individu vulnerable}, \text{Proprietaire}, \text{Ecosysteme}, \text{Nation}\}$$

### Axiome 3 : Mesure de souffrance ($\mathcal{S}$)

$$\mathcal{S} : \mathbb{R}^n \rightarrow \mathbb{R}^+ \text{ (fonction de mesure)}$$

### Axiome 4 : Régime temporel ($\mathcal{T}$)

$$\mathcal{T} = (\delta_{\text{present}}, \delta_{\text{futur}}, \delta_{\text{passe}}) \in \mathbb{R}^3_+$$

### Axiome 5 : Seuil d'irréversibilité ($\mathcal{I}$)

$$\mathcal{I} = [ (p, q) \in \mathbb{N}^2 \mid p + q = 100, \text{ sacrifice de } p\% \text{ acceptable pour sauver } q\% ]$$

---

## 10. Formule récapitulative

$$\boxed{\text{ILC}_{\text{final}} = \mathcal{F}(\mathcal{V}, d) \cdot F_c \cdot \mathbb{1}_{[I_d \leq 0.30]}}$$

où :
- $\mathcal{F}(\mathcal{V}, d)$ : formule de la famille choisie
- $F_c$ : filtre constitutionnel
- $\mathbb{1}_{[I_d \leq 0.30]}$ : indicateur de validité du DLB

---

*Version 0.1.0 — Draft mathématique ouvert à contribution.*
