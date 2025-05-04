import type {User} from "~/models/User";
import type {Group} from "~/models/Group";
type uuid = string;

export interface users_groups {
    users_groups_id: uuid;
    users_id: User[];
    group_id: Group[];
}