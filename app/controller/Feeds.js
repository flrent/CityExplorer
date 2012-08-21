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
            xtype:'twitterdataview'
        });
    }  
});