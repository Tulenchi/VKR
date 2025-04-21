import type {NetworkPort} from "~/models/NetworkPort";
import type {SoftwareVersion} from "~/models/SoftwareVersion";
import type {ServerUnit} from "~/models/ServerUnit";

export interface SystemName {
    id: string;
    name: string;
    software_versions: SoftwareVersion[];
    ports: NetworkPort[];
    type: string;
    description: string | null;
}