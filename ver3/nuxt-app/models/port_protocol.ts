import type {NetworkPort} from "~/models/NetworkPort";
import type {NetworkProtocol} from "~/models/NetworkProtocol";
type uuid = string;

export interface port_protocol {
    port_protocol_id: uuid;
    id_port: NetworkPort[];
    id_network: NetworkProtocol[];
}