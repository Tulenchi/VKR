import type {system_groups} from "~/models/system_groups";
import type {SystemType} from "~/models/SystemType";
import type {system_ports} from "~/models/system_ports";
import type {system_sversion} from "~/models/system_sversion";
type uuid = string;

export interface SystemName {
    system_id: uuid; // primary key
    system_name: string;
    description: string;
    systemtype_id: SystemType;
    system_ports: system_ports;
    system_sversion: system_sversion;
    system_groups: system_groups;
}