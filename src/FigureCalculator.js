class FigureCalculator {
  constructor(mathBasic) {
    this.mathBasic = mathBasic;
  }

  validateInput(args, expectedArgsCount) {
    if (args.length !== expectedArgsCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this.validateInput(args, 2);

    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this.validateInput(args, 2);

    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this.validateInput(args, 3);

    return this.mathBasic.add(sideA, this.mathBasic.add(sideB, base));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this.validateInput(args, 2);

    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
