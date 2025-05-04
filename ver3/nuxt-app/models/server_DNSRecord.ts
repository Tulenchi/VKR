import type {ServerUnit} from "~/models/ServerUnit";
import type {DNSRecord} from "~/models/DNSRecord";
type uuid = string;

export interface server_DNSRecord {
    server_DNSRecord_id: uuid;
    server_id: ServerUnit[];
    dnsr_id: DNSRecord[];
}