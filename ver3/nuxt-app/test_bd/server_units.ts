import type { ServerUnit } from '@/models/ServerUnit';
import { testDomains } from './domains';
import { testServerCluster } from './server_clusters';
import { testIpAddresses } from './ip_addresses';
import { testHardware } from './hardware';
import { testSoftware } from './software';
import { testSystemName } from './system';

export const testServerUnits: ServerUnit[] = [
    {
        id: 'srv-1',
        name: 'Личный кабинет',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[0],
        ip_addresses: testIpAddresses.slice(0),
        hardware: testHardware.slice(0, 1),
        software: testSoftware.slice(0, 1),
        system_name: testSystemName[0],
        domain_name: testDomains[0]
    },
    {
        id: 'srv-2',
        name: 'Посещаемость',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[0],
        ip_addresses: testIpAddresses.slice(0),
        hardware: testHardware.slice(0, 1),
        software: testSoftware.slice(0, 1),
        system_name: testSystemName[0],
        domain_name: testDomains[1]
    },
    {
        id: 'srv-3',
        name: 'Медиатека',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[0],
        ip_addresses: testIpAddresses.slice(0),
        hardware: testHardware.slice(0, 1),
        software: testSoftware.slice(0, 1),
        system_name: testSystemName[0],
        domain_name: testDomains[2]
    },
    {
        id: 'srv-4',
        name: 'Библиотека',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[1],
        ip_addresses: testIpAddresses.slice(0, 1),
        hardware: testHardware.slice(0, 1),
        software: testSoftware.slice(0, 1),
        system_name: testSystemName[1],
        domain_name: testDomains[3]
    },
    {
        id: 'srv-5',
        name: 'Moodle',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[1],
        ip_addresses: testIpAddresses.slice(0, 1),
        hardware: testHardware.slice(0, 1),
        software: testSoftware.slice(0, 1),
        system_name: testSystemName[1],
        domain_name: testDomains[4]
    },
    {
        id: 'srv-6',
        name: 'Лэти',
        description: null,
        server_type: 'virtual',
        cluster: testServerCluster[2],
        ip_addresses: testIpAddresses.slice(0, 1),
        hardware: testHardware.slice(0),
        software: testSoftware.slice(0),
        system_name: testSystemName[1],
        domain_name: testDomains[5]
    },
];