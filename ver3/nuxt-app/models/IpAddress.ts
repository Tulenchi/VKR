import type {IpAddressType} from "~/models/IpAddressType";
import type {NetworkPort} from "~/models/NetworkPort";
import type {domain_ip} from "~/models/domain_ip";
type cidr = string;
type uuid = string;

export interface IpAddress {
    ip: cidr; // primary key
    id_ip: uuid; // primary key
    version: string;
    description: string;
    id_port: NetworkPort; // foreign key
    id_type: IpAddressType; // foreign key
    domain_ip: domain_ip;
}
