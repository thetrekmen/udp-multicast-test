import dgram from 'node:dgram';

const client = dgram.createSocket('udp4');
const LOCAL_IP_ADDRESS = '10.3.1.24'

client.on('error', (err) => {
    console.log(`client error:\n${err.stack}`);
    client.close();
});

// client.on('message', (msg, rinfo) => {
//   console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });

client.on('listening', () => {
    const address = client.address();
    console.log(`client listening ${address.address}:${address.port}`);
});

client.bind(9722, LOCAL_IP_ADDRESS, function () {
    client.addMembership('239.26.21.23', LOCAL_IP_ADDRESS);
});





