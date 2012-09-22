Ext.define('CityExplorer.controller.Cities', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {

        },
        control: {
        }
    },
    launch: function() {
        var store = Ext.getStore("Cities");
            store.add({name:"Montréal", value:"montreal"});
            store.sync();
            store.load();

    }
});