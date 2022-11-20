const FUNCTION = 'function';

export function isFunction(code: string) {
  return code.startsWith(FUNCTION)
}

export function getFragmentMethodInformation(code: string) {
  if (isFunction(code)) {
    return {
      name: undefined,
      isMethod: false
    }
  }
  const [, name] = code.match(/^([a-z0-9_]+)\s*\([^\)]*\)\s*[\{:]/i) || [];

  return {
    name,
    isMethod: !!name
  }
}

export function addFunctionDeclaration(code: string) {
  if (isFunction(code)) return code;
  return `${FUNCTION} ${code}`
}

export function removeFunctionDeclaration(code: string) {
  if (!isFunction(code)) return code
  return code.replace(`${FUNCTION} `, '')
}