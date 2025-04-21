import type { Hardware } from '@/models/Hardware';
import { testHardwareType } from './hardware_types';
import { testHardwareMeasurementUnit } from './hardware_measurement_units';

export const testHardware: Hardware[] = [
    {
        id: 'hardware-1',
        type: testHardwareType[0],
        name: 'hardware-1',
        value: 8,
        measurement: testHardwareMeasurementUnit[0],
        description: 'Процессор сервера'
    },
    {
        id: 'hardware-2',
        type: testHardwareType[1],
        name: 'hardware-2',
        value: 32,
        measurement: testHardwareMeasurementUnit[1],
        description: 'Оперативная память'
    },
];