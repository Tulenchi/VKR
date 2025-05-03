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
import type { SystemType } from '@/models/SystemType';
import type { SystemConnection } from '@/models/SystemConnection';
import type { DNS } from '@/models/DNS';
import type { DNSRecord } from '@/models/DNSRecord';

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
        identifier: 'external'
    },
];

export const testNetworkProtocol: NetworkProtocol[] = [
    {
        network_type: 'HTTP',
        id_network: 'e97c2b14-0160-4cd1-88e8-22754add46a5',
        parent_id: null,
        port: null
    },
    {
        network_type: 'HTTPS',
        id_network: 'a0cb0f61-f6aa-43cf-8965-fe6f2df60b8e',
        parent_id: null,
        port: null
    },
];

export const testNetworkPorts: NetworkPort[] = [
    {
        id_port: 'ffdc508d-54d5-4bcf-b8bf-5729ac89486e',
        port: 80,
        description: 'null',
        id_network: testNetworkProtocol.slice(0)
    },
    {
        id_port: '49b0c36d-c6a8-432c-ad17-5d3730cb8c56',
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
        description: 'Main server IP',
        id_port: testNetworkPorts[0],
        identifier: testIpAddressType[0]
    },
    {
        ip: 'fd00::1',
        id_ip: '068ccdfc-9ba1-47a6-b1c9-02e67bbb9801',
        version: 'IpV6',
        description: 'null',
        id_port: testNetworkPorts[1],
        identifier: testIpAddressType[1]
    },
];

export const testDNS: DNS[] = [
    {
        dns_id: '7w3eebc99-9c0b-4ef8-bb6d-6bb9bd380a43',
        name: 'example1.com',
    },
    {
        dns_id: '8x4eebc99-9c0b-4ef8-bb6d-6bb9bd380a44',
        name: 'example2.com',
    },
];

export const testDNSRecord: DNSRecord[] = [
    {
        dnsr_id: '9y5eebc99-9c0b-4ef8-bb6d-6bb9bd380a45',
        dns_id: testDNS.slice(0),
        type: 'A',
        value: '192.168.1.1'
    },
    {
        dnsr_id: '0z6eebc99-9c0b-4ef8-bb6d-6bb9bd380a46',
        dns_id: testDNS.slice(0, 1),
        type: 'AAAA',
        value: '2001:db8::1'
    },
];

export const testDomains: DomainName[] = [
    {
        domain_id: '25c0b6aa-b603-47ba-9a0c-b3e4ca0e2ae2',
        domain_name: 'lk.etu.ru',
        id_ip: testIpAddresses.slice(0, 2),
        dnsr_id: testDNSRecord[0],
        description: 'Null'
    },
    {
        domain_id: 'dee72749-8c7b-4c53-ba70-8dae109b2909',
        domain_name: 'digital.etu.ru',
        id_ip: testIpAddresses.slice(0),
        dnsr_id: testDNSRecord[1],
        description: 'Null'
    },
    {
        domain_id: '5c2c0f8f-62ff-44be-babc-fa9eb293f255',
        domain_name: 'media.etu.ru',
        id_ip: testIpAddresses.slice(1),
        dnsr_id: testDNSRecord[0],
        description: 'Null'
    },
    {
        domain_id: '62d3dbe0-907d-4a50-825b-28ad5d91b0b9',
        domain_name: 'library.etu.ru',
        id_ip: testIpAddresses.slice(1),
        dnsr_id: testDNSRecord[1],
        description: 'Null'
    },
    {
        domain_id: '027361cf-cba0-4349-b352-b0927856a653',
        domain_name: 'vec.etu.ru',
        id_ip: testIpAddresses.slice(0, 1),
        dnsr_id: testDNSRecord[0],
        description: 'Null'
    },
    {
        domain_id: 'd23e3d82-0b1c-45f7-ae87-1bc69bf19c7f',
        domain_name: 'etu.ru',
        id_ip: testIpAddresses.slice(0, 1),
        dnsr_id: testDNSRecord[1],
        description: 'Null'
    },
];

export const testServerCluster: ServerCluster[] = [
    {
        cluster_id: 'b940420d-580a-4d6f-95c5-43cd7e6c3b68',
        cluster_name: 'Cluster-1'
    },
    {
        cluster_id: '6e6a6376-8ea4-4533-949b-ec6c202f3a94',
        cluster_name: 'Cluster-2'
    },
    {
        cluster_id: '89b3db8b-3ef9-4e4f-876d-5eb78d99e128',
        cluster_name: 'Cluster-3'
    },
];

export const testSoftwareTypes: SoftwareType[] = [
    {
        type_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        software_type_name: 'Web Server',
        provider: 'Apache',
        documentation: 'docs.apache.org',
        is_reusable: true
    },
    {
        type_id: '550e8400-e29b-41d4-a716-446655440000',
        software_type_name: 'Database',
        provider: 'Oracle',
        documentation: 'docs.oracle.com',
        is_reusable: false
    },
];

export const testSoftware: Software[] = [
    {
        software_id: 'e989170c-8508-436d-9c2c-75f82616194e',
        software_name: 'Apache HTTPD',
        description: 'Web server',
        type_id: testSoftwareTypes[0]
    },
    {
        software_id: '7f471eeb-6b0a-4720-b6b5-2dd482712481',
        software_name: 'MySQL',
        description: 'null',
        type_id: testSoftwareTypes[1]
    },
];

