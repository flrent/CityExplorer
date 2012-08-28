Ext.define('CityExplorer.controller.Feeds', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            feeds:"feeds",
            twitterdataview:'twitterdataview',
            flickrdataview:'flickrdataview',
        },
        control: {
            'twitterdataview': {
                'itemtap': 'showTweet'
            },
            'flickrdataview': {
                'itemtap': 'showPhoto'
            }
        }
    },
    showTweet: function(dataview, index, target, record, e) {
        alert('coucou');
    },
    showPhoto: function(dataview, index, target, record, e) {
        this.getFeeds().add({
            xtype:'photoview',
            data:record.data
        });
    },
    launch: function(app) {
        this.getFeeds().add({
            cls:'feeds-container',
            layout:{type:'vbox'},
            title:'Montréal',
            scrollable:true,
            defaults:{cls:'feeds'},
            items:[
                {
                    html:'<h3>Derniers tweets</h3>'
                },
                {
                    xtype:'twitterdataview'
                },
                {
                    html:'<h3>Dernières photos</h3>'
                },
                {
                    xtype:'flickrdataview'
                }
            ]
        });

    }
});