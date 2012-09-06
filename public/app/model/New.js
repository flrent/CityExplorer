Ext.define('CityExplorer.model.New', {
    extend: 'Ext.data.Model',

    config: {
    	fields:['title','link','description',
	    	{
	            name: 'img',
	            convert: function(value, record){
                    var enc = record.raw.getElementsByTagName('enclosure')[0];
                    if(enc) return enc.getAttribute("url");
                    else return record.get("title");
	           }
            }
    	]
    }
});