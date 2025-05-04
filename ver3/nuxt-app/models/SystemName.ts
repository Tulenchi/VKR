import type {system_groups} from "~/models/system_groups";
import type {SystemType} from "~/models/SystemType";
import type {system_ports} from "~/models/system_ports";
import type {system_sversion} from "~/models/system_sversion";
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