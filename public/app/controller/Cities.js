Ext.define('CityExplorer.controller.Cities', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'wizardMain':'wizardMain',
        },
        control: {
        }
    },
    launch: function() {
        Ext.getStore("Cities").load();
        
        if(Ext.getStore("Cities").getCount()>0) {
            this.getWizardMain().fireEvent("hideWizard");
        }
    }
});