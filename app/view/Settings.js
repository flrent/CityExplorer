Ext.define("CityExplorer.view.Settings", {
    extend: 'Ext.Panel',
    xtype:'settings',

    config: {
        title:'Settings',
        iconCls:'settings',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            },
            {
                html:'Settings'
            }
        ]
    }
});
