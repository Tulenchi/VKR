import type { Software } from '@/models/Software';
import { testSoftwareVersion } from './software_versions';
import { testServerUnits } from './server_units';

export const testSoftware: Software[] = [
    {
        id: 'software-1',
        version: testSoftwareVersion[0],
        description: null,
    },
    {
        id: 'software-2',
        version: testSoftwareVersion[1],
        description: null,
    },
];