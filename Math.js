Math.chance = function(percent) {
  if(percent < 1) {
    return Math.random() < percent
  } else {
    return Math.random() * 100 < percent 
  }
}
Math.between = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}