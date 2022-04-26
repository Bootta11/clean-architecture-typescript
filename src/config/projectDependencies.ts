import InMemoryDatabaseServices from '../frameworks/persistance/InMemory/InMemoryDatabaseServices';
import UniversityCrmServices from '../frameworks/externalServices/UniversityCrmServices';

const projectDependencies = {
    DatabaseService: new InMemoryDatabaseServices(),
    CrmServices: new UniversityCrmServices()
};

export default projectDependencies;
