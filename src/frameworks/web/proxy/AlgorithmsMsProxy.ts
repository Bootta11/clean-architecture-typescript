import BaseMsProxy from "./BaseMsProxy";
import config from "../../../config";

export default class AlgorithmsMsProxy extends BaseMsProxy{
    getHost(): string {
        return config.microservices.algorithmMicroservice.host;
    }
}
