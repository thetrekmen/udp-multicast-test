import dgram from 'node:dgram';


const LOCAL_IP_ADDRESS = '172.26.44.44'
// const MULTICAST_ADDRESS = '239.26.21.41'
// const PORT = 9722
const MULTICAST_ADDRESS = '239.192.21.12'
const PORT = 60012

const client = dgram.createSocket({ type: 'udp4', reuseAddr: true });

client.on('error', (err) => {
    console.log(`client error:\n${err.stack}`);
    client.close();
});

client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

client.on('listening', () => {
    const address = client.address();
    console.log(`client listening ${address.address}:${address.port}`);
});

client.bind(PORT, LOCAL_IP_ADDRESS, function () {
    client.addMembership(MULTICAST_ADDRESS, LOCAL_IP_ADDRESS);
});





