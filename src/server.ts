import {fastify} from 'fastify';
import { env, setupEnvVariables } from './env';
import { initializeDbClient, prisma } from './db';


// Global configuration
setupEnvVariables();
initializeDbClient();

const PORT = env.PORT as string;
const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}
const server = fastify({ 
  logger: envToLogger['development'] ?? true // defaults to true if no entry matches in the map
});



// Middleware

// Router
server.get('/ping', async (request, reply) => {
  const users = await prisma.user.findMany();
  return { users };

})

// Start server
server.listen({ port: +PORT }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at http://localhost:${PORT}`)
})