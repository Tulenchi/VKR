import type {ServerCluster} from "~/models/ServerCluster";
import type {IpAddress} from "~/models/IpAddress";
import type {Hardware} from "~/models/Hardware";
import type {Software} from "~/models/Software";
import type {SystemName} from "~/models/SystemName";
import type {DomainName} from "~/models/DomainName";
type cidr = string;

export interface ServerUnit {
    server_name: string;
    ip: cidr;
    domain_name: string;
    group_name: string;
    software_name: string;
    hardware_name: string;
    id: string;
    description: string | null;
    server_type: string;
    cluster: ServerCluster;
    ip_addresses: IpAddress[];
    hardware: Hardware[];
    software: Software[];
    systemName: SystemName;
    domainName: DomainName;
}
