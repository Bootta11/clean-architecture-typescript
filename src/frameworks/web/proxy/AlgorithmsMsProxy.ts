import BaseMsProxy from './BaseMsProxy.js';
import config from '../../../config/index.js';

export default class AlgorithmsMsProxy extends BaseMsProxy{
    getHost(): string {
        return config.microservices.algorithmMicroservice.host;
    }
}
