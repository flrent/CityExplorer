Ext.define("CityExplorer.view.Settings", {
    extend: 'Ext.Panel',
    xtype:'settings',
    requires:['Ext.form.FieldSet','Ext.field.Toggle','Ext.field.Select'],
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
                xtype:'fieldset',
                title:'Filtres',
                style:'padding:10px;',
                items:[
                    {   
                        xtype:'togglefield',
                        label:"Journaux",
                        value:1
                    },
                    {
                        xtype:'togglefield',
                        label:'Tweets',
                        value:1
                    },
                    {
                        xtype:'togglefield',
                        label:'Photos',
                        value:1
                    },
                ]
            }
        ]
    }
});
