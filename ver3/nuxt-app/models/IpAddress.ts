import type {IpAddressType} from "~/models/IpAddressType";
import type {NetworkPort} from "~/models/NetworkPort";
type cidr = string;
type uuid = string;

export interface IpAddress {
    ip: cidr; // primary key
    id_ip: uuid; // primary key
    version: string;
    description: string;
    port: NetworkPort; // foreign key
    identifier: IpAddressType; // foreign key
}
