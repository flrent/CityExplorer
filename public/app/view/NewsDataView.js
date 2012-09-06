Ext.define("CityExplorer.view.NewsDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'newsdataview',

    config: {
        itemTpl: '<div class="news"><img src="{img}" /><p><a href="#">{title}</a></p><div class="clear"></div></div>',
        scrollable:false,
        height:1400,
        store: 'News'
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});