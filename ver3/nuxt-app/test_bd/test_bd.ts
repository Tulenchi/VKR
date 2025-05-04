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

export const testusers_groups: users_groups[] = [];
export const testhtype_hMU: htype_hMU[] = [];
export const testdomain_ip: domain_ip[] = [];
export const testport_protocol: port_protocol[] = [];
export const testserver_hardware: server_hardware[] = [];
export const testserver_sversion: server_sversion[] = [];
export const testserver_domain: server_domain[] = [];
export const testserver_groups: server_groups[] = [];
export const testserver_DNSRecord: server_DNSRecord[] = [];
export const testsystem_groups: system_groups[] = [];
export const testsystem_ports: system_ports[] = [];
export const testsystem_sversion: system_sversion[] = [];
export const testUser: User[] = [];
export const testGroups: Group[] = [];
export const testServerUnits: ServerUnit[] = [];
export const testSystemName: SystemName[] = [];
export const testNetworkPorts: NetworkPort[] = [];
export const testSoftwareVersion: SoftwareVersion[] = [];
export const testDomains: DomainName[] = [];
export const testHardware: Hardware[] = [];
export const testHardwareMeasurementUnit: HardwareMeasurementUnit[] = [];
export const testHardwareType: HardwareType[] = [];
export const testIpAddressType: IpAddressType[] = [];
export const testIpAddresses: IpAddress[] = [];
export const testNetworkProtocol: NetworkProtocol[] = [];
export const testServerCluster: ServerCluster[] = [];
export const testSoftware: Software[] = [];
export const testSoftwareTypes: SoftwareType[] = [];
export const testSystemType: SystemType[] = [];
export const testDNS: DNS[] = [];
export const testDNSRecord: DNSRecord[] = [];

testUser.push(
    {
        user_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        user_name: 'Пользователь №1',
        users_groups: testusers_groups[0]
    },
    {
        user_id: 'b2c3d4e5-f6a7-8901-bcde-f23456789012',
        user_name: 'Пользователь №2',
        users_groups: testusers_groups[1]
    },
    {
        user_id: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
        user_name: 'Пользователь №3',
        users_groups: testusers_groups[2]
    }
);

testGroups.push(
    {
        group_id: 'd4e5f6a7-b8c9-0123-defg-456789012345',
        identifier: 'group-1',
        group_name: 'Первая группа',
        description: 'Тестовая группа номер 1',
        users_groups: testusers_groups[0],
        server_groups: testserver_groups[0],
        system_groups: testsystem_groups[0]
    },
    {
        group_id: 'e5f6a7b8-c9d0-1234-efgh-567890123456',
        identifier: 'group-2',
        group_name: 'Вторая группа',
        description: 'Тестовая группа номер 2',
        users_groups: testusers_groups[1],
        server_groups: testserver_groups[1],
        system_groups: testsystem_groups[1]
    },
    {
        group_id: 'e87f11b0-ef72-46ea-87d1-3bb90b4069d4',
        identifier: 'group-3',
        group_name: 'Третья группа',
        description: 'Тестовая группа номер 3',
        users_groups: testusers_groups[2],
        server_groups: testserver_groups[2],
        system_groups: testsystem_groups[2]
    }
);

testIpAddressType.push(
    {
        id_type: '9f9cbc42-bd62-4aae-998d-265026a0e980',
        name: 'internal'
    },
    {
        id_type: 'ae3f7e43-124b-462a-82ca-1de7e7056a34',
        name: 'external'
    },
);

testNetworkProtocol.push(
    {
        network_type: 'HTTP',
        id_network: 'e97c2b14-0160-4cd1-88e8-22754add46a5',
        parent_id: null,
        port: null,
        port_protocol: testport_protocol[0]
    },
    {
        network_type: 'HTTPS',
        id_network: 'a0cb0f61-f6aa-43cf-8965-fe6f2df60b8e',
        parent_id: null,
        port: null,
        port_protocol: testport_protocol[1]
    },
);

