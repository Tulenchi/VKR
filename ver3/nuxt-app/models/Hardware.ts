import type {HardwareType} from "~/models/HardwareType";
import type {server_hardware} from "~/models/server_hardware";
type double = number;
type uuid = string;

export interface Hardware {
    hardware_id: uuid;
    hardware_name: string; // если null то применяется имя по умолчанию из типа аппаратной конфигурации
    value: double;
    description: string;
    hardwaretype_id: HardwareType;
    server_hardware: server_hardware;
}