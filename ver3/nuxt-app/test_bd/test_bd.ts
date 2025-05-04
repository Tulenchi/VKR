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
import type { DNS } from '@/models/DNS';
import type { DNSRecord } from '@/models/DNSRecord';
import type { htype_hMU } from '@/models/htype_hMU';
import type { domain_ip } from '@/models/domain_ip';
import type { port_protocol } from '@/models/port_protocol';
import type { server_hardware } from '@/models/server_hardware';
import type { server_sversion } from '@/models/server_sversion';
import type { server_domain } from '@/models/server_domain';
import type { server_groups } from '@/models/server_groups';
import type { server_DNSRecord } from '@/models/server_DNSRecord';
import type { system_groups } from '@/models/system_groups';
import type { system_ports } from '@/models/system_ports';
import type { system_sversion } from '@/models/system_sversion';
import type { users_groups } from '@/models/users_groups';

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
        user_id: testUser.slice(0)
    },
    {
        group_id: 'e5f6a7b8-c9d0-1234-efgh-567890123456',
        identifier: 'group-2',
        group_name: 'Вторая группа',
        description: 'Тестовая группа номер 2',
        user_id: testUser.slice(0, 1)
    },
    {
        group_id: 'e87f11b0-ef72-46ea-87d1-3bb90b4069d4',
        identifier: 'group-3',
        group_name: 'Третья группа',
        description: 'Тестовая группа номер 3',
        user_id: testUser.slice(0)
    }
];

export const testIpAddressType: IpAddressType[] = [
    {
        id_type: '9f9cbc42-bd62-4aae-998d-265026a0e980',
        name: 'internal'
    },
    {
        id_type: 'ae3f7e43-124b-462a-82ca-1de7e7056a34',
        name: 'external'
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
        id_type: testIpAddressType[0]
    },
    {
        ip: 'fd00::1',
        id_ip: '068ccdfc-9ba1-47a6-b1c9-02e67bbb9801',
        version: 'IpV6',
        description: 'null',
        id_port: testNetworkPorts[1],
        id_type: testIpAddressType[1]
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
        dnsr_id: testDNSRecord.slice(0),
        description: 'Null',
        id_ip: testIpAddresses.slice(0)
    },
    {
        domain_id: 'dee72749-8c7b-4c53-ba70-8dae109b2909',
        domain_name: 'digital.etu.ru',
        dnsr_id: testDNSRecord.slice(0, 1),
        description: 'Null',
        id_ip: testIpAddresses.slice(0)
    },
    {
        domain_id: '5c2c0f8f-62ff-44be-babc-fa9eb293f255',
        domain_name: 'media.etu.ru',
        dnsr_id: testDNSRecord.slice(1),
        description: 'Null',
        id_ip: testIpAddresses.slice(0)
    },
    {
        domain_id: '62d3dbe0-907d-4a50-825b-28ad5d91b0b9',
        domain_name: 'library.etu.ru',
        dnsr_id: testDNSRecord.slice(1),
        description: 'Null',
        id_ip: testIpAddresses.slice(0, 1)
    },
    {
        domain_id: '027361cf-cba0-4349-b352-b0927856a653',
        domain_name: 'vec.etu.ru',
        dnsr_id: testDNSRecord.slice(0),
        description: 'Null',
        id_ip: testIpAddresses.slice(0, 1)
    },
    {
        domain_id: 'd23e3d82-0b1c-45f7-ae87-1bc69bf19c7f',
        domain_name: 'etu.ru',
        dnsr_id: testDNSRecord.slice(0, 1),
        description: 'Null',
        id_ip: testIpAddresses.slice(1, 2)
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
        softwaretype_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        type_id: 'c4886f1d-3615-4fae-9c16-ab5468bf5d66',
        software_type_name: 'Web Server',
        provider: 'Apache',
        documentation: 'docs.apache.org',
        is_reusable: true
    },
    {
        softwaretype_id: '550e8400-e29b-41d4-a716-446655440000',
        type_id: 'df876b6c-acd7-49f9-a1d8-3ad0361c8603',
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
        softwaretype_id: testSoftwareTypes[0]
    },
    {
        software_id: '7f471eeb-6b0a-4720-b6b5-2dd482712481',
        software_name: 'MySQL',
        description: 'null',
        softwaretype_id: testSoftwareTypes[1]
    },
];

