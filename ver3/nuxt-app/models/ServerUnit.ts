import type {ServerCluster} from "~/models/ServerCluster";
import type {IpAddress} from "~/models/IpAddress";
import type {Hardware} from "~/models/Hardware";
import type {Software} from "~/models/Software";
import type {SystemName} from "~/models/SystemName";
import type {DomainName} from "~/models/DomainName";
import type {Group} from "~/models/Group";
import type {DNSRecord} from "~/models/DNSRecord";
type slug = string;

export interface ServerUnit {
    server_type: string;
    server_name: string;
    server_id: slug; // primary key
    description: string;
    id_ip: IpAddress[]; // foreign key
    cluster_id: ServerCluster; // foreign key
    system_id: SystemName[]; // foreign key
    domain_id: DomainName; // foreign key
    group_id: Group[]; // foreign key
    software_id: Software[]; // foreign key
    hardware_id: Hardware[]; // foreign key
    dnsr_id: DNSRecord[];
}
