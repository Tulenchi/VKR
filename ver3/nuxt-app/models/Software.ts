import type {SoftwareType} from "~/models/SoftwareType";
type uuid = string;

export interface Software {
    software_id: uuid;
    software_name: string;
    description: string;
    softwaretype_id: SoftwareType;
}