let backendHost;
const hostname = window && window.location && window.location.hostname;
if(hostname === 'localhost') {
    backendHost = 'http://127.0.0.1:3001';
} else if(hostname === 'app.XXXX.com') {
    backendHost = 'https://knou-node-d3u6i.ondigitalocean.app/';
}
else backendHost = 'http://127.0.0.1:3001';
export const API_ROOT = `${backendHost}`;
export const HOSTNAME = `${hostname}`;