testNetworkPorts.push(
    {
        id_port: 'ffdc508d-54d5-4bcf-b8bf-5729ac89486e',
        port: 80,
        description: 'null',
        port_protocol: testport_protocol[0],
        system_ports: testsystem_ports[0]
    },
    {
        id_port: '49b0c36d-c6a8-432c-ad17-5d3730cb8c56',
        port: 8080,
        description: 'null',
        port_protocol: testport_protocol[1],
        system_ports: testsystem_ports[1]
    },
);

testIpAddresses.push(
    {
        ip: '10.136.2.40',
        id_ip: 'efae8aa7-a1e3-4eee-b140-db6debb44856',
        version: 'IpV4',
        description: 'Main server IP',
        id_port: testNetworkPorts[0],
        id_type: testIpAddressType[0],
        domain_ip: testdomain_ip[0]
    },
    {
        ip: 'fd00::1',
        id_ip: '068ccdfc-9ba1-47a6-b1c9-02e67bbb9801',
        version: 'IpV6',
        description: 'null',
        id_port: testNetworkPorts[1],
        id_type: testIpAddressType[1],
        domain_ip: testdomain_ip[1]
    },
);

testDNS.push(
    {
        dns_id: '7w3eebc99-9c0b-4ef8-bb6d-6bb9bd380a43',
        name: 'example1.com',
    },
    {
        dns_id: '8x4eebc99-9c0b-4ef8-bb6d-6bb9bd380a44',
        name: 'example2.com',
    },
);

testDNSRecord.push(
    {
        dnsr_id: '9y5eebc99-9c0b-4ef8-bb6d-6bb9bd380a45',
        dns_id: testDNS.slice(0),
        type: 'A',
        value: '192.168.1.1',
        server_DNSRecord: testserver_DNSRecord[0]
    },
    {
        dnsr_id: '0z6eebc99-9c0b-4ef8-bb6d-6bb9bd380a46',
        dns_id: testDNS.slice(0, 1),
        type: 'AAAA',
        value: '2001:db8::1',
        server_DNSRecord: testserver_DNSRecord[1]
    },
);

testDomains.push(
    {
        domain_id: '25c0b6aa-b603-47ba-9a0c-b3e4ca0e2ae2',
        domain_name: 'lk.etu.ru',
        dnsr_id: testDNSRecord.slice(0),
        description: 'Null',
        server_domain: testserver_domain[0],
        domain_ip: testdomain_ip[0]
    },
    {
        domain_id: 'dee72749-8c7b-4c53-ba70-8dae109b2909',
        domain_name: 'digital.etu.ru',
        dnsr_id: testDNSRecord.slice(0, 1),
        description: 'Null',
        server_domain: testserver_domain[1],
        domain_ip: testdomain_ip[1]
    },
    {
        domain_id: '5c2c0f8f-62ff-44be-babc-fa9eb293f255',
        domain_name: 'media.etu.ru',
        dnsr_id: testDNSRecord.slice(1),
        description: 'Null',
        server_domain: testserver_domain[0],
        domain_ip: testdomain_ip[0]
    },
    {
        domain_id: '62d3dbe0-907d-4a50-825b-28ad5d91b0b9',
        domain_name: 'library.etu.ru',
        dnsr_id: testDNSRecord.slice(1),
        description: 'Null',
        server_domain: testserver_domain[1],
        domain_ip: testdomain_ip[1]
    },
    {
        domain_id: '027361cf-cba0-4349-b352-b0927856a653',
        domain_name: 'vec.etu.ru',
        dnsr_id: testDNSRecord.slice(0),
        description: 'Null',
        server_domain: testserver_domain[0],
        domain_ip: testdomain_ip[0]
    },
    {
        domain_id: 'd23e3d82-0b1c-45f7-ae87-1bc69bf19c7f',
        domain_name: 'etu.ru',
        dnsr_id: testDNSRecord.slice(0, 1),
        description: 'Null',
        server_domain: testserver_domain[1],
        domain_ip: testdomain_ip[1]
    },
);

testServerCluster.push(
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
);

testSoftwareTypes.push(
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
);

testSoftware.push(
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
);

