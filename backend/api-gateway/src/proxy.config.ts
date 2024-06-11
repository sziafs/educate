import { RequestHandler } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

interface ProxyConfig {
  [key: string]: RequestHandler;
}

export const proxyConfig: ProxyConfig = {
  '/programs': createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { '^/programs': '' },
  }),
  '/courses': createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: { '^/courses': '' },
  }),
  '/modules': createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: { '^/modules': '' },
  }),
  '/classes': createProxyMiddleware({
    target: 'http://localhost:3004',
    changeOrigin: true,
    pathRewrite: { '^/classes': '' },
  }),
};