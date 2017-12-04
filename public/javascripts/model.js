var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Model = function () {
        this.iterator = function () {
            return Contact.Contacts.instance().iterator();
        };

        this.remove = function (id) {
            Contact.Contacts.instance().remove(id);
        };
    };

    return self;

}(Contact || {}));