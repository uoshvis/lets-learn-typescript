// JSDoc

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns
 */

export function multiply(num1, num2) {
    return num1 * num2
}

/**
 *
 * @param {{address: {line1: string} }} input
 * @returns
 */

export function getAddress(input) {
    if (!input?.address?.line1) {
        // return false
        throw new Error('invalid address')
    }
    return input.address.line1
}
