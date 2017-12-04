var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    var contactsInstance;

    self.Contacts = function () {
        var list = {};

        this.add = function (contact) {
            list[contact.id()] = contact;
        };

        this.change = function (strategy) {
            strategy.change(list);
        };

        this.clear = function () {
            var key;

            for (key in list) {
                delete list[key];
            }
        };

        this.get = function (id) {
            return list[id];
        };

        this.getFromName = function (f, l) {
            var r = [], key;

            for (key in list) {
                if (list.hasOwnProperty(key) &&
                    list[key].firstName() === f &&
                    list[key].lastName() === l) {
                    r.push(list[key]);
                }
            }
            if (r.length === 0) {
                return null;
            }
            if (r.length === 1) {
                return r[0];
            }
            return r;
        };

        this.iterator = function () {
            return new Contact.Iterator(list);
        };

        this.remove = function (id) {
            delete list[id];
        };

        this.search = function (strategy) {
            return strategy.search(list);
        };

        this.save = function () {
            Contact.Storage.instance().save(this);
        };

        this.size = function () {
            var size = 0, key;

            for (key in list) {
                if (list.hasOwnProperty(key)) {
                    ++size;
                }
            }
            return size;
        };
    };

    self.Contacts.instance = function () {
        if (!contactsInstance) {
            contactsInstance = new self.Contacts();
        }
        return contactsInstance;
    };

    return self;

}(Contact || {}));