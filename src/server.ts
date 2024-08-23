/* eslint-disable prettier/prettier */
import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
    return 'Hello node'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running ...')
})
