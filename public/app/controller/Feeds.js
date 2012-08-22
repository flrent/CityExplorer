Ext.define('CityExplorer.controller.Feeds', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            feeds:"feeds"
        },
        control: {
            
        }
    },
    launch: function(app) {
        
        this.getFeeds().add({
            html:'<h3>Derniers tweets</h3>'
        });

        this.getFeeds().add({
            xtype:'twitterdataview'
        });

        this.getFeeds().add({
            styleHtmlContent:true,
            html:'<h3>Dernieres photos</h3>'
        });
        
        this.getFeeds().add({
            xtype:'flickrdataview'
        });


    }
});