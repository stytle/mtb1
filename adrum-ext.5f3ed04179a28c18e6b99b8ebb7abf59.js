; /* Version 5f3ed04179a28c18e6b99b8ebb7abf59 v:4.2.0.0, c:d8ccf812e97ff2aa61d047bf0ef7c34e1208147f, b:8324 n:33-4.2.0.next-build */
(function() {
    /*

     Copyright (c) 2013, AppDynamics, Inc. All rights reserved.

     Derivative of Google Episodes:

     Copyright 2010 Google Inc.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.

     See the source code here:
     http://code.google.com/p/episodes/
    */
    new function() {
        var g = window.ADRUM;
        if (g && g.q && !0 !== window["adrum-disable"]) {
            (function(a) {
                (function(d) {
                    d.S = function(f) {
                        var c = {
                            a: [1, 2, 3, "str"]
                        };
                        if (d.isDefined(JSON) && d.isFunction(JSON.stringify) && '{"a":[1,2,3,"str"]}' === (0, JSON.stringify)(c).replace(/\s/g, "")) return JSON.stringify(f);
                        var b = Object.toJSON;
                        if (d.isFunction(b) && '{"a":[1,2,3,"str"]}' === b(c).replace(/\s/g, "")) return a.error("M63"), b(f);
                        a.error("M64");
                        return null
                    };
                    d.Ba = function(f, c, b) {
                        var e = f,
                            h = b;
                        "xhr" === b && (e = document.createElement("div"),
                            f.appendChild(e), h = "xhr_" + f.getElementsByTagName("div").length);
                        f = document.createElement("p");
                        f.innerHTML = "Script loaded from " + a.conf.adrumExtUrl + ". Metrics collected are:";
                        e.appendChild(f);
                        f = document.createElement("table");
                        f.id = "ADRUM_" + h;
                        var h = document.createElement("tbody"),
                            d;
                        for (d in c) {
                            b = document.createElement("tr");
                            var m = document.createElement("td");
                            m.innerHTML = d;
                            m.className = "name";
                            var g = document.createElement("td");
                            g.innerHTML = String(c[d]);
                            g.className = "value";
                            b.appendChild(m);
                            b.appendChild(g);
                            h.appendChild(b)
                        }
                        f.appendChild(h);
                        e.appendChild(f)
                    };
                    d.$e = function() {
                        function a(c, b) {
                            try {
                                if ("object" != typeof c) return String(c);
                                if (0 <= d.xa(b, c)) return "Already visited";
                                b.push(c);
                                var e;
                                if (d.isArray(c)) {
                                    for (var h = "[ ", q = 0; q < c.length; q++) 0 != q && (h += ", "), h += a(c[q], b);
                                    e = h + " ]"
                                } else {
                                    var h = "{ ",
                                        q = !0,
                                        m;
                                    for (m in c) q ? q = !1 : h += ", ", h += a(m, b) + " => " + a(c[m], b);
                                    e = h + " }"
                                }
                                return e
                            } catch (g) {
                                return "dumpObject failed: " + g
                            }
                        }
                        return function(c) {
                            return a(c, [])
                        }
                    }();
                    d.xa = d.isFunction(Array.prototype.indexOf) ? function(a, c) {
                            return a.indexOf(c)
                        } :
                        function(a, c) {
                            for (var b = 0; b < a.length; b++)
                                if (a[b] == c) return b;
                            return -1
                        };
                    d.compareWindows = function(a, c) {
                        return a == c
                    };
                    d.Fa = function(a, c, b, e) {
                        if ("undefined" === typeof c || null === c) return c;
                        if (d.isArray(c)) {
                            a = [];
                            for (var h = 0, q = c.length; h < q; h++) a[h] = d.Fa(h, c[h], b, e);
                            return a
                        }
                        if (d.isFunction(c)) return c;
                        if (d.isObject(c)) {
                            a = {};
                            for (h in c) c.hasOwnProperty(h) && (a[b(h)] = d.Fa(h, c[h], b, e));
                            return a
                        }
                        return e(a, c)
                    };
                    d.dg = function(a) {
                        var c = [],
                            b;
                        for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push([b, a[b]]);
                        return c
                    };
                    d.Mg = function() {
                        try {
                            localStorage.setItem("try", "try");
                            var a = localStorage.getItem("try");
                            localStorage.removeItem("try");
                            return "try" === a
                        } catch (c) {
                            return !1
                        }
                    };
                    d.Lg = function() {
                        try {
                            var a = d.S({
                                v: 1
                            });
                            return 1 === JSON.parse(a).v
                        } catch (c) {
                            return !1
                        }
                    };
                    d.Ng = function() {
                        return d.isFunction(window.postMessage)
                    };
                    d.Te = function(a, c) {
                        var b = document.createElement("div");
                        b.innerHTML = '<iframe id="' + c + '" src=' + a + ' width="0" height="0" tabindex="-1" title="empty" style="display: none;"></iframe>';
                        document.body.appendChild(b);
                        return document.getElementById(c)
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    a.Zc = function(a) {
                        return /^[0-9]+$/.test(a) ? Number(a) : null
                    };
                    a.pc = function(a) {
                        return "number" === typeof a && !isNaN(a) && isFinite(a)
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    function f(e) {
                        var b = e.split("\r\n"),
                            c = /^\s*ADRUM_(\d+): (.+)\s*$/i;
                        e = [];
                        for (var f = 0; f < b.length; f++) {
                            var d = b[f];
                            try {
                                var g = c.exec(d);
                                g && e.push([Number(g[1]), g[2]])
                            } catch (k) {
                                a.exception(k, "M67", d)
                            }
                        }
                        Array.prototype.sort.call(e,
                            function(a, e) {
                                return a[0] - e[0]
                            });
                        g = [];
                        for (b = 0; b < e.length; b++) g.push(e[b][1]);
                        return g
                    }
                    var c = null,
                        b = null;
                    d.gc = function() {
                        b || (b = d.zc(d.Ma(d.cookieMetadataChunks), d.Ma(a.footerMetadataChunks)));
                        return b
                    };
                    d.getPageGUID = function() {
                        if (!c) {
                            var e = d.gc();
                            c = e && e.clientRequestGUID || a.utils.generateGUID()
                        }
                        return c
                    };
                    d.zf = function(e) {
                        e = f(e);
                        a.log("M65", e);
                        return d.zc(d.Ma(e))
                    };
                    d.zc = function(e, b) {
                        function c(e) {
                            for (var b = 0; b < e.length; b++) {
                                var h = e[b];
                                h != f && 0 > a.utils.xa(k, h) && k.push(h)
                            }
                        }
                        if (!e || 0 >= e.L.length) return null;
                        b || (b = e);
                        var f;
                        if (0 < b.L.length) {
                            if (f = b.L[0], 0 > a.utils.xa(e.L, f)) return null
                        } else return a.error("M66"), null;
                        var g = b.serverSnapshotType || e.serverSnapshotType,
                            p = b.hasEntryPointErrors || e.hasEntryPointErrors,
                            k = [];
                        c(e.L);
                        c(b.L);
                        var n = {
                            clientRequestGUID: f,
                            btGlobalAccountName: e.btGlobalAccountName
                        };
                        0 < k.length && (n.otherClientRequestGUIDs = k);
                        0 < d.yc(e.btTime, b.btTime).length && (n.btTime = d.yc(e.btTime, b.btTime));
                        null !== g && (n.serverSnapshotType = g);
                        null !== p && (n.hasEntryPointErrors = p);
                        return n
                    };
                    d.yc = function(a,
                        b) {
                        for (var c = a.concat(b), f = {}, d = {}, g = 0; g < c.length; g++) {
                            var k = c[g];
                            k.id in f || (f[k.id] = -1);
                            f[k.id] = Math.max(f[k.id], k.duration);
                            k.id in d || (d[k.id] = -1);
                            d[k.id] = Math.max(d[k.id], k.ert)
                        }
                        var c = [],
                            n;
                        for (n in f) f.hasOwnProperty(n) && c.push({
                            id: n,
                            duration: f[n],
                            ert: d[n]
                        });
                        return c
                    };
                    d.Ma = function(e) {
                        if (!a.utils.isArray(e)) return null;
                        for (var b = [], c = null, f = [], d = null, g = null, k = 0; k < e.length; k++) {
                            var n = e[k];
                            if ("string" !== typeof n) return null;
                            n = n.replace(/^"|"$/g, "");
                            n = decodeURIComponent(n).split(",")[0].replace(/^\s+|\s+$/g,
                                "").split(":");
                            if (2 === n.length) {
                                var r = n[1];
                                switch (n[0]) {
                                    case "clientRequestGUID":
                                    case "g":
                                        b.push(r);
                                        break;
                                    case "btId":
                                    case "i":
                                        f.push({
                                            id: r,
                                            duration: -1,
                                            ert: -1
                                        });
                                        break;
                                    case "btDuration":
                                    case "d":
                                        if (0 === f.length) return null;
                                        n = a.utils.Zc(r);
                                        if (!a.utils.pc(n) || -1 > n) return null;
                                        f[f.length - 1].duration = n;
                                        break;
                                    case "btERT":
                                    case "e":
                                        if (0 === f.length) return null;
                                        n = a.utils.Zc(r);
                                        if (!a.utils.pc(n) || -1 > n) return null;
                                        f[f.length - 1].ert = n;
                                        break;
                                    case "serverSnapshotType":
                                    case "s":
                                        d = r;
                                        break;
                                    case "globalAccountName":
                                    case "n":
                                        c =
                                            r;
                                        break;
                                    case "hasEntryPointErrors":
                                    case "h":
                                        g = r
                                }
                            }
                        }
                        return 0 === b.length ? null : {
                            L: b,
                            btGlobalAccountName: c,
                            btTime: f,
                            serverSnapshotType: d,
                            hasEntryPointErrors: g
                        }
                    };
                    d.Jh = f
                })(a.correlation || (a.correlation = {}))
            })(g || (g = {}));
            (function(a) {
                var d = a.conf || (a.conf = {});
                d.hh = 3E3;
                d.bd = a.isDebug;
                d.ye = 1E3;
                d.Td = 2;
                d.Sd = 5;
                d.Nd = 5;
                d.Od = 20;
                d.ob = 5E3;
                d.H = 512;
                d.de = 140;
                d.ge = 10;
                d.be = 30;
                d.fe = 10;
                d.he = 30;
                d.ce = 30;
                d.ee = 20;
                d.Yd = 100;
                d.qb = 2048;
                d.je = 2048;
                d.wc = {
                    eumAppKey: "ky",
                    userPageName: "un",
                    clientRequestGUID: "cg",
                    otherClientRequestGUIDs: "og",
                    baseGUID: "bg",
                    parentGUID: "mg",
                    parentPageUrl: "mu",
                    parentPageType: "mt",
                    parentLifecyclePhase: "pp",
                    pageType: "pt",
                    pageUrl: "pu",
                    pageReferrer: "pr",
                    pageTitle: "pl",
                    pageName: "pn",
                    navOrXhrMetrics: "mn",
                    cookieMetrics: "mc",
                    resourceTimingInfo: "rt",
                    userData: "ud",
                    userDataLong: "udl",
                    userDataDouble: "udd",
                    userDataBoolean: "udb",
                    userDataDate: "udt",
                    errors: "er",
                    ajaxError: "ae",
                    btGlobalAccountName: "btgan",
                    btTime: "bt",
                    serverSnapshotType: "ss",
                    hasEntryPointErrors: "se",
                    dataType: "dt",
                    geoCountry: "gc",
                    geoRegion: "gr",
                    geoCity: "gt",
                    localIP: "lp",
                    ip: "ip",
                    BEACONS: "B",
                    ver: "vr",
                    eom: "em",
                    agentId: "ai",
                    rootGUID: "rg",
                    events: "es",
                    guids: "gs",
                    urlParts: "up",
                    sequenceId: "si",
                    eventType: "et",
                    eventGUID: "eg",
                    parentType: "at",
                    serverMetadata: "sm",
                    eventUrl: "eu",
                    line: "ln",
                    message: "dm",
                    duration: "dn",
                    id: "id",
                    ert: "ert",
                    parentUrl: "au",
                    parentPageName: "an",
                    geo: "ge",
                    metrics: "mx",
                    timestamp: "ts",
                    country: "c",
                    region: "r",
                    city: "t",
                    method: "md"
                }
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() {
                            this.Ic = /;jsessionid=[^/?]+/
                        }
                        a.Hg = function(a) {
                            for (var e =
                                    0, c = 0; c < a.length; c++) e = (e << 5) - e + a.charCodeAt(c), e |= 0;
                            return e
                        };
                        a.prototype.G = function(a) {
                            if (null === a || void 0 === a) return null;
                            var e = a.match(this.Ic);
                            if (null != e) {
                                var c = a.indexOf("?");
                                if (0 > c || c > e.index) return a.replace(this.Ic, "")
                            }
                            return a
                        };
                        a.prototype.Yb = function(a) {
                            if (null === a || void 0 === a) return null;
                            var e = a.indexOf("?"),
                                c = a.indexOf("#");
                            0 > e && (e = Number.MAX_VALUE);
                            0 > c && (c = Number.MAX_VALUE);
                            return a.substring(0, Math.min(e, c))
                        };
                        a.prototype.mg = function(b) {
                            if (null === b || void 0 === b) return null;
                            var e = this.Yb(b);
                            return e + "?" + a.Hg(b.substring(e.length))
                        };
                        return a
                    }();
                    a.mh = f;
                    a.s = new f
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    d.parseURI = function(a) {
                        return (a = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/)) ? {
                            href: a[0] || "",
                            protocol: a[1] || "",
                            N: a[2] || "",
                            host: a[3] || "",
                            hostname: a[4] || "",
                            port: a[5] || "",
                            pathname: a[6] || "",
                            search: a[7] || "",
                            hash: a[8] || ""
                        } : null
                    };
                    d.absolutizeURI = function(a, c) {
                        function b(a) {
                            var b = [];
                            a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a) {
                                "/.." === a ? b.pop() : b.push(a)
                            });
                            return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
                        }
                        c = d.parseURI(c || "");
                        a = d.parseURI(a || "");
                        return c && a ? (c.protocol || a.protocol) + (c.protocol || c.N ? c.N : a.N) + b(c.protocol || c.N || "/" === c.pathname.charAt(0) ? c.pathname : c.pathname ? (a.N && !a.pathname ? "/" : "") + a.pathname.slice(0, a.pathname.lastIndexOf("/") + 1) + c.pathname : a.pathname) + (c.protocol || c.N || c.pathname ?
                            c.search : c.search || a.search) + c.hash : null
                    };
                    d.getFullyQualifiedUrl = function(f) {
                        try {
                            return d.absolutizeURI(document.location.href, f)
                        } catch (c) {
                            return a.exception(c, "M68", f, document.location.href), f
                        }
                    };
                    d.ba = function(a, c) {
                        if (3 >= c) return "...";
                        a.length > c && (a = a.substring(0, c - 3) + "...");
                        return a
                    };
                    d.Sg = function(a, c) {
                        if (3 >= c) return "...";
                        a.length > c && (a = a.substring(0, (c - 3) / 2) + "..." + a.substring(a.length - (c - 3) / 2, a.length));
                        return a
                    };
                    d.Tg = function(a, c) {
                        a.length <= c || (a = d.ba(a, c - 1), a += ":");
                        return a
                    };
                    d.Rg = function(a, c,
                        b, e, h, q) {
                        a = d.Tg(a, e);
                        c = d.ba(c, h);
                        b = d.ba(b, q);
                        return 0 < b.length ? a + "//" + c + ":" + b : a + "//" + c
                    };
                    d.Ug = function(f, c, b, e, h, q, m, g) {
                        b = d.Rg(f.protocol, f.hostname, f.port, b, e, h);
                        m = d.ba(f.search, m);
                        g = d.ba(f.hash, g);
                        f = f.pathname.split("/");
                        e = "";
                        0 < f.length && (e = f.pop(), e = d.Sg(e, q));
                        for (q = 0 == f.length ? b + e + m + g : b + f.join("/") + "/" + e + m + g; q.length > c;) {
                            if (0 >= f.length) return a.error("M69"), null;
                            f.pop();
                            f.push("...");
                            q = 0 == f.length ? b + e + m + g : b + f.join("/") + "/" + e + m + g;
                            f.pop()
                        }
                        return q
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f =
                        function() {
                            function a() {}
                            a.Ga = function() {
                                for (var b = 0; b < a.lb.length; b++) a.D[a.lb[b]] = a.w.Ed;
                                for (b = 0; b < a.jb.length; b++) a.D[a.jb[b]] = a.w.Bd;
                                a.D.js = a.w.re;
                                a.D.css = a.w.CSS;
                                a.D.svg = a.w.te;
                                a.D.html = a.w.kb;
                                a.D.htm = a.w.kb
                            };
                            a.Da = function(a) {
                                return a.duration ? a.duration : a.responseEnd && a.startTime ? a.responseEnd - a.startTime : -1
                            };
                            a.ec = function(b) {
                                var e;
                                return (b = b.pathname) && -1 != (e = b.lastIndexOf(".")) ? a.D[b.substring(e + 1, b.length).toLowerCase()] || a.w.tb : a.w.tb
                            };
                            a.w = {
                                Ed: "img",
                                re: "script",
                                CSS: "css",
                                te: "svg",
                                kb: "html",
                                Bd: "font",
                                tb: "other"
                            };
                            a.lb = "bmp gif jpeg jpg png webp".split(" ");
                            a.jb = ["ttf", "woff", "otf", "eot"];
                            a.D = {};
                            return a
                        }();
                    a.W = f;
                    f.Ga()
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a(b) {
                            function e(a) {
                                h.marks.push(0 == b[a] ? -1 : Math.round(b[a] - h.Bc))
                            }
                            this.marks = [];
                            var h = this;
                            this.Bc = b.startTime;
                            this.Of(b) ? (this.$b = a.gb, e("startTime"), e("fetchStart")) : (this.$b = a.xb, e("startTime"), e("redirectStart"), e("redirectEnd"), e("fetchStart"), e("domainLookupStart"), e("domainLookupEnd"),
                                e("connectStart"), e("connectEnd"), e("requestStart"), e("responseStart"));
                            e("responseEnd")
                        }
                        a.tf = function() {
                            var b = {};
                            b[a.xb] = a.qe;
                            b[a.gb] = a.td;
                            return b
                        };
                        a.prototype.Of = function(a) {
                            return this.B(a.redirectStart) && this.B(a.redirectEnd) && this.B(a.domainLookupStart) && this.B(a.domainLookupEnd) && this.B(a.connectStart) && this.B(a.connectEnd) && this.B(a.requestStart) && this.B(a.responseStart) && this.B(a.secureConnectionStart)
                        };
                        a.prototype.B = function(a) {
                            return !a || 0 === a
                        };
                        a.xb = 1;
                        a.gb = 2;
                        a.qe = "startTime redirectStart redirectEnd fetchStart dnsLookupStart dnsLookupEnd connectStart connectEnd requestStart responseStart responseEnd".split(" ");
                        a.td = ["startTime", "fetchStart", "responseEnd"];
                        return a
                    }();
                    a.wb = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() {}
                        a.prototype.qa = function(a, e) {
                            if (a) return a.slice(0, e)
                        };
                        return a
                    }();
                    a.Cd = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function c() {}
                        c.prototype.qa = function(b, e) {
                            if (b) {
                                if (b.length <= e) return b;
                                for (var c = [], f = 0; f < b.length; f++) c.push({
                                    Qa: b[f],
                                    index: f
                                });
                                c.sort(function(e, b) {
                                    return -(a.W.Da(e.Qa) - a.W.Da(b.Qa))
                                });
                                c = c.slice(0, e);
                                c.sort(function(a, e) {
                                    return a.index - e.index
                                });
                                for (var m = [], f = 0; f < c.length; f++) m.push(c[f].Qa);
                                return m
                            }
                        };
                        return c
                    }();
                    a.Ab = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function c() {}
                        c.prototype.qa = function(b, e) {
                            if (b) {
                                if (b.length <= e) return b;
                                for (var c = 1, f = Math.floor(Number.MAX_VALUE / 4), m = b.length; c < f;) {
                                    for (var g = b.length - 1; 0 <= g; g--)
                                        if (a.W.Da(b[g]) < c && (b.splice(g, 1), m--), m <= e) return b;
                                    c *= 4
                                }
                                return (new a.Ab).qa(b, e)
                            }
                        };
                        return c
                    }();
                    a.pe = f
                })(a.events ||
                    (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function b(e, h) {
                            this.version = 2;
                            this.resourceTimingInfo = {};
                            this.nc = {};
                            this.oc = {};
                            this.Jc = {};
                            this.Kc = {};
                            this.Ra = [];
                            this.De = function(e, b) {
                                if (e && b && 0 < b.length) {
                                    this.Pg = e;
                                    for (var h = new c, f = new c, q = 0; q < b.length; q++) {
                                        var g = b[q],
                                            u = a.utils.parseURI(a.utils.s.G(g.name)),
                                            y = g.initiatorType,
                                            z = d.W.ec(u),
                                            v = new d.wb(g);
                                        this.Ra.push({
                                            u: this.Vg(u),
                                            i: h.bc(this.oc, y),
                                            r: f.bc(this.Kc, z),
                                            f: v.$b,
                                            o: 0 === q && g.isBase ? 1 : Math.round(v.Bc),
                                            m: v.marks
                                        })
                                    }
                                }
                            };
                            var f =
                                b.qf();
                            this.Ne(f, e);
                            e = this.zg(f, e);
                            this.De(h || a.monitor.perfMonitor.navTiming && a.monitor.perfMonitor.navTiming.navigationStart, e)
                        }
                        b.Ga = function() {
                            var e = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.sampler;
                            b.yg = e && "FirstN" == e ? new d.Cd : e && "TopN" == e ? new d.Ab : new d.pe
                        };
                        b.prototype.lc = function(a, b) {
                            a[b] = a[b] ? a[b] + 1 : 1
                        };
                        b.prototype.Vg = function(e) {
                            return a.utils.Ug(e, a.conf.de, a.conf.ge, a.conf.be, a.conf.fe, a.conf.ee, a.conf.he, a.conf.ce)
                        };
                        b.prototype.Ne = function(a, b) {
                            a && this.mc(a);
                            if (b && 0 < b.length)
                                for (var c = 0; c < b.length; c++) this.mc(b[c])
                        };
                        b.prototype.mc = function(e) {
                            var b = a.utils.parseURI(a.utils.s.G(e.name)),
                                b = d.W.ec(b);
                            this.lc(this.nc, e.initiatorType);
                            this.lc(this.Jc, b)
                        };
                        b.prototype.zg = function(e, c) {
                            if (c && 0 < c.length) {
                                var d = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.maxNum || a.conf.Yd;
                                e && d--;
                                c = b.yg.qa(c, d);
                                e && c.unshift(e)
                            }
                            return c
                        };
                        b.prototype.build = function() {
                            return 0 == this.Ra.length ? null : {
                                v: this.version,
                                ic: this.nc,
                                it: this.oc,
                                rc: this.Jc,
                                rt: this.Kc,
                                f: d.wb.tf(),
                                t: this.Pg,
                                r: this.Ra
                            }
                        };
                        b.qf = function() {
                            var e = a.monitor.perfMonitor.navTiming,
                                b = null;
                            if (e) {
                                var b = {},
                                    c;
                                for (c in e) e.hasOwnProperty(c) && (b[c] = e[c]);
                                b.initiatorType = "other";
                                b.name = document.URL;
                                b.navigationStart && !b.startTime && (b.startTime = b.navigationStart);
                                b.isBase = !0
                            }
                            return b
                        };
                        return b
                    }();
                    d.ResourceTimingInfoBuilder = f;
                    var c = function() {
                        function a() {
                            this.gg = 1
                        }
                        a.prototype.bc = function(a, b) {
                            a[b] || (a[b] = this.gg++);
                            return a[b]
                        };
                        return a
                    }();
                    f.Ga()
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                a =
                    a.beacons || (a.beacons = {});
                a.numBeaconsSent = 0;
                a.beaconsSent = []
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.prototype.send = function(b, e) {
                            var c = (e ? a.conf.beaconUrlHttps : a.conf.beaconUrlHttp) + a.conf.corsEndpointPath + "/" + a.conf.appKey + "/adrum",
                                f;
                            a.utils.isDefined(a.xhrConstructor) && a.utils.isDefined(a.xhrOpen) ? (f = new a.xhrConstructor, a.xhrOpen.call(f, "POST", c)) : (f = new XMLHttpRequest, f.open("POST", c));
                            f.setRequestHeader("Content-type", "text/plain");
                            var g = a.utils.S(b);
                            null != g &&
                                (f.send(g), a.log("M70" + c + "\n"), a.log("<hr/>"), a.isDebug && d.beaconsSent.push(b), d.numBeaconsSent += 1)
                        };
                        return c
                    }();
                    d.sd = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            g || (g = {});
            (function(a) {
                var d = function() {
                    function f(a) {
                        this.rootGUID = null;
                        this.K = a.K;
                        this.la = a.la
                    }
                    f.prototype.fc = function() {
                        if (null === this.rootGUID) {
                            var c = this.yf();
                            this.rootGUID = c && c.correlation.getPageGUID() || a.correlation.getPageGUID()
                        }
                        return this.rootGUID
                    };
                    f.prototype.yf = function() {
                        return this.la && this.la.ADRUM || null
                    };
                    return f
                }();
                a.pd =
                    d
            })(g || (g = {}));
            (function(a) {
                a.beacons || (a.beacons = {})
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() {
                            this.count = 0;
                            this.O = {}
                        }
                        a.prototype.P = function(a) {
                            if (Object.prototype.hasOwnProperty.call(this.O, a)) return this.O[a];
                            this.O[a] = this.count;
                            this.count++;
                            return this.count - 1
                        };
                        a.prototype.ac = function() {
                            var a = [],
                                e;
                            for (e in this.O) Object.prototype.hasOwnProperty.call(this.O, e) && (a[this.O[e]] = e);
                            return a
                        };
                        return a
                    }();
                    a.nb = f
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f =
                        function() {
                            function a() {}
                            a.Ig = function(a) {
                                a = a || "";
                                var e = a.match(/([^:\/?#]+:\/\/)?([^?#]+)?(\?[^#]+)?(#.+)?/);
                                return e && e[0] == a ? (a = {}, e[1] && (a.protocol = e[1].substring(0, e[1].length - 3)), e[2] && (a.path = e[2]), e[3] && (a.Hc = e[3].substring(1)), e[4] && (a.anchor = e[4].substring(1)), a) : null
                            };
                            a.df = function(b, e) {
                                var h = a.Ig(b);
                                if (null != h) {
                                    var f = "";
                                    h.protocol && (f += e.P(h.protocol), f += "://");
                                    if (h.path)
                                        for (var d = h.path.split("/"), g = d.length, p = 0; p < g; p++) {
                                            var k = d[p];
                                            0 < k.length && (f += e.P(k));
                                            p != g - 1 && (f += "/")
                                        }
                                    h.Hc && (f = f +
                                        "?" + e.P(h.Hc));
                                    h.anchor && (f += "#", f += e.P(h.anchor));
                                    return f
                                }
                                return "" + e.P(b)
                            };
                            a.bf = function(a, e) {
                                return "" + e.P(a)
                            };
                            return a
                        }();
                    a.fb = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    (function(f) {
                        function c() {
                            var b = null,
                                c = null;
                            try {
                                b = localStorage[e]
                            } catch (f) {}
                            if (b) try {
                                (b = c = JSON.parse(b)) && "object" === typeof b && a.utils.isDefined(b[h]) && "string" === typeof b[h] && a.utils.isDefined(b[d]) && "number" === typeof b[d] ? g = c : a.error("M71")
                            } catch (n) {
                                a.exception(n, "M72"), delete localStorage[e]
                            }
                        }

                        function b() {
                            try {
                                localStorage[e] =
                                    a.utils.S(g)
                            } catch (b) {}
                        }
                        var e = "ADRUM_CLIENTINFO",
                            h = "agentId",
                            d = "seqId",
                            g;
                        c();
                        g || (g = {
                            agentId: a.utils.generateGUID(),
                            seqId: 0
                        }, b());
                        f.xh = function() {
                            return g.agentId
                        };
                        f.sf = function() {
                            c();
                            var a = g.seqId++;
                            b();
                            return a
                        }
                    })(d.Ob || (d.Ob = {}))
                })(a.Rc || (a.Rc = {}))
            })(g || (g = {}));
            (function(a) {
                a = a.U || (a.U = {});
                a.R || (a.R = {})
            })(g || (g = {}));
            (function(a) {
                a = a.U || (a.U = {});
                a.R || (a.R = {})
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    (function(f) {
                        var c = function() {
                            function b(e, b, c) {
                                this.wg = 0;
                                this.Pa = [];
                                this.kc = !1;
                                this.Ef = c;
                                var f = this;
                                a.utils.addEventListener(window, "message", function(a) {
                                    f.qg(a)
                                });
                                this.Df = a.utils.Te(b, e)
                            }
                            b.prototype.qg = function(e) {
                                var b;
                                try {
                                    if (b = JSON.parse(e.data), !0 === b.success)
                                        if (-1 === b.id && "iframe-ready" === b.data) this.kc = !0, this.Ef();
                                        else {
                                            if (this.Pa[b.id]) this.Pa[b.id](b.data)
                                        }
                                    else a.error("M73" + e.data + "]")
                                } catch (c) {
                                    a.exception(c, "M74")
                                }
                            };
                            b.prototype.send = function(e, b, c, f) {
                                if (this.kc) {
                                    var d = this.wg++;
                                    this.Pa[d] = f;
                                    this.Df.contentWindow.postMessage(a.utils.S({
                                        id: d,
                                        action: e,
                                        key: b,
                                        value: c
                                    }), "*")
                                }
                            };
                            b.prototype.generateGUID =
                                function(a, b) {
                                    this.send("generateGUID", a, null, b)
                                };
                            return b
                        }();
                        f.ud = c
                    })(d.R || (d.R = {}))
                })(a.U || (a.U = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function e() {
                            this.Hb = new c(e.md);
                            this.jd = new c(e.od);
                            this.bh = new b(e.nd)
                        }
                        e.prototype.init = function(b) {
                            this.channel = b;
                            a.utils.Mg() && a.utils.Lg() ? a.utils.Ng() && e.ag() ? this.Wg() : this.cd() : e.Ac = !0
                        };
                        e.prototype.cd = function() {
                            var b = this.Hb.load();
                            e.Zf(b) || (b = {
                                ver: a.conf.agentVer,
                                id: a.utils.generateGUID()
                            }, this.Hb.save(b));
                            e.M = b
                        };
                        e.prototype.Wg = function() {
                            var b =
                                this.jd.load();
                            if (e.$f(b)) e.M = b;
                            else {
                                a.log("M75");
                                var c = this;
                                this.bh.load(function(b) {
                                    b && (b = {
                                        ver: a.conf.agentVer,
                                        id: b,
                                        ttl: (new Date).getTime() + e.wd
                                    }, c.jd.save(b), e.M = b, a.log("M76"))
                                });
                                c = this;
                                a.utils.tryPeriodically(e.ya, function() {
                                    return c.isReady()
                                }, function() {
                                    c.onReady()
                                }, function() {
                                    c.Ka()
                                })
                            }
                        };
                        e.ag = function() {
                            return a.conf.userConf && a.conf.userConf.xd && a.conf.userConf.xd.enable
                        };
                        e.Zf = function(a) {
                            return a && a.id && 0 < a.id.length
                        };
                        e.$f = function(a) {
                            return a && a.id && 0 < a.id.length && 0 === a.id.indexOf("XD_") &&
                                a.ttl > (new Date).getTime()
                        };
                        e.prototype.isReady = function() {
                            return e.Ac || a.utils.isDefined(e.M)
                        };
                        e.prototype.onReady = function() {
                            this.channel.onResolverReady()
                        };
                        e.prototype.Ka = function() {
                            a.log("M77");
                            this.cd();
                            this.channel.onResolverReady()
                        };
                        e.ya = function(a) {
                            return 10 < a ? -1 : [1, 50, 100, 500][a - 1] || 1E3
                        };
                        e.md = "ADRUM_AGENT_INFO";
                        e.od = "ADRUM_XD_AGENT_INFO";
                        e.nd = "ADRUM_XD_AGENT_ID";
                        e.wd = 6048E5;
                        e.Ac = !1;
                        return e
                    }();
                    d.ca = f;
                    var c = function() {
                            function b(a) {
                                this.Gb = a
                            }
                            b.prototype.load = function() {
                                var b = null;
                                try {
                                    var e =
                                        localStorage.getItem(this.Gb);
                                    e && (b = JSON.parse(e))
                                } catch (c) {
                                    a.exception(c, "M78")
                                }
                                return b
                            };
                            b.prototype.save = function(b) {
                                try {
                                    var e = a.utils.S(b);
                                    e && localStorage.setItem(this.Gb, e)
                                } catch (c) {
                                    a.exception(c, "M79")
                                }
                            };
                            return b
                        }(),
                        b = function() {
                            function b(a) {
                                this.Ge = a
                            }
                            b.prototype.load = function(b) {
                                var e = this;
                                try {
                                    var c = new a.U.R.ud("cross-domain-store-server-iframe", a.conf.adrumXdUrl, function() {
                                        c.generateGUID(e.Ge, b)
                                    })
                                } catch (f) {
                                    a.exception(f, "M80")
                                }
                            };
                            return b
                        }()
                })(a.channel || (a.channel = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f =
                        function() {
                            function c() {}
                            c.prototype.Ia = function(b, e, f) {
                                b = {
                                    ver: a.conf.agentVer,
                                    dataType: "R",
                                    rootGUID: f.fc(),
                                    events: b
                                };
                                a.channel.ca.M && a.channel.ca.M.id && (b.agentId = a.channel.ca.M.id);
                                e && (b.geo = e);
                                return c.ug(b)
                            };
                            c.ug = function(b) {
                                a.isDebug || (b = c.Qe(b));
                                return b
                            };
                            c.Qe = function(b) {
                                var e = new a.utils.nb,
                                    f = new a.utils.nb;
                                b = a.utils.Fa(null, b, function(a) {
                                    return c.Ea(a)
                                }, function(b, g) {
                                    "string" == typeof g && g.length > a.conf.qb && (g = g.substr(0, a.conf.qb));
                                    c.Yf(b) && (a.utils.isString(g) && g.length > a.conf.H && (g = 3 < a.conf.H ?
                                        g.substr(0, a.conf.H - 3) : "", g += "..."), g = d.fb.df(g, e));
                                    c.Pf(b) && (g = d.fb.bf(g, f));
                                    return g
                                });
                                b[c.Ea("guids")] = f.ac();
                                b[c.Ea("urlParts")] = e.ac();
                                return b
                            };
                            c.Yf = function(a) {
                                return "eventUrl" == a || "parentUrl" == a || "pageReferrer" == a || "pageUrl" == a || "u" == a
                            };
                            c.Pf = function(a) {
                                return "eventGUID" == a || "parentGUID" == a || "rootGUID" == a || "clientRequestGUID" == a
                            };
                            c.Ea = function(b) {
                                if (a.conf.bd) return b;
                                var e = a.conf.wc[b];
                                return "undefined" === typeof e ? b : e
                            };
                            return c
                        }();
                    d.rd = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f =
                        function() {
                            function c() {}
                            c.prototype.send = function(a, e) {
                                for (var c = 0; c < a.length; c++) this.Bg(a[c], e)
                            };
                            c.prototype.Bg = function(b, e) {
                                var c = (e ? a.conf.beaconUrlHttps : a.conf.beaconUrlHttp) + a.conf.imageEndpointPath,
                                    f = new Image;
                                try {
                                    f.src = c + b
                                } catch (g) {}
                                a.isDebug && d.beaconsSent.push(b);
                                d.numBeaconsSent += 1
                            };
                            return c
                        }();
                    d.Jd = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                a.events || (a.events = {})
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.prototype.make = function(b) {
                            var e = {
                                eventGUID: b.guid(),
                                eventType: b.type(),
                                eventUrl: a.utils.s.G(b.url() || document.URL),
                                timestamp: (new Date).getTime()
                            };
                            b.type() !== a.EventType.BASE_PAGE && a.utils.mergeJSON(e, {
                                parentGUID: b.parentGUID() || a.correlation.getPageGUID(),
                                parentUrl: a.utils.s.G(b.parentUrl() || document.URL),
                                parentType: b.parentType() || (a.utils.compareWindows(top, window) ? a.EventType.BASE_PAGE : a.EventType.IFRAME)
                            });
                            b = a.EventType[b.type()];
                            b = d.we.Bf(b, a.conf.userConf, a.conf.je);
                            for (var c in b) e[c] = b[c];
                            return e
                        };
                        return c
                    }();
                    d.da = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.og = function(b, e) {
                            var c = !1;
                            if (null != b && a.utils.isObject(b)) {
                                var f = a.utils.S(b);
                                if (null == f || f.length <= e) c = !0
                            }
                            c || (a.log("User event info dropped because they are malformed or too long"), "undefined" !== typeof console && "undefined" !== typeof console.log && console.log("User event info dropped because they are malformed or too long"));
                            return c
                        };
                        c.Bf = function(b, e, f) {
                            var d = {};
                            return (b = e && e.userEventInfo && e.userEventInfo[b]) ? (d = a.utils.isFunction(b) ?
                                b.call(null, d) : b, c.og(d, f) ? d : {}) : {}
                        };
                        return c
                    }();
                    d.we = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            var s = this.Be || function(a, d) {
                function f() {
                    this.constructor = a
                }
                for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c]);
                f.prototype = d.prototype;
                a.prototype = new f
            };
            (function(a) {
                (function(d) {
                    var f = function(c) {
                        function b() {
                            c.apply(this, arguments)
                        }
                        s(b, c);
                        b.setPageName = function(a) {
                            b.Yg = a
                        };
                        b.addUserData = function(a, c) {
                            b.Ya = b.Ya || {};
                            b.Ya[a] = c
                        };
                        b.prototype.make = function(e) {
                            e = c.prototype.make.call(this, e || new d.PageView);
                            var f =
                                this.wf(),
                                g = this.rf();
                            a.conf.viz && (f && a.utils.Ba(document.getElementById(a.conf.viz), f, "navtime"), a.utils.Ba(document.getElementById(a.conf.viz), g, "cookie"));
                            g.PLC = 1;
                            f && (f.PLC = 1);
                            0 < a.monitor.ErrorMonitor.errorsSent && (g.EPM = 1, f && (f.EPM = 1));
                            a.utils.mergeJSON(e, {
                                eventGUID: a.correlation.getPageGUID(),
                                eventType: a.utils.compareWindows(top, window) ? a.EventType.BASE_PAGE : a.EventType.IFRAME,
                                cookieMetrics: g
                            });
                            var m = -1;
                            f && f.timestamp ? m = f.timestamp : g && g.timestamp && (m = g.timestamp);
                            0 < m && a.utils.mergeJSON(e, {
                                timestamp: m
                            });
                            f && (e.metrics = f);
                            document.referrer && null !== document.referrer && 0 < document.referrer.length && (e.pageReferrer = a.utils.s.G(document.referrer));
                            document.title && null !== document.title && 0 < document.title.length && (e.pageTitle = document.title);
                            f = a.correlation.gc();
                            null !== f && (e.serverMetadata = f);
                            f = a.monitor.perfMonitor.resTiming ? (new d.ResourceTimingInfoBuilder(a.monitor.perfMonitor.resTiming)).build() : null;
                            null !== f && (e.resourceTimingInfo = f);
                            a.utils.isDefined(e.userData) || (e.userData = b.Ya);
                            a.utils.isDefined(e.userPageName) ||
                                (e.userPageName = b.Yg);
                            b.userPageName = e.userPageName;
                            return e
                        };
                        b.prototype.wf = function() {
                            if (!a.monitor.perfMonitor.navTiming) return null;
                            var e = {},
                                c = b.cc(a.monitor.perfMonitor.navTiming, e, "NT"),
                                f = d.C[a.EventType.BASE_PAGE],
                                g;
                            for (g in f) {
                                var l = f[g];
                                c.add(l.name, l.start, l.end)
                            }
                            e.timestamp = a.monitor.perfMonitor.navTiming.navigationStart;
                            return e
                        };
                        b.prototype.rf = function() {
                            var e = {};
                            a.commands.marks && (b.cc(a.commands.marks, e, "CK").add("PLT", "starttime", "onload").add("FBT", "starttime", "firstbyte").add("FET",
                                "firstbyte", "onload").add("DRT", "firstbyte", "onready").add("PRT", "onready", "onload").add("DOM", "starttime", "onready"), e.timestamp = a.commands.marks.starttime ? a.commands.marks.starttime : a.commands.marks.firstbyte);
                            return e
                        };
                        b.Ce = function(b, c, f, d, g, p) {
                            c = d[c];
                            f = d[f];
                            c && f ? g[b] = f - c : a.log("M81", p, b, c, f)
                        };
                        b.cc = function(a, c, f) {
                            var d = {
                                add: function(g, p, k) {
                                    b.Ce(g, p, k, a, c, f);
                                    return d
                                }
                            };
                            return d
                        };
                        return b
                    }(d.da);
                    d.I = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    (function(f) {
                        function c(f, d) {
                            var h,
                                v = d[f],
                                k = typeof v;
                            r.push(f);
                            var l = n[r.join(".")];
                            if (a.utils.isFunction(l)) h = l(v);
                            else switch (k) {
                                case "string":
                                    h = "number" == typeof l ? p(v, e, l) : e(v);
                                    break;
                                case "number":
                                    h = m(v);
                                    break;
                                case "object":
                                    if (v)
                                        if (a.utils.isArray(v)) h = g(v, !1, !1);
                                        else {
                                            h = [];
                                            for (var t in v) Object.prototype.hasOwnProperty.call(v, t) && (k = c(t, v)) && (b(f) && "timestamp" == t || h.push({
                                                na: t,
                                                v: k
                                            }));
                                            if (b(f)) {
                                                for (v = 0; v < h.length; v++) h[v] = h[v].na + e(":") + h[v].v;
                                                h = e("{") + h.join(e(",")) + e("}")
                                            } else {
                                                for (v = 0; v < h.length; v++) t = h[v], k = t.na, a.conf.bd || ((l =
                                                    a.conf.wc[t.na]) ? k = l : a.error("M82", t.na)), h[v] = k + "=" + t.v;
                                                h = h.join("&")
                                            }
                                        }
                                    else h = null
                            }
                            r.pop();
                            return h
                        }

                        function b(a) {
                            return "navOrXhrMetrics" == a || "cookieMetrics" == a
                        }

                        function e(a) {
                            return "undefined" === typeof a || null === a || 0 === a.length ? null : encodeURIComponent(a)
                        }

                        function d(a) {
                            return encodeURIComponent(encodeURIComponent(a))
                        }

                        function g(a, b, f) {
                            void 0 === b && (b = !1);
                            void 0 === f && (f = !0);
                            if (0 === a.length) return null;
                            var d = [];
                            if (b) d = a;
                            else
                                for (b = 0; b < a.length; b++) d.push(c(b, a));
                            return e("[") + d.join(e(",")) + e(f ? ">" :
                                "]")
                        }

                        function m(a) {
                            a = Math.round(a);
                            a < f.sb && (a = f.sb);
                            a > f.pb && (a = f.pb);
                            return e(a)
                        }

                        function l(a, b) {
                            if (a > b || 0 > a) a = f.me;
                            return e(a)
                        }

                        function p(b, e, c, f) {
                            void 0 === f && (f = !0);
                            if ("undefined" === typeof b || null === b || 0 === b.length) return null;
                            var d = 3 <= c ? "..." : "";
                            a.assert(c >= d.length);
                            for (var g = !1, h = null;;) {
                                try {
                                    h = e(b);
                                    if (null === h) return null;
                                    if (h.length <= c) break
                                } catch (q) {}
                                var m;
                                g ? m = b.length - 1 : (g = !0, m = c -= d.length);
                                var k = f ? 0 : Math.max(b.length - m, 0);
                                b = b.substr(k, m)
                            }
                            g && (h = f ? h + d : d + h);
                            return h
                        }

                        function k(b, e, c) {
                            if (0 ==
                                c) return f.va;
                            if (e < b) return 0;
                            e = f.va + (e - b) / c;
                            a.assert(e >= f.va);
                            a.log("M83", b, e);
                            return e
                        }
                        f.me = -1;
                        f.H = 180;
                        f.$d = 50;
                        f.ae = 50;
                        f.Vd = 40;
                        f.va = 50;
                        f.Kd = 50;
                        f.rb = 128;
                        f.Qd = 30;
                        f.Rd = 30;
                        f.Pd = 30;
                        f.Wd = 8;
                        f.sb = -99999;
                        f.pb = 999999;
                        f.Ld = 2E3;
                        f.Zd = 2;
                        f.Md = 99999999;
                        var n = {
                                ".pageUrl": f.H,
                                ".parentPageUrl": f.H,
                                ".pageReferrer": f.H,
                                ".pageTitle": f.$d,
                                ".userPageName": f.ae,
                                ".geoCountry": f.Qd,
                                ".geoRegion": f.Rd,
                                ".geoCity": f.Pd,
                                ".localIP": f.Wd,
                                ".otherClientRequestGUIDs": function(a) {
                                    a = a || [];
                                    var b = a.slice(0, f.Zd);
                                    return g(b, !1, b.length <
                                        a.length)
                                },
                                ".btTime": function(b) {
                                    b = b || [];
                                    for (var e = b.slice(0, a.conf.Nd), c = [], d = 0; d < e.length; d++) {
                                        var h = e[d];
                                        c.push(g([l(Number(h[0]), f.Md), m(h[1]), m(h[2])], !0, !1))
                                    }
                                    return g(c, !0, e.length < b.length)
                                },
                                ".ajaxError": function(a) {
                                    return g([d(a[0]), p(a[1], d, f.Kd)], !0, !1)
                                },
                                ".userData": function(a) {
                                    a = a || [];
                                    for (var b = !1, e = 0, c = [], m = 0; m < a.length; m++) {
                                        var k = a[m];
                                        c[m] = g([d(k[0]), d(k[1])], !0, !1);
                                        e += c[m].length;
                                        if (e > f.rb) {
                                            b = !0;
                                            break
                                        }
                                    }
                                    for (;;) {
                                        a = g(c, !0, b);
                                        if (null === a || a.length <= f.rb) return a;
                                        c.pop();
                                        b = !0
                                    }
                                }
                            },
                            r = [];
                        f.af =
                            function(b, e) {
                                void 0 === e && (e = !0);
                                r = [];
                                var n = [];
                                b.errors && (n = b.errors, b.errors = null);
                                var l = c("", {
                                    "": b
                                });
                                if (n && 0 < n.length) {
                                    for (var s = k(e ? 870 : 354, f.Ld - l.length, n.length), x = [], t = 0; t < n.length; t++) {
                                        var w = n[t],
                                            A = a.utils.s.Yb(a.utils.s.G(w[0]));
                                        x.push(g([p(A, d, f.Vd, !1), m(w[1]), p(w[2], d, s)], !0, !1))
                                    }
                                    n = g(x, !0, !1);
                                    l += "&errors=" + n
                                }
                                return l
                            };
                        f.vh = c;
                        f.Qh = e;
                        f.element = d;
                        f.ph = g;
                        f.rh = m;
                        f.Ih = l;
                        f.truncate = p;
                        f.Nh = k
                    })(d.mb || (d.mb = {}))
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.prototype.Ia = function(b, e, f) {
                            for (var g = [], m = [], l = null, p = [], k = 0; k < b.length; k++) {
                                var n = b[k];
                                if (n.eventType === a.EventType.PAGE_ERROR) {
                                    var r = n;
                                    m.push([n.eventUrl, r.line, r.message])
                                } else {
                                    if (n.eventType === a.EventType.BASE_PAGE || n.eventType === a.EventType.IFRAME) l = n;
                                    p.push(n)
                                }
                            }
                            b = p;
                            if (0 < m.length)
                                for (l && (l.errors = m.splice(0, a.conf.Td)); 0 < m.length;) n = m.splice(0, a.conf.Sd), l = c.sg.make(), l.errors = n, l.isErrorEvent = !0, l.cookieMetrics = null, l.metrics = null, l.resourceTimingInfo = null, b.push(l);
                            for (m = 0; m < b.length; m++) n =
                                b[m], a.log("M84"), n.resourceTimingInfo = null, c.mf(n, e, f), l = c.transform(n), g.push(d.mb.af(l, n.isErrorEvent));
                            return g
                        };
                        c.mf = function(b, e, c) {
                            b.ver = this.Fd;
                            b.rootGUID = c.fc();
                            b.geo = e;
                            b.dataType = "R";
                            b.eom = 1;
                            b.eumAppKey = a.conf.appKey;
                            b.PLC = 1
                        };
                        c.transform = function(a) {
                            var e = {};
                            c.fd("", {
                                "": a
                            }, e);
                            return e
                        };
                        c.fd = function(b, e, f) {
                            e = e[b];
                            var d = c.uc[b];
                            if ("metrics" === b || "cookieMetrics" === b) f[d] = e;
                            else if ("btTime" === b && a.utils.isArray(e) && 0 < e.length) {
                                b = [];
                                for (var g = 0; g < e.length; g++) b.push([e[g].id, e[g].duration, e[g].ert]);
                                f[d] = b
                            } else if ("userData" === b && a.utils.isObject(e)) f[d] = a.utils.dg(e);
                            else if (a.utils.isObject(e))
                                for (g in e) Object.prototype.hasOwnProperty.call(e, g) && c.fd(g, e, f);
                            else c.uc[b] && ("eventType" === b && e > a.EventType.XHR && (e = a.utils.compareWindows(top, window) ? a.EventType.BASE_PAGE : a.EventType.IFRAME), f[d] = e)
                        };
                        c.sg = new a.events.I;
                        c.Fd = 3;
                        c.uc = {
                            eumAppKey: "eumAppKey",
                            userPageName: "userPageName",
                            rootGUID: "baseGUID",
                            parentGUID: "parentGUID",
                            parentUrl: "parentPageUrl",
                            parentType: "parentPageType",
                            parentLifecyclePhase: "parentLifecyclePhase",
                            eventType: "pageType",
                            eventUrl: "pageUrl",
                            pageReferrer: "pageReferrer",
                            pageTitle: "pageTitle",
                            metrics: "navOrXhrMetrics",
                            xhrMetrics: "navOrXhrMetrics",
                            resourceTimingInfo: "resourceTimingInfo",
                            cookieMetrics: "cookieMetrics",
                            userData: "userData",
                            errors: "errors",
                            ajaxError: "ajaxError",
                            dataType: "dataType",
                            country: "geoCountry",
                            region: "geoRegion",
                            city: "geoCity",
                            localIP: "localIP",
                            ver: "ver",
                            eom: "eom",
                            eventGUID: "clientRequestGUID",
                            otherClientRequestGUIDs: "otherClientRequestGUIDs",
                            btTime: "btTime",
                            serverSnapshotType: "serverSnapshotType",
                            hasEntryPointErrors: "hasEntryPointErrors"
                        };
                        return c
                    }();
                    d.Id = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() {}
                        a.prototype.send = function() {};
                        return a
                    }();
                    a.Ad = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function() {
                        function a() {}
                        a.prototype.Ia = function() {
                            return null
                        };
                        return a
                    }();
                    a.zd = f
                })(a.beacons || (a.beacons = {}))
            })(g || (g = {}));
            (function(a) {
                var d = function() {
                    function f() {}
                    f.Qb = function(c, b) {
                        if (!c) return null;
                        var e = c.ADRUM.lifecycle;
                        if (!e || !e.getPhaseCallbackTime) return null;
                        var f = b.getPhaseCallbackTime("AT_ONLOAD"),
                            e = e.getPhaseCallbackTime("AT_ONLOAD"),
                            d = null == e;
                        return null == f ? (a.error("M85"), null) : a.lifecycle.getPhaseID(d || f <= e ? "AFTER_FIRST_BYTE" : "AFTER_ONLOAD")
                    };
                    return f
                }();
                a.oe = d;
                a.cPLPI = d.Qb
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c(b) {
                            this.ready = !1;
                            this.geoResolverUrl = b + "/resolve.js";
                            this.rg() && (this.geoResolverUrl += "?ip=" + encodeURIComponent(a.conf.userConf.geo.localIP))
                        }
                        c.prototype.rg = function() {
                            return this.Tb() &&
                                a.utils.isDefined(a.conf.userConf.geo.localIP) && !a.utils.isDefined(a.conf.userConf.geo.city) && !a.utils.isDefined(a.conf.userConf.geo.region) && !a.utils.isDefined(a.conf.userConf.geo.country)
                        };
                        c.prototype.He = function() {
                            return this.Tb() && a.utils.isDefined(a.conf.userConf.geo.localIP) && a.utils.isDefined(a.conf.userConf.geo.city) && a.utils.isDefined(a.conf.userConf.geo.region) && a.utils.isDefined(a.conf.userConf.geo.country)
                        };
                        c.prototype.Tb = function() {
                            return a.utils.isDefined(a.conf.userConf) && a.utils.isDefined(a.conf.userConf.geo)
                        };
                        c.prototype.cf = function(a) {
                            if (null == a || 0 == a.length) return null;
                            a = a.split(".");
                            if (4 != a.length) return null;
                            for (var e = [], c = 0; c < a.length; c++) {
                                var f = parseInt(a[c]);
                                if (isNaN(f) || 0 > f || 255 < f) return null;
                                e.push(("0" + f.toString(16)).slice(-2))
                            }
                            return e.join("")
                        };
                        c.prototype.init = function(b) {
                            this.channel = b;
                            if (this.He()) a.geo = {
                                failed: !1,
                                result: {
                                    country: a.conf.userConf.geo.country,
                                    region: a.conf.userConf.geo.region,
                                    city: a.conf.userConf.geo.city,
                                    localIP: this.cf(a.conf.userConf.geo.localIP)
                                }
                            }, this.channel.Sc(a.geo.result);
                            else {
                                a.geo = {
                                    failed: !1,
                                    result: null
                                };
                                a.utils.loadScriptAsync(this.geoResolverUrl);
                                var e = this;
                                a.utils.tryPeriodically(c.ya, function() {
                                    return e.isReady()
                                }, function() {
                                    e.onReady()
                                }, function() {
                                    e.Ka()
                                })
                            }
                        };
                        c.prototype.isReady = function() {
                            this.ready || (this.ready = a.geo && (a.geo.failed || null !== a.geo.result)) || a.log("M86");
                            return this.ready
                        };
                        c.prototype.onReady = function() {
                            a.geo.failed ? a.log("M87") : (a.assert("object" === typeof a.geo.result), a.log("M88", a.geo.result));
                            a.geo && a.geo.result && this.channel.Sc(a.geo.result);
                            this.channel.onResolverReady()
                        };
                        c.prototype.Ka = function() {
                            a.log("M89");
                            this.ready = !0;
                            this.channel.onResolverReady()
                        };
                        c.ya = function(a) {
                            return 10 < a ? -1 : [1, 50, 100, 500][a - 1] || 1E3
                        };
                        return c
                    }();
                    d.Dd = f
                })(a.channel || (a.channel = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {
                            this.ready = !1;
                            this.channel = null
                        }
                        c.prototype.init = function(b) {
                            this.channel = b;
                            c.n = c.pf();
                            this.ready = !c.n.K;
                            var e = this;
                            if (c.n.K) a.log("M90"), c.n.K.ADRUM.command("listenForOkToSendChildFrameBeacons", function() {
                                a.log("M91");
                                e.ready = !0;
                                e.onReady()
                            });
                            else e.onReady()
                        };
                        c.prototype.isReady = function() {
                            this.isReady || a.log("M92");
                            return this.ready
                        };
                        c.prototype.onReady = function() {
                            this.channel.Cg(c.n);
                            this.channel.onResolverReady()
                        };
                        c.pf = function() {
                            if (!c.n) {
                                for (var b = c.of(), e = [], f = 0; f < b.length; f++) try {
                                    b[f].ADRUM && e.push(b[f])
                                } catch (d) {}
                                c.n = new a.pd({
                                    K: 0 < e.length ? e[0] : null,
                                    la: 0 < e.length ? e[e.length - 1] : null
                                })
                            }
                            return c.n
                        };
                        c.of = function() {
                            for (var b = [], e = window; !a.utils.compareWindows(e, top);) e = e.parent, b.push(e);
                            return b
                        };
                        c.n = null;
                        return c
                    }();
                    d.qd = f
                })(a.channel || (a.channel = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function b(b, c, f) {
                            this.events = [];
                            this.J = {};
                            this.ka = NaN;
                            this.F = [];
                            this.Ca = !1;
                            this.bufferMode = a.conf.userConf && a.conf.userConf.channel && "undefined" !== typeof a.conf.userConf.channel.bufferMode ? a.conf.userConf.channel.bufferMode : !0;
                            this.ra = -1;
                            this.Qg = b;
                            this.Ie = c;
                            a.utils.isDefined(f) && "" !== f && this.F.push(new d.Dd(f));
                            this.F.push(new d.qd);
                            this.F.push(new d.ca)
                        }
                        b.create = function() {
                            var e, c;
                            b.Nf() && !b.Rf() ?
                                (e = new a.beacons.sd, c = new a.beacons.rd) : b.Tf() ? (e = new a.beacons.Ad, c = new a.beacons.zd) : (e = new a.beacons.Jd, c = new a.beacons.Id);
                            e = new b(e, c, a.conf.geoResolverUrl);
                            e.init();
                            return e
                        };
                        b.prototype.init = function() {
                            for (var a = 0; a < this.F.length; a++) this.F[a].init(this)
                        };
                        b.prototype.ah = function(b) {
                            return (b.parentType === a.EventType.VIRTUAL_PAGE || b.parentType === a.EventType.NG_VIRTUAL_PAGE) && null !== this.J[b.parentGUID]
                        };
                        b.prototype.vg = function(b) {
                            var c = b.parentGUID;
                            if (!a.utils.isDefined(this.J[c])) {
                                this.J[c] = [];
                                var f = this,
                                    d = b.eventGUID;
                                setTimeout(function() {
                                    f.Aa(d)
                                }, 1E4)
                            }
                            this.J[c].push(b)
                        };
                        b.prototype.report = function(e) {
                            e.sequenceId = a.Rc.Ob.sf();
                            e.timestamp = e.timestamp || a.utils.now();
                            this.ah(e) ? this.vg(e) : this.events.push(e);
                            1 == this.events.length && (this.ka = a.utils.now());
                            var c = e.parentGUID;
                            c && c !== a.correlation.getPageGUID() || this.Aa(e.eventGUID);
                            b.Sf(e) && (this.Ca = !0);
                            this.Va()
                        };
                        b.prototype.Aa = function(a) {
                            var b = this.J[a];
                            this.J[a] = null;
                            if (b && 0 != b.length)
                                for (this.events = this.events.concat(b), a = 0; a < b.length; a++) this.Aa(b[a].eventGUID)
                        };
                        b.prototype.Uf = function(b) {
                            return b.eventType === a.EventType.BASE_PAGE || b.eventType === a.EventType.IFRAME
                        };
                        b.prototype.Je = function() {
                            for (var b = 0; b < this.events.length; b++) {
                                var c = this.events[b];
                                if (this.Uf(c)) {
                                    var f = this.n.K;
                                    null !== f && (c.parentLifecyclePhase = a.oe.Qb(f, a.lifecycle), c.parentGUID = f.ADRUM.correlation.getPageGUID(), c.parentUrl = a.utils.s.G(f.document.URL), a.utils.isDefined(f.ADRUM.events.I.userPageName) && (c.parentPageName = f.ADRUM.events.I.userPageName), c.parentType = a.utils.compareWindows(top,
                                        f) ? a.EventType.BASE_PAGE : a.EventType.IFRAME)
                                }
                            }
                        };
                        b.prototype.sendBeacon = function() {
                            if (0 == this.events.length) a.log("M93");
                            else {
                                this.Je();
                                var b = this.Xg(this.events, this.n),
                                    c = this.Ie.Ia(this.events, this.nf, this.n);
                                this.Qg.send(c, b);
                                this.events = [];
                                this.ka = Number.POSITIVE_INFINITY
                            }
                        };
                        b.prototype.onResolverReady = function() {
                            this.Va()
                        };
                        b.prototype.Sc = function(a) {
                            this.nf = a
                        };
                        b.prototype.Cg = function(a) {
                            this.n = a
                        };
                        b.prototype.addResolver = function(a) {
                            a.init(this);
                            this.F.push(a)
                        };
                        b.prototype.xg = function() {
                            for (var a =
                                    0; a < this.F.length; a++)
                                if (!this.F[a].isReady()) return !1;
                            return !0
                        };
                        b.prototype.tc = function() {
                            return this.ka + a.conf.ob > a.utils.now()
                        };
                        b.prototype.Wf = function() {
                            return this.events.length < a.conf.Od
                        };
                        b.prototype.Xg = function(a, c) {
                            for (var f = !1, d = 0; d < a.length; d++) {
                                var g = a[d];
                                if (g.eventUrl && 0 == g.eventUrl.indexOf("https:")) {
                                    f = !0;
                                    break
                                }
                            }
                            return f || b.Qf(c.K)
                        };
                        b.prototype.getEventsWithParentGUID = function(a) {
                            return this.J[a] || []
                        };
                        b.prototype.Va = function() {
                            if (this.xg())
                                if (this.$g()) {
                                    if (this.tc() && 0 < this.events.length &&
                                        0 > this.ra) {
                                        var b = this;
                                        this.ra = setTimeout(function() {
                                            b.Va()
                                        }, a.conf.ob + this.ka - a.utils.now())
                                    }
                                } else clearTimeout(this.ra), this.ra = -1, this.Ca = !1, this.sendBeacon()
                        };
                        b.Sf = function(b) {
                            return b.eventType === a.EventType.BASE_PAGE || b.eventType === a.EventType.IFRAME || b.eventType === a.EventType.VIRTUAL_PAGE
                        };
                        b.prototype.$g = function() {
                            return this.bufferMode && !this.Ca && this.Wf() && this.tc()
                        };
                        b.Qf = function(a) {
                            return a && a.document.URL && 0 == a.document.URL.indexOf("https:")
                        };
                        b.Nf = function() {
                            var a = "undefined" !== typeof JSON &&
                                !(!JSON || !JSON.stringify);
                            return window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && a
                        };
                        b.Rf = function() {
                            return "true" === a.conf.sendImageBeacon || !0 === window["adrum-send-image-beacon"]
                        };
                        b.Tf = function() {
                            return a.conf.userConf && a.conf.userConf.beacon && a.conf.userConf.beacon.neverSendImageBeacon
                        };
                        return b
                    }();
                    d.Channel = f;
                    var c = f.create();
                    d.report = function(a) {
                        c.report(a)
                    };
                    d.addResolver = function(a) {
                        c.addResolver(a)
                    };
                    d.getEventsWithParentGUID = function(a) {
                        return c.getEventsWithParentGUID(a)
                    }
                })(a.channel ||
                    (a.channel = {}))
            })(g || (g = {}));
            (function(a) {
                var d = function() {
                    function f() {}
                    f.Fc = function() {
                        return window.attachEvent ? window.addEventListener ? this.Xa : this.$c : this.ad
                    };
                    f.Ec = function(c) {
                        var b = null;
                        switch (f.Fc()) {
                            case f.ad:
                                b = c.parentPhase();
                                break;
                            case f.Xa:
                                b = a.lifecycle.findPhaseAtNominalTime(c.getSendTime());
                                break;
                            case f.$c:
                                b = null
                        }
                        return a.lifecycle.getPhaseID(b)
                    };
                    f.ad = "uCT";
                    f.Xa = "uNET";
                    f.$c = "tIA";
                    return f
                }();
                a.ia = d
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function(c) {
                        function b() {
                            c.apply(this, arguments)
                        }
                        s(b, c);
                        b.prototype.make = function(e) {
                            var f = c.prototype.make.call(this, e),
                                g = e.url(),
                                m = e.getSendTime(),
                                l = e.getFirstByteTime(),
                                p = e.getRespAvailTime(),
                                k = e.getRespProcTime();
                            a.assert(null !== g && null !== m && null !== l && null !== p && null !== k, "missing some pieces of XHR data: url=" + g + ", send=" + m + ", fbt=" + l + ", rat=" + p + ", eut=" + k + ", parentPhase=" + e.parentPhase());
                            if (null === g || null === m || null === l || null === p || null === k) return null;
                            g = {
                                PLC: 1,
                                FBT: l - m,
                                DDT: p - l,
                                DPT: k - p,
                                PLT: k - m,
                                ARE: a.error ? 1 : 0
                            };
                            m = a.utils.getFullyQualifiedUrl(e.url());
                            if (!b.bg(g, m)) return null;
                            a.conf.viz && a.utils.Ba(document.getElementById(a.conf.viz), g, "xhr");
                            a.utils.mergeJSON(f, {
                                eventUrl: a.utils.s.G(m),
                                parentType: e.parentType() || a.EventType.BASE_PAGE,
                                parentLifecyclePhase: e.parentPhaseId(),
                                metrics: g,
                                method: e.method(),
                                timestamp: e.timestamp()
                            });
                            a.utils.Dg(f, "parentPageName", d.I.userPageName);
                            return f
                        };
                        b.bg = function(b, c) {
                            for (var f in b)
                                if (b.hasOwnProperty(f)) {
                                    var d = b[f];
                                    if (0 > d) return a.error("XHR " + f + " [" + d + "] " + c), !1
                                }
                            return !0
                        };
                        return b
                    }(d.da);
                    d.Cb = f
                })(a.events ||
                    (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function(c) {
                        function b() {
                            c.apply(this, arguments)
                        }
                        s(b, c);
                        b.prototype.make = function(b) {
                            var f = c.prototype.make.call(this, b);
                            if (f) {
                                var d = b.xhr();
                                b = d.getAllResponseHeaders();
                                var g = d.status,
                                    l = 400 <= d.status ? d.responseText : null,
                                    d = null;
                                400 <= g && (d = [g, l || ""]);
                                (b = a.correlation.zf(b)) && null !== b && null !== b.clientRequestGUID && (f.eventGUID = b.clientRequestGUID);
                                null !== b && (f.serverMetadata = b);
                                null !== d && (f.ajaxError = d)
                            }
                            return f
                        };
                        return b
                    }(d.Cb);
                    d.ld = f
                })(a.events ||
                    (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function(c) {
                        function b() {
                            c.apply(this, arguments)
                        }
                        s(b, c);
                        b.prototype.make = function(b) {
                            var f = c.prototype.make.call(this, b);
                            a.utils.mergeJSON(f, {
                                message: b.msg() || "",
                                timestamp: b.timestamp(),
                                line: b.line(),
                                stack: b.stack()
                            });
                            return f
                        };
                        return b
                    }(d.da);
                    d.ne = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    (function(f) {
                        f.build = function(c) {
                            var b = {},
                                e = a.C[c.type()],
                                f;
                            for (f in e) {
                                var g = e[f];
                                if (null !== g.name && c.g.getEntryByName(g.start) &&
                                    c.g.getEntryByName(g.end)) {
                                    c.g.measure(g.name, g.start, g.end);
                                    var m = c.g.getEntryByName(g.name);
                                    b[g.name] = m && 0 <= m.duration && m.duration || null
                                }
                            }
                            for (f in b) b[f] = Math.round(b[f]);
                            return b
                        }
                    })(a.zb || (a.zb = {}))
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function(c) {
                        function b() {
                            c.apply(this, arguments)
                        }
                        s(b, c);
                        b.prototype.make = function(b) {
                            var f = c.prototype.make.call(this, b),
                                g = a.zb.build(b);
                            g.PLC = 1;
                            f.metrics = g;
                            f.timestamp = b.timestamp();
                            b = (new a.ResourceTimingInfoBuilder(b.resTiming())).build();
                            null !== b && (f.resourceTimingInfo = b);
                            return f
                        };
                        return b
                    }(a.da);
                    a.Bb = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    var f = function(a) {
                        function b() {
                            a.apply(this, arguments)
                        }
                        s(b, a);
                        b.prototype.make = function(b) {
                            var f = a.prototype.make.call(this, b);
                            f && (f.metrics.VDC = b.digestCount() || 0);
                            return f
                        };
                        return b
                    }(a.Bb);
                    a.le = f
                })(a.events || (a.events = {}))
            })(g || (g = {}));
            (function(a) {
                var d = a.events || (a.events = {});
                d.Na = {};
                a = [{
                    T: d.PageView,
                    Q: new d.I
                }, {
                    T: d.Ajax,
                    Q: new d.Cb
                }, {
                    T: d.AdrumAjax,
                    Q: new d.ld
                }, {
                    T: d.Error,
                    Q: new d.ne
                }, {
                    T: d.VPageView,
                    Q: new d.Bb
                }, {
                    T: a.ng.NgVPageView,
                    Q: new d.le
                }];
                for (var f = 0; f < a.length; f++) {
                    var c = a[f];
                    c.T.prototype._regId = f;
                    d.Na[f] = c.Q
                }
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    d.reportEvent = function(f) {
                        var c = !!a.events.Na[f._regId];
                        c || a.log("M95" + a.EventType[a.eventType]);
                        c && (c = a.events.Na[f._regId].make(f), a.utils.isDefined(c) && (a.log("M94", a.EventType[f.type()]), a.channel.report(c)))
                    }
                })(a.reporter || (a.reporter = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {
                            this.ready = !1
                        }
                        c.prototype.onReady = function(a) {
                            this.ready = a;
                            this.channel.onResolverReady()
                        };
                        c.prototype.isReady = function() {
                            this.ready || a.log("M96");
                            return this.ready
                        };
                        c.prototype.init = function(a) {
                            this.channel = a
                        };
                        return c
                    }();
                    d.Ae = f
                })(a.commands || (a.commands = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = new d.Ae;
                    a.channel.addResolver(f);
                    d.marks = {};
                    d.mark = function(c, b) {
                        a.log("M97", c, b);
                        d.marks[c] = b
                    };
                    d.reportOnload = function(c) {
                        setTimeout(function() {
                            a.log("M98");
                            f.onReady(!0);
                            a.reporter.reportEvent(c)
                        }, a.conf.ye)
                    };
                    d.reportEvent = function() {
                        a.reporter.reportEvent.apply(a.reporter, arguments)
                    };
                    d.addResolver = function(c) {
                        a.channel.addResolver(c)
                    };
                    d.reportXhr = function(c) {
                        a.log("M99");
                        a.ia.Fc() == a.ia.Xa ? (a.log("M100"), setTimeout(function() {
                            c.parentPhaseId(a.ia.Ec(c));
                            a.reporter.reportEvent(c)
                        }, 0)) : (c.parentPhaseId(a.ia.Ec(c)), a.reporter.reportEvent(c))
                    };
                    d.listenForOkToSendChildFrameBeacons = function(c) {
                        a.log("M101");
                        try {
                            c()
                        } catch (b) {
                            a.exception(b, "M102")
                        }
                    };
                    d.reportPageError = function(c) {
                        var b = c.url();
                        a.log("M103", c.msg(),
                            b, c.line(), c.stack());
                        b && 0 !== b.length || c.url("CROSSORIGIN");
                        a.reporter.reportEvent(c)
                    };
                    d.setPageName = function(c) {
                        a.events.I.setPageName(c)
                    };
                    d.addUserData = function(c, b) {
                        a.events.I.addUserData(c, b)
                    };
                    d.call = function(a) {
                        a()
                    }
                })(a.commands || (a.commands = {}))
            })(g || (g = {}));
            (function(a) {
                (function(a) {
                    a.Wb = function(f) {
                        return encodeURIComponent(a.s.mg(f))
                    }
                })(a.utils || (a.utils = {}))
            })(g || (g = {}));
            (function(a) {
                (function(d) {
                    var f = function() {
                        function c() {}
                        c.prototype.setUp = function() {
                            this.eg();
                            a.utils.addEventListener(window,
                                "pagehide", c.bb);
                            a.utils.addEventListener(window, "beforeunload", c.bb);
                            a.utils.addEventListener(window, "unload", c.bb)
                        };
                        c.prototype.eg = function() {
                            (this.startTime = c.kf() || c.jf()) && a.commands.mark("starttime", this.startTime)
                        };
                        c.kf = function() {
                            var b;
                            try {
                                if (a.utils.isDefined(window.external) && a.utils.isNumber(window.external.pageT)) b = (new Date).getTime() - window.external.pageT;
                                else if (a.utils.isDefined(window.hc) && a.utils.isFunction(window.hc.pageT)) {
                                    var c = window.hc.pageT();
                                    a.utils.isNumber(c) && (b = (new Date).getTime() -
                                        c)
                                } else a.utils.isDefined(window.chrome) && a.utils.isFunction(window.chrome.csi) && (c = window.chrome.csi(), a.utils.isDefined(c) && a.utils.isNumber(c.pageT) && (b = (new Date).getTime() - c.pageT));
                                b && (b = Math.round(b), a.log("M104", b))
                            } catch (f) {
                                a.exception(f, "M105")
                            }
                            return b
                        };
                        c.jf = function() {
                            var b = a.correlation.startTimeCookie;
                            if (b) {
                                a.log("M106", b.startTime, b.startPage);
                                var c = a.utils.Wb(document.referrer);
                                if (c === b.startPage)
                                    if (isNaN(b.startTime)) a.log("M107", b.startTime);
                                    else return b.startTime;
                                else a.log("M108",
                                    c, b.startPage)
                            } else a.log("M109")
                        };
                        c.Xe = function(b, c) {
                            var f = document.domain,
                                d = "https:" === document.location.protocol,
                                g = "ADRUM=s=" + Number(new Date) + "&r=" + a.utils.Wb(document.location.href),
                                l = g + ";path=/";
                            d && (l += ";secure");
                            a.log("M110", g);
                            if (!a.conf.useStrictDomainCookies) {
                                for (var d = b(), f = f.split("."), p = "", k = f.length - 1; 0 <= k; k--) {
                                    p = "." + f[k] + p;
                                    a.log("M111", p);
                                    c(l + ";domain=" + p);
                                    var n = b();
                                    if (n != d && 0 <= n.indexOf(g)) {
                                        a.log("M112");
                                        a.log("M113");
                                        return
                                    }
                                }
                                a.log("M114")
                            }
                            a.log("M115");
                            c(l);
                            a.log("M116")
                        };
                        c.bb = function() {
                            var a = !1;
                            return function() {
                                a || (a = !0, c.Xe(function() {
                                    return document.cookie
                                }, function(a) {
                                    document.cookie = a
                                }))
                            }
                        }();
                        return c
                    }();
                    d.lh = f;
                    d.Kg = new f
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {}));
            (function(a) {
                a.log("M117");
                a.monitor.Kg.setUp();
                a.q.processQ();
                a.initEXTDone = !0;
                a.log("M118")
            })(g || (g = {}))
        }
    };
})();