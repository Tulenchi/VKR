import type {server_domain} from "~/models/server_domain";
import type {DNSRecord} from "~/models/DNSRecord";
import type {domain_ip} from "~/models/domain_ip";
import type {IpAddress} from "~/models/IpAddress";
type uuid = string;

export interface DomainName {
    domain_id: uuid;
    domain_name: string;
    dnsr_id: DNSRecord[];
    description: string;
    id_ip: IpAddress[];
}