testSoftwareVersion.push(
    {
        softwareversion_id: 'e927fbb4-ac00-4a5d-aa49-90b7d81ebd76',
        version_name: '2.4.41',
        software_id: testSoftware[0],
        server_sversion: testserver_sversion[0],
        system_sversion: testsystem_sversion[0]
    },
    {
        softwareversion_id: '4b7a2412-a48b-496b-8c23-0cba80a52de9',
        version_name: '14.*.*',
        software_id: testSoftware[1],
        server_sversion: testserver_sversion[1],
        system_sversion: testsystem_sversion[1]
    },
);

testHardwareMeasurementUnit.push(
    {
        hardwareMU_id: '256b23f1-5ff8-4ea6-a500-bf44ad49565f',
        MU_id: 'hardwaremeas-1',
        singular_name: 'Ядро',
        small_plural_name: 'Ядра',
        plural_name: 'Ядер',
        htype_hMU: testhtype_hMU[0]
    },
    {
        hardwareMU_id: 'bf3ecb41-c80b-4ee8-8acf-7a8d387f5c50',
        MU_id: 'hardwaremeas-2',
        singular_name: 'ГБ',
        small_plural_name: 'ГБ',
        plural_name: 'ГБ',
        htype_hMU: testhtype_hMU[1]
    },
);

testHardwareType.push(
    {
        hardwaretype_id: 'd293eb75-9c88-4d06-885d-e5b689a326e6',
        type_id: 'cpu-type',
        type_name: 'CPU',
        description: 'Processor',
        is_reusable: false,
        htype_hMU: testhtype_hMU[0]
    },
    {
        hardwaretype_id: '3de71280-a8e3-4a63-966a-49d79b522983',
        type_id: 'ram-type',
        type_name: 'RAM',
        description: 'Memory',
        is_reusable: true,
        htype_hMU: testhtype_hMU[1]
    },
);

testHardware.push(
    {
        hardware_id: '6b93750d-3480-4222-b623-7b9604d059e5',
        hardware_name: 'CPU Xeon',
        value: 2.4,
        description: 'Процессор сервера',
        hardwaretype_id: testHardwareType[0],
        server_hardware: testserver_hardware[0]
    },
    {
        hardware_id: 'b9538b3b-813a-42bc-9ef6-3f1ac44b28ea',
        hardware_name: 'RAM DDR4',
        value: 32,
        description: 'Оперативная память',
        hardwaretype_id: testHardwareType[1],
        server_hardware: testserver_hardware[1]
    },
);

testSystemType.push(
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
);

testusers_groups.push(
    {
        users_groups_id: '43e6c89f-90ed-4e27-b804-42cd34ce920b',
        users_id: testUser.slice(0),
        group_id: testGroups.slice(0, 2)
    },
    {
        users_groups_id: '32ede4ad-f076-45fa-8f35-10ef4cdc5233',
        users_id: testUser.slice(0, 1),
        group_id: testGroups.slice()
    },
    {
        users_groups_id: 'aa3f0071-0dcf-4028-8484-836b8f5b65c6',
        users_id: testUser.slice(0, 2),
        group_id: testGroups.slice(1, 3)
    }
);

testport_protocol.push(
    {
        port_protocol_id: 'a893e19e-640f-4ce7-9cf8-e094d9a4d7c9',
        id_port: testNetworkPorts.slice(0),
        id_network: testNetworkProtocol.slice(0)
    },
    {
        port_protocol_id: '980de64c-a1c8-4eff-b7c9-66c8988c37c4',
        id_port: testNetworkPorts.slice(0, 1),
        id_network: testNetworkProtocol.slice(0, 1)
    },
);

testdomain_ip.push(
    {
        domain_ip_id: 'dfcadc3b-e62d-4ddf-8b0c-5a7b2832a407',
        domain_id: testDomains.slice(0, 3),
        id_ip: testIpAddresses.slice(0)
    },
    {
        domain_ip_id: '626cc925-1cc4-4fc2-aa6a-424b94d32f00',
        domain_id: testDomains.slice(3, 6),
        id_ip: testIpAddresses.slice(0, 1)
    },
);

