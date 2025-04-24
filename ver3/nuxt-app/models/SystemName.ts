import type {NetworkPort} from "~/models/NetworkPort";
import type {Software} from "~/models/Software";
import type {ServerUnit} from "~/models/ServerUnit";
import type {Group} from "~/models/Group";
type uuid = string;

export interface SystemName {
    system_id: uuid; // primary key
    system_name: string;
    type: string;
    description: string;
    software_id: Software[]; // foreign key
    port: NetworkPort[]; // foreign key
    group_id: Group[]; // foreign key
}