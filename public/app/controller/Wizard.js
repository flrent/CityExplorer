Ext.define('CityExplorer.controller.Wizard', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            'main':'main',

            'wizardMain':'wizardMain',
            'wizardStartBtn':'wizardStart button',
            'wizardStartTextField':'wizardStart textfield',

            'wizardSocialBtn':'wizardSocial button',
            'wizardTwitter':'#wizardTwitter',
            'wizardFlickr':'#wizardFlickr',

            'wizardFinishBtn':'wizardFinish button',
        },
        control: {
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
    setCity: function(btn) {
        this.getWizardMain().setActiveItem(1);
        this.city = this.getWizardStartTextField().getValue();

        this.getWizardFlickr().setValue(this.city);
        this.getWizardTwitter().setValue(this.city);

    },
    setHashtags: function(btn) {
        this.hashtagFlickr = this.getWizardFlickr().getValue();
        this.hashtagTwitter = this.getWizardTwitter().getValue();

        this.getWizardMain().setActiveItem(2);
    },
    finish: function() {
        this.getMain().setActiveItem(1);
    }
});