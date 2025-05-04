import type {SystemName} from "~/models/SystemName";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
type uuid = string;

export interface system_sversion {
    system_sversion_id: uuid;
    softwareversion_id: SoftwareVersion[];
    system_id: SystemName[];
    description: string;
}