import type {ServerUnit} from "~/models/ServerUnit";
import type {DomainName} from "~/models/DomainName";
type uuid = string;

export interface server_domain {
    server_domain_id: uuid;
    server_id: ServerUnit[];
    domain_id: DomainName[];
}