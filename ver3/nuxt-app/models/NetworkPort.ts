import type {port_protocol} from "~/models/port_protocol";
import type {system_ports} from "~/models/system_ports";
import type {NetworkProtocol} from "~/models/NetworkProtocol";
type int = number;
type uuid = string;

export interface NetworkPort {
    id_port: uuid;
    port: int; // primary key
    description: string;
    id_network: NetworkProtocol[];
}