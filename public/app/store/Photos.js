Ext.define('CityExplorer.store.Photos', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CityExplorer.model.Photo',
        proxy: {
            type: 'jsonp',
            url: 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20text%3D%22'+'montreal'+'%22%20and%20api_key%3D%226c064b055aaf10cbe60761b3f9c8816c%22%20limit%2025&format=json&diagnostics=true',

            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        }
    }
});