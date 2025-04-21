import type {HardwareMeasurementUnit} from "~/models/HardwareMeasurementUnit";

export interface HardwareType {
    id: string;
    name: string;
    description: string;
    is_reusable: boolean;
    measurement: HardwareMeasurementUnit[];
}