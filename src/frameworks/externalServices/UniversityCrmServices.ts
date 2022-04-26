import ICrmServices from '../../application/contracts/ICrmServices';

export default class UniversityCrmServices implements ICrmServices {

    async notify(studentDetails) {
        return Promise.resolve('external crm system was notified');
    }

};
