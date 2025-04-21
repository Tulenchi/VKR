import type {DomainName} from "~/models/DomainName";
import type {IpAddressType} from "~/models/IpAddressType";
import type {ServerUnit} from "~/models/ServerUnit";
import type {NetworkPort} from "~/models/NetworkPort";

export interface IpAddress {
    id: string;
    name: string;
    version: string;
    description: string | null;
    type: IpAddressType;
    domain_names: DomainName[];
}
