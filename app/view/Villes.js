Ext.define("CityExplorer.view.Villes", {
    extend: 'Ext.Panel',
    xtype:'villes',

    config: {
        title:'Villes',
        iconCls:'team',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Villes'
            }
        ]
    }
});
