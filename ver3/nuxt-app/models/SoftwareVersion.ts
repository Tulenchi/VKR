import type {server_sversion} from "~/models/server_sversion";
import type {Software} from "~/models/Software";
import type {system_sversion} from "~/models/system_sversion";
type uuid = string;

export interface SoftwareVersion {
    softwareversion_id: uuid;
    version_name: string;
    software_id: Software;
    server_sversion: server_sversion;
    system_sversion: system_sversion;
}