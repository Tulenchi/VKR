import type {ServerUnit} from "~/models/ServerUnit";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
type uuid = string;

export interface server_sversion {
    server_sversion_id: uuid;
    server_id: ServerUnit[];
    softwareversion_id: SoftwareVersion[];
}