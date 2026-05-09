const assert = require('assert');
const ILCCalculator = require('./ilc-calculator.js');

function approx(actual, expected, epsilon = 1e-9) {
  assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} !== ${expected}`);
}

// Syntax/regression smoke test: the module must load and examples must calculate.
for (const [key, ex] of Object.entries(ILCCalculator.examples)) {
  const result = ILCCalculator.calculate(ex.family, ex);
  assert.ok(Number.isFinite(result.ilcFinal), `${key} should return a finite score`);
}

// v1 manifest alignment: ILC-LB = (1 - Ci) × (1 - De), then Fc.
{
  const result = ILCCalculator.calculate('ilc-lb', {
    Ci: 0.25,
    De: 0.4,
    Vc: 0.75,
    l: 1,
    manifestBias: 'libertarian'
  });
  approx(result.ilcBrut, 0.45);
  approx(result.Fc, 0.25);
  approx(result.ilcFinal, 0.1125);
}

// v1 vitalist layer: any triggered vitalist pillar stops the ideological score.
{
  const result = ILCCalculator.calculate('ilc-eg', {
    Rc: 1,
    Sp: 1,
    Rr: 1,
    Ci: 0.1,
    Vc: 0.75,
    l: 1,
    manifestBias: 'egalitarian',
    P1: true,
    P2: false,
    P3: false
  });
  assert.strictEqual(result.vitalist.valid, false);
  assert.strictEqual(result.ilcFinal, 0);
  assert.strictEqual(result.verdict, 'vitalist');
}

console.log('ILC calculator tests passed');
