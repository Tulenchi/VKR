import type {port_protocol} from "~/models/port_protocol";
import type {system_ports} from "~/models/system_ports";
type int = number;
type uuid = string;

export interface NetworkPort {
    id_port: uuid;
    port: int; // primary key
    description: string;
    port_protocol: port_protocol;
    system_ports: system_ports;
}