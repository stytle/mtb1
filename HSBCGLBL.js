function g(h) {
    return function() {
        return h
    }
}
(function() {
    function h(b) {
        try {
            if (navigator.plugins && navigator.plugins.length)
                for (var c = 0; c < navigator.plugins.length; c++) {
                    var a = navigator.plugins[c];
                    if (a.name.indexOf(b) >= 0) return a.name + (a.description ? "|" + a.description : "")
                }
        } catch (f) {}
        return ""
    }

    function x(b) {
        var c = new Date,
            a = new Date,
            f = [g("TF1"), g("020"), function() {
                    return ScriptEngineMajorVersion()
                }, function() {
                    return ScriptEngineMinorVersion()
                }, function() {
                    return ScriptEngineBuildVersion()
                }, function() {
                    return i("{7790769C-0471-11D2-AF11-00C04FA35D02}")
                }, function() {
                    return i("{89820200-ECBD-11CF-8B85-00AA005B4340}")
                },
                function() {
                    return i("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
                },
                function() {
                    return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
                },
                function() {
                    return i("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
                },
                function() {
                    return i("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
                },
                function() {
                    return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
                },
                function() {
                    return i("{5A8D6EE0-3E18-11D0-821E-444553540000}")
                },
                function() {
                    return i("{89820200-ECBD-11CF-8B85-00AA005B4383}")
                },
                function() {
                    return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
                },
                function() {
                    return i("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
                },
                function() {
                    return i("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
                },
                function() {
                    return i("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
                },
                function() {
                    return i("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
                },
                function() {
                    return i("{3AF36230-A269-11D1-B5BF-0000F8051515}")
                },
                function() {
                    return i("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
                },
                function() {
                    return i("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
                },
                function() {
                    return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
                },
                function() {
                    return eval("navigator.appCodeName")
                },
                function() {
                    return eval("navigator.appName")
                },
                function() {
                    return eval("navigator.appVersion")
                },
                function() {
                    return t(["navigator.productSub", "navigator.appMinorVersion"])
                },
                function() {
                    return eval("navigator.browserLanguage")
                },
                function() {
                    return eval("navigator.cookieEnabled")
                },
                function() {
                    return t(["navigator.oscpu", "navigator.cpuClass"])
                },
                function() {
                    return eval("navigator.onLine")
                },
                function() {
                    return eval("navigator.platform")
                },
                function() {
                    return eval("navigator.systemLanguage")
                },
                function() {
                    return eval("navigator.userAgent")
                },
                function() {
                    return t(["navigator.language", "navigator.userLanguage"])
                },
                function() {
                    return eval("document.defaultCharset")
                },
                function() {
                    return eval("document.domain")
                },
                function() {
                    return eval("screen.deviceXDPI")
                },
                function() {
                    return eval("screen.deviceYDPI")
                },
                function() {
                    return eval("screen.fontSmoothingEnabled")
                },
                function() {
                    return eval("screen.updateInterval")
                },
                function() {
                    return Math.abs(o - p) !== 0
                },
                function() {
                    return y(c)
                },
                g("@UTC@"),
                function() {
                    var k = 0;
                    k = 0;
                    if (y(c)) k =
                        Math.abs(o - p);
                    return k = -(c.getTimezoneOffset() + k) / 60
                },
                function() {
                    return (new Date(2005, 5, 7, 21, 33, 44, 888)).toLocaleString()
                },
                function() {
                    return eval("screen.width")
                },
                function() {
                    return eval("screen.height")
                },
                function() {
                    return m.Acrobat
                },
                function() {
                    return m.Flash
                },
                function() {
                    return m.QuickTime
                },
                function() {
                    return m["Java Plug-in"]
                },
                function() {
                    return m.Director
                },
                function() {
                    return m.Office
                },
                g("@CT@"),
                function() {
                    return o
                },
                function() {
                    return p
                },
                function() {
                    return c.toLocaleString()
                },
                function() {
                    return eval("screen.colorDepth")
                },
                function() {
                    return eval("window.screen.availWidth")
                },
                function() {
                    return eval("window.screen.availHeight")
                },
                function() {
                    return eval("window.screen.availLeft")
                },
                function() {
                    return eval("window.screen.availTop")
                },
                function() {
                    return h("Acrobat")
                },
                function() {
                    return h("Adobe SVG")
                },
                function() {
                    return h("Authorware")
                },
                function() {
                    return h("Citrix ICA")
                },
                function() {
                    return h("Director")
                },
                function() {
                    return h("Flash")
                },
                function() {
                    return h("MapGuide")
                },
                function() {
                    return h("MetaStream")
                },
                function() {
                    return h("PDFViewer")
                },
                function() {
                    return h("QuickTime")
                },
                function() {
                    return h("RealOne")
                },
                function() {
                    return h("RealPlayer Enterprise")
                },
                function() {
                    return h("RealPlayer Plugin")
                },
                function() {
                    return h("Seagate Software Report")
                },
                function() {
                    return h("Silverlight")
                },
                function() {
                    return h("Windows Media")
                },
                function() {
                    return h("iPIX")
                },
                function() {
                    return h("nppdf.so")
                },
                function() {
                    var k = document.createElement("span");
                    k.innerHTML = "&nbsp;";
                    k.style.position = "absolute";
                    k.style.left = "-9999px";
                    document.body.appendChild(k);
                    var q = k.offsetHeight;
                    document.body.removeChild(k);
                    return q
                },
                g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g(""), g("5.6.0-0"), g("")
            ];
        B();
        for (var e = "", d = 0; d < f.length; d++) {
            if (b) {
                e += u(f[d].toString(), '"', "'", true);
                e += "="
            }
            var j;
            try {
                j = f[d](this)
            } catch (l) {
                j = ""
            }
            e += b ? j : escape(j);
            e += ";";
            if (b) e += "\\n"
        }
        e = u(e, escape("@UTC@"), (new Date).getTime());
        e = u(e, escape("@CT@"), (new Date).getTime() - a.getTime());
        return window.f1b5 ? window.f1b5(e) : e
    }

    function u(b, c, a, f) {
        if (typeof f !== "boolean") f = false;
        for (var e = true,
                d;
            (d = b.indexOf(c)) >= 0 && (f || e);) {
            b = b.substr(0, d) + a + b.substr(d + c.length);
            e = false
        }
        return b
    }

    function y(b) {
        var c = Math.min(o, p);
        return Math.abs(o - p) !== 0 && b.getTimezoneOffset() === c
    }

    function B() {
        for (var b = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], c = 0; c < b.length; c++) {
            var a = b[c],
                f = m,
                e = a,
                d = a;
            a = "";
            try {
                if (navigator.plugins && navigator.plugins.length) {
                    var j = RegExp(d + ".* ([0-9._]+)");
                    for (d = 0; d < navigator.plugins.length; d++) {
                        var l = j.exec(navigator.plugins[d].name);
                        if (l === null) l = j.exec(navigator.plugins[d].description);
                        if (l) a = l[1]
                    }
                } else if (window.ActiveXObject && v[d]) try {
                    var k = new ActiveXObject(v[d][0]);
                    a = v[d][1](k)
                } catch (q) {
                    a = ""
                }
            } catch (z) {
                a = z.message
            }
            f[e] = a
        }
    }

    function t(b) {
        for (var c = 0; c < b.length; c++) try {
            var a = eval(b[c]);
            if (a) return a
        } catch (f) {}
        return ""
    }

    function i(b) {
        var c = "";
        try {
            if (typeof n.a.getComponentVersion !== "undefined") c = n.a.getComponentVersion(b, "ComponentID")
        } catch (a) {
            b = a.message.length;
            b = b > 40 ? 40 : b;
            c = escape(a.message.substr(0, b))
        }
        return c
    }

    function C(b) {
        function c(j) {
            f = f << j[0] | j[1];
            for (e += j[0]; e >= 6;) {
                j = f >>
                    e - 6 & 63;
                a += r.substring(j, j + 1);
                e -= 6;
                f ^= j << e
            }
        }
        var a = "",
            f = 0,
            e = 0;
        c([6, (b.length & 7) << 3 | 0]);
        c([6, b.length & 56 | 1]);
        for (var d = 0; d < b.length; d++) {
            if (w[b.charCodeAt(d)] == undefined) return;
            c(w[b.charCodeAt(d)])
        }
        c(w[0]);
        e > 0 && c([6 - e, 0]);
        return a
    }
    var n = {},
        o = (new Date(2005, 0, 15)).getTimezoneOffset(),
        p = (new Date(2005, 6, 15)).getTimezoneOffset(),
        m = [],
        v = {
            Flash: ["ShockwaveFlash.ShockwaveFlash", function(b) {
                return b.getVariable("$version")
            }],
            Director: ["SWCtl.SWCtl", function(b) {
                return b.ShockwaveVersion("")
            }]
        };
    try {
        n.a = document.createElement("span");
        typeof n.a.addBehavior !== "undefined" && n.a.addBehavior("#default#clientCaps")
    } catch (D) {}
    m = {};
    var w = {
            1: [4, 15],
            110: [8, 239],
            74: [8, 238],
            57: [7, 118],
            56: [7, 117],
            71: [8, 233],
            25: [8, 232],
            101: [5, 28],
            104: [7, 111],
            4: [7, 110],
            105: [6, 54],
            5: [7, 107],
            109: [7, 106],
            103: [9, 423],
            82: [9, 422],
            26: [8, 210],
            6: [7, 104],
            46: [6, 51],
            97: [6, 50],
            111: [6, 49],
            7: [7, 97],
            45: [7, 96],
            59: [5, 23],
            15: [7, 91],
            11: [8, 181],
            72: [8, 180],
            27: [8, 179],
            28: [8, 178],
            16: [7, 88],
            88: [10, 703],
            113: [11, 1405],
            89: [12, 2809],
            107: [13, 5617],
            90: [14, 11233],
            42: [15, 22465],
            64: [16, 44929],
            0: [16, 44928],
            81: [9, 350],
            29: [8, 174],
            118: [8, 173],
            30: [8, 172],
            98: [8, 171],
            12: [8, 170],
            99: [7, 84],
            117: [6, 41],
            112: [6, 40],
            102: [9, 319],
            68: [9, 318],
            31: [8, 158],
            100: [7, 78],
            84: [6, 38],
            55: [6, 37],
            17: [7, 73],
            8: [7, 72],
            9: [7, 71],
            77: [7, 70],
            18: [7, 69],
            65: [7, 68],
            48: [6, 33],
            116: [6, 32],
            10: [7, 63],
            121: [8, 125],
            78: [8, 124],
            80: [7, 61],
            69: [7, 60],
            119: [7, 59],
            13: [8, 117],
            79: [8, 116],
            19: [7, 57],
            67: [7, 56],
            114: [6, 27],
            83: [6, 26],
            115: [6, 25],
            14: [6, 24],
            122: [8, 95],
            95: [8, 94],
            76: [7, 46],
            24: [7, 45],
            37: [7, 44],
            50: [5, 10],
            51: [5, 9],
            108: [6, 17],
            22: [7, 33],
            120: [8,
                65
            ],
            66: [8, 64],
            21: [7, 31],
            106: [7, 30],
            47: [6, 14],
            53: [5, 6],
            49: [5, 5],
            86: [8, 39],
            85: [8, 38],
            23: [7, 18],
            75: [7, 17],
            20: [7, 16],
            2: [5, 3],
            73: [8, 23],
            43: [9, 45],
            87: [9, 44],
            70: [7, 10],
            3: [6, 4],
            52: [5, 1],
            54: [5, 0]
        },
        A = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"],
        r = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    window.f1b5 = function(b) {
        for (var c = b, a = 0; A[a]; a++) c = c.split(A[a]).join(String.fromCharCode(a +
            1));
        c = C(c);
        if (c == undefined) return b;
        else {
            a = 65535;
            for (var f = 0; f < b.length; f++) {
                a = (a >>> 8 | a << 8) & 65535;
                a ^= b.charCodeAt(f) & 255;
                a ^= (a & 255) >> 4;
                a ^= a << 12 & 65535;
                a ^= (a & 255) << 5 & 65535
            }
            a &= 65535;
            b = "";
            b += r.charAt(a >>> 12);
            b += r.charAt(a >>> 6 & 63);
            b += r.charAt(a & 63);
            c += b;
            return c
        }
    };
    n.hsbcglblform = function(b) {
        try {
            if (!b) return x();
            var c;
            a: {
                var a;
                try {
                    a = document.getElementById(b)
                } catch (f) {}
                if (a === null || typeof a === "undefined") try {
                    a = document.getElementsByName(b)[0]
                } catch (e) {}
                if (a === null || typeof a === "undefined")
                    for (var d = 0; d < document.forms.length; d++)
                        for (var j =
                                document.forms[d], l = 0; l < j.elements.length; l++) {
                            var k = j[l];
                            if (k.name === b || k.id === b) {
                                c = k;
                                break a
                            }
                        }
                c = a
            }
            if (c !== null) try {
                c.value = x()
            } catch (q) {
                c.value = escape(q.message)
            }
        } catch (z) {}
    };
    window.HSBCGLBL = n;
    var s = navigator.userAgent.toLowerCase();
    navigator.product === "Gecko" && parseInt(s.substring(s.indexOf("rv:") + 3, s.indexOf(")", s.indexOf("rv:") + 3)).split(".")[0]) <= 2 && window.HSBCGLBL.hsbcglblform()
})();