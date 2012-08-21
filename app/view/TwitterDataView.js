Ext.define("CityExplorer.view.TwitterDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store'],
    xtype:'twitterdataview',

    config: {
        itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p><div style="clear: both"></div>',
        styleHtmlContent:true,
        height:400,
        store: {
            autoLoad: true,
            fields: ['from_user', 'text', 'profile_image_url'],
            
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=montreal',

                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }
        }
    }
});