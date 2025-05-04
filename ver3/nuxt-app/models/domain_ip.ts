import type {DomainName} from "~/models/DomainName";
import type {IpAddress} from "~/models/IpAddress";
type uuid = string;

export interface domain_ip {
    domain_ip_id: uuid;
    domain_id: DomainName[];
    id_ip: IpAddress[];
}