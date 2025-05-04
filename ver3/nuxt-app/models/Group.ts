import type {users_groups} from "~/models/users_groups";
import type {server_groups} from "~/models/server_groups";
import type {system_groups} from "~/models/system_groups";
import type {User} from "~/models/User";
type uuid = string;
type slug = string;

export interface Group {
    group_id: uuid; // primary key
    identifier: slug;
    group_name: string;
    description: string;
    user_id: User[];
}