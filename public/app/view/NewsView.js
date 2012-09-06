Ext.define("CityExplorer.view.NewsView", {
    extend: 'Ext.Panel',
    xtype:'newsview',

    config: {
        scrollable:true,
        tpl:'<p>{description} - <img src="{img}" /></p>'
    }
});