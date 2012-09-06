Ext.define("CityExplorer.view.PhotoView", {
    extend: 'Ext.Panel',
    xtype:'photoview',

    config: {
        scrollable:true,
        tpl:'<p><img src="http://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg"></p>'
    }
});