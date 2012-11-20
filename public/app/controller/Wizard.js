Ext.define('CityExplorer.controller.Wizard', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'main':'main',
            'feeds':'feeds',
            'wizardMain':'wizardMain',
            'wizardStartBtn':'wizardStart button',
            'wizardStartTextField':'wizardStart textfield',

            'wizardSocialBtn':'wizardSocial button',
            'wizardTwitter':'#wizardTwitter',
            'wizardFlickr':'#wizardFlickr',

            'wizardFinishBtn':'wizardFinish button'
        },
        control: {
            wizardMain: {
                hideWizard:'hideWizard'
            },
            wizardStartBtn: {
                'tap':'setCity'
            },
            wizardSocialBtn: {
                'tap':'setHashtags'
            },
            wizardFinishBtn: {
                'tap':'finish'
            }
        }
    },
    hideWizard: function() {
        this.finish();
    },
    setCity: function(btn) {
        this.getWizardMain().setActiveItem(1);
        this.city = this.getWizardStartTextField().getValue();

        this.getWizardFlickr().setValue(this.city);
        this.getWizardTwitter().setValue("#"+this.city);

        var store = Ext.getStore("Cities");
            store.load();
            store.add({name:this.city,value:this.city, hashtag:'#'+this.city});
            store.sync();
    },
    setHashtags: function(btn) {
        this.hashtagFlickr = this.getWizardFlickr().getValue();
        this.hashtagTwitter = this.getWizardTwitter().getValue();

        this.getWizardMain().setActiveItem(2);
    },
    finish: function() {
        this.getFeeds().fireEvent("refreshFeeds");
        this.getMain().setActiveItem(1);
    }
});