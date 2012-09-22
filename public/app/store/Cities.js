Ext.define('CityExplorer.store.Cities', {
	extend:'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	config: {
		model:'CityExplorer.model.City',
		autoLoad:true,
		
        proxy: {
            type: 'localstorage',
            id:'cities'
        }
	}
});