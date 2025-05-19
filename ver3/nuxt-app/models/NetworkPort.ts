import type {NetworkProtocol} from "~/models/NetworkProtocol";
type int = number;
type uuid = string;

export interface NetworkPort {
    id_port: uuid;
    port: int; // primary key
    description: string;
    id_network: NetworkProtocol[];
}