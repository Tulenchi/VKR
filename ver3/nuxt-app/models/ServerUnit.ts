import type {ServerCluster} from "~/models/ServerCluster";
import type {IpAddress} from "~/models/IpAddress";
import type {NetworkPort} from "~/models/NetworkPort";
import type {SystemName} from "~/models/SystemName";
import type {server_domain} from "~/models/server_domain";
import type {server_DNSRecord} from "~/models/server_DNSRecord";
import type {server_sversion} from "~/models/server_sversion";
import type {server_hardware} from "~/models/server_hardware";
import type {DomainName} from "~/models/DomainName";
import type {DNSRecord} from "~/models/DNSRecord";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
import type {Hardware} from "~/models/Hardware";
import type {Group} from "~/models/Group";
type slug = string;

export interface ServerUnit {
    server_type: string;
    server_name: string;
    server_id: slug; // primary key
    description: string;
    id_ip: IpAddress[]; // foreign key
    cluster_id: ServerCluster; // foreign key
    system_id: SystemName[]; // foreign key
    id_port: NetworkPort[]; // foreign key
    domain_id: DomainName[]; // foreign key
    DNSRecord_id: DNSRecord[];
    sversion_id: SoftwareVersion[];
    hardware_id: Hardware[];
    group_id: Group[];
}
