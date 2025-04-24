import type {HardwareMeasurementUnit} from "~/models/HardwareMeasurementUnit";
type slug = string;

export interface HardwareType {
    type_id: slug;
    type_name: string;
    description: string;
    is_reusable: boolean;
    MU_id: HardwareMeasurementUnit[];
}