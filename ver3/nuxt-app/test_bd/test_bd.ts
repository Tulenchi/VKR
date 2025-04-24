import type {User} from "~/models/User";
import type {Group} from "~/models/Group";
import type { ServerUnit } from '@/models/ServerUnit';
import type {SystemName} from "~/models/SystemName";
import type {NetworkPort} from '@/models/NetworkPort';
import type { SoftwareVersion } from '@/models/SoftwareVersion';
import type { DomainName } from '@/models/DomainName';
import type { Hardware } from '@/models/Hardware';
import type { HardwareMeasurementUnit } from '@/models/HardwareMeasurementUnit';
import type { HardwareType } from '@/models/HardwareType';
import type {IpAddressType} from "~/models/IpAddressType";
import type { IpAddress } from '@/models/IpAddress';
import type {NetworkProtocol} from '@/models/NetworkProtocol';
import type {ServerCluster} from '@/models/ServerCluster';
import type { Software } from '@/models/Software';
import type { SoftwareType } from '@/models/SoftwareType';

export const testUser: User[] = [
    {
        user_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        user_name: 'Пользователь №1'
    },
    {
        user_id: 'b2c3d4e5-f6a7-8901-bcde-f23456789012',
        user_name: 'Пользователь №2'
    },
    {
        user_id: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
        user_name: 'Пользователь №3'
    }
];

export const testGroups: Group[] = [
    {
        group_id: 'd4e5f6a7-b8c9-0123-defg-456789012345',
        identifier: 'group-1',
        group_name: 'Первая группа',
        description: 'Тестовая группа номер 1',
        user_id: testUser.slice(0, 1)
    },
    {
        group_id: 'e5f6a7b8-c9d0-1234-efgh-567890123456',
        identifier: 'group-2',
        group_name: 'Вторая группа',
        description: 'Тестовая группа номер 2',
        user_id: testUser.slice(2)
    }
];

export const testIpAddressType: IpAddressType[] = [
    {
        identifier: 'internal'
    },
    {
        identifier: 'internal'
    },
];

export const testNetworkProtocol: NetworkProtocol[] = [
    {
        network_type: 'HTTP',
        id_network: 'protocol-1'
    },
    {
        network_type: 'HTTPS',
        id_network: 'protocol-2'
    },
];

export const testNetworkPorts: NetworkPort[] = [
    {
        port: 80,
        description: 'null',
        id_network: testNetworkProtocol.slice(0)
    },
    {
        port: 8080,
        description: 'null',
        id_network: testNetworkProtocol.slice(0, 1)
    },
];

export const testIpAddresses: IpAddress[] = [
    {
        ip: '10.136.2.40',
        id_ip: 'efae8aa7-a1e3-4eee-b140-db6debb44856',
        version: 'IpV4',
        description: 'null',
        port: testNetworkPorts[0],
        identifier: testIpAddressType[0]
    },
    {
        ip: 'fd00::1',
        id_ip: '068ccdfc-9ba1-47a6-b1c9-02e67bbb9801',
        version: 'IpV6',
        description: 'null',
        port: testNetworkPorts[1],
        identifier: testIpAddressType[1]
    },
];

export const testDomains: DomainName[] = [
    {
        domain_name: 'lk.etu.ru',
        ip: testIpAddresses.slice(0)
    },
    {
        domain_name: 'digital.etu.ru',
        ip: testIpAddresses.slice(0)
    },
    {
        domain_name: 'media.etu.ru',
        ip: testIpAddresses.slice(1)
    },
    {
        domain_name: 'library.etu.ru',
        ip: testIpAddresses.slice(1)
    },
    {
        domain_name: 'vec.etu.ru',
        ip: testIpAddresses.slice(0, 1)
    },
    {
        domain_name: 'etu.ru',
        ip: testIpAddresses.slice(0, 1)
    },
];

export const testServerCluster: ServerCluster[] = [
    {
        cluster_name: 'Cluster-1'
    },
    {
        cluster_name: 'Cluster-2'
    },
    {
        cluster_name: 'Cluster-3'
    },
];

export const testSoftwareTypes: SoftwareType[] = [
    {
        type_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        software_type_name: 'software_1',
        provider: 'null',
        documentation: 'null',
        is_reusable: false
    },
    {
        type_id: '550e8400-e29b-41d4-a716-446655440000',
        software_type_name: 'software_2',
        provider: 'null',
        documentation: 'null',
        is_reusable: false
    },
];

