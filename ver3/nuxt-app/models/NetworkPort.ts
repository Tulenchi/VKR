import type {NetworkProtocol} from "~/models/NetworkProtocol";
type int = number;

export interface NetworkPort {
    port: int; // primary key
    description: string;
    id_network: NetworkProtocol[]; // foreign key
}