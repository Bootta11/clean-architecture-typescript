import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices.js';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices.js';
import IProjectDependency from '../application/contracts/IProjectDependency.js';

const projectDependencies: {[key: string]: IProjectDependency} = {
    DatabaseService: new InMemoryDatabaseServices(),
    CrmServices: new UniversityCrmServices()
};

export default projectDependencies;
