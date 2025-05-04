import type {server_domain} from "~/models/server_domain";
import type {DNSRecord} from "~/models/DNSRecord";
import type {domain_ip} from "~/models/domain_ip";
type uuid = string;

export interface DomainName {
    domain_id: uuid;
    domain_name: string;
    dnsr_id: DNSRecord[];
    description: string;
    server_domain: server_domain;
    domain_ip: domain_ip;
}