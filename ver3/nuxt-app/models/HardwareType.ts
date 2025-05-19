import type {HardwareMeasurementUnit} from "~/models/HardwareMeasurementUnit";
type slug = string;
type uuid = string;

export interface HardwareType {
    hardwaretype_id: uuid;
    type_id: slug;
    type_name: string;
    description: string;
    is_reusable: boolean;
    hardwareMU_id: HardwareMeasurementUnit[];
}