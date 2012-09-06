Ext.define('CityExplorer.store.News', {
    extend: 'Ext.data.Store',
    requires:['Ext.data.reader.Xml'],

    config: {
        model: 'CityExplorer.model.New',
        proxy: {
            type: 'ajax',
            url: '/257.xml',

            reader: {
                type: 'xml',
                record: 'item'
            }
        }
    }
});