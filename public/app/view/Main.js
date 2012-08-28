Ext.define("CityExplorer.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        ui:'dark',
        items: [
            {
                xtype:'feeds'    
            },
            {
                xtype:'villes'
            },
            {
                xtype:'settings'
            }
        ]
    }
});
