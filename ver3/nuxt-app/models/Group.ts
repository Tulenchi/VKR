import type { User } from './User';
import type { ServerUnit } from './ServerUnit';
import type { SystemName } from './SystemName';
type uuid = string;
type slug = string;

export interface Group {
    users_id: uuid; // foreign key
    group_name: string; // primary key
    group_description: string;
    identifier: slug;
    users: User[]; // Отношение многие-ко-многим с User
    servers: ServerUnit[]; // Отношения многие-ко-многим с серверами в группе
    systems: SystemName[]; // Отношения многие-ко-многим с системами в группе
}