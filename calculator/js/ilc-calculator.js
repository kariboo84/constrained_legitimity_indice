/**
 * ILC Calculator v0.2.0
 * Calculateur d'Indice de Légitimité Contrainte
 * Vanilla JS — aucune dépendance
 */

const ILCCalculator = {
  families: {
    "ilc-eg": {
      name: "ILC-ÉG (Égalitarisme)",
      formula: (Rc, Sp, Rr, Ci) => {
        if (Ci === 0) return 0;
        return (Rc * Sp * Rr) / Ci;
      },
      thresholds: { reject: 0.10, major: 0.30, minor: 0.60, accept: 1.00 },
      labels: {
        reject: "REJET — Déplacement de responsabilité structurelle",
        major: "RÉVISION MAJEURE — La contrainte dépasse la responsabilité",
        minor: "RÉVISION MINEURE — Acceptable mais perfectible",
        accept: "RECEVABLE — Contrainte proportionnée"
      }
    },
    "ilc-lb": {
      name: "ILC-LB (Liberté de marché)",
      // Aligné sur le Méta-Manifeste v1 : ILC-LB = (1 - Ci) × (1 - De).
      formula: (Ci, De) => {
        const boundedCi = Math.min(Math.max(Ci, 0), 1);
        const boundedDe = Math.min(Math.max(De, 0), 1);
        return (1 - boundedCi) * (1 - boundedDe);
      },
      thresholds: { reject: 0.10, major: 0.30, minor: 0.60, accept: 1.00 },
      labels: {
        reject: "REJET — Ingérence étatique excessive",
        major: "RÉVISION MAJEURE — Contrainte trop lourde",
        minor: "RÉVISION MINEURE — Acceptable mais perfectible",
        accept: "RECEVABLE — Liberté préservée"
      }
    },
    "ilc-ut": {
      name: "ILC-UT (Utilitarisme)",
      formula: (B, C, Cmax) => {
        if (Cmax === 0) return 0;
        return (B - C) / Cmax;
      },
      thresholds: { reject: 0, major: 1, minor: 5, accept: 10 },
      labels: {
        reject: "REJET — Bilan net négatif",
        major: "RÉVISION MAJEURE — Faible gain collectif",
        minor: "RÉVISION MINEURE — Gain positif",
        accept: "RECEVABLE — Efficacité maximisée"
      }
    }
  },

  examples: {
    "telephone-volant": {
      name: "Téléphone au volant — Suspension 6 mois",
      family: "ilc-eg",
      Rc: 0.075,
      Rc_explain: "Conducteur = niveau 1 (0.12 des morts routiers). Constructeurs + urbanisme = niveaux 2-3 (0.80 des causes). 0.12 / (0.80×2) = 0.075",
      Sp: 0.218,
      Sp_explain: "(1800/7000) × (0.0000085/0.00001) = 0.257 × 0.85 = 0.218",
      Rr: 0.0,
      Rr_explain: "Député : 0% de son revenu (chauffeur, pas de permis nécessaire). Smicard : 28% si suspension = perte emploi. 0/0.28 = 0",
      Ci: 0.28,
      Ci_explain: "(0 + 2400 + 1800) / 15000 = 0.28 (28% du revenu annuel)",
      Vc: 0.75,
      l: 1,
      P1: false,
      P2: false,
      P3: false,
      manifestBias: "egalitarian",
      notes: "Loi conforme à la Constitution 1958 (verrouillée). Réciprocité nulle."
    },
    "taxe-coca": {
      name: "Taxe sur la production plastique (Coca-Cola)",
      family: "ilc-eg",
      Rc: 14.2,
      Rc_explain: "Industrie = 71% du problème plastique. État protecteur = ~5%. 0.71 / 0.05 = 14.2",
      Sp: 0.0000022,
      Sp_explain: "Participation réelle 0.00085% / attendue 0.01% = 0.085. (1800/7000) × 0.085 = 0.000022",
      Rr: 0.5,
      Rr_explain: "Députés actionnaires se désistent partiellement. Coût réel député médian / coût citoyen médian = 0.5",
      Ci: 0.05,
      Ci_explain: "Prix plafonnés, léger surcoût possible. ~5% du revenu annuel.",
      Vc: 0.75,
      l: 1,
      P1: false,
      P2: false,
      P3: false,
      manifestBias: "egalitarian",
      notes: "Loi parfaite sur le fond mais processus verrouillé (Sp proche de 0)"
    },
    "radiation-rsa": {
      name: "Radiation RSA — Contrôles France Travail",
      family: "ilc-eg",
      Rc: 0.03,
      Rc_explain: "Allocataire = niveau 1 (utilise l'aide). État créateur de précarité = niveau 3. 0.03 / (0.90×2) = 0.017 → arrondi 0.03",
      Sp: 0.000001,
      Sp_explain: "Aucune consultation des concernés. Processus totalement top-down.",
      Rr: 0.0,
      Rr_explain: "Députés et hauts fonctionnaires jamais au RSA. Exemption totale.",
      Ci: 0.45,
      Ci_explain: "Perte de revenu vital (600€/mois) + démarches + risque de perte de logement. ~45% du revenu disponible.",
      Vc: 0.75,
      l: 1,
      P1: false,
      P2: false,
      P3: true,
      manifestBias: "egalitarian",
      notes: "97% des radiés ne fraudent pas (DARES 2025). 28% basculent au RSA après radiation."
    }
  },

  checkVitalistLayer(inputs) {
    const pillars = [];
    if (Boolean(inputs.P1)) pillars.push("P1 — Mortalité");
    if (Boolean(inputs.P2)) pillars.push("P2 — Mutilation");
    if (Boolean(inputs.P3)) pillars.push("P3 — Humiliation systémique");

    return {
      valid: pillars.length === 0,
      score: pillars.length === 0 ? 1 : 0,
      pillars,
      label: pillars.length === 0
        ? "ILC-VI validé — passage au calcul idéologique"
        : `ILLÉGITIME VITALEMENT — ${pillars.join(", ")}`
    };
  },

  detectBS(manifestBias, Rc, Sp, Rr, Ci, dataLayerComplete = false, semanticDictionaryComplete = false) {
    let semanticContradictions = 0;
    let variableContradictions = 0;
    let opacityContradictions = 0;
    const messages = [];

    if (!semanticDictionaryComplete) {
      semanticContradictions++;
      messages.push("Dictionnaire de Termes Critiques absent ou incomplet : Id_sem augmenté.");
    }

    if (!dataLayerComplete) {
      opacityContradictions++;
      messages.push("Data Layer absent ou incomplet : au moins une variable n'est pas reliée à une source traçable.");
    }

    if (manifestBias === "egalitarian") {
      if (Rr === 0) {
        variableContradictions++;
        messages.push("Vous prônez l'égalité mais Rr = 0 (exemption totale des décideurs).");
      }
      if (Sp < 0.001) {
        variableContradictions++;
        messages.push("Vous prônez l'égalité mais Sp < 0.001 (participation nulle). ");
      }
      if (Rc < 0.1 && Ci > 0.2) {
        variableContradictions++;
        messages.push("Vous prônez l'égalité mais vous punissez le faible pour un problème causé par le fort.");
      }
      if (Ci > 0.3) {
        variableContradictions++;
        messages.push("Contrainte individuelle > 30% du revenu — incompatible avec l'égalité des conditions.");
      }
    } else if (manifestBias === "libertarian") {
      if (Ci > 0.2) {
        variableContradictions++;
        messages.push("Vous prônez la liberté mais la contrainte dépasse 20% du revenu.");
      }
    }

    const Id_sem = semanticContradictions > 0 ? 1 : 0;
    const Id_var = variableContradictions / 4;
    const Id_op = opacityContradictions > 0 ? 1 : 0;
    const Id = (Id_sem * 0.4) + (Id_var * 0.4) + (Id_op * 0.2);

    return {
      Id: parseFloat(Id.toFixed(4)),
      Id_sem,
      Id_var: parseFloat(Id_var.toFixed(4)),
      Id_op,
      contradictions: semanticContradictions + variableContradictions + opacityContradictions,
      total: 6,
      messages,
      valid: Id <= 0.30
    };
  },

  calcFc(l, Vc) {
    return (l * (1 - Vc)) + ((1 - l) * Vc);
  },

  calculate(familyKey, inputs) {
    const family = this.families[familyKey];
    if (!family) throw new Error("Famille inconnue");

    const vitalist = this.checkVitalistLayer(inputs);
    if (!vitalist.valid) {
      return {
        ilcBrut: 0,
        Fc: 0,
        ilcFinal: 0,
        verdict: "vitalist",
        verdictLabel: vitalist.label,
        bs: { Id: 1, messages: [], valid: false },
        vitalist,
        family: family.name
      };
    }

    let ilcBrut = 0;

    if (familyKey === "ilc-eg") {
      const Rc = parseFloat(inputs.Rc) || 0;
      const Sp = parseFloat(inputs.Sp) || 0;
      const Rr = parseFloat(inputs.Rr) || 0;
      const Ci = parseFloat(inputs.Ci) || 0;
      ilcBrut = family.formula(Rc, Sp, Rr, Ci);
    } else if (familyKey === "ilc-lb") {
      const Ci = parseFloat(inputs.Ci) || 0;
      const De = parseFloat(inputs.De) || 0;
      ilcBrut = family.formula(Ci, De);
    } else if (familyKey === "ilc-ut") {
      const B = parseFloat(inputs.B) || 0;
      const C = parseFloat(inputs.C) || 0;
      const Cmax = parseFloat(inputs.Cmax) || 0;
      ilcBrut = family.formula(B, C, Cmax);
    }

    const Fc = this.calcFc(parseFloat(inputs.l), parseFloat(inputs.Vc));
    let ilcFinal = ilcBrut * Fc;

    if (!isFinite(ilcFinal) || isNaN(ilcFinal)) {
      ilcFinal = 0;
    }

    const bs = this.detectBS(
      inputs.manifestBias,
      parseFloat(inputs.Rc) || 0,
      parseFloat(inputs.Sp) || 0,
      parseFloat(inputs.Rr) || 0,
      parseFloat(inputs.Ci) || 0,
      Boolean(inputs.dataLayerComplete),
      Boolean(inputs.semanticDictionaryComplete)
    );

    let verdict = "reject";
    if (!bs.valid) verdict = "invalid";
    else if (ilcFinal >= family.thresholds.accept) verdict = "accept";
    else if (ilcFinal >= family.thresholds.minor) verdict = "minor";
    else if (ilcFinal >= family.thresholds.major) verdict = "major";

    const invalidLabel = `SCORE INVALIDE — Langue de bois détectée (Id = ${bs.Id})`;

    return {
      ilcBrut: parseFloat(ilcBrut.toFixed(6)),
      Fc: parseFloat(Fc.toFixed(4)),
      ilcFinal: parseFloat(ilcFinal.toFixed(6)),
      verdict,
      verdictLabel: verdict === "invalid" ? invalidLabel : family.labels[verdict],
      bs,
      vitalist,
      family: family.name
    };
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = ILCCalculator;
}
