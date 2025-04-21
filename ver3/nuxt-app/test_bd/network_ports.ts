import type {NetworkPort} from '@/models/NetworkPort';
import { testNetworkProtocol } from './network_protocols';
import { testIpAddresses } from './ip_addresses';

export const testNetworkPorts: NetworkPort[] = [
    {
        id: 'port-1',
        port: 80,
        description: null,
        protocol: testNetworkProtocol[0]
    },
    {
        id: 'port-2',
        port: 8080,
        description: null,
        protocol: testNetworkProtocol[1]
    },
];