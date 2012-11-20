Ext.define('CityExplorer.store.Cities', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	
	config: {
		model:'CityExplorer.model.City',
		
        proxy: {
            type: 'localstorage',
            id:'cities'
        }
	}
});