import type { SoftwareType } from '@/models/SoftwareType';
import { testSoftwareVersion } from './software_versions';

export const testSoftwareTypes: SoftwareType[] = [
    {
        id: 'softwaret-1',
        name: 'software_1',
        vendor: null,
        documentation: null,
        is_reusable: false,
    },
    {
        id: 'softwaret-2',
        name: 'PostgreSQL',
        vendor: null,
        documentation: null,
        is_reusable: false,
    },
];