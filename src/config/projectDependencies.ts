import IProjectDependency from '../application/contracts/IProjectDependency.js';
import container from './deps.js';

const projectDependencies: {[key: string]: IProjectDependency} = {
    DatabaseService: container.cradle.inMemoryDatabaseServices,
    CrmServices: container.cradle.universityCrmServices
};

export default projectDependencies;
