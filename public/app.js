//<debug>
Ext.Loader.setConfig({disableCaching:false});
// So Sencha won't add timestamp when fetching resources, and we can keep breakpoints

//NOTE : anything between debug tags will be remove at build time
//</debug>
Ext.application({
    name: 'CityExplorer',

    controllers: [
        "Wizard",
        "Cities", "Feeds"
    ],
    views: [
        'Main',
        'wizard.Main','wizard.Start','wizard.Social','wizard.Finish',
        'Onglets','Feeds','Cities',
        'feeds.TwitterDataView','feeds.FlickrDataView','feeds.PhotoView','feeds.NewsDataView','feeds.NewsView','feeds.TweetView',
        'villes.Liste'
    ],
    stores:['Tweets','Photos','News','Cities'],
    models:['Tweet','Photo','New', 'City'],

    requires: [
        'Ext.MessageBox'
    ],
    profiles: ['Phone', 'Tablet'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('CityExplorer.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
