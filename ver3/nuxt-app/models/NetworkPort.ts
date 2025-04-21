import type {NetworkProtocol} from "~/models/NetworkProtocol";
import type {IpAddress} from "~/models/IpAddress";

export interface NetworkPort {
    id: string;
    port: number;
    description: string | null;
    protocol: NetworkProtocol;
}