import type {SoftwareVersion} from "~/models/SoftwareVersion";
import type {ServerUnit} from "~/models/ServerUnit";

export interface Software {
    id: string;
    version: SoftwareVersion;
    description: string | null;
}