import axios from 'axios';

(async () => {
    const data = new FormData();
    data.append('hello', 'world');
    const response = await axios.post('https://google.com');
    console.log(response.data);
})();
