Ext.define("CityExplorer.view.NewsDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'newsdataview',

    config: {
        itemTpl: '<div class="news"><a href="{link}">{title}</a></div>',
        scrollable:false,
        height:600,
        store: 'News'
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});