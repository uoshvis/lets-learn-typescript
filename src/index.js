// to run $ node src

// @ts-check
import { multiply, getAddress } from './utils.js'

const result = multiply(3, 4)

console.log({ multiply, result })

const input = { name: 'Joe', address: { line1: 'Wall street 123' } }
const addressLine1 = getAddress(input)

console.log({ addressLine1 })
