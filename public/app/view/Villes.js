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
            },
            {
                xtype:'fieldset',
                title:'Villes',
                style:'padding:20px',
                items:[
                    {   
                        xtype:'selectfield',
                        options: [
                            {text: 'Montréal',  value: 'montreal'},
                            {text: 'Bordeaux', value: 'bordeaux'},
                            {text: 'Paris', value: 'bordeaux'},
                            {text: 'Tokyo', value: 'tokyo'}
                        ]
                    },
                    {   
                        xtype:'selectfield',
                        options: [
                            {text: 'Montréal',  value: 'montreal'},
                            {text: 'Bordeaux', value: 'bordeaux'},
                            {text: 'Paris', value: 'bordeaux'},
                            {text: 'Tokyo', value: 'tokyo'}
                        ]
                    },
                    {   
                        xtype:'selectfield',
                        options: [
                            {text: 'Montréal',  value: 'montreal'},
                            {text: 'Bordeaux', value: 'bordeaux'},
                            {text: 'Paris', value: 'bordeaux'},
                            {text: 'Tokyo', value: 'tokyo'}
                        ]
                    }
                ]
            }
        ]
    }
});
