Ext.define('CityExplorer.store.News', {
    extend: 'Ext.data.Store',
    requires:['Ext.data.reader.Xml'],

    config: {
        model: 'CityExplorer.model.New',
        pageSize:5,
        proxy: {
            type: 'jsonp',
            url: 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.radio-canada.ca%2Ffils%2Fnouvelles%2Fnouvelles.xml%22%0A&format=json&diagnostics=true',
            reader: {
                type: 'json',
                record: 'query.results.item'
            }
        }
    }
});