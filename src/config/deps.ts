import awilix, { Lifetime } from 'awilix'
import IDatabaseServices from '../application/contracts/IDatabaseServices.js';
import ICrmServices from '../application/contracts/ICrmServices.js';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
    strict: true,
}) 

container.loadModules(
    [
        [
            'src/frameworks/persistance/**/!(*.test).ts',
            {
                register: awilix.asClass,
                lifetime: Lifetime.SINGLETON,
            },
        ],
        [
            'src/frameworks/externalServices/**/!(*.test).ts',
            {
                register: awilix.asClass,
                lifetime: Lifetime.SINGLETON,
            },
        ],
        [
            'src/controllers/**/!(*.test).ts',
            {
                register: awilix.asClass,
                lifetime: Lifetime.SINGLETON,
            },
        ],
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
            register: awilix.asClass,
        },
    },
);

container.register({
    projectDependencies: awilix.asValue<{
      DatabaseService: IDatabaseServices,
      CrmService: ICrmServices
    }>({
        DatabaseService: container.cradle.inMemoryDatabaseServices,
        CrmService: container.cradle.universityCrmServices
    })
})

export default container;