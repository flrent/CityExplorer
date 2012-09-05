Ext.define('CityExplorer.profile.Phone', {
    extend: 'Ext.app.Profile',

    views: ['Main'],

    isActive: function() {
        return Ext.os.is.Phone;
    },
    launch: function() {
        Ext.Viewport.add(Ext.create('CityExplorer.view.Main'));
    }
});