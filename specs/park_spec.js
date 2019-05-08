const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let testDino;
  let testDino1;
  let testDino2;
  let testDino3;
  let testDino4;
  let testDino5;
  let testPark;

  beforeEach(function () {
     testDino = new Dinosaur(`Allosaurus`, `Carnivore`, 1000);
     testDino1 = new Dinosaur(`Bracchiosaurus`, `Herbivore`, 650);
     testDino2 = new Dinosaur(`Ornithomimus`, `Omnivore`, 250);
     testDino3 = new Dinosaur(`Icthyosaurus`, `Carnivore`, 1540);
     testDino4 = new Dinosaur(`Icthyosaurus`, `Carnivore`, 1470);
     testDino5 = new Dinosaur(`Icthyosaurus`, `Carnivore`, 1600);
     testPark = new Park(`Jurrassic Park`, 100, [testDino, testDino1, testDino2])
  });

  it('should have a name', function () {
    assert.strictEqual(testPark.name, `Jurrassic Park`);
  });

  it('should have a ticket price', function () {
    assert.strictEqual(testPark.ticketPrice, 100);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(testPark.dinosaurs, [testDino, testDino1, testDino2]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    testPark.addDino(testDino3);
    assert.deepStrictEqual(testPark.dinosaurs, [testDino, testDino1, testDino2, testDino3]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    testPark.removeDino(testDino1);
    assert.deepStrictEqual(testPark.dinosaurs, [testDino, testDino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    assert.strictEqual(testPark.mostPopular(), testDino);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    testPark.addDino(testDino3);
    testPark.addDino(testDino4);
    testPark.addDino(testDino5);
    assert.deepStrictEqual(testPark.findSpecies(`Icthyosaurus`), [testDino3, testDino4, testDino5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    testPark.addDino(testDino3);
    testPark.addDino(testDino4);
    testPark.addDino(testDino5);
    testPark.removeSpecies(`Icthyosaurus`);
    assert.deepStrictEqual(testPark.dinosaurs, [testDino, testDino1, testDino2]);
  });

  it(`should be able to calculate the total number of visistors per day`, function () {
      assert.strictEqual(testPark.visitorsDay(), 1900);
  })

  it(`should be able to calculate the total number of visistors per year`, function () {
      assert.strictEqual(testPark.visitorsYear(), 380000);
  })

  it(`should be able to calculate the total ticket revenue per year`, function () {
    assert.strictEqual(testPark.revenue(), 38000000);
  })

});
