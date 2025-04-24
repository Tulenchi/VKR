type uuid = string;

export interface SoftwareType {
    type_id: uuid;
    software_type_name: string;
    provider: string;
    documentation: string;
    is_reusable: boolean;
}