import type {SoftwareVersion} from "~/models/SoftwareVersion";

export interface SoftwareType {
    id: string;
    name: string;
    vendor: string | null;
    documentation: string | null;
    is_reusable: boolean;
}