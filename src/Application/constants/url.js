let dev = false;
let url = '';
if (dev) {
  url = 'http://192.168.43.195:3001';
} else {
  url = 'https://jsonplaceholder.typicode.com';
}

export default url;