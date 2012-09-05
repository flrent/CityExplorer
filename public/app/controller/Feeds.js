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
                'itemtap': 'handlerShowPhoto'
            }
        },
        routes: {
            'photos/:id':'showPhotoRedirect'
        }
    },
    showPhotoRedirect: function(id) {
        this.showPhoto(this.getFlickrdataview().getStore().getAt(id).data);
    },
    handlerShowPhoto: function(dataview, index, target, record, e) {
        this.redirectTo('photos/'+index);
    },
    showPhoto: function(data) {
        this.getFeeds().add({
            xtype:'photoview',
            data:data
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