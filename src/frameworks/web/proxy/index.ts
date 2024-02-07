import AlgorithmsMsProxy from './AlgorithmsMsProxy.js';

const proxyList = {
    //'/api/ams': new AlgorithmsMsProxy(),
};

const proxyHandler = (app) => {
    Object.keys(proxyList).forEach(path => app.use(path, proxyList[path].generateHttpProxy()));
};

export default proxyHandler;
