import type {htype_hMU} from "~/models/htype_hMU";
type slug = string;
type uuid = string;

export interface HardwareType {
    hardwaretype_id: uuid;
    type_id: slug;
    type_name: string;
    description: string;
    is_reusable: boolean;
    htype_hMU: htype_hMU;
}