let backendHost;
const hostname = window && window.location && window.location.hostname;
if(hostname === 'localhost') {
    backendHost = 'http://127.0.0.1:3001';
} else if(hostname === 'hardcore-hawking-033be2.netlify.app') {
    backendHost = 'https://knou-node-d3u6i.ondigitalocean.app';
}
else backendHost = 'http://127.0.0.1:3001';
export const API_ROOT = `${backendHost}`;
export const HOSTNAME = `${hostname}`;