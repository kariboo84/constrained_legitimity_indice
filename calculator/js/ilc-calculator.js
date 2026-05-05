/**
 * ILC Calculator v0.1.0
 * Calculateur d'Indice de Légitimité Contrainte
 * Vanilla JS — aucune dépendance
 */

const ILCCalculator = {
  // Familles d'indices disponibles
  families: {
    'ilc-eg': {
      name: 'ILC-ÉG (Égalitarisme)',
      formula: (Rc, Sp, Rr, Ci) => (Rc * Sp * Rr) / Ci,
      thresholds: { reject: 0.10, major: 0.30, minor: 0.60, accept: 1.00 },
      labels: {
        reject: 'REJET — Déplacement de responsabilité structurelle',
        major: 'RÉVISION MAJEURE — La contrainte dépasse la responsabilité',
        minor: 'RÉVISION MINEURE — Acceptable mais perfectible',
        accept: 'RECEVABLE — Contrainte proportionnée'
      }
    },
    'ilc-lb': {
      name: 'ILC-LB (Liberté de marché)',
      formula: (Ci, De) => 1 / (Ci * De),
      thresholds: { reject: 0.20, major: 0.50, minor: 1.00, accept: 5.00 },
      labels: {
        reject: 'REJET — Ingérence étatique excessive',
        major: 'RÉVISION MAJEURE — Contrainte trop lourde',
        minor: 'RÉVISION MINEURE — Acceptable',
        accept: 'RECEVABLE — Liberté préservée'
      }
    },
    'ilc-ut': {
      name: 'ILC-UT (Utilitarisme)',
      formula: (B, C, Cmax) => (B - C) / Cmax,
      thresholds: { reject: 0, major: 1, minor: 5, accept: 10 },
      labels: {
        reject: 'REJET — Bilan net négatif',
        major: 'RÉVISION MAJEURE — Faible gain collectif',
        minor: 'RÉVISION MINEURE — Gain positif',
        accept: 'RECEVABLE — Efficacité maximisée'
      }
    }
  },

  // Exemples pré-remplis
  examples: {
    'telephone-volant': {
      name: 'Téléphone au volant — Suspension 6 mois',
      family: 'ilc-eg',
      Rc: 0.075,
      Rc_explain: 'Conducteur = niveau 1 (0.12 des morts routiers). Constructeurs + urbanisme = niveaux 2-3 (0.80 des causes). 0.12 / (0.80×2) = 0.075',
      Sp: 0.218,
      Sp_explain: '(1800/7000) × (0.0000085/0.00001) = 0.257 × 0.85 = 0.218',
      Rr: 0.0,
      Rr_explain: 'Député : 0% de son revenu (chauffeur, pas de permis nécessaire). Smicard : 28% si suspension = perte emploi. 0/0.28 = 0',
      Ci: 0.28,
      Ci_explain: '(0 + 2400 + 1800) / 15000 = 0.28 (28% du revenu annuel)',
      Vc: 0.75,
      l: 1,
      manifestBias: 'egalitarian',
      notes: 'Loi conforme à la Constitution 1958 (verrouillée). Réciprocité nulle.'
    },
    'taxe-coca': {
      name: 'Taxe sur la production plastique (Coca-Cola)',
      family: 'ilc-eg',
      Rc: 14.2,
      Rc_explain: 'Industrie = 71% du problème plastique. État protecteur = ~5%. 0.71 / 0.05 = 14.2',
      Sp: 0.0000022,
      Sp_explain: 'Participation réelle 0.00085% / attendue 0.01% = 0.085. (1800/7000) × 0.085 = 0.000022',
      Rr: 0.5,
      Rr_explain: 'Députés actionnaires se désistent partiellement. Coût réel député médian / coût citoyen médian = 0.5',
      Ci: 0.05,
      Ci_explain: 'Prix plafonnés, léger surcoût possible. ~5% du revenu annuel.',
      Vc: 0.75,
      l: 1,
      manifestBias: 'egalitarian',
      notes: 'Loi parfaite sur le fond mais processus verrouillé (Sp proche de 0)'
    },
    'radiation-rsa': {
      name: 'Radiation RSA — Contrôles France Travail',
      family: 'ilc-eg',
      Rc: 0.03,
      Rc_explain: 'Allocataire = niveau 1 (utilise l'aide). État créateur de précarité = niveau 3. 0.03 / (0.90×2) = 0.017 → arrondi 0.03',
      Sp: 0.000001,
      Sp_explain: 'Aucune consultation des concernés. Processus totalement top-down.',
      Rr: 0.0,
      Rr_explain: 'Députés et hauts fonctionnaires jamais au RSA. Exemption totale.',
      Ci: 0.45,
      Ci_explain: 'Perte de revenu vital (600€/mois) + démarches + risque de perte de logement. ~45% du revenu disponible.',
      Vc: 0.75,
      l: 1,
      manifestBias: 'egalitarian',
      notes: '97% des radiés ne fraudent pas (DARES 2025). 28% basculent au RSA après radiation.'
    }
  },

  // Détection de langue de bois
  detectBS(manifestBias, Rc, Sp, Rr, Ci) {
    let contradictions = 0;
    let total = 4;
    let messages = [];

    if (manifestBias === 'egalitarian') {
      if (Rr === 0) {
        contradictions++;
        messages.push('Vous prônez l'égalité mais Rr = 0 (exemption totale des décideurs).');
      }
      if (Sp < 0.001) {
        contradictions++;
        messages.push('Vous prônez l'égalité mais Sp < 0.001 (participation nulle).');
      }
      if (Rc < 0.1 && Ci > 0.2) {
        contradictions++;
        messages.push('Vous prônez l'égalité mais vous punissez le faible pour un problème causé par le fort.');
      }
      if (Ci > 0.3) {
        contradictions++;
        messages.push('Contrainte individuelle > 30% du revenu — incompatible avec l'égalité des conditions.');
      }
    }

    const Id = contradictions / total;
    return { Id, contradictions, total, messages, valid: Id <= 0.30 };
  },

  // Calcul du filtre constitutionnel
  calcFc(l, Vc) {
    return (l * (1 - Vc)) + ((1 - l) * Vc);
  },

  // Calcul principal
  calculate(familyKey, inputs) {
    const family = this.families[familyKey];
    if (!family) throw new Error('Famille inconnue');

    let ilcBrut = 0;

    if (familyKey === 'ilc-eg') {
      const { Rc, Sp, Rr, Ci } = inputs;
      ilcBrut = family.formula(Rc, Sp, Rr, Ci);
    } else if (familyKey === 'ilc-lb') {
      const { Ci, De } = inputs;
      ilcBrut = family.formula(Ci, De);
    } else if (familyKey === 'ilc-ut') {
      const { B, C, Cmax } = inputs;
      ilcBrut = family.formula(B, C, Cmax);
    }

    // Filtre constitutionnel
    const Fc = this.calcFc(inputs.l, inputs.Vc);
    const ilcFinal = ilcBrut * Fc;

    // Détecteur de langue de bois
    const bs = this.detectBS(inputs.manifestBias, inputs.Rc || 0, inputs.Sp || 0, inputs.Rr || 0, inputs.Ci || 0);

    // Seuil
    let verdict = 'reject';
    if (ilcFinal >= family.thresholds.accept) verdict = 'accept';
    else if (ilcFinal >= family.thresholds.minor) verdict = 'minor';
    else if (ilcFinal >= family.thresholds.major) verdict = 'major';

    return {
      ilcBrut: parseFloat(ilcBrut.toFixed(6)),
      Fc: parseFloat(Fc.toFixed(4)),
      ilcFinal: parseFloat(ilcFinal.toFixed(6)),
      verdict,
      verdictLabel: family.labels[verdict],
      bs,
      family: family.name
    };
  }
};

// Export pour modules (si utilisé en Node) ou global (navigateur)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ILCCalculator;
}
