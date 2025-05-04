import type {users_groups} from "~/models/users_groups";
type uuid = string;

export interface User {
    user_id: uuid; // primary key
    user_name: string;
    users_groups: users_groups;
}