import type {NetworkPort} from "~/models/NetworkPort";
import type {SystemName} from "~/models/SystemName";
type uuid = string;

export interface system_ports {
    system_ports_id: uuid;
    id_port: NetworkPort[];
    system_id: SystemName[];
    description: string;
}