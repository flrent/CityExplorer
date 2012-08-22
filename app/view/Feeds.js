Ext.define("CityExplorer.view.Feeds", {
    extend: 'Ext.Panel',
    xtype:'feeds',

    config: {
        title:'Actus',
        iconCls:'home',
        scrollable:true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Ville'
            },
            {
                xtype:'toolbar',
                docked:'top',
                items:[
                    {  
                        xtype:'button',
                        text:'Journaux'
                    },
                    {  
                        xtype:'button',
                        text:'Tweets'
                    },
                    {  
                        xtype:'button',
                        text:'Photos'
                    }
                ]
            }
        ]
    }
});
