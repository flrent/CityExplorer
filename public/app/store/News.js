Ext.define('CityExplorer.store.News', {
    extend: 'Ext.data.Store',
    requires:['Ext.data.reader.Xml'],

    config: {
        model: 'CityExplorer.model.New',
        pageSize:5,
        proxy: {
            type: 'jsonp',
            url: 'http://quebec.huffingtonpost.ca/feeds/verticals/canada-quebec/news.xml',
            reader: {
                type: 'json',
                record: 'query.results.item'
            }
        }
    }
});