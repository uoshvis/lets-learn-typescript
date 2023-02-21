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
 * @typedef {object} UserInfo an obj with address info
 * @property {string} name
 * @property {{line1: string, city: string, state: string, zip: string}} address
 *
 */

/**
 *
 * @param {string} name
 * @param {string} line1
 * @param {string} city
 * @param {string} state
 * @param {string} zip
 * @returns {UserInfo}
 */

export function storeAddress(name, line1, city, state, zip) {
    return {
        name,
        address: {
            line1,
            city,
            state,
            zip,
        },
    }
}

/**
 *
 * @param {UserInfo} input
 * @returns
 */

export function getAddress(input) {
    if (!input?.address?.line1) {
        // return false
        throw new Error('invalid address')
    }
    return input.address.line1
}
