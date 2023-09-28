class RocketRepairKit {
  constructor(objA, objB, objC) {
    this.objA = objA;
    this.objB = objB;
    this.objC = objC;
  }

  repair(rocket) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired!`);
      }, 500);
    });
  }
}

module.exports = RocketRepairKit;
