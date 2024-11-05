// testRedisConnection.ts
import { createClient } from 'redis';

const client = createClient({
  url: 'redis://:@!0e20ad293e@localhost:6379', // Ganti dengan URL koneksi Redis Anda
});

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

client.on('ready', () => {
  console.log('Connected to Redis');
  client.quit();
});

client.on('connect', () => {
  console.log('Connecting to Redis...');
});

client.connect();