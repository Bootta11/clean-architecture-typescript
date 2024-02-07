import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices.js';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices.js';

const projectDependencies = {
    DatabaseService: new InMemoryDatabaseServices(),
    CrmServices: new UniversityCrmServices()
};

export default projectDependencies;
