export default {
    name: 'ServerUnit',
    tableName: 'server_units',
    fields: {
        id: { type: 'integer', primaryKey: true },
        name: { type: 'string' },
        ip_address: { type: 'string', foreignKey: true },
        domain_name: { type: 'string', foreignKey: true },
        description: { type: 'text' },
        server_type: { type: 'string' }, // virtual или physical
    }
}