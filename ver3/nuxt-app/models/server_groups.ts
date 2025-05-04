import type {ServerUnit} from "~/models/ServerUnit";
import type {Group} from "~/models/Group";
type uuid = string;

export interface server_groups {
    server_groups_id: uuid;
    server_id: ServerUnit[];
    group_id: Group[];
}