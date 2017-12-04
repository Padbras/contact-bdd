var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Controller = function (m, v) {
        var model = m,
            view = v;

        var init = function () {
            var it = model.iterator();

            it.each(function (contact) {
                $('#button_' + contact.id()).on('click', function (e) {
                    var e = e || window.event;
                    var target = e.target || e.srcElement;
                    var id = target.id.split('_')[1];

                    model.remove(id);
                    view.update();
                });
            });
        };

        init();
    };

    return self;

}(Contact || {}));