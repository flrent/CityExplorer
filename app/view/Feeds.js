Ext.define("CityExplorer.view.Feeds", {
    extend: 'Ext.Panel',
    xtype:'feeds',

    config: {
        title:'Actus',
        iconCls:'home',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Ville'
            },
            {
                styleHtmlContent:true,
                html:"<h3>Ici s'affichera les actualités de votre ville</h3>"
            }
        ]
    }
});
