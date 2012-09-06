Ext.define('CityExplorer.model.Photo', {
    extend: 'Ext.data.Model',

    config: {
		fields: ['farm', 'id', 'isfamily', 'isfriend','ispublic', 'owner', 'secret', 'server', 'title']
    }
});