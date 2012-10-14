Ext.define('CityExplorer.view.wizard.Main',{
	extend:'Ext.Panel',
	xtype:'wizardMain',

	config: {
		layout:'card',
		items:[
			{
				xtype:'wizardStart'
			},
			{
				xtype:'wizardSocial'
			},
			{
				xtype:'wizardFinish'
			}
		]
	}

})