import type { HardwareType } from '@/models/HardwareType';
import { testHardwareMeasurementUnit } from './hardware_measurement_units';

export const testHardwareType: HardwareType[] = [
    {
        id: 'hardwaretype-1',
        name: 'CPU',
        description: '',
        is_reusable: false,
        measurement: testHardwareMeasurementUnit.slice(0)
    },
    {
        id: 'hardwaretype-2',
        name: 'RAM',
        description: 'null',
        is_reusable: true,
        measurement: testHardwareMeasurementUnit.slice(1)
    },
];