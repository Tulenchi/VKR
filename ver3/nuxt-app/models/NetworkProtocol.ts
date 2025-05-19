type uuid = string;
type int = number;

export interface NetworkProtocol {
    network_type: string;
    id_network: uuid;
    parent_id: uuid | null; // должна быть связь как-бы
    port: int | null;
}