Ext.define('CityExplorer.store.Tweets', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CityExplorer.model.Tweet',

        proxy: {
            type: 'jsonp',
            url: 'http://search.twitter.com/search.json',

            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});