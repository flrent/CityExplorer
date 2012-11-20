Ext.define("CityExplorer.view.villes.Liste", {
    extend: 'Ext.dataview.List',
    xtype:'villesListe',
    requires:['Ext.plugin.PullRefresh'],

    config: {
        store:'Cities',
        itemTpl:'{name} - {value}',
        loadingText:'Chargement',
        emptyText:'<p class="emptylist">Ajoutez des villes !</p>',
        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullRefreshText: 'Rafrachir',
                loadingText:'Chargement...',
                releaseRefreshText:'Lâchez pour rafraichir'
            }
        ],
    }
});
