import type {IpAddress} from "~/models/IpAddress";

export interface DomainName {
    domain_name: string;
    ip: IpAddress[];
}