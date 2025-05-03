import type {DNS} from "~/models/DNS";
type uuid = string;

export interface DNSRecord {
    dnsr_id: uuid; // primary key
    dns_id: DNS[];
    type: string;
    value: string;
}