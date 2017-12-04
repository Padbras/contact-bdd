const {Given, Then, When} = require('cucumber');

Given(/^The sort contact list is display$/, function (callback) {
    this.browser.visit(" http://127.0.0.1:3000", (err) => {

        var contact = this.browser.tabs.current.Contact.Contacts.instance();
        var iterator = contact.iterator();

        var prenom = this.browser.queryAll('table tbody tr td:first-child');
        var nom = this.browser.queryAll('table tbody tr td:nth-child(2)');
        var tmpnom;
        var tmpprenom;
        var i = 0;
        while (iterator.hasNext()) {
            var contact = iterator.next();
            tmpnom = nom[i].innerHTML;
            tmpprenom = prenom[i].innerHTML;
            this.browser.assert.success(tmpprenom === contact.firstName());
            this.browser.assert.success(tmpnom === contact.lastName());
            i++;
        }
        callback();
    });
});

When(/^User clicks on sort button$/, function (callback) {
    this.browser.visit(" http://127.0.0.1:3000", (err) => {
        var bouton = this.browser.query('#button_sort');
        bouton.click();
        callback();
    });
});


Then(/^The contacts are sorted$/, function (callback) {
    this.browser.visit(" http://127.0.0.1:3000", (err) => {

        var test = this.browser.tabs.current.Contact.Contacts.instance();
        var bouton = this.browser.query('#button_sort');
        var flag = true;
        bouton.click();
        var noms = this.browser.queryAll('table tbody tr td:nth-child(2)');
        for(var i=0; i< test.size()-1; i++)
        {
            if(noms[i].innerHTML > noms[i+1].innerHTML)
                flag = false;
        }
        this.browser.assert.success(flag === true);
        callback();
    });
});