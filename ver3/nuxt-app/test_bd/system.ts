import type {SystemName} from "~/models/SystemName";
import { testServerUnits } from './server_units';

import type {NetworkPort} from '@/models/NetworkPort';
import { testNetworkProtocol } from './network_protocols';

import type { SoftwareVersion } from '@/models/SoftwareVersion';
import { testSoftwareTypes } from './software_types';

export const testSoftwareVersion: SoftwareVersion[] = [
    {
        id: 'softwarev-1',
        version: '1',
        software_type: testSoftwareTypes[0],
    },
    {
        id: 'softwarev-2',
        version: '14.*.*',
        software_type: testSoftwareTypes[1],
    },
];

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

export const testSystemName: SystemName[] = [
    {
        id: 'system-1',
        name: 'system_1',
        software_versions: testSoftwareVersion.slice(1),
        ports: testNetworkPorts.slice(0, 1),
        type: 'БД',
        description: null
    },
    {
        id: 'system-2',
        name: 'system_2',
        software_versions: testSoftwareVersion.slice(0, 1),
        ports: testNetworkPorts.slice(0, 1),
        type: 'Приложение',
        description: null
    },
];