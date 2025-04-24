import type {SoftwareType} from "~/models/SoftwareType";

export interface SoftwareVersion {
    version_name: string;
    type_id: SoftwareType[];
}