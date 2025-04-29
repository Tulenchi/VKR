import type {NetworkPort} from "~/models/NetworkPort";
import type {Software} from "~/models/Software";
import type {Group} from "~/models/Group";
import type {SystemType} from "~/models/SystemType";
import type {SystemConnection} from "~/models/SystemConnection";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
type uuid = string;

export interface SystemName {
    system_id: uuid; // primary key
    system_name: string;
    description: string;
    softwareversion_id: SoftwareVersion[]; // foreign key
    id_port: NetworkPort[]; // foreign key
    group_id: Group[]; // foreign key
    systemtype_id: SystemType;
    systemconnection_id: SystemConnection[];
}