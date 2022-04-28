import env from 'env-var'
export default {
    serverPort: env.get("SERVER_PORT").default(3000).asInt(),
    microservices: {
        algorithmMicroservice: {
            host: env.get('ALGORITHM_MS_HOST').default('').asString(),
        },
    }
}
