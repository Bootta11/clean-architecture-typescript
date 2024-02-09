import env from 'env-var';
export default {
    serverPort: env.get('SERVER_PORT').default(3000).asInt(),
    env: env.get('NODE_ENV').default('development').asString(),
    microservices: {
        algorithmMicroservice: {
            host: env.get('ALGORITHM_MS_HOST').default('').asString(),
        },
    }
};
