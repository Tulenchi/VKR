import type {ServerUnit} from "~/models/ServerUnit";
import type {Hardware} from "~/models/Hardware";
type uuid = string;

export interface server_hardware {
    server_hardware_id: uuid;
    server_id: ServerUnit[];
    hardware_id: Hardware[];
}