testhtype_hMU.push(
    {
        htype_hMU_id: '6115203d-56b7-4efd-8366-ec571d26e8ba',
        hardwareMU_id: testHardwareMeasurementUnit.slice(0),
        hardwaretype_id: testHardwareType.slice(0)
    },
    {
        htype_hMU_id: '1f44b502-dcb3-4d68-82d8-732455639adb',
        hardwareMU_id: testHardwareMeasurementUnit.slice(0, 1),
        hardwaretype_id: testHardwareType.slice(0, 1)
    },
);

testsystem_groups.push(
    {
        system_groups_id: '826dcb4e-7e02-4dac-ba7c-d1af9c53da83',
        system_id: testSystemName.slice(0),
        group_id: testGroups.slice(0),
        description: 'null'
    },
    {
        system_groups_id: '16022270-dbc0-4176-971d-9588f59ef76b',
        system_id: testSystemName.slice(0, 1),
        group_id: testGroups.slice(0, 2),
        description: 'null'
    },
);

testsystem_ports.push(
    {
        system_ports_id: 'dfae2d8a-5993-4b24-9a16-320fc5e8d36d',
        id_port: testNetworkPorts.slice(0),
        system_id: testSystemName.slice(0),
        description: 'null'
    },
    {
        system_ports_id: '64ea9471-a295-499e-86e7-39fe78362f8d',
        id_port: testNetworkPorts.slice(0, 1),
        system_id: testSystemName.slice(0, 1),
        description: 'null'
    },
);

testsystem_sversion.push(
    {
        system_sversion_id: '32ff076e-4e92-420b-bed6-3d6aff282de1',
        softwareversion_id: testSoftwareVersion.slice(0),
        system_id: testSystemName.slice(0),
        description: 'null'
    },
    {
        system_sversion_id: '55340458-e79d-4036-afc0-255519760e1d',
        softwareversion_id: testSoftwareVersion.slice(0, 1),
        system_id: testSystemName.slice(0, 1),
        description: 'null'
    },
);

testserver_DNSRecord.push(
    {
        server_DNSRecord_id: '983beb5e-1327-4c82-9367-5d11121f315d',
        server_id: testServerUnits.slice(0),
        dnsr_id: testDNSRecord.slice(0)
    },
    {
        server_DNSRecord_id: 'd7fa6f3f-c88b-4162-b440-5d1e686a4d02',
        server_id: testServerUnits.slice(0, 1),
        dnsr_id: testDNSRecord.slice(0, 1)
    },
);

testserver_domain.push(
    {
        server_domain_id: '27ad64cf-d16e-4f89-8277-829c30a3a4a2',
        server_id: testServerUnits.slice(0),
        domain_id: testDomains.slice(0)
    },
    {
        server_domain_id: '1a6656e6-97c4-4bdd-a626-efa9bb84db72',
        server_id: testServerUnits.slice(0, 1),
        domain_id: testDomains.slice(0, 1)
    },
);

testserver_hardware.push(
    {
        server_hardware_id: '746d5a02-b504-4a2d-9146-139c3029cb0b',
        server_id: testServerUnits.slice(0),
        hardware_id: testHardware.slice(0)
    },
    {
        server_hardware_id: 'a3c98249-98df-4f18-a1a0-27563cc51d75',
        server_id: testServerUnits.slice(0, 1),
        hardware_id: testHardware.slice(0, 1)
    },
);

testserver_sversion.push(
    {
        server_sversion_id: 'e329572a-d586-4b64-8465-dc8d50220309',
        server_id: testServerUnits.slice(0),
        softwareversion_id: testSoftwareVersion.slice(0)
    },
    {
        server_sversion_id: '0ffaf858-f7db-45cb-b048-96ee0c921354',
        server_id: testServerUnits.slice(0, 1),
        softwareversion_id: testSoftwareVersion.slice(0, 1)
    },
);

