Ext.define("CityExplorer.view.Onglets", {
    extend: 'Ext.tab.Panel',
    xtype:'onglets',
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
            }
        ]
    }
});
