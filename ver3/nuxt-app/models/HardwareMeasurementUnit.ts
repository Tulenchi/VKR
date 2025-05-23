type slug = string;
type uuid = string;

export interface HardwareMeasurementUnit {
    hardwareMU_id: uuid;
    MU_id: slug;
    singular_name: string;
    small_plural_name: string;
    plural_name: string;
}