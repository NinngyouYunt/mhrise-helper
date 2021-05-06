const skill = {
  attack: [
    { level: 0, addition: 0, multiplier: 1 },
    { level: 1, addition: 3, multiplier: 1 },
    { level: 2, addition: 6, multiplier: 1 },
    { level: 3, addition: 9, multiplier: 1 },
    { level: 4, addition: 7, multiplier: 1.05 },
    { level: 5, addition: 8, multiplier: 1.06 },
    { level: 6, addition: 9, multiplier: 1.08 },
    { level: 7, addition: 10, multiplier: 1.1 },
  ]
}
  ;
const item = {
  claw: 9,
  charm: 6,
  seed: 10,
  powder: 10,
  drug: 5,
  drugG: 7,
  bird: 20
}

const food = {
  sleep: 9
}
export const stats = {
  skill,
  item,
  food
}

export const calculator = {
  item: (clawCharm, seed, powder, drug, bird) => {
    return (clawCharm ? item.claw + item.charm : 0) +
      (seed ? item.seed : 0) +
      (powder ? item.powder : 0) +
      (drug ? item.drug : 0) +
      (bird ? item.bird : 0);
  }
}
