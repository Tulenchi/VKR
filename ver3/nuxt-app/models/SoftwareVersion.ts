import type {SoftwareType} from "~/models/SoftwareType";
import type {SystemName} from "~/models/SystemName";

export interface SoftwareVersion {
    id: string;
    version: string;
    software_type: SoftwareType;
}