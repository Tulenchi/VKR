import type {users_groups} from "~/models/users_groups";
import type {server_groups} from "~/models/server_groups";
import type {system_groups} from "~/models/system_groups";
type uuid = string;
type slug = string;

export interface Group {
    group_id: uuid; // primary key
    identifier: slug;
    group_name: string;
    description: string;
    users_groups: users_groups;
    server_groups: server_groups;
    system_groups: system_groups;
}