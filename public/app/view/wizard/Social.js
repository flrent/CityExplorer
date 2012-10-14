Ext.define('CityExplorer.view.wizard.Social',{
	extend:'Ext.Panel',
	xtype:'wizardSocial',

	config: {
		styleHtmlContent:true,
		layout:{
			type:'vbox',
			align:'stretch'
		},
		items:[
			{
				html:[
					'<h1>Super !</h1>',
					'<h4>Maintenant, définissez un tag pour récuperer les photos sur Flickr associées.</h4>'
				].join('')
			},
			{
				xtype:'fieldset',
				title:'Mot clef Flickr',
				items:[
					{
						xtype:'textfield',
						id:'wizardFlickr',
						placeHolder:'Montreal'
					}
				]
			},
			{
				xtype:'fieldset',
				title:'Hashtag Twitter',
				items:[
					{
						xtype:'textfield',
						id:'wizardTwitter',
						placeHolder:'Montreal'
					}
				]
			},
			{
				xtype:'button',
				ui:'action',
				text:'Continuer'
			}
		]
	}

})