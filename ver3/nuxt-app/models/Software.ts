import type {SoftwareVersion} from "~/models/SoftwareVersion";
type uuid = string;

export interface Software {
    software_id: uuid;
    version_name: SoftwareVersion;
    description: string;
}