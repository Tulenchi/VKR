import type { SoftwareVersion } from '@/models/SoftwareVersion';
import { testSoftwareTypes } from './software_types';
import { testSystemName } from './system';

export const testSoftwareVersion: SoftwareVersion[] = [
    {
        id: 'softwarev-1',
        version: '1',
        software_type: testSoftwareTypes[0],
    },
    {
        id: 'softwarev-2',
        version: '14.*.*',
        software_type: testSoftwareTypes[1],
    },
];