import type {IpAddressType} from "~/models/IpAddressType";
import type {NetworkPort} from "~/models/NetworkPort";
type cidr = string;

export interface IpAddress {
    ip: cidr; // primary key
    version: string;
    description: string;
    port: NetworkPort; // foreign key
    identifier: IpAddressType; // foreign key
}
