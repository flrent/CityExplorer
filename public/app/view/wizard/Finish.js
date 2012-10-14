Ext.define('CityExplorer.view.wizard.Finish',{
	extend:'Ext.Panel',
	xtype:'wizardFinish',

	config: {
		styleHtmlContent:true,
		layout:{
			type:'vbox',
			align:'stretch'
		},
		items:[
			{
				html:[
					'<h1>Dernière étape !</h1>',
					'<h4>Ajoutez un flux RSS pour votre source d\'actualités tirée d\'un journal en ligne.</h4>'
				].join('')
			},
			{
				xtype:'fieldset',
				title:'Entrez le flux RSS',
				items:[
					{
						xtype:'textfield',
						placeHolder:''
					}
				]
			},
			{
				xtype:'button',
				ui:'action',
				text:'Terminer la configuration'
			}
		]
	}

})