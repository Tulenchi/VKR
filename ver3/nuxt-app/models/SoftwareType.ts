type uuid = string;
type slug = string;

export interface SoftwareType {
    softwaretype_id: uuid;
    type_id: slug;
    software_type_name: string;
    provider: string;
    documentation: string;
    is_reusable: boolean;
}