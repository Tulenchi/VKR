import type {IpAddress} from "~/models/IpAddress";
import type {DNSRecord} from "~/models/DNSRecord";
type uuid = string;

export interface DomainName {
    domain_id: uuid;
    domain_name: string;
    id_ip: IpAddress[];
    dnsr_id: DNSRecord;
    description: string;
}