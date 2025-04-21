import type { IpAddress } from '@/models/IpAddress';
import { testIpAddressType } from './ip_address_types';
import { testServerUnits } from './server_units';
import { testNetworkPorts } from './network_ports';
import type { DomainName } from '@/models/DomainName';

export const testDomains: DomainName[] = [
    {
        id: 'domain-1',
        name: 'lk.etu.ru',
    },
    {
        id: 'domain-2',
        name: 'digital.etu.ru',
    },
    {
        id: 'domain-3',
        name: 'media.etu.ru',
    },
    {
        id: 'domain-4',
        name: 'library.etu.ru',
    },
    {
        id: 'domain-5',
        name: 'vec.etu.ru',
    },
    {
        id: 'domain-6',
        name: 'etu.ru',
    },
];

export const testIpAddresses: IpAddress[] = [
    {
        id: 'ip-1',
        name: '10.136.2.40',
        version: 'IpV4',
        description: null,
        type: testIpAddressType[0],
        domain_names: testDomains.slice(0)
    },
    {
        id: 'ip-2',
        name: 'fd00::1',
        version: 'IpV6',
        description: null,
        type: testIpAddressType[1],
        domain_names: testDomains.slice(1)
    },
];