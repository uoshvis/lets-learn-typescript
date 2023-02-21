// to run $ node src

// @ts-check
import { multiply, storeAddress, getAddress, addAlbum } from './utils.js'

const result = multiply(3, 4)

console.log({ multiply, result })

const input = storeAddress(
    'Joe',
    'Wall Street 123',
    'Los Angeles',
    'Texas',
    '1234123'
)
const addressLine1 = getAddress(input)

console.log({ addressLine1 })

addAlbum(1, 2, 3)
