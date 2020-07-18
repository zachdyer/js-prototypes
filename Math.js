// Random functions
Math.chance = function(percent) {
  if (percent < 1) {
    return Math.random() < percent
  } else {
    return Math.random() * 100 < percent
  }
}
Math.between = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Procedural Random functions
// Use Math.seed to set the seed
// Or pass in the seed into the function to set it
Math.seed = 1
Math.seedRandom = function(seed = null) {
  if (seed) {
    Math.seed = seed
  }
  let x = Math.sin(Math.seed++) * 10000;
  return x - Math.floor(x);
}
Math.seedBetween = function(min, max, seed = null){
  return Math.floor(Math.seedRandom(seed) * (max - min + 1) + min);
}
Math.seedChance = function(percent, seed = null) {
  if (percent < 1) {
    return Math.seedRandom(seed) < percent
  } else {
    return Math.seedRandom(seed) * 100 < percent
  }
}