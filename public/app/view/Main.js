Ext.define('CityExplorer.view.Main',{
	extend:'Ext.Panel',
	xtype:'main',

	config: {
		layout:'card',
		items:[
			{
				xtype:'wizardMain'
			},
			{
				xtype:'onglets'
			}
		]
	}
});