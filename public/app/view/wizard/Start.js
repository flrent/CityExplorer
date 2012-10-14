Ext.define('CityExplorer.view.wizard.Start',{
	extend:'Ext.Panel',
	xtype:'wizardStart',

	config: {
		styleHtmlContent:true,
		layout:{
			type:'vbox',
			align:'stretch'
		},
		items:[
			{
				html:[
					'<h1>Bienvenue dans CityExplorer !</h1>',
					'<h4>Pour génerer votre contenu personnalisé, suivez ce petit tutoriel afin de paramétrer vos choix.</h4>'
				].join('')
			},
			{
				xtype:'fieldset',
				title:'Entrez votre ville',
				items:[
					{
						xtype:'textfield',
						placeHolder:'Montreal'
					}
				]
			},
			{
				xtype:'button',
				ui:'action',
				text:'Définir ma ville'
			}
		]
	}

})