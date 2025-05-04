import type {HardwareMeasurementUnit} from "~/models/HardwareMeasurementUnit";
import type {HardwareType} from "~/models/HardwareType";
type uuid = string;

export interface htype_hMU {
    htype_hMU_id: uuid;
    hardwareMU_id: HardwareMeasurementUnit[];
    hardwaretype_id: HardwareType[];
}