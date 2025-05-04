import type {SystemName} from "~/models/SystemName";
import type {Group} from "~/models/Group";
type uuid = string;

export interface system_groups {
    system_groups_id: uuid;
    system_id: SystemName[];
    group_id: Group[];
    description: string;
}