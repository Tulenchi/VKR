import type {SystemType} from "~/models/SystemType";
import type {NetworkPort} from "~/models/NetworkPort";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
import type {Group} from "~/models/Group";
type uuid = string;

export interface SystemName {
    system_id: uuid; // primary key
    system_name: string;
    description: string;
    systemtype_id: SystemType;
    ports_id: NetworkPort[];
    sversion_id: SoftwareVersion[];
    group_id: Group[];
}