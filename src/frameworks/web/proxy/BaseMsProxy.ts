import httpProxy from 'express-http-proxy';
import httpContext from 'express-http-context';
import logger from '../../common/Logger.js';

export default abstract class BaseMsProxy {
    abstract getHost(): string;

    getForwardPath(req) {
        const parts = req.url.split('?');
        const queryString = parts[1];

        return '/api' + parts[0] + (queryString ? '?' + queryString : '');
    }

    logProxyRequest(proxyRes, proxyResData, userReq, _userRes) {
        logger.info('proxy response log', {
            statusCode: proxyRes.statusCode,
            responseData: proxyResData.toString(),
            forwardPath: this.getForwardPath(userReq),
            proxyRequestPath: userReq.originalUrl,
        });
    }

    generateHttpProxy() {
        return httpProxy(this.getHost(), {
            proxyReqPathResolver: this.getForwardPath,
            proxyReqOptDecorator: function(proxyReqOpts) {
                proxyReqOpts.headers['source-req-id'] = httpContext.get('reqId');

                return proxyReqOpts;
            },
            userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
                this.logProxyRequest(proxyRes, proxyResData, userReq, userRes);

                return proxyResData;
            },
        });
    }
}
