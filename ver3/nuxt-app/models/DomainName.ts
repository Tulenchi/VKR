import type {IpAddress} from "~/models/IpAddress";
type uuid = string;

export interface DomainName {
    domain_id: uuid;
    domain_name: string;
    id_ip: IpAddress[];
    description: string;
}