import type {HardwareType} from "~/models/HardwareType";
type double = number;
type uuid = string;

export interface Hardware {
    hardware_id: uuid;
    hardware_name: string; // если null то применяется имя по умолчанию из типа аппаратной конфигурации
    value: double;
    description: string;
    type_id: HardwareType;
}