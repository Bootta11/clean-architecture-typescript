import httpProxy from 'express-http-proxy';
import httpContext from "express-http-context";
import logger from "../../common/Logger";

export default abstract class BaseMsProxy {
    abstract getHost(): string;

    getForwardPath(req) {
        const parts = req.url.split('?');
        const queryString = parts[1];

        return '/api' + parts[0] + (queryString ? '?' + queryString : '');
    }

    logProxyRequest(proxyRes, proxyResData, userReq, userRes) {
        logger.info("proxy response log", {
            statusCode: proxyRes.statusCode,
            responseData: proxyResData.toString(),
            forwardPath: this.getForwardPath(userReq),
            proxyRequestPath: userReq.originalUrl,
        })
    }

    generateHttpProxy() {
        let _this = this;
        return httpProxy(this.getHost(), {
            proxyReqPathResolver: this.getForwardPath,
            proxyReqOptDecorator: function(proxyReqOpts) {
                proxyReqOpts.headers['source-req-id'] = httpContext.get('reqId');

                return proxyReqOpts;
            },
            userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
                _this.logProxyRequest(proxyRes, proxyResData, userReq, userRes)

                return proxyResData;
            },
        })
    }
}
