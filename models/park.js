const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function (dino) {
  let pos = this.dinosaurs.indexOf(dino)
  this.dinosaurs.splice(pos, 1);
}

Park.prototype.mostPopular = function () {
  let result;
  let visitors = 0;
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > visitors) {
      visitors = dinosaur.guestsAttractedPerDay;
      result = dinosaur;
    }
  }
  return result
}

Park.prototype.findSpecies = function (species) {
  const result = [];
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      result.push(dinosaur);
    }
  }
  return result;
}

Park.prototype.removeSpecies = function (species) {
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      this.removeDino(dinosaur);
    }
  }
}

Park.prototype.visitorsDay = function () {
  let result = 0;
  for (let dinosaur of this.dinosaurs) {
    result += dinosaur.guestsAttractedPerDay;
  }
  return result;
}

Park.prototype.visitorsYear = function () {
  let perDay = this.visitorsDay();
  let result = perDay*200;
  return result;
};

Park.prototype.revenue = function () {
  let result = this.visitorsYear() * 100;
  return result;
};

module.exports = Park
