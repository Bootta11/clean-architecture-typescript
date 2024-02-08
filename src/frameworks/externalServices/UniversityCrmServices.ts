import ICrmServices from '../../application/contracts/ICrmServices.js';

export default class UniversityCrmServices implements ICrmServices {

    async notify(_studentDetails) {
        return Promise.resolve('external crm system was notified');
    }

}
