Ext.define("CityExplorer.view.Settings", {
    extend: 'Ext.Panel',
    xtype:'settings',
    requires:['Ext.form.FieldSet'],
    config: {
        title:'Settings',
        iconCls:'settings',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Settings'
            }
        ]
    }
});
