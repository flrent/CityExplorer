Ext.define('CityExplorer.store.Tweets', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CityExplorer.model.Tweet',

        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json?q=montreal&rpp=10&p=1',

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});