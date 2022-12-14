import axios from 'axios';

export default axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '7aa74687b6msh4433449b45b4ecfp11f2cajsnd2251e98fd32',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
});