export const testSoftwareVersion: SoftwareVersion[] = [
    {
        version_name: '1',
        type_id: testSoftwareTypes.slice(0)
    },
    {
        version_name: '14.*.*',
        type_id: testSoftwareTypes.slice(0, 1)
    },
];

export const testSoftware: Software[] = [
    {
        software_id: 'e989170c-8508-436d-9c2c-75f82616194e',
        version_name: testSoftwareVersion[0],
        description: 'null'
    },
    {
        software_id: '7f471eeb-6b0a-4720-b6b5-2dd482712481',
        version_name: testSoftwareVersion[1],
        description: 'null'
    },
];

export const testHardwareMeasurementUnit: HardwareMeasurementUnit[] = [
    {
        MU_id: 'hardwaremeas-1',
        singular_name: 'Ядро',
        small_plural_name: 'Ядра',
        plural_name: 'Ядер'
    },
    {
        MU_id: 'hardwaremeas-2',
        singular_name: 'ГБ',
        small_plural_name: 'ГБ',
        plural_name: 'ГБ'
    },
];

export const testHardwareType: HardwareType[] = [
    {
        type_id: 'hardwaretype-1',
        type_name: 'CPU',
        description: '',
        is_reusable: false,
        MU_id: testHardwareMeasurementUnit.slice(0)
    },
    {
        type_id: 'hardwaretype-2',
        type_name: 'RAM',
        description: 'null',
        is_reusable: true,
        MU_id: testHardwareMeasurementUnit.slice(0, 1)
    },
];

export const testHardware: Hardware[] = [
    {
        hardware_id: '6b93750d-3480-4222-b623-7b9604d059e5',
        hardware_name: 'hardware-1',
        value: 8,
        description: 'Процессор сервера',
        type_id: testHardwareType[0]
    },
    {
        hardware_id: 'b9538b3b-813a-42bc-9ef6-3f1ac44b28ea',
        hardware_name: 'hardware-2',
        value: 32,
        description: 'Оперативная память',
        type_id: testHardwareType[1]
    },
];

export const testSystemName: SystemName[] = [
    {
        system_id: '550e8400-e29b-41d4-a716-446655440000',
        system_name: 'system_1',
        type: 'БД',
        description: 'null',
        software_id: testSoftware.slice(1),
        port: testNetworkPorts.slice(0, 1),
        group_id: testGroups.slice(0)
    },
    {
        system_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        system_name: 'system_2',
        type: 'Приложение',
        description: 'null',
        software_id: testSoftware.slice(1),
        port: testNetworkPorts.slice(0),
        group_id: testGroups.slice(1)
    },
];

export const testServerUnits: ServerUnit[] = [
    {
        server_type: 'virtual',
        server_name: 'Личный кабинет',
        server_id: 'personal-account',
        description: 'null',
        ip: testIpAddresses.slice(0),
        cluster_name: testServerCluster[0],
        system_id: testSystemName.slice(0),
        domain_name: testDomains[0],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(0),
        hardware_id: testHardware.slice(0, 1)
    },
    {
        server_type: 'virtual',
        server_name: 'Посещаемость',
        server_id: 'attendance',
        description: 'null',
        ip: testIpAddresses.slice(1),
        cluster_name: testServerCluster[0],
        system_id: testSystemName.slice(0),
        domain_name: testDomains[1],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Медиатека',
        server_id: 'media-library',
        description: 'null',
        ip: testIpAddresses.slice(0, 1),
        cluster_name: testServerCluster[1],
        system_id: testSystemName.slice(0),
        domain_name: testDomains[2],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(1),
        hardware_id: testHardware.slice(0, 1)
    },
    {
        server_type: 'virtual',
        server_name: 'Библиотека',
        server_id: 'library',
        description: 'null',
        ip: testIpAddresses.slice(0, 1),
        cluster_name: testServerCluster[1],
        system_id: testSystemName.slice(1),
        domain_name: testDomains[3],
        group_id: testGroups.slice(1),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(1)
    },
    {
        server_type: 'virtual',
        server_name: 'Moodle',
        server_id: 'moodle',
        description: 'null',
        ip: testIpAddresses.slice(0),
        cluster_name: testServerCluster[2],
        system_id: testSystemName.slice(1),
        domain_name: testDomains[4],
        group_id: testGroups.slice(1),
        software_id: testSoftware.slice(0),
        hardware_id: testHardware.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Лэти',
        server_id: 'leti',
        description: 'null',
        ip: testIpAddresses.slice(1),
        cluster_name: testServerCluster[2],
        system_id: testSystemName.slice(1),
        domain_name: testDomains[5],
        group_id: testGroups.slice(0, 1),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(0, 1)
    },
];
