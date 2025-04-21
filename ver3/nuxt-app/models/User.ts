import type { Group } from './Group';
type uuid = string;

export interface User {
    users_id: uuid; // primary key
    name: string;
    groups: Group[]; // Отношение многие-ко-многим с Group
}