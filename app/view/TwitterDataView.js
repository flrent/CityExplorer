Ext.define("CityExplorer.view.TwitterDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterdataview',

    config: {
        itemTpl: '<img src="{profile_image_url}" /><h2>{from_user}</h2><p>{text}</p><div style="clear: both"></div>',
        styleHtmlContent:true,
        height:1000,
        scrollable:false,
        store: {
            autoLoad: true,
            fields: ['from_user', 'text', 'profile_image_url'],
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=montreal&rpp=5&p=1',

                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }
        }
    }
});