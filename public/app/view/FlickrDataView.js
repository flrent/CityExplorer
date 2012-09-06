Ext.define("CityExplorer.view.FlickrDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'flickrdataview',

    config: {
        itemTpl: '<img src="http://farm{farm}.staticflickr.com/{server}/{id}_{secret}_s.jpg" style="float:left;margin-left:10px;margin-bottom:10px;" />',
        scrollable:false,
        height:270,
        store: 'Photos'
    },
    initialize: function() {
        this.callParent();
        this.getStore().load();
    }
});