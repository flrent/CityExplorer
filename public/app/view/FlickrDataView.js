Ext.define("CityExplorer.view.FlickrDataView", {
    extend: 'Ext.dataview.DataView',

    requires:['Ext.dataview.DataView','Ext.data.Store','Ext.data.proxy.JsonP'],
    xtype:'flickrdataview',

    config: {
        itemTpl: '<img src="http://farm{farm}.staticflickr.com/{server}/{id}_{secret}_s.jpg" style="float:left;margin-left:10px;margin-bottom:10px;" />',
        scrollable:false,
        height:600,
        store: {
            autoLoad: true,
            fields: ['farm', 'id', 'isfamily', 'isfriend','ispublic', 'owner', 'secret', 'server', 'title'],
            proxy: {
                type: 'jsonp',
                url: 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20text%3D%22'+'montreal'+'%22%20and%20api_key%3D%226c064b055aaf10cbe60761b3f9c8816c%22%20limit%2025&format=json&diagnostics=true',

                reader: {
                    type: 'json',
                    rootProperty: 'query.results.photo'
                }
            }
        }
    }
});