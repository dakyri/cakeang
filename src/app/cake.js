/**
 * Created by dak on 2/28/2017.
 */
"use strict";
var Cake = (function () {
    function Cake() {
    }
    Cake.from = function (r) {
        var cake = ({
            id: r.id,
            name: r.name,
            comment: r.comment,
            imageUrl: r.imageUrl,
            yumFactor: r.yumFactor,
        });
        return cake;
    };
    return Cake;
}());
exports.Cake = Cake;
//# sourceMappingURL=cake.js.map