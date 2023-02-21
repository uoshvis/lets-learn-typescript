// to run $ node src

// @ts-check
import { multiply, storeAddress, getAddress } from './utils.js'
import { addAlbum } from './album.js'

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

// works without ts-check
const album = addAlbum('U2', 'One world', 2000)

console.log({ album })
