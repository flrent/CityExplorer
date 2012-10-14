Ext.define("CityExplorer.view.Cities", {
    extend: 'Ext.Panel',
    xtype:'villes',
    requires:['Ext.form.FieldSet','Ext.dataview.List'],


    config: {
        title:'Villes',
        iconCls:'team',
        layout:{type:'vbox'},
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Villes'
            },
            {
                xtype:'fieldset',
                title:'Villes',
                style:'padding:20px',
                layout:'fit',
                items:[
                    {
                        xtype:'list',
                        store:'Cities',
                        itemCls:'{name}'
                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'Ajoutez une ville',
                style:'padding:20px;',
                items:[
                    {
                        xtype:'textfield',
                        label:"Nom",
                        placeHolder:"Montréal"
                    },
                    {
                        xtype:'textfield',
                        label:"Mot clef",
                        placeHolder:"montreal"
                    }
                ]
            }
        ]
    }
});
