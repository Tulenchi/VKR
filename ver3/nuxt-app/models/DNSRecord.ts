import type {DNS} from "~/models/DNS";
import type {server_DNSRecord} from "~/models/server_DNSRecord";
type uuid = string;

export interface DNSRecord {
    dnsr_id: uuid; // primary key
    dns_id: DNS[];
    type: string;
    value: string;
}