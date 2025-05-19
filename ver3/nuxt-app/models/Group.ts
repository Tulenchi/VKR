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