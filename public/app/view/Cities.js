Ext.define("CityExplorer.view.Cities", {
    extend: 'Ext.Panel',
    xtype:'villes',
    requires:['Ext.form.FieldSet','Ext.dataview.List'],

    config: {
        title:'Villes',
        iconCls:'team',
        layout:{type:'fit'},
        items: [
            {
                xtype:'toolbar',
                docked:'top',
                title:'Villes'
            },
            {
                xtype:'villesListe'
            },
            {
                xtype:'toolbar',
                docked:'bottom',
                defaults:{flex:1},
                items:[
                    {
                        ui:'action',
                        text:'Ajouter une ville'
                    },
                    {
                        ui:'action',
                        text:'Vider',
                        handler: function() {
                            Ext.getStore("Cities").removeAll();
                            Ext.getStore("Cities").sync();
                        }
                    }
                ]
            }
        ]
    }
});
