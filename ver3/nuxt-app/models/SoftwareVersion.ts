import type {Software} from "~/models/Software";
type uuid = string;

export interface SoftwareVersion {
    softwareversion_id: uuid;
    version_name: string;
    software_id: Software[];
}