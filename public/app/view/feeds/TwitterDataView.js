Ext.define("CityExplorer.view.feeds.TwitterDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'twitterdataview',

    config: {
        itemTpl: '<div class="tweet"><img src="{profile_image_url}" /><span>{from_user}</span>{text}</div>',
        scrollable:false,
        height:600,
        store: 'Tweets'
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});