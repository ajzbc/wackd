module.exports = function wackd(string) {
    if (typeof string !== "string") throw new TypeError("Can only wackd Strings");
    var s = string.split("");
    for(var i = string.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var t = s[i];
        s[i] = s[r];
        s[r] = t;
    }
    return s.join("");
};