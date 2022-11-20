import { addFunctionDeclaration, isFunction, removeFunctionDeclaration } from "./methods";

describe('methods', () => {

  describe('isFunction', () => {

    it('should return true if code starts with function', () => {
      expect(isFunction('function foo() {}')).toEqual(true)
    })

    it('should return false if code does not start with function', () => {
      expect(isFunction('foo() {}')).toEqual(false)
    })
  })


  describe('addFunctionDeclaration', () => {

    it('should add function declaration', () => {
      const code = `onBlur() { console.log('onBlur') }`;
      expect(addFunctionDeclaration(code)).toBe(`function onBlur() { console.log('onBlur') }`);
    })

    it('should not add function declaration if it already exists', () => {
      const code = `function onBlur() { console.log('onBlur') }`;
      expect(addFunctionDeclaration(code)).toBe(`function onBlur() { console.log('onBlur') }`);
    })
  })

  describe('removeFunctionDeclaration', () => {
    it('should remove function declaration', () => {
      const code = `function onBlur() { console.log('onBlur') }`;
      expect(removeFunctionDeclaration(code)).toBe(`onBlur() { console.log('onBlur') }`);
    })

    it('should not remove function declaration if in scope', () => {
      const code = `onBlur() { 
        function insideFunction() {
          console.log('onBlur')
        }
      }`;
      expect(removeFunctionDeclaration(code)).toBe(code);
    })
  })
})