Ext.define('CityExplorer.controller.Villes', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            villes:"villes"
        },
        control: {
            villes:{
                "initialize":"showVilles"
            }
        }
    },
    showVilles: function() {

    }
});