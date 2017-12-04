const {Given, Then, When} = require(' cucumber ');

Given(/^The contact list is display$/, function (callback) {
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
            this.browser.assert.success(contact.firstName() === tab[j].innerHTML);
            tmpnom = nom[i].innerHTML;
            tmpprenom = prenom[i].innerHTML;
            this.browser.assert.success(tmpprenom === contact.firstName());
            this.browser.assert.success(tmpnom === contact.lastName());
            i++;
        }

        callback();
    });
});

When(/^User clicks on remove button of the first contact$/, function (callback) {
    this.browser.visit(" http://127.0.0.1:3000", (err) => {
        var tab = this.browser.queryAll('table tbody td a');
        tab[0].click();
        callback();
    });
});


Then(/^The first contact is removed$/, function (callback) {
    this.browser.visit(" http://127.0.0.1:3000", (err) => {

        var contact = this.browser.tabs.current.Contact.Contacts.instance();
        var bouton = $('table tbody tr td a')[0];
        var prenom = this.browser.queryAll('table tbody tr td:first-child')[0];
        var nom = this.browser.queryAll('table tbody tr td:nth-child(2)');
        var size = contact.size();
        bouton.click();
        var prenom2 = this.browser.queryAll('table tbody tr td:first-child')[0];
        var nom2 = this.browser.queryAll('table tbody tr td:nth-child(2)')[0];
        var size2 = contact.size();
        assert.ok(size !== size2 && prenom.innerHTML !== prenom2.innerHTML && nom.innerHTML !== nom2.innerHTML);
        callback();
    });
});