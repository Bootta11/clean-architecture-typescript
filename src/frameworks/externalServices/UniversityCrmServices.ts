import ICrmServices from '../../application/contracts/ICrmServices.js';
import IProjectDependency from '../../application/contracts/IProjectDependency.js';

export default class UniversityCrmService implements ICrmServices, IProjectDependency {
    
    async init(){};

    async notify(_studentDetails) {
        return Promise.resolve('external crm system was notified');
    }

}