export const testSoftwareVersion: SoftwareVersion[] = [
    {
        softwareversion_id: 'e927fbb4-ac00-4a5d-aa49-90b7d81ebd76',
        version_name: '2.4.41',
        software_id: testSoftware[0]
    },
    {
        softwareversion_id: '4b7a2412-a48b-496b-8c23-0cba80a52de9',
        version_name: '14.*.*',
        software_id: testSoftware[1]
    },
];

export const testHardwareMeasurementUnit: HardwareMeasurementUnit[] = [
    {
        hardwareMU_id: '256b23f1-5ff8-4ea6-a500-bf44ad49565f',
        MU_id: 'hardwaremeas-1',
        singular_name: 'Ядро',
        small_plural_name: 'Ядра',
        plural_name: 'Ядер'
    },
    {
        hardwareMU_id: 'bf3ecb41-c80b-4ee8-8acf-7a8d387f5c50',
        MU_id: 'hardwaremeas-2',
        singular_name: 'ГБ',
        small_plural_name: 'ГБ',
        plural_name: 'ГБ'
    },
];

export const testHardwareType: HardwareType[] = [
    {
        hardwaretype_id: 'd293eb75-9c88-4d06-885d-e5b689a326e6',
        type_id: 'cpu-type',
        type_name: 'CPU',
        description: 'Processor',
        is_reusable: false,
        hardwareMU_id: testHardwareMeasurementUnit.slice(0)
    },
    {
        hardwaretype_id: '3de71280-a8e3-4a63-966a-49d79b522983',
        type_id: 'ram-type',
        type_name: 'RAM',
        description: 'Memory',
        is_reusable: true,
        hardwareMU_id: testHardwareMeasurementUnit.slice(0, 1)
    },
];

