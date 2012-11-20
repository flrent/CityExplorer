Ext.define('CityExplorer.controller.Feeds', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            feeds:"feeds",
            twitterdataview:'twitterdataview',
            flickrdataview:'flickrdataview'
        },
        control: {
            feeds:{
                refreshFeeds:'refreshFeeds'
            },
            'twitterdataview': {
                'itemtap': 'showTweet'
            },
            'flickrdataview': {
                'itemtap': 'handlerShowPhoto'
            },
            'newsdataview': {
                'itemtap':'handlerShowNews'
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
    handlerShowNews: function(dataview, index, target, record, e) {
        this.showNews(record.data);
    },
    showPhoto: function(data) {

        this.getFeeds().add({
            xtype:'photoview',
            data:data
        });
    },
    showTweet: function(data) {
        this.getFeeds().add({
            xtype:'tweetview',
            data:data
        });
    },
    showNews: function(data) {
        this.getFeeds().add({
            xtype:'newsview',
            data:data
        });
    },
    launch: function(app) {

    },
    getCity: function() {
        return Ext.getStore("Cities").getAt(0).get("value");
    },
    refreshFeeds: function() {
        this.getFeeds().removeAll();
        var storePhotos = Ext.getStore("Photos");
            storePhotos.getProxy().setExtraParams({
                q:'select * from flickr.photos.search where text = "'+this.getCity()+'" and api_key="6c064b055aaf10cbe60761b3f9c8816c" limit 10',
                format:'json',
                diagnostics:true
            });
            storePhotos.load();

        var storeTweets = Ext.getStore("Tweets");
            storeTweets.getProxy().setExtraParams({
                q:this.getCity(),
                rpp:10,
                p:1
            });
            storeTweets.load();

        this.getFeeds().add({
            cls:'feeds-container',
            layout:{type:'vbox'},
            title:this.getCity(),
            scrollable:true,
            defaults:{cls:'feeds'},
            items:[
                {
                    html:'<h3>Dernières photos</h3>'
                },
                {
                    xtype:'flickrdataview'
                },
                {
                    html:'<h3>Derniers tweets</h3>'
                },
                {
                    xtype:'twitterdataview'
                }/*,
                {
                    html:'<h3>Dernières news</h3>'
                },
                {
                    xtype:'newsdataview'
                }*/
            ]
        });
    }
});