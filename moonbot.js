const discord = required('discord.js');
const token = 'NTEwNTIwMjYwMDc2NjM0MTEz.XO774g.3-zNR-ZRgTjEbU-KuolajO3LuDg'

const client = new discord.client();

client.on('ready')
   console.log('bot is now connected');

client.login(token);