testserver_groups.push(
    {
        server_groups_id: '67b731d5-3800-4875-bcc1-e5be19ec8ef6',
        server_id: testServerUnits.slice(0),
        group_id: testGroups.slice(0, 1)
    },
    {
        server_groups_id: 'e08c1493-746e-4837-a921-872abac42c87',
        server_id: testServerUnits.slice(0),
        group_id: testGroups.slice(0, 1)
    },
);

testSystemName.push(
    {
        system_id: '550e8400-e29b-41d4-a716-446655440000',
        system_name: 'System_1',
        description: 'null',
        systemtype_id: testSystemType[0],
        system_ports: testsystem_ports[0],
        system_sversion: testsystem_sversion[0],
        system_groups: testsystem_groups[0]
    },
    {
        system_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        system_name: 'System_2',
        description: 'null',
        systemtype_id: testSystemType[1],
        system_ports: testsystem_ports[1],
        system_sversion: testsystem_sversion[1],
        system_groups: testsystem_groups[1]
    },
    {
        system_id: '489ec96a-d9f5-451f-b83e-2d0294f5e5b2',
        system_name: 'System_3',
        description: 'null',
        systemtype_id: testSystemType[1],
        system_ports: testsystem_ports[1],
        system_sversion: testsystem_sversion[1],
        system_groups: testsystem_groups[1]
    },
    {
        system_id: '4c859463-cffe-4fef-ab29-40c28f239641',
        system_name: 'System_4',
        description: 'null',
        systemtype_id: testSystemType[0],
        system_ports: testsystem_ports[0],
        system_sversion: testsystem_sversion[0],
        system_groups: testsystem_groups[0]
    },
    {
        system_id: '4d4e1e90-3806-44fc-804a-b62d4f7e8adf',
        system_name: 'System_5',
        description: 'null',
        systemtype_id: testSystemType[0],
        system_ports: testsystem_ports[0],
        system_sversion: testsystem_sversion[0],
        system_groups: testsystem_groups[0]
    },
    {
        system_id: '48a83304-0863-4cf7-b649-286b10c605c1',
        system_name: 'System_6',
        description: 'null',
        systemtype_id: testSystemType[1],
        system_ports: testsystem_ports[1],
        system_sversion: testsystem_sversion[1],
        system_groups: testsystem_groups[1]
    },
    {
        system_id: 'c3f41962-ce62-48ee-bb68-47deaeb8b3f5',
        system_name: 'System_7',
        description: 'null',
        systemtype_id: testSystemType[1],
        system_ports: testsystem_ports[1],
        system_sversion: testsystem_sversion[1],
        system_groups: testsystem_groups[1]
    }
);

testServerUnits.push(
    {
        server_type: 'virtual',
        server_name: 'Личный кабинет',
        server_id: 'edf3fbf9-a770-41fc-9b75-b85037955cde',
        description: 'null',
        id_ip: testIpAddresses.slice(0, 1),
        cluster_id: testServerCluster[0],
        system_id: testSystemName.slice(0, 2),
        id_port: testNetworkPorts.slice(0),
        server_domain: testserver_domain[0],
        server_DNSRecord: testserver_DNSRecord[0],
        server_sversion: testserver_sversion[0],
        server_hardware: testserver_hardware[0]
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
        server_domain: testserver_domain[1],
        server_DNSRecord: testserver_DNSRecord[1],
        server_sversion: testserver_sversion[1],
        server_hardware: testserver_hardware[1]
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
        server_domain: testserver_domain[0],
        server_DNSRecord: testserver_DNSRecord[0],
        server_sversion: testserver_sversion[0],
        server_hardware: testserver_hardware[0]
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
        server_domain: testserver_domain[1],
        server_DNSRecord: testserver_DNSRecord[1],
        server_sversion: testserver_sversion[1],
        server_hardware: testserver_hardware[1]
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
        server_domain: testserver_domain[0],
        server_DNSRecord: testserver_DNSRecord[0],
        server_sversion: testserver_sversion[0],
        server_hardware: testserver_hardware[0]
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
        server_domain: testserver_domain[1],
        server_DNSRecord: testserver_DNSRecord[1],
        server_sversion: testserver_sversion[1],
        server_hardware: testserver_hardware[1]
    }
);