export const testSoftwareVersion: SoftwareVersion[] = [
    {
        softwareversion_id: 'e927fbb4-ac00-4a5d-aa49-90b7d81ebd76',
        version_name: '2.4.41',
        software_id: testSoftware.slice(0)
    },
    {
        softwareversion_id: '4b7a2412-a48b-496b-8c23-0cba80a52de9',
        version_name: '14.*.*',
        software_id: testSoftware.slice(0, 1)
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
        type_id: 'cpu-type',
        type_name: 'CPU',
        description: 'Processor',
        is_reusable: false,
        MU_id: testHardwareMeasurementUnit.slice(0)
    },
    {
        type_id: 'ram-type',
        type_name: 'RAM',
        description: 'Memory',
        is_reusable: true,
        MU_id: testHardwareMeasurementUnit.slice(0, 1)
    },
];

export const testHardware: Hardware[] = [
    {
        hardware_id: '6b93750d-3480-4222-b623-7b9604d059e5',
        hardware_name: 'CPU Xeon',
        value: 2.4,
        description: 'Процессор сервера',
        type_id: testHardwareType[0]
    },
    {
        hardware_id: 'b9538b3b-813a-42bc-9ef6-3f1ac44b28ea',
        hardware_name: 'RAM DDR4',
        value: 32,
        description: 'Оперативная память',
        type_id: testHardwareType[1]
    },
];

export const testSystemType: SystemType[] = [
    {
        systemtype_id: 'f9545562-4a09-47fd-ba38-cc8c2cd9ac53',
        type: 'БД'
    },
    {
        systemtype_id: 'faf7a14c-8c6f-46ff-9151-1f94686836e1',
        type: 'Приложение'
    },
    {
        systemtype_id: '2072e6ed-a236-44fa-b136-dea524fa2e48',
        type: 'Сетевое хранилище'
    },
];

export const testSystemConnection: SystemConnection[] = [
    {
        systemconnection_id: '46d0ac36-d03f-4732-98f9-c88b84f91d42',
        description: 'MySQL connection'
    },
    {
        systemconnection_id: '34713edb-e74c-4edd-9b3e-6050c765d3be',
        description: 'null'
    },
];

export const testSystemName: SystemName[] = [
    {
        system_id: '550e8400-e29b-41d4-a716-446655440000',
        system_name: 'System_1',
        description: 'null',
        softwareversion_id: testSoftwareVersion.slice(0),
        id_port: testNetworkPorts.slice(0, 1),
        group_id: testGroups.slice(0),
        systemtype_id: testSystemType[0],
        systemconnection_id: testSystemConnection.slice(0)
    },
    {
        system_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        system_name: 'System_2',
        description: 'null',
        softwareversion_id: testSoftwareVersion.slice(0),
        id_port: testNetworkPorts.slice(0),
        group_id: testGroups.slice(1),
        systemtype_id: testSystemType[0],
        systemconnection_id: testSystemConnection.slice(0)
    },
];

export const testServerUnits: ServerUnit[] = [
    {
        server_type: 'virtual',
        server_name: 'Личный кабинет',
        server_id: 'personal-account',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[0],
        system_id: testSystemName.slice(0),
        domain_id: testDomains[0],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(0),
        hardware_id: testHardware.slice(0, 1),
        dnsr_id: testDNSRecord.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Посещаемость',
        server_id: 'attendance',
        description: 'null',
        id_ip: testIpAddresses.slice(1),
        cluster_id: testServerCluster[0],
        system_id: testSystemName.slice(0),
        domain_id: testDomains[1],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(0),
        dnsr_id: testDNSRecord.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Медиатека',
        server_id: 'media-library',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[1],
        system_id: testSystemName.slice(0),
        domain_id: testDomains[2],
        group_id: testGroups.slice(0),
        software_id: testSoftware.slice(1),
        hardware_id: testHardware.slice(0, 1),
        dnsr_id: testDNSRecord.slice(1)
    },
    {
        server_type: 'virtual',
        server_name: 'Библиотека',
        server_id: 'library',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[1],
        system_id: testSystemName.slice(1),
        domain_id: testDomains[3],
        group_id: testGroups.slice(1),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(1),
        dnsr_id: testDNSRecord.slice(1)
    },
    {
        server_type: 'virtual',
        server_name: 'Moodle',
        server_id: 'moodle',
        description: 'null',
        id_ip: testIpAddresses.slice(0),
        cluster_id: testServerCluster[2],
        system_id: testSystemName.slice(1),
        domain_id: testDomains[4],
        group_id: testGroups.slice(1),
        software_id: testSoftware.slice(0),
        hardware_id: testHardware.slice(0),
        dnsr_id: testDNSRecord.slice(0, 1)
    },
    {
        server_type: 'virtual',
        server_name: 'Лэти',
        server_id: 'leti',
        description: 'null',
        id_ip: testIpAddresses.slice(1),
        cluster_id: testServerCluster[2],
        system_id: testSystemName.slice(1),
        domain_id: testDomains[5],
        group_id: testGroups.slice(0, 1),
        software_id: testSoftware.slice(0, 1),
        hardware_id: testHardware.slice(0, 1),
        dnsr_id: testDNSRecord.slice(0, 1)
    },
];
