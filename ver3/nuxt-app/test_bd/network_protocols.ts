import type {NetworkProtocol} from '@/models/NetworkProtocol';

export const testNetworkProtocol: NetworkProtocol[] = [
    {
        id: 'protocol-1',
        name: 'HTTP',
        port: 80
     },
    {
        id: 'protocol-2',
        name: 'HTTPS',
        port: 8080
    },
];