export const testHardware: Hardware[] = [
    {
        hardware_id: '6b93750d-3480-4222-b623-7b9604d059e5',
        hardware_name: 'CPU Xeon',
        value: 2.4,
        description: 'Процессор сервера',
        hardwaretype_id: testHardwareType[0]
    },
    {
        hardware_id: 'b9538b3b-813a-42bc-9ef6-3f1ac44b28ea',
        hardware_name: 'RAM DDR4',
        value: 32,
        description: 'Оперативная память',
        hardwaretype_id: testHardwareType[1]
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

export const testSystemName: SystemName[] = [
    {
        system_id: '550e8400-e29b-41d4-a716-446655440000',
        system_name: 'System_1',
        description: 'null',
        systemtype_id: testSystemType[0],
        ports_id: testNetworkPorts.slice(0),
        sversion_id: testSoftwareVersion.slice(0),
        group_id: testGroups.slice(0)
    },
    {
        system_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        system_name: 'System_2',
        description: 'null',
        systemtype_id: testSystemType[1],
        ports_id: testNetworkPorts.slice(0),
        sversion_id: testSoftwareVersion.slice(0),
        group_id: testGroups.slice(0)
    },
    {
        system_id: '489ec96a-d9f5-451f-b83e-2d0294f5e5b2',
        system_name: 'System_3',
        description: 'null',
        systemtype_id: testSystemType[1],
        ports_id: testNetworkPorts.slice(1, 2),
        sversion_id: testSoftwareVersion.slice(1, 2),
        group_id: testGroups.slice(1, 2)
    },
    {
        system_id: '4c859463-cffe-4fef-ab29-40c28f239641',
        system_name: 'System_4',
        description: 'null',
        systemtype_id: testSystemType[0],
        ports_id: testNetworkPorts.slice(0, 1),
        sversion_id: testSoftwareVersion.slice(0, 1),
        group_id: testGroups.slice(0, 1)
    },
    {
        system_id: '4d4e1e90-3806-44fc-804a-b62d4f7e8adf',
        system_name: 'System_5',
        description: 'null',
        systemtype_id: testSystemType[0],
        ports_id: testNetworkPorts.slice(0),
        sversion_id: testSoftwareVersion.slice(0),
        group_id: testGroups.slice(0)
    },
    {
        system_id: '48a83304-0863-4cf7-b649-286b10c605c1',
        system_name: 'System_6',
        description: 'null',
        systemtype_id: testSystemType[1],
        ports_id: testNetworkPorts.slice(0, 1),
        sversion_id: testSoftwareVersion.slice(0, 1),
        group_id: testGroups.slice(0, 1)
    },
    {
        system_id: 'c3f41962-ce62-48ee-bb68-47deaeb8b3f5',
        system_name: 'System_7',
        description: 'null',
        systemtype_id: testSystemType[1],
        ports_id: testNetworkPorts.slice(1, 2),
        sversion_id: testSoftwareVersion.slice(1, 2),
        group_id: testGroups.slice(1, 2)
    }
];

export const testServerUnits: ServerUnit[] = [
    {
        server_type: 'virtual',
        server_name: 'Личный кабинет',
        server_id: 'edf3fbf9-a770-41fc-9b75-b85037955cde',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[0],
        system_id: testSystemName.slice(0, 2),
        id_port: testNetworkPorts.slice(0),
        domain_id: testDomains.slice(0, 1),
        DNSRecord_id: testDNSRecord.slice(0),
        sversion_id: testSoftwareVersion.slice(0),
        hardware_id: testHardware.slice(0),
        group_id: testGroups.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Посещаемость',
        server_id: '1a782b0c-bef4-4576-ae5a-29f059913e17',
        description: 'null',
        id_ip: testIpAddresses.slice(1),
        cluster_id: testServerCluster[0],
        system_id: testSystemName.slice(2, 3),
        id_port: testNetworkPorts.slice(0, 1),
        domain_id: testDomains.slice(1, 2),
        DNSRecord_id: testDNSRecord.slice(0),
        sversion_id: testSoftwareVersion.slice(0),
        hardware_id: testHardware.slice(0),
        group_id: testGroups.slice(0)
    },
    {
        server_type: 'virtual',
        server_name: 'Медиатека',
        server_id: '26511abf-8f55-49e8-aa47-3c261c19a2a8',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[1],
        system_id: testSystemName.slice(3, 4),
        id_port: testNetworkPorts.slice(0),
        domain_id: testDomains.slice(2, 3),
        DNSRecord_id: testDNSRecord.slice(0, 1),
        sversion_id: testSoftwareVersion.slice(0, 1),
        hardware_id: testHardware.slice(0, 1),
        group_id: testGroups.slice(0, 1)
    },
    {
        server_type: 'virtual',
        server_name: 'Библиотека',
        server_id: '8cd62d46-ab49-4cf1-8f7b-bb8313a13ae6',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[1],
        system_id: testSystemName.slice(4, 5),
        id_port: testNetworkPorts.slice(0, 1),
        domain_id: testDomains.slice(3, 4),
        DNSRecord_id: testDNSRecord.slice(0, 1),
        sversion_id: testSoftwareVersion.slice(0, 1),
        hardware_id: testHardware.slice(0, 1),
        group_id: testGroups.slice(1, 3)
    },
    {
        server_type: 'virtual',
        server_name: 'Moodle',
        server_id: 'a4e7f16d-ed8d-40c4-8f2e-e49fac2abe30',
        description: 'null',
        id_ip: testIpAddresses.slice(0),
        cluster_id: testServerCluster[2],
        system_id: testSystemName.slice(5, 6),
        id_port: testNetworkPorts.slice(0),
        domain_id: testDomains.slice(4, 5),
        DNSRecord_id: testDNSRecord.slice(1, 2),
        sversion_id: testSoftwareVersion.slice(1, 2),
        hardware_id: testHardware.slice(1, 2),
        group_id: testGroups.slice(2, 3)
    },
    {
        server_type: 'virtual',
        server_name: 'Лэти',
        server_id: 'a8960cc3-173e-4326-bc53-d2d18d9030a9',
        description: 'null',
        id_ip: testIpAddresses.slice(1),
        cluster_id: testServerCluster[2],
        system_id: testSystemName.slice(6, 7),
        id_port: testNetworkPorts.slice(0, 1),
        domain_id: testDomains.slice(5, 6),
        DNSRecord_id: testDNSRecord.slice(1, 2),
        sversion_id: testSoftwareVersion.slice(1, 2),
        hardware_id: testHardware.slice(1, 2),
        group_id: testGroups.slice(1, 2)
    },
];
