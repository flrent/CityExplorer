Ext.define("CityExplorer.view.TwitterDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterdataview',

    config: {
        itemTpl: '<div class="tweet"><p><img src="{profile_image_url}" />{from_user} - {text}</p></div>',
        styleHtmlContent:true,
        height:400,
        scrollable:false,
        store: {
            autoLoad: true,
            fields: ['from_user', 'text', 'profile_image_url'],
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=montreal&rpp=20&p=1&result_type=popular',

                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }
        }
    }
});