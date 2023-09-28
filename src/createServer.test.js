const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
  const figureCalculator = new FigureCalculator(MathBasic);

  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /substract', () => {
    it('should respond with a status code of 200 and the payload value is substract result of a and b correctly', async () => {
      const a = 20;
      const b = 10;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(10);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiply of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is divide of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(0.5);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is rectangle perimaeter of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(spyRectanglePerimeter).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is rectangle area of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spyRectangleArea).toBeCalledWith(a, b);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is triangle perimeter of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const c = 30;
      const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${a}/${b}/${c}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(spyTrianglePerimeter).toBeCalledWith(a, b, c);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is triangle area of a and b correctly', async () => {
      const a = 10;
      const b = 20;
      const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ mathBasic: MathBasic, figureCalculator });

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${a}/${b}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(100);
      expect(spyTriangleArea).toBeCalledWith(a, b);
    });
  });
});
