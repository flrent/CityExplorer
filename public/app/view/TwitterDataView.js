Ext.define("CityExplorer.view.TwitterDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterdataview',

    config: {
        itemTpl: '<div class="tweet"><img src="{profile_image_url}" /><span>{from_user}</span>{text}</div>',
        scrollable:false,
        height:600,
        store: {
            autoLoad: true,
            fields: ['from_user', 'text', 'profile_image_url'],
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=montreal&rpp=10&p=1',

                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }
        }
    }
});