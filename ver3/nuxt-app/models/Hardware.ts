import type {HardwareType} from "~/models/HardwareType";
import type {HardwareMeasurementUnit} from "~/models/HardwareMeasurementUnit";

export interface Hardware {
    id: string;
    type: HardwareType;
    name: string | null;
    value: number;
    measurement: HardwareMeasurementUnit;
    description: string | null;
}