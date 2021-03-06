var dtjava = function () {
    function t(d) {
        return (d != undefined && d != null)
    }

    function u(d) {
        return (d != null && typeof d != "undefined")
    }

    function B(d, aY) {
        for (var w = 0; w < d.length; w++) {
            if (aY.indexOf(d[w]) != -1) {
                return true
            }
        }
        return false
    }

    var x = (function () {
        var d = document.getElementsByTagName("script");
        var w = d[d.length - 1].getAttribute("src");
        return w ? w.substring(0, w.lastIndexOf("/") + 1) : ""
    })();
    var aj = false;
    postponeNativePluginInstallation = false;
    var aC = "1.7.0_06";
    var W = document;
    var O = window;
    var aJ = false;
    var j = [];
    var A = [];
    var Z = null;

    function Q(d) {
        if (aJ) {
            d()
        } else {
            j[j.length] = d
        }
    }

    function m(d) {
        if (aJ) {
            d()
        } else {
            A[A.length] = d
        }
    }

    function I() {
        if (!aJ) {
            try {
                var w = W.getElementsByTagName("body")[0].appendChild(W.createElement("div"));
                w.parentNode.removeChild(w)
            } catch (aY) {
                return
            }
            aJ = true;
            for (var d = 0; d < j.length; d++) {
                j[d]()
            }
            for (var d = 0; d < A.length; d++) {
                A[d]()
            }
        }
    }

    function a(w) {
        if (u(O.addEventListener)) {
            O.addEventListener("load", w, false)
        } else {
            if (u(W.addEventListener)) {
                W.addEventListener("load", w, false)
            } else {
                if (u(O.attachEvent)) {
                    O.attachEvent("onload", w)
                } else {
                    if (typeof O.onload == "function") {
                        var d = O.onload;
                        O.onload = function () {
                            d();
                            w()
                        }
                    } else {
                        O.onload = w
                    }
                }
            }
        }
    }

    function aw() {
        var bd = u(W.getElementById) && u(W.getElementsByTagName) && u(W.createElement);
        var a7 = navigator.userAgent.toLowerCase(), bb = navigator.platform.toLowerCase();
        var bg = bb ? /win/.test(bb) : /win/.test(a7), a0 = bb ? /mac/.test(bb) : /mac/.test(a7), a4 = bb ? /linux/.test(bb) : /linux/.test(a7), a9 = /chrome/.test(a7), d = !a9 && /webkit/.test(a7) ? parseFloat(a7.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, bf = /opera/.test(a7), a1 = null, w = null;
        var ba = false;
        try {
            ba = u(window.execScript);
            if (!ba) {
                ba = (navigator.userAgent.match(/Trident/i) != null)
            }
        } catch (a2) {
            ba = false
        }
        if (a0) {
            if ((bb && /intel/.test(bb)) || /intel/.test(a7)) {
                a1 = "intel"
            }
            var a8 = a7.match(/mac os x (10[0-9_\.]+)/);
            w = t(a8) ? a8[0].replace("mac os x ", "").replace(/_/g, ".") : null
        }
        if (typeof String.prototype.trim !== "function") {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, "")
            }
        }
        var be = navigator.mimeTypes;
        var a3 = null;
        var aZ = null;
        var aY = null;
        var a5 = false;
        if (typeof __dtjavaTestHook__ !== "undefined" && __dtjavaTestHook__ != null && __dtjavaTestHook__.jre != null && __dtjavaTestHook__.jfx != null && __dtjavaTestHook__.deploy != null) {
            a3 = __dtjavaTestHook__.jre;
            aZ = __dtjavaTestHook__.deploy;
            aY = __dtjavaTestHook__.jfx;
            a5 = true
        } else {
            for (var a8 = 0; a8 < be.length; a8++) {
                var bc = navigator.mimeTypes[a8].type;
                if (bc.indexOf("application/x-java-applet;version") != -1 && bc.indexOf("=") != -1) {
                    var a6 = bc.substring(bc.indexOf("=") + 1);
                    if (a3 == null || aU(a3 + "+", a6)) {
                        a3 = a6
                    }
                }
                if (bc.indexOf("application/x-java-applet;deploy") != -1 && bc.indexOf("=") != -1) {
                    aZ = bc.substring(bc.indexOf("=") + 1)
                }
                if (bc.indexOf("application/x-java-applet;javafx") != -1 && bc.indexOf("=") != -1) {
                    aY = bc.substring(bc.indexOf("=") + 1)
                }
            }
        }
        return {
            haveDom: bd,
            wk: d,
            ie: ba,
            win: bg,
            linux: a4,
            mac: a0,
            op: bf,
            chrome: a9,
            jre: a3,
            deploy: aZ,
            fx: aY,
            cputype: a1,
            osVersion: w,
            override: a5
        }
    }

    var ax = false;

    function al() {
        if (typeof __dtjavaTestHook__ !== "undefined") {
            jre = null;
            jfx = null;
            deploy = null;
            if ((__dtjavaTestHook__ != null) && (__dtjavaTestHook__.args != null)) {
                jre = __dtjavaTestHook__.args.jre;
                jfx = __dtjavaTestHook__.args.jfx;
                deploy = __dtjavaTestHook__.args.deploy
            }
            if ((window.location.href.indexOf("http://localhost") == 0) || (window.location.href.indexOf("file:///") == 0)) {
                __dtjavaTestHook__ = {
                    detectEnv: aw,
                    Version: l,
                    checkFXSupport: aH,
                    versionCheck: aU,
                    versionCheckFX: i,
                    jre: jre,
                    jfx: jfx,
                    deploy: deploy
                }
            }
        }
        if (ax) {
            return
        }
        Z = aw();
        if (!Z.haveDom) {
            return
        }
        if ((u(W.readyState) && W.readyState == "complete") || (!u(W.readyState) && (W.getElementsByTagName("body")[0] || W.body))) {
            I()
        }
        if (!aJ) {
            if (u(W.addEventListener)) {
                W.addEventListener("DOMContentLoaded", I, false)
            }
            if (Z.ie && Z.win) {
                if (u(W.addEventListener)) {
                    W.addEventListener("onreadystatechange", function () {
                        if (W.readyState == "complete") {
                            W.removeEventListener("onreadystatechange", arguments.callee, false);
                            I()
                        }
                    }, false)
                } else {
                    W.attachEvent("onreadystatechange", function () {
                        if (W.readyState == "complete") {
                            W.detachEvent("onreadystatechange", arguments.callee);
                            I()
                        }
                    })
                }
                if (O == top) {
                    (function () {
                        if (aJ) {
                            return
                        }
                        try {
                            W.documentElement.doScroll("left")
                        } catch (d) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        I()
                    })()
                }
            }
            if (Z.wk) {
                (function () {
                    if (aJ) {
                        return
                    }
                    if (!/loaded|complete/.test(W.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    I()
                })()
            }
            a(I)
        }
        if (!ai()) {
            U()
        }
    }

    function F(d) {
        for (var w in d) {
            this[w] = d[w]
        }
        this.toString = function () {
            return "MISMATCH [os=" + this.os + ", browser=" + this.browser + ", jre=" + this.jre + ", fx=" + this.fx + ", relaunch=" + this.relaunch + ", platform=" + this.platform + "]"
        };
        this.isUnsupportedPlatform = function () {
            return this.os
        };
        this.isUnsupportedBrowser = function () {
            return this.browser
        };
        this.jreStatus = function () {
            return this.jre
        };
        this.jreInstallerURL = function (aY) {
            if (!this.os && (this.jre == "old" || this.jre == "none")) {
                return an(aY)
            }
            return null
        };
        this.javafxStatus = function () {
            return this.fx
        };
        this.javafxInstallerURL = function (aY) {
            if (!this.os && (this.fx == "old" || this.fx == "none")) {
                return S(aY)
            }
            return null
        };
        this.canAutoInstall = function () {
            return G(this.platform, this.jre, this.fx)
        };
        this.isRelaunchNeeded = function () {
            return this.relaunch
        }
    }

    function aL(aY) {
        if (Z.fx != null && i(aY, Z.fx)) {
            return Z.fx
        }
        var w = f();
        if (t(w)) {
            try {
                return w.getInstalledFXVersion(aY)
            } catch (d) {
            }
        }
        return null
    }

    function C(d) {
        if (d != null) {
            return d.join(" ")
        } else {
            return null
        }
    }

    function V(w, d) {
        if (t(w)) {
            w.push(d);
            return w
        } else {
            var aY = [d];
            return aY
        }
    }

    function R(aZ, w, d) {
        var a1 = ap(aZ, true);
        if (!(t(a1) && t(a1.url))) {
            throw"Required attribute missing! (application url need to be specified)"
        }
        w = new dtjava.Platform(w);
        d = new dtjava.Callbacks(d);
        var aY = function () {
            var a5 = t(w.jvmargs) ? w.jvmargs : null;
            if (t(w.javafx)) {
                var bb = aL(w.javafx);
                a5 = V(a5, " -Djnlp.fx=" + bb);
                if (!t(aZ.toolkit) || aZ.toolkit == "fx") {
                    a5 = V(a5, " -Djnlp.tk=jfx")
                }
            }
            if (ai() && !(Z.linux && Z.chrome)) {
                if (aQ(a1, a5, d)) {
                    return
                }
            }
            var a2 = f();
            if (t(a2)) {
                try {
                    try {
                        if (aU("10.6+", Z.deploy, false)) {
                            var a8 = {url: a1.url};
                            if (t(a5)) {
                                a8.vmargs = a5
                            }
                            if (t(a1.params)) {
                                var a4 = {};
                                for (var a7 in a1.params) {
                                    a4[a7] = String(a1.params[a7])
                                }
                                a8.params = a4
                            }
                            if (t(a1.jnlp_content)) {
                                a8.jnlp_content = a1.jnlp_content
                            }
                            var a6 = a2.launchApp(a8);
                            if (a6 == 0) {
                                if (u(d.onRuntimeError)) {
                                    d.onRuntimeError(a1.id)
                                }
                            }
                        } else {
                            if (!a2.launchApp(a1.url, a1.jnlp_content, C(a5))) {
                                if (u(d.onRuntimeError)) {
                                    d.onRuntimeError(a1.id)
                                }
                            }
                        }
                        return
                    } catch (a9) {
                        if (!a2.launchApp(a1.url, a1.jnlp_content)) {
                            if (u(d.onRuntimeError)) {
                                d.onRuntimeError(a1.id)
                            }
                        }
                        return
                    }
                } catch (ba) {
                }
            }
            var a3 = ah(a1.url);
            if (t(W.body)) {
                W.body.appendChild(a3)
            } else {
                W.write(a3.innerHTML)
            }
        };
        var a0 = N(w);
        if (a0 != null) {
            X(a1, w, a0, d, aY)
        } else {
            aY()
        }
    }

    function K(aY, w, d) {
        if (u(d.onDeployError)) {
            d.onDeployError(aY, w)
        }
    }

    function aP(d) {
        return d != null && u(d.version)
    }

    function ac(d, aY) {
        var aZ = f();
        if (aZ == null) {
            return
        }
        if (aP(aZ)) {
            aY(aZ)
        } else {
            var w = null;
            if (!u(dtjava.dtPendingCnt) || dtjava.dtPendingCnt == 0) {
                w = function () {
                    if (aP(aZ)) {
                        if (t(dtjava.dtPending)) {
                            for (var a0 in dtjava.dtPending) {
                                dtjava.dtPending[a0]()
                            }
                        }
                        return
                    }
                    if (dtjava.dtPendingCnt > 0) {
                        dtjava.dtPendingCnt--;
                        setTimeout(w, 500)
                    }
                }
            }
            if (!t(dtjava.dtPending) || dtjava.dtPendingCnt == 0) {
                dtjava.dtPending = {}
            }
            dtjava.dtPending[d] = aY;
            dtjava.dtPendingCnt = 1000;
            if (w != null) {
                w()
            }
        }
    }

    function X(a0, aZ, a6, a1, a3) {
        var w = f();
        if (Z.chrome && Z.win && w != null && !aP(w)) {
            var d;
            if (t(a0.placeholder)) {
                var a2 = function () {
                    O.open("http://www.java.com/en/download/faq/chrome.xml");
                    return false
                };
                var a5 = "Please give Java permission to run on this browser web page.";
                var a4 = "Click for more information.";
                var a7 = "";
                aB(a0, a5, a4, a7, "javafx-chrome.png", a2);
                d = a0.id + "-embed"
            } else {
                a6.jre = "blocked";
                K(a0, a6, a1);
                d = "launch"
            }
            var aY = function () {
                var a9 = N(aZ);
                if (a9 == null) {
                    a3()
                } else {
                    X(a0, aZ, a9, a1, a3)
                }
            };
            ac(d, aY);
            return
        }
        if (!a6.isUnsupportedPlatform() && !a6.isUnsupportedBrowser()) {
            if (ao(a6) && u(a1.onInstallNeeded)) {
                var a8 = function () {
                    var a9 = N(aZ);
                    if (a9 == null) {
                        a3()
                    } else {
                        K(a0, a9, a1)
                    }
                };
                a1.onInstallNeeded(a0, aZ, a1, a6.canAutoInstall(), a6.isRelaunchNeeded(), a8);
                return
            }
        }
        K(a0, a6, a1)
    }

    function ai() {
        if (Z.deploy != null && !Z.ie) {
            return aU("10.6+", Z.deploy, false)
        }
        return false
    }

    function ae(d) {
        return d != null && u(d.version)
    }

    function aT() {
        return document.getElementById("dtlite")
    }

    function k() {
        if (aT() != null) {
            return
        }
        var w = document.createElement("embed");
        w.width = "10px";
        w.height = "10px";
        w.id = "dtlite";
        w.type = "application/x-java-applet";
        var aY = document.createElement("div");
        aY.style.position = "relative";
        aY.style.left = "-10000px";
        aY.appendChild(w);
        var d = document.getElementsByTagName("body");
        d[0].appendChild(aY)
    }

    function y(w) {
        var aY = aT();
        if (aY == null) {
            k();
            aY = aT()
        }
        if (ae(aY)) {
            w(aY)
        } else {
            var d = null;
            if (!u(dtjava.dtlitePendingCnt) || dtjava.dtlitePendingCnt == 0) {
                d = function () {
                    if (u(aY.version)) {
                        if (dtjava.pendingLaunch != null) {
                            dtjava.pendingLaunch(aY)
                        }
                        dtjava.pendingLaunch = null;
                        return
                    }
                    if (dtjava.dtlitePendingCnt > 0) {
                        dtjava.dtlitePendingCnt--;
                        setTimeout(d, 500)
                    }
                }
            }
            dtjava.pendingLaunch = w;
            dtjava.dtlitePendingCnt = 1000;
            if (d != null) {
                d()
            }
        }
    }

    function aQ(aZ, w, d) {
        var aY = function () {
            var a0 = aT();
            if (a0 == null) {
                if (u(d.onRuntimeError)) {
                    d.onRuntimeError(aZ.id)
                }
            }
            var a3 = {url: aZ.url};
            if (t(w)) {
                a3.vmargs = w
            }
            if (t(aZ.params)) {
                var a4 = {};
                for (var a1 in aZ.params) {
                    a4[a1] = String(aZ.params[a1])
                }
                a3.params = a4
            }
            if (t(aZ.jnlp_content)) {
                a3.jnlp_content = aZ.jnlp_content
            }
            var a2 = a0.launchApp(a3);
            if (a2 == 0) {
                if (u(d.onRuntimeError)) {
                    d.onRuntimeError(aZ.id)
                }
            }
        };
        if (aU("10.4+", Z.deploy, false)) {
            y(aY);
            return true
        }
        return false
    }

    function ah(w) {
        var d = null;
        if (Z.ie) {
            d = W.createElement("object");
            d.width = "1px";
            d.height = "1px";
            var aY = W.createElement("param");
            aY.name = "launchjnlp";
            aY.value = w;
            d.appendChild(aY);
            aY = W.createElement("param");
            aY.name = "docbase";
            aY.value = t(W.documentURI) ? W.documentURI : W.URL;
            d.appendChild(aY);
            if (!Z.ie) {
                d.type = "application/x-java-applet;version=1.7"
            } else {
                d.classid = "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"
            }
        } else {
            d = W.createElement("embed");
            d.width = "0px";
            d.height = "0px";
            d.setAttribute("launchjnlp", w);
            d.setAttribute("docbase", (t(W.documentURI) ? W.documentURI : W.URL));
            d.type = "application/x-java-applet;version=1.7"
        }
        var aZ = W.createElement("div");
        aZ.style.position = "relative";
        aZ.style.left = "-10000px";
        aZ.appendChild(d);
        return aZ
    }

    var az = {Exact: {value: 0}, Family: {value: 1}, Above: {value: 2}};
    var au = {
        Uninitialized: {value: -2},
        Unknown: {value: -1},
        Identifier: {value: 0},
        Alpha: {value: 1},
        Digits: {value: 2},
        Plus: {value: 3},
        Minus: {value: 4},
        Underbar: {value: 5},
        Star: {value: 6},
        Dot: {value: 7},
        End: {value: 8}
    };
    var l = function (a2, be) {
        if (typeof be === "undefined") {
            var be = true
        }
        var aZ = 4;
        var a8 = null;
        var bg = false;
        var bh = null;
        var bi = null;
        var a4 = null;
        var bc = null;
        var bl = null;
        var a1 = null;
        var a6 = null;
        var a7 = null;
        if (!a2) {
            return null
        } else {
            a8 = a2;
            var ba = d(a2, be);
            bg = ba.old;
            bh = ba.version;
            bi = ba.build;
            bc = ba.match;
            a4 = ba.pre;
            var bd = w(ba.version);
            bl = bd.major;
            a1 = bd.minor;
            a6 = bd.security;
            a7 = bd.patch
        }
        return {
            VersionString: a2,
            old: bg,
            major: bl,
            minor: a1,
            security: a6,
            patch: a7,
            version: bh,
            build: bi,
            pre: a4,
            match: bc,
            check: function (bm) {
                return bj(bm, this)
            },
            equals: function (bm) {
                return a9(bm, this)
            }
        };
        function w(bn) {
            var bp = null;
            var bq = null;
            var bm = null;
            var bo = null;
            if (bn.length >= 1) {
                bp = bn[0]
            }
            if (bn.length >= 2) {
                bq = bn[1]
            }
            if (bn.length >= 3) {
                bm = bn[2]
            }
            if (bn.length >= 4) {
                bo = bn[3]
            }
            return {major: bp, minor: bq, security: bm, patch: bo}
        }

        function bf(bw) {
            var bp = bw.toLowerCase().trim();
            var br;
            var bn = null;
            var bv = Array();

            function bs(by) {
                var bx = false;
                switch (by) {
                    case"0":
                    case"1":
                    case"2":
                    case"3":
                    case"4":
                    case"5":
                    case"6":
                    case"7":
                    case"8":
                    case"9":
                        bx = true;
                        break
                }
                return bx
            }

            function bu(bB) {
                var bx = false;
                var by = "a".charCodeAt(0);
                var bA = "z".charCodeAt(0);
                var bz = bB.charCodeAt(0);
                if (by <= bz && bz <= bA) {
                    bx = true
                }
                return bx
            }

            function bm() {
                br = 0
            }

            function bq() {
                return bn
            }

            function bt(bx) {
                if (bn != null) {
                    bv.unshift(bn)
                }
                bn = bx
            }

            function bo() {
                var by = au.Uninitialized;
                var bx = "";
                if (bv.length > 0) {
                    by = bv[0].tokenID;
                    bx = bv[0].token;
                    bv.shift()
                } else {
                    if (br >= bp.length) {
                        by = au.End
                    } else {
                        while (br < bp.length) {
                            var bz = bp.charAt(br);
                            if ((by == au.Uninitialized || by == au.Alpha) && bu(bz) == true) {
                                by = au.Alpha;
                                br++;
                                bx += bz
                            } else {
                                if ((by == au.Uninitialized || by == au.Digits) && bs(bz) == true) {
                                    if (parseInt(bz) == 0 && parseInt(bx) == 0) {
                                        by = au.Unknown;
                                        bx += bz;
                                        br++;
                                        break
                                    } else {
                                        by = au.Digits;
                                        bx += bz;
                                        br++
                                    }
                                } else {
                                    if ((by == au.Alpha || by == au.Identifier) && bs(bz) == true && bu(bz) == false) {
                                        by = au.Identifier;
                                        br++;
                                        bx += bz
                                    } else {
                                        if (by == au.Uninitialized) {
                                            switch (bz) {
                                                case"-":
                                                    by = au.Minus;
                                                    br++;
                                                    bx = bz;
                                                    break;
                                                case"+":
                                                    by = au.Plus;
                                                    br++;
                                                    bx = bz;
                                                    break;
                                                case"*":
                                                    by = au.Star;
                                                    br++;
                                                    bx = bz;
                                                    break;
                                                case".":
                                                    by = au.Dot;
                                                    br++;
                                                    bx = bz;
                                                    break;
                                                case"_":
                                                    by = au.Underbar;
                                                    br++;
                                                    bx = bz;
                                                    break;
                                                default:
                                                    by = au.Unknown;
                                                    br++;
                                                    break
                                            }
                                            break
                                        } else {
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                bn = {token: bx, tokenID: by};
                return bn
            }

            return {start: bm, nextToken: bo, pushToken: bt, currentToken: bq, isDigit: bs, isLetter: bu}
        }

        function bb() {
            function bm(bw) {
                var bu = new Array();
                var bx = bw.currentToken();
                if (bx.tokenID == au.Digits) {
                    bu.push(parseInt(bx.token));
                    bx = bw.nextToken();
                    for (var bv = 0; bv < (aZ - 1); bv++) {
                        if (bx.tokenID == au.Dot) {
                            bx = bw.nextToken();
                            if (bx.tokenID == au.Digits) {
                                bu.push(parseInt(bx.token));
                                bx = bw.nextToken()
                            } else {
                                if (bx.tokenID == au.Star || bx.tokenID == au.Plus) {
                                    break
                                } else {
                                    bu = null;
                                    break
                                }
                            }
                        } else {
                            if (bx.tokenID == au.Star || bx.tokenID == au.Plus || bx.tokenID == au.End || bx.tokenID == au.Minus || bx.tokenID == au.Underbar || bx.tokenID == au.Identifier || (bx.tokenID == au.Alpha && bx.token == "u")) {
                                break
                            } else {
                                bu = null;
                                break
                            }
                        }
                    }
                }
                return bu
            }

            function bq(bv, bx) {
                var bu = az.Exact;
                var bw = bv.currentToken();
                if (bw.tokenID == au.Dot) {
                    bw = bv.nextToken();
                    if (bw.tokenID == au.Star) {
                        bu = az.Family;
                        bv.nextToken()
                    } else {
                        if (bw.tokenID == au.Plus) {
                            bu = az.Above;
                            bv.nextToken()
                        }
                    }
                } else {
                    if (bw.tokenID == au.Star) {
                        bu = az.Family;
                        bv.nextToken()
                    } else {
                        if (bw.tokenID == au.Plus) {
                            bu = az.Above;
                            bv.nextToken()
                        }
                    }
                }
                return bu
            }

            function bp(bv) {
                var bu = null;
                var bx = bv.currentToken();
                if (bx.tokenID == au.Minus) {
                    var bw = bx;
                    var bx = bv.nextToken();
                    if (bx.tokenID == au.Alpha) {
                        bu = bx.token;
                        bv.nextToken()
                    } else {
                        bv.pushToken(bw)
                    }
                }
                return bu
            }

            function bs(bv, bz) {
                var bu = null;
                var bx = bv.currentToken();
                if (bx.tokenID == au.Plus) {
                    var bw = bx;
                    var bx = bv.nextToken();
                    if (bx.tokenID == au.Digits) {
                        bu = parseInt(bx.token);
                        bv.nextToken()
                    } else {
                        bv.pushToken(bw)
                    }
                } else {
                    if (bz == true) {
                        if (bx.tokenID == au.Minus || bx.tokenID == au.Underbar) {
                            var bw = bx;
                            bx = bv.nextToken();
                            if (bx.tokenID == au.Identifier && bx.token[0] == "b") {
                                var by = parseInt(bx.token.substr(1));
                                if (by != null && isNaN(by) == false) {
                                    bv.nextToken();
                                    bu = by
                                }
                            } else {
                                bv.pushToken(bw)
                            }
                        }
                    }
                }
                return bu
            }

            function bo(bv, bw) {
                var bu = false;
                if (bv.length == 1 && parseInt(bv[0]) <= 8 && bw.tokenID == au.Identifier && bw.token.length > 0 && bw.token.charAt(0) == "u") {
                    bu = true
                }
                return bu
            }

            function bn(bv) {
                var bu = null;
                var bw = bv.currentToken();
                if (bw.tokenID == au.Identifier) {
                    bu = parseInt(bw.token.substr(1));
                    bv.nextToken()
                } else {
                    if (bw.tokenID == au.Star) {
                        lmatch = az.Family;
                        bv.nextToken()
                    } else {
                        if (bw.tokenID == au.Plus) {
                            lmatch = az.Above;
                            bv.nextToken()
                        }
                    }
                }
                return bu
            }

            function bt(bv) {
                var bu = null;
                var bw = bv.currentToken();
                if (bw.tokenID == au.Alpha) {
                    bu = bw.token;
                    bv.nextToken()
                }
                return bu
            }

            function br(bz) {
                var bE = null;
                var bB = false;
                var bu = false;
                var bv = null;
                var bD = null;
                var by = az.Exact;
                var bw = false;
                var bC = null;
                bz.start();
                var bx = bz.nextToken();
                if (bx.tokenID == au.Digits) {
                    bv = bm(bz);
                    if (bv != null && bv.length > 0) {
                        bx = bz.currentToken();
                        if (bv[0] == 1) {
                            if (bv.length >= 2 && bv[1] == 9) {
                                return null
                            }
                            bu = true
                        } else {
                            if (bx.token == "u") {
                                bx = bz.nextToken()
                            }
                        }
                        if (bo(bv, bx) == true) {
                            bu = true;
                            var bA = bn(bz);
                            if (bA != null) {
                                bx = bz.currentToken();
                                bv.push(parseInt(bA));
                                bu = true;
                                if (bx.tokenID == au.End) {
                                    bB = true
                                } else {
                                    by = bq(bz);
                                    bx = bz.currentToken();
                                    if (bx.tokenID == au.End) {
                                        bB = true
                                    }
                                }
                            }
                        } else {
                            bx = bz.currentToken();
                            if (bu == true && bx.tokenID == au.Underbar) {
                                bx = bz.nextToken();
                                if (bx.tokenID == au.Digits && bv.length < aZ) {
                                    bv.push(parseInt(bx.token));
                                    bz.nextToken()
                                }
                            }
                            bw = bp(bz);
                            bx = bz.currentToken();
                            bD = bs(bz, bu);
                            bC = bt(bz);
                            by = bq(bz, bu);
                            bx = bz.currentToken();
                            if (bx.tokenID == au.End) {
                                bB = true
                            }
                        }
                        if (bB == true) {
                            bE = {old: bu, version: bv, build: bD, match: by, pre: bw, opt: bC}
                        }
                    }
                }
                return bE
            }

            return {parse: br}
        }

        function d(bu, br) {
            var bm = false;
            var bn = new Array;
            var bw = null;
            var bq = null;
            var bp = false;
            var bt = null;
            if (bu == null || bu.length == 0) {
                bn = [0, 0, 0, 0]
            } else {
                var bs = bf(bu);
                var bo = bb();
                var bv = bo.parse(bs);
                if (bv != null) {
                    if (br == true && bv.old == true) {
                        if (bv.version.length > 0 && bv.version[0] == 1) {
                            bn = bv.version.splice(1, bv.version.length - 1)
                        } else {
                            bn = bv.version
                        }
                        bm = true
                    } else {
                        bn = bv.version
                    }
                    bw = bv.build;
                    bq = bv.match;
                    bp = bv.pre
                }
            }
            return {old: bm, version: bn, build: bw, match: bq, pre: bp, opt: bt}
        }

        function a3(bp, bo) {
            var bn = false;
            var bm = bp;
            if (bm == null) {
                bm = 0
            }
            if (parseInt(bm) == parseInt(bo)) {
                bn = true
            }
            return bn
        }

        function aY(bo, bn) {
            var bm = false;
            if ((bo.major != null) && (bn.major != null) && a3(bo.major, bn.major) && a3(bo.minor, bn.minor) && a3(bo.security, bn.security) && a3(bo.patch, bn.patch) && (bo.old == bn.old) && (bo.pre == bn.pre) && ((parseInt(bo.build) == parseInt(bn.build)) || (bo.build == null && bn.build == null))) {
                bm = true
            }
            return bm
        }

        function a0(bq, bn) {
            var bm = false;
            if (bq.old == true && bq.version.length == 0 && bn.old == true) {
                bm = true
            } else {
                for (index = 0; index < bq.version.length && index < bn.version.length; index++) {
                    var bp = bq.version[index];
                    var bo = bn.version[index];
                    if (parseInt(bp) == parseInt(bo)) {
                        bm = true
                    } else {
                        bm = false;
                        break
                    }
                }
            }
            return bm
        }

        function bk(br, bn) {
            var bm = false;
            if (br.old == true && br.version.length == 0) {
                bm = true
            } else {
                if (br.old == true && bn.old == false) {
                    bm = true
                } else {
                    if (br.major == 0) {
                        bm = true
                    } else {
                        if ((br.major != null) && (bn.major != null) && ((parseInt(br.build) == parseInt(bn.build)) || (br.build == null && bn.build == null))) {
                            for (var bp = 0; bp < br.version.length; bp++) {
                                var bq = br.version[bp];
                                var bo = bn.version[bp];
                                if (parseInt(bq) == parseInt(bo)) {
                                    bm = true
                                } else {
                                    if (parseInt(bq) < parseInt(bo)) {
                                        if ((br.old == true && bn.old == true) || (br.old == false && bn.old == false)) {
                                            bm = true
                                        }
                                        break
                                    } else {
                                        bm = false;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return bm
        }

        function a5(bm) {
            var bo = bm.version.slice(0);
            for (var bn = bo.length; bn < 4; bn++) {
                bo.push(0)
            }
            var bp = w(bo);
            return {
                old: bm.old,
                major: bp.major,
                minor: bp.minor,
                security: bp.security,
                patch: bp.patch,
                version: bo,
                build: bm.build,
                pre: bm.pre
            }
        }

        function bj(bp, bn) {
            var bm = false;
            if (bp.VersionString == null || bp.VersionString.length == 0) {
                bm = true
            } else {
                if (bp.build == null && bn.build == null) {
                    var bo = a5(bn);
                    if (bp.match == az.Exact) {
                        bm = aY(bp, bo)
                    } else {
                        if (bp.match == az.Family) {
                            bm = a0(bp, bo)
                        } else {
                            if (bp.match == az.Above) {
                                bm = bk(bp, bo)
                            }
                        }
                    }
                }
            }
            return bm
        }

        function a9(bq, bo) {
            var bn = false;
            if (query.VersionString == null || query.VersionString.length == 0) {
                bn = true
            } else {
                var bp = a5(bo);
                var bm = a5(query);
                bn = aY(bm, bp)
            }
            return bn
        }
    };

    function aU(aZ, d, a0) {
        var aY = new l(aZ, a0);
        var w = new l(d, a0);
        return w.check(aY)
    }

    function i(aZ, d) {
        var aY = new l(aZ, false);
        if (parseInt(aY.major) >= 3 && parseInt(aY.major) <= 7 && aZ.substr(-1) !== "+") {
            return false
        }
        if (aY.match == az.Exact) {
            aY = new l(aZ + "+", false)
        }
        var w = new l(d, false);
        return w.check(aY)
    }

    function aM() {
        if (!ai()) {
            if (postponeNativePluginInstallation && t(W.body)) {
                U();
                postponeNativePluginInstallation = false
            }
            var d = f();
            if (d != null) {
                return true
            }
            return false
        }
        return true
    }

    function v(a3) {
        if (Z.jre != null) {
            if (aU(a3, Z.jre)) {
                return "ok"
            }
        }
        var a2 = f();
        if (a2 != null) {
            var aZ = a2.jvms;
            for (var a1 = 0; aZ != null && a1 < aZ.getLength(); a1++) {
                if (aU(a3, aZ.get(a1).version)) {
                    if (!Z.ie && t(navigator.mimeTypes)) {
                        if (!t(navigator.mimeTypes["application/x-java-applet"])) {
                            return "disabled"
                        }
                    }
                    return "ok"
                }
            }
            return "none"
        }
        if (Z.ie) {
            var d = ["1.8.0", "1.7.0", "1.6.0", "1.5.0"];
            for (var aY = 0; aY < d.length; aY++) {
                if (aU(a3, d[aY])) {
                    try {
                        var a0 = new ActiveXObject("JavaWebStart.isInstalled." + d[aY] + ".0");
                        return "ok"
                    } catch (w) {
                    }
                }
            }
        }
        return "none"
    }

    function D() {
        var w = ["iPhone", "iPod"];
        var aY = B(w, navigator.userAgent);
        var d = (Z.mac && Z.chrome && Z.cputype == "intel");
        auto = aY || (f() != null);
        return {os: aY, browser: d, auto: auto}
    }

    function ak() {
        if (Z.ie) {
            try {
                var d = 10 * ScriptEngineMajorVersion() + ScriptEngineMinorVersion();
                if (d < 57) {
                    return true
                }
            } catch (w) {
                return true
            }
        }
        return false
    }

    function aH() {
        var d;
        if (Z.win) {
            d = Z.op || Z.wk || ak();
            return {os: false, browser: d}
        } else {
            if (Z.mac && Z.cputype == "intel") {
                var w = !aU("10.7.3+", Z.osVersion, false);
                d = Z.op || (Z.mac && Z.chrome);
                return {os: w, browser: d}
            } else {
                if (Z.linux) {
                    d = Z.op;
                    return {os: false, browser: d}
                } else {
                    return {os: true, browser: false}
                }
            }
        }
    }

    function ar(d) {
        if (t(d) && d.length > 0) {
            var w = d.charAt(d.length - 1);
            if (w == "*") {
                d = d.substring(0, d.length - 1) + "+"
            } else {
                if (w != "+") {
                    d = d + "+"
                }
            }
        }
        return d
    }

    function N(d) {
        var w = new dtjava.Platform(d);
        w.jvm = ar(w.jvm);
        return g(w)
    }

    function g(aY) {
        aY = new dtjava.Platform(aY);
        var aZ = "ok", a6 = "ok", a5 = false, a1 = false, a2 = false, w, d;
        if (t(aY.jvm) && v(aY.jvm) != "ok") {
            var a3 = v("1+");
            if (a3 == "ok") {
                a6 = "old"
            } else {
                a6 = a3
            }
            d = D();
            if (d.os) {
                a6 = "unsupported";
                a1 = true
            }
            a2 = d.browser
        }
        if (t(aY.javafx)) {
            d = aH();
            if (d.os || d.browser) {
                aZ = "unsupported";
                a1 = a1 || d.os;
                a2 = a2 || d.browser
            } else {
                if (Z.fx != null) {
                    if (i(aY.javafx, Z.fx)) {
                        aZ = "ok"
                    } else {
                        if (i("2.0+", Z.fx)) {
                            aZ = "old"
                        }
                    }
                } else {
                    if (Z.win) {
                        try {
                            w = f();
                            var a4 = w.getInstalledFXVersion(aY.javafx);
                            if (a4 == "" || a4 == null) {
                                a4 = w.getInstalledFXVersion(aY.javafx + "+")
                            }
                            if (a4 == "" || a4 == null) {
                                a4 = w.getInstalledFXVersion("2.0+");
                                if (a4 == null || a4 == "") {
                                    aZ = "none"
                                } else {
                                    aZ = "old"
                                }
                            }
                        } catch (a0) {
                            aZ = "none"
                        }
                    } else {
                        if (Z.mac || Z.linux) {
                            aZ = "none"
                        }
                    }
                }
            }
        }
        a5 = a5 || (!a1 && a2);
        if (aZ != "ok" || a6 != "ok" || a5 || a1 || a2) {
            return new F({fx: aZ, jre: a6, relaunch: a5, os: a1, browser: a2, platform: aY})
        } else {
            if (Z.override == false && !aM()) {
                return new F({fx: aZ, jre: "none", relaunch: a5, os: a1, browser: a2, platform: aY})
            }
        }
        return null
    }

    function T() {
        var d = null;
        d = navigator.userLanguage;
        if (d == null) {
            d = navigator.systemLanguage
        }
        if (d == null) {
            d = navigator.language
        }
        if (d != null) {
            d = d.replace("-", "_")
        }
        return d
    }

    function an(d) {
        if (!t(d)) {
            d = T()
        }
        return "http://java.com/dt-redirect?" + ((t(window.location) && t(window.location.href)) ? ("&returnPage=" + window.location.href) : "") + (t(d) ? ("&locale=" + d) : "")
    }

    function S(d) {
        return "http://www.oracle.com/technetwork/java/javafx/downloads/index.html"
    }

    function ao(d) {
        if (d != null) {
            var aY = d.jreStatus();
            var w = d.javafxStatus();
            return (aY == "none" || w == "none" || aY == "old" || w == "old") && (w != "disabled" && aY != "disabled")
        }
        return false
    }

    function aA(w, aY, aZ, a4, a2, a6) {
        var a5, d;
        if (aY) {
            a5 = "Java";
            d = "java"
        } else {
            a5 = "JavaFX";
            d = "javafx"
        }
        var a1, a0, a3;
        if (aZ) {
            a1 = "A newer version of " + a5 + "is required to view the content on this page.";
            a0 = "Please click here to update " + a5;
            a3 = "upgrade_" + d + ".png"
        } else {
            a1 = "View the content on this page.";
            a0 = "Please click here to install " + a5;
            a3 = "get_" + d + ".png"
        }
        var a7 = "Click to install " + a5;
        aB(w, a1, a0, a7, a3, a6)
    }

    function aB(w, a1, a0, a4, a2, a3) {
        var d = W.createElement("div");
        d.width = aO(w.width);
        d.height = aO(w.height);
        var aZ = W.createElement("a");
        aZ.href = "";
        aZ.onclick = function () {
            a3();
            return false
        };
        if (w.width < 250 || w.height < 160) {
            d.appendChild(W.createElement("p").appendChild(W.createTextNode(a1)));
            aZ.appendChild(W.createTextNode(a0));
            d.appendChild(aZ)
        } else {
            var aY = W.createElement("img");
            aY.src = x + a2;
            aY.alt = a4;
            aY.style.borderWidth = "0px";
            aY.style.borderStyle = "none";
            aZ.appendChild(aY);
            d.appendChild(aZ)
        }
        o(w.placeholder);
        w.placeholder.appendChild(d)
    }

    function at(d) {
        if (aU(d.jvm, aC, false) && i(d.javafx, "2.2.0")) {
            return true
        }
        return false
    }

    function n(aZ, w, a0, a3, a4, a5) {
        var a2 = function () {
            e(aZ, w, a0, a5)
        };
        var a6 = g(w);
        if (!t(a6)) {
            if (t(a5)) {
                a5()
            }
        }
        var a1 = t(a6) && (a6.javafxStatus() == "old" || a6.jreStatus() == "old");
        if (t(aZ.placeholder)) {
            if (at(w)) {
                aA(aZ, true, a1, a3, a4, a2)
            } else {
                aA(aZ, (a6.jreStatus() != "ok"), a1, a3, a4, a2)
            }
        } else {
            var d = a3;
            var aY = null;
            if (!d) {
                if (at(w)) {
                    if (a1) {
                        aY = "A newer version of Java is required to view the content on this page. Please click here to update Java."
                    } else {
                        aY = "To view the content on this page, please click here to install Java."
                    }
                    d = confirm(aY)
                } else {
                    if (a1) {
                        aY = "A newer version of JavaFX is required to view the content on this page. Please click here to update JavaFX."
                    } else {
                        aY = "To view the content on this page, please click here to install JavaFX."
                    }
                    d = confirm(aY)
                }
            }
            if (d) {
                a2()
            }
        }
    }

    function q(d) {
        if (!Z.ie) {
            return true
        }
        if (aU("10.0.0+", f().version, false)) {
            return true
        }
        if (d == null) {
            return false
        }
        return !aU("1.6.0_33+", d)
    }

    function G(d, aZ, w) {
        if (!Z.win) {
            return false
        }
        var aY = f();
        if (aY == null || !u(aY.version)) {
            return false
        }
        if (aZ != "ok") {
            if (!q(d.jvm)) {
                return false
            }
        }
        if (w != "ok") {
            if (!at(d)) {
                if (!aU("10.0.0+", f().version, false)) {
                    return false
                }
            } else {
                if (!q(aC)) {
                    return false
                }
            }
        }
        return true
    }

    function e(aZ, aY, a0, a3) {
        var a5 = g(aY);
        a0 = new dtjava.Callbacks(a0);
        if (t(a5) && a5.isUnsupportedPlatform()) {
            K(aZ, a5, a0);
            return false
        }
        var a4 = (aZ != null) ? aZ.placeholder : null;
        var d, a1;
        if (ao(a5)) {
            if (a5.canAutoInstall()) {
                var w = f();
                var a2 = function () {
                    var a8 = function (a9) {
                        if (a9 == 10000 + 1) {
                            return
                        }
                        d = ["success", "ignore", "error:download", "error:generic", "error:generic", "error:generic", "error:generic", "error:cancelled"];
                        if (a9 > 19900) {
                            if (a9 == 20000 + 1602 || a9 === 20000 - 2) {
                                a1 = "error:cancelled"
                            } else {
                                a1 = "error:generic"
                            }
                        } else {
                            if (a9 >= 10000 && a9 <= 19900) {
                                a1 = (a9 >= 10000 && a9 < 10000 + d.length) ? d[a9 - 10000] : "error:unknown"
                            } else {
                                a1 = "error:generic"
                            }
                        }
                        if (u(a0.onInstallFinished)) {
                            a0.onInstallFinished(a4, "javafx", a1, a5.isRelaunchNeeded())
                        }
                        if (a9 == 0) {
                            if (t(a3)) {
                                a3()
                            }
                        }
                    };
                    if (u(a0.onInstallStarted)) {
                        a0.onInstallStarted(a4, "JavaFX", true, true)
                    }
                    var a7 = 0;
                    try {
                        a7 = w.installJavaFX(aY.javafx, a8)
                    } catch (a6) {
                        a7 = 0
                    }
                    if (a7 == 0) {
                        a7 = w.installJavaFX(aY.javafx);
                        setTimeout(function () {
                            setTimeout(function () {
                                a8(a7 ? 1 : 0)
                            }, 0)
                        }, 0)
                    }
                };
                if (a5.jre != "ok" || at(aY)) {
                    setTimeout(function () {
                        var a7 = function (ba) {
                            if (ba == 10000 + 1) {
                                return
                            }
                            if (ba > 19900) {
                                a1 = "error:generic"
                            } else {
                                if (ba == -1) {
                                    a1 = "error:generic"
                                } else {
                                    if (ba > 10000) {
                                        a1 = "error:generic"
                                    } else {
                                        if (ba == 0) {
                                            a1 = "success"
                                        } else {
                                            a1 = "error:generic"
                                        }
                                    }
                                }
                            }
                            if (u(a0.onInstallFinished)) {
                                a0.onInstallFinished(a4, "jre", a1, a5.isRelaunchNeeded())
                            }
                            if (ba == 0) {
                                a5 = g(aY);
                                if (a5 != null && a5.jre == "ok" && !aj && a5.fx != "ok") {
                                    setTimeout(a2, 0)
                                } else {
                                    if (a3 != null) {
                                        a3()
                                    }
                                }
                            }
                        };
                        if (u(a0.onInstallStarted)) {
                            a0.onInstallStarted(a4, "Java", true, true)
                        }
                        var a8 = 0;
                        try {
                            a8 = w.installJRE(aY.jvm, aY.javafx, a7)
                        } catch (a6) {
                            a8 = 0
                        }
                        if (a8 == 0) {
                            var a9 = aY.jvm;
                            if (a5.fx != "ok" && at(aY)) {
                                a9 = aC;
                                if (aY.jvm.indexOf("*") != -1) {
                                    a9 += "*"
                                } else {
                                    if (aY.jvm.indexOf("+") != -1) {
                                        a9 += "+"
                                    }
                                }
                            }
                            try {
                                a8 = w.installJRE(a9, a7)
                            } catch (a6) {
                                a8 = 0
                            }
                            if (a8 == 0) {
                                try {
                                    a8 = w.installJRE(a9)
                                } catch (a6) {
                                    a8 = 0
                                }
                                setTimeout(function () {
                                    setTimeout(function () {
                                        a7(a8)
                                    }, 0)
                                }, 0)
                            }
                        }
                    }, 0)
                } else {
                    if (!aj && a5.fx != "ok") {
                        setTimeout(a2, 0)
                    }
                }
            } else {
                if (a5.jre != "ok" || at(aY)) {
                    if (u(a0.onInstallStarted)) {
                        a0.onInstallStarted(a4, "Java", false, f() != null)
                    }
                    aS()
                } else {
                    if (a5.fx != "ok") {
                        if (u(a0.onInstallStarted)) {
                            a0.onInstallStarted(a4, "JavaFX", false, f() != null)
                        }
                        aN()
                    } else {
                        K(aZ, a5, a0)
                    }
                }
            }
        } else {
            if (a3 != null) {
                a3()
            }
            return true
        }
        return false
    }

    function aS() {
        O.open(an())
    }

    function aN() {
        O.open(ad)
    }

    function aW(a1) {
        if (a1.placeholder != null) {
            var aZ = a1.width, a3 = a1.height;
            var a2 = !(aZ < 100 && a3 < 100);
            var aY = a2 ? "javafx-loading-100x100.gif" : "javafx-loading-25x25.gif";
            var d = a2 ? 80 : 25;
            var a0 = a2 ? 80 : 25;
            var w = W.createElement("img");
            w.src = x + aY;
            w.alt = "";
            w.style.position = "relative";
            w.style.top = "50%";
            w.style.left = "50%";
            w.style.marginTop = aO(-a0 / 2);
            w.style.marginLeft = aO(-d / 2);
            return w
        } else {
            return null
        }
    }

    function aG(w) {
        if (w.placeholder != null) {
            var d = W.createElement("p");
            d.appendChild(W.createTextNode("FIXME - add real message!"));
            return d
        }
        return null
    }

    function o(d) {
        while (d.hasChildNodes()) {
            d.removeChild(d.firstChild)
        }
    }

    function af(a0, aY, d, w) {
        if (a0 != null) {
            var aZ = null;
            if (d) {
                aZ = (aY == "JavaFX") ? "install:inprogress:javafx" : "install:inprogress:jre"
            } else {
                aZ = (aY == "JavaFX") ? "install:inprogress:javafx:manual" : "install:inprogress:jre:manual"
            }
            aR(aZ)
        }
    }

    function r(a1, w, d, a0) {
        var aY;
        if (d != "success") {
            var aZ = null;
            if (w == "javafx") {
                if (!aM()) {
                    aZ = "install:fx:error:nojre"
                } else {
                    aZ = "install:fx:" + d
                }
            } else {
                aZ = "install:jre:" + d
            }
            if (a1 != null) {
                aY = P(aZ, null);
                o(a1);
                a1.appendChild(aY)
            } else {
                O.alert(av(aZ))
            }
        } else {
            if (a0) {
                aY = aR("install:fx:restart");
                o(a1);
                a1.appendChild(aY)
            }
        }
    }

    function aX(w, d) {
        if (d == null) {
            code = "success"
        } else {
            if (d.isUnsupportedBrowser()) {
                code = "browser"
            } else {
                if (d.jreStatus() != "ok") {
                    code = "jre:" + d.jreStatus()
                } else {
                    if (d.javafxStatus() != "ok") {
                        code = "javafx:" + d.javafxStatus()
                    } else {
                        if (d.isRelaunchNeeded()) {
                            code = "relaunch"
                        } else {
                            code = "unknown " + d.toString()
                        }
                    }
                }
            }
        }
        if (w.placeholder != null) {
            E(w.id, code, null)
        } else {
            O.alert(av(code))
        }
    }

    function Y(w) {
        var d = M(w);
        if (L(w) != null) {
            E(w, "launch:fx:generic:embedded", function () {
                aq(M(w), false);
                return false
            })
        } else {
            O.alert(av("launch:fx:generic"))
        }
    }

    function f() {
        var d = null;
        if (Z.override == false) {
            navigator.plugins.refresh(false);
            d = document.getElementById("dtjavaPlugin")
        }
        return d
    }

    function U() {
        if (f() != null) {
            return
        }
        if (!t(W.body) && !aJ) {
            Q(function () {
                U()
            });
            postponeNativePluginInstallation = true;
            return
        }
        var aY = null;
        if (Z.ie) {
            aY = W.createElement("object");
            aY.width = "1px";
            aY.height = "1px";
            aY.classid = "clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA"
        } else {
            if (!Z.wk && !Z.op && navigator.mimeTypes != null) {
                var a0 = "application/java-deployment-toolkit";
                var aZ = false;
                for (var w = 0; w < navigator.mimeTypes.length; w++) {
                    var d = navigator.mimeTypes[w];
                    aZ = aZ || ((d.type == a0) && d.enabledPlugin)
                }
                if (aZ) {
                    aY = W.createElement("embed");
                    aY.setAttribute("type", aZ ? a0 : oldMimeType);
                    aY.setAttribute("hidden", "true")
                }
            }
        }
        if (aY != null) {
            aY.setAttribute("id", "dtjavaPlugin");
            W.body.appendChild(aY);
            if (Z.deploy == null && u(aY.version)) {
                Z.deploy = aY.version
            }
        }
    }

    var z = 0;

    function aD(d) {
        if (t(d.id)) {
            return d.id
        } else {
            z++;
            return ("dtjava-app-" + z)
        }
    }

    function H(aY, a0, a1) {
        var w = W.createElement("div");
        w.width = aO(aY.width);
        w.height = aO(aY.height);
        w.id = aY.id + "-app";
        w.style.position = "relative";
        var d = W.createElement("applet");
        d.code = "dummy.class";
        d.id = aY.id;
        d.width = aO(aY.width);
        d.height = aO(aY.height);
        var a2 = {jnlp_href: aY.url, java_status_events: true, type: "application/x-java-applet"};
        if (t(aY.jnlp_content)) {
            a2.jnlp_embedded = aY.jnlp_content
        }
        if (t(a0.javafx)) {
            if (!t(aY.toolkit) || aY.toolkit == "fx") {
                a2.javafx_version = ((a0.javafx == "*") ? "2.0+" : a0.javafx)
            }
            a2.separate_jvm = true;
            a2.javafx_applet_id = d.id;
            a2.scriptable = true
        } else {
            if (aY.scriptable) {
                a2.scriptable = true
            }
            if (aY.sharedjvm) {
                a2.separate_jvm = true
            }
        }
        if (t(a0.jvmargs)) {
            a2.java_arguments = a0.jvmargs
        }
        var a3, aZ;
        for (a3 in aY.params) {
            if (!t(a2[a3])) {
                aZ = W.createElement("param");
                aZ.name = a3;
                aZ.value = aY.params[a3];
                d.appendChild(aZ)
            }
        }
        for (a3 in a2) {
            aZ = W.createElement("param");
            aZ.name = a3;
            aZ.value = a2[a3];
            d.appendChild(aZ)
        }
        if (u(a1.onGetNoPluginMessage)) {
            aZ = W.createElement("noapplet");
            var a4 = a1.onGetNoPluginMessage(aY);
            aZ.appendChild(a4)
        }
        w.appendChild(d);
        return w
    }

    function M(w) {
        var d = W.getElementById(w + "-app");
        if (d == null) {
            d = W.getElementById(w)
        }
        return d
    }

    function aq(w, d) {
        if (!t(w)) {
            return
        }
        if (d) {
            w.style.left = -10000
        } else {
            w.style.left = "0px"
        }
    }

    function aa(w, d) {
        if (!t(w)) {
            return
        }
        if (d) {
            w.style.visibility = "hidden"
        } else {
            w.style.visibility = "visible"
        }
    }

    function h(aZ) {
        try {
            var aY = L(aZ);
            if (aY != null && aY.style != null && aY.style.visibility == "visible") {
                return
            }
            var d = M(aZ);
            aq(d, false);
            aa(W.getElementById(aZ + "-splash"), true)
        } catch (w) {
        }
    }

    var ad = "http://java.com/javafx";
    var am = {
        "launch:fx:generic": ["JavaFX application could not launch due to system configuration.", " See ", "a", "http://java.com/javafx", "java.com/javafx", " for troubleshooting information."],
        "launch:fx:generic:embedded": ["JavaFX application could not launch due to system configuration ", "(", "onclick", "show error details", ").", " See ", "a", "http://java.com/javafx", "java.com/javafx", " for troubleshooting information."],
        "install:fx:restart": ["Restart your browser to complete the JavaFX installation,", " then return to this page."],
        "install:fx:error:generic": ["JavaFX install not completed.", " See ", "a", "http://java.com/javafx", "java.com/javafx", " for troubleshooting information."],
        "install:fx:error:download": ["JavaFX install could not start because of a download error.", " See ", "a", "http://java.com/javafx", "java.com/javafx", " for troubleshooting information."],
        "install:fx:error:cancelled": ["JavaFX install was cancelled.", " Reload the page and click on the download button to try again."],
        "install:jre:error:cancelled": ["Java install was cancelled.", " Reload the page and click on the download button to try again."],
        "install:jre:error:generic": ["Java install not completed.", " See ", "a", "http://java.com/", "java.com", " for troubleshooting information."],
        "install:jre:error:download": ["Java install could not start because of a download error.", " See ", "a", "http://java.com/", "java.com/", " for troubleshooting information."],
        "install:inprogress:jre": ["Java install in progress."],
        "install:inprogress:javafx": ["JavaFX install in progress."],
        "install:inprogress:javafx:manual": ["Please download and run JavaFX Setup from ", "a", S(null), "java.com/javafx", ". When complete, restart your browser to finish the installation,", " then return to this page."],
        "install:inprogress:jre:manual": ["Please download and run Java Setup from ", "a", an(), "java.com/download", ". When complete, reload the page."],
        "install:fx:error:nojre": ["b", "Installation failed.", "br", "Java Runtime is required to install JavaFX and view this content. ", "a", an(), "Download Java Runtime", " and run the installer. Then reload the page to install JavaFX."],
        browser: ["Content can not be displayed using your Web browser. Please open this page using another browser."],
        "jre:none": ["JavaFX application requires a recent Java runtime. Please download and install the latest JRE from ", "a", "http://java.com", "java.com", "."],
        "jre:old": ["JavaFX application requires a recent Java runtime. Please download and install the latest JRE from ", "a", "http://java.com", "java.com", "."],
        "jre:plugin": ["b", "A Java plugin is required to view this content.", "br", "Make sure that ", "a", "http://java.com", "a recent Java runtime", " is installed, and the Java plugin is enabled."],
        "jre:blocked": ["Please give Java permission to run. This will allow Java to present content provided on this page."],
        "jre:unsupported": ["b", "Java is required to view this content but Java is currently unsupported on this platform.", "br", "Please consult ", "a", "http://java.com", "the Java documentation", " for list of supported platforms."],
        "jre:browser": ["b", "Java plugin is required to view this content but Java plugin is currently unsupported in this browser.", "br", "Please try to launch this application using other browser. Please consult ", "a", "http://java.com", "the Java documentation", " for list of supported browsers for your OS."],
        "javafx:unsupported": ["b", "JavaFX 2.0 is required to view this content but JavaFX is currently unsupported on this platform.", "br", "Please consult ", "a", ad, "the JavaFX documentation", " for list of supported platforms."],
        "javafx:old": ["This application requires newer version of JavaFX runtime. ", "Please download and install the latest JavaFX Runtime from ", "a", ad, "java.com/javafx", "."],
        "javafx:none": ["b", "JavaFX 2.0 is required to view this content.", "br", "a", ad, "Get the JavaFX runtime from java.com/javafx", " and run the installer. Then restart the browser."],
        "javafx:disabled": ["JavaFX is disabled. Please open Java Control Panel, switch to Advanced tab and enable it. ", "Then restart the browser."],
        "jre:oldplugin": ["New generation Java plugin is required to view this content. Please open Java Control Panel and enable New Generation Java Plugin."],
        "jre:disabled": ["Java plugin appear to be disabled in your browser. ", " Please enable Java in the browser options."]
    };

    function aF(w, d, a1) {
        var aZ = 0;
        var aY = W.createElement("p");
        if (d != null) {
            aY.appendChild(d)
        }
        var a0;
        while (aZ < w.length) {
            switch (w[aZ]) {
                case"a":
                    a0 = W.createElement(w[aZ]);
                    a0.href = w[aZ + 1];
                    a0.appendChild(W.createTextNode(w[aZ + 2]));
                    aZ = aZ + 2;
                    break;
                case"br":
                    a0 = W.createElement(w[aZ]);
                    break;
                case"b":
                    a0 = W.createElement(w[aZ]);
                    a0.appendChild(W.createTextNode(w[aZ + 1]));
                    aZ++;
                    break;
                case"onclick":
                    a0 = W.createElement("a");
                    a0.href = "";
                    if (a1 == null) {
                        a1 = function () {
                            return false
                        }
                    }
                    a0.onclick = a1;
                    a0.appendChild(W.createTextNode(w[aZ + 1]));
                    aZ = aZ + 1;
                    break;
                default:
                    a0 = W.createTextNode(w[aZ]);
                    break
            }
            aY.appendChild(a0);
            aZ++
        }
        return aY
    }

    function av(aZ) {
        var w = "";
        var d = am[aZ];
        var aY = 0;
        if (t(d)) {
            while (aY < d.length) {
                if (d[aY] != "a" && d[aY] != "br" && d[aY] != "b") {
                    w += d[aY]
                } else {
                    if (d[aY] == "a") {
                        aY++
                    }
                }
                aY++
            }
        } else {
            w = "Unknown error: [" + aZ + "]"
        }
        return w
    }

    function L(d) {
        return W.getElementById(d + "-error")
    }

    function E(aZ, d, w) {
        var aY = L(aZ);
        if (!t(aY)) {
            return
        }
        o(aY);
        aY.appendChild(P(d, w));
        aY.style.visibility = "visible";
        aa(W.getElementById(aZ + "-splash"), true);
        aq(M(aZ), true)
    }

    function P(aZ, a0) {
        var aY = W.createElement("div");
        var w = W.createElement("img");
        w.src = x + "error.png";
        w.width = "16px";
        w.height = "16px";
        w.alt = "";
        w.style.cssFloat = "left";
        w.style.styleFloat = "left";
        w.style.margin = "0px 10px 60px 10px";
        w.style.verticalAlign = "text-top";
        var d = am[aZ];
        if (!t(d)) {
            d = [aZ]
        }
        var a1 = null;
        if (u(a0)) {
            a1 = function () {
                if (t(aY.parentNode)) {
                    aY.parentNode.removeChild(aY)
                }
                try {
                    a0()
                } catch (a2) {
                }
                return false
            }
        }
        aY.appendChild(aF(d, w, a1));
        return aY
    }

    function aR(aY) {
        var w = W.createElement("div");
        var d = am[aY];
        if (!t(d)) {
            d = [aY]
        }
        w.appendChild(aF(d, null, null));
        return w
    }

    function ap(w, d) {
        var aY = null;
        if (t(w)) {
            if (d && typeof w === "string") {
                aY = new dtjava.App(w, null)
            } else {
                if (w instanceof dtjava.App) {
                    aY = w
                } else {
                    aY = new dtjava.App(w.url, w)
                }
            }
        }
        return aY
    }

    function ag(w, aY) {
        var d = new dtjava.Callbacks(aY);
        if (w.javafx == null && d.onGetSplash === aW) {
            d.onGetSplash = null
        }
        return d
    }

    function aO(d) {
        if (isFinite(d)) {
            return d + "px"
        } else {
            return d
        }
    }

    function ab(aY, w, aZ) {
        var d = aY.id + "-" + aZ;
        var a0 = W.createElement("div");
        a0.id = d;
        a0.style.width = aO(aY.width);
        a0.style.height = aO(aY.height);
        a0.style.position = "absolute";
        a0.style.backgroundColor = "white";
        if (w != null) {
            a0.appendChild(w)
        }
        return a0
    }

    var b = {};

    function aE(aZ, d) {
        if (d == null) {
            d = b[aZ];
            if (t(d)) {
                b[aZ] = null
            } else {
                return
            }
        }
        var w = document.getElementById(aZ);
        if (!t(w)) {
            return
        }
        if (u(d.onJavascriptReady)) {
            var aY = d.onJavascriptReady;
            if (w.status < 2) {
                w.onLoad = function () {
                    aY(aZ);
                    w.onLoad = null
                }
            }
        }
        if (u(d.onRuntimeError)) {
            if (w.status < 3) {
                w.onError = function () {
                    d.onRuntimeError(aZ)
                }
            } else {
                if (w.status == 3) {
                    d.onRuntimeError(aZ)
                }
            }
        }
    }

    function aI(aY, d) {
        if (!t(d) || !(u(d.onDeployError) || u(d.onJavascriptReady))) {
            return null
        }
        var w = W.createElement("script");
        b[aY] = d;
        w.text = "dtjava.installCallbacks('" + aY + "')";
        return w
    }

    function aV(w) {
        var d = ab(w, null, "error");
        d.style.visibility = "hidden";
        return d
    }

    function J(aZ, w, a0) {
        var a3 = ap(aZ, false);
        if (!(t(a3) && t(a3.url) && t(a3.width) && t(a3.height) && t(a3.placeholder))) {
            throw"Required attributes are missing! (url, width, height and placeholder are required)"
        }
        a3.id = aD(a3);
        if ((typeof a3.placeholder == "string")) {
            var a1 = W.getElementById(a3.placeholder);
            if (a1 == null) {
                throw"Application placeholder [id=" + a3.placeholder + "] not found."
            }
            a3.placeholder = a1
        }
        a3.placeholder.appendChild(aV(a3));
        w = new dtjava.Platform(w);
        var d = ag(w, a0);
        var aY = N(w);
        var a2 = function () {
            var a5 = H(a3, w, d);
            var a6 = (d.onGetSplash == null) ? null : d.onGetSplash(aZ);
            a3.placeholder.style.position = "relative";
            if (a6 != null) {
                var a4 = ab(a3, a6, "splash");
                aa(a4, false);
                aq(a5, true);
                o(a3.placeholder);
                a3.placeholder.appendChild(aV(a3));
                a3.placeholder.appendChild(a4);
                a3.placeholder.appendChild(a5)
            } else {
                o(a3.placeholder);
                a3.placeholder.appendChild(aV(a3));
                a3.placeholder.appendChild(a5)
            }
            setTimeout(function () {
                aE(a3.id, d)
            }, 0)
        };
        if (aY != null) {
            X(a3, w, aY, d, a2)
        } else {
            a2()
        }
    }

    function s(a0) {
        if (t(a0)) {
            var d = a0.width;
            var aZ = a0.height;
            var aY = "dummy";
            return new dtjava.App(aY, {id: a0.id, width: d, height: aZ, placeholder: a0.parentNode})
        } else {
            throw"Can not find applet with null id"
        }
    }

    function aK(a3, w, a1) {
        var aY = W.getElementById(a3);
        var a2 = s(aY);
        var d = ag(w, a1);
        w = new dtjava.Platform(w);
        var a0 = function () {
            a2.placeholder.insertBefore(aV(a2), aY);
            if (d.onGetSplash != null) {
                var a5 = d.onGetSplash(a2);
                if (t(a5)) {
                    var a4 = ab(a2, a5, "splash");
                    if (t(a4)) {
                        a2.placeholder.style.position = "relative";
                        a2.placeholder.insertBefore(a4, aY);
                        aq(aY, true)
                    }
                }
            }
        };
        var aZ = N(w);
        if (aZ != null) {
            X(a2, w, aZ, d, a0)
        } else {
            a0()
        }
    }

    function ay(aY, w, d) {
        m(function () {
            aK(aY, w, d)
        })
    }

    al();
    return {
        version: "20150817", validate: function (d) {
            return g(d)
        }, install: function (d, w) {
            return e(null, d, w, null)
        }, launch: function (w, d, aY) {
            return R(w, d, aY)
        }, embed: function (aY, w, d) {
            return J(aY, w, d)
        }, register: function (aY, d, w) {
            return ay(aY, d, w)
        }, hideSplash: function (d) {
            return h(d)
        }, addOnloadCallback: function (w, d) {
            if (d || (Z.chrome && !Z.win)) {
                a(w)
            } else {
                m(w)
            }
        }, installCallbacks: function (w, d) {
            aE(w, d)
        }, Platform: function (w) {
            this.jvm = "1.6+";
            this.javafx = null;
            this.plugin = "*";
            this.jvmargs = null;
            for (var d in w) {
                this[d] = w[d];
                if (this["jvmargs"] != null && typeof this.jvmargs == "string") {
                    this["jvmargs"] = this["jvmargs"].split(" ")
                }
            }
            this.toString = function () {
                return "Platform [jvm=" + this.jvm + ", javafx=" + this.javafx + ", plugin=" + this.plugin + ", jvmargs=" + this.jvmargs + "]"
            }
        }, App: function (d, w) {
            this.url = d;
            this.scriptable = true;
            this.sharedjvm = true;
            if (w != undefined && w != null) {
                this.id = w.id;
                this.jnlp_content = w.jnlp_content;
                this.width = w.width;
                this.height = w.height;
                this.params = w.params;
                this.scriptable = w.scriptable;
                this.sharedjvm = w.sharedjvm;
                this.placeholder = w.placeholder;
                this.toolkit = w.toolkit
            }
            this.toString = function () {
                var aY = "null";
                var aZ = true;
                if (t(this.params)) {
                    aY = "{";
                    for (p in this.params) {
                        aY += ((aZ) ? "" : ", ") + p + " => " + this.params[p];
                        aZ = false
                    }
                    aY += "}"
                }
                return "dtjava.App: [url=" + this.url + ", id=" + this.id + ", dimensions=(" + this.width + "," + this.height + "), toolkit=" + this.toolkit + ", embedded_jnlp=" + (t(this.jnlp_content) ? (this.jnlp_content.length + " bytes") : "NO") + ", params=" + aY + "]"
            }
        }, Callbacks: function (d) {
            this.onGetSplash = aW;
            this.onInstallNeeded = n;
            this.onInstallStarted = af;
            this.onInstallFinished = r;
            this.onDeployError = aX;
            this.onGetNoPluginMessage = aG;
            this.onJavascriptReady = null;
            this.onRuntimeError = Y;
            for (c in d) {
                this[c] = d[c]
            }
        }
    }
}();