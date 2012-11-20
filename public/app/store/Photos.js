Ext.define('CityExplorer.store.Photos', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CityExplorer.model.Photo',
        proxy: {
            type: 'jsonp',
            url: 'http://query.yahooapis.com/v1/public/yql',

            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        }
    }
});