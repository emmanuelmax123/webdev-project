class car {
  brand;
  model;
  speed = 0;
  isTrunkOpen = false;
  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }
  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? "open" : "closed";
    console.log(
      `${this.brand} ${this.model} speed:${this.speed}km/h, Trunk ${trunkStatus}`
    );
  }
  go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }
    // speed is limited to 200
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  brake() {
    this.speed -= 5;
    // limit speed to 0
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  cloedTrunk() {
    this.isTrunkOpen = false;
  }
}

const car1 = new car({
  brand: "Toyoyta",
  model: "Corolla",
});

const car2 = new car({
  brand: "Tesla",
  model: "Model 3",
});

car1.go();
car1.openTrunk();
car1.displayInfo();

car2.openTrunk();
car2.displayInfo();

// car1.go();
// car1.go();
// car1.go();
// car1.go();
// car1.displayInfo();

// car2.go();
// car2.go();
// car2.go();
// car2.go();
// car2.go();
// car2.brake();
// car2.brake();
// car2.displayInfo();

class RaceCar extends car {
  acceleration;
  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }
  go() {
    this.speed += this.acceleration;
    // limit speed to 300
    if (this.speed > 300) {
      this.speed = 300;
    }
  }
  openTrunk() {
    return;
  }
  closedTrunk() {
    return;
  }
  displayInfo() {
    console.log(`${this.brand} ${this.model} speed:${this.speed}km/h`);
  }
}
const raceCar1 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

// raceCar1.openTrunk();
// raceCar1.displayInfo();

raceCar1.go();
raceCar1.go();
raceCar1.go();
raceCar1.openTrunk();
raceCar1.displayInfo();
