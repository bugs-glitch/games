/**
 * Cooked with Flambe
 * https://github.com/aduros/flambe
 */
'use strict';
(function() {
    var O, da, g, t, k, p, f, R, s, n, h, aa, q, Q, C, U, P, T, V, Y, G, x, E, M, j, d, J, m, N, y, v, H, e, Z, z, F, ba;

    function w(a, b) {
        function c() {}
        c.prototype = a;
        var l = new c,
            d;
        for (d in b) l[d] = b[d];
        return l
    }

    function ga(a) {
        return a instanceof Array ? function() {
            return A.iter(a)
        } : "function" == typeof a.iterator ? B(a, a.iterator) : a.iterator
    }

    function B(a, b) {
        var c = function() {
            return c.method.apply(c.scope, arguments)
        };
        c.scope = a;
        c.method = b;
        return c
    }
    var i = {},
        o = function() {
            return G.__string_rec(this, "")
        },
        X = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    i.EReg = X;
    X.__name__ = ["EReg"];
    X.prototype = {
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) a = this.r.m[a];
            else throw "EReg::matched";
            return a
        },
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        __class__: X
    };
    var I = function() {
        this.h = {}
    };
    i.Hash = I;
    I.__name__ = ["Hash"];
    I.prototype = {
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return A.iter(a)
        },
        remove: function(a) {
            a = "$" + a;
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" + a)
        },
        get: function(a) {
            return this.h["$" + a]
        },
        set: function(a, b) {
            this.h["$" + a] = b
        },
        __class__: I
    };
    var A = function() {};
    i.HxOverrides = A;
    A.__name__ = ["HxOverrides"];
    A.dateStr = function(a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            l = a.getHours(),
            d = a.getMinutes(),
            e = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > l ? "0" + l : "" + l) + ":" + (10 > d ? "0" + d : "" + d) + ":" + (10 > e ? "0" + e : "" + e)
    };
    A.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return a = a.split(" "),
                    b = a[0].split("-"), a = a[1].split(":"), new Date(b[0], b[1] - 1, b[2], a[0], a[1], a[2]);
            default:
                throw "Invalid date format : " + a;
        }
    };
    A.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    A.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    A.remove = function(a, b) {
        for (var c = 0, l = a.length; c < l;) {
            if (a[c] == b) return a.splice(c, 1), !0;
            c++
        }
        return !1
    };
    A.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur <
                    this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var W = function() {
        this.h = {}
    };
    i.IntHash = W;
    W.__name__ = ["IntHash"];
    W.prototype = {
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return A.iter(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        get: function(a) {
            return this.h[a]
        },
        set: function(a, b) {
            this.h[a] = b
        },
        __class__: W
    };
    var ca = function() {};
    i.Lambda = ca;
    ca.__name__ = ["Lambda"];
    ca.array = function(a) {
        for (var b = [], a = ga(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    ca.has = function(a, b, c) {
        if (null == c)
            for (c = ga(a)(); c.hasNext();) {
                if (a = c.next(), a == b) return !0
            } else
                for (var l = ga(a)(); l.hasNext();)
                    if (a = l.next(), c(a, b)) return !0;
        return !1
    };
    ca.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var l = ga(a)(); l.hasNext();) l.next(), c++;
        else
            for (l = ga(a)(); l.hasNext();) {
                var d = l.next();
                b(d) && c++
            }
        return c
    };
    var ea = function() {
        this.length = 0
    };
    i.List = ea;
    ea.__name__ = ["List"];
    ea.prototype = {
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        __class__: ea
    };
    var K = function() {};
    i.Reflect = K;
    K.__name__ = ["Reflect"];
    K.field = function(a, b) {
        var c = null;
        try {
            c = a[b]
        } catch (l) {}
        return c
    };
    K.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                l;
            for (l in a) c.call(a, l) && b.push(l)
        }
        return b
    };
    K.isFunction = function(a) {
        return "function" ==
            typeof a && !(a.__name__ || a.__ename__)
    };
    K.compareMethods = function(a, b) {
        return a == b ? !0 : !K.isFunction(a) || !K.isFunction(b) ? !1 : a.scope == b.scope && a.method == b.method && null != a.method
    };
    var r = function() {};
    i.Std = r;
    r.__name__ = ["Std"];
    r.string = function(a) {
        return G.__string_rec(a, "")
    };
    r.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == A.cca(a, 1) || 88 == A.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    r.parseFloat = function(a) {
        return parseFloat(a)
    };
    var $ = function() {
        this.b = ""
    };
    i.StringBuf = $;
    $.__name__ = ["StringBuf"];
    $.prototype = {
        __class__: $
    };
    var S = function() {};
    i.StringTools = S;
    S.__name__ = ["StringTools"];
    S.urlEncode = function(a) {
        return encodeURIComponent(a)
    };
    S.urlDecode = function(a) {
        return decodeURIComponent(a.split("+").join(" "))
    };
    S.startsWith = function(a, b) {
        return a.length >= b.length && A.substr(a, 0, b.length) == b
    };
    S.isSpace = function(a, b) {
        var c = A.cca(a, b);
        return 9 <= c && 13 >= c || 32 == c
    };
    S.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && S.isSpace(a, c);) c++;
        return 0 < c ? A.substr(a, c, b - c) : a
    };
    S.rtrim = function(a) {
        for (var b = a.length,
                c = 0; c < b && S.isSpace(a, b - c - 1);) c++;
        return 0 < c ? A.substr(a, 0, b - c) : a
    };
    S.trim = function(a) {
        return S.ltrim(S.rtrim(a))
    };
    var D = i.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    D.TNull = ["TNull", 0];
    D.TNull.toString = o;
    D.TNull.__enum__ = D;
    D.TInt = ["TInt", 1];
    D.TInt.toString = o;
    D.TInt.__enum__ = D;
    D.TFloat = ["TFloat", 2];
    D.TFloat.toString = o;
    D.TFloat.__enum__ = D;
    D.TBool = ["TBool", 3];
    D.TBool.toString = o;
    D.TBool.__enum__ = D;
    D.TObject = ["TObject",
        4
    ];
    D.TObject.toString = o;
    D.TObject.__enum__ = D;
    D.TFunction = ["TFunction", 5];
    D.TFunction.toString = o;
    D.TFunction.__enum__ = D;
    D.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = D;
        a.toString = o;
        return a
    };
    D.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = D;
        a.toString = o;
        return a
    };
    D.TUnknown = ["TUnknown", 8];
    D.TUnknown.toString = o;
    D.TUnknown.__enum__ = D;
    var L = function() {};
    i.Type = L;
    L.__name__ = ["Type"];
    L.getClassName = function(a) {
        return a.__name__.join(".")
    };
    L.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    L.resolveClass =
        function(a) {
            a = i[a];
            return null == a || !a.__name__ ? null : a
        };
    L.resolveEnum = function(a) {
        a = i[a];
        return null == a || !a.__ename__ ? null : a
    };
    L.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0],
                    b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    L.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    L.createEnum = function(a, b, c) {
        var l = K.field(a, b);
        if (null == l) throw "No such constructor " + b;
        if (K.isFunction(l)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return l.apply(a, c)
        }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return l
    };
    L.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    L["typeof"] =
        function(a) {
            switch (typeof a) {
                case "boolean":
                    return D.TBool;
                case "string":
                    return D.TClass(String);
                case "number":
                    return Math.ceil(a) == a % 2147483648 ? D.TInt : D.TFloat;
                case "object":
                    if (null == a) return D.TNull;
                    var b = a.__enum__;
                    if (null != b) return D.TEnum(b);
                    a = a.__class__;
                    return null != a ? D.TClass(a) : D.TObject;
                case "function":
                    return a.__name__ || a.__ename__ ? D.TObject : D.TFunction;
                case "undefined":
                    return D.TNull;
                default:
                    return D.TUnknown
            }
        };
    var u = function() {};
    i.Xml = u;
    u.__name__ = ["Xml"];
    u.parse = function(a) {
        return C.Parser.parse(a)
    };
    u.createElement = function(a) {
        var b = new u;
        b.nodeType = u.Element;
        b._children = [];
        b._attributes = new I;
        b.setNodeName(a);
        return b
    };
    u.createPCData = function(a) {
        var b = new u;
        b.nodeType = u.PCData;
        b.setNodeValue(a);
        return b
    };
    u.createCData = function(a) {
        var b = new u;
        b.nodeType = u.CData;
        b.setNodeValue(a);
        return b
    };
    u.createComment = function(a) {
        var b = new u;
        b.nodeType = u.Comment;
        b.setNodeValue(a);
        return b
    };
    u.createDocType = function(a) {
        var b = new u;
        b.nodeType = u.DocType;
        b.setNodeValue(a);
        return b
    };
    u.createProlog = function(a) {
        var b =
            new u;
        b.nodeType = u.Prolog;
        b.setNodeValue(a);
        return b
    };
    u.createDocument = function() {
        var a = new u;
        a.nodeType = u.Document;
        a._children = [];
        return a
    };
    u.prototype = {
        toString: function() {
            if (this.nodeType == u.PCData) return this._nodeValue;
            if (this.nodeType == u.CData) return "<![CDATA[" + this._nodeValue + "]]\>";
            if (this.nodeType == u.Comment) return "<\!--" + this._nodeValue + "--\>";
            if (this.nodeType == u.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
            if (this.nodeType == u.Prolog) return "<?" + this._nodeValue + "?>";
            var a = new $;
            if (this.nodeType ==
                u.Element) {
                a.b += r.string("<");
                a.b += r.string(this._nodeName);
                for (var b = this._attributes.keys(); b.hasNext();) {
                    var c = b.next();
                    a.b += r.string(" ");
                    a.b += r.string(c);
                    a.b += r.string('="');
                    a.b += r.string(this._attributes.get(c));
                    a.b += r.string('"')
                }
                if (0 == this._children.length) return a.b += r.string("/>"), a.b;
                a.b += r.string(">")
            }
            for (b = this.iterator(); b.hasNext();) c = b.next(), a.b += r.string(c.toString());
            this.nodeType == u.Element && (a.b += r.string("</"), a.b += r.string(this._nodeName), a.b += r.string(">"));
            return a.b
        },
        addChild: function(a) {
            if (null ==
                this._children) throw "bad nodetype";
            null != a._parent && A.remove(a._parent._children, a);
            a._parent = this;
            this._children.push(a)
        },
        firstElement: function() {
            if (null == this._children) throw "bad nodetype";
            for (var a = 0, b = this._children.length; a < b;) {
                var c = this._children[a];
                if (c.nodeType == u.Element) return c;
                a++
            }
            return null
        },
        elementsNamed: function(a) {
            if (null == this._children) throw "bad nodetype";
            return {
                cur: 0,
                x: this._children,
                hasNext: function() {
                    for (var b = this.cur, c = this.x.length; b < c;) {
                        var l = this.x[b];
                        if (l.nodeType == u.Element &&
                            l._nodeName == a) break;
                        b++
                    }
                    this.cur = b;
                    return b < c
                },
                next: function() {
                    for (var b = this.cur, c = this.x.length; b < c;) {
                        var l = this.x[b];
                        b++;
                        if (l.nodeType == u.Element && l._nodeName == a) return this.cur = b, l
                    }
                    return null
                }
            }
        },
        elements: function() {
            if (null == this._children) throw "bad nodetype";
            return {
                cur: 0,
                x: this._children,
                hasNext: function() {
                    for (var a = this.cur, b = this.x.length; a < b && !(this.x[a].nodeType == u.Element);) a += 1;
                    this.cur = a;
                    return a < b
                },
                next: function() {
                    for (var a = this.cur, b = this.x.length; a < b;) {
                        var c = this.x[a],
                            a = a + 1;
                        if (c.nodeType ==
                            u.Element) return this.cur = a, c
                    }
                    return null
                }
            }
        },
        iterator: function() {
            if (null == this._children) throw "bad nodetype";
            return {
                cur: 0,
                x: this._children,
                hasNext: function() {
                    return this.cur < this.x.length
                },
                next: function() {
                    return this.x[this.cur++]
                }
            }
        },
        exists: function(a) {
            if (this.nodeType != u.Element) throw "bad nodeType";
            return this._attributes.exists(a)
        },
        set: function(a, b) {
            if (this.nodeType != u.Element) throw "bad nodeType";
            this._attributes.set(a, b)
        },
        get: function(a) {
            if (this.nodeType != u.Element) throw "bad nodeType";
            return this._attributes.get(a)
        },
        getParent: function() {
            return this._parent
        },
        setNodeValue: function(a) {
            if (this.nodeType == u.Element || this.nodeType == u.Document) throw "bad nodeType";
            return this._nodeValue = a
        },
        getNodeValue: function() {
            if (this.nodeType == u.Element || this.nodeType == u.Document) throw "bad nodeType";
            return this._nodeValue
        },
        setNodeName: function(a) {
            if (this.nodeType != u.Element) throw "bad nodeType";
            return this._nodeName = a
        },
        getNodeName: function() {
            if (this.nodeType != u.Element) throw "bad nodeType";
            return this._nodeName
        },
        __class__: u
    };
    O = function() {};
    da = void 0;
    g = void 0;
    t = void 0;
    k = void 0;
    p = void 0;
    i["com.nick.fairly_oddparents.fowl_play.DocumentApp"] = O;
    O.__name__ = ["com", "nick", "fairly_oddparents", "fowl_play", "DocumentApp"];
    O.main = function() {
        E.init();
        O._fillEntity = new M;
        O._fillSprite = new j.FillSprite(0, 960, 560);
        O._fillEntity.add(O._fillSprite);
        E.root.addChild(O._fillEntity);
        f.WorkinCloud.instance.getAssets()._setBaseUrl(O.trimUrl(f.JSEmbedProxy.getBase()));
        f.WorkinCloud.instance.getDispatcher().addEventListener(R.ConstantsCloud.EVENT_FILES_LOADED,
            O._onBootstrapLoad);
        f.WorkinCloud.instance.getAssets().addPackDef("bootstrap");
        f.WorkinCloud.instance.getAssets().loadPack("bootstrap")
    };
    O._onBootstrapLoad = function() {
        f.WorkinCloud.instance.getDispatcher().removeEventListener(R.ConstantsCloud.EVENT_FILES_LOADED, O._onBootstrapLoad);
        O._initServices();
        U.delay(O._initMain, 800)
    };
    O._initMain = function() {
        O._main = new da
    };
    O._initServices = function() {
        for (var a = f.WorkinCloud.instance.getAssets().getXML(g.ConstantsApp.CONFIG_XML_PATH).node.resolve("services").nodes.resolve("service").iterator(); a.hasNext();) {
            var b =
                a.next();
            switch (b.att.resolve("type").toString()) {
                case "analytics":
                    "true" == b.att.resolve("enabled").toString() && (f.WorkinCloud.instance.log("[DocumentApp](_initServices) initAnalytics"), s.ServiceAnalytics.init(b.att.resolve("id").toString()))
            }
        }
    };
    O.trimUrl = function(a) {
        if ("" == a) return "";
        if (0 > a.indexOf("http")) return "/" == a.charAt(0) && (a = A.substr(a, 1, a.length - 1)), a;
        var b = a.indexOf("http://");
        0 > b ? (b = a.indexOf("https://"), b = 0 > b ? 0 : b + 8) : b += 7;
        b = a.indexOf("/", b);
        a = A.substr(a, b, a.length - b);
        0 > a.indexOf("assets") &&
            (a += "assets/");
        return a
    };
    da = function() {
        this._RATE_REFRESH_SCALE = 0.4;
        this._flagGameplayPaused = this._flagInitialLoadComplete = this._flagJSEmbedPauseState = this._flagJSEmbedExists = !1;
        this._timerRefreshScale = 0.0010;
        f.WorkinCloud.instance.log("[Main] Constructed");
        this._flagWebAudioUnlocked = !1;
        this._timeline = E.root;
        E.uncaughtError.connect(B(this, this.errorHandler));
        f.WorkinCloud.instance.getInput().prime();
        this._scaleSprite = new j.Sprite;
        this._timeline.add(this._scaleSprite);
        this._layerWorld = new M;
        this._layerUI =
            new M;
        this._timeline.addChild(this._layerWorld);
        this._timeline.addChild(this._layerUI);
        this._flagJSEmbedExists = f.JSEmbedProxy.getExists();
        this._isUIActive = this._isWorldActive = !1;
        this._flagFirstPlay = !0;
        this._document = {
            canvasScale: 1
        };
        this._document = eval("document");
        this._changeActions = [];
        this._flowstack = [];
        this._parseConfigXML();
        this._beginEngine();
        this._addEventListeners();
        U.delay(B(this, this._beginInitialLoad), 800)
    };
    i["com.nick.fairly_oddparents.fowl_play.Main"] = da;
    da.__name__ = ["com", "nick", "fairly_oddparents",
        "fowl_play", "Main"
    ];
    da.prototype = {
        _worldDestroy: function() {
            this._isWorldActive && (this._isWorldActive = !1, this._world.dispose(), this._world = null)
        },
        _onEventInterfaceChange: function(a) {
            this._executeInterfaceChange(a.flowId, a.screenId)
        },
        _handleWebAudioUnlock: function() {
            this._flagWebAudioUnlocked || (this._flagWebAudioUnlocked = !0, f.WorkinCloud.instance._getSound().playSound("audio/silent"))
        },
        _onEventInput: function(a) {
            this._handleWebAudioUnlock();
            f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT) ||
                this._ui.handleInput(a) && this._isWorldActive && this._world.handleInput(a)
        },
        _onFlowEvent: function(a) {
            this._addFlowEvent(a.flowId)
        },
        _onMuteToggle: function() {
            f.WorkinCloud.instance.setValue(g.ConstantsApp.BOOL_MUTED, !f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_MUTED))
        },
        _enableInput: function() {
            f.WorkinCloud.instance.getDispatcher().addEventListener(n.WMEventInput.EVENT_INPUT, B(this, this._onEventInput))
        },
        _addEventListeners: function() {
            f.WorkinCloud.instance.getDispatcher().addEventListener(n.WMEventUpdate.EVENT_UPDATE,
                B(this, this._onEventUpdate));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_MUTE_TOGGLE, B(this, this._onMuteToggle));
            f.WorkinCloud.instance.getDispatcher().addEventListener(n.WMEventFlow.EVENT_FLOW, B(this, this._onFlowEvent));
            this._ui.addEventListener(n.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT, B(this, this._onEventInterfaceChange))
        },
        _executeInterfaceChange: function(a, b) {
            for (var c = this._changeActions.length; 0 < c;) c--, this._changeActions[c]._getScreenId() == b && this._changeActions[c]._getChangeEvent() ==
                a && (this._changeActions[c]._getAction()(), this._changeActions.splice(c, 1))
        },
        _executeFlowStack: function(a) {
            if (!this._ui._getHasTransition()) switch (f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_INPUT_LOCK, !1), a) {
                case g.ConstantsScreen.FLOW_SPLASH_PLAY:
                    this._gotoAndPlayGame();
                    s.ServiceAnalytics.start();
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_MENU:
                    f.WorkinCloud.instance.log("[Main] Main Menu Flow Click");
                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(g.ConstantsApp.EVENT_PAUSE));
                    this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_GAMEPLAY_MENU);
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE:
                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(g.ConstantsApp.EVENT_UNPAUSE));
                    this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_GAMEPLAY_HUD);
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP:
                    this._ui.openScreen(g.ConstantsScreen.SCREEN_HELP, !1);
                    s.ServiceAnalytics.sendMilestone("custom3");
                    break;
                case g.ConstantsScreen.FLOW_HELP_CLOSE:
                    this._ui.closeScreen(g.ConstantsScreen.SCREEN_HELP);
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT:
                    this._ui.openScreen(g.ConstantsScreen.SCREEN_QUIT_CONFIRM, !1);
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES:
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAME_LOSE, !1);
                    this._gotoEndGame(!1);
                    break;
                case g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO:
                    this._ui.closeScreen(g.ConstantsScreen.SCREEN_QUIT_CONFIRM);
                    break;
                case g.ConstantsScreen.FLOW_BRANCH_GAME_LOSE:
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAME_LOSE, !1);
                    this._gotoEndGame(!1);
                    break;
                case g.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN:
                    this._resetFlagsResults(), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_GOLD), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_SILVER), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_BRONZE), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_ALUMINUM), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_TIN), this._ui.closeScreen(g.ConstantsScreen.SCREEN_END_ROCK), this._gotoEndGame(this._flagWonPreviousGame, !0)
            }
        },
        _runFlowStack: function() {
            if (0 !=
                this._flowstack.length)
                for (; 0 < this._flowstack.length;) this._executeFlowStack(this._flowstack[0]), this._flowstack.shift()
        },
        _addFlowEvent: function(a) {
            this._flowstack.push(a)
        },
        _hideOrientationAlert: function() {
            f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT) && (f.WorkinCloud.instance.log("[Main](_showOrientationAlert) Back to landscape."), f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT, !1), f.JSEmbedProxy.unpause(), f.JSEmbedProxy.alertOff())
        },
        _showOrientationAlert: function() {
            f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT) ||
                (f.WorkinCloud.instance.log("[Main](_showOrientationAlert) Portrait mode!"), f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT, !0), f.JSEmbedProxy.pause(), f.JSEmbedProxy.alertOn(f.WorkinCloud.instance._getLocalize().getData("orientation_landscape")._getString()))
        },
        _unpauseGameplay: function(a) {
            null == a && (a = !0);
            a && (this._flagGameplayPaused = !1);
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(g.ConstantsApp.EVENT_UNPAUSE))
        },
        _pauseGameplay: function(a) {
            null == a && (a = !0);
            a && (this._flagGameplayPaused = !0);
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(g.ConstantsApp.EVENT_PAUSE))
        },
        _onEventUpdate: function(a) {
            if (this._flagJSEmbedExists && (f.JSEmbedProxy.getIsPaused() != this._flagJSEmbedPauseState && ((this._flagJSEmbedPauseState = f.JSEmbedProxy.getIsPaused()) ? this._pauseGameplay(!1) : this._flagGameplayPaused || this._unpauseGameplay()), this._timerRefreshScale -= a.getDt(), 0 >= this._timerRefreshScale)) {
                this._timerRefreshScale = this._RATE_REFRESH_SCALE;
                if (this._flagInitialLoadComplete &&
                    f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_TOUCH_DEVICE)) {
                    if (f.JSEmbedProxy.getCanvasHeight() > f.JSEmbedProxy.getCanvasWidth()) {
                        this._showOrientationAlert();
                        return
                    }
                    if (f.WorkinCloud.instance.getValue(g.ConstantsApp.BOOL_ORIENTATION_ALERT)) {
                        this._hideOrientationAlert();
                        return
                    }
                }
                this._flagJSEmbedExists && f.JSEmbedProxy.getCanvasScale() != this._scaleSprite.scaleX._value && (this._scaleSprite.scaleX.set__(this._scaleSprite.scaleY.set__(f.JSEmbedProxy.getCanvasScale())), f.WorkinCloud.instance.getInput()._setScale(f.JSEmbedProxy.getCanvasScale()))
            }
            h.tween.WorkinTweener._getInstance().update(a.getDt());
            f.WorkinCloud.instance.getInput().update(a.getDt());
            this._isUIActive && this._ui.update(a.getDt());
            this._isWorldActive && (this._world.update(a.getDt()), this._world.render());
            f.WorkinCloud.instance._getSound().update(a.getDt());
            f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_GAME_LOSE) ? this._onFlowEvent(new n.WMEventFlow(g.ConstantsScreen.FLOW_BRANCH_GAME_LOSE)) : f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_GAME_WIN) ? this._onFlowEvent(new n.WMEventFlow(g.ConstantsScreen.FLOW_BRANCH_GAME_WIN)) :
                f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_LEVEL_LOSE) ? this._onFlowEvent(new n.WMEventFlow(g.ConstantsScreen.FLOW_BRANCH_LEVEL_LOSE)) : f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_LEVEL_WIN) && this._onFlowEvent(new n.WMEventFlow(g.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN));
            this._runFlowStack()
        },
        _generateWorld: function() {
            this._isWorldActive && this._worldDestroy();
            this._isWorldActive = !0;
            this._world = new t.World(this._layerWorld, this)
        },
        _resetFlagsResults: function() {
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_PAUSED,
                !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MUTED, g.ConstantsApp.DEBUG_SILENCE_AUDIO);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAMEOVER, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAME_WIN, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAME_LOSE, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_LEVEL_WIN, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_LEVEL_LOSE, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_INPUT_LOCK, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_AIM,
                !0);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_METER, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_1, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_2, !1);
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_SCORE, 0);
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_LEVEL, 1);
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_DUCKS_LEFT, 5);
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_TARGETS_LEFT, 2);
            f.WorkinCloud.instance.setFloat(g.ConstantsApp.FLOAT_POWER_METER,
                0)
        },
        _onGameNew: function() {
            this._resetFlagsResults()
        },
        _gotoEndGame: function(a, b) {
            null == b && (b = !1);
            this._flagWonPreviousGame = a;
            if (b) this._gotoAndPlayGame(!0);
            else {
                var c = f.WorkinCloud.instance.getInt(g.ConstantsApp.INT_SCORE);
                4E3 <= c ? this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_GOLD) : 3E3 <= c ? this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_SILVER) : 2E3 <= c ? this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_BRONZE) : 1E3 <= c ? this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_ALUMINUM) : 500 <= c ?
                    this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_TIN) : 0 <= c && this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_END_ROCK)
            }
            s.ServiceAnalytics.sendMilestone("custom7")
        },
        _gotoAndPlayGame: function(a) {
            null == a && (a = !1);
            this._isWorldActive && !a ? f.WorkinCloud.instance.log("[Main](_gotoAndPlayGame) World already exists. Using existing world instead of creating new one.") : this._generateWorld();
            this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_GAMEPLAY_HUD, !1);
            this._onGameNew();
            s.ServiceAnalytics.sendMilestone("custom6")
        },
        _generateUI: function() {
            this._isUIActive = !0;
            this._ui.addScreen(g.ConstantsScreen.SCREEN_LOADING, k.screens.ScreenLoading, "ui/ScreenLoading");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_SPLASH, k.screens.ScreenSplash, "ui/splash/ScreenSplash");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_GAMEPLAY_MENU, k.screens.ScreenGameplayMenu, "ui/menu/ScreenMenu");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_GAMEPLAY_HUD, k.screens.ScreenGameplayHUD, "ui/gameplay_hud/ScreenHUD");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_HELP,
                k.screens.ScreenHelp, "ui/help/ScreenHTML5Help");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_QUIT_CONFIRM, k.screens.ScreenQuitConfirm, "ui/menu/ScreenQuitConfirm");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_GOLD, k.screens.ScreenEndGame, "ui/menu/ScreenEndGold");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_SILVER, k.screens.ScreenEndGame, "ui/menu/ScreenEndSilver");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_BRONZE, k.screens.ScreenEndGame, "ui/menu/ScreenEndBronze");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_ALUMINUM,
                k.screens.ScreenEndGame, "ui/menu/ScreenEndAluminum");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_TIN, k.screens.ScreenEndGame, "ui/menu/ScreenEndTin");
            this._ui.addScreen(g.ConstantsScreen.SCREEN_END_ROCK, k.screens.ScreenEndGame, "ui/menu/ScreenEndRock")
        },
        _registerInput: function() {
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_SPACE, [d.Key.Space]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_LEFT, [d.Key.Left, d.Key.A]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_RIGHT,
                [d.Key.Right, d.Key.D]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_UP, [d.Key.Up, d.Key.W]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_DOWN, [d.Key.Down, d.Key.S]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_Z, [d.Key.Z]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_X, [d.Key.X]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_C, [d.Key.C]);
            f.WorkinCloud.instance.getInput().registerInput(g.ConstantsApp.INPUT_P,
                [d.Key.P])
        },
        _beginEngine: function() {
            f.WorkinCloud.instance.log("[Main](_beginEngine)");
            this._ui = new k.ScreenManager(this._layerUI);
            this._timeline.add(new aa.ComponentUpdater);
            this._registerInput();
            this._generateUI();
            this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_LOADING)
        },
        _gotoSplash: function() {
            this._enableInput();
            this._ui.changeScreenTo(g.ConstantsScreen.SCREEN_SPLASH, !1, g.ConstantsScreen.TRANSITION_SCROLL_DOWN);
            s.ServiceAnalytics.sendMilestone("custom2")
        },
        _eventInitialLoadComplete: function() {
            f.WorkinCloud.instance.getDispatcher().removeEventListener(R.ConstantsCloud.EVENT_FILES_LOADED,
                B(this, this._eventInitialLoadComplete));
            this._flagInitialLoadComplete = !0;
            U.delay(B(this, this._gotoSplash), 800)
        },
        _beginInitialLoad: function() {
            f.WorkinCloud.instance.getDispatcher().addEventListener(R.ConstantsCloud.EVENT_FILES_LOADED, B(this, this._eventInitialLoadComplete));
            f.WorkinCloud.instance.getAssets().loadChunk("initial");
            f.WorkinCloud.instance.getAssets().loadFolder("fonts_" + f.WorkinCloud.instance.getString(R.ConstantsCloud.STRING_REGION_ID))
        },
        _parseConfigXML: function() {
            f.WorkinCloud.instance.log("[Main](_parseConfigXML) Parse Config XML: " +
                g.ConstantsApp.CONFIG_XML_PATH);
            for (var a = f.WorkinCloud.instance.getAssets().getXML(g.ConstantsApp.CONFIG_XML_PATH), b = a.node.resolve("packs").nodes.resolve("pack").iterator(); b.hasNext();) {
                for (var c = b.next(), l = [], d = c.nodes.resolve("flump").iterator(); d.hasNext();) {
                    var e = d.next();
                    l.push(e.att.resolve("id").toString())
                }
                f.WorkinCloud.instance.getAssets().addPackDef(c.att.resolve("id").toString(), l)
            }
            for (b = a.node.resolve("chunks").nodes.resolve("chunk").iterator(); b.hasNext();) c = b.next(), f.WorkinCloud.instance.getAssets().addChunk(c.att.resolve("id").toString(),
                c);
            f.WorkinCloud.instance.setString(R.ConstantsCloud.STRING_REGION_ID, r.string(a.node.resolve("localization").node.resolve("region").getInnerData()));
            f.WorkinCloud.instance.log("[Main] Localization : Set Region: " + f.WorkinCloud.instance.getString(R.ConstantsCloud.STRING_REGION_ID))
        },
        errorHandler: function() {},
        __class__: da
    };
    g = {
        ConstantsApp: function() {}
    };
    i["com.nick.fairly_oddparents.fowl_play.data.ConstantsApp"] = g.ConstantsApp;
    g.ConstantsApp.__name__ = "com,nick,fairly_oddparents,fowl_play,data,ConstantsApp".split(",");
    g.ConstantsScreen = function() {};
    i["com.nick.fairly_oddparents.fowl_play.data.ConstantsScreen"] = g.ConstantsScreen;
    g.ConstantsScreen.__name__ = "com,nick,fairly_oddparents,fowl_play,data,ConstantsScreen".split(",");
    p = {
        Collision2: function() {}
    };
    i["com.nick.fairly_oddparents.fowl_play.math.Collision2"] = p.Collision2;
    p.Collision2.__name__ = "com,nick,fairly_oddparents,fowl_play,math,Collision2".split(",");
    p.Collision2.circleToLineCollision = function(a, b, c, l, d, e) {
        if (0 < b.x * d.x + b.y * d.y) return 1;
        var f;
        f = a.x - (e.x +
            l.startPoint.x) - d.x * c;
        var d = a.y - (e.y + l.startPoint.y) - d.y * c,
            g = b.x,
            b = b.y,
            h = (g * d - b * f) / (l.direction.y * g - l.direction.x * b);
        if (0 <= h && 1 >= h) {
            if (f = (l.direction.x * d - l.direction.y * f) / (l.direction.y * g - l.direction.x * b), p.Collision2.lineCollisionContactPoint = null, 0 < f || 1 >= f) return f
        } else {
            l = 0 > h ? l.startPoint : l.endPoint;
            f = a.x - (l.x + e.x);
            d = a.y - (l.y + e.y);
            c = f * f + d * d - c * c;
            if (0 >= c) return 0;
            a = g * g + b * b;
            f = 2 * (g * f + b * d);
            d = f * f - 4 * a * c;
            if (0 <= d && (f = (-f - Math.sqrt(d)) * (1 / (2 * a)), 0 <= f && 1 > f)) return p.Collision2.lineCollisionContactPoint = l,
                f
        }
        return 1
    };
    p.Collision2.prototype = {
        __class__: p.Collision2
    };
    p.CollisionBounds = function(a) {
        this.enabled = !0;
        this.owner = a
    };
    i["com.nick.fairly_oddparents.fowl_play.math.CollisionBounds"] = p.CollisionBounds;
    p.CollisionBounds.__name__ = "com,nick,fairly_oddparents,fowl_play,math,CollisionBounds".split(",");
    p.CollisionBounds.prototype = {
        setCollisionBox: function(a, b, c) {
            this.boundsType = p.CollisionBounds.POLY;
            var l = c * p.GeomConst.DEGREE_RADIAN,
                c = Math.cos(l),
                l = Math.sin(l);
            this.width = a;
            this.height = b;
            a *= 0.5;
            b *= 0.5;
            this.radius = Math.sqrt(a * a + b * b);
            this.points = [new p.Vector(-a * c + -b * -l, -b * c + -a * l), new p.Vector(a * c + -b * -l, -b * c + a * l), new p.Vector(a * c + b * -l, b * c + a * l), new p.Vector(-a * c + b * -l, b * c + -a * l)];
            this.edges = [new p.splines.LineSpline(this.points[0], this.points[1]), new p.splines.LineSpline(this.points[1], this.points[2]), new p.splines.LineSpline(this.points[2], this.points[3]), new p.splines.LineSpline(this.points[3], this.points[0])];
            this.normals = [this.edges[0].direction.cross(p.Vector.POSITIVE_Z).normalize(), this.edges[1].direction.cross(p.Vector.POSITIVE_Z).normalize(),
                this.edges[2].direction.cross(p.Vector.POSITIVE_Z).normalize(), this.edges[3].direction.cross(p.Vector.POSITIVE_Z).normalize()
            ]
        },
        __class__: p.CollisionBounds
    };
    p.GeomConst = function() {};
    i["com.nick.fairly_oddparents.fowl_play.math.GeomConst"] = p.GeomConst;
    p.GeomConst.__name__ = "com,nick,fairly_oddparents,fowl_play,math,GeomConst".split(",");
    p.MotionCurve = function() {
        this.extendDuration = 1;
        this.time = 0;
        this.duration = 1;
        this.forces = new p.Vector;
        this.change = new p.Vector;
        this.direction = new p.Vector;
        this.position =
            new p.Vector
    };
    i["com.nick.fairly_oddparents.fowl_play.math.MotionCurve"] = p.MotionCurve;
    p.MotionCurve.__name__ = "com,nick,fairly_oddparents,fowl_play,math,MotionCurve".split(",");
    p.MotionCurve.prototype = {
        update: function(a) {
            this.time += a;
            if (this.time > this.duration) {
                var b = 2 * (1 / this.duration),
                    b = new p.Vector((this.curve.endPoint.x - this.curve.controlPoint.x) * b, (this.curve.endPoint.y - this.curve.controlPoint.y) * b, (this.curve.endPoint.z - this.curve.controlPoint.z) * b),
                    c = this.curve.startPoint = this.curve.endPoint;
                this.time %= this.duration;
                this.duration = this.extendDuration;
                var l = new p.Vector(c.x + (b.x + 0.5 * this.forces.x) * this.duration, c.y + (b.y + 0.5 * this.forces.y) * this.duration, c.z + (b.z + 0.5 * this.forces.z) * this.duration),
                    d = 0.5 * this.duration;
                this.curve.controlPoint = new p.Vector(c.x + b.x * d, c.y + b.y * d, c.z + b.z * d);
                this.curve.endPoint = l;
                this.curve.update()
            }
            b = this.curve.getPoint(this.time / this.duration);
            this.change.x = b.x - this.position.x;
            this.change.y = b.y - this.position.y;
            this.change.z = b.z - this.position.z;
            this.direction.x =
                this.change.x / a;
            this.direction.y = this.change.y / a;
            this.direction.z = this.change.z / a;
            this.position = b
        },
        setDirection: function(a, b, c) {
            null == c && (c = 1);
            this.position = a.clone();
            this.duration = c;
            this.time = 0;
            var l = new p.Vector(a.x + (b.x + 0.5 * this.forces.x) * c, a.y + (b.y + 0.5 * this.forces.y) * c, a.z + (b.z + 0.5 * this.forces.z) * c),
                c = 0.5 * c,
                a = new p.Vector(a.x + b.x * c, a.y + b.y * c, a.z + b.z * c);
            this.curve = new p.splines.QuadraticSpline(this.position, a, l);
            this.update(0.0010)
        },
        __class__: p.MotionCurve
    };
    p.Vector = function(a, b, c) {
        null == c && (c =
            0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        this.z = c
    };
    i["com.nick.fairly_oddparents.fowl_play.math.Vector"] = p.Vector;
    p.Vector.__name__ = "com,nick,fairly_oddparents,fowl_play,math,Vector".split(",");
    p.Vector.prototype = {
        clone: function() {
            return new p.Vector(this.x, this.y, this.z)
        },
        reflect: function(a) {
            var b = 2 * (this.x * a.x + this.y * a.y + this.z * a.z);
            return new p.Vector(this.x - b * a.x, this.y - b * a.y, this.z - b * a.z)
        },
        multiply: function(a) {
            return new p.Vector(this.x * a, this.y * a, this.z * a)
        },
        distanceTo: function(a) {
            var b =
                a.x - this.x,
                c = a.y - this.y,
                a = a.z - this.z;
            return Math.sqrt(b * b + c * c + a * a)
        },
        _setLength: function(a) {
            var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            if (0 == b) return b;
            a /= b;
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return b
        },
        _getLength: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        normalizeCopy: function() {
            var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            return 0 == a ? null : new p.Vector(this.x / a, this.y / a, this.z / a)
        },
        normalize: function() {
            var a = Math.sqrt(this.x * this.x + this.y * this.y +
                this.z * this.z);
            if (0 == a) return this;
            this.x /= a;
            this.y /= a;
            this.z /= a;
            return this
        },
        cross: function(a) {
            return new p.Vector(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x)
        },
        __class__: p.Vector
    };
    p.splines = {};
    p.splines.Spline = function() {};
    i["com.nick.fairly_oddparents.fowl_play.math.splines.Spline"] = p.splines.Spline;
    p.splines.Spline.__name__ = "com,nick,fairly_oddparents,fowl_play,math,splines,Spline".split(",");
    p.splines.Spline.prototype = {
        __class__: p.splines.Spline
    };
    p.splines.LineSpline = function(a,
        b) {
        p.splines.Spline.call(this);
        this.direction = new p.Vector;
        this.startPoint = a;
        this.endPoint = b;
        this.update()
    };
    i["com.nick.fairly_oddparents.fowl_play.math.splines.LineSpline"] = p.splines.LineSpline;
    p.splines.LineSpline.__name__ = "com,nick,fairly_oddparents,fowl_play,math,splines,LineSpline".split(",");
    p.splines.LineSpline.__super__ = p.splines.Spline;
    p.splines.LineSpline.prototype = w(p.splines.Spline.prototype, {
        update: function() {
            this.direction.x = this.endPoint.x - this.startPoint.x;
            this.direction.y = this.endPoint.y -
                this.startPoint.y;
            this.direction.z = this.endPoint.z - this.startPoint.z
        },
        __class__: p.splines.LineSpline
    });
    p.splines.QuadraticSpline = function(a, b, c) {
        p.splines.Spline.call(this);
        this.startPoint = a;
        this.controlPoint = b;
        this.endPoint = c;
        this.update()
    };
    i["com.nick.fairly_oddparents.fowl_play.math.splines.QuadraticSpline"] = p.splines.QuadraticSpline;
    p.splines.QuadraticSpline.__name__ = "com,nick,fairly_oddparents,fowl_play,math,splines,QuadraticSpline".split(",");
    p.splines.QuadraticSpline.__super__ = p.splines.Spline;
    p.splines.QuadraticSpline.prototype = w(p.splines.Spline.prototype, {
        getPoint: function(a) {
            var b = 2 * a * (1 - a),
                a = a * a;
            return new p.Vector(this.startPoint.x + b * this.cpx + a * this.p1x, this.startPoint.y + b * this.cpy + a * this.p1y, this.startPoint.z + b * this.cpz + a * this.p1z)
        },
        update: function() {
            this.p1x = this.endPoint.x - this.startPoint.x;
            this.p1y = this.endPoint.y - this.startPoint.y;
            this.p1z = this.endPoint.z - this.startPoint.z;
            this.cpx = this.controlPoint.x - this.startPoint.x;
            this.cpy = this.controlPoint.y - this.startPoint.y;
            this.cpz =
                this.controlPoint.z - this.startPoint.z
        },
        __class__: p.splines.QuadraticSpline
    });
    n = {};
    f = void 0;
    R = void 0;
    s = void 0;
    h = void 0;
    aa = void 0;
    q = void 0;
    Q = void 0;
    n.WMEventDispatcher = function() {
        this._signals = new I
    };
    i["com.workinman.events.WMEventDispatcher"] = n.WMEventDispatcher;
    n.WMEventDispatcher.__name__ = ["com", "workinman", "events", "WMEventDispatcher"];
    n.WMEventDispatcher.prototype = {
        dispose: function() {
            for (var a = this._signals.iterator(); a.hasNext();) a.next().dispose();
            this._signals = null
        },
        dispatchEvent: function(a) {
            this._signals.exists(a.getEventId()) &&
                this._signals.get(a.getEventId()).dispatchEvent(a)
        },
        removeEventListener: function(a, b) {
            this._signals.exists(a) && (this._signals.get(a).removeEventListener(b), this._signals.get(a).isEmtpy() && (this._signals.get(a).dispose(), this._signals.remove(a)))
        },
        addEventListener: function(a, b) {
            this._signals.exists(a) || this._signals.set(a, new n._WMEventDispatcher.WMEventTracker);
            this._signals.get(a).addEventListener(b)
        },
        __class__: n.WMEventDispatcher
    };
    k = {
        ScreenManager: function(a) {
            n.WMEventDispatcher.call(this);
            this._container =
                a;
            this._layerScreen = new M;
            this._layerTransition = new M;
            this._container.addChild(this._layerScreen);
            this._container.addChild(this._layerTransition);
            this._isPaused = !1;
            this._screens = [];
            this._screensOpen = [];
            this._screensQueue = [];
            this._transitionType = -1;
            this._flagCloseAllScreensWhenBottomCloses = this._flagHasScreenshot = this._flagOpenScreenAfterTransition = this._flagCloseScreenAfterTransition = this._flagHasTransition = !1;
            this._camera = new h.WorkinCamera(g.ConstantsApp.STAGE_CENTER_X, g.ConstantsApp.STAGE_CENTER_Y)
        }
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.ScreenManager"] = k.ScreenManager;
    k.ScreenManager.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,ScreenManager".split(",");
    k.ScreenManager.__super__ = n.WMEventDispatcher;
    k.ScreenManager.prototype = w(n.WMEventDispatcher.prototype, {
        _transitionPlay: function() {
            this._transition.show();
            this._transition.start()
        },
        _removeTransition: function() {
            this._flagHasTransition && (this._layerTransition.removeChild(this._transition._getEntity()), this._transition._getDispatcher().removeEventListener(n.WMEventScreenOut.EVENT_SCREEN_OUTPUT,
                B(this, this._onEventTransitionOutput)), this._transition.dispose(), this._transition = null, this._flagHasTransition = !1)
        },
        _addTransition: function(a, b) {
            null == b && (b = !0);
            if (this._flagHasTransition) {
                if (!b) return;
                this._removeTransition()
            }
            this._transition = new k.transitions.TransitionBase(a);
            this._transition.hide();
            this._transition._getDispatcher().addEventListener(n.WMEventScreenOut.EVENT_SCREEN_OUTPUT, B(this, this._onEventTransitionOutput));
            this._layerTransition.addChild(this._transition._getEntity());
            this._flagHasTransition = !0
        },
        _updateTransition: function(a) {
            switch (this._transitionType) {
                case g.ConstantsScreen.TRANSITION_SCROLL:
                    this._transitionScreenHeadedOut._getRenderable().x -= 2E3 * a;
                    this._transitionScreenHeadedIn._getRenderable().x -= 2E3 * a;
                    0 >= this._transitionScreenHeadedIn._getRenderable().x && (this._transitionScreenHeadedIn._getRenderable().x = 0, this._flagHasTransition = !1, this._onQueueConditionMet(g.ConstantsScreen.CONDITION_TRANSITION_COMPLETE));
                    break;
                case g.ConstantsScreen.TRANSITION_FADE:
                    this._transition.update(a),
                        this._transition.flagDispose && this._removeTransition()
            }
        },
        _removeScreenDisplay: function(a) {
            this._layerScreen.removeChild(a)
        },
        _addScreenDisplay: function(a) {
            this._layerScreen.addChild(a)
        },
        _dispatchEventChange: function(a, b) {
            this.dispatchEvent(new n.WMEventInterfaceChange(a, b))
        },
        _onQueueConditionMet: function(a, b) {
            null == b && (b = "");
            for (var c = 0; c < this._screensQueue.length;) this._screensQueue[c].validateCondition(a, b) && (this._generateScreen(this._screensQueue[c].screenData), this._screensQueue.splice(c, 1)),
                c++
        },
        dispose: function() {
            for (var a = 0; a < this._screensOpen.length;) this._disposeScreen(this._screensOpen[a].id), a++;
            this._screens = this._screensQueue = null;
            this._removeTransition();
            this._container.removeChild(this._layerScreen);
            this._container.removeChild(this._layerTransition);
            this._layerTransition = this._layerScreen = null;
            n.WMEventDispatcher.prototype.dispose.call(this)
        },
        _getScreenData: function(a) {
            for (var b = this._screens.length - 1; 0 <= b;) {
                if (this._screens[b].id == a) return this._screens[b];
                b--
            }
            f.WorkinCloud.instance.log("[ScreenManager](_getScreenData) ERROR: Screen >" +
                a + "< idoes not exist. getScreenData() returning NULL.");
            return null
        },
        _hasScreenData: function(a) {
            for (var b = this._screens.length - 1; 0 <= b;) {
                if (this._screens[b].id == a) return !0;
                b--
            }
            return !1
        },
        _removeScreenshot: function() {
            this._flagHasScreenshot && (this._layerScreen.removeChild(this._screenshot._getEntity()), this._screenshot.dispose(), this._screenshot = null, this._flagHasScreenshot = !1)
        },
        _addScreenshot: function() {
            f.WorkinCloud.instance.log("[ScreenManager](_addScreenshot) ERROR: Screenshots not supported in HTML5 yet.")
        },
        _onEventTransitionOutput: function(a) {
            a.flowId == g.ConstantsScreen.OUTPUT_OPENED ? (f.WorkinCloud.instance.log("[ScreenManager] Transition Midway..."), this._flagCloseScreenAfterTransition && (this.closeScreen(this._screenIdToCloseAfterTransition, !1), this._flagCloseScreenAfterTransition = !1), this._flagOpenScreenAfterTransition && (this.openScreen(this._screenIdToOpenDuringTransition, !1), this._flagOpenScreenAfterTransition = !1), this._removeScreenshot(), this._onQueueConditionMet(g.ConstantsScreen.CONDITION_TRANSITION_MIDWAY)) :
                a.flowId == g.ConstantsScreen.OUTPUT_CLOSED && (f.WorkinCloud.instance.log("[ScreenManager] Transition Complete."), this._removeScreenshot(), this._onQueueConditionMet(g.ConstantsScreen.CONDITION_TRANSITION_COMPLETE))
        },
        _onEventScreenOutput: function(a) {
            a.flowId == g.ConstantsScreen.OUTPUT_OPENED ? this._dispatchEventChange(g.ConstantsScreen.CHANGE_OPEN_COMPLETE, a.screenId) : a.flowId == g.ConstantsScreen.OUTPUT_CLOSED && (this._dispatchEventChange(g.ConstantsScreen.CHANGE_CLOSE_COMPLETE, a.screenId), this._onQueueConditionMet(g.ConstantsScreen.CONDITION_CLOSED_SPECIFIC,
                a.screenId), this._flagHasTransition && this._transitionType == g.ConstantsScreen.TRANSITION_STAGED && this._transitionPlay())
        },
        _disposeScreen: function(a) {
            for (var b = 0; b < this._screensOpen.length;) {
                if (this._screensOpen[b].id == a) {
                    this._screensOpen[b]._getDispatcher().removeEventListener(n.WMEventScreenOut.EVENT_SCREEN_OUTPUT, B(this, this._onEventScreenOutput));
                    this._removeScreenDisplay(this._screensOpen[b]._getEntity());
                    this._screensOpen[b].dispose();
                    this._screensOpen.splice(b, 1);
                    break
                }
                b++
            }
        },
        _generateScreen: function(a) {
            if (this.isScreenOpen(a.id)) this.getScreen(a.id).reset(),
                this._dispatchEventChange(g.ConstantsScreen.CHANGE_OPEN_BEGIN, a.id);
            else {
                var b = L.createInstance(a.screenClass, [a.id, a.assetClassName, a.data]);
                b.renderPosition(this._camera);
                f.WorkinCloud.instance.log("[ScreenManager](_generateScreen) success");
                if (null == b) f.WorkinCloud.instance.log("[ScreenManager](_generateScreen) ERROR: Screen Class for >" + a.id + "< not found.");
                else {
                    this._screensOpen.push(b);
                    this._addScreenDisplay(b._getEntity());
                    if (this._flagHasTransition) switch (this._transitionScreenHeadedIn = b,
                        this._transitionType) {
                        case g.ConstantsScreen.TRANSITION_SCROLL:
                            b._getRenderable().x = g.ConstantsApp.STAGE_WIDTH
                    }
                    b._getDispatcher().addEventListener(n.WMEventScreenOut.EVENT_SCREEN_OUTPUT, B(this, this._onEventScreenOutput));
                    b.open(!0);
                    this._dispatchEventChange(g.ConstantsScreen.CHANGE_OPEN_BEGIN, a.id)
                }
            }
        },
        _addScreenToQueue: function(a, b, c) {
            null == c && (c = "");
            this.hasQueuedScreen(a.id) || this._screensQueue.push(new k.screens.data.ScreenQueueData(a, b, c))
        },
        removeAllQueuedScreens: function() {
            for (var a = this._screensQueue.length -
                    1; 0 <= a;) this._screensQueue.splice(a, 1), a--
        },
        removeQueuedScreen: function(a) {
            for (var b = this._screensQueue.length - 1; 0 <= b;) {
                if (this._screensQueue[b].screenData.id == a) {
                    this._screensQueue.splice(b, 1);
                    break
                }
                b--
            }
        },
        hasQueuedScreen: function(a) {
            for (var b = this._screensQueue.length - 1; 0 <= b;) {
                if (this._screensQueue[b].screenData.id == a) return !0;
                b--
            }
            return !1
        },
        isScreenOpen: function(a) {
            for (var b = this._screensOpen.length - 1; 0 <= b;) {
                if (this._screensOpen[b].id == a) return !0;
                b--
            }
            return !1
        },
        getScreen: function(a) {
            null == a && (a = "");
            if (0 == this._screensOpen.length) return f.WorkinCloud.instance.log("[ScreenManager](getScreen) ERROR: no screens are open. Unable to getScreen()"), null;
            if ("" == a) return this._screensOpen[this._screensOpen.length - 1];
            for (var b = this._screensOpen.length - 1; 0 <= b;) {
                if (this._screensOpen[b].id == a) return this._screensOpen[b];
                b--
            }
            f.WorkinCloud.instance.log("[ScreenManager](getScreen) ERROR: Screen >" + a + "< is not open or does not exist. getScreen() returning NULL.");
            return null
        },
        update: function(a) {
            if (!this._isPaused) {
                0.15 <
                    a && (a = 0.15);
                this._flagHasTransition && this._updateTransition(a);
                for (this._loop = this._screensOpen.length - 1; 0 <= this._loop;) this._screensOpen[this._loop].update(a), this._screensOpen[this._loop].renderPosition(this._camera), this._screensOpen[this._loop].flagDispose && (this._disposeScreen(this._screensOpen[this._loop].id), 0 == this._screensOpen.length && this._onQueueConditionMet(g.ConstantsScreen.CONDITION_CLOSED_ALL)), this._loop--
            }
        },
        _getHasTransition: function() {
            return this._flagHasTransition
        },
        changeScreenTo: function(a,
            b, c, l) {
            null == l && (l = "");
            null == c && (c = -1);
            null == b && (b = !1);
            f.WorkinCloud.instance.log("[ScreenManager](changeTo) " + a);
            this.removeAllQueuedScreens();
            if (this.isScreenOpen(a)) {
                f.WorkinCloud.instance.log("[ScreenManager](changeTo) Screen is already open.");
                for (b = this._screensOpen.length - 1; 0 <= b;) this._screensOpen[b].id != a && this.closeScreen(this._screensOpen[b].id, !1, b), b--;
                this._dispatchEventChange(g.ConstantsScreen.CHANGE_OPEN_BEGIN, a);
                this._dispatchEventChange(g.ConstantsScreen.CHANGE_OPEN_COMPLETE, a)
            } else if (this._flagOpenScreenAfterTransition =
                this._flagCloseScreenAfterTransition = !1, 0 < this._screensOpen.length) {
                f.WorkinCloud.instance.log("[ScreenManager](changeFrom) " + this._screensOpen[0].id);
                var d = g.ConstantsScreen.CONDITION_CLOSED_ALL;
                if (-1 < c) switch (this._transitionType = c, this._transitionType) {
                    case g.ConstantsScreen.TRANSITION_SCREENSHOT:
                        this._flagOpenScreenAfterTransition = !0;
                        b = !1;
                        this._addScreenshot();
                        this._transitionPlay();
                        break;
                    case g.ConstantsScreen.TRANSITION_SCROLL:
                        this._flagHasTransition = !0;
                        this._flagOpenScreenAfterTransition = !1;
                        this._flagCloseScreenAfterTransition = !0;
                        b = !1;
                        this._transitionScreenHeadedOut = this._screensOpen[0];
                        d = g.ConstantsScreen.CONDITION_IMMEDIATE;
                        break;
                    case g.ConstantsScreen.TRANSITION_FADE:
                        this._addTransition(l, this._flagHasTransition ? this._transition._getIsOutro() ? !0 : !1 : !1), this._flagCloseScreenAfterTransition = !0, b = !1, this._transitionPlay(), d = g.ConstantsScreen.CONDITION_TRANSITION_MIDWAY
                }
                if (0 < this._screensOpen.length && (this._flagCloseScreenAfterTransition ? this._screenIdToCloseAfterTransition = this._screensOpen[0].id :
                        this.closeScreen(this._screensOpen[0].id, b, 0), 1 < this._screensOpen.length))
                    for (b = 1; b < this._screensOpen.length;) this.closeScreen(this._screensOpen[b].id, !1, this._screensOpen.length), b++;
                this._flagOpenScreenAfterTransition ? (f.WorkinCloud.instance.log("[ScreenManager] Store Screen to open at transition midway: " + a), this._screenIdToOpenDuringTransition = a) : this.openScreen(a, !0, d)
            } else this.openScreen(a, !1)
        },
        _moveScreenToTop: function(a) {
            var b = this.getScreen(a);
            if (null == b) f.WorkinCloud.instance.log("[ScreenManager](_moveScreenToTop) ERROR: Screen >" +
                a + "< is not open or does not exist. Cancelling move.");
            else {
                b.isClosing() && b.open(!1);
                for (var c = this._screensOpen.length - 1; 0 <= c && !(this._screensOpen[c].id == a);) c--;
                this._screensOpen.splice(c, 1);
                b.reset();
                this._removeScreenDisplay(b._getEntity());
                this._addScreenDisplay(b._getEntity());
                this._screensOpen.push(b)
            }
        },
        openScreen: function(a, b, c, l) {
            null == l && (l = "");
            null == c && (c = 0);
            null == b && (b = !0);
            f.WorkinCloud.instance.log("[ScreenManager](openScreen) " + a);
            if (this._hasScreenData(a))
                if (this.isScreenOpen(a)) this._moveScreenToTop(a);
                else {
                    if (c != g.ConstantsScreen.CONDITION_IMMEDIATE && b) {
                        if (0 < this._screensOpen.length) {
                            this._addScreenToQueue(this._getScreenData(a), c, l);
                            return
                        }
                        if ((c == g.ConstantsScreen.CONDITION_TRANSITION_COMPLETE || c == g.ConstantsScreen.CONDITION_TRANSITION_MIDWAY) && this._flagHasTransition) {
                            this._addScreenToQueue(this._getScreenData(a), c, l);
                            return
                        }
                    }
                    this._generateScreen(this._getScreenData(a))
                }
            else f.WorkinCloud.instance.log("[ScreenManager](closeScreen) ERROR: Screen >" + a + "< does not exist. Cancelling open().")
        },
        closeScreen: function(a,
            b, c) {
            null == c && (c = -1);
            null == b && (b = !0);
            null == a && (a = "");
            if (0 == this._screensOpen.length) this.removeQueuedScreen(a);
            else {
                if ("" == a) c = this._screensOpen[this._screensOpen.length - 1];
                else if (0 <= c && c < this._screensOpen.length) c = this._screensOpen[c];
                else if (c = this.getScreen(a), null == c) {
                    this.removeQueuedScreen(a);
                    return
                }
                c.close(b);
                this._dispatchEventChange(g.ConstantsScreen.CHANGE_CLOSE_BEGIN, a)
            }
        },
        handleInput: function(a) {
            for (var b = !0, c = this._screensOpen.length - 1; 0 <= c;) this._screensOpen[c].handleInput(a) || (b = !1),
                c--;
            return b
        },
        addScreen: function(a, b, c, l, d) {
            null == l && (l = 0);
            null == c && (c = "");
            this._screens.push(new k.screens.data.ScreenData(a, b, c, l, d))
        },
        __class__: k.ScreenManager
    });
    q = {};
    q.Element = function(a) {
        this._entity = new M;
        this._display = new j.Sprite;
        this._entity.add(this._display);
        this._textureEntity = new M;
        this._entity.addChild(this._textureEntity);
        this._texture = new j.Sprite;
        this._textureEntity.add(this._texture);
        this._dispatcher = new n.WMEventDispatcher;
        this._pos = new h.WorkinPoint;
        this._velocity = new h.WorkinPoint;
        this._renderOffset = new h.WorkinPoint;
        this._renderOrigin = new h.WorkinPoint;
        this._render = new q.Renderable;
        this._layer = this._assetId = "";
        this._doDelete = !1;
        a.asset && (this._assetId = a.asset, this.setTexture(this._assetId));
        a.layer && (this._layer = a.layer);
        a.x && (this._pos.x = a.x);
        a.y && (this._pos.y = a.y);
        a.rot && (this._render.rotation = a.rot);
        a.origin && this.setOrigin(a.origin);
        this._addEventListeners()
    };
    i["com.workinman.display.Element"] = q.Element;
    q.Element.__name__ = ["com", "workinman", "display", "Element"];
    q.Element.prototype = {
        _removeEventListeners: function() {},
        _addEventListeners: function() {},
        setOrigin: function(a) {
            this._renderOrigin.toPoint(a);
            this._texture.x.set__(-(this._renderOrigin.x * this._render.width));
            this._texture.y.set__(-(this._renderOrigin.y * this._render.height))
        },
        applyRenderable: function() {
            this._display.x.set__(this._render.x);
            this._display.y.set__(this._render.y);
            this._display.scaleX.set__(this._render.scaleX);
            this._display.scaleY.set__(this._render.scaleY);
            this._display.rotation.set__(this._render.rotation);
            this._display.alpha.set__(this._render.alpha);
            this._display.set_visible(this._render.visible)
        },
        renderPosition: function(a) {
            this._render.x = this._pos.x - a._getPos().x + a._getScreenCenterX() + this._renderOffset.x;
            this._render.y = this._pos.y - a._getPos().y + a._getScreenCenterY() + this._renderOffset.y;
            this.applyRenderable()
        },
        updatePositionFromVelocity: function(a) {
            this._pos.x += this._velocity.x * a;
            this._pos.y += this._velocity.y * a
        },
        update: function() {},
        setTexture: function(a) {
            !1 == f.WorkinCloud.instance.getAssets().hasAsset(a) ?
                f.WorkinCloud.instance.log("[Element](setTexture) No asset named " + a + " exists!") : (this._textureEntity.remove(this._texture), this._texture.dispose(), this._texture = new j.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture(a)), this._render.width = this._texture.getNaturalWidth(), this._render.height = this._texture.getNaturalHeight(), this._texture.x.set__(-(this._renderOrigin.x * this._render.width)), this._texture.y.set__(-(this._renderOrigin.y * this._render.height)), this._textureEntity.add(this._texture))
        },
        _setAssetId: function(a) {
            return this._assetId = a
        },
        _getAssetId: function() {
            return this._assetId
        },
        _setLayer: function(a) {
            return this._layer = a
        },
        _getLayer: function() {
            return this._layer
        },
        _getDispatcher: function() {
            return this._dispatcher
        },
        _getEntity: function() {
            return this._entity
        },
        _getRenderable: function() {
            return this._render
        },
        _setDoDelete: function(a) {
            return this._doDelete = a
        },
        _getDoDelete: function() {
            return this._doDelete
        },
        _setVel: function(a) {
            return this._velocity = a
        },
        _getVel: function() {
            return this._velocity
        },
        _setPos: function(a) {
            this._pos.toPoint(a);
            return this._pos
        },
        _getPos: function() {
            return this._pos
        },
        dispose: function() {
            this._removeEventListeners();
            this._dispatcher.dispose();
            this._dispatcher = null;
            this._entity.dispose();
            this._renderOrigin = this._renderOffset = this._render = this._textureEntity = this._display = this._texture = this._velocity = this._pos = this._entity = null
        },
        __class__: q.Element
    };
    k.buttons = {};
    k.buttons.ButtonBase = function(a, b, c, l, d, e, f) {
        null == f && (f = "");
        null == e && (e = "");
        null == d && (d = "");
        null == l && (l = "");
        this._DEBUG_SHOW_HITBOX = !1;
        null == c && (c = new h.WorkinPoint);
        q.Element.call(this, {
            x: a,
            y: b,
            asset: this._assetUp,
            origin: c
        });
        this._assetUp = "" == l ? this._getDefaultAssetUp() : l;
        this._assetOver = "" == d ? this._getDefaultAssetOver() : d;
        this._assetDown = "" == e ? this._getDefaultAssetDown() : e;
        this._assetDisabled = "" == f ? this._getDefaultAssetDisabled() : f;
        this._flagDragged = this._flagClickTransition = this._flagDown = !1;
        this.enable();
        this._buildHitBox()
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.buttons.ButtonBase"] = k.buttons.ButtonBase;
    k.buttons.ButtonBase.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,buttons,ButtonBase".split(",");
    k.buttons.ButtonBase.__super__ = q.Element;
    k.buttons.ButtonBase.prototype = w(q.Element.prototype, {
        _renderDisabled: function() {
            "" != this._assetDisabled && this.setTexture(this._assetDisabled)
        },
        _renderReturnUp: function() {
            this._flagClickTransition || (h.tween.WorkinTweener._getInstance().tween(this._render, 0.15, {
                scaleX: 1,
                scaleY: 1
            }).ease(h.tween.PennerManager.EASE_QUAD_OUT), this._renderUp())
        },
        _renderDown: function() {
            this._flagClickTransition ||
                (h.tween.WorkinTweener._getInstance().tween(this._render, 0.15, {
                    scaleX: 1.04,
                    scaleY: 1.04
                }).ease(h.tween.PennerManager.EASE_QUAD_OUT), "" != this._assetDown && this.setTexture(this._assetDown))
        },
        _renderUp: function() {
            "" != this._assetUp && this.setTexture(this._assetUp)
        },
        update: function(a) {
            q.Element.prototype.update.call(this, a);
            this._flagDown && !1 == f.WorkinCloud.instance.getInput().getInput(g.ConstantsApp.INPUT_CLICK) && (this._upConnection.dispose(), this._renderReturnUp())
        },
        _onCancelDrag: function() {
            this._flagDragged = !1;
            this._dispatch(k.buttons.ButtonBase.CANCEL_DRAG)
        },
        _onUp: function() {
            this._flagDown && (this._upConnection.dispose(), this._upConnection = null, this._flagDown = !1, this._renderReturnUp(), this._click(), this._flagDragged && this._onCancelDrag(), this._dispatch(k.buttons.ButtonBase.UP))
        },
        _onDown: function() {
            this._flagDown = !0;
            this._renderDown();
            this._upConnection = this._hitBox.get_pointerUp().connect(B(this, this._onUpEvent));
            this._dispatch(k.buttons.ButtonBase.DOWN)
        },
        _onClickTransitionComplete: function() {
            this._flagClickTransition = !1;
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_INPUT_LOCK, !1);
            this._dispatch(k.buttons.ButtonBase.CLICK);
            "" != this._getClickFlow() && f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventFlow(this._getClickFlow()));
            "" != this._getClickEvent() && f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(this._getClickEvent()));
            h.tween.WorkinTweener._getInstance().stop(this._render);
            this._render.scaleX = 1;
            this._render.scaleY = 1
        },
        _click: function() {
            !f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_ORIENTATION_ALERT) &&
                !f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_INPUT_LOCK) && (this._flagClickTransition = !0, h.tween.WorkinTweener._getInstance().tween(this._render, 0.25, {
                    scaleX: 0.96,
                    scaleY: 0.96
                }).ease(h.tween.PennerManager.EASE_QUAD_OUT), h.tween.WorkinTweener._getInstance().tween(this._render, 0.25, {
                    scaleX: 0.99,
                    scaleY: 0.99
                }, !1).ease(h.tween.PennerManager.EASE_ELASTIC_OUT).delay(0.25).onComplete(B(this, this._onClickTransitionComplete)), f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_INPUT_LOCK, !0))
        },
        _dispatch: function(a) {
            this._GET_DO_DISPATCH() &&
                this._dispatcher.dispatchEvent(new n.WMEvent(a))
        },
        _onUpEvent: function(a) {
            this._onUp(a.viewX, a.viewY)
        },
        _onDownEvent: function(a) {
            this._onDown(a.viewX, a.viewY)
        },
        _getClickFlow: function() {
            return ""
        },
        _getClickEvent: function() {
            return ""
        },
        _GET_DISABLE_FRAME: function() {
            return 1
        },
        _GET_CUSTOM_HIT_BOX: function() {
            return new J.Point(0, 0)
        },
        _GET_DO_DISPATCH: function() {
            return !0
        },
        _getDefaultAssetDisabled: function() {
            return ""
        },
        _getDefaultAssetDown: function() {
            return ""
        },
        _getDefaultAssetOver: function() {
            return ""
        },
        _getDefaultAssetUp: function() {
            return ""
        },
        dispose: function() {
            this.disable();
            this._downConnection.dispose();
            this._downConnection = null;
            this._flagDown && (this._upConnection.dispose(), this._upConnection = null);
            this._hitBox.dispose();
            q.Element.prototype.dispose.call(this)
        },
        _buildHitBox: function() {
            this._hitBox = this._DEBUG_SHOW_HITBOX ? new j.FillSprite(16711680, this._render.width | 0, this._render.height | 0) : new j.ImageSprite(E.createTexture(this._render.width | 0, this._render.height | 0));
            var a = new M;
            a.add(this._hitBox);
            this._textureEntity.addChild(a);
            this._downConnection =
                this._hitBox.get_pointerDown().connect(B(this, this._onDownEvent))
        },
        disable: function() {
            this._flagEnabled = !1;
            this._renderDisabled()
        },
        enable: function() {
            this._flagEnabled = !0;
            this._renderUp()
        },
        __class__: k.buttons.ButtonBase
    });
    q.Display = function(a, b, c, l) {
        null == c && (c = "");
        q.Element.call(this, {
            x: a,
            y: b,
            asset: c,
            origin: l
        });
        this._addEventListeners()
    };
    i["com.workinman.display.Display"] = q.Display;
    q.Display.__name__ = ["com", "workinman", "display", "Display"];
    q.Display.__super__ = q.Element;
    q.Display.prototype = w(q.Element.prototype, {
        dispose: function() {
            q.Element.prototype.dispose.call(this);
            this._removeEventListeners()
        },
        _updateValue: function() {
            return ""
        },
        _refresh: function() {},
        _onUpdateDisplay: function(a) {
            a._getData().valueID == this._updateValue() && this._refresh()
        },
        _removeEventListeners: function() {
            q.Element.prototype._removeEventListeners.call(this);
            f.WorkinCloud.instance.getDispatcher().removeEventListener(q.Display.EVENT_UPDATE_DISPLAY, B(this, this._onUpdateDisplay))
        },
        _addEventListeners: function() {
            q.Element.prototype._addEventListeners.call(this);
            f.WorkinCloud.instance.getDispatcher().addEventListener(q.Display.EVENT_UPDATE_DISPLAY, B(this, this._onUpdateDisplay))
        },
        __class__: q.Display
    });
    k.displays = {};
    k.displays.DisplayDucks = function(a, b) {
        q.Display.call(this, a, b);
        var c = f.WorkinCloud.instance.getInt(this._updateValue());
        this._textNum = new j.TextSprite(f.WorkinCloud.instance.getAssets().getFont("Basic"), "" + c);
        this._textNum.x.set__(a);
        this._textNum.y.set__(b);
        this._display = this._textNum;
        this._entity.add(this._display)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.displays.DisplayDucks"] =
        k.displays.DisplayDucks;
    k.displays.DisplayDucks.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,displays,DisplayDucks".split(",");
    k.displays.DisplayDucks.__super__ = q.Display;
    k.displays.DisplayDucks.prototype = w(q.Display.prototype, {
        _updateValue: function() {
            return g.ConstantsApp.INT_DUCKS_LEFT
        },
        _refresh: function() {
            this._textNum.set_text("" + f.WorkinCloud.instance.getInt(this._updateValue()))
        },
        __class__: k.displays.DisplayDucks
    });
    k.displays.DisplayMeter = function(a, b, c, l) {
        null == c && (c = "");
        q.Display.call(this,
            a, b, c, l)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.displays.DisplayMeter"] = k.displays.DisplayMeter;
    k.displays.DisplayMeter.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,displays,DisplayMeter".split(",");
    k.displays.DisplayMeter.__super__ = q.Display;
    k.displays.DisplayMeter.prototype = w(q.Display.prototype, {
        __class__: k.displays.DisplayMeter
    });
    k.displays.DisplayMeterPower = function(a, b, c, l) {
        null == c && (c = "");
        this._i = 25;
        q.Display.call(this, a, b, c, l);
        this._container = new M;
        this._displayI = 0;
        this._maskingBar =
            new j.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture("ui/gameplay_hud/powerbar_bar"));
        this._maskingBar.x.set__(41);
        this._maskingBar.y.set__(195);
        this._maskingBar.scaleY.set__(0);
        this._container.addChild((new M).add(this._maskingBar));
        this._entity.addChild(this._container)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.displays.DisplayMeterPower"] = k.displays.DisplayMeterPower;
    k.displays.DisplayMeterPower.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,displays,DisplayMeterPower".split(",");
    k.displays.DisplayMeterPower.__super__ = q.Display;
    k.displays.DisplayMeterPower.prototype = w(q.Display.prototype, {
        removeLine: function() {
            if (0 == this._i) this._maskingBar.scaleY.set__(0);
            else {
                var a = this._maskingBar.scaleY;
                a.set__(a._value + -this._displayI)
            }
        },
        addLine: function() {
            this._maskingBar.scaleY.set__(this._displayI)
        },
        _updateValue: function() {
            return g.ConstantsApp.FLOAT_POWER_METER
        },
        update: function(a) {
            q.Display.prototype.update.call(this, a);
            this._displayI += (this._i - this._displayI) * 10 * a;
            0 > this._displayI ?
                -1 < this._maskingBar.scaleY._value && this.addLine() : 0 > this._maskingBar.scaleY._value && this.removeLine()
        },
        _refresh: function() {
            this._i = f.WorkinCloud.instance.getFloat(this._updateValue())
        },
        __class__: k.displays.DisplayMeterPower
    });
    k.displays.DisplayScore = function(a, b) {
        q.Display.call(this, a, b);
        var c = f.WorkinCloud.instance.getInt(this._updateValue());
        this._textNum = new j.TextSprite(f.WorkinCloud.instance.getAssets().getFont("Basic"), "" + c);
        this._textNum.x.set__(a);
        this._textNum.y.set__(b);
        this._display = this._textNum;
        this._entity.add(this._display)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.displays.DisplayScore"] = k.displays.DisplayScore;
    k.displays.DisplayScore.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,displays,DisplayScore".split(",");
    k.displays.DisplayScore.__super__ = q.Display;
    k.displays.DisplayScore.prototype = w(q.Display.prototype, {
        _updateValue: function() {
            return g.ConstantsApp.INT_SCORE
        },
        _refresh: function() {
            this._textNum.set_text("" + f.WorkinCloud.instance.getInt(this._updateValue()))
        },
        __class__: k.displays.DisplayScore
    });
    k.screens = {};
    k.screens.ScreenBase = function(a, b) {
        this._STATE_OPENED = "opened";
        this._STATE_OUT = "out";
        this._STATE_IN = "in";
        this.id = a;
        q.Element.call(this, {
            asset: b
        });
        this._clickWall = new M;
        var c = new j.FillSprite(16711680, g.ConstantsApp.STAGE_WIDTH, g.ConstantsApp.STAGE_HEIGHT);
        c.alpha.set__(0);
        this._clickWall.add(c);
        this._entity.addChild(this._clickWall);
        this._entity.addChild(this._textureEntity);
        this._addEventListeners();
        this._elements = [];
        this._buildButtons();
        this._flagStateAnimationComplete = this._flagStateCompleteTemp =
            this.flagDispose = !1;
        this._states = [];
        this._generateStates();
        this._stateIndex = this._states.length + 2;
        this._setFirstState()
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenBase"] = k.screens.ScreenBase;
    k.screens.ScreenBase.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenBase".split(",");
    k.screens.ScreenBase.__super__ = q.Element;
    k.screens.ScreenBase.prototype = w(q.Element.prototype, {
        _onStateComplete: function() {
            this._flagStateCompleteTemp = !1;
            "" != this._states[this._stateIndex].outFunc &&
                f.WorkinCloud.instance.log("[ScreenBase](_onStateComplete) Out Func not supported in HTML5 yet");
            switch (this._states[this._stateIndex].actionOnComplete) {
                case k.screens.data.ScreenStateData.ACTION_OPENED:
                    this._setOpenedState();
                    this._dispatcher.dispatchEvent(new n.WMEventScreenOut(g.ConstantsScreen.OUTPUT_OPENED, this.id));
                    break;
                case k.screens.data.ScreenStateData.ACTION_CLOSED:
                    this.setFlagDispose();
                    this._dispatcher.dispatchEvent(new n.WMEventScreenOut(g.ConstantsScreen.OUTPUT_CLOSED, this.id));
                    break;
                case k.screens.data.ScreenStateData.ACTION_NEW_STATE:
                    this._setState(this._states[this._stateIndex].actionData);
                    break;
                case k.screens.data.ScreenStateData.ACTION_EVENT:
                    this._dispatcher.dispatchEvent(new n.WMEvent(this._states[this._stateIndex].actionData));
                    break;
                case k.screens.data.ScreenStateData.ACTION_FLOW:
                    this._doFlowEvent(this._states[this._stateIndex].actionData)
            }
        },
        _findStateIndex: function(a) {
            for (var b = this._states.length - 1; 0 <= b;) {
                if (this._states[b].id == a) return b;
                b--
            }
            return -1
        },
        getState: function() {
            return this._states[this._stateIndex].id
        },
        _setState: function(a, b) {
            null == b && (b = !1);
            var c = this._findStateIndex(a);
            if (0 > c) f.WorkinCloud.instance.log("[ScreenBase](_setState) ERROR : State >" + a + "< not found."), f.WorkinCloud.instance.log("[ScreenBase](_setState) cancelling setState().");
            else if (b || c != this._stateIndex) this._flagStateAnimationComplete = this._flagStateCompleteTemp = !1, this._stateIndex = c
        },
        _addState: function(a, b, c, l, d, e) {
            null == e && (e = "");
            null == d && (d = "");
            null == l && (l = "");
            null == c && (c = 0);
            this._states.push(new k.screens.data.ScreenStateData(a,
                b, c, l, d, e))
        },
        isClosing: function() {
            return this.getState() == this._STATE_OUT
        },
        close: function() {
            this.setFlagDispose();
            this._dispatcher.dispatchEvent(new n.WMEventScreenOut(g.ConstantsScreen.OUTPUT_CLOSED, this.id))
        },
        open: function() {
            this._setOpenedState();
            this._dispatcher.dispatchEvent(new n.WMEventScreenOut(g.ConstantsScreen.OUTPUT_OPENED, this.id))
        },
        dispose: function() {
            for (var a = 0, b = this._elements; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this._elements = null;
            this._removeEventListeners();
            this._states = null;
            q.Element.prototype.dispose.call(this)
        },
        reset: function() {
            this._setFirstState()
        },
        handleInput: function(a) {
            var b = !0;
            switch (a.input) {
                case g.ConstantsApp.INPUT_CLICK:
                    switch (a.phase) {
                        case 1:
                            this._onInputDown(a.x, a.y) || (b = !1);
                            break;
                        case 2:
                            this._onInputMove(a.x, a.y) || (b = !1);
                            break;
                        case 0:
                            this._onInputUp(a.x, a.y) || (b = !1)
                    }
                    break;
                default:
                    this._onInput(a) || (b = !1)
            }
            return b
        },
        renderPosition: function(a) {
            q.Element.prototype.renderPosition.call(this, a);
            for (var b = 0, c = this._elements; b < c.length;) {
                var l = c[b];
                ++b;
                l.renderPosition(a)
            }
        },
        update: function(a) {
            q.Element.prototype.update.call(this, a);
            for (var b = 0, c = this._elements; b < c.length;) {
                var l = c[b];
                ++b;
                l.update(a)
            }
            this._flagStateCompleteTemp && this._onStateComplete()
        },
        _doFlowEvent: function(a) {
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventFlow(a))
        },
        _addElement: function(a) {
            this._elements.push(a);
            this._entity.addChild(a._getEntity());
            return a
        },
        _buildButtons: function() {},
        _onInput: function() {
            return !0
        },
        _onInputMove: function() {
            return !0
        },
        _onInputUp: function() {
            return !0
        },
        _onInputDown: function() {
            return !0
        },
        _generateStates: function() {
            this._addState(this._STATE_IN, "in", k.screens.data.ScreenStateData.ACTION_OPENED);
            this._addState(this._STATE_OUT, "out", k.screens.data.ScreenStateData.ACTION_CLOSED);
            this._addState(this._STATE_OPENED, "open")
        },
        _setOpenedState: function() {
            this._setState(this._STATE_OPENED)
        },
        _setFirstState: function() {
            this._setState(this._STATE_IN)
        },
        setFlagDispose: function() {
            this.flagDispose = !0
        },
        __class__: k.screens.ScreenBase
    });
    k.screens.ScreenEndGame = function(a,
        b, c) {
        null == b && (b = "");
        k.screens.ScreenBase.call(this, a, b, c);
        this._setPos(new h.WorkinPoint(480, 280));
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        this._getRenderable().scaleX = 0;
        this._getRenderable().scaleY = 0;
        h.tween.WorkinTweener._getInstance().tween(this._getRenderable(), 0.2, {
            scaleX: 1,
            scaleY: 1
        }).ease(h.tween.PennerManager.EASE_QUAD);
        this._score = new k.displays.DisplayScore(170, -105);
        this._score._render.scaleX *= 0.8;
        this._score._render.scaleY *= 0.8;
        this._addElement(this._score);
        this._fairies = "ui/menu/ScreenEndGold" ==
            this._getAssetId() || "ui/menu/ScreenEndSilver" == this._getAssetId() || "ui/menu/ScreenEndBronze" == this._getAssetId() ? this._addElement(new q.Element({
                asset: "EndFairiesHappy",
                x: -5,
                y: -5
            })) : this._addElement(new q.Element({
                asset: "EndFairiesSad",
                x: -5,
                y: -5
            }));
        this._fairies._getRenderable().scaleX *= 0.7;
        this._fairies._getRenderable().scaleY *= 0.7;
        this._addElement(new q.Element({
            x: 0,
            y: 230,
            asset: "ui/splash/ButtonTapPlay"
        }));
        this._sinDisplay = Math.random() * Math.PI
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenEndGame"] =
        k.screens.ScreenEndGame;
    k.screens.ScreenEndGame.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenEndGame".split(",");
    k.screens.ScreenEndGame.__super__ = k.screens.ScreenBase;
    k.screens.ScreenEndGame.prototype = w(k.screens.ScreenBase.prototype, {
        renderPosition: function(a) {
            k.screens.ScreenBase.prototype.renderPosition.call(this, a);
            this._fairies._getPos().y += 0.3 * Math.sin(this._sinDisplay)
        },
        update: function(a) {
            k.screens.ScreenBase.prototype.update.call(this, a);
            this._sinDisplay += 2 * a;
            this._fairies.update(a)
        },
        _onInputDown: function() {
            f.WorkinCloud.instance.log("[Splash] State: " + this.getState());
            if (this.getState() != this._STATE_OPENED) return !1;
            this._doFlowEvent(g.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN);
            return !1
        },
        __class__: k.screens.ScreenEndGame
    });
    k.screens.ScreenGameplayHUD = function(a, b, c) {
        null == b && (b = "");
        k.screens.ScreenBase.call(this, a, b, c);
        this._addElement(new k.buttons.ButtonBase(950, 4, new h.WorkinPoint(1, 0), "ui/gameplay_hud/ButtonPause", "ui/gameplay_hud/ButtonPause", "ui/gameplay_hud/ButtonPause"))._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK,
            B(this, this._onEventPauseClick));
        this._meterBg = G.__cast(this._addElement(new k.displays.DisplayMeter(25, 280, "ui/gameplay_hud/powerbar_bg")), k.displays.DisplayMeter);
        this._meter = G.__cast(this._addElement(new k.displays.DisplayMeterPower(25, 280, "")), k.displays.DisplayMeterPower);
        this._meterBg._getRenderable().alpha = 0;
        this._meter._getRenderable().alpha = 0;
        this._score = G.__cast(this._addElement(new k.displays.DisplayScore(410, 14)), k.displays.DisplayScore);
        this._score._getRenderable().scaleX *= 0.4;
        this._score._getRenderable().scaleY *=
            0.4;
        this._ducks = G.__cast(this._addElement(new k.displays.DisplayDucks(153, 14)), k.displays.DisplayDucks);
        this._ducks._getRenderable().scaleX *= 0.4;
        this._ducks._getRenderable().scaleY *= 0.4;
        this._help = G.__cast(this._addElement(new k.displays.DisplayMeter(300, 77, "ui/gameplay_hud/HUDHelp1")), k.displays.DisplayMeter);
        this._sinDisplay = Math.random() * Math.PI
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenGameplayHUD"] = k.screens.ScreenGameplayHUD;
    k.screens.ScreenGameplayHUD.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenGameplayHUD".split(",");
    k.screens.ScreenGameplayHUD.__super__ = k.screens.ScreenBase;
    k.screens.ScreenGameplayHUD.prototype = w(k.screens.ScreenBase.prototype, {
        renderPosition: function(a) {
            k.screens.ScreenBase.prototype.renderPosition.call(this, a);
            this._help._getPos().y += 0.3 * Math.sin(this._sinDisplay)
        },
        update: function(a) {
            k.screens.ScreenBase.prototype.update.call(this, a);
            this._sinDisplay += 2 * a;
            !0 == f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_METER) ? 1 > this._meter._getRenderable().alpha ? (this._meterBg._getRenderable().alpha +=
                0.1, this._meter._getRenderable().alpha += 0.1) : (this._meterBg._getRenderable().alpha = 1, this._meter._getRenderable().alpha = 1) : 0 < this._meter._getRenderable().alpha ? (this._meterBg._getRenderable().alpha -= 0.1, this._meter._getRenderable().alpha -= 0.1) : (this._meterBg._getRenderable().alpha = 0, this._meter._getRenderable().alpha = 0);
            !0 == f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_MESSAGE_1) ? this._help._setAssetId("ui/gameplay_hud/HUDHelp2") : !0 == f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_MESSAGE_2) ?
                this._help._setAssetId("ui/gameplay_hud/HUDHelp3") : this._help._setAssetId("ui/gameplay_hud/HUDHelp1");
            this._help.setTexture(this._help._getAssetId());
            this._meter.update(a);
            this._help.update(a)
        },
        _onEventPauseClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_MENU)
        },
        __class__: k.screens.ScreenGameplayHUD
    });
    k.screens.ScreenGameplayMenu = function(a, b, c) {
        null == b && (b = "");
        this._soundIsMuted = !1;
        k.screens.ScreenBase.call(this, a, b, c);
        this._setPos(new h.WorkinPoint(480, 280));
        this.setOrigin(new h.WorkinPoint(0.5,
            0.5));
        this._getRenderable().scaleX = 0;
        this._getRenderable().scaleY = 0;
        h.tween.WorkinTweener._getInstance().tween(this._getRenderable(), 0.5, {
            scaleX: 1,
            scaleY: 1
        }).ease(h.tween.PennerManager.EASE_ELASTIC);
        this._addElement(new k.buttons.ButtonBase(-30, -20, new h.WorkinPoint(0.5, 0), "ui/menu/ButtonHelp", "ui/menu/ButtonHelp", "ui/menu/ButtonHelp"))._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onEventHelpClick));
        this._addElement(new k.buttons.ButtonBase(-80, -20, new h.WorkinPoint(0.5,
            0), "ui/menu/ButtonPlay", "ui/menu/ButtonPlay", "ui/menu/ButtonPlay"))._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onEventResumeClick));
        this._buttonSoundOn = new k.buttons.ButtonBase(45, -20, new h.WorkinPoint(1, 0), "ui/menu/ButtonSoundOn", "ui/menu/ButtonSoundOn", "ui/menu/ButtonSoundOn");
        this._buttonSoundOn._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onEventSoundToggleClick));
        this._buttonSoundOff = new k.buttons.ButtonBase(45, -20, new h.WorkinPoint(1,
            0), "ui/menu/ButtonSoundOff", "ui/menu/ButtonSoundOff", "ui/menu/ButtonSoundOff");
        this._buttonSoundOff._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onEventSoundToggleClick));
        this._soundIsMuted ? this._addElement(this._buttonSoundOff) : this._addElement(this._buttonSoundOn);
        this._addElement(new k.buttons.ButtonBase(70, -20, new h.WorkinPoint(0.5, 0), "ui/menu/ButtonQuit", "ui/menu/ButtonQuit", "ui/menu/ButtonQuit"))._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this,
            this._onEventQuitClick))
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenGameplayMenu"] = k.screens.ScreenGameplayMenu;
    k.screens.ScreenGameplayMenu.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenGameplayMenu".split(",");
    k.screens.ScreenGameplayMenu.__super__ = k.screens.ScreenBase;
    k.screens.ScreenGameplayMenu.prototype = w(k.screens.ScreenBase.prototype, {
        _removeEventListeners: function() {
            k.screens.ScreenBase.prototype._removeEventListeners.call(this)
        },
        _addEventListeners: function() {
            k.screens.ScreenBase.prototype._addEventListeners.call(this)
        },
        _onEventQuitClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT)
        },
        _onEventResumeClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE)
        },
        _onEventSoundToggleClick: function() {
            !1 == this._soundIsMuted ? (this._soundIsMuted = !0, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted), this._entity.removeChild(this._buttonSoundOn._getEntity()), this._addElement(this._buttonSoundOff)) : (this._soundIsMuted = !1, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted),
                this._entity.removeChild(this._buttonSoundOff._getEntity()), this._addElement(this._buttonSoundOn))
        },
        _onEventHelpClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP)
        },
        __class__: k.screens.ScreenGameplayMenu
    });
    k.screens.ScreenGeneric = function() {};
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenGeneric"] = k.screens.ScreenGeneric;
    k.screens.ScreenGeneric.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenGeneric".split(",");
    k.screens.ScreenGeneric.__super__ =
        k.screens.ScreenBase;
    k.screens.ScreenGeneric.prototype = w(k.screens.ScreenBase.prototype, {
        _onInputMove: function() {
            return !1
        },
        _onInputUp: function() {
            return !1
        },
        _onInputDown: function() {
            return !1
        },
        __class__: k.screens.ScreenGeneric
    });
    k.screens.ScreenHelp = function(a, b, c) {
        null == b && (b = "");
        k.screens.ScreenBase.call(this, a, b, c);
        this._setPos(new h.WorkinPoint(480, 280));
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        this._getRenderable().scaleX = 0;
        this._getRenderable().scaleY = 0;
        h.tween.WorkinTweener._getInstance().tween(this._getRenderable(),
            0.2, {
                scaleX: 1,
                scaleY: 1
            }).ease(h.tween.PennerManager.EASE_QUAD)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenHelp"] = k.screens.ScreenHelp;
    k.screens.ScreenHelp.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenHelp".split(",");
    k.screens.ScreenHelp.__super__ = k.screens.ScreenBase;
    k.screens.ScreenHelp.prototype = w(k.screens.ScreenBase.prototype, {
        _onInputDown: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_HELP_CLOSE);
            return !0
        },
        __class__: k.screens.ScreenHelp
    });
    k.screens.ScreenLoading =
        function(a, b, c) {
            null == b && (b = "");
            k.screens.ScreenBase.call(this, a, b, c);
            this._timerSpin = 0.25;
            this._loadSpinner = this._addElement(new q.Element({
                x: g.ConstantsApp.STAGE_CENTER_X,
                y: g.ConstantsApp.STAGE_CENTER_Y + 175,
                origin: new h.WorkinPoint(0.5, 0.5),
                asset: "loading_spinner"
            }))
        };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenLoading"] = k.screens.ScreenLoading;
    k.screens.ScreenLoading.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenLoading".split(",");
    k.screens.ScreenLoading.__super__ =
        k.screens.ScreenBase;
    k.screens.ScreenLoading.prototype = w(k.screens.ScreenBase.prototype, {
        dispose: function() {
            k.screens.ScreenBase.prototype.dispose.call(this);
            this._loadSpinner = null
        },
        update: function(a) {
            k.screens.ScreenBase.prototype.update.call(this, a);
            this._timerSpin -= a;
            0 >= this._timerSpin && (this._timerSpin = 0.1, this._loadSpinner._getRenderable().rotation += 45)
        },
        __class__: k.screens.ScreenLoading
    });
    k.screens.ScreenQuitConfirm = function(a, b, c) {
        null == b && (b = "");
        k.screens.ScreenBase.call(this, a, b, c);
        this._setPos(new h.WorkinPoint(480,
            280));
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        this._getRenderable().scaleX = 0;
        this._getRenderable().scaleY = 0;
        h.tween.WorkinTweener._getInstance().tween(this._getRenderable(), 0.5, {
            scaleX: 1,
            scaleY: 1
        }).ease(h.tween.PennerManager.EASE_ELASTIC);
        this._buttonYes = new k.buttons.ButtonBase(-20, 20, new h.WorkinPoint(1, 0), "ui/menu/ButtonYes", "ui/menu/ButtonYes", "ui/menu/ButtonYes");
        this._addElement(this._buttonYes);
        this._buttonYes._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onYesClick));
        this._buttonNo = new k.buttons.ButtonBase(80, 20, new h.WorkinPoint(1, 0), "ui/menu/ButtonNo", "ui/menu/ButtonNo", "ui/menu/ButtonNo");
        this._addElement(this._buttonNo);
        this._buttonNo._getDispatcher().addEventListener(k.buttons.ButtonBase.CLICK, B(this, this._onNoClick))
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenQuitConfirm"] = k.screens.ScreenQuitConfirm;
    k.screens.ScreenQuitConfirm.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenQuitConfirm".split(",");
    k.screens.ScreenQuitConfirm.__super__ =
        k.screens.ScreenBase;
    k.screens.ScreenQuitConfirm.prototype = w(k.screens.ScreenBase.prototype, {
        _onNoClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO)
        },
        _onYesClick: function() {
            this._doFlowEvent(g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES)
        },
        __class__: k.screens.ScreenQuitConfirm
    });
    k.screens.ScreenScreenshot = function() {};
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenScreenshot"] = k.screens.ScreenScreenshot;
    k.screens.ScreenScreenshot.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenScreenshot".split(",");
    k.screens.ScreenScreenshot.__super__ = k.screens.ScreenBase;
    k.screens.ScreenScreenshot.prototype = w(k.screens.ScreenBase.prototype, {
        dispose: function() {
            k.screens.ScreenBase.prototype.dispose.call(this)
        },
        __class__: k.screens.ScreenScreenshot
    });
    k.screens.ScreenSplash = function(a, b, c) {
        null == b && (b = "");
        this._BLINK_TIME = 0.8;
        k.screens.ScreenBase.call(this, a, b, c);
        this._blinkTimer = this._BLINK_TIME;
        this._clickToPlayImage = this._addElement(new q.Element({
            asset: "ui/splash/ButtonTapPlay",
            x: 500,
            y: 510
        }))
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.ScreenSplash"] =
        k.screens.ScreenSplash;
    k.screens.ScreenSplash.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,ScreenSplash".split(",");
    k.screens.ScreenSplash.__super__ = k.screens.ScreenBase;
    k.screens.ScreenSplash.prototype = w(k.screens.ScreenBase.prototype, {
        _onInputDown: function() {
            f.WorkinCloud.instance.log("[Splash] State: " + this.getState());
            if (this.getState() != this._STATE_OPENED) return !1;
            this._doFlowEvent(g.ConstantsScreen.FLOW_SPLASH_PLAY);
            return !1
        },
        update: function(a) {
            k.screens.ScreenBase.prototype.update.call(this,
                a);
            this._blinkTimer -= a;
            0 >= this._blinkTimer && (!0 == this._clickToPlayImage._getRenderable().visible ? this._clickToPlayImage._getRenderable().visible = !1 : this._clickToPlayImage._getRenderable().visible = !0, this._blinkTimer = this._BLINK_TIME)
        },
        __class__: k.screens.ScreenSplash
    });
    k.screens.data = {};
    k.screens.data.ChangeActionData = function() {};
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.data.ChangeActionData"] = k.screens.data.ChangeActionData;
    k.screens.data.ChangeActionData.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,data,ChangeActionData".split(",");
    k.screens.data.ChangeActionData.prototype = {
        _getAction: function() {
            return this._action
        },
        _getChangeEvent: function() {
            return this._changeEvent
        },
        _getScreenId: function() {
            return this._screenId
        },
        __class__: k.screens.data.ChangeActionData
    };
    k.screens.data.ScreenData = function(a, b, c, l, d) {
        null == l && (l = 0);
        null == c && (c = "");
        this.id = a;
        this.screenClass = b;
        this.assetClassName = c;
        this.layer = l;
        this.data = null == d ? new I : d
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.data.ScreenData"] = k.screens.data.ScreenData;
    k.screens.data.ScreenData.__name__ =
        "com,nick,fairly_oddparents,fowl_play,ui,screens,data,ScreenData".split(",");
    k.screens.data.ScreenData.prototype = {
        __class__: k.screens.data.ScreenData
    };
    k.screens.data.ScreenQueueData = function(a, b, c) {
        null == c && (c = "");
        this.screenData = a;
        this.openCondition = b;
        this.openTestString = c
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.data.ScreenQueueData"] = k.screens.data.ScreenQueueData;
    k.screens.data.ScreenQueueData.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,screens,data,ScreenQueueData".split(",");
    k.screens.data.ScreenQueueData.prototype = {
        validateCondition: function(a, b) {
            null == b && (b = "");
            return this.openCondition == a ? "" == this.openTestString || this.openTestString == b : !1
        },
        __class__: k.screens.data.ScreenQueueData
    };
    k.screens.data.ScreenStateData = function(a, b, c, l, d, e) {
        this.id = a;
        this.animation = b;
        this.actionOnComplete = c;
        this.actionData = l;
        this.inFunc = d;
        this.outFunc = e
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.screens.data.ScreenStateData"] = k.screens.data.ScreenStateData;
    k.screens.data.ScreenStateData.__name__ =
        "com,nick,fairly_oddparents,fowl_play,ui,screens,data,ScreenStateData".split(",");
    k.screens.data.ScreenStateData.prototype = {
        __class__: k.screens.data.ScreenStateData
    };
    k.transitions = {};
    k.transitions.TransitionBase = function(a, b, c, l) {
        null == l && (l = "");
        null == c && (c = !1);
        null == b && (b = !0);
        this._STATE_OUT = 3;
        this._STATE_IDLE = 2;
        this._STATE_IN = 1;
        this._STATE_HIDDEN = 0;
        this._transitionId = l;
        this._flagOutOnly = c;
        this.flagDispose = !1;
        q.Element.call(this, {
            asset: a
        });
        b ? this._setState(this._STATE_HIDDEN) : this._flagOutOnly ? this._setState(this._STATE_OUT) :
            this._setState(this._STATE_IN)
    };
    i["com.nick.fairly_oddparents.fowl_play.ui.transitions.TransitionBase"] = k.transitions.TransitionBase;
    k.transitions.TransitionBase.__name__ = "com,nick,fairly_oddparents,fowl_play,ui,transitions,TransitionBase".split(",");
    k.transitions.TransitionBase.__super__ = q.Element;
    k.transitions.TransitionBase.prototype = w(q.Element.prototype, {
        dispose: function() {
            q.Element.prototype.dispose.call(this);
            this._mc = null
        },
        _setState: function(a) {
            this._state = a;
            switch (this._state) {
                case this._STATE_HIDDEN:
                    this.hide()
            }
        },
        show: function() {
            this._mc.set_visible(!0)
        },
        hide: function() {
            this._mc.set_visible(!1)
        },
        start: function() {
            this.show();
            this._setState(this._STATE_IN)
        },
        update: function(a) {
            q.Element.prototype.update.call(this, a)
        },
        _getIsOutro: function() {
            return this._state == this._STATE_OUT
        },
        __class__: k.transitions.TransitionBase
    });
    t = {
        World: function(a, b) {
            this._flagIsMaxMeter = this._musicPlaying = !1;
            this._PLAYSTATE_WAIT = 2;
            this._PLAYSTATE_POWER = 1;
            this._PLAYSTATE_AIM = 0;
            this._STATE_STOP = 2;
            this._STATE_GAMEPLAY = 1;
            this._targetNotActive =
                this._STATE_IDLE = 0;
            n.WMEventDispatcher.call(this);
            this._timeline = a;
            this._main = b;
            this._elementManager = new q.ElementManager(this._timeline, g.ConstantsApp.STAGE_CENTER_X, g.ConstantsApp.STAGE_CENTER_Y);
            this._mouse = new h.WorkinPoint(0, 0);
            this._elementManager.addLayer(g.ConstantsApp.LAYER_BG);
            this._elementManager.addLayer(g.ConstantsApp.LAYER_PARTS);
            this._elementManager.addLayer(g.ConstantsApp.LAYER_PLAYER);
            this._elementManager.addLayer(g.ConstantsApp.LAYER_FG);
            this._elementManager.addElement(new q.Element({
                layer: g.ConstantsApp.LAYER_BG,
                asset: "elements/bg_stadium"
            }));
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_LEVEL, 0);
            this._aimAngle = 0;
            this._addEventListeners();
            this._newLevel()
        }
    };
    i["com.nick.fairly_oddparents.fowl_play.world.World"] = t.World;
    t.World.__name__ = "com,nick,fairly_oddparents,fowl_play,world,World".split(",");
    t.World.__super__ = n.WMEventDispatcher;
    t.World.prototype = w(n.WMEventDispatcher.prototype, {
        render: function() {
            this._elementManager.renderElements()
        },
        handleInput: function(a) {
            if (!f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_PAUSED)) switch (this._mouse.x =
                a.x, this._mouse.y = a.y, a.input) {
                case g.ConstantsApp.INPUT_CLICK:
                    if (this._state != this._STATE_STOP) switch (a.phase) {
                        case n.WMEventInput.PHASE_MOVE:
                            switch (this._playState) {
                                case this._PLAYSTATE_AIM:
                                    0 <= f.WorkinCloud.instance.getInt(g.ConstantsApp.INT_DUCKS_LEFT) && (a = new h.WorkinLine(this._bazooka._getPos(), new h.WorkinPoint(this._mouse.x, this._mouse.y)), -62 > a._getVector()._getAngle() ? this._bazooka._getRenderable().rotation = -62 : 0 < a._getVector()._getAngle() ? this._bazooka._getRenderable().rotation = 0 : this._bazooka._getRenderable().rotation =
                                        a._getVector()._getAngle())
                            }
                            break;
                        case n.WMEventInput.PHASE_UP:
                            switch (this._playState) {
                                case this._PLAYSTATE_AIM:
                                    this._setPlayState(this._PLAYSTATE_POWER)
                            }
                            switch (this._state) {
                                case this._STATE_IDLE:
                                    this._setState(this._STATE_GAMEPLAY)
                            }
                            break;
                        case n.WMEventInput.PHASE_DOWN:
                            switch (this._playState) {
                                case this._PLAYSTATE_POWER:
                                    this._timmy.animate("shoot", 1), this._setPlayState(this._PLAYSTATE_WAIT)
                            }
                    }
            }
        },
        _unpause: function() {
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_PAUSED, !1)
        },
        _pause: function() {
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_PAUSED,
                !0)
        },
        _onBurst: function(a) {
            a = this._elementManager.addElement(new t.elements.Burst({
                x: a._getData().x,
                y: a._getData().y,
                layer: g.ConstantsApp.LAYER_FG
            }));
            a._getRenderable().scaleX *= 0.5;
            a._getRenderable().scaleY *= 0.5;
            a.animate("burst", 1)
        },
        _onHitSuitcase: function() {
            for (var a = 0, b = this._levelConfig.getPoints(); a < b.length;) {
                var c = b[a];
                ++a;
                c._setAssetId("elements/point_gold");
                c.setTexture(c._getAssetId())
            }
        },
        _onHitBomb: function(a) {
            var b = this._levelConfig.getPoints();
            for (this._i = b.length; 0 <= --this._i;)
                if (b[this._i]._getPos().x +
                    50 > a._getData().x || b[this._i]._getPos().x - 50 < a._getData().x || b[this._i]._getPos().y + 50 > a._getData().x || b[this._i]._getPos().y - 50 < a._getData().y) {
                    var c = new h.WorkinPoint(b[this._i]._getPos().x, b[this._i]._getPos().y);
                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventData(g.ConstantsApp.EVENT_BURST_ORANGE, c));
                    f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_SCORE, 20);
                    b[this._i]._setDoDelete(!0);
                    b.splice(this._i, 1)
                }
        },
        _onHitCage: function(a) {
            var b = f.WorkinUtils.getRandom(0, 360, !0),
                c = 700 * -f.WorkinCloud.instance.getFloat(g.ConstantsApp.FLOAT_POWER_METER),
                l = b * p.GeomConst.DEGREE_RADIAN,
                b = Math.cos(l),
                l = Math.sin(l),
                c = new p.Vector(b * c, l * c, 0);
            this._ducks.push(this._elementManager.addElement(new t.elements.Projectile({
                x: a._getData().x,
                y: a._getData().y,
                layer: g.ConstantsApp.LAYER_FG
            }, c, this._levelConfig)))
        },
        _onUnpause: function() {
            this._unpause()
        },
        _onPause: function() {
            this._pause()
        },
        _removeEventListeners: function() {
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_PAUSE,
                B(this, this._onPause));
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_UNPAUSE, B(this, this._onUnpause));
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_HIT_CAGE, B(this, this._onHitCage));
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_HIT_BOMB, B(this, this._onHitBomb));
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_HIT_SUITCASE, B(this, this._onHitSuitcase));
            f.WorkinCloud.instance.getDispatcher().removeEventListener(g.ConstantsApp.EVENT_BURST_ORANGE,
                B(this, this._onBurst))
        },
        _addEventListeners: function() {
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_PAUSE, B(this, this._onPause));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_UNPAUSE, B(this, this._onUnpause));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_HIT_CAGE, B(this, this._onHitCage));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_HIT_BOMB, B(this, this._onHitBomb));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_HIT_SUITCASE,
                B(this, this._onHitSuitcase));
            f.WorkinCloud.instance.getDispatcher().addEventListener(g.ConstantsApp.EVENT_BURST_ORANGE, B(this, this._onBurst))
        },
        update: function(a) {
            if (!0 != f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_PAUSED)) {
                a = Math.round(1E3 * a) / 1E3;
                this._elementManager.updateElements(a);
                !0 == f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_AIM) ? 1 > this._angle._getRenderable().alpha ? this._angle._getRenderable().alpha += 0.1 : this._angle._getRenderable().alpha = 1 : 0 < this._angle._getRenderable().alpha ?
                    this._angle._getRenderable().alpha -= 0.1 : this._angle._getRenderable().alpha = 0;
                switch (this._playState) {
                    case this._PLAYSTATE_AIM:
                        a = new h.WorkinLine(this._bazooka._getPos(), new h.WorkinPoint(this._mouse.x, this._mouse.y));
                        this._aimAngle = -62 > a._getVector()._getAngle() ? -62 : 0 < a._getVector()._getAngle() ? 0 : a._getVector()._getAngle();
                        this._bazooka._getRenderable().rotation = this._aimAngle;
                        break;
                    case this._PLAYSTATE_POWER:
                        this._flagIsMaxMeter ? this._decreaseMeter() : this._increaseMeter();
                        break;
                    case this._PLAYSTATE_WAIT:
                        for (this._i =
                            this._levelConfig.getTargets().length; 0 <= --this._i;) !this._levelConfig.getTargets()[this._i]._getActive() && !this._levelConfig.getTargets()[this._i]._getCounted() && (this._targetNotActive++, this._levelConfig.getTargets()[this._i]._setCounted(!0));
                        1 == this._targetNotActive ? f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_1, !0) : 2 == this._targetNotActive && (f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_1, !1), f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_2, !0));
                        a = 0;
                        for (this._i =
                            this._ducks.length; 0 <= --this._i;) this._ducks[this._i].isActive() && a++;
                        0 == a && this._setPlayState(this._PLAYSTATE_AIM)
                }!1 == this._musicPlaying && (f.WorkinCloud.instance._getSound().playMusic("audio/Music"), this._musicPlaying = !0)
            }
        },
        _decreaseMeter: function(a) {
            null == a && (a = 0.025);
            0 < f.WorkinCloud.instance.getFloat(g.ConstantsApp.FLOAT_POWER_METER) + a ? (this._flagIsMaxMeter = !1, f.WorkinCloud.instance.setFloat(g.ConstantsApp.FLOAT_POWER_METER, 0)) : f.WorkinCloud.instance.modifyValue(g.ConstantsApp.FLOAT_POWER_METER,
                a)
        },
        _increaseMeter: function(a) {
            null == a && (a = -0.025);
            var b = f.WorkinCloud.instance.getFloat(g.ConstantsApp.FLOAT_POWER_METER); - 0.98 > b + a ? (f.WorkinCloud.instance.modifyValue(g.ConstantsApp.FLOAT_POWER_METER, -1 - b), this._flagIsMaxMeter = !0) : f.WorkinCloud.instance.modifyValue(g.ConstantsApp.FLOAT_POWER_METER, a)
        },
        _setPlayState: function(a) {
            switch (a) {
                case this._PLAYSTATE_AIM:
                    0 >= f.WorkinCloud.instance.getInt(g.ConstantsApp.INT_DUCKS_LEFT) && (!0 == f.WorkinCloud.instance.getBool(g.ConstantsApp.BOOL_MESSAGE_2) ? (this._setState(this._STATE_STOP),
                        U.delay(B(this, this.levelCleanup), 1E3)) : f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_GAME_LOSE, !0));
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_AIM, !0);
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_METER, !1);
                    this._flagIsMaxMeter = !1;
                    this._bazooka._setAssetId("timmy_bazooka");
                    this._bazooka.setTexture(this._bazooka._getAssetId());
                    this._bazooka._getRenderable().rotation = 0;
                    break;
                case this._PLAYSTATE_POWER:
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_AIM, !1);
                    f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_METER,
                        !0);
                    f.WorkinCloud.instance.setFloat(g.ConstantsApp.FLOAT_POWER_METER, 0);
                    break;
                case this._PLAYSTATE_WAIT:
                    f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_DUCKS_LEFT, -1);
                    this._smoke = this._elementManager.addElement(new t.elements.Smoke({
                        layer: g.ConstantsApp.LAYER_PLAYER,
                        x: 160,
                        y: 450,
                        fps: 30
                    }));
                    this._smoke.animate("burst", 1);
                    this._bazooka._setAssetId("timmy_bazooka_empty");
                    this._bazooka.setTexture(this._bazooka._getAssetId());
                    f.WorkinCloud.instance._getSound().playSound("audio/DuckLaunch");
                    var b = 600 *
                        -f.WorkinCloud.instance.getFloat(g.ConstantsApp.FLOAT_POWER_METER);
                    150 > b && (b = 150);
                    var c = this._aimAngle * p.GeomConst.DEGREE_RADIAN,
                        l = Math.cos(c),
                        c = Math.sin(c),
                        b = new p.Vector(l * b, c * b, 0);
                    this._ducks.push(this._elementManager.addElement(new t.elements.Projectile({
                        x: 140,
                        y: 500,
                        layer: g.ConstantsApp.LAYER_FG
                    }, b, this._levelConfig)))
            }
            this._playState = a
        },
        _setState: function(a) {
            switch (a) {
                case this._STATE_GAMEPLAY:
                    this._setPlayState(this._PLAYSTATE_AIM)
            }
            this._state = a
        },
        levelCleanup: function() {
            f.WorkinCloud.instance._getSound().playSound("NextLevel");
            this._timmy._setDoDelete(!0);
            this._smoke._setDoDelete(!0);
            this._bazooka._setDoDelete(!0);
            this._levelConfig.dispose();
            this._levelConfig._setDoDelete(!0);
            for (var a = 0, b = this._ducks; a < b.length;) {
                var c = b[a];
                ++a;
                c._setDoDelete(!0)
            }
            this._bigBarrier._setDoDelete(!0);
            this._targetNotActive = 0;
            this._newLevel()
        },
        dispose: function() {
            this._elementManager.dispose();
            this._timeline = this._elementManager = null;
            this._removeEventListeners();
            this._ducks = this._levelConfig = this._bazooka = this._smoke = this._timmy = null;
            n.WMEventDispatcher.prototype.dispose.call(this)
        },
        _finishNewLevel: function() {
            this._levelConfig = new t.elements.LevelConfig({
                layer: g.ConstantsApp.LAYER_PARTS
            }, this);
            this._setState(this._STATE_IDLE)
        },
        _newLevel: function() {
            f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_LEVEL, 1);
            f.WorkinCloud.instance.setInt(g.ConstantsApp.INT_DUCKS_LEFT, 5);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_1, !1);
            f.WorkinCloud.instance.setBool(g.ConstantsApp.BOOL_MESSAGE_2, !1);
            this._angle = this._elementManager.addElement(new q.Element({
                layer: g.ConstantsApp.LAYER_PLAYER,
                asset: "elements/angle_bg",
                x: 150,
                y: 390
            }));
            this._angle._getRenderable().alpha = 1;
            this._timmy = G.__cast(this._elementManager.addElement(new q.AnimatedElement({
                layer: g.ConstantsApp.LAYER_PLAYER,
                x: 120,
                y: 440,
                library: "flump_exploder",
                movie: "CharacterDisplay",
                fps: 12
            })), q.AnimatedElement).addAnimation("idle", 1, 1).addAnimation("shoot", 7, 11).animate("idle");
            this._bazooka = this._elementManager.addElement(new q.Element({
                asset: "timmy_bazooka",
                layer: g.ConstantsApp.LAYER_PLAYER,
                x: 150,
                y: 505
            }));
            this._bazooka._getRenderable().scaleX *=
                0.7;
            this._bazooka._getRenderable().scaleY *= 0.7;
            this._bazooka.setOrigin(new h.WorkinPoint(0.2, 0.5));
            this._bigBarrier = G.__cast(this._elementManager.addElement(new q.AnimatedElement({
                layer: g.ConstantsApp.LAYER_BG,
                x: 275,
                y: 175,
                library: "flump_exploder",
                movie: "mc_playfield_border",
                fps: 12
            })), q.AnimatedElement).addAnimation("idle", 1, 8).animate("idle");
            this._ducks = [];
            U.delay(B(this, this._finishNewLevel), 100)
        },
        removeElement: function(a) {
            this._elementManager.removeElement(a)
        },
        addElement: function(a) {
            this._elementManager.addElement(a)
        },
        __class__: t.World
    });
    q.AnimatedElement = function(a) {
        q.Element.call(this, a);
        this._animations = new I;
        this._lastFrame = -1;
        this._currentFrame = 0;
        this._currentAnimation = "";
        this._fps = 24;
        if (a.library) {
            this._textureEntity.remove(this._texture);
            this._texture.dispose();
            var b = f.WorkinCloud.instance.getAssets().getLibrary(a.library)._symbols.get(a.movie);
            this._duration = b.duration;
            this._frames = b.frames;
            this._movie = b.createSprite();
            this._movie.set_paused(!0);
            this._render.width = this._movie.getNaturalWidth();
            this._render.height =
                this._movie.getNaturalHeight();
            this._texture = this._movie;
            this._textureEntity.add(this._texture)
        }
        a.fps && (this._fps = a.fps)
    };
    i["com.workinman.display.AnimatedElement"] = q.AnimatedElement;
    q.AnimatedElement.__name__ = ["com", "workinman", "display", "AnimatedElement"];
    q.AnimatedElement.__super__ = q.Element;
    q.AnimatedElement.prototype = w(q.Element.prototype, {
        _onAnimationComplete: function() {},
        update: function(a) {
            q.Element.prototype.update.call(this, a);
            if ("" != this._currentAnimation && (0 < this._currentLoop || this._flagLoop)) this._currentFrame +=
                this._fps * a, this._currentFrame > this._currentFrameList[1] && (this._currentLoop--, 1 > this._currentLoop && !1 == this._flagLoop ? this._onAnimationComplete() : this._currentFrame = this._currentFrameList[0]), null != this._movie && (this._currentFrame | 0) != this._lastFrame && this._movie.set_position(Math.floor(this._currentFrame) / this._frames * this._duration), this._lastFrame = this._currentFrame | 0
        },
        animate: function(a, b) {
            null == b && (b = 0);
            null != this._animations && this._animations.exists(a) ? (this._currentFrameList = null, this._currentFrameList =
                this._animations.get(a).slice(), this._currentFrame = this._currentFrameList[0], this._currentAnimation = a, this._currentLoop = b, this._flagLoop = 0 == b) : f.WorkinCloud.instance.log("Animation not found: " + a);
            return this
        },
        addAnimation: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1); - 1 == b && (b = 0); - 1 == c && (c = this._frames | 0);
            this._animations.set(a, [b, c]);
            return this
        },
        _getAnimationRatio: function() {
            return (this._currentFrame - this._currentFrameList[0]) / (this._currentFrameList[1] - this._currentFrameList[0])
        },
        _setFps: function(a) {
            return this._fps =
                a
        },
        _getFps: function() {
            return this._fps
        },
        _getCurrentAnimation: function() {
            return this._currentAnimation
        },
        dispose: function() {
            this._currentFrameList = this._animations = this._movie = null;
            q.Element.prototype.dispose.call(this)
        },
        moveBy: function(a, b, c) {
            null == c && (c = 0);
            Math.abs(a) > p.GeomConst.EPSILON && (this._getPos().x += a);
            Math.abs(b) > p.GeomConst.EPSILON && (this._getPos().y += b);
            Math.abs(c) > p.GeomConst.EPSILON && (this._getPos().z += c)
        },
        __class__: q.AnimatedElement
    });
    t.elements = {};
    t.elements.Barrier = function(a, b) {
        null ==
            b && (b = 0);
        q.AnimatedElement.call(this, a);
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        0 == b ? (this._getPos().x += g.ConstantsApp.BARRIER_WIDTH / 2, this._getPos().y += g.ConstantsApp.BARRIER_HEIGHT / 2) : (this._getPos().x -= g.ConstantsApp.BARRIER_HEIGHT / 2, this._getPos().y += g.ConstantsApp.BARRIER_WIDTH / 2);
        this.collisionBounds = new p.CollisionBounds(this);
        this.width = g.ConstantsApp.BARRIER_WIDTH;
        this.height = g.ConstantsApp.BARRIER_HEIGHT;
        this._getRenderable().rotation = b;
        this.collisionBounds.setCollisionBox(this.width,
            this.height, b)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Barrier"] = t.elements.Barrier;
    t.elements.Barrier.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Barrier".split(",");
    t.elements.Barrier.__super__ = q.AnimatedElement;
    t.elements.Barrier.prototype = w(q.AnimatedElement.prototype, {
        __class__: t.elements.Barrier
    });
    t.elements.Burst = function(a) {
        a.library = "flump_exploder";
        a.movie = "AssetBurstOrange";
        q.AnimatedElement.call(this, a);
        this.addAnimation("burst", 1, 11)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Burst"] =
        t.elements.Burst;
    t.elements.Burst.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Burst".split(",");
    t.elements.Burst.__super__ = q.AnimatedElement;
    t.elements.Burst.prototype = w(q.AnimatedElement.prototype, {
        _onAnimationComplete: function() {
            this._setDoDelete(!0)
        },
        __class__: t.elements.Burst
    });
    t.elements.Item = function(a, b) {
        null == b && (b = 0);
        q.AnimatedElement.call(this, a);
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        this._type = b;
        switch (this._type) {
            case 1:
                this.width = 100;
                this.height = 130;
                break;
            case 2:
                this.width =
                    60;
                this.height = 100;
                break;
            case 3:
                this.width = 100, this.height = 60
        }
        this._getPos().x += this.width / 4;
        this._getPos().y += this.height / 4;
        this.collisionBounds = new p.CollisionBounds(this);
        this.collisionBounds.setCollisionBox(this.width, this.height, 0)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Item"] = t.elements.Item;
    t.elements.Item.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Item".split(",");
    t.elements.Item.__super__ = q.AnimatedElement;
    t.elements.Item.prototype = w(q.AnimatedElement.prototype, {
        update: function(a) {
            q.AnimatedElement.prototype.update.call(this, a)
        },
        _setType: function(a) {
            return this._type = a
        },
        _getType: function() {
            return this._type
        },
        __class__: t.elements.Item
    });
    t.elements.LevelConfig = function(a, b) {
        q.Element.call(this, a);
        this._world = b;
        this._level = f.WorkinCloud.instance.getInt(g.ConstantsApp.INT_LEVEL);
        5 < this._level && (this._level = f.WorkinUtils.getRandom(2, 5, !0) | 0);
        this._barriers = [];
        this._items = [];
        this._points = [];
        this._targets = [];
        this._levelType = 1 < this._level ? f.WorkinUtils.getRandom(1,
            3, !0) | 0 : 1;
        this._setupLevel()
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.LevelConfig"] = t.elements.LevelConfig;
    t.elements.LevelConfig.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,LevelConfig".split(",");
    t.elements.LevelConfig.__super__ = q.Element;
    t.elements.LevelConfig.prototype = w(q.Element.prototype, {
        dispose: function() {
            q.Element.prototype.dispose.call(this);
            for (this._i = this._barriers.length; 0 <= --this._i;) null != this._barriers[this._i] && (this._world.removeElement(this._barriers[this._i]),
                !0 == this._barriers[this._i]._getDoDelete(), this._barriers.splice(this._i, 1));
            for (this._i = this._items.length; 0 <= --this._i;) null != this._items[this._i] && (this._world.removeElement(this._items[this._i]), !0 == this._items[this._i]._getDoDelete(), this._items.splice(this._i, 1));
            for (this._i = this._points.length; 0 <= --this._i;) null != this._points[this._i] && (this._world.removeElement(this._points[this._i]), !0 == this._points[this._i]._getDoDelete(), this._points.splice(this._i, 1));
            for (this._i = this._targets.length; 0 <=
                --this._i;) null != this._targets[this._i] && (this._world.removeElement(this._targets[this._i]), !0 == this._targets[this._i]._getDoDelete(), this._targets.splice(this._i, 1));
            this._targets = this._points = this._items = this._barriers = null
        },
        _addTarget: function(a, b, c) {
            var l;
            switch (this._levelType) {
                case 1:
                    l = "elements/target_fairy";
                    break;
                case 2:
                    l = "elements/target_antifairy";
                    break;
                case 3:
                    l = "elements/target_pixie";
                    break;
                default:
                    l = ""
            }
            a = new t.elements.Target({
                asset: l,
                x: a,
                y: b,
                layer: g.ConstantsApp.LAYER_PARTS
            }, c);
            this._targets.push(a);
            this._world.addElement(a)
        },
        _addPoint: function(a, b) {
            var c;
            switch (this._levelType) {
                case 1:
                    c = "elements/point_fairy";
                    break;
                case 2:
                    c = "elements/point_antifairy";
                    break;
                case 3:
                    c = "elements/point_pixie";
                    break;
                default:
                    c = ""
            }
            c = new t.elements.Point({
                asset: c,
                x: a,
                y: b,
                layer: g.ConstantsApp.LAYER_PARTS
            });
            this._points.push(c);
            this._world.addElement(c)
        },
        _addItem: function(a, b) {
            var c;
            switch (this._levelType) {
                case 1:
                    c = "elements/item_fairy";
                    break;
                case 2:
                    c = "elements/item_antifairy";
                    break;
                case 3:
                    c = "elements/item_pixie";
                    break;
                default:
                    c = ""
            }
            c = new t.elements.Item({
                asset: c,
                x: a,
                y: b,
                layer: g.ConstantsApp.LAYER_PARTS
            }, this._levelType);
            this._items.push(c);
            this._world.addElement(c)
        },
        _addBarrier: function(a, b, c) {
            var l;
            switch (this._levelType) {
                case 1:
                    l = "elements/barrier_fairy";
                    break;
                case 2:
                    l = "elements/barrier_antifairy";
                    break;
                case 3:
                    l = "elements/barrier_pixie";
                    break;
                default:
                    l = ""
            }
            a = new t.elements.Barrier({
                asset: l,
                x: a,
                y: b,
                layer: g.ConstantsApp.LAYER_PARTS
            }, c);
            this._barriers.push(a);
            this._world.addElement(a)
        },
        _setupLevel: function() {
            switch (this._level) {
                case 1:
                    this._addBarrier(400,
                        210, 0);
                    this._addBarrier(608, 210, 90);
                    this._addBarrier(725, 210, 0);
                    this._addBarrier(360, 345, 0);
                    this._addBarrier(770, 345, 0);
                    this._addBarrier(400, 485, 0);
                    this._addBarrier(608, 425, 90);
                    this._addBarrier(725, 485, 0);
                    this._addItem(575, 320);
                    this._addPoint(320, 310);
                    this._addPoint(390, 295);
                    this._addPoint(460, 280);
                    this._addPoint(530, 265);
                    this._addPoint(320, 380);
                    this._addPoint(390, 395);
                    this._addPoint(460, 410);
                    this._addPoint(530, 425);
                    this._addPoint(860, 310);
                    this._addPoint(790, 295);
                    this._addPoint(720, 280);
                    this._addPoint(650,
                        265);
                    this._addPoint(860, 380);
                    this._addPoint(790, 395);
                    this._addPoint(720, 410);
                    this._addPoint(650, 425);
                    this._addTarget(390, 245, 180);
                    this._addTarget(890, 245, 180);
                    this._addTarget(310, 465, 0);
                    this._addTarget(810, 465, 0);
                    break;
                case 2:
                    this._addBarrier(535, 210, 90);
                    this._addBarrier(680, 210, 90);
                    this._addBarrier(410, 250, 90);
                    this._addBarrier(805, 250, 90);
                    this._addBarrier(335, 425, 0);
                    this._addBarrier(400, 425, 0);
                    this._addBarrier(535, 425, 90);
                    this._addBarrier(680, 425, 90);
                    this._addBarrier(725, 425, 0);
                    this._addBarrier(790,
                        425, 0);
                    this._addItem(575, 320);
                    this._addPoint(340, 360);
                    this._addPoint(420, 360);
                    this._addPoint(500, 360);
                    this._addPoint(680, 360);
                    this._addPoint(760, 360);
                    this._addPoint(840, 360);
                    this._addPoint(345, 240);
                    this._addPoint(435, 240);
                    this._addPoint(745, 240);
                    this._addPoint(835, 240);
                    this._addPoint(590, 275);
                    this._addPoint(590, 415);
                    this._addPoint(355, 470);
                    this._addPoint(430, 470);
                    this._addPoint(750, 470);
                    this._addPoint(825, 470);
                    this._addTarget(640, 245, 180);
                    this._addTarget(490, 290, 270);
                    this._addTarget(710, 210, 90);
                    this._addTarget(560,
                        465, 0);
                    break;
                case 3:
                    this._addBarrier(310, 210, 0);
                    this._addBarrier(325, 310, 90);
                    this._addBarrier(520, 210, 90);
                    this._addBarrier(520, 275, 90);
                    this._addBarrier(475, 430, 0);
                    this._addBarrier(315, 485, 0);
                    this._addBarrier(380, 485, 0);
                    this._addBarrier(650, 425, 90);
                    this._addBarrier(750, 425, 90);
                    this._addBarrier(705, 285, 0);
                    this._addItem(715, 330);
                    this._addPoint(340, 430);
                    this._addPoint(410, 430);
                    this._addPoint(360, 280);
                    this._addPoint(430, 280);
                    this._addPoint(502, 390);
                    this._addPoint(560, 220);
                    this._addPoint(630, 220);
                    this._addPoint(560,
                        280);
                    this._addPoint(630, 280);
                    this._addPoint(560, 340);
                    this._addPoint(630, 340);
                    this._addPoint(830, 230);
                    this._addPoint(830, 300);
                    this._addPoint(830, 370);
                    this._addPoint(580, 455);
                    this._addPoint(680, 455);
                    this._addPoint(780, 455);
                    this._addTarget(470, 245, 180);
                    this._addTarget(315, 350, 0);
                    this._addTarget(850, 500, 270);
                    this._addTarget(785, 245, 180);
                    break;
                case 4:
                    this._addBarrier(315, 210, 0);
                    this._addBarrier(380, 210, 0);
                    this._addBarrier(385, 210, 90);
                    this._addBarrier(450, 210, 0);
                    this._addBarrier(885, 210, 90);
                    this._addBarrier(495,
                        290, 0);
                    this._addBarrier(625, 290, 0);
                    this._addBarrier(563, 290, 0);
                    this._addBarrier(495, 405, 0);
                    this._addBarrier(625, 405, 0);
                    this._addBarrier(563, 405, 0);
                    this._addBarrier(330, 425, 90);
                    this._addBarrier(810, 485, 0);
                    this._addBarrier(745, 485, 0);
                    this._addBarrier(830, 425, 90);
                    this._addBarrier(675, 485, 0);
                    this._addItem(575, 320);
                    this._addPoint(580, 230);
                    this._addPoint(670, 230);
                    this._addPoint(760, 230);
                    this._addPoint(330, 345);
                    this._addPoint(390, 345);
                    this._addPoint(450, 345);
                    this._addPoint(510, 345);
                    this._addPoint(670, 345);
                    this._addPoint(730, 345);
                    this._addPoint(790, 345);
                    this._addPoint(850, 345);
                    this._addPoint(420, 450);
                    this._addPoint(510, 450);
                    this._addPoint(600, 450);
                    this._addTarget(460, 255, 180);
                    this._addTarget(840, 290, 270);
                    this._addTarget(740, 455, 0);
                    this._addTarget(360, 420, 90);
                    break;
                case 5:
                    this._addBarrier(400, 230, 90), this._addBarrier(385, 220, 0), this._addBarrier(810, 230, 90), this._addBarrier(735, 220, 0), this._addBarrier(400, 375, 90), this._addBarrier(385, 445, 0), this._addBarrier(810, 375, 90), this._addBarrier(735, 445, 0), this._addBarrier(578,
                        300, 90), this._addBarrier(638, 300, 90), this._addBarrier(563, 290, 0), this._addBarrier(563, 365, 0), this._addItem(710, 300), this._addPoint(500, 220), this._addPoint(590, 220), this._addPoint(680, 220), this._addPoint(380, 330), this._addPoint(795, 330), this._addPoint(450, 280), this._addPoint(450, 330), this._addPoint(450, 380), this._addPoint(500, 445), this._addPoint(590, 445), this._addPoint(680, 445), this._addTarget(530, 375, 270), this._addTarget(560, 260, 0), this._addTarget(670, 295, 90), this._addTarget(640, 410, 180)
            }
        },
        getTargets: function() {
            return this._targets
        },
        getPoints: function() {
            return this._points
        },
        getItems: function() {
            return this._items
        },
        getBarriers: function() {
            return this._barriers
        },
        __class__: t.elements.LevelConfig
    });
    t.elements.Point = function(a) {
        q.AnimatedElement.call(this, a);
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        this._getPos().x += 10;
        this._getPos().y += 10;
        this.collisionBounds = new p.CollisionBounds(this);
        this.height = this.width = 20;
        this.collisionBounds.setCollisionBox(this.width, this.height, 0)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Point"] =
        t.elements.Point;
    t.elements.Point.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Point".split(",");
    t.elements.Point.__super__ = q.AnimatedElement;
    t.elements.Point.prototype = w(q.AnimatedElement.prototype, {
        _setNormal: function(a) {
            this._normal = a;
            !1 == this._normal && (this._setAssetId("point_special"), this.setTexture(this._getAssetId()));
            return this._normal
        },
        _getNormal: function() {
            return this._normal
        },
        __class__: t.elements.Point
    });
    t.elements.Projectile = function(a, b, c) {
        this._TYPE_TARGET = 3;
        this._TYPE_POINT =
            2;
        this._TYPE_ITEM = 1;
        this.targetAngle = this.bodyAngle = this.feetAngle = this._TYPE_BARRIER = 0;
        this._soundTimer = 1;
        this.radius = 5;
        q.AnimatedElement.call(this, a);
        this._getRenderable().scaleX *= 0.9;
        this._getRenderable().scaleY *= 0.9;
        this._speed = b._getLength();
        this.motionCurve = new p.MotionCurve;
        this.motionCurve.forces = new p.Vector(0, 70, 0);
        this.motionCurve.setDirection(new p.Vector(this._getPos().x, this._getPos().y), b);
        this._inBarrier = !1;
        this._active = !0;
        this._levelConfig = c;
        this._setState(t.elements.Projectile._STATE_FLYING)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Projectile"] = t.elements.Projectile;
    t.elements.Projectile.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Projectile".split(",");
    t.elements.Projectile.__super__ = q.AnimatedElement;
    t.elements.Projectile.prototype = w(q.AnimatedElement.prototype, {
        reflectNode: function(a, b, c, l, d) {
            var e = this.motionCurve.change;
            this.moveBy(e.x * c, e.y * c, e.z * c);
            b.collisionBounds.boundsType == p.CollisionBounds.SPHERE ? (l = new p.Vector(b._pos.x - this._pos.x, b._pos.y -
                this._pos.y, 0), l.normalize()) : null != d && (l = new p.Vector(b._pos.x + d.x - this._pos.x, b._pos.y + d.y - this._pos.y, 0), l.normalize());
            b = this.motionCurve.direction.reflect(l);
            this.motionCurve.setDirection(new p.Vector(this._pos.x, this._pos.y), b.multiply(0.98));
            this.motionCurve.update(a - a * c)
        },
        doCollisionTest: function(a, b, c) {
            for (var l, d = 0, e = 1, i = new p.Vector, k = new p.splines.LineSpline(new p.Vector, new p.Vector), j = new p.Vector, m = this.motionCurve.change, o = m.normalizeCopy(), q = a.length; 0 <= --q;)
                if (l = a[q].collisionBounds,
                    l.enabled && l.boundsType == p.CollisionBounds.POLY) {
                    var r = l.edges,
                        s = l.normals;
                    for (this._i = r.length; - 1 < --this._i;) l = p.Collision2.circleToLineCollision(new p.Vector(this._pos.x, this._pos.y), m, this.radius, r[this._i], s[this._i], new p.Vector(a[q]._pos.x, a[q]._pos.y)), 0 < l && l < e && (e = l, d = a[q], i = s[this._i], k = r[this._i], j = p.Collision2.lineCollisionContactPoint)
                } if (1 > e) switch (b) {
                case this._TYPE_ITEM:
                    d.collisionBounds.enabled = !1;
                    for (a = this._levelConfig.getItems().length; 0 <= --a;)
                        if (d._pos.x == this._levelConfig.getItems()[a]._getPos().x &&
                            d._pos.y == this._levelConfig.getItems()[a]._getPos().y) {
                            switch (this._levelConfig.getItems()[a]._getType()) {
                                case 1:
                                    c = this.motionCurve.direction._getLength();
                                    e = m.cross(p.Vector.POSITIVE_Z);
                                    i = new p.Vector(o.x - 0.5 * e.x, o.y - 0.5 * e.y, 0);
                                    i._setLength(c);
                                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventData(g.ConstantsApp.EVENT_HIT_CAGE, this.motionCurve.position));
                                    f.WorkinCloud.instance._getSound().playSound("audio/HitCage");
                                    i = new p.Vector(o.x + 0.5 * e.x, o.y + 0.5 * e.y, 0);
                                    i._setLength(c);
                                    this.motionCurve.setDirection(this.motionCurve.position,
                                        i);
                                    break;
                                case 2:
                                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventData(g.ConstantsApp.EVENT_BURST_ORANGE, this.motionCurve.position));
                                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventData(g.ConstantsApp.EVENT_HIT_BOMB, this.motionCurve.position));
                                    f.WorkinCloud.instance._getSound().playSound("audio/HitBomb");
                                    f.WorkinCloud.instance._getSound().playSound("audio/HitPoint1");
                                    break;
                                case 3:
                                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(g.ConstantsApp.EVENT_HIT_SUITCASE));
                                    f.WorkinCloud.instance._getSound().playSound("audio/HitSuitcase");
                                    break;
                                default:
                                    this._setPos(new h.WorkinPoint(this.motionCurve.position.x, this.motionCurve.position.y))
                            }
                            0 == this._soundTimer && (this._soundTimer = 1, f.WorkinCloud.instance._getSound().playSound("audio/DuckQuack"));
                            this._levelConfig.getItems()[a]._setDoDelete(!0);
                            this._levelConfig.getItems().splice(a, 1)
                        } break;
                case this._TYPE_TARGET:
                    this.moveBy(this.motionCurve.change.x * e, this.motionCurve.change.y * e, 0);
                    for (a = this._levelConfig.getTargets().length; 0 <=
                        --a;) d._pos.x == this._levelConfig.getTargets()[a]._getPos().x && d._pos.y == this._levelConfig.getTargets()[a]._getPos().y && k == d.collisionBounds.edges[0] && (new p.Vector(this._pos.x, this._pos.y)).distanceTo(new p.Vector(d._pos.x, d._pos.y)) < 0.5 * d.collisionBounds.width && (this._setState(t.elements.Projectile._STATE_STUCK), f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_SCORE, 100), !1 == this._levelConfig.getTargets()[a]._getActive() ? f.WorkinCloud.instance._getSound().playSound("audio/HitTarget") : (this._levelConfig.getTargets()[a]._setActive(!1),
                        f.WorkinCloud.instance._getSound().playSound("audio/HitTargetFirst")), this._active = !1);
                    this.reflectNode(c, d, e, i, j);
                    break;
                case this._TYPE_BARRIER:
                    this.reflectNode(c, d, e, i, j);
                    0 == this._soundTimer && (this._soundTimer = 1, f.WorkinCloud.instance._getSound().playSound("audio/DuckQuack"));
                    f.WorkinCloud.instance._getSound().playSound("audio/HitBarrier");
                    break;
                case this._TYPE_POINT:
                    f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventData(g.ConstantsApp.EVENT_BURST_ORANGE, this.motionCurve.position));
                    if ("elements/point_gold" == d.assetId) f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_SCORE, 50), f.WorkinCloud.instance._getSound().playSound("audio/HitPointGold");
                    else switch (f.WorkinCloud.instance.modifyValue(g.ConstantsApp.INT_SCORE, 20), f.WorkinUtils.getRandom(1, 3, !0) | 0) {
                        case 1:
                            f.WorkinCloud.instance._getSound().playSound("audio/HitPoint1");
                            break;
                        case 2:
                            f.WorkinCloud.instance._getSound().playSound("audio/HitPoint2");
                            break;
                        case 3:
                            f.WorkinCloud.instance._getSound().playSound("audio/HitPoint3")
                    }
                    for (a =
                        this._levelConfig.getPoints().length; 0 <= --a;) d._pos.x == this._levelConfig.getPoints()[a]._getPos().x && d._pos.y == this._levelConfig.getPoints()[a]._getPos().y && (this._levelConfig.getPoints()[a]._setDoDelete(!0), this._levelConfig.getPoints().splice(a, 1));
                    break;
                default:
                    this._setPos(new h.WorkinPoint(this.motionCurve.position.x, this.motionCurve.position.y))
            }
            this._setPos(new h.WorkinPoint(this.motionCurve.position.x, this.motionCurve.position.y))
        },
        update: function(a) {
            q.AnimatedElement.prototype.update.call(this,
                a);
            this.updatePositionFromVelocity(a);
            this.motionCurve.update(a);
            this._soundTimer = 0 < this._soundTimer ? this._soundTimer - a : 0;
            switch (this._state) {
                case t.elements.Projectile._STATE_FLYING:
                    this._setAssetId("duck_flying");
                    this.setTexture(this._getAssetId());
                    300 < this._getPos().x && (this._inBarrier = !0);
                    if (this._inBarrier) {
                        var b = this.motionCurve.change,
                            c = b.normalizeCopy();
                        if (0 < b.y && this.motionCurve.position.y > g.ConstantsApp.GROUND_Y)
                            if (-0.25 < -1 * c.y) this.motionCurve.setDirection(new p.Vector(this._getPos().x,
                                this._getPos().y), new p.Vector(this.motionCurve.direction.x, -this.motionCurve.direction.y, 0));
                            else {
                                this._getPos().to(this.motionCurve.position.x, this.motionCurve.position.y);
                                this._setState(t.elements.Projectile._STATE_ROLLING);
                                break
                            }
                        else 0 > b.y && this.motionCurve.position.y < g.ConstantsApp.BOUNDS_TOP ? (this.motionCurve.setDirection(new p.Vector(this._getPos().x, this._getPos().y), new p.Vector(this.motionCurve.direction.x, -this.motionCurve.direction.y, 0)), 0 == this._soundTimer && (this._soundTimer = 1, f.WorkinCloud.instance._getSound().playSound("audio/DuckQuack"))) :
                            0 < b.x && this.motionCurve.position.x > g.ConstantsApp.BOUNDS_RIGHT ? (this.motionCurve.setDirection(new p.Vector(this._getPos().x, this._getPos().y), new p.Vector(-this.motionCurve.direction.x, this.motionCurve.direction.y, 0)), 0 == this._soundTimer && (this._soundTimer = 1, f.WorkinCloud.instance._getSound().playSound("audio/DuckQuack"))) : 0 > b.x && this.motionCurve.position.x < g.ConstantsApp.BOUNDS_LEFT ? (this.motionCurve.setDirection(new p.Vector(this._getPos().x, this._getPos().y), new p.Vector(-this.motionCurve.direction.x,
                                this.motionCurve.direction.y, 0)), 0 == this._soundTimer && (this._soundTimer = 1, f.WorkinCloud.instance._getSound().playSound("audio/DuckQuack"))) : (this._flagCollisionThisUpdate = !1, this.doCollisionTest(this._levelConfig.getBarriers(), this._TYPE_BARRIER, a), this.doCollisionTest(this._levelConfig.getItems(), this._TYPE_ITEM, a), this.doCollisionTest(this._levelConfig.getPoints(), this._TYPE_POINT, a), this.doCollisionTest(this._levelConfig.getTargets(), this._TYPE_TARGET, a), this._flagCollisionThisUpdate || this._setPos(new h.WorkinPoint(this.motionCurve.position.x,
                                this.motionCurve.position.y)))
                    }
                    this._setPos(new h.WorkinPoint(this.motionCurve.position.x, this.motionCurve.position.y));
                    this._active && (b = Math.atan2(this.motionCurve.direction.y, this.motionCurve.direction.x) * p.GeomConst.RADIAN_DEGREE - this.targetAngle, this.targetAngle += f.WorkinUtils.absMod(b + 180, 360) - 180, this.bodyAngle += 8 * (this.targetAngle - this.bodyAngle) * a, this.feetAngle += 4 * (this.bodyAngle - this.feetAngle) * a, this._getRenderable().rotation = this.targetAngle);
                    break;
                case t.elements.Projectile._STATE_ROLLING:
                    this._getRenderable().rotation +=
                        15
            }
        },
        _setState: function(a) {
            if (a != this._state) {
                switch (a) {
                    case t.elements.Projectile._STATE_FLYING:
                        this._setAssetId("duck_flying");
                        this.setTexture(this._getAssetId());
                        this.setOrigin(new h.WorkinPoint(1, 0.5));
                        break;
                    case t.elements.Projectile._STATE_ROLLING:
                        this._setVel(new h.WorkinPoint(700, 0));
                        this._active = !1;
                        this._setAssetId("duck_rolling");
                        this.setTexture(this._getAssetId());
                        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
                        break;
                    case t.elements.Projectile._STATE_STUCK:
                        this._setVel(new h.WorkinPoint(0, 0)),
                            this._active = !1, this._setAssetId("duck_stuck"), this.setTexture(this._getAssetId()), this.setOrigin(new h.WorkinPoint(1, 0.5))
                }
                this._state = a
            }
        },
        isActive: function() {
            return this._active
        },
        __class__: t.elements.Projectile
    });
    t.elements.Screenwipe = function() {};
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Screenwipe"] = t.elements.Screenwipe;
    t.elements.Screenwipe.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Screenwipe".split(",");
    t.elements.Screenwipe.__super__ = q.AnimatedElement;
    t.elements.Screenwipe.prototype =
        w(q.AnimatedElement.prototype, {
            _onAnimationComplete: function() {
                this._setDoDelete(!0);
                this._world.levelCleanup()
            },
            __class__: t.elements.Screenwipe
        });
    t.elements.Smoke = function(a) {
        a.library = "flump_exploder";
        a.movie = "_cloud";
        q.AnimatedElement.call(this, a);
        this.addAnimation("burst", 1, 11)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Smoke"] = t.elements.Smoke;
    t.elements.Smoke.__name__ = "com,nick,fairly_oddparents,fowl_play,world,elements,Smoke".split(",");
    t.elements.Smoke.__super__ = q.AnimatedElement;
    t.elements.Smoke.prototype = w(q.AnimatedElement.prototype, {
        _onAnimationComplete: function() {
            this._setDoDelete(!0)
        },
        __class__: t.elements.Smoke
    });
    t.elements.Target = function(a, b) {
        null == b && (b = 0);
        q.AnimatedElement.call(this, a);
        this.setOrigin(new h.WorkinPoint(0.5, 0.5));
        0 == b ? (this._getPos().x += g.ConstantsApp.TARGET_WIDTH / 2, this._getPos().y += g.ConstantsApp.TARGET_HEIGHT / 2) : 90 == b ? (this._getPos().x -= g.ConstantsApp.TARGET_HEIGHT / 2, this._getPos().y += g.ConstantsApp.TARGET_WIDTH / 2) : 180 == b ? (this._getPos().x -= g.ConstantsApp.TARGET_WIDTH /
            2, this._getPos().y -= g.ConstantsApp.TARGET_HEIGHT / 2) : (this._getPos().x += g.ConstantsApp.TARGET_HEIGHT / 2, this._getPos().y -= g.ConstantsApp.TARGET_WIDTH / 2);
        this.collisionBounds = new p.CollisionBounds(this);
        this.width = g.ConstantsApp.TARGET_WIDTH;
        this.height = g.ConstantsApp.TARGET_HEIGHT / 4;
        this._active = !0;
        this._counted = !1;
        this._getRenderable().rotation = b;
        this.collisionBounds.setCollisionBox(this.width, this.height, b)
    };
    i["com.nick.fairly_oddparents.fowl_play.world.elements.Target"] = t.elements.Target;
    t.elements.Target.__name__ =
        "com,nick,fairly_oddparents,fowl_play,world,elements,Target".split(",");
    t.elements.Target.__super__ = q.AnimatedElement;
    t.elements.Target.prototype = w(q.AnimatedElement.prototype, {
        _setCounted: function(a) {
            return this._counted = a
        },
        _getCounted: function() {
            return this._counted
        },
        _setActive: function(a) {
            return this._active = a
        },
        _getActive: function() {
            return this._active
        },
        __class__: t.elements.Target
    });
    E = void 0;
    M = void 0;
    j = void 0;
    d = void 0;
    J = void 0;
    m = void 0;
    N = void 0;
    y = void 0;
    v = void 0;
    H = void 0;
    e = void 0;
    Z = void 0;
    z = void 0;
    F = void 0;
    z = void 0;
    ba = void 0;
    z = void 0;
    z = void 0;
    m = {
        Disposable: function() {}
    };
    i["flambe.util.Disposable"] = m.Disposable;
    m.Disposable.__name__ = ["flambe", "util", "Disposable"];
    m.Disposable.prototype = {
        __class__: m.Disposable
    };
    N = function() {};
    i["flambe.Component"] = N;
    N.__name__ = ["flambe", "Component"];
    N.__interfaces__ = [m.Disposable];
    N.prototype = {
        _internal_init: function(a, b) {
            this.owner = a;
            this.next = b
        },
        get_name: function() {
            return null
        },
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        onUpdate: function() {},
        onRemoved: function() {},
        onAdded: function() {},
        __class__: N
    };
    aa = {
        ComponentUpdater: function() {
            this._paused = !1
        }
    };
    i["com.workinman.components.ComponentUpdater"] = aa.ComponentUpdater;
    aa.ComponentUpdater.__name__ = ["com", "workinman", "components", "ComponentUpdater"];
    aa.ComponentUpdater.__super__ = N;
    aa.ComponentUpdater.prototype = w(N.prototype, {
        setPaused: function(a) {
            return this._paused = a
        },
        getPaused: function() {
            return this._paused
        },
        onUpdate: function(a) {
            this._paused || f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventUpdate(a))
        },
        get_name: function() {
            return "ComponentUpdater_3"
        },
        __class__: aa.ComponentUpdater
    });
    R = {
        ConstantsCloud: function() {}
    };
    i["com.workinman.data.ConstantsCloud"] = R.ConstantsCloud;
    R.ConstantsCloud.__name__ = ["com", "workinman", "data", "ConstantsCloud"];
    q.ElementManager = function(a, b, c) {
        this._timeline = a;
        this._layers = new I;
        this._elements = [];
        this._camera = new h.WorkinCamera(b, c)
    };
    i["com.workinman.display.ElementManager"] = q.ElementManager;
    q.ElementManager.__name__ = ["com", "workinman", "display", "ElementManager"];
    q.ElementManager.prototype = {
        renderElements: function() {
            for (var a = 0, b = this._elements; a < b.length;) {
                var c = b[a];
                ++a;
                c.renderPosition(this._camera)
            }
        },
        updateElements: function(a) {
            for (var b = this._elements.length; 0 < b;) b--, this._elements[b].update(a), this._elements[b]._getDoDelete() && this.removeElementAtIndex(b)
        },
        removeElement: function(a) {
            for (var b = this._elements.length; 0 < b;)
                if (b--, this._elements[b] == a) {
                    this.removeElementAtIndex(b);
                    break
                }
        },
        removeElementAtIndex: function(a) {
            this._elements[a]._getEntity().parent.removeChild(this._elements[a]._getEntity());
            this._elements[a]._setDoDelete(!0);
            this._elements[a].dispose();
            this._elements.splice(a, 1)
        },
        addElement: function(a) {
            if (!1 == this._layers.exists(a._getLayer())) return f.WorkinCloud.instance.log("[ElementManager](addElement) Trying to add element to non-existant layer '" + a._getLayer() + "'!"), a;
            this._elements.push(a);
            this._layers.get(a._getLayer()).addChild(a._getEntity());
            return a
        },
        addLayer: function(a) {
            if (this._layers.exists(a)) this._timeline.removeChild(this._layers.get(a)), this._timeline.addChild(this._layers.get(a));
            else {
                var b = new M;
                this._timeline.addChild(b);
                this._layers.set(a, b)
            }
        },
        _getElements: function() {
            return this._elements
        },
        _getCamera: function() {
            return this._camera
        },
        dispose: function() {
            for (; 0 < this._elements.length;) this.removeElementAtIndex(this._elements.length - 1);
            this._elements = null;
            this._camera.dispose();
            this._camera = null;
            for (var a = this._layers.iterator(); a.hasNext();) a.next().dispose();
            this._timeline = this._layers = null
        },
        __class__: q.ElementManager
    };
    q.Renderable = function(a, b) {
        null == b && (b = 1);
        null == a && (a =
            1);
        this.rotation = this.y = this.x = 0;
        this.scaleY = this.scaleX = 1;
        this.width = a;
        this.height = b;
        this.alpha = 1;
        this.visible = !0
    };
    i["com.workinman.display.Renderable"] = q.Renderable;
    q.Renderable.__name__ = ["com", "workinman", "display", "Renderable"];
    q.Renderable.prototype = {
        __class__: q.Renderable
    };
    n.WMEvent = function(a) {
        this._eventId = a
    };
    i["com.workinman.events.WMEvent"] = n.WMEvent;
    n.WMEvent.__name__ = ["com", "workinman", "events", "WMEvent"];
    n.WMEvent.prototype = {
        getEventId: function() {
            return this._eventId
        },
        __class__: n.WMEvent
    };
    n.WMEventData = function(a, b) {
        n.WMEvent.call(this, a);
        this._data = b
    };
    i["com.workinman.events.WMEventData"] = n.WMEventData;
    n.WMEventData.__name__ = ["com", "workinman", "events", "WMEventData"];
    n.WMEventData.__super__ = n.WMEvent;
    n.WMEventData.prototype = w(n.WMEvent.prototype, {
        _getData: function() {
            return this._data
        },
        __class__: n.WMEventData
    });
    n._WMEventDispatcher = {};
    n._WMEventDispatcher.WMEventTracker = function() {
        this._signalConnection = [];
        this._signal = new m.Signal1
    };
    i["com.workinman.events._WMEventDispatcher.WMEventTracker"] =
        n._WMEventDispatcher.WMEventTracker;
    n._WMEventDispatcher.WMEventTracker.__name__ = ["com", "workinman", "events", "_WMEventDispatcher", "WMEventTracker"];
    n._WMEventDispatcher.WMEventTracker.prototype = {
        dispose: function() {
            this._signal = null;
            for (var a = 0, b = this._signalConnection; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this._signalConnection = null
        },
        isEmtpy: function() {
            return null == this._signal._head
        },
        dispatchEvent: function(a) {
            this._signal.emit1(a)
        },
        removeEventListener: function(a) {
            for (var b = this._signalConnection.length; 0 <
                b;) b--, K.compareMethods(this._signalConnection[b]._getListener(), a) && (this._signalConnection[b].dispose(), this._signalConnection.splice(b, 1))
        },
        addEventListener: function(a) {
            this._signalConnection.push(new n._WMEventDispatcher.SignalTracker(a, this._signal.connect(a)))
        },
        __class__: n._WMEventDispatcher.WMEventTracker
    };
    n._WMEventDispatcher.SignalTracker = function(a, b) {
        this._function = a;
        this._connection = b
    };
    i["com.workinman.events._WMEventDispatcher.SignalTracker"] = n._WMEventDispatcher.SignalTracker;
    n._WMEventDispatcher.SignalTracker.__name__ = ["com", "workinman", "events", "_WMEventDispatcher", "SignalTracker"];
    n._WMEventDispatcher.SignalTracker.prototype = {
        _getListener: function() {
            return this._function
        },
        dispose: function() {
            this._function = null;
            this._connection.dispose();
            this._connection = null
        },
        __class__: n._WMEventDispatcher.SignalTracker
    };
    n.WMEventFlow = function(a, b) {
        null == b && (b = !1);
        this.flowId = a;
        this.targetScreen = b;
        n.WMEvent.call(this, n.WMEventFlow.EVENT_FLOW)
    };
    i["com.workinman.events.WMEventFlow"] = n.WMEventFlow;
    n.WMEventFlow.__name__ = ["com",
        "workinman", "events", "WMEventFlow"
    ];
    n.WMEventFlow.__super__ = n.WMEvent;
    n.WMEventFlow.prototype = w(n.WMEvent.prototype, {
        __class__: n.WMEventFlow
    });
    n.WMEventInput = function(a, b, c, l) {
        n.WMEvent.call(this, n.WMEventInput.EVENT_INPUT);
        this.phase = a;
        this.input = b;
        this.x = c;
        this.y = l
    };
    i["com.workinman.events.WMEventInput"] = n.WMEventInput;
    n.WMEventInput.__name__ = ["com", "workinman", "events", "WMEventInput"];
    n.WMEventInput.__super__ = n.WMEvent;
    n.WMEventInput.prototype = w(n.WMEvent.prototype, {
        __class__: n.WMEventInput
    });
    n.WMEventInterfaceChange = function(a, b, c) {
        null == b && (b = "");
        this.flowId = a;
        this.screenId = b;
        null == c && (c = new I);
        this.customData = c;
        n.WMEvent.call(this, n.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT)
    };
    i["com.workinman.events.WMEventInterfaceChange"] = n.WMEventInterfaceChange;
    n.WMEventInterfaceChange.__name__ = ["com", "workinman", "events", "WMEventInterfaceChange"];
    n.WMEventInterfaceChange.__super__ = n.WMEvent;
    n.WMEventInterfaceChange.prototype = w(n.WMEvent.prototype, {
        __class__: n.WMEventInterfaceChange
    });
    n.WMEventScreenOut =
        function(a, b) {
            this.flowId = a;
            this.screenId = b;
            n.WMEvent.call(this, n.WMEventScreenOut.EVENT_SCREEN_OUTPUT)
        };
    i["com.workinman.events.WMEventScreenOut"] = n.WMEventScreenOut;
    n.WMEventScreenOut.__name__ = ["com", "workinman", "events", "WMEventScreenOut"];
    n.WMEventScreenOut.__super__ = n.WMEvent;
    n.WMEventScreenOut.prototype = w(n.WMEvent.prototype, {
        __class__: n.WMEventScreenOut
    });
    n.WMEventUpdate = function(a) {
        n.WMEvent.call(this, n.WMEventUpdate.EVENT_UPDATE);
        this._dt = a
    };
    i["com.workinman.events.WMEventUpdate"] = n.WMEventUpdate;
    n.WMEventUpdate.__name__ = ["com", "workinman", "events", "WMEventUpdate"];
    n.WMEventUpdate.__super__ = n.WMEvent;
    n.WMEventUpdate.prototype = w(n.WMEvent.prototype, {
        getDt: function() {
            return this._dt
        },
        __class__: n.WMEventUpdate
    });
    h = {};
    h.WorkinCamera = function(a, b) {
        this._screenCenterX = a;
        this._screenCenterY = b;
        this._pos = new h.WorkinPoint(a, b)
    };
    i["com.workinman.math.WorkinCamera"] = h.WorkinCamera;
    h.WorkinCamera.__name__ = ["com", "workinman", "math", "WorkinCamera"];
    h.WorkinCamera.prototype = {
        _getScreenCenterY: function() {
            return this._screenCenterY
        },
        _getScreenCenterX: function() {
            return this._screenCenterX
        },
        _getPos: function() {
            return this._pos
        },
        dispose: function() {
            this._pos = null
        },
        __class__: h.WorkinCamera
    };
    h.WorkinLine = function(a, b) {
        this._p0 = a.copy();
        this._p1 = b.copy();
        this._calcProperties()
    };
    i["com.workinman.math.WorkinLine"] = h.WorkinLine;
    h.WorkinLine.__name__ = ["com", "workinman", "math", "WorkinLine"];
    h.WorkinLine.prototype = {
        _calcProperties: function() {
            this._length = Math.round(1E3 * Math.sqrt((this._p0.x - this._p1.x) * (this._p0.x - this._p1.x) + (this._p0.y -
                this._p1.y) * (this._p0.y - this._p1.y))) / 1E3;
            this._vector = new h.WorkinPoint(this._getP1().x - this._getP0().x, this._getP1().y - this._getP0().y);
            this._slope = this._vector.y / this._vector.x;
            0 == this._getVector().x && (this._slope = 1E5);
            this._yIntercept = this._getP0().y - this._slope * this._getP0().x;
            this._parametricDenom = new h.WorkinPoint(this._getP1().x - this._getP0().x, this._getP1().y - this._getP0().y);
            this._normal = this._vector.pseudoCross();
            this._normal.normalize()
        },
        toFloats: function(a, b, c, l) {
            this._p0.to(a, b);
            this._p1.to(c,
                l);
            this._calcProperties()
        },
        to: function(a, b) {
            this._p0.toPoint(a);
            this._p1.toPoint(b);
            this._calcProperties()
        },
        copy: function() {
            return new h.WorkinLine(this._p0, this._p1)
        },
        _setLength: function(a) {
            if (0 == this._getLength()) return this._length;
            this._p1 = new h.WorkinPoint(this._p0.x + this._vector.x * (a / this._getLength()), this._p0.y + this._vector.y * (a / this._getLength()));
            this._calcProperties();
            return this._length
        },
        _getLength: function() {
            return this._length
        },
        _getParametricDenom: function() {
            return this._parametricDenom
        },
        _getCenterY: function() {
            return this._p0.y + this._vector.y / 2
        },
        _getCenterX: function() {
            return this._p0.x + this._vector.x / 2
        },
        _getCenter: function() {
            return new h.WorkinPoint(this._p0.x + this._vector.x / 2, this._p0.y + this._vector.y / 2)
        },
        _getVector: function() {
            return this._vector
        },
        _getNormal: function() {
            return this._normal
        },
        _getYIntercept: function() {
            return this._yIntercept
        },
        _getSlope: function() {
            return this._slope
        },
        _getP1: function() {
            return this._p1
        },
        _getP0: function() {
            return this._p0
        },
        __class__: h.WorkinLine
    };
    h.WorkinPoint =
        function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 0);
            null == a && (a = 0);
            this.x = Math.round(1E3 * a) / 1E3;
            this.y = Math.round(1E3 * b) / 1E3;
            this.z = Math.round(1E3 * c) / 1E3;
            this.calculateLength()
        };
    i["com.workinman.math.WorkinPoint"] = h.WorkinPoint;
    h.WorkinPoint.__name__ = ["com", "workinman", "math", "WorkinPoint"];
    h.WorkinPoint.prototype = {
        _getNormalizedMagnitude: function() {
            var a = this.normalizeCopy();
            return Math.sqrt(a.x * a.x + a.y * a.y)
        },
        calculateLength: function() {
            this._length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        pseudoCross: function() {
            return new h.WorkinPoint(this.y, -this.x, this.z)
        },
        normalizeCopy: function() {
            return 0 == this._length ? new h.WorkinPoint(0, 0, 0) : new h.WorkinPoint(this.x / this._length, this.y / this._length, this.z / this._length)
        },
        normalize: function() {
            0 != this._length && (this.x /= this._length, this.y /= this._length, this.z /= this._length, this.calculateLength())
        },
        _setLength: function(a) {
            if (0 == this._length || 0 >= a) return this.to(0, 0), this._length;
            this.multiply(a / this._length);
            return this._length
        },
        _getLength: function() {
            return this._length
        },
        copy: function() {
            return new h.WorkinPoint(this.x, this.y, this.z)
        },
        multiply: function(a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            this.clean();
            this.calculateLength()
        },
        subtractPoint: function(a) {
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.calculateLength()
        },
        toPoint: function(a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.calculateLength()
        },
        to: function(a, b, c) {
            null == c && (c = 0);
            this.x = a;
            this.y = b;
            this.z = c;
            this.calculateLength()
        },
        clean: function() {
            this.x = Math.round(1E3 * this.x) / 1E3;
            this.y = Math.round(1E3 * this.y) / 1E3;
            this.z = Math.round(1E3 *
                this.z) / 1E3
        },
        _getAngle: function() {
            return 180 * Math.atan2(this.y, this.x) / Math.PI
        },
        __class__: h.WorkinPoint
    };
    h.tween = {};
    h.tween.PennerEasing = function() {};
    i["com.workinman.math.tween.PennerEasing"] = h.tween.PennerEasing;
    h.tween.PennerEasing.__name__ = ["com", "workinman", "math", "tween", "PennerEasing"];
    h.tween.PennerEasing.easeInQuad = function(a, b, c, l) {
        return c * (a /= l) * a + b
    };
    h.tween.PennerEasing.easeOutQuad = function(a, b, c, l) {
        return -c * (a /= l) * (a - 2) + b
    };
    h.tween.PennerEasing.easeInOutQuad = function(a, b, c, l) {
        return 1 >
            (a /= l / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
    };
    h.tween.PennerEasing.easeInExpo = function(a, b, c, l) {
        return 0 == a ? b : c * Math.pow(2, 10 * (a / l - 1)) + b
    };
    h.tween.PennerEasing.easeOutExpo = function(a, b, c, l) {
        return a == l ? b + c : c * (-Math.pow(2, -10 * a / l) + 1) + b
    };
    h.tween.PennerEasing.easeInOutExpo = function(a, b, c, l) {
        return 0 == a ? b : a == l ? b + c : 1 > (a /= l / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
    };
    h.tween.PennerEasing.easeInElastic = function(a, b, c, l) {
        return h.tween.PennerEasing.easeInElasticL(a, b, c, l)
    };
    h.tween.PennerEasing.easeInElasticL =
        function(a, b, c, l, d, e) {
            null == e && (e = -0.123456);
            null == d && (d = -0.123456);
            if (0 == a) return b;
            if (1 == (a /= l)) return b + c; - 0.123456 == e && (e = 0.3 * l); - 0.123456 == d || d < Math.abs(c) ? (d = c, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(c / d);
            return -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * l - c) * 2 * Math.PI / e)) + b
        };
    h.tween.PennerEasing.easeOutElastic = function(a, b, c, l) {
        return h.tween.PennerEasing.easeOutElasticL(a, b, c, l)
    };
    h.tween.PennerEasing.easeOutElasticL = function(a, b, c, l, d, e) {
        null == e && (e = -0.123456);
        null == d && (d = -0.123456);
        var f;
        if (0 == a) return b;
        if (1 == (a /= l)) return b + c; - 0.123456 == e && (e = 0.3 * l); - 0.123456 == d || d < Math.abs(c) ? (d = c, f = e / 4) : f = e / (2 * Math.PI) * Math.asin(c / d);
        return d * Math.pow(2, -10 * a) * Math.sin((a * l - f) * 2 * Math.PI / e) + c + b
    };
    h.tween.PennerEasing.easeInOutElastic = function(a, b, c, l) {
        return h.tween.PennerEasing.easeInOutElasticL(a, b, c, l)
    };
    h.tween.PennerEasing.easeInOutElasticL = function(a, b, c, l, d, e) {
        null == e && (e = -0.123456);
        null == d && (d = -0.123456);
        var f;
        if (0 == a) return b;
        if (2 == (a /= l / 2)) return b + c; - 0.123456 == e && (e = l * 0.3 * 1.5); - 0.123456 == d || d < Math.abs(c) ?
            (d = c, f = e / 4) : f = e / (2 * Math.PI) * Math.asin(c / d);
        return 1 > a ? -0.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * l - f) * 2 * Math.PI / e) + b : 0.5 * d * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * l - f) * 2 * Math.PI / e) + c + b
    };
    h.tween.PennerEasing.easeInBack = function(a, b, c, l) {
        return h.tween.PennerEasing.easeInBackL(a, b, c, l)
    };
    h.tween.PennerEasing.easeInBackL = function(a, b, c, l, d) {
        null == d && (d = -0.123456); - 0.123456 == d && (d = 1.70158);
        return c * (a /= l) * a * ((d + 1) * a - d) + b
    };
    h.tween.PennerEasing.easeInOutBack = function(a, b, c, l) {
        return h.tween.PennerEasing.easeInOutBackL(a,
            b, c, l)
    };
    h.tween.PennerEasing.easeInOutBackL = function(a, b, c, l, d) {
        null == d && (d = -0.123456); - 0.123456 == d && (d = 1.70158);
        return 1 > (a /= l / 2) ? c / 2 * a * a * (((d *= 1.525) + 1) * a - d) + b : c / 2 * ((a -= 2) * a * (((d *= 1.525) + 1) * a + d) + 2) + b
    };
    h.tween.PennerEasing.easeOutBounce = function(a, b, c, d) {
        return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
    };
    h.tween.PennerEasing.easeInBounce = function(a, b, c, d) {
        return c - h.tween.PennerEasing.easeOutBounce(d -
            a, 0, c, d) + b
    };
    h.tween.PennerEasing.easeInOutBounce = function(a, b, c, d) {
        return a < d / 2 ? 0.5 * h.tween.PennerEasing.easeInBounce(2 * a, 0, c, d) + b : 0.5 * h.tween.PennerEasing.easeOutBounce(2 * a - d, 0, c, d) + 0.5 * c + b
    };
    h.tween.PennerEasing.easeInCubic = function(a, b, c, d) {
        return c * (a /= d) * a * a + b
    };
    h.tween.PennerEasing.easeOutCubic = function(a, b, c, d) {
        return c * ((a = a / d - 1) * a * a + 1) + b
    };
    h.tween.PennerEasing.easeInOutCubic = function(a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
    };
    h.tween.PennerEasing.easeInQuart = function(a, b, c,
        d) {
        return c * (a /= d) * a * a * a + b
    };
    h.tween.PennerEasing.easeOutQuart = function(a, b, c, d) {
        return -c * ((a = a / d - 1) * a * a * a - 1) + b
    };
    h.tween.PennerEasing.easeInOutQuart = function(a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
    };
    h.tween.PennerEasing.easeInQuint = function(a, b, c, d) {
        return c * (a /= d) * a * a * a * a + b
    };
    h.tween.PennerEasing.easeOutQuint = function(a, b, c, d) {
        return c * ((a = a / d - 1) * a * a * a * a + 1) + b
    };
    h.tween.PennerEasing.easeInOutQuint = function(a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
    };
    h.tween.PennerEasing.easeInSine = function(a, b, c, d) {
        return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
    };
    h.tween.PennerEasing.easeOutSine = function(a, b, c, d) {
        return c * Math.sin(a / d * (Math.PI / 2)) + b
    };
    h.tween.PennerEasing.easeInOutSine = function(a, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
    };
    h.tween.PennerEasing.easeInCirc = function(a, b, c, d) {
        return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
    };
    h.tween.PennerEasing.easeOutCirc = function(a, b, c, d) {
        return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
    };
    h.tween.PennerEasing.easeInOutCirc = function(a, b, c, d) {
        return 1 >
            (a /= d / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
    };
    h.tween.PennerManager = function() {};
    i["com.workinman.math.tween.PennerManager"] = h.tween.PennerManager;
    h.tween.PennerManager.__name__ = ["com", "workinman", "math", "tween", "PennerManager"];
    h.tween.PennerManager.getEaseFunction = function(a) {
        switch (a) {
            case h.tween.PennerManager.EASE_IN:
            case h.tween.PennerManager.EASE_QUAD_IN:
                return h.tween.PennerManager._tweenEaseIn;
            case h.tween.PennerManager.EASE_OUT:
            case h.tween.PennerManager.EASE_QUAD_OUT:
                return h.tween.PennerManager._tweenEaseOut;
            case h.tween.PennerManager.EASE:
            case h.tween.PennerManager.EASE_QUAD:
                return h.tween.PennerManager._tweenEaseBoth;
            case h.tween.PennerManager.EASE_EXPO:
                return h.tween.PennerManager._tweenExpoBoth;
            case h.tween.PennerManager.EASE_EXPO_IN:
                return h.tween.PennerManager._tweenExpoIn;
            case h.tween.PennerManager.EASE_EXPO_OUT:
                return h.tween.PennerManager._tweenExpoOut;
            case h.tween.PennerManager.EASE_ELASTIC:
                return h.tween.PennerManager._tweenElasticBoth;
            case h.tween.PennerManager.EASE_ELASTIC_IN:
                return h.tween.PennerManager._tweenElasticIn;
            case h.tween.PennerManager.EASE_ELASTIC_OUT:
                return h.tween.PennerManager._tweenElasticOut;
            case h.tween.PennerManager.EASE_BUMP:
                return h.tween.PennerManager._tweenBumpBoth;
            case h.tween.PennerManager.EASE_BUMP_IN:
                return h.tween.PennerManager._tweenBumpIn;
            case h.tween.PennerManager.EASE_BUMP_OUT:
                return h.tween.PennerManager._tweenBumpBoth;
            case h.tween.PennerManager.EASE_BOUNCE:
                return h.tween.PennerManager._tweenBounceBoth;
            case h.tween.PennerManager.EASE_BOUNCE_IN:
                return h.tween.PennerManager._tweenBounceIn;
            case h.tween.PennerManager.EASE_BOUNCE_OUT:
                return h.tween.PennerManager._tweenBounceOut;
            case h.tween.PennerManager.EASE_CUBIC:
                return h.tween.PennerManager._tweenCubicBoth;
            case h.tween.PennerManager.EASE_CUBIC_IN:
                return h.tween.PennerManager._tweenCubicIn;
            case h.tween.PennerManager.EASE_CUBIC_OUT:
                return h.tween.PennerManager._tweenCubicOut;
            case h.tween.PennerManager.EASE_SPACE:
                return h.tween.PennerManager._tweenSpaceBoth;
            case h.tween.PennerManager.EASE_SPACE_IN:
                return h.tween.PennerManager._tweenSpaceIn;
            case h.tween.PennerManager.EASE_SPACE_OUT:
                return h.tween.PennerManager._tweenSpaceOut;
            case h.tween.PennerManager.EASE_BLAST:
                return h.tween.PennerManager._tweenBlastBoth;
            case h.tween.PennerManager.EASE_BLAST_IN:
                return h.tween.PennerManager._tweenBlastIn;
            case h.tween.PennerManager.EASE_BLAST_OUT:
                return h.tween.PennerManager._tweenBlastOut;
            case h.tween.PennerManager.EASE_WAVE:
                return h.tween.PennerManager._tweenWaveBoth;
            case h.tween.PennerManager.EASE_WAVE_IN:
                return h.tween.PennerManager._tweenWaveIn;
            case h.tween.PennerManager.EASE_WAVE_OUT:
                return h.tween.PennerManager._tweenWaveOut;
            case h.tween.PennerManager.EASE_CIRCLE:
                return h.tween.PennerManager._tweenCircleBoth;
            case h.tween.PennerManager.EASE_CIRCLE_IN:
                return h.tween.PennerManager._tweenCircleIn;
            case h.tween.PennerManager.EASE_CIRCLE_OUT:
                return h.tween.PennerManager._tweenCircleOut;
            case h.tween.PennerManager.EASE_LINEAR:
                return h.tween.PennerManager._tweenLinear;
            default:
                return h.tween.PennerManager._tweenLinear
        }
    };
    h.tween.PennerManager._tweenLinear =
        function(a, b, c, d) {
            return a + c / d * b
        };
    h.tween.PennerManager._tweenEaseBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutQuad(c, a, b, d)
    };
    h.tween.PennerManager._tweenEaseIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInQuad(c, a, b, d)
    };
    h.tween.PennerManager._tweenEaseOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutQuad(c, a, b, d)
    };
    h.tween.PennerManager._tweenExpoBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutExpo(c, a, b, d)
    };
    h.tween.PennerManager._tweenExpoIn = function(a, b,
        c, d) {
        return h.tween.PennerEasing.easeInExpo(c, a, b, d)
    };
    h.tween.PennerManager._tweenExpoOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutExpo(c, a, b, d)
    };
    h.tween.PennerManager._tweenElasticBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutElastic(c, a, b, d)
    };
    h.tween.PennerManager._tweenElasticIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInElastic(c, a, b, d)
    };
    h.tween.PennerManager._tweenElasticOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutElastic(c, a, b, d)
    };
    h.tween.PennerManager._tweenBumpBoth =
        function(a, b, c, d) {
            return h.tween.PennerEasing.easeInOutBack(c, a, b, d)
        };
    h.tween.PennerManager._tweenBumpIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInBack(c, a, b, d)
    };
    h.tween.PennerManager._tweenBounceBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutBounce(c, a, b, d)
    };
    h.tween.PennerManager._tweenBounceIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInBounce(c, a, b, d)
    };
    h.tween.PennerManager._tweenBounceOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutBounce(c, a, b, d)
    };
    h.tween.PennerManager._tweenCubicBoth =
        function(a, b, c, d) {
            return h.tween.PennerEasing.easeInOutCubic(c, a, b, d)
        };
    h.tween.PennerManager._tweenCubicIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInCubic(c, a, b, d)
    };
    h.tween.PennerManager._tweenCubicOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutCubic(c, a, b, d)
    };
    h.tween.PennerManager._tweenSpaceBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutQuart(c, a, b, d)
    };
    h.tween.PennerManager._tweenSpaceIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInQuart(c, a, b, d)
    };
    h.tween.PennerManager._tweenSpaceOut =
        function(a, b, c, d) {
            return h.tween.PennerEasing.easeOutQuart(c, a, b, d)
        };
    h.tween.PennerManager._tweenBlastBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutQuint(c, a, b, d)
    };
    h.tween.PennerManager._tweenBlastIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInQuint(c, a, b, d)
    };
    h.tween.PennerManager._tweenBlastOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutQuint(c, a, b, d)
    };
    h.tween.PennerManager._tweenWaveBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutSine(c, a, b, d)
    };
    h.tween.PennerManager._tweenWaveIn =
        function(a, b, c, d) {
            return h.tween.PennerEasing.easeInSine(c, a, b, d)
        };
    h.tween.PennerManager._tweenWaveOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutSine(c, a, b, d)
    };
    h.tween.PennerManager._tweenCircleBoth = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInOutCirc(c, a, b, d)
    };
    h.tween.PennerManager._tweenCircleIn = function(a, b, c, d) {
        return h.tween.PennerEasing.easeInCirc(c, a, b, d)
    };
    h.tween.PennerManager._tweenCircleOut = function(a, b, c, d) {
        return h.tween.PennerEasing.easeOutCirc(c, a, b, d)
    };
    h.tween.WorkinTweener =
        function() {
            this._targets = []
        };
    i["com.workinman.math.tween.WorkinTweener"] = h.tween.WorkinTweener;
    h.tween.WorkinTweener.__name__ = ["com", "workinman", "math", "tween", "WorkinTweener"];
    h.tween.WorkinTweener._getInstance = function() {
        null == h.tween.WorkinTweener._instance && (h.tween.WorkinTweener._instance = new h.tween.WorkinTweener);
        return h.tween.WorkinTweener._instance
    };
    h.tween.WorkinTweener.prototype = {
        stop: function(a) {
            for (var b = this._targets.length; 0 < b;)
                if (b--, this._targets[b]._getTarget() == a) {
                    this._targets[b].clearTweens();
                    this._targets[b]._setIsComplete(!0);
                    break
                }
        },
        tween: function(a, b, c, d) {
            null == d && (d = !1);
            for (var b = new h.tween._WorkinTweener.WorkinTweenDef(a, b, c), c = !1, e = 0, f = this._targets; e < f.length;) {
                var g = f[e];
                ++e;
                g._getTarget() == a && (c = !0, d && g.clearTweens(), g.addTween(b))
            }!1 == c && (a = new h.tween._WorkinTweener.WorkinTweenTracker(a), this._targets.push(a), a.addTween(b));
            return b
        },
        update: function(a) {
            for (var b = this._targets.length; 0 < b;) b--, this._targets[b].update(a), this._targets[b]._getIsComplete() && (this._targets[b].dispose(),
                this._targets.splice(b, 1))
        },
        __class__: h.tween.WorkinTweener
    };
    h.tween._WorkinTweener = {};
    h.tween._WorkinTweener.WorkinTweenTracker = function(a) {
        this._target = a;
        this._tweens = [];
        this._isComplete = !1
    };
    i["com.workinman.math.tween._WorkinTweener.WorkinTweenTracker"] = h.tween._WorkinTweener.WorkinTweenTracker;
    h.tween._WorkinTweener.WorkinTweenTracker.__name__ = "com,workinman,math,tween,_WorkinTweener,WorkinTweenTracker".split(",");
    h.tween._WorkinTweener.WorkinTweenTracker.prototype = {
        addTween: function(a) {
            this._tweens.push(a)
        },
        clearTweens: function() {
            for (var a = 0, b = this._tweens; a < b.length;) {
                var c = b[a];
                ++a;
                c._setIsComplete(!0)
            }
        },
        _setIsComplete: function(a) {
            return this._isComplete = a
        },
        _getIsComplete: function() {
            return this._isComplete
        },
        _getTarget: function() {
            return this._target
        },
        update: function(a) {
            for (var b = this._tweens.length; 0 < b;) b--, this._tweens[b].update(a), this._tweens[b]._getIsComplete() && (this._tweens[b].dispose(), this._tweens.splice(b, 1));
            1 > this._tweens.length && (this._isComplete = !0)
        },
        dispose: function() {
            this._target = null;
            for (var a = 0, b = this._tweens; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this._tweens = null
        },
        __class__: h.tween._WorkinTweener.WorkinTweenTracker
    };
    h.tween._WorkinTweener.WorkinTweenDef = function(a, b, c) {
        this._target = a;
        this._duration = b;
        this._delay = 0;
        this._dest = c;
        this._easeFunction = h.tween.PennerManager.getEaseFunction(h.tween.PennerManager.EASE_LINEAR);
        this._isComplete = !1;
        this._completionArgs = this._completionHandler = null;
        this._progress = 0;
        this._origin = {};
        a = 0;
        for (b = K.fields(this._dest); a < b.length;) c = b[a], ++a,
            null != K.field(this._target, c) && (this._origin[c] = K.field(this._target, c))
    };
    i["com.workinman.math.tween._WorkinTweener.WorkinTweenDef"] = h.tween._WorkinTweener.WorkinTweenDef;
    h.tween._WorkinTweener.WorkinTweenDef.__name__ = "com,workinman,math,tween,_WorkinTweener,WorkinTweenDef".split(",");
    h.tween._WorkinTweener.WorkinTweenDef.prototype = {
        onComplete: function(a, b) {
            null == b && (b = []);
            this._completionHandler = a;
            this._completionArgs = b;
            return this
        },
        ease: function(a) {
            this._easeFunction = h.tween.PennerManager.getEaseFunction(a);
            return this
        },
        delay: function(a) {
            this._delay = a;
            return this
        },
        _setIsComplete: function(a) {
            return this._isComplete = a
        },
        _getIsComplete: function() {
            return this._isComplete
        },
        update: function(a) {
            if (0 < this._delay && (this._delay -= a, 0 < this._delay)) return;
            this._progress += a;
            this._progress > this._duration && (this._progress = this._duration);
            this.ratio = this._progress / this._duration;
            for (var b = 0, c = K.fields(this._dest); b < c.length;) {
                var d = c[b];
                ++b;
                a = K.field(this._dest, d) - K.field(this._origin, d);
                this._target[d] = this._easeFunction(K.field(this._origin,
                    d), a, this._progress, this._duration)
            }
            this._progress >= this._duration && (null != this._completionHandler && this._completionHandler.apply(this._completionHandler, this._completionArgs), this._isComplete = !0)
        },
        dispose: function() {
            this._dest = this._target = this._origin = null
        },
        __class__: h.tween._WorkinTweener.WorkinTweenDef
    };
    Q = {
        WMSharedObject: function() {
            n.WMEventDispatcher.call(this);
            this._data = {};
            this.sharedKey = ""
        }
    };
    i["com.workinman.net.WMSharedObject"] = Q.WMSharedObject;
    Q.WMSharedObject.__name__ = ["com", "workinman",
        "net", "WMSharedObject"
    ];
    Q.WMSharedObject.getLocalStorage = function() {
        return x.window.localStorage
    };
    Q.WMSharedObject.getLocal = function(a, b) {
        var c = x.window.location.href;
        null == b && (b = c);
        c = new Q.WMSharedObject;
        c.sharedKey = b + ":" + a;
        var d = Q.WMSharedObject.getLocalStorage().getItem(c.sharedKey);
        c._setData("" == d || null == d ? {} : P.run(d));
        return c
    };
    Q.WMSharedObject.__super__ = n.WMEventDispatcher;
    Q.WMSharedObject.prototype = w(n.WMEventDispatcher.prototype, {
        flush: function() {
            var a = T.run(this._getData());
            Q.WMSharedObject.getLocalStorage().setItem(this.sharedKey,
                a);
            return Q.SharedObjectFlushedStatus.FLUSHED
        },
        _setData: function(a) {
            return this._data = a
        },
        _getData: function() {
            return this._data
        },
        dispose: function() {
            this._data = null;
            n.WMEventDispatcher.prototype.dispose.call(this)
        },
        __class__: Q.WMSharedObject
    });
    Q.SharedObjectFlushedStatus = function() {};
    i["com.workinman.net.SharedObjectFlushedStatus"] = Q.SharedObjectFlushedStatus;
    Q.SharedObjectFlushedStatus.__name__ = ["com", "workinman", "net", "SharedObjectFlushedStatus"];
    s = {
        ServiceAnalytics: function() {}
    };
    i["com.workinman.services.ServiceAnalytics"] =
        s.ServiceAnalytics;
    s.ServiceAnalytics.__name__ = ["com", "workinman", "services", "ServiceAnalytics"];
    s.ServiceAnalytics.onAnalyticsLoad = function() {
        s.ServiceAnalytics._flagLoaded || (f.WorkinCloud.instance.log("[ServiceAnalytics](onAnalyticsLoad) Load complete"), s.ServiceAnalytics._flagLoaded = !0, U.delay(s.ServiceAnalytics._runQueuedCommands, 1E3))
    };
    s.ServiceAnalytics.init = function(a, b) {
        null == b && (b = "");
        s.ServiceAnalytics._flagInitted = !0;
        s.ServiceAnalytics._queuedCommands = [];
        "x" == a.toLowerCase() && (s.ServiceAnalytics.OPTION_ENABLE_TRACKING = !1);
        s.ServiceAnalytics.OPTION_ENABLE_TRACKING && ("" == b && (b = s.ServiceAnalytics._DEFAULT_SHARED_OBJECT_ID), s.ServiceAnalytics._flagStarted = !1, f.WorkinCloud.instance.log("[ServiceAnalytics](initAnalytics)"), s.ServiceAnalytics._appId = a, s.ServiceAnalytics._sharedObjectId = b, s.ServiceAnalytics._sharedObjectData = f.WorkinCloud.instance.sharedObjectGetData(s.ServiceAnalytics._sharedObjectId), s.ServiceAnalytics._generateSessionID(), null == s.ServiceAnalytics._sharedObjectData.userID || 14 > r.string(s.ServiceAnalytics._sharedObjectData.userID).length ?
            (s.ServiceAnalytics._generateOfflineIDs(), s.ServiceAnalytics._sharedObjectData.userID = s.ServiceAnalytics._offlineUserId, s.ServiceAnalytics._sharedObjectData.trackingID = s.ServiceAnalytics._offlineTrackingId, f.WorkinCloud.instance.sharedObjectSetData(s.ServiceAnalytics._sharedObjectId, s.ServiceAnalytics._sharedObjectData)) : (s.ServiceAnalytics._offlineUserId = s.ServiceAnalytics._sharedObjectData.userID, s.ServiceAnalytics._offlineTrackingId = s.ServiceAnalytics._sharedObjectData.trackingID), eval("\t\t\t\t\n\t\t\t\twindow._pnConfig = new Array();\n\t\t\t\twindow._pnConfig['userId'] = '" +
                s.ServiceAnalytics._offlineUserId + "';\n\t\t\t\t\n\t\t\t\tvar _pnAPIURL = document.location.protocol + '//js.a.playnomics.net/v1/api?a=" + s.ServiceAnalytics._appId + "';\n\t\t\t\tvar _pnAPI = document.createElement('script');\t\t\t\t\n\t\t\t\t_pnAPI.type = 'text/javascript'; \n\t\t\t\t_pnAPI.async = false; \n\t\t\t\t_pnAPI.src = _pnAPIURL;\n\t\t\t\twindow.pnCallbackReference = _pnAPI;\t\t\t\t\n\t\t\t"), eval("window.pnCallbackReference").addEventListener("load", s.ServiceAnalytics.onAnalyticsLoad, !1), eval("document.body.appendChild(window.pnCallbackReference);"),
            s.ServiceAnalytics.sendUserInfo(), s.ServiceAnalytics.sendMilestone("custom1"))
    };
    s.ServiceAnalytics._runQueuedCommands = function() {
        for (; 0 < s.ServiceAnalytics._queuedCommands.length;) s.ServiceAnalytics.sendPlaynomicsEvent(s.ServiceAnalytics._queuedCommands[0].method, s.ServiceAnalytics._queuedCommands[0].params), s.ServiceAnalytics._queuedCommands.shift()
    };
    s.ServiceAnalytics.start = function() {};
    s.ServiceAnalytics.sendUserInfo = function() {
        s.ServiceAnalytics.sendPlaynomicsEvent("pnUserInfo", ["update", null,
            null, "", "", "html5"
        ])
    };
    s.ServiceAnalytics.sendMilestone = function(a) {
        s.ServiceAnalytics.sendPlaynomicsEvent("pnMilestone", [r.string(Math.floor(6012 + 999999999 * Math.random())), a])
    };
    s.ServiceAnalytics.sendPlaynomicsEvent = function(a, b) {
        if (s.ServiceAnalytics.OPTION_ENABLE_TRACKING && s.ServiceAnalytics._flagInitted)
            if (s.ServiceAnalytics._flagLoaded) {
                f.WorkinCloud.instance.log("[ServiceAnalytics](sendPlaynomicsEvent) " + a);
                //var c, d = "";
                //for (c = 0; c < b.length;) d += "'" + b[c] + "'", c++, c < b.length && (d += ",");
                //eval(a + "(" + d +
                //   ")")
            } else s.ServiceAnalytics._queuedCommands.push({
                method: a,
                params: b
            })
    };
    s.ServiceAnalytics._generateSessionID = function() {
        for (var a = "", b = 11; - 1 < b;) a += Math.floor(10 * Math.random()), b--;
        s.ServiceAnalytics._sessionId = a
    };
    s.ServiceAnalytics._generateOfflineIDs = function() {
        s.ServiceAnalytics._offlineUserId = "";
        s.ServiceAnalytics._offlineTrackingId = "";
        for (var a = 15; - 1 < a;) {
            if (0.66 > Math.random()) s.ServiceAnalytics._offlineUserId += r.string(Math.floor(10 * Math.random()));
            else switch (Math.floor(10 * Math.random())) {
                case 0:
                    s.ServiceAnalytics._offlineUserId +=
                        "a";
                    break;
                case 1:
                    s.ServiceAnalytics._offlineUserId += "b";
                    break;
                case 2:
                    s.ServiceAnalytics._offlineUserId += "c";
                    break;
                case 3:
                    s.ServiceAnalytics._offlineUserId += "d";
                    break;
                case 4:
                    s.ServiceAnalytics._offlineUserId += "e";
                    break;
                case 5:
                    s.ServiceAnalytics._offlineUserId += "f";
                    break;
                case 6:
                    s.ServiceAnalytics._offlineUserId += "g";
                    break;
                case 7:
                    s.ServiceAnalytics._offlineUserId += "h";
                    break;
                case 8:
                    s.ServiceAnalytics._offlineUserId += "i";
                    break;
                case 9:
                    s.ServiceAnalytics._offlineUserId += "j";
                    break;
                default:
                    s.ServiceAnalytics._offlineUserId +=
                        "z"
            }
            a--
        }
        s.ServiceAnalytics._offlineTrackingId = "";
        for (a = 15; - 1 < a;) s.ServiceAnalytics._offlineTrackingId += Math.floor(10 * Math.random()), a--
    };
    s.ServiceAnalytics.prototype = {
        __class__: s.ServiceAnalytics
    };
    f = {
        JSEmbedProxy: function() {}
    };
    i["com.workinman.utils.JSEmbedProxy"] = f.JSEmbedProxy;
    f.JSEmbedProxy.__name__ = ["com", "workinman", "utils", "JSEmbedProxy"];
    f.JSEmbedProxy.alertOn = function(a) {
        f.JSEmbedProxy.callJSEmbedMethod("addAlert('" + a + "', '')")
    };
    f.JSEmbedProxy.alertOff = function() {
        f.JSEmbedProxy.callJSEmbedMethod("removeAlert('')")
    };
    f.JSEmbedProxy.getExists = function() {
        return f.JSEmbedProxy.callJSEmbedMethod("exists()")
    };
    f.JSEmbedProxy.getParameters = function() {
        return f.JSEmbedProxy.callJSEmbedMethod("params()")
    };
    f.JSEmbedProxy.getAttributes = function() {
        return f.JSEmbedProxy.callJSEmbedMethod("attr()")
    };
    f.JSEmbedProxy.getBase = function() {
        return f.JSEmbedProxy.callJSEmbedMethod("baseUrl()")
    };
    f.JSEmbedProxy.getCanvasScale = function() {
        return r.parseFloat(f.JSEmbedProxy.callJSEmbedMethod("canvasScale()"))
    };
    f.JSEmbedProxy.getCanvasWidth =
        function() {
            return r.parseFloat(f.JSEmbedProxy.callJSEmbedMethod("canvasWidth()"))
        };
    f.JSEmbedProxy.getCanvasHeight = function() {
        return r.parseFloat(f.JSEmbedProxy.callJSEmbedMethod("canvasHeight()"))
    };
    f.JSEmbedProxy.getIsPaused = function() {
        return f.JSEmbedProxy.callJSEmbedMethod("isPaused()")
    };
    f.JSEmbedProxy.pause = function() {
        f.JSEmbedProxy.callJSEmbedMethod("pause()")
    };
    f.JSEmbedProxy.unpause = function() {
        f.JSEmbedProxy.callJSEmbedMethod("unpause()")
    };
    f.JSEmbedProxy.callJSEmbedMethod = function(a) {
        try {
            var b =
                eval("jsembed." + a);
            return null == b ? "" : b
        } catch (c) {}
        return ""
    };
    f.JSEmbedProxy.prototype = {
        __class__: f.JSEmbedProxy
    };
    f.WMAssetManager = function() {
        this._LOADING_CHANCES = 3;
        this._baseUrl = "";
        this._assets = new I;
        this._defs = new I;
        this._flump = new I;
        this._packs = new I;
        this._chunks = new I;
        this._packsLoaded = this._packsMax = this._loadingChances = 0
    };
    i["com.workinman.utils.WMAssetManager"] = f.WMAssetManager;
    f.WMAssetManager.__name__ = ["com", "workinman", "utils", "WMAssetManager"];
    f.WMAssetManager.prototype = {
        getFont: function(a) {
            return !1 ==
                this._assets.exists(a) ? (f.WorkinCloud.instance.log("[WMAssetManager](getFont) no asset named " + a + " exists! Returning null."), null) : new j.Font(this._assets.get(a)._getPack(), a)
        },
        getLibrary: function(a) {
            return !1 == this._flump.exists(a) ? (f.WorkinCloud.instance.log("[WMAssetManager](getLibrary) no library named " + a + " exists! Is it defined in config.xml?"), null) : this._flump.get(a)
        },
        getSound: function(a) {
            return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log("[AssetManager](getSound) no asset named " +
                a + " exists! Returning null."), null) : this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData() : this._assets.get(a)._getPack().getSound(this._assets.get(a)._getPath(), !0)
        },
        getXML: function(a) {
            if (!1 == this._assets.exists(a)) return f.WorkinCloud.instance.log("[WMAssetManager](getXML) no asset named " + a + " exists! Returning null."), null;
            a = u.parse(this.getFile(a));
            return new C.Fast(a.firstElement())
        },
        getFile: function(a) {
            return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log("[WMAssetManager](getFile) no asset named " +
                a + " exists! Returning empty string."), "") : this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData() : this._assets.get(a)._getPack().getFile(this._assets.get(a)._getPath(), !0)
        },
        getTexture: function(a) {
            a = a.split(".")[0];
            return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log("[WMAssetManager](getTexture) no asset named " + a + " exists! Returning null."), null) : !0 == this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData() : this._assets.get(a)._getPack().getTexture(this._assets.get(a)._getPath(),
                !0)
        },
        hasAsset: function(a) {
            return this._assets.exists(a)
        },
        _parseSpritesheet: function(a) {
            for (var b = this.getXML(a + ".xml"), a = this.getTexture(a), c = "", d = new J.Rectangle(0, 0, 0, 0), e, b = b.nodes.resolve("SubTexture").iterator(); b.hasNext();) e = b.next(), c = e.att.resolve("name").toString(), d.x = r.parseFloat(e.att.resolve("x").toString()), d.y = r.parseFloat(e.att.resolve("y").toString()), d.width = r.parseFloat(e.att.resolve("width").toString()), d.height = r.parseFloat(e.att.resolve("height").toString()), e = E.createTexture(d.width |
                0, d.height | 0), e.get_graphics().drawSubImage(a, 0, 0, d.x | 0, d.y | 0, d.width | 0, d.height | 0), this.addConstructedAsset(c, e)
        },
        _onAllLoadComplete: function() {
            f.WorkinCloud.instance.log("[WMAssetManager](_onAllLoadComplete) all packs loaded!");
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEvent(R.ConstantsCloud.EVENT_FILES_LOADED))
        },
        addConstructedAsset: function(a, b) {
            new f._WMAssetManager.AssetDef(a, this._assets, b)
        },
        addPack: function(a) {
            for (var b = A.iter(a.get_manifest()._entries); b.hasNext();) {
                var c =
                    b.next();
                new f._WMAssetManager.AssetDef(c.name, this._assets, a)
            }
        },
        isPackLoaded: function(a) {
            return this._packs.exists(a)
        },
        loadPack: function(a, b, c) {
            null == c && (c = !0);
            null == b && (b = "");
            var d = this;
            !1 == this._defs.exists(a) && f.WorkinCloud.instance.log("[WMAssetManager](loadPack) Can't load pack " + a + " , define the pack in config.xml.");
            f.WorkinCloud.instance.log("[WMAssetManager](loadPack) " + a);
            c && (this._loadingChances = this._LOADING_CHANCES, this._packsMax++);
            c = y.Manifest.build(a);
            "" != this._baseUrl && c.set_relativeBasePath(this._baseUrl);
            c = E._platform.loadAssetPack(c);
            c.error.connect(function(c) {
                f.WorkinCloud.instance.log("[WMAssetManager](_onLoadingError) Loading failed with error: " + c);
                d._loadingChances--;
                0 <= d._loadingChances ? U.delay(function() {
                    f.WorkinCloud.instance.log("[WMAssetManager](_onLoadingError) Retrying. With " + d._loadingChances + " more chances.");
                    d.loadPack(a, b, !1)
                }, 500) : f.WorkinCloud.instance.log("[WMAssetManager](_onLoadingError) Loading attempts timed out.")
            });
            c.get(function(b) {
                d.addPack(b);
                d._packsLoaded++;
                for (var c =
                        0, e = d._defs.get(a)._getFlump(); c < e.length;) {
                    var f = e[c];
                    ++c;
                    d._flump.set(f, new v.Library(b, f))
                }
                c = 0;
                for (e = d._defs.get(a)._getTiles(); c < e.length;) f = e[c], ++c, d._parseSpritesheet(f);
                d._packs.set(a, b);
                d._packsLoaded >= d._packsMax && d._onAllLoadComplete()
            })
        },
        addPackDef: function(a, b, c) {
            null == b && (b = []);
            null == c && (c = []);
            this._defs.set(a, new f._WMAssetManager.PackDef(a, b, c))
        },
        _parseChunk: function(a, b) {
            for (var c = [], d = [], e = b.nodes.resolve("chunk").iterator(); e.hasNext();) {
                var g = e.next();
                c.push(g.getInnerData().toString())
            }
            for (e =
                b.nodes.resolve("pack").iterator(); e.hasNext();) g = e.next(), d.push(g.getInnerData().toString());
            return new f._WMAssetManager.ChunkDef(a, d, c)
        },
        loadFolder: function(a) {
            f.WorkinCloud.instance.log("[WMAssetManager](loadFolder) " + a);
            this.isPackLoaded(a) || (this.addPackDef(a), this.loadPack(a))
        },
        loadChunk: function(a) {
            !1 == this._chunks.exists(a) && f.WorkinCloud.instance.log("[WMAssetManager](loadChunk) No chunk named " + a + " defined.");
            for (var b = 0, c = this._chunks.get(a)._getChunks(); b < c.length;) {
                var d = c[b];
                ++b;
                this.loadChunk(d)
            }
            b =
                0;
            for (c = this._chunks.get(a)._getPacks(); b < c.length;) d = c[b], ++b, !1 == this.isPackLoaded(d) && this.loadPack(d)
        },
        addChunk: function(a, b) {
            var c = this._parseChunk(a, b);
            this._chunks.set(a, c)
        },
        _setBaseUrl: function(a) {
            this._baseUrl = a;
            f.WorkinCloud.instance.log("[WMAssetManager](setBaseUrl) Base Url set to '" + a + "'");
            return this._baseUrl
        },
        _getBaseUrl: function() {
            return this._baseUrl
        },
        __class__: f.WMAssetManager
    };
    f._WMAssetManager = {};
    f._WMAssetManager.AssetDef = function(a, b, c) {
        this._path = a;
        a = a.split("/");
        this._id = a[a.length -
            1].split(".")[0];
        this._constructed = !1;
        this._data = this._pack = null;
        G.__instanceof(c, y.AssetPack) ? this._pack = c : (this._constructed = !0, this._data = c);
        this._hash = b;
        this._hash.set(this._path, this);
        this._hash.set(this._id, this)
    };
    i["com.workinman.utils._WMAssetManager.AssetDef"] = f._WMAssetManager.AssetDef;
    f._WMAssetManager.AssetDef.__name__ = ["com", "workinman", "utils", "_WMAssetManager", "AssetDef"];
    f._WMAssetManager.AssetDef.prototype = {
        _getPack: function() {
            return this._pack
        },
        _getPath: function() {
            return this._path
        },
        _getData: function() {
            return this._data
        },
        _getConstructed: function() {
            return this._constructed
        },
        __class__: f._WMAssetManager.AssetDef
    };
    f._WMAssetManager.PackDef = function(a, b, c) {
        this._id = a;
        this._flump = b;
        this._tiles = c
    };
    i["com.workinman.utils._WMAssetManager.PackDef"] = f._WMAssetManager.PackDef;
    f._WMAssetManager.PackDef.__name__ = ["com", "workinman", "utils", "_WMAssetManager", "PackDef"];
    f._WMAssetManager.PackDef.prototype = {
        _getTiles: function() {
            return this._tiles
        },
        _getFlump: function() {
            return this._flump
        },
        __class__: f._WMAssetManager.PackDef
    };
    f._WMAssetManager.ChunkDef = function(a, b, c) {
        this._id = a;
        this._packs = b;
        this._chunks = c
    };
    i["com.workinman.utils._WMAssetManager.ChunkDef"] = f._WMAssetManager.ChunkDef;
    f._WMAssetManager.ChunkDef.__name__ = ["com", "workinman", "utils", "_WMAssetManager", "ChunkDef"];
    f._WMAssetManager.ChunkDef.prototype = {
        _getChunks: function() {
            return this._chunks
        },
        _getPacks: function() {
            return this._packs
        },
        __class__: f._WMAssetManager.ChunkDef
    };
    f.WMInput = function() {
        this._keycodes = new I;
        this._keydown = new I;
        this._keydown.set("input_click",
            !1);
        this._scale = 1;
        this._pointer = new f.WMPointer;
        this._offset = new h.WorkinPoint
    };
    i["com.workinman.utils.WMInput"] = f.WMInput;
    f.WMInput.__name__ = ["com", "workinman", "utils", "WMInput"];
    f.WMInput.prototype = {
        _onPointerUp: function(a) {
            this._keydown.set("input_click", !1);
            var b = a.viewX / this._scale,
                a = a.viewY / this._scale,
                b = b + this._offset.x,
                a = a + this._offset.y;
            this._pointer.end(b, a);
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventInput(0, "input_click", b, a))
        },
        _onPointerMove: function(a) {
            var b = a.viewX /
                this._scale,
                a = a.viewY / this._scale,
                b = b + this._offset.x,
                a = a + this._offset.y;
            this._pointer.move(b, a);
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventInput(2, "input_click", b, a))
        },
        _onPointerDown: function(a) {
            this._keydown.set("input_click", !0);
            var b = a.viewX / this._scale,
                a = a.viewY / this._scale,
                b = b + this._offset.x,
                a = a + this._offset.y;
            this._pointer.begin(b, a);
            f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventInput(1, "input_click", b, a))
        },
        _onKeyUp: function(a) {
            for (var b, c = this._keycodes.keys(); c.hasNext();) {
                var d =
                    c.next();
                b = this._keycodes.get(d);
                for (var e = 0; e < b.length;) {
                    var g = b[e];
                    ++e;
                    g == a.key && (this._keydown.set(d, !1), f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventInput(0, d, 0, 0)))
                }
            }
        },
        _onKeyDown: function(a) {
            for (var b, c = this._keycodes.keys(); c.hasNext();) {
                var d = c.next();
                b = this._keycodes.get(d);
                for (var e = 0; e < b.length;) {
                    var g = b[e];
                    ++e;
                    g == a.key && (this._keydown.set(d, !0), f.WorkinCloud.instance.getDispatcher().dispatchEvent(new n.WMEventInput(1, d, 0, 0)))
                }
            }
        },
        getInput: function(a) {
            return this._keydown.get(a)
        },
        registerInput: function(a, b) {
            this._keycodes.set(a, b);
            this._keydown.set(a, !1)
        },
        prime: function() {
            E._platform.getKeyboard().down.connect(B(this, this._onKeyDown));
            E._platform.getKeyboard().up.connect(B(this, this._onKeyUp));
            E._platform.getPointer().down.connect(B(this, this._onPointerDown));
            E._platform.getPointer().move.connect(B(this, this._onPointerMove));
            E._platform.getPointer().up.connect(B(this, this._onPointerUp))
        },
        _getPointer: function() {
            return this._pointer
        },
        _setOffset: function(a) {
            return this._offset =
                a
        },
        _getOffset: function() {
            return this._offset
        },
        _setScale: function(a) {
            this._scale = a;
            0 == this._scale && (this._scale = 0.01);
            return this._scale
        },
        _getScale: function() {
            return this._scale
        },
        update: function(a) {
            this._pointer.update(a)
        },
        __class__: f.WMInput
    };
    f.WMPointer = function() {
        this.SWIPE_DOWN = 4;
        this.SWIPE_UP = 3;
        this.SWIPE_RIGHT = 2;
        this.SWIPE_LEFT = 1;
        this.SWIPE_NONE = 0;
        this._resetDeltaLine = !0;
        this._timer = f.WMPointer._DELTA_TIMEOUT;
        this._origin = new h.WorkinPoint(0, 0);
        this._current = new h.WorkinPoint(0, 0);
        this._last =
            new h.WorkinPoint(0, 0);
        this._delta = new h.WorkinPoint(0, 0);
        this._line = new h.WorkinLine(new h.WorkinPoint(0, 0), new h.WorkinPoint(0, 0));
        this._deltaLine = this._line.copy();
        this._camera = new h.WorkinCamera(0, 0);
        this._phase = n.WMEventInput.PHASE_UP;
        this._swipe = this.SWIPE_NONE;
        this._consumed = !1
    };
    i["com.workinman.utils.WMPointer"] = f.WMPointer;
    f.WMPointer.__name__ = ["com", "workinman", "utils", "WMPointer"];
    f.WMPointer.prototype = {
        update: function(a) {
            this._resetDeltaLine = !0;
            this._timer -= a;
            0 > this._timer && (this._timer =
                f.WMPointer._DELTA_TIMEOUT, this._deltaLine._getP0().toPoint(this._current))
        },
        _updateInfo: function(a, b) {
            this._last.toPoint(this._current);
            this._current.to(a, b);
            this._current.x += this._camera._getPos().x - this._camera._getScreenCenterX();
            this._current.y += this._camera._getPos().y - this._camera._getScreenCenterY();
            this._delta.toPoint(this._current);
            this._delta.subtractPoint(this._last)
        },
        end: function(a, b) {
            this._phase = n.WMEventInput.PHASE_UP;
            this._updateInfo(a, b);
            this._line._getP1().toPoint(this._current);
            this._swipe = this.SWIPE_NONE;
            this._consumed = !1
        },
        move: function(a, b) {
            this._updateInfo(a, b);
            if (!1 != f.WorkinCloud.instance.getInput().getInput("input_click")) {
                this._phase = n.WMEventInput.PHASE_MOVE;
                if (!1 == this._consumed) {
                    var c = this._origin.x - this._current.x,
                        d = this._origin.y - this._current.y;
                    this._swipe = Math.abs(c) >= f.WMPointer._DELTA_ALLOWANCE && Math.abs(d) < f.WMPointer._DELTA_ALLOWANCE ? 0 < c ? this.SWIPE_LEFT : this.SWIPE_RIGHT : Math.abs(d) >= f.WMPointer._DELTA_ALLOWANCE && Math.abs(c) < f.WMPointer._DELTA_ALLOWANCE ?
                        0 < d ? this.SWIPE_UP : this.SWIPE_DOWN : this.SWIPE_NONE
                } else this._swipe = this.SWIPE_NONE;
                this._line._getP1().toPoint(this._current)
            }
        },
        begin: function(a, b) {
            this._origin.to(a, b);
            this._origin.x += this._camera._getPos().x - this._camera._getScreenCenterX();
            this._origin.y += this._camera._getPos().y - this._camera._getScreenCenterY();
            this._current.toPoint(this._origin);
            this._last.toPoint(this._origin);
            this._delta.to(0, 0);
            this._line.to(this._origin, this._current);
            this._deltaLine.toFloats(0, 0, 0, 0);
            this._consumed = !1;
            this._phase =
                n.WMEventInput.PHASE_DOWN;
            this._swipe = this.SWIPE_NONE
        },
        _getDeltaLine: function() {
            if (!1 == this._resetDeltaLine) return this._deltaLine;
            this._deltaLine._getP1().toPoint(this._current);
            this._resetDeltaLine = !1;
            return this._deltaLine
        },
        _setConsumed: function(a) {
            return this._consumed = a
        },
        _getConsumed: function() {
            return this._consumed
        },
        _getSwipe: function() {
            return this._swipe
        },
        _getLine: function() {
            return this._line
        },
        _getDeltaPos: function() {
            return this._delta
        },
        _getLastPos: function() {
            return this._last
        },
        _getCurrentPos: function() {
            return this._current
        },
        _getOriginPos: function() {
            return this._origin
        },
        _getPhase: function() {
            return this._phase
        },
        __class__: f.WMPointer
    };
    f.WMLocalize = function() {};
    i["com.workinman.utils.WMLocalize"] = f.WMLocalize;
    f.WMLocalize.__name__ = ["com", "workinman", "utils", "WMLocalize"];
    f.WMLocalize.prototype = {
        getData: function(a, b) {
            null == b && (b = "");
            "" == b && (b = R.ConstantsCloud.LOCALIZATION_XML_PATH + "translation_" + f.WorkinCloud.instance.getString(R.ConstantsCloud.STRING_REGION_ID) + ".xml");
            for (var c = f.WorkinCloud.instance.getAssets().getXML(b).nodes.resolve("string").iterator(); c.hasNext();) {
                var d =
                    c.next();
                if (d.att.resolve("id") == a) return new f.WMLocalizedData(d.att.resolve("id"), d.getInnerData(), d.att.resolve("fontName"), r.parseFloat(d.att.resolve("fontScale")), r.parseFloat(d.att.resolve("offsetX")), r.parseFloat(d.att.resolve("offsetX")))
            }
            f.WorkinCloud.instance.log("[WMLocalize] ERROR: No localization data for : " + a);
            return new f.WMLocalizedData(a, "", "", 1, 0, 0)
        },
        __class__: f.WMLocalize
    };
    f.WMLocalizedData = function(a, b, c, d, e, f) {
        this._id = a;
        this._string = b;
        this._fontName = c;
        this._scale = d;
        this._offsetX =
            e;
        this._offsetY = f
    };
    i["com.workinman.utils.WMLocalizedData"] = f.WMLocalizedData;
    f.WMLocalizedData.__name__ = ["com", "workinman", "utils", "WMLocalizedData"];
    f.WMLocalizedData.prototype = {
        _getOffsetY: function() {
            return this._offsetY
        },
        _getOffsetX: function() {
            return this._offsetX
        },
        _getScale: function() {
            return this._scale
        },
        _getFontName: function() {
            return this._fontName
        },
        _getString: function() {
            return this._string
        },
        _getId: function() {
            return this._id
        },
        __class__: f.WMLocalizedData
    };
    f.WMSound = function() {
        this._musicId = "";
        this._musicGain = 1;
        this._musicPlaying = null;
        this._isMuted = !1;
        this._mixer = new H.Mixer;
        this._sounds = []
    };
    i["com.workinman.utils.WMSound"] = f.WMSound;
    f.WMSound.__name__ = ["com", "workinman", "utils", "WMSound"];
    f.WMSound.prototype = {
        update: function() {},
        _muteMusic: function(a) {
            "" != this._musicId && (a ? this._musicPlaying = null : (this._musicPlaying = a = new f._WMSound.SoundDef(this._musicId, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(this._musicId), 1), !0), a.playSound(this._musicGain)))
        },
        playMusic: function(a,
            b) {
            null == b && (b = 1);
            if (this._musicId != a && (this._musicId = a, this._musicGain = b, !(this._isMuted || "" == a))) {
                null != this._musicPlaying && this._musicPlaying.dispose();
                var c = new f._WMSound.SoundDef(a, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(this._musicId), 1), !0);
                this._musicPlaying = c;
                c.playSound(b)
            }
        },
        playSound: function(a, b) {
            null == b && (b = 1);
            if (!this._isMuted) {
                for (var c = 0; c < this._sounds.length;) {
                    if (this._sounds[c].id == a) {
                        this._sounds[c].playSound(b);
                        return
                    }
                    c++
                }
                c = new f._WMSound.SoundDef(a, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(a),
                    4), !1);
                this._sounds.push(c);
                c.playSound(b)
            }
        },
        setMute: function(a) {
            if (a && !1 == this._isMuted) {
                this._isMuted = !0;
                for (this._mixer.stopAll(); 0 < this._sounds.length;) this._sounds.splice(0, 1);
                this._muteMusic(this._isMuted)
            } else !1 == a && this._isMuted && (this._isMuted = !1, this._muteMusic(this._isMuted))
        },
        __class__: f.WMSound
    };
    f._WMSound = {};
    f._WMSound.SoundDef = function(a, b, c) {
        null == c && (c = !1);
        this.id = a;
        this.isMusic = c;
        this._flagPlayed = this._flagHasSound = !1;
        this._sound = b
    };
    i["com.workinman.utils._WMSound.SoundDef"] = f._WMSound.SoundDef;
    f._WMSound.SoundDef.__name__ = ["com", "workinman", "utils", "_WMSound", "SoundDef"];
    f._WMSound.SoundDef.prototype = {
        playSound: function(a) {
            null == a && (a = 1);
            this._playback = this.isMusic ? this._sound.loop(a) : this._sound.play(a)
        },
        _setPlayback: function(a) {
            return this._playback = a
        },
        _getPlayback: function() {
            return this._playback
        },
        dispose: function() {
            this._playback.dispose();
            this._playback = null
        },
        __class__: f._WMSound.SoundDef
    };
    H = {
        Mixer: function() {
            this._sounds = []
        }
    };
    i["flambe.sound.Mixer"] = H.Mixer;
    H.Mixer.__name__ = ["flambe",
        "sound", "Mixer"
    ];
    H.Mixer.__super__ = N;
    H.Mixer.prototype = w(N.prototype, {
        onRemoved: function() {
            this.stopAll();
            this._sounds = []
        },
        stopAll: function() {
            for (var a = 0, b = this._sounds; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
        },
        newSound: function(a, b) {
            null == b && (b = 2147483647);
            var c = new H._Mixer.MixerSound(a, b);
            this._sounds.push(c);
            return c
        },
        get_name: function() {
            return "Mixer_2"
        },
        __class__: H.Mixer
    });
    f.WorkinCloud = function() {
        this._values = new I;
        this._defaults = new I;
        this._dispatcher = new n.WMEventDispatcher;
        this._input = new f.WMInput;
        this._assets = new f.WMAssetManager;
        this._sound = new f.WMSound;
        this._localize = new f.WMLocalize
    };
    i["com.workinman.utils.WorkinCloud"] = f.WorkinCloud;
    f.WorkinCloud.__name__ = ["com", "workinman", "utils", "WorkinCloud"];
    f.WorkinCloud.prototype = {
        _updateDisplays: function(a) {
            this._dispatcher.dispatchEvent(new n.WMEventData(q.Display.EVENT_UPDATE_DISPLAY, {
                valueID: a
            }))
        },
        sharedObjectSetData: function(a, b) {
            var c = Q.WMSharedObject.getLocal(a);
            c._setData(b);
            c.flush();
            c.dispose()
        },
        sharedObjectGetData: function(a) {
            var a =
                Q.WMSharedObject.getLocal(a),
                b = a._getData();
            a.dispose();
            return b
        },
        resetValue: function(a) {
            this._values.set(a, this._defaults.get(a));
            this._updateDisplays(a)
        },
        modifyValue: function(a, b) {
            null == b && (b = 1);
            this._values.set(a, this.getFloat(a) + b);
            this._updateDisplays(a);
            return this.getFloat(a)
        },
        setValue: function(a, b) {
            this._values.set(a, b);
            !1 == this._defaults.exists(a) && this.setDefault(a, b);
            this._updateDisplays(a)
        },
        getValue: function(a) {
            return this._values.get(a)
        },
        setDefault: function(a, b) {
            this._defaults.set(a,
                b);
            this.resetValue(a)
        },
        getString: function(a) {
            return this._values.get(a)
        },
        setString: function(a, b) {
            this.setValue(a, b)
        },
        getInt: function(a) {
            return this._values.get(a)
        },
        setInt: function(a, b) {
            this.setValue(a, b)
        },
        getFloat: function(a) {
            return this._values.get(a)
        },
        setFloat: function(a, b) {
            this.setValue(a, b)
        },
        getBool: function(a) {
            return this._values.get(a)
        },
        setBool: function(a, b) {
            this.setValue(a, b)
        },
        _getLocalize: function() {
            return this._localize
        },
        _getSound: function() {
            return this._sound
        },
        getAssets: function() {
            return this._assets
        },
        getInput: function() {
            return this._input
        },
        getDispatcher: function() {
            return this._dispatcher
        },
        log: function() {
            null
        },
        __class__: f.WorkinCloud
    };
    f.WorkinUtils = function() {};
    i["com.workinman.utils.WorkinUtils"] = f.WorkinUtils;
    f.WorkinUtils.__name__ = ["com", "workinman", "utils", "WorkinUtils"];
    f.WorkinUtils.getRandom = function(a, b, c) {
        null == c && (c = !0);
        var d = Math.random();
        1 == d && (d = 0.99);
        return c ? a + Math.floor(d * (b + 1 - a)) : a + d * (b - a)
    };
    f.WorkinUtils.absMod = function(a, b) {
        return a - Math.floor(a / b) * b
    };
    M = function() {
        this.parent =
            this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    i["flambe.Entity"] = M;
    M.__name__ = ["flambe", "Entity"];
    M.__interfaces__ = [m.Disposable];
    M.prototype = {
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren();
            this.onDispose()
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        onDispose: function() {},
        onRemoved: function() {},
        onAdded: function() {},
        removeChild: function(a) {
            for (var b =
                    null, c = this.firstChild; null != c;) {
                var d = c.next;
                if (c == a) {
                    c.onRemoved();
                    null == b ? this.firstChild = d : b.next = d;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = d
            }
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, d = this.firstChild; null != d;) c = d, d = d.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var d = c.next;
                if (c == a) {
                    null == b ?
                        this.firstComponent = d : b._internal_init(this, d);
                    delete this._compMap[c.get_name()];
                    c.onRemoved();
                    c._internal_init(null, null);
                    break
                }
                b = c;
                c = d
            }
        },
        add: function(a) {
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a._internal_init(this, null);
            a.onAdded();
            return this
        },
        __class__: M
    };
    m.PackageLog = function() {};
    i["flambe.util.PackageLog"] = m.PackageLog;
    m.PackageLog.__name__ = ["flambe", "util",
        "PackageLog"
    ];
    e = {
        Platform: function() {}
    };
    i["flambe.platform.Platform"] = e.Platform;
    e.Platform.__name__ = ["flambe", "platform", "Platform"];
    e.Platform.prototype = {
        __class__: e.Platform
    };
    e.html = {};
    e.html.HtmlPlatform = function() {};
    i["flambe.platform.html.HtmlPlatform"] = e.html.HtmlPlatform;
    e.html.HtmlPlatform.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    e.html.HtmlPlatform.__interfaces__ = [e.Platform];
    e.html.HtmlPlatform.prototype = {
        getY: function(a, b) {
            return this._stage.scaleFactor * (a.clientY - b.top)
        },
        getX: function(a, b) {
            return this._stage.scaleFactor * (a.clientX - b.left)
        },
        getTempGraphics: function() {
            return this._tempGraphics
        },
        getTempCanvas: function() {
            return this._tempCanvas
        },
        getRenderer: function() {
            return this._renderer
        },
        getExternal: function() {
            null == this._external && (this._external = new e.html.HtmlExternal);
            return this._external
        },
        getWeb: function() {
            null == this._web && (this._web = new e.html.HtmlWeb(this._container));
            return this._web
        },
        getKeyboard: function() {
            return this._keyboard
        },
        getTouch: function() {
            return this._touch
        },
        getMouse: function() {
            return this._mouse
        },
        getPointer: function() {
            return this._pointer
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer))
        },
        getTime: function() {
            return Date.now() / 1E3
        },
        createLogHandler: function() {
            return null
        },
        getLocale: function() {
            return x.window.navigator.language
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = null;
                try {
                    a = x.window.localStorage
                } catch (b) {}
                this._storage =
                    null != a ? new e.html.HtmlStorage(a) : new e.DummyStorage
            }
            return this._storage
        },
        getStage: function() {
            return this._stage
        },
        loadAssetPack: function(a) {
            return (new e.html.HtmlAssetPackLoader(this, a)).promise
        },
        init: function() {
            var a = this,
                b = null;
            try {
                b = x.window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.setAttribute("moz-opaque", "true");
            this._stage = new e.html.HtmlStage(b);
            this._pointer = new e.BasicPointer;
            this._mouse = new e.html.HtmlMouse(this._pointer, b);
            this._keyboard = new e.BasicKeyboard;
            this._tempCanvas = e.html.HtmlUtil.createCanvas(b);
            this._tempGraphics = new e.html.CanvasGraphics(this._tempCanvas);
            this._renderer = new e.html.CanvasRenderer(b);
            E.hasGPU.set__(!0);
            this.mainLoop = new e.MainLoop;
            this._container = b.parentNode;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var d = 0,
                f = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var e = b.getBoundingClientRect(),
                            f = a.getX(c, e),
                            e = a.getY(c, e);
                        switch (c.type) {
                            case "mousedown":
                                c.target ==
                                    b && (c.preventDefault(), a._mouse.submitDown(f, e, c.button), c.target.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(f, e);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(f, e, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(f, e, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", f, !1);
            window.addEventListener("mousemove", f, !1);
            window.addEventListener("mouseup", f, !1);
            b.addEventListener("mousewheel", f, !1);
            b.addEventListener("DOMMouseScroll",
                f, !1);
            if ("ontouchstart" in window) {
                var g = new e.BasicTouch(this._pointer);
                this._touch = g;
                f = function(b) {
                    var c = b.changedTouches,
                        f = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                            b.preventDefault();
                            e.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && e.html.HtmlUtil.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var h = c[b];
                                ++b;
                                var i = a.getX(h, f),
                                    fa = a.getY(h, f);
                                g.submitDown(h.identifier | 0, i, fa)
                            }
                            break;
                        case "touchmove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) h = c[b], ++b, i = a.getX(h, f), fa = a.getY(h,
                                f), g.submitMove(h.identifier | 0, i, fa);
                            break;
                        case "touchend":
                        case "touchcancel":
                            for (b = 0; b < c.length;) h = c[b], ++b, i = a.getX(h, f), fa = a.getY(h, f), g.submitUp(h.identifier | 0, i, fa)
                    }
                };
                b.addEventListener("touchstart", f, !1);
                b.addEventListener("touchmove", f, !1);
                b.addEventListener("touchend", f, !1);
                b.addEventListener("touchcancel", f, !1)
            } else this._touch = new e.DummyTouch;
            f = function(b) {
                switch (b.type) {
                    case "keydown":
                        a._keyboard.submitDown(b.keyCode) && b.preventDefault();
                        break;
                    case "keyup":
                        a._keyboard.submitUp(b.keyCode)
                }
            };
            b.addEventListener("keydown", f, !1);
            b.addEventListener("keyup", f, !1);
            var h = x.window.onerror;
            x.window.onerror = function(a, b, c) {
                E.uncaughtError.emit1(a);
                return null != h ? h(a, b, c) : !1
            };
            var i = e.html.HtmlUtil.loadExtension("hidden", x.document);
            null != i.value && (f = function() {
                E.hidden.set__(K.field(x.document, i.field))
            }, f(), x.document.addEventListener(i.prefix + "visibilitychange", f, !1), E.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            }));
            this._lastUpdate = Date.now();
            this._skipFrame = !1;
            var k = e.html.HtmlUtil.loadExtension("requestAnimationFrame").value;
            if (null != k) {
                var j = x.window.performance,
                    m = null != j && e.html.HtmlUtil.polyfill("now", j);
                m ? this._lastUpdate = j.now() : null;
                var n = null,
                    n = function(c) {
                        a.update(m ? j.now() : c);
                        k(n, b)
                    };
                k(n, b)
            } else x.window.setInterval(function() {
                a.update(Date.now())
            }, 1E3 / 60)
        },
        __class__: e.html.HtmlPlatform
    };
    m.Value = function(a, b) {
        this._value = a;
        null != b && (this._changed = new m.Signal2(b))
    };
    i["flambe.util.Value"] = m.Value;
    m.Value.__name__ = ["flambe", "util", "Value"];
    m.Value.prototype = {
        get_changed: function() {
            null == this._changed && (this._changed =
                new m.Signal2);
            return this._changed
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit2(a, b));
            return a
        },
        __class__: m.Value
    };
    m.SignalConnection = function(a, b) {
        this._internal_next = null;
        this._signal = a;
        this._internal_listener = b;
        this.stayInList = !0
    };
    i["flambe.util.SignalConnection"] = m.SignalConnection;
    m.SignalConnection.__name__ = ["flambe", "util", "SignalConnection"];
    m.SignalConnection.__interfaces__ = [m.Disposable];
    m.SignalConnection.prototype = {
        dispose: function() {
            null !=
                this._signal && (this._signal._internal_disconnect(this), this._signal = null)
        },
        once: function() {
            this.stayInList = !1;
            return this
        },
        __class__: m.SignalConnection
    };
    m.SignalBase = function(a) {
        this._head = null != a ? new m.SignalConnection(this, a) : null;
        this._deferredTasks = null
    };
    i["flambe.util.SignalBase"] = m.SignalBase;
    m.SignalBase.__name__ = ["flambe", "util", "SignalBase"];
    m.SignalBase.prototype = {
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._internal_next;
                    null == b ? this._head = a : b._internal_next =
                        a;
                    break
                }
                b = c;
                c = c._internal_next
            }
        },
        listAdd: function(a, b) {
            if (b) a._internal_next = this._head, this._head = a;
            else {
                for (var c = null, d = this._head; null != d;) c = d, d = d._internal_next;
                null != c ? c._internal_next = a : this._head = a
            }
        },
        didEmit: function(a) {
            for (this._head = a; null != this._deferredTasks;) this._deferredTasks.fn(), this._deferredTasks = this._deferredTasks.next
        },
        willEmit: function() {
            var a = this._head;
            this._head = m.SignalBase.DISPATCHING_SENTINEL;
            return a
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b =
                c, c = c.next;
            a = new m._SignalBase.Task(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        emit2: function(a, b) {
            for (var c = this.willEmit(), d = c; null != d;) d._internal_listener(a, b), d.stayInList || d.dispose(), d = d._internal_next;
            this.didEmit(c)
        },
        emit1: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._internal_listener(a), c.stayInList || c.dispose(), c = c._internal_next;
            this.didEmit(b)
        },
        emit0: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._internal_listener(), b.stayInList || b.dispose(), b = b._internal_next;
            this.didEmit(a)
        },
        _internal_disconnect: function(a) {
            var b = this;
            this._head == m.SignalBase.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        connectImpl: function(a, b) {
            var c = this,
                d = new m.SignalConnection(this, a);
            this._head == m.SignalBase.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(d, b)
            }) : this.listAdd(d, b);
            return d
        },
        __class__: m.SignalBase
    };
    m.Signal2 = function(a) {
        m.SignalBase.call(this, a)
    };
    i["flambe.util.Signal2"] = m.Signal2;
    m.Signal2.__name__ = ["flambe", "util", "Signal2"];
    m.Signal2.__super__ =
        m.SignalBase;
    m.Signal2.prototype = w(m.SignalBase.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        __class__: m.Signal2
    });
    m.Signal1 = function(a) {
        m.SignalBase.call(this, a)
    };
    i["flambe.util.Signal1"] = m.Signal1;
    m.Signal1.__name__ = ["flambe", "util", "Signal1"];
    m.Signal1.__super__ = m.SignalBase;
    m.Signal1.prototype = w(m.SignalBase.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        __class__: m.Signal1
    });
    E = function() {};
    i["flambe.System"] = E;
    E.__name__ = ["flambe",
        "System"
    ];
    E.init = function() {
        E._calledInit || (E._platform.init(), E._calledInit = !0)
    };
    E.createTexture = function(a, b) {
        return E._platform.getRenderer().createEmptyTexture(a, b)
    };
    m.Logger = function(a) {
        this._handler = a
    };
    i["flambe.util.Logger"] = m.Logger;
    m.Logger.__name__ = ["flambe", "util", "Logger"];
    m.Logger.prototype = {
        __class__: m.Logger
    };
    Z = function() {};
    i["flambe.Log"] = Z;
    Z.__name__ = ["flambe", "Log"];
    Z.__super__ = m.PackageLog;
    Z.prototype = w(m.PackageLog.prototype, {
        __class__: Z
    });
    z = function(a) {
        null == a && (a = 1);
        this._internal_realDt =
            0;
        this.scale = new F.AnimatedFloat(a)
    };
    i["flambe.SpeedAdjuster"] = z;
    z.__name__ = ["flambe", "SpeedAdjuster"];
    z.__super__ = N;
    z.prototype = w(N.prototype, {
        onUpdate: function(a) {
            0 < this._internal_realDt && (a = this._internal_realDt, this._internal_realDt = 0);
            this.scale.update(a)
        },
        get_name: function() {
            return "SpeedAdjuster_5"
        },
        __class__: z
    });
    F = {
        AnimatedFloat: function(a, b) {
            m.Value.call(this, a, b);
            this.behaviorComplete = new m.Signal0
        }
    };
    i["flambe.animation.AnimatedFloat"] = F.AnimatedFloat;
    F.AnimatedFloat.__name__ = ["flambe", "animation",
        "AnimatedFloat"
    ];
    F.AnimatedFloat.__super__ = m.Value;
    F.AnimatedFloat.prototype = w(m.Value.prototype, {
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        update: function(a) {
            null != this._behavior && (m.Value.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null, this.behaviorComplete.emit0()))
        },
        set__: function(a) {
            this._behavior = null;
            return m.Value.prototype.set__.call(this, a)
        },
        __class__: F.AnimatedFloat
    });
    F.Behavior = function() {};
    i["flambe.animation.Behavior"] =
        F.Behavior;
    F.Behavior.__name__ = ["flambe", "animation", "Behavior"];
    F.Behavior.prototype = {
        __class__: F.Behavior
    };
    F.Binding = function() {};
    i["flambe.animation.Binding"] = F.Binding;
    F.Binding.__name__ = ["flambe", "animation", "Binding"];
    F.Binding.__interfaces__ = [F.Behavior];
    F.Binding.prototype = {
        isComplete: function() {
            return !1
        },
        update: function() {
            var a = this._target._value;
            return null != this._fn ? this._fn(a) : a
        },
        __class__: F.Binding
    };
    y = {};
    y.AssetType = i["flambe.asset.AssetType"] = {
        __ename__: ["flambe", "asset", "AssetType"],
        __constructs__: ["Image", "Audio", "Data"]
    };
    y.AssetType.Image = ["Image", 0];
    y.AssetType.Image.toString = o;
    y.AssetType.Image.__enum__ = y.AssetType;
    y.AssetType.Audio = ["Audio", 1];
    y.AssetType.Audio.toString = o;
    y.AssetType.Audio.__enum__ = y.AssetType;
    y.AssetType.Data = ["Data", 2];
    y.AssetType.Data.toString = o;
    y.AssetType.Data.__enum__ = y.AssetType;
    y.AssetEntry = function(a, b, c, d) {
        this.name = a;
        this.url = b;
        this.type = c;
        this.bytes = d
    };
    i["flambe.asset.AssetEntry"] = y.AssetEntry;
    y.AssetEntry.__name__ = ["flambe", "asset", "AssetEntry"];
    y.AssetEntry.prototype = {
        getUrlExtension: function() {
            return m.Strings.getFileExtension(this.url.split("?")[0]).toLowerCase()
        },
        __class__: y.AssetEntry
    };
    y.AssetPack = function() {};
    i["flambe.asset.AssetPack"] = y.AssetPack;
    y.AssetPack.__name__ = ["flambe", "asset", "AssetPack"];
    y.AssetPack.prototype = {
        __class__: y.AssetPack
    };
    G = void 0;
    x = void 0;
    G = function() {};
    i["js.Boot"] = G;
    G.__name__ = ["js", "Boot"];
    G.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ ||
                a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, e = a.length; d < e;) var f = d++,
                            c = 2 != f ? c + ("," + G.__string_rec(a[f], b)) : c + G.__string_rec(a[f], b);
                        return c + ")"
                    }
                    d = a.length;
                    c = "[";
                    b += "\t";
                    for (e = 0; e < d;) f = e++, c += (0 < f ? "," : "") + G.__string_rec(a[f], b);
                    return c + "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                e = null;
                c = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                for (e in a)
                    if (!d || a.hasOwnProperty(e)) "prototype" == e || "__class__" == e || "__super__" == e || "__interfaces__" == e || "__properties__" == e || (2 != c.length && (c += ", \n"), c += b + e + " : " + G.__string_rec(a[e], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    G.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var f = d++,
                    f = c[f];
                if (f == b || G.__interfLoop(f, b)) return !0
            }
        return G.__interfLoop(a.__super__,
            b)
    };
    G.__instanceof = function(a, b) {
        try {
            if (a instanceof b) return b == Array ? null == a.__enum__ : !0;
            if (G.__interfLoop(a.__class__, b)) return !0
        } catch (c) {
            if (null == b) return !1
        }
        switch (b) {
            case ja:
                return Math.ceil(a % 2147483648) === a;
            case ha:
                return "number" == typeof a;
            case ia:
                return !0 === a || !1 === a;
            case String:
                return "string" == typeof a;
            case ka:
                return !0;
            default:
                if (null == a) return !1;
                if (b == la && null != a.__name__) return !0;
                null;
                if (b == ma && null != a.__ename__) return !0;
                null;
                return a.__enum__ == b
        }
    };
    G.__cast = function(a, b) {
        if (G.__instanceof(a,
                b)) return a;
        throw "Cannot cast " + r.string(a) + " to " + r.string(b);
    };
    m.Strings = function() {};
    i["flambe.util.Strings"] = m.Strings;
    m.Strings.__name__ = ["flambe", "util", "Strings"];
    m.Strings.getFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? A.substr(a, b + 1, null) : null
    };
    m.Strings.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? A.substr(a, 0, b) : a
    };
    m.Strings.joinPath = function(a, b) {
        47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    m.Strings.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = a + (0 < a.length ? " [" : "["), d = 0; d < c;) {
                0 < d && (a += ", ");
                var e = b[d],
                    f = b[d + 1];
                if (G.__instanceof(f, Error)) {
                    var g = f.stack;
                    null != g && (f = g)
                }
                a += e + "=" + r.string(f);
                d += 2
            }
            a += "]"
        }
        return a
    };
    x = function() {};
    i["js.Lib"] = x;
    x.__name__ = ["js", "Lib"];
    y.Manifest = function() {
        this._entries = []
    };
    i["flambe.asset.Manifest"] = y.Manifest;
    y.Manifest.__name__ = ["flambe", "asset", "Manifest"];
    y.Manifest.build = function(a, b) {
        null == b && (b = !0);
        var c = y.Manifest._buildManifest.get(a);
        if (null == c) {
            if (b) throw m.Strings.withFields("Missing asset pack",
                ["name", a]);
            return null
        }
        return c.clone()
    };
    y.Manifest.inferType = function(a) {
        a = m.Strings.getFileExtension(a.split("?")[0]);
        if (null != a) switch (a.toLowerCase()) {
            case "png":
            case "jpg":
            case "gif":
                return y.AssetType.Image;
            case "ogg":
            case "m4a":
            case "mp3":
            case "wav":
                return y.AssetType.Audio
        }
        return y.AssetType.Data
    };
    y.Manifest.createBuildManifests = function() {
        var a = new I;
        a.set("initial_load", [{
                name: "ui/splash/ScreenSplash.jpg",
                md5: "4ff358023e41bd096683602ba9fda049",
                bytes: 109420
            }, {
                name: "ui/splash/ButtonTapPlay.png",
                md5: "6655909c4c95284bae486c0335361cd7",
                bytes: 5438
            }, {
                name: "ui/splash/ButtonClickPlay.png",
                md5: "1e986da1c587e88bf487b3773ffe5422",
                bytes: 5885
            }, {
                name: "audio/NextLevel.ogg",
                md5: "04f05074bc61aaf2d8b7d721bd9b13dd",
                bytes: 17774
            }, {
                name: "audio/NextLevel.mp3",
                md5: "f459587225320fd8a6672015c5157463",
                bytes: 12537
            }, {
                name: "audio/Music.ogg",
                md5: "a85f466adc5e894b9bd8a799da2ab8eb",
                bytes: 630168
            }, {
                name: "audio/Music.mp3",
                md5: "7797f98062eab5dba3a498f57ce332b8",
                bytes: 521194
            }, {
                name: "audio/HitTargetFirst.ogg",
                md5: "bf0097e9ab11efcd09283061bc0ccb6a",
                bytes: 41509
            }, {
                name: "audio/HitTargetFirst.mp3",
                md5: "93d79fbe7371830ec3e292ef65389e6c",
                bytes: 35525
            }, {
                name: "audio/HitTarget.ogg",
                md5: "e54c763fb93a75f7879a9da22fefeceb",
                bytes: 17458
            }, {
                name: "audio/HitTarget.mp3",
                md5: "9dd2060eb07fe358ec58ec755819498b",
                bytes: 14209
            }, {
                name: "audio/HitSuitcase.ogg",
                md5: "b53b1706a77b2c91020b12be44b67223",
                bytes: 27035
            }, {
                name: "audio/HitSuitcase.mp3",
                md5: "a3d82274a0a6b0ce62ca479c55c2e91c",
                bytes: 22986
            }, {
                name: "audio/HitPointGold.ogg",
                md5: "16d4de7dc475fb9983d811e11c4d0b60",
                bytes: 31155
            },
            {
                name: "audio/HitPointGold.mp3",
                md5: "143cb990e962bbf22f962613b6e9b091",
                bytes: 25494
            }, {
                name: "audio/HitPoint3.ogg",
                md5: "c521a6d03f949078187bf3cd79770307",
                bytes: 17671
            }, {
                name: "audio/HitPoint3.mp3",
                md5: "908091eee728b5feb6119ffa3d3bb73b",
                bytes: 17135
            }, {
                name: "audio/HitPoint2.ogg",
                md5: "90f40fb0e39b9b6d067f4e358b10d9c1",
                bytes: 17026
            }, {
                name: "audio/HitPoint2.mp3",
                md5: "c105ff5d6332aada7df0c886e6d03551",
                bytes: 17135
            }, {
                name: "audio/HitPoint1.ogg",
                md5: "ff2ecb2f1336a0f4019fb1591a26204d",
                bytes: 18525
            }, {
                name: "audio/HitPoint1.mp3",
                md5: "18efa27718d5552ce3847b6a724ec5d1",
                bytes: 17135
            }, {
                name: "audio/HitCage.ogg",
                md5: "39e78d62f76087f488e6b88eda2a26f4",
                bytes: 19325
            }, {
                name: "audio/HitCage.mp3",
                md5: "23dc4d96ffbd58674ed6c1984b1a5d94",
                bytes: 15045
            }, {
                name: "audio/HitBomb.ogg",
                md5: "99939a357f42053744ac2c1ad9c0bf1c",
                bytes: 18933
            }, {
                name: "audio/HitBomb.mp3",
                md5: "bca812c3ead1eb78485d30acd2979811",
                bytes: 22986
            }, {
                name: "audio/HitBarrier.ogg",
                md5: "32329178619e402a81b281911baf692c",
                bytes: 8745
            }, {
                name: "audio/HitBarrier.mp3",
                md5: "b2675250d70713f3d1d6f07940e45931",
                bytes: 10448
            }, {
                name: "audio/DuckQuack.ogg",
                md5: "017c1dc379252681a8c52f7553992c32",
                bytes: 7564
            }, {
                name: "audio/DuckQuack.mp3",
                md5: "c4c9b35a03419d0346fdade4fdc9e8a7",
                bytes: 5850
            }, {
                name: "audio/DuckLaunch.ogg",
                md5: "7558a9ded49d07183a49405fae506f3b",
                bytes: 12092
            }, {
                name: "audio/DuckLaunch.mp3",
                md5: "112b751e72b1b8fc7b4bb0339d813bbb",
                bytes: 13373
            }
        ]);
        a.set("gameplay_universal", [{
            name: "ui/menu/ScreenQuitConfirm.png",
            md5: "4c9f31fdd25158e08c6aad98c8eef88c",
            bytes: 43156
        }, {
            name: "ui/menu/ScreenMenu.png",
            md5: "1a73ef69ada1fae22eeb56404b55bdc3",
            bytes: 40227
        }, {
            name: "ui/menu/ScreenEndTin.jpg",
            md5: "f2f8d89f0b32f218462ae4b29f6454c7",
            bytes: 81544
        }, {
            name: "ui/menu/ScreenEndSilver.jpg",
            md5: "da45ea71967003428223168a6b742f42",
            bytes: 87655
        }, {
            name: "ui/menu/ScreenEndRock.jpg",
            md5: "2180fb302c40714a8158d112ce63f25f",
            bytes: 86241
        }, {
            name: "ui/menu/ScreenEndGold.jpg",
            md5: "338d5856f1a9a0611871aa16d9252d40",
            bytes: 90030
        }, {
            name: "ui/menu/ScreenEndBronze.jpg",
            md5: "00731a51631632aec9220e688a6527cd",
            bytes: 89972
        }, {
            name: "ui/menu/ScreenEndAluminum.jpg",
            md5: "0de751997f43084aefe206c450bf377a",
            bytes: 84146
        }, {
            name: "ui/menu/EndFairiesSad.png",
            md5: "27eeb65ac6739c8be2e870da6280142a",
            bytes: 53410
        }, {
            name: "ui/menu/EndFairiesHappy.png",
            md5: "b5e7c933e60c74f8196408892cc1b3fb",
            bytes: 53851
        }, {
            name: "ui/menu/ButtonYes.png",
            md5: "3ba3762d83c6dc799b8c7651f23763e8",
            bytes: 4296
        }, {
            name: "ui/menu/ButtonSoundOn.png",
            md5: "fbf48a8b89f211d1a1d2e1be8cf3950f",
            bytes: 5052
        }, {
            name: "ui/menu/ButtonSoundOff.png",
            md5: "e362ce148167b5e38d980e664c475c1a",
            bytes: 4887
        }, {
            name: "ui/menu/ButtonQuit.png",
            md5: "ec9d3789a325d2244e5a491819eeb6c3",
            bytes: 5140
        }, {
            name: "ui/menu/ButtonPlayAgain.png",
            md5: "1c34ef8bc375768ada1bb7aa6f57c5f3",
            bytes: 9073
        }, {
            name: "ui/menu/ButtonPlay.png",
            md5: "74bdb800ab3e9b1bbcc721e0b1210885",
            bytes: 4246
        }, {
            name: "ui/menu/ButtonNo.png",
            md5: "0669dfae2cf813f850260651a6b02870",
            bytes: 3877
        }, {
            name: "ui/menu/ButtonHelp.png",
            md5: "144ca010c6d98840a181397fcf1be32b",
            bytes: 4958
        }, {
            name: "ui/help/ScreenHTML5Help.jpg",
            md5: "50aaf9ea8ded8d53208934eee09a1a36",
            bytes: 107806
        }, {
            name: "ui/help/ScreenFlashHelp.jpg",
            md5: "dd9c9ba55f0bbfa1f69dd8ae55ae304c",
            bytes: 110552
        }, {
            name: "ui/gameplay_hud/ScreenHUD.png",
            md5: "10b009d0daab9e3c5d852a258612695d",
            bytes: 19818
        }, {
            name: "ui/gameplay_hud/powerbar_bg.png",
            md5: "e4b10550a4f78fc76ee08d27ce281419",
            bytes: 5104
        }, {
            name: "ui/gameplay_hud/powerbar_bar.png",
            md5: "90adba2b521c113ce891825e6d649105",
            bytes: 2878
        }, {
            name: "ui/gameplay_hud/HUDHelp3.png",
            md5: "ab450b461822b30d65a1ccc37af99b82",
            bytes: 30410
        }, {
            name: "ui/gameplay_hud/HUDHelp2.png",
            md5: "d5127610014c2619720fc4e57b516875",
            bytes: 34175
        }, {
            name: "ui/gameplay_hud/HUDHelp1.png",
            md5: "b57f6718c78e97934e7b796ce9a52f24",
            bytes: 34809
        }, {
            name: "ui/gameplay_hud/ButtonPause.png",
            md5: "1f44594b7fba60720529e18fecfe07f4",
            bytes: 3467
        }, {
            name: "flump_exploder/library.json",
            md5: "dda3f18afd45ce8ee03eb639e1c58872",
            bytes: 7874
        }, {
            name: "flump_exploder/atlas0.png",
            md5: "4fbd33c637bcf3db5e80f8f4b32e515c",
            bytes: 134398
        }, {
            name: "elements/timmy_bazooka_empty.png",
            md5: "a6f8ac6a6ad69fa0da7ad5838052dab8",
            bytes: 8933
        }, {
            name: "elements/timmy_bazooka.png",
            md5: "e74d20ce51bcf976725ba06595eb26e8",
            bytes: 10474
        }, {
            name: "elements/target_pixie.png",
            md5: "b3025d243d484dfe0c348ca7f829f32b",
            bytes: 7538
        }, {
            name: "elements/target_fairy.png",
            md5: "ae2fc05c5170390a0bb1e68f38c0f6fe",
            bytes: 6894
        }, {
            name: "elements/target_antifairy.png",
            md5: "f5bec82f544a72a3db0bb737bb65509a",
            bytes: 7068
        }, {
            name: "elements/point_pixie.png",
            md5: "73b613b0fbeced5c4a73e1c0a6327b97",
            bytes: 3792
        }, {
            name: "elements/point_gold.png",
            md5: "385125fda3d4fe07e845494dc27afe74",
            bytes: 3927
        }, {
            name: "elements/point_fairy.png",
            md5: "b958a70afc28a29813a40391d5724040",
            bytes: 3691
        }, {
            name: "elements/point_antifairy.png",
            md5: "1c304bbc0b2f4c8055913ba050ff06f9",
            bytes: 3798
        }, {
            name: "elements/item_pixie.png",
            md5: "263d3310d3f4c0b7e7cf2248227efd02",
            bytes: 5272
        }, {
            name: "elements/item_fairy.png",
            md5: "8375c529ef1b3f70db5854466ebf6bd7",
            bytes: 9910
        }, {
            name: "elements/item_antifairy.png",
            md5: "1525d9665fe7f3ab8666c3c67ad5f685",
            bytes: 5088
        }, {
            name: "elements/duck_stuck.png",
            md5: "c0694b5422f0d3e65251551c6f757c73",
            bytes: 5054
        }, {
            name: "elements/duck_rolling.png",
            md5: "2d78dcf2d55be27a3477416e46faf3a4",
            bytes: 5644
        }, {
            name: "elements/duck_flying.png",
            md5: "22bec5901cd33381ebbf39189179bb71",
            bytes: 5220
        }, {
            name: "elements/bg_stadium.jpg",
            md5: "cc3f94f7d921dcb2d3775ea52d41892a",
            bytes: 41524
        }, {
            name: "elements/barrier_pixie.png",
            md5: "c851e2277bde5e172097742c67c938d2",
            bytes: 3488
        }, {
            name: "elements/barrier_fairy.png",
            md5: "ae0e1b38554997f134c894cc56eecd32",
            bytes: 3446
        }, {
            name: "elements/barrier_antifairy.png",
            md5: "16c5abedcba10ca5bad51bc623983ef3",
            bytes: 3580
        }, {
            name: "elements/angle_bg.png",
            md5: "875e2840e472d31773274a3ab8ebc9ab",
            bytes: 6138
        }]);
        a.set("fonts_la", [{
            name: "Basic.png",
            md5: "6a36225f74ea1a7793667cffcb1047ce",
            bytes: 622185
        }, {
            name: "Basic.fnt",
            md5: "a0e96df3ee1859e9a082bb8b061791c5",
            bytes: 25155
        }]);
        a.set("fonts_kr", [{
            name: "Basic.png",
            md5: "6a36225f74ea1a7793667cffcb1047ce",
            bytes: 622185
        }, {
            name: "Basic.fnt",
            md5: "a0e96df3ee1859e9a082bb8b061791c5",
            bytes: 25155
        }]);
        a.set("fonts_jp", [{
            name: "Basic.png",
            md5: "6a36225f74ea1a7793667cffcb1047ce",
            bytes: 622185
        }, {
            name: "Basic.fnt",
            md5: "a0e96df3ee1859e9a082bb8b061791c5",
            bytes: 25155
        }]);
        a.set("fonts_en", [{
            name: "Basic.png",
            md5: "442e54f4f9a6735238df1be188b9c521",
            bytes: 197132
        }, {
            name: "Basic.fnt",
            md5: "c94df9338ebe4021699d6583e07b4dc1",
            bytes: 9642
        }]);
        a.set("fonts_cn", [{
            name: "Basic.png",
            md5: "6a36225f74ea1a7793667cffcb1047ce",
            bytes: 622185
        }, {
            name: "Basic.fnt",
            md5: "a0e96df3ee1859e9a082bb8b061791c5",
            bytes: 25155
        }]);
        a.set("bootstrap", [{
                name: "ui/ScreenLoading.jpg",
                md5: "2e48463d52aa9ee3d7913922b0b58633",
                bytes: 37020
            }, {
                name: "ui/loading_spinner.png",
                md5: "a65e26f2bbfb3cd2908fd0df3742955b",
                bytes: 15162
            }, {
                name: "config/translation_la.xml",
                md5: "d0bb03966a8bcdc1f4d2cff0541e8f6b",
                bytes: 6413
            }, {
                name: "config/translation_kr.xml",
                md5: "d0bb03966a8bcdc1f4d2cff0541e8f6b",
                bytes: 6413
            }, {
                name: "config/translation_jp.xml",
                md5: "d0bb03966a8bcdc1f4d2cff0541e8f6b",
                bytes: 6413
            }, {
                name: "config/translation_en.xml",
                md5: "8423d83b9c44d7b2fdbeb02b65e2a94d",
                bytes: 5983
            }, {
                name: "config/translation_cn.xml",
                md5: "d0bb03966a8bcdc1f4d2cff0541e8f6b",
                bytes: 6413
            }, {
                name: "config/config.xml",
                md5: "c77dcb0c71451a6e74938725326a4542",
                bytes: 1102
            }, {
                name: "audio/silent.ogg",
                md5: "3526550092a0e091f382852de5ef2315",
                bytes: 5514
            },
            {
                name: "audio/silent.mp3",
                md5: "ba9e6829ba32e427142251a85cbd4fbb",
                bytes: 2114
            }
        ]);
        for (var b = new I, c = a.keys(); c.hasNext();) {
            var d = c.next(),
                e = new y.Manifest;
            e.set_relativeBasePath("assets");
            for (var f = 0, g = a.get(d); f < g.length;) {
                var h = g[f];
                ++f;
                var i = h.name,
                    k = d + "/" + i + "?v=" + r.string(h.md5),
                    j = y.Manifest.inferType(i);
                if (j == y.AssetType.Image || j == y.AssetType.Audio) i = m.Strings.removeFileExtension(i);
                e.add(i, k, h.bytes, j)
            }
            b.set(d, e)
        }
        return b
    };
    y.Manifest.prototype = {
        set_externalBasePath: function(a) {
            this._externalBasePath =
                a;
            null != a && null;
            return a
        },
        get_externalBasePath: function() {
            return this._externalBasePath
        },
        set_relativeBasePath: function(a) {
            this._relativeBasePath = a;
            null != a && null;
            return a
        },
        get_relativeBasePath: function() {
            return this._relativeBasePath
        },
        getFullURL: function(a) {
            var b = null != this.get_externalBasePath() && y.Manifest._supportsCrossOrigin ? this.get_externalBasePath() : this.get_relativeBasePath(),
                c = null != this.get_externalBasePath() ? this.get_externalBasePath() : this.get_relativeBasePath();
            a.type == y.AssetType.Data &&
                (c = b);
            return null != c ? m.Strings.joinPath(c, a.url) : a.url
        },
        clone: function() {
            var a = new y.Manifest;
            a.set_relativeBasePath(this.get_relativeBasePath());
            a.set_externalBasePath(this.get_externalBasePath());
            a._entries = this._entries.slice();
            return a
        },
        iterator: function() {
            return A.iter(this._entries)
        },
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = y.Manifest.inferType(b));
            a = new y.AssetEntry(a, b, d, c);
            this._entries.push(a);
            return a
        },
        __class__: y.Manifest
    };
    j = {};
    j.BlendMode = i["flambe.display.BlendMode"] = {
        __ename__: ["flambe",
            "display", "BlendMode"
        ],
        __constructs__: ["Normal", "Add", "CopyExperimental"]
    };
    j.BlendMode.Normal = ["Normal", 0];
    j.BlendMode.Normal.toString = o;
    j.BlendMode.Normal.__enum__ = j.BlendMode;
    j.BlendMode.Add = ["Add", 1];
    j.BlendMode.Add.toString = o;
    j.BlendMode.Add.__enum__ = j.BlendMode;
    j.BlendMode.CopyExperimental = ["CopyExperimental", 2];
    j.BlendMode.CopyExperimental.toString = o;
    j.BlendMode.CopyExperimental.__enum__ = j.BlendMode;
    J = {
        Point: function(a, b) {
            null == b && (b = 0);
            null == a && (a = 0);
            this.x = a;
            this.y = b
        }
    };
    i["flambe.math.Point"] =
        J.Point;
    J.Point.__name__ = ["flambe", "math", "Point"];
    J.Point.prototype = {
        __class__: J.Point
    };
    j.Sprite = function() {
        this.blendMode = this.scissor = null;
        var a = this;
        this._flags = 11;
        this._localMatrix = new J.Matrix;
        var b = function() {
            a._flags |= 12
        };
        this.x = new F.AnimatedFloat(0, b);
        this.y = new F.AnimatedFloat(0, b);
        this.rotation = new F.AnimatedFloat(0, b);
        this.scaleX = new F.AnimatedFloat(1, b);
        this.scaleY = new F.AnimatedFloat(1, b);
        this.anchorX = new F.AnimatedFloat(0, b);
        this.anchorY = new F.AnimatedFloat(0, b);
        this.alpha = new F.AnimatedFloat(1)
    };
    i["flambe.display.Sprite"] = j.Sprite;
    j.Sprite.__name__ = ["flambe", "display", "Sprite"];
    j.Sprite.hitTest = function(a, b, c) {
        var d = a._compMap.Sprite_1;
        if (null != d) {
            if (3 != (d._flags & 3)) return null;
            d.getLocalMatrix().inverseTransform(b, c, j.Sprite._scratchPoint) && (b = j.Sprite._scratchPoint.x, c = j.Sprite._scratchPoint.y);
            var e = d.scissor;
            if (null != e && !e.contains(b, c)) return null
        }
        a = j.Sprite.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    j.Sprite.render = function(a, b) {
        var c =
            a._compMap.Sprite_1;
        if (null != c) {
            var d = c.alpha._value;
            if (0 == (c._flags & 1) || 0 >= d) return;
            b.save();
            1 > d && b.multiplyAlpha(d);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            d = c.getLocalMatrix();
            b.transform(d.m00, d.m10, d.m01, d.m11, d.m02, d.m12);
            d = c.scissor;
            null != d && b.applyScissor(d.x, d.y, d.width, d.height);
            c.draw(b)
        }
        d = a._compMap.Director_0;
        if (null != d)
            for (var d = d.occludedScenes, e = 0; e < d.length;) {
                var f = d[e];
                ++e;
                j.Sprite.render(f, b)
            }
        for (d = a.firstChild; null != d;) e = d.next, j.Sprite.render(d, b), d = e;
        null != c && b.restore()
    };
    j.Sprite.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var d = j.Sprite.hitTestBackwards(a.next, b, c);
            return null != d ? d : j.Sprite.hitTest(a, b, c)
        }
        return null
    };
    j.Sprite.__super__ = N;
    j.Sprite.prototype = w(N.prototype, {
        set_pointerEnabled: function(a) {
            this._flags = m.BitSets.set(this._flags, 2, a);
            return a
        },
        set_visible: function(a) {
            this._flags = m.BitSets.set(this._flags, 1, a);
            return a
        },
        get_pointerUp: function() {
            null == this._internal_pointerUp && (this._internal_pointerUp = new m.Signal1);
            return this._internal_pointerUp
        },
        get_pointerMove: function() {
            null ==
                this._internal_pointerMove && (this._internal_pointerMove = new m.Signal1);
            return this._internal_pointerMove
        },
        get_pointerDown: function() {
            null == this._internal_pointerDown && (this._internal_pointerDown = new m.Signal1);
            return this._internal_pointerDown
        },
        draw: function() {},
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        getLocalMatrix: function() {
            0 != (this._flags & 4) && (this._flags &=
                -5, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getNaturalHeight: function() {
            return 0
        },
        getNaturalWidth: function() {
            return 0
        },
        get_name: function() {
            return "Sprite_1"
        },
        __class__: j.Sprite
    });
    j.FillSprite = function(a, b, c) {
        j.Sprite.call(this);
        this.color = a;
        this.width = new F.AnimatedFloat(b);
        this.height = new F.AnimatedFloat(c)
    };
    i["flambe.display.FillSprite"] = j.FillSprite;
    j.FillSprite.__name__ = ["flambe", "display", "FillSprite"];
    j.FillSprite.__super__ = j.Sprite;
    j.FillSprite.prototype = w(j.Sprite.prototype, {
        onUpdate: function(a) {
            j.Sprite.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        draw: function(a) {
            a.fillRect(this.color,
                0, 0, this.width._value, this.height._value)
        },
        __class__: j.FillSprite
    });
    j.Font = function(a, b) {
        this.name = b;
        this._glyphs = new W;
        for (var c = new j._Font.ConfigParser(a.getFile(b + ".fnt")), d = new W, e = b.lastIndexOf("/"), e = 0 <= e ? A.substr(b, 0, e + 1) : "", f = c.keywords(); f.hasNext();) switch (f.next()) {
            case "info":
                for (var g = c.pairs(); g.hasNext();) {
                    var h = g.next();
                    switch (h.key) {
                        case "size":
                            this.size = h.getInt()
                    }
                }
                break;
            case "page":
                for (var g = 0, i = null, k = c.pairs(); k.hasNext();) switch (h = k.next(), h.key) {
                    case "id":
                        g = h.getInt();
                        break;
                    case "file":
                        i = h.getString()
                }
                d.set(g, a.getTexture(e + m.Strings.removeFileExtension(i)));
                break;
            case "char":
                g = null;
                for (i = c.pairs(); i.hasNext();) switch (h = i.next(), h.key) {
                    case "id":
                        g = new j.Glyph(h.getInt());
                        break;
                    case "x":
                        g.x = h.getInt();
                        break;
                    case "y":
                        g.y = h.getInt();
                        break;
                    case "width":
                        g.width = h.getInt();
                        break;
                    case "height":
                        g.height = h.getInt();
                        break;
                    case "page":
                        g.page = d.get(h.getInt());
                        break;
                    case "xoffset":
                        g.xOffset = h.getInt();
                        break;
                    case "yoffset":
                        g.yOffset = h.getInt();
                        break;
                    case "xadvance":
                        g.xAdvance = h.getInt()
                }
                this._glyphs.set(g.charCode,
                    g);
                break;
            case "kerning":
                g = null;
                i = -1;
                for (k = c.pairs(); k.hasNext();) switch (h = k.next(), h.key) {
                    case "first":
                        g = this._glyphs.get(h.getInt());
                        break;
                    case "second":
                        i = h.getInt();
                        break;
                    case "amount":
                        g._internal_setKerning(i, h.getInt())
                }
        }
    };
    i["flambe.display.Font"] = j.Font;
    j.Font.__name__ = ["flambe", "display", "Font"];
    j.Font.prototype = {
        getGlyphs: function(a) {
            for (var b = [], c = 0, d = a.length; c < d;) {
                var e = c++,
                    e = this._glyphs.get(a.charCodeAt(e));
                null != e ? b.push(e) : null
            }
            return b
        },
        __class__: j.Font
    };
    j.Glyph = function(a) {
        this.charCode =
            a
    };
    i["flambe.display.Glyph"] = j.Glyph;
    j.Glyph.__name__ = ["flambe", "display", "Glyph"];
    j.Glyph.prototype = {
        _internal_setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new W);
            this._kernings.set(a, b)
        },
        getKerning: function(a) {
            return null != this._kernings ? this._kernings.get(a) | 0 : 0
        },
        draw: function(a, b, c) {
            0 < this.width && a.drawSubImage(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        __class__: j.Glyph
    };
    j._Font = {};
    j._Font.ConfigParser = function(a) {
        this._configText = a;
        this._keywordPattern =
            new X("([a-z]+)(.*)", "");
        this._pairPattern = new X('([a-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    i["flambe.display._Font.ConfigParser"] = j._Font.ConfigParser;
    j._Font.ConfigParser.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    j._Font.ConfigParser.advance = function(a, b) {
        var c = b.matchedPos();
        return A.substr(a, c.pos + c.len, a.length)
    };
    j._Font.ConfigParser.prototype = {
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = j._Font.ConfigParser.advance(b, a._pairPattern);
                    return new j._Font.ConfigPair(a._pairPattern.matched(1),
                        a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = j._Font.ConfigParser.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        __class__: j._Font.ConfigParser
    };
    j._Font.ConfigPair = function(a, b) {
        this.key = a;
        this._value = b
    };
    i["flambe.display._Font.ConfigPair"] = j._Font.ConfigPair;
    j._Font.ConfigPair.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    j._Font.ConfigPair.prototype = {
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : A.substr(this._value, 1, this._value.length - 2)
        },
        getInt: function() {
            return r.parseInt(this._value)
        },
        __class__: j._Font.ConfigPair
    };
    j.Graphics = function() {};
    i["flambe.display.Graphics"] = j.Graphics;
    j.Graphics.__name__ = ["flambe", "display", "Graphics"];
    j.Graphics.prototype = {
        __class__: j.Graphics
    };
    j.ImageSprite = function(a) {
        j.Sprite.call(this);
        this.texture = a
    };
    i["flambe.display.ImageSprite"] =
        j.ImageSprite;
    j.ImageSprite.__name__ = ["flambe", "display", "ImageSprite"];
    j.ImageSprite.__super__ = j.Sprite;
    j.ImageSprite.prototype = w(j.Sprite.prototype, {
        getNaturalHeight: function() {
            return this.texture.get_height()
        },
        getNaturalWidth: function() {
            return this.texture.get_width()
        },
        draw: function(a) {
            a.drawImage(this.texture, 0, 0)
        },
        __class__: j.ImageSprite
    });
    j.MaskSprite = function(a, b) {
        j.Sprite.call(this);
        this.image = b;
        this.shape = a;
        this.flagRefreshMask = !0
    };
    i["flambe.display.MaskSprite"] = j.MaskSprite;
    j.MaskSprite.__name__ = ["flambe", "display", "MaskSprite"];
    j.MaskSprite.__super__ = j.Sprite;
    j.MaskSprite.prototype = w(j.Sprite.prototype, {
        onUpdate: function(a) {
            j.Sprite.prototype.onUpdate.call(this, a);
            this.image.onUpdate(a);
            this.shape.onUpdate(a)
        },
        draw: function(a) {
            a.mask(this.shape, this.image)
        },
        __class__: j.MaskSprite
    });
    j.Orientation = i["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    j.Orientation.Portrait = ["Portrait", 0];
    j.Orientation.Portrait.toString = o;
    j.Orientation.Portrait.__enum__ =
        j.Orientation;
    j.Orientation.Landscape = ["Landscape", 1];
    j.Orientation.Landscape.toString = o;
    j.Orientation.Landscape.__enum__ = j.Orientation;
    j.SHAPE_METHODS = i["flambe.display.SHAPE_METHODS"] = {
        __ename__: ["flambe", "display", "SHAPE_METHODS"],
        __constructs__: "MoveTo,LineTo,BeginPath,ClosePath,BeginStroke,EndStroke,BeginFill,EndFill,QuadCurve,BezCurve,Save,Restore,DrawRect,Arc".split(",")
    };
    j.SHAPE_METHODS.MoveTo = ["MoveTo", 0];
    j.SHAPE_METHODS.MoveTo.toString = o;
    j.SHAPE_METHODS.MoveTo.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.LineTo = ["LineTo", 1];
    j.SHAPE_METHODS.LineTo.toString = o;
    j.SHAPE_METHODS.LineTo.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.BeginPath = ["BeginPath", 2];
    j.SHAPE_METHODS.BeginPath.toString = o;
    j.SHAPE_METHODS.BeginPath.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.ClosePath = ["ClosePath", 3];
    j.SHAPE_METHODS.ClosePath.toString = o;
    j.SHAPE_METHODS.ClosePath.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.BeginStroke = ["BeginStroke", 4];
    j.SHAPE_METHODS.BeginStroke.toString = o;
    j.SHAPE_METHODS.BeginStroke.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.EndStroke = ["EndStroke", 5];
    j.SHAPE_METHODS.EndStroke.toString = o;
    j.SHAPE_METHODS.EndStroke.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.BeginFill = ["BeginFill", 6];
    j.SHAPE_METHODS.BeginFill.toString = o;
    j.SHAPE_METHODS.BeginFill.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.EndFill = ["EndFill", 7];
    j.SHAPE_METHODS.EndFill.toString = o;
    j.SHAPE_METHODS.EndFill.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.QuadCurve = ["QuadCurve", 8];
    j.SHAPE_METHODS.QuadCurve.toString = o;
    j.SHAPE_METHODS.QuadCurve.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.BezCurve = ["BezCurve", 9];
    j.SHAPE_METHODS.BezCurve.toString = o;
    j.SHAPE_METHODS.BezCurve.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.Save = ["Save", 10];
    j.SHAPE_METHODS.Save.toString = o;
    j.SHAPE_METHODS.Save.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.Restore = ["Restore", 11];
    j.SHAPE_METHODS.Restore.toString = o;
    j.SHAPE_METHODS.Restore.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.DrawRect = ["DrawRect", 12];
    j.SHAPE_METHODS.DrawRect.toString = o;
    j.SHAPE_METHODS.DrawRect.__enum__ = j.SHAPE_METHODS;
    j.SHAPE_METHODS.Arc = ["Arc", 13];
    j.SHAPE_METHODS.Arc.toString =
        o;
    j.SHAPE_METHODS.Arc.__enum__ = j.SHAPE_METHODS;
    j.ShapeSprite = function() {
        this.isShape = this.isLine = this.isPath = !1;
        this.color = 0;
        j.Sprite.call(this);
        this.points = []
    };
    i["flambe.display.ShapeSprite"] = j.ShapeSprite;
    j.ShapeSprite.__name__ = ["flambe", "display", "ShapeSprite"];
    j.ShapeSprite.__super__ = j.Sprite;
    j.ShapeSprite.prototype = w(j.Sprite.prototype, {
        draw: function(a) {
            this.isShape && a.beginFill(this.color);
            this.isLine && a.beginStroke(this.color, 1);
            for (var b = 0; b < this.points.length;) {
                switch (this.points[b][0][1]) {
                    case 0:
                        a.moveTo(this.points[b][1],
                            this.points[b][2]);
                        break;
                    case 1:
                        a.lineTo(this.points[b][1], this.points[b][2]);
                        break;
                    case 2:
                        a.beginPath();
                        break;
                    case 3:
                        a.closePath();
                        break;
                    case 4:
                        a.beginStroke(this.points[b][1], this.points[b][2]);
                        break;
                    case 5:
                        a.endStroke();
                        break;
                    case 6:
                        a.beginFill(this.points[b][1]);
                        break;
                    case 7:
                        a.endFill();
                        break;
                    case 8:
                        a.quadraticCurveTo(this.points[b][1], this.points[b][2], this.points[b][3], this.points[b][4]);
                        break;
                    case 9:
                        a.bezierCurveTo(this.points[b][1], this.points[b][2], this.points[b][3], this.points[b][4], this.points[b][5],
                            this.points[b][6]);
                        break;
                    case 10:
                        a.save();
                        break;
                    case 11:
                        a.restore();
                        break;
                    case 12:
                        a.fillRect(this.color, this.points[b][1], this.points[b][2], this.points[b][3], this.points[b][4]);
                        break;
                    case 13:
                        a.arc(this.points[b][1], this.points[b][2], this.points[b][3], this.points[b][4], this.points[b][5])
                }
                b++
            }
            this.isShape && a.endFill();
            this.isLine && a.endStroke();
            !this.isPath && (this.isShape || this.isLine) && a.drawShapeSprite();
            null == this.graphics && (this.graphics = a)
        },
        __class__: j.ShapeSprite
    });
    j.Stage = function() {};
    i["flambe.display.Stage"] =
        j.Stage;
    j.Stage.__name__ = ["flambe", "display", "Stage"];
    j.Stage.prototype = {
        __class__: j.Stage
    };
    j.TextSprite = function(a, b) {
        null == b && (b = "");
        this._width = this._height = 0;
        this._glyphs = this._offsets = this._font = this._text = null;
        j.Sprite.call(this);
        this._font = a;
        this._text = b;
        this._flags |= 32
    };
    i["flambe.display.TextSprite"] = j.TextSprite;
    j.TextSprite.__name__ = ["flambe", "display", "TextSprite"];
    j.TextSprite.__super__ = j.Sprite;
    j.TextSprite.prototype = w(j.Sprite.prototype, {
        updateGlyphs: function() {
            if (0 != (this._flags & 32)) {
                this._flags &=
                    -33;
                this._glyphs = this._font.getGlyphs(this._text);
                this._offsets = [0];
                for (var a = this._height = this._width = 0, b = this._glyphs.length; a < b;) {
                    var c = this._glyphs[a];
                    ++a;
                    a == b ? this._width += c.width : (this._width += c.xAdvance + c.getKerning(this._glyphs[a].charCode), this._offsets.push(this._width));
                    this._height = J.FMath.max(this._height, c.height + c.yOffset)
                }
            }
        },
        set_font: function(a) {
            this._font = a;
            this._flags |= 32;
            return a
        },
        set_text: function(a) {
            this._text = a;
            this._flags |= 32;
            return a
        },
        getNaturalHeight: function() {
            this.updateGlyphs();
            return this._height
        },
        getNaturalWidth: function() {
            this.updateGlyphs();
            return this._width
        },
        draw: function(a) {
            this.updateGlyphs();
            for (var b = 0, c = this._glyphs.length; b < c;) this._glyphs[b].draw(a, this._offsets[b], 0), ++b
        },
        __class__: j.TextSprite
    });
    j.Texture = function() {};
    i["flambe.display.Texture"] = j.Texture;
    j.Texture.__name__ = ["flambe", "display", "Texture"];
    j.Texture.prototype = {
        __class__: j.Texture
    };
    z = {
        External: function() {}
    };
    i["flambe.external.External"] = z.External;
    z.External.__name__ = ["flambe", "external", "External"];
    z.External.prototype = {
        __class__: z.External
    };
    d = {};
    d.Key = i["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    d.Key.A = ["A", 0];
    d.Key.A.toString = o;
    d.Key.A.__enum__ = d.Key;
    d.Key.B = ["B", 1];
    d.Key.B.toString = o;
    d.Key.B.__enum__ = d.Key;
    d.Key.C = ["C", 2];
    d.Key.C.toString = o;
    d.Key.C.__enum__ = d.Key;
    d.Key.D = ["D", 3];
    d.Key.D.toString = o;
    d.Key.D.__enum__ = d.Key;
    d.Key.E = ["E", 4];
    d.Key.E.toString = o;
    d.Key.E.__enum__ = d.Key;
    d.Key.F = ["F", 5];
    d.Key.F.toString = o;
    d.Key.F.__enum__ = d.Key;
    d.Key.G = ["G", 6];
    d.Key.G.toString = o;
    d.Key.G.__enum__ = d.Key;
    d.Key.H = ["H", 7];
    d.Key.H.toString = o;
    d.Key.H.__enum__ = d.Key;
    d.Key.I = ["I", 8];
    d.Key.I.toString = o;
    d.Key.I.__enum__ =
        d.Key;
    d.Key.J = ["J", 9];
    d.Key.J.toString = o;
    d.Key.J.__enum__ = d.Key;
    d.Key.K = ["K", 10];
    d.Key.K.toString = o;
    d.Key.K.__enum__ = d.Key;
    d.Key.L = ["L", 11];
    d.Key.L.toString = o;
    d.Key.L.__enum__ = d.Key;
    d.Key.M = ["M", 12];
    d.Key.M.toString = o;
    d.Key.M.__enum__ = d.Key;
    d.Key.N = ["N", 13];
    d.Key.N.toString = o;
    d.Key.N.__enum__ = d.Key;
    d.Key.O = ["O", 14];
    d.Key.O.toString = o;
    d.Key.O.__enum__ = d.Key;
    d.Key.P = ["P", 15];
    d.Key.P.toString = o;
    d.Key.P.__enum__ = d.Key;
    d.Key.Q = ["Q", 16];
    d.Key.Q.toString = o;
    d.Key.Q.__enum__ = d.Key;
    d.Key.R = ["R", 17];
    d.Key.R.toString =
        o;
    d.Key.R.__enum__ = d.Key;
    d.Key.S = ["S", 18];
    d.Key.S.toString = o;
    d.Key.S.__enum__ = d.Key;
    d.Key.T = ["T", 19];
    d.Key.T.toString = o;
    d.Key.T.__enum__ = d.Key;
    d.Key.U = ["U", 20];
    d.Key.U.toString = o;
    d.Key.U.__enum__ = d.Key;
    d.Key.V = ["V", 21];
    d.Key.V.toString = o;
    d.Key.V.__enum__ = d.Key;
    d.Key.W = ["W", 22];
    d.Key.W.toString = o;
    d.Key.W.__enum__ = d.Key;
    d.Key.X = ["X", 23];
    d.Key.X.toString = o;
    d.Key.X.__enum__ = d.Key;
    d.Key.Y = ["Y", 24];
    d.Key.Y.toString = o;
    d.Key.Y.__enum__ = d.Key;
    d.Key.Z = ["Z", 25];
    d.Key.Z.toString = o;
    d.Key.Z.__enum__ = d.Key;
    d.Key.Number0 = ["Number0", 26];
    d.Key.Number0.toString = o;
    d.Key.Number0.__enum__ = d.Key;
    d.Key.Number1 = ["Number1", 27];
    d.Key.Number1.toString = o;
    d.Key.Number1.__enum__ = d.Key;
    d.Key.Number2 = ["Number2", 28];
    d.Key.Number2.toString = o;
    d.Key.Number2.__enum__ = d.Key;
    d.Key.Number3 = ["Number3", 29];
    d.Key.Number3.toString = o;
    d.Key.Number3.__enum__ = d.Key;
    d.Key.Number4 = ["Number4", 30];
    d.Key.Number4.toString = o;
    d.Key.Number4.__enum__ = d.Key;
    d.Key.Number5 = ["Number5", 31];
    d.Key.Number5.toString = o;
    d.Key.Number5.__enum__ = d.Key;
    d.Key.Number6 = ["Number6",
        32
    ];
    d.Key.Number6.toString = o;
    d.Key.Number6.__enum__ = d.Key;
    d.Key.Number7 = ["Number7", 33];
    d.Key.Number7.toString = o;
    d.Key.Number7.__enum__ = d.Key;
    d.Key.Number8 = ["Number8", 34];
    d.Key.Number8.toString = o;
    d.Key.Number8.__enum__ = d.Key;
    d.Key.Number9 = ["Number9", 35];
    d.Key.Number9.toString = o;
    d.Key.Number9.__enum__ = d.Key;
    d.Key.Numpad0 = ["Numpad0", 36];
    d.Key.Numpad0.toString = o;
    d.Key.Numpad0.__enum__ = d.Key;
    d.Key.Numpad1 = ["Numpad1", 37];
    d.Key.Numpad1.toString = o;
    d.Key.Numpad1.__enum__ = d.Key;
    d.Key.Numpad2 = ["Numpad2", 38];
    d.Key.Numpad2.toString = o;
    d.Key.Numpad2.__enum__ = d.Key;
    d.Key.Numpad3 = ["Numpad3", 39];
    d.Key.Numpad3.toString = o;
    d.Key.Numpad3.__enum__ = d.Key;
    d.Key.Numpad4 = ["Numpad4", 40];
    d.Key.Numpad4.toString = o;
    d.Key.Numpad4.__enum__ = d.Key;
    d.Key.Numpad5 = ["Numpad5", 41];
    d.Key.Numpad5.toString = o;
    d.Key.Numpad5.__enum__ = d.Key;
    d.Key.Numpad6 = ["Numpad6", 42];
    d.Key.Numpad6.toString = o;
    d.Key.Numpad6.__enum__ = d.Key;
    d.Key.Numpad7 = ["Numpad7", 43];
    d.Key.Numpad7.toString = o;
    d.Key.Numpad7.__enum__ = d.Key;
    d.Key.Numpad8 = ["Numpad8", 44];
    d.Key.Numpad8.toString =
        o;
    d.Key.Numpad8.__enum__ = d.Key;
    d.Key.Numpad9 = ["Numpad9", 45];
    d.Key.Numpad9.toString = o;
    d.Key.Numpad9.__enum__ = d.Key;
    d.Key.NumpadAdd = ["NumpadAdd", 46];
    d.Key.NumpadAdd.toString = o;
    d.Key.NumpadAdd.__enum__ = d.Key;
    d.Key.NumpadDecimal = ["NumpadDecimal", 47];
    d.Key.NumpadDecimal.toString = o;
    d.Key.NumpadDecimal.__enum__ = d.Key;
    d.Key.NumpadDivide = ["NumpadDivide", 48];
    d.Key.NumpadDivide.toString = o;
    d.Key.NumpadDivide.__enum__ = d.Key;
    d.Key.NumpadEnter = ["NumpadEnter", 49];
    d.Key.NumpadEnter.toString = o;
    d.Key.NumpadEnter.__enum__ =
        d.Key;
    d.Key.NumpadMultiply = ["NumpadMultiply", 50];
    d.Key.NumpadMultiply.toString = o;
    d.Key.NumpadMultiply.__enum__ = d.Key;
    d.Key.NumpadSubtract = ["NumpadSubtract", 51];
    d.Key.NumpadSubtract.toString = o;
    d.Key.NumpadSubtract.__enum__ = d.Key;
    d.Key.F1 = ["F1", 52];
    d.Key.F1.toString = o;
    d.Key.F1.__enum__ = d.Key;
    d.Key.F2 = ["F2", 53];
    d.Key.F2.toString = o;
    d.Key.F2.__enum__ = d.Key;
    d.Key.F3 = ["F3", 54];
    d.Key.F3.toString = o;
    d.Key.F3.__enum__ = d.Key;
    d.Key.F4 = ["F4", 55];
    d.Key.F4.toString = o;
    d.Key.F4.__enum__ = d.Key;
    d.Key.F5 = ["F5", 56];
    d.Key.F5.toString =
        o;
    d.Key.F5.__enum__ = d.Key;
    d.Key.F6 = ["F6", 57];
    d.Key.F6.toString = o;
    d.Key.F6.__enum__ = d.Key;
    d.Key.F7 = ["F7", 58];
    d.Key.F7.toString = o;
    d.Key.F7.__enum__ = d.Key;
    d.Key.F8 = ["F8", 59];
    d.Key.F8.toString = o;
    d.Key.F8.__enum__ = d.Key;
    d.Key.F9 = ["F9", 60];
    d.Key.F9.toString = o;
    d.Key.F9.__enum__ = d.Key;
    d.Key.F10 = ["F10", 61];
    d.Key.F10.toString = o;
    d.Key.F10.__enum__ = d.Key;
    d.Key.F11 = ["F11", 62];
    d.Key.F11.toString = o;
    d.Key.F11.__enum__ = d.Key;
    d.Key.F12 = ["F12", 63];
    d.Key.F12.toString = o;
    d.Key.F12.__enum__ = d.Key;
    d.Key.F13 = ["F13", 64];
    d.Key.F13.toString =
        o;
    d.Key.F13.__enum__ = d.Key;
    d.Key.F14 = ["F14", 65];
    d.Key.F14.toString = o;
    d.Key.F14.__enum__ = d.Key;
    d.Key.F15 = ["F15", 66];
    d.Key.F15.toString = o;
    d.Key.F15.__enum__ = d.Key;
    d.Key.Left = ["Left", 67];
    d.Key.Left.toString = o;
    d.Key.Left.__enum__ = d.Key;
    d.Key.Up = ["Up", 68];
    d.Key.Up.toString = o;
    d.Key.Up.__enum__ = d.Key;
    d.Key.Right = ["Right", 69];
    d.Key.Right.toString = o;
    d.Key.Right.__enum__ = d.Key;
    d.Key.Down = ["Down", 70];
    d.Key.Down.toString = o;
    d.Key.Down.__enum__ = d.Key;
    d.Key.Alt = ["Alt", 71];
    d.Key.Alt.toString = o;
    d.Key.Alt.__enum__ =
        d.Key;
    d.Key.Backquote = ["Backquote", 72];
    d.Key.Backquote.toString = o;
    d.Key.Backquote.__enum__ = d.Key;
    d.Key.Backslash = ["Backslash", 73];
    d.Key.Backslash.toString = o;
    d.Key.Backslash.__enum__ = d.Key;
    d.Key.Backspace = ["Backspace", 74];
    d.Key.Backspace.toString = o;
    d.Key.Backspace.__enum__ = d.Key;
    d.Key.CapsLock = ["CapsLock", 75];
    d.Key.CapsLock.toString = o;
    d.Key.CapsLock.__enum__ = d.Key;
    d.Key.Comma = ["Comma", 76];
    d.Key.Comma.toString = o;
    d.Key.Comma.__enum__ = d.Key;
    d.Key.Command = ["Command", 77];
    d.Key.Command.toString = o;
    d.Key.Command.__enum__ =
        d.Key;
    d.Key.Control = ["Control", 78];
    d.Key.Control.toString = o;
    d.Key.Control.__enum__ = d.Key;
    d.Key.Delete = ["Delete", 79];
    d.Key.Delete.toString = o;
    d.Key.Delete.__enum__ = d.Key;
    d.Key.End = ["End", 80];
    d.Key.End.toString = o;
    d.Key.End.__enum__ = d.Key;
    d.Key.Enter = ["Enter", 81];
    d.Key.Enter.toString = o;
    d.Key.Enter.__enum__ = d.Key;
    d.Key.Equals = ["Equals", 82];
    d.Key.Equals.toString = o;
    d.Key.Equals.__enum__ = d.Key;
    d.Key.Escape = ["Escape", 83];
    d.Key.Escape.toString = o;
    d.Key.Escape.__enum__ = d.Key;
    d.Key.Home = ["Home", 84];
    d.Key.Home.toString =
        o;
    d.Key.Home.__enum__ = d.Key;
    d.Key.Insert = ["Insert", 85];
    d.Key.Insert.toString = o;
    d.Key.Insert.__enum__ = d.Key;
    d.Key.LeftBracket = ["LeftBracket", 86];
    d.Key.LeftBracket.toString = o;
    d.Key.LeftBracket.__enum__ = d.Key;
    d.Key.Minus = ["Minus", 87];
    d.Key.Minus.toString = o;
    d.Key.Minus.__enum__ = d.Key;
    d.Key.PageDown = ["PageDown", 88];
    d.Key.PageDown.toString = o;
    d.Key.PageDown.__enum__ = d.Key;
    d.Key.PageUp = ["PageUp", 89];
    d.Key.PageUp.toString = o;
    d.Key.PageUp.__enum__ = d.Key;
    d.Key.Period = ["Period", 90];
    d.Key.Period.toString = o;
    d.Key.Period.__enum__ =
        d.Key;
    d.Key.Quote = ["Quote", 91];
    d.Key.Quote.toString = o;
    d.Key.Quote.__enum__ = d.Key;
    d.Key.RightBracket = ["RightBracket", 92];
    d.Key.RightBracket.toString = o;
    d.Key.RightBracket.__enum__ = d.Key;
    d.Key.Semicolon = ["Semicolon", 93];
    d.Key.Semicolon.toString = o;
    d.Key.Semicolon.__enum__ = d.Key;
    d.Key.Shift = ["Shift", 94];
    d.Key.Shift.toString = o;
    d.Key.Shift.__enum__ = d.Key;
    d.Key.Slash = ["Slash", 95];
    d.Key.Slash.toString = o;
    d.Key.Slash.__enum__ = d.Key;
    d.Key.Space = ["Space", 96];
    d.Key.Space.toString = o;
    d.Key.Space.__enum__ = d.Key;
    d.Key.Tab = ["Tab", 97];
    d.Key.Tab.toString = o;
    d.Key.Tab.__enum__ = d.Key;
    d.Key.Menu = ["Menu", 98];
    d.Key.Menu.toString = o;
    d.Key.Menu.__enum__ = d.Key;
    d.Key.Search = ["Search", 99];
    d.Key.Search.toString = o;
    d.Key.Search.__enum__ = d.Key;
    d.Key.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = d.Key;
        a.toString = o;
        return a
    };
    d.Keyboard = function() {};
    i["flambe.input.Keyboard"] = d.Keyboard;
    d.Keyboard.__name__ = ["flambe", "input", "Keyboard"];
    d.Keyboard.prototype = {
        __class__: d.Keyboard
    };
    d.KeyboardEvent = function() {
        this._internal_init(0, null)
    };
    i["flambe.input.KeyboardEvent"] = d.KeyboardEvent;
    d.KeyboardEvent.__name__ = ["flambe", "input", "KeyboardEvent"];
    d.KeyboardEvent.prototype = {
        _internal_init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: d.KeyboardEvent
    };
    d.Mouse = function() {};
    i["flambe.input.Mouse"] = d.Mouse;
    d.Mouse.__name__ = ["flambe", "input", "Mouse"];
    d.Mouse.prototype = {
        __class__: d.Mouse
    };
    d.MouseButton = i["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    d.MouseButton.Left = ["Left", 0];
    d.MouseButton.Left.toString = o;
    d.MouseButton.Left.__enum__ = d.MouseButton;
    d.MouseButton.Middle = ["Middle", 1];
    d.MouseButton.Middle.toString = o;
    d.MouseButton.Middle.__enum__ = d.MouseButton;
    d.MouseButton.Right = ["Right", 2];
    d.MouseButton.Right.toString = o;
    d.MouseButton.Right.__enum__ = d.MouseButton;
    d.MouseButton.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = d.MouseButton;
        a.toString = o;
        return a
    };
    d.MouseCursor = i["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default",
            "Button", "None"
        ]
    };
    d.MouseCursor.Default = ["Default", 0];
    d.MouseCursor.Default.toString = o;
    d.MouseCursor.Default.__enum__ = d.MouseCursor;
    d.MouseCursor.Button = ["Button", 1];
    d.MouseCursor.Button.toString = o;
    d.MouseCursor.Button.__enum__ = d.MouseCursor;
    d.MouseCursor.None = ["None", 2];
    d.MouseCursor.None.toString = o;
    d.MouseCursor.None.__enum__ = d.MouseCursor;
    d.MouseEvent = function() {
        this._internal_init(0, 0, 0, null)
    };
    i["flambe.input.MouseEvent"] = d.MouseEvent;
    d.MouseEvent.__name__ = ["flambe", "input", "MouseEvent"];
    d.MouseEvent.prototype = {
        _internal_init: function(a, b, c, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d
        },
        __class__: d.MouseEvent
    };
    d.Pointer = function() {};
    i["flambe.input.Pointer"] = d.Pointer;
    d.Pointer.__name__ = ["flambe", "input", "Pointer"];
    d.Pointer.prototype = {
        __class__: d.Pointer
    };
    d.EventSource = i["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    d.EventSource.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = d.EventSource;
        a.toString = o;
        return a
    };
    d.EventSource.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = d.EventSource;
        a.toString = o;
        return a
    };
    d.PointerEvent = function() {
        this._internal_init(0, 0, 0, null, null)
    };
    i["flambe.input.PointerEvent"] = d.PointerEvent;
    d.PointerEvent.__name__ = ["flambe", "input", "PointerEvent"];
    d.PointerEvent.prototype = {
        _internal_init: function(a, b, c, d, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = e;
            this._internal_stopped = !1
        },
        __class__: d.PointerEvent
    };
    d.Touch = function() {};
    i["flambe.input.Touch"] = d.Touch;
    d.Touch.__name__ = ["flambe", "input", "Touch"];
    d.Touch.prototype = {
        __class__: d.Touch
    };
    d.TouchPoint = function(a) {
        this.id = a;
        this._internal_source = d.EventSource.Touch(this)
    };
    i["flambe.input.TouchPoint"] = d.TouchPoint;
    d.TouchPoint.__name__ = ["flambe", "input", "TouchPoint"];
    d.TouchPoint.prototype = {
        _internal_init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: d.TouchPoint
    };
    J.FMath = function() {};
    i["flambe.math.FMath"] = J.FMath;
    J.FMath.__name__ = ["flambe", "math", "FMath"];
    J.FMath.max = function(a, b) {
        return a > b ? a : b
    };
    J.FMath.clamp = function(a, b, c) {
        return a < b ? b :
            a > c ? c : a
    };
    J.Matrix = function() {
        this.identity()
    };
    i["flambe.math.Matrix"] = J.Matrix;
    J.Matrix.__name__ = ["flambe", "math", "Matrix"];
    J.Matrix.prototype = {
        inverseTransform: function(a, b, c) {
            var d = this.determinant();
            if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d;
            return !0
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        compose: function(a, b, c, d, e) {
            var f =
                Math.sin(e),
                e = Math.cos(e);
            this.set(e * c, f * c, -f * d, e * d, a, b)
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        set: function(a, b, c, d, e, f) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = e;
            this.m10 = b;
            this.m11 = d;
            this.m12 = f
        },
        __class__: J.Matrix
    };
    J.Rectangle = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d)
    };
    i["flambe.math.Rectangle"] = J.Rectangle;
    J.Rectangle.__name__ = ["flambe", "math", "Rectangle"];
    J.Rectangle.prototype = {
        contains: function(a, b) {
            a -= this.x;
            b -= this.y;
            return 0 <= a && 0 <= b && a <=
                this.width && b <= this.height
        },
        set: function(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = d
        },
        __class__: J.Rectangle
    };
    e.BasicAssetPackLoader = function(a, b) {
        this._platform = a;
        this.promise = new m.Promise;
        this._bytesLoaded = new I;
        this._pack = new e._BasicAssetPackLoader.BasicAssetPack(b);
        var c = ca.array(b);
        if (0 == c.length) this.handleSuccess();
        else {
            for (var d = 0, f = new I, g = 0; g < c.length;) {
                var h = c[g];
                ++g;
                var i = f.get(h.name);
                null == i && (i = [], f.set(h.name, i));
                i.push(h)
            }
            this._assetsRemaining = ca.count(f);
            for (c = f.iterator(); c.hasNext();)
                if (i =
                    c.next(), i = 1 < i.length ? this.pickBestEntry(i) : i[0], f = this.createPlaceholder(i), null != f) this.handleLoad(i, f);
                else {
                    d += i.bytes;
                    f = b.getFullURL(i);
                    try {
                        this.loadEntry(f, i)
                    } catch (k) {
                        this.handleError(i, "Unexpected error: " + r.string(k))
                    }
                } this.promise.set_total(d)
        }
    };
    i["flambe.platform.BasicAssetPackLoader"] = e.BasicAssetPackLoader;
    e.BasicAssetPackLoader.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    e.BasicAssetPackLoader.prototype = {
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        handleError: function(a, b) {
            this.promise.error.emit1(m.Strings.withFields(b, ["url", a.url]))
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, d = this._bytesLoaded.iterator(); d.hasNext();) var e = d.next(),
                c = c + e;
            this.promise.set_progress(c)
        },
        handleLoad: function(a, b) {
            this.handleProgress(a, a.bytes);
            var c = a.name;
            switch (a.type[1]) {
                case 0:
                    this._pack.textures.set(c, b);
                    break;
                case 1:
                    this._pack.sounds.set(c, b);
                    break;
                case 2:
                    this._pack.files.set(c,
                        b)
            }
            this._assetsRemaining -= 1;
            0 >= this._assetsRemaining && this.handleSuccess()
        },
        getAudioFormats: function() {
            return []
        },
        loadEntry: function() {},
        createPlaceholder: function(a) {
            switch (a.type[1]) {
                case 1:
                    if (!ca.has(this.getAudioFormats(), a.getUrlExtension())) return e.DummySound.getInstance()
            }
            return null
        },
        pickBestEntry: function(a) {
            switch (a[0].type[1]) {
                case 1:
                    for (var b = this.getAudioFormats(), c = 0; c < b.length;) {
                        var d = b[c];
                        ++c;
                        for (var e = 0; e < a.length;) {
                            var f = a[e];
                            ++e;
                            if (f.getUrlExtension() == d) return f
                        }
                    }
            }
            return a[0]
        },
        __class__: e.BasicAssetPackLoader
    };
    e._BasicAssetPackLoader = {};
    e._BasicAssetPackLoader.BasicAssetPack = function(a) {
        this._manifest = a;
        this.textures = new I;
        this.sounds = new I;
        this.files = new I
    };
    i["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = e._BasicAssetPackLoader.BasicAssetPack;
    e._BasicAssetPackLoader.BasicAssetPack.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    e._BasicAssetPackLoader.BasicAssetPack.__interfaces__ = [y.AssetPack];
    e._BasicAssetPackLoader.BasicAssetPack.prototype = {
        get_manifest: function() {
            return this._manifest
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw m.Strings.withFields("Missing file", ["name", a]);
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw m.Strings.withFields("Missing sound", ["name", a]);
            return c
        },
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw m.Strings.withFields("Missing texture", ["name", a]);
            return c
        },
        __class__: e._BasicAssetPackLoader.BasicAssetPack
    };
    e.BasicKeyboard = function() {
        this.down = new m.Signal1;
        this.up = new m.Signal1;
        this.backButton = new m.Signal0;
        this._keyStates = new W
    };
    i["flambe.platform.BasicKeyboard"] = e.BasicKeyboard;
    e.BasicKeyboard.__name__ = ["flambe", "platform", "BasicKeyboard"];
    e.BasicKeyboard.__interfaces__ = [d.Keyboard];
    e.BasicKeyboard.prototype = {
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a), e.BasicKeyboard._sharedEvent._internal_init(e.BasicKeyboard._sharedEvent.id + 1, e.KeyCodes.toKey(a)), this.up.emit1(e.BasicKeyboard._sharedEvent))
        },
        submitDown: function(a) {
            if (16777238 == a) return null != this.backButton._head ? (this.backButton.emit0(), !0) : !1;
            this._keyStates.exists(a) || (this._keyStates.set(a, !0), e.BasicKeyboard._sharedEvent._internal_init(e.BasicKeyboard._sharedEvent.id + 1, e.KeyCodes.toKey(a)), this.down.emit1(e.BasicKeyboard._sharedEvent));
            return !0
        },
        isDown: function(a) {
            return this._keyStates.exists(e.KeyCodes.toKeyCode(a))
        },
        get_supported: function() {
            return !0
        },
        __class__: e.BasicKeyboard
    };
    e.BasicMouse = function(a) {
        this._pointer = a;
        this._source =
            d.EventSource.Mouse(e.BasicMouse._sharedEvent);
        this.down = new m.Signal1;
        this.move = new m.Signal1;
        this.up = new m.Signal1;
        this.scroll = new m.Signal1;
        this._y = this._x = 0;
        this._cursor = d.MouseCursor.Default;
        this._buttonStates = new W
    };
    i["flambe.platform.BasicMouse"] = e.BasicMouse;
    e.BasicMouse.__name__ = ["flambe", "platform", "BasicMouse"];
    e.BasicMouse.__interfaces__ = [d.Mouse];
    e.BasicMouse.prototype = {
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            e.BasicMouse._sharedEvent._internal_init(e.BasicMouse._sharedEvent.id + 1,
                a, b, c)
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit1(c);
            return !0
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, e.MouseCodes.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit1(e.BasicMouse._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit1(e.BasicMouse._sharedEvent)
        },
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) ||
                (this._buttonStates.set(c, !0), this.prepare(a, b, e.MouseCodes.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit1(e.BasicMouse._sharedEvent))
        },
        isDown: function(a) {
            return this._buttonStates.exists(e.MouseCodes.toButtonCode(a))
        },
        set_cursor: function(a) {
            return this._cursor = a
        },
        get_cursor: function() {
            return this._cursor
        },
        get_y: function() {
            return this._y
        },
        get_x: function() {
            return this._x
        },
        get_supported: function() {
            return !0
        },
        __class__: e.BasicMouse
    };
    e.BasicPointer = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new m.Signal1;
        this.move = new m.Signal1;
        this.up = new m.Signal1;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    i["flambe.platform.BasicPointer"] = e.BasicPointer;
    e.BasicPointer.__name__ = ["flambe", "platform", "BasicPointer"];
    e.BasicPointer.__interfaces__ = [d.Pointer];
    e.BasicPointer.prototype = {
        prepare: function(a, b, c, d) {
            this._x = a;
            this._y = b;
            e.BasicPointer._sharedEvent._internal_init(e.BasicPointer._sharedEvent.id + 1, a, b, c, d)
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this._isDown = !1;
                var d = [],
                    f = j.Sprite.hitTest(E.root, a, b);
                if (null != f) {
                    var g = f.owner;
                    do {
                        var h = g._compMap.Sprite_1;
                        null != h && d.push(h);
                        g = g.parent
                    } while (null != g)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (h = d[a], ++a, h = h._internal_pointerUp, null != h && (h.emit1(e.BasicPointer._sharedEvent), e.BasicPointer._sharedEvent._internal_stopped)) return;
                this.up.emit1(e.BasicPointer._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            var d = [],
                f = j.Sprite.hitTest(E.root, a, b);
            if (null != f) {
                var g = f.owner;
                do {
                    var h = g._compMap.Sprite_1;
                    null != h && d.push(h);
                    g = g.parent
                } while (null != g)
            }
            this.prepare(a, b, f, c);
            for (a = 0; a < d.length;)
                if (h = d[a], ++a, h = h._internal_pointerMove, null != h && (h.emit1(e.BasicPointer._sharedEvent), e.BasicPointer._sharedEvent._internal_stopped)) return;
            this.move.emit1(e.BasicPointer._sharedEvent)
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this._isDown = !0;
                var d = [],
                    f = j.Sprite.hitTest(E.root, a, b);
                if (null != f) {
                    var g = f.owner;
                    do {
                        var h = g._compMap.Sprite_1;
                        null != h && d.push(h);
                        g = g.parent
                    } while (null != g)
                }
                this.prepare(a, b, f, c);
                for (a = 0; a < d.length;)
                    if (h =
                        d[a], ++a, h = h._internal_pointerDown, null != h && (h.emit1(e.BasicPointer._sharedEvent), e.BasicPointer._sharedEvent._internal_stopped)) return;
                this.down.emit1(e.BasicPointer._sharedEvent)
            }
        },
        isDown: function() {
            return this._isDown
        },
        get_y: function() {
            return this._y
        },
        get_x: function() {
            return this._x
        },
        get_supported: function() {
            return !0
        },
        __class__: e.BasicPointer
    };
    e.BasicTouch = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new W;
        this._points = [];
        this.down = new m.Signal1;
        this.move = new m.Signal1;
        this.up = new m.Signal1
    };
    i["flambe.platform.BasicTouch"] = e.BasicTouch;
    e.BasicTouch.__name__ = ["flambe", "platform", "BasicTouch"];
    e.BasicTouch.__interfaces__ = [d.Touch];
    e.BasicTouch.prototype = {
        submitUp: function(a, b, c) {
            var d = this._pointMap.get(a);
            null != d && (d._internal_init(b, c), this._pointMap.remove(a), A.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._internal_source)), this.up.emit1(d))
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a._internal_init(b,
                c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._internal_source), this.move.emit1(a))
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var e = new d.TouchPoint(a);
                e._internal_init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._internal_source));
                this.down.emit1(e)
            }
        },
        get_points: function() {
            return this._points.slice()
        },
        get_maxPoints: function() {
            return this._maxPoints
        },
        get_supported: function() {
            return !0
        },
        __class__: e.BasicTouch
    };
    H.Sound = function() {};
    i["flambe.sound.Sound"] = H.Sound;
    H.Sound.__name__ = ["flambe", "sound", "Sound"];
    H.Sound.prototype = {
        __class__: H.Sound
    };
    e.DummySound = function() {
        this._playback = new e.DummyPlayback(this)
    };
    i["flambe.platform.DummySound"] = e.DummySound;
    e.DummySound.__name__ = ["flambe", "platform", "DummySound"];
    e.DummySound.__interfaces__ = [H.Sound];
    e.DummySound.getInstance = function() {
        null == e.DummySound._instance && (e.DummySound._instance = new e.DummySound);
        return e.DummySound._instance
    };
    e.DummySound.prototype = {
        get_duration: function() {
            return 0
        },
        loop: function() {
            return this._playback
        },
        play: function() {
            return this._playback
        },
        __class__: e.DummySound
    };
    H.Playback = function() {};
    i["flambe.sound.Playback"] = H.Playback;
    H.Playback.__name__ = ["flambe", "sound", "Playback"];
    H.Playback.__interfaces__ = [m.Disposable];
    H.Playback.prototype = {
        __class__: H.Playback
    };
    e.DummyPlayback = function(a) {
        this._sound = a;
        this.volume = new F.AnimatedFloat(0)
    };
    i["flambe.platform.DummyPlayback"] = e.DummyPlayback;
    e.DummyPlayback.__name__ = ["flambe", "platform",
        "DummyPlayback"
    ];
    e.DummyPlayback.__interfaces__ = [H.Playback];
    e.DummyPlayback.prototype = {
        dispose: function() {},
        get_position: function() {
            return 0
        },
        get_ended: function() {
            return !0
        },
        set_paused: function() {
            return !0
        },
        get_paused: function() {
            return !0
        },
        get_sound: function() {
            return this._sound
        },
        __class__: e.DummyPlayback
    };
    ba = {
        Storage: function() {}
    };
    i["flambe.storage.Storage"] = ba.Storage;
    ba.Storage.__name__ = ["flambe", "storage", "Storage"];
    ba.Storage.prototype = {
        __class__: ba.Storage
    };
    e.DummyStorage = function() {
        this.clear()
    };
    i["flambe.platform.DummyStorage"] = e.DummyStorage;
    e.DummyStorage.__name__ = ["flambe", "platform", "DummyStorage"];
    e.DummyStorage.__interfaces__ = [ba.Storage];
    e.DummyStorage.prototype = {
        clear: function() {
            this._hash = new I
        },
        remove: function(a) {
            this._hash.remove(a)
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get_supported: function() {
            return !1
        },
        __class__: e.DummyStorage
    };
    e.DummyTouch = function() {
        this.down = new m.Signal1;
        this.move = new m.Signal1;
        this.up = new m.Signal1
    };
    i["flambe.platform.DummyTouch"] = e.DummyTouch;
    e.DummyTouch.__name__ = ["flambe", "platform", "DummyTouch"];
    e.DummyTouch.__interfaces__ = [d.Touch];
    e.DummyTouch.prototype = {
        get_points: function() {
            return []
        },
        get_maxPoints: function() {
            return 0
        },
        get_supported: function() {
            return !1
        },
        __class__: e.DummyTouch
    };
    e.EventGroup = function() {
        this._entries = []
    };
    i["flambe.platform.EventGroup"] = e.EventGroup;
    e.EventGroup.__name__ = ["flambe", "platform", "EventGroup"];
    e.EventGroup.__interfaces__ = [m.Disposable];
    e.EventGroup.prototype = {
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        addDisposingListener: function(a, b, c) {
            var d = this;
            this.addListener(a, b, function(a) {
                d.dispose();
                c(a)
            })
        },
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new e._EventGroup.Entry(a, b, c))
        },
        __class__: e.EventGroup
    };
    e._EventGroup = {};
    e._EventGroup.Entry = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    i["flambe.platform._EventGroup.Entry"] =
        e._EventGroup.Entry;
    e._EventGroup.Entry.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    e._EventGroup.Entry.prototype = {
        __class__: e._EventGroup.Entry
    };
    e.KeyCodes = function() {};
    i["flambe.platform.KeyCodes"] = e.KeyCodes;
    e.KeyCodes.__name__ = ["flambe", "platform", "KeyCodes"];
    e.KeyCodes.toKey = function(a) {
        switch (a) {
            case 65:
                return d.Key.A;
            case 66:
                return d.Key.B;
            case 67:
                return d.Key.C;
            case 68:
                return d.Key.D;
            case 69:
                return d.Key.E;
            case 70:
                return d.Key.F;
            case 71:
                return d.Key.G;
            case 72:
                return d.Key.H;
            case 73:
                return d.Key.I;
            case 74:
                return d.Key.J;
            case 75:
                return d.Key.K;
            case 76:
                return d.Key.L;
            case 77:
                return d.Key.M;
            case 78:
                return d.Key.N;
            case 79:
                return d.Key.O;
            case 80:
                return d.Key.P;
            case 81:
                return d.Key.Q;
            case 82:
                return d.Key.R;
            case 83:
                return d.Key.S;
            case 84:
                return d.Key.T;
            case 85:
                return d.Key.U;
            case 86:
                return d.Key.V;
            case 87:
                return d.Key.W;
            case 88:
                return d.Key.X;
            case 89:
                return d.Key.Y;
            case 90:
                return d.Key.Z;
            case 48:
                return d.Key.Number0;
            case 49:
                return d.Key.Number1;
            case 50:
                return d.Key.Number2;
            case 51:
                return d.Key.Number3;
            case 52:
                return d.Key.Number4;
            case 53:
                return d.Key.Number5;
            case 54:
                return d.Key.Number6;
            case 55:
                return d.Key.Number7;
            case 56:
                return d.Key.Number8;
            case 57:
                return d.Key.Number9;
            case 96:
                return d.Key.Numpad0;
            case 97:
                return d.Key.Numpad1;
            case 98:
                return d.Key.Numpad2;
            case 99:
                return d.Key.Numpad3;
            case 100:
                return d.Key.Numpad4;
            case 101:
                return d.Key.Numpad5;
            case 102:
                return d.Key.Numpad6;
            case 103:
                return d.Key.Numpad7;
            case 104:
                return d.Key.Numpad8;
            case 105:
                return d.Key.Numpad9;
            case 107:
                return d.Key.NumpadAdd;
            case 110:
                return d.Key.NumpadDecimal;
            case 111:
                return d.Key.NumpadDivide;
            case 108:
                return d.Key.NumpadEnter;
            case 106:
                return d.Key.NumpadMultiply;
            case 109:
                return d.Key.NumpadSubtract;
            case 112:
                return d.Key.F1;
            case 113:
                return d.Key.F2;
            case 114:
                return d.Key.F3;
            case 115:
                return d.Key.F4;
            case 116:
                return d.Key.F5;
            case 117:
                return d.Key.F6;
            case 118:
                return d.Key.F7;
            case 119:
                return d.Key.F8;
            case 120:
                return d.Key.F9;
            case 121:
                return d.Key.F10;
            case 122:
                return d.Key.F11;
            case 123:
                return d.Key.F12;
            case 37:
                return d.Key.Left;
            case 38:
                return d.Key.Up;
            case 39:
                return d.Key.Right;
            case 40:
                return d.Key.Down;
            case 18:
                return d.Key.Alt;
            case 192:
                return d.Key.Backquote;
            case 220:
                return d.Key.Backslash;
            case 8:
                return d.Key.Backspace;
            case 20:
                return d.Key.CapsLock;
            case 188:
                return d.Key.Comma;
            case 15:
                return d.Key.Command;
            case 17:
                return d.Key.Control;
            case 46:
                return d.Key.Delete;
            case 35:
                return d.Key.End;
            case 13:
                return d.Key.Enter;
            case 187:
                return d.Key.Equals;
            case 27:
                return d.Key.Escape;
            case 36:
                return d.Key.Home;
            case 45:
                return d.Key.Insert;
            case 219:
                return d.Key.LeftBracket;
            case 189:
                return d.Key.Minus;
            case 34:
                return d.Key.PageDown;
            case 33:
                return d.Key.PageUp;
            case 190:
                return d.Key.Period;
            case 222:
                return d.Key.Quote;
            case 221:
                return d.Key.RightBracket;
            case 186:
                return d.Key.Semicolon;
            case 16:
                return d.Key.Shift;
            case 191:
                return d.Key.Slash;
            case 32:
                return d.Key.Space;
            case 9:
                return d.Key.Tab;
            case 16777234:
                return d.Key.Menu;
            case 16777247:
                return d.Key.Search
        }
        return d.Key.Unknown(a)
    };
    e.KeyCodes.toKeyCode = function(a) {
        switch (a[1]) {
            case 0:
                return 65;
            case 1:
                return 66;
            case 2:
                return 67;
            case 3:
                return 68;
            case 4:
                return 69;
            case 5:
                return 70;
            case 6:
                return 71;
            case 7:
                return 72;
            case 8:
                return 73;
            case 9:
                return 74;
            case 10:
                return 75;
            case 11:
                return 76;
            case 12:
                return 77;
            case 13:
                return 78;
            case 14:
                return 79;
            case 15:
                return 80;
            case 16:
                return 81;
            case 17:
                return 82;
            case 18:
                return 83;
            case 19:
                return 84;
            case 20:
                return 85;
            case 21:
                return 86;
            case 22:
                return 87;
            case 23:
                return 88;
            case 24:
                return 89;
            case 25:
                return 90;
            case 26:
                return 48;
            case 27:
                return 49;
            case 28:
                return 50;
            case 29:
                return 51;
            case 30:
                return 52;
            case 31:
                return 53;
            case 32:
                return 54;
            case 33:
                return 55;
            case 34:
                return 56;
            case 35:
                return 57;
            case 36:
                return 96;
            case 37:
                return 97;
            case 38:
                return 98;
            case 39:
                return 99;
            case 40:
                return 100;
            case 41:
                return 101;
            case 42:
                return 102;
            case 43:
                return 103;
            case 44:
                return 104;
            case 45:
                return 105;
            case 46:
                return 107;
            case 47:
                return 110;
            case 48:
                return 111;
            case 49:
                return 108;
            case 50:
                return 106;
            case 51:
                return 109;
            case 52:
                return 112;
            case 53:
                return 113;
            case 54:
                return 114;
            case 55:
                return 115;
            case 56:
                return 116;
            case 57:
                return 117;
            case 58:
                return 118;
            case 59:
                return 119;
            case 60:
                return 120;
            case 61:
                return 121;
            case 62:
                return 122;
            case 63:
                return 123;
            case 64:
                return 124;
            case 65:
                return 125;
            case 66:
                return 126;
            case 67:
                return 37;
            case 68:
                return 38;
            case 69:
                return 39;
            case 70:
                return 40;
            case 71:
                return 18;
            case 72:
                return 192;
            case 73:
                return 220;
            case 74:
                return 8;
            case 75:
                return 20;
            case 76:
                return 188;
            case 77:
                return 15;
            case 78:
                return 17;
            case 79:
                return 46;
            case 80:
                return 35;
            case 81:
                return 13;
            case 82:
                return 187;
            case 83:
                return 27;
            case 84:
                return 36;
            case 85:
                return 45;
            case 86:
                return 219;
            case 87:
                return 189;
            case 88:
                return 34;
            case 89:
                return 33;
            case 90:
                return 190;
            case 91:
                return 222;
            case 92:
                return 221;
            case 93:
                return 186;
            case 94:
                return 16;
            case 95:
                return 191;
            case 96:
                return 32;
            case 97:
                return 9;
            case 98:
                return 16777234;
            case 99:
                return 16777247;
            case 100:
                return a[2]
        }
    };
    e.MainLoop = function() {
        this._tickables = []
    };
    i["flambe.platform.MainLoop"] = e.MainLoop;
    e.MainLoop.__name__ = ["flambe", "platform", "MainLoop"];
    e.MainLoop.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_5;
        if (null != c && (c._internal_realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (var d = a.firstComponent; null != d;) c = d.next, d.onUpdate(b), d = c;
        for (d = a.firstChild; null != d;) c = d.next, e.MainLoop.updateEntity(d, b), d = c
    };
    e.MainLoop.prototype = {
        addTickable: function(a) {
            this._tickables.push(a)
        },
        render: function(a) {
            var b = a.willRender();
            null != b && (j.Sprite.render(E.root, b), a.didRender())
        },
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ?
                        this._tickables.splice(b, 1) : ++b
                }
                e.MainLoop.updateEntity(E.root, a)
            }
        },
        __class__: e.MainLoop
    };
    e.ManifestBuilder = function() {};
    i["flambe.platform.ManifestBuilder"] = e.ManifestBuilder;
    e.ManifestBuilder.__name__ = ["flambe", "platform", "ManifestBuilder"];
    e.MouseCodes = function() {};
    i["flambe.platform.MouseCodes"] = e.MouseCodes;
    e.MouseCodes.__name__ = ["flambe", "platform", "MouseCodes"];
    e.MouseCodes.toButton = function(a) {
        switch (a) {
            case 0:
                return d.MouseButton.Left;
            case 1:
                return d.MouseButton.Middle;
            case 2:
                return d.MouseButton.Right
        }
        return d.MouseButton.Unknown(a)
    };
    e.MouseCodes.toButtonCode = function(a) {
        switch (a[1]) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return a[2]
        }
    };
    e.Renderer = function() {};
    i["flambe.platform.Renderer"] = e.Renderer;
    e.Renderer.__name__ = ["flambe", "platform", "Renderer"];
    e.Renderer.prototype = {
        __class__: e.Renderer
    };
    e.Tickable = function() {};
    i["flambe.platform.Tickable"] = e.Tickable;
    e.Tickable.__name__ = ["flambe", "platform", "Tickable"];
    e.Tickable.prototype = {
        __class__: e.Tickable
    };
    e.html.CanvasGraphics = function(a) {
        this._firstDraw = this._drawToTemp = !1;
        this._canvasCtx = a.getContext("2d");
        this.clear()
    };
    i["flambe.platform.html.CanvasGraphics"] = e.html.CanvasGraphics;
    e.html.CanvasGraphics.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    e.html.CanvasGraphics.__interfaces__ = [j.Graphics];
    e.html.CanvasGraphics.prototype = {
        erase: function() {
            this._canvasCtx.clearRect(0, 0, this._canvasCtx.canvas.width, this._canvasCtx.canvas.height)
        },
        clip2: function(a, b) {
            this._tempGraphics.erase();
            this._tempGraphics.save();
            var c = b.getLocalMatrix();
            this._tempGraphics.transform(c.m00,
                c.m10, c.m01, c.m11, c.m02, c.m12);
            this._tempGraphics.setAlpha(b.alpha._value);
            G.__instanceof(b, j.MaskSprite) ? (c = G.__cast(b, j.MaskSprite), G.__instanceof(c.shape, j.FillSprite) && this.tint(c.shape, c.image, !1)) : b.draw(this._tempGraphics);
            this._tempGraphics.restore();
            this._tempGraphics.save();
            this._tempGraphics.setGlobalComposite("destination-in");
            c = a.getLocalMatrix();
            this._tempGraphics.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12);
            this._tempGraphics.setAlpha(a.alpha._value);
            a.draw(this._tempGraphics);
            this._tempGraphics.setGlobalComposite("source-over");
            this.setGlobalComposite("source-over");
            this._canvasCtx.drawImage(this._tempCanvas, 0, 0);
            this._tempGraphics.restore()
        },
        clip: function(a, b) {
            this.save();
            var c = a.getLocalMatrix();
            this.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12);
            a.draw(this);
            this.restore();
            this.save();
            this._canvasCtx.clip();
            c = b.getLocalMatrix();
            this.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12);
            b.draw(this);
            this.restore()
        },
        tint: function(a, b, c) {
            null == c && (c = !0);
            c && this._tempGraphics.erase();
            this._tempGraphics.setAlpha(a.alpha._value);
            a.draw(this._tempGraphics);
            this._tempGraphics.setGlobalComposite("destination-atop");
            this._tempGraphics.setAlpha(b.alpha._value);
            b.draw(this._tempGraphics);
            this._tempGraphics.setGlobalComposite("source-over");
            this.setGlobalComposite("source-over");
            c && this._canvasCtx.drawImage(this._tempCanvas, 0, 0)
        },
        mask: function(a, b) {
            G.__instanceof(a, j.FillSprite) ? this.tint(a, b) : G.__instanceof(a, j.ShapeSprite) ? this.clip(a, b) : this.clip2(a, b)
        },
        arc: function(a, b, c, d, e) {
            (this._drawToTemp ? this._tempGraphics._canvasCtx :
                this._canvasCtx).arc(a, b, c, d, e)
        },
        isPointInPath: function(a, b) {
            return this._canvasCtx.isPointInPath(a, b)
        },
        bezierCurveTo: function(a, b, c, d, e, f) {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).bezierCurveTo(a, b, c, d, e, f)
        },
        quadraticCurveTo: function(a, b, c, d) {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).quadraticCurveTo(a, b, c, d)
        },
        drawShapeSprite: function() {
            this._canvasCtx.drawImage(this._tempCanvas, 0, 0);
            this._tempGraphics.erase()
        },
        endFill: function() {
            (this._drawToTemp ? this._tempGraphics._canvasCtx :
                this._canvasCtx).fill();
            this._drawToTemp = !1
        },
        beginFill: function(a) {
            this._drawToTemp = !0;
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).fillStyle = "#" + ("00000" + a.toString(16)).slice(-6)
        },
        endStroke: function() {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).stroke();
            this._drawToTemp = !1
        },
        beginStroke: function(a, b) {
            this._drawToTemp = !0;
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).strokeStyle = "#" + ("00000" + a.toString(16)).slice(-6);
            (this._drawToTemp ? this._tempGraphics._canvasCtx :
                this._canvasCtx).lineWidth = b
        },
        closePath: function() {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).closePath()
        },
        beginPath: function() {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).beginPath()
        },
        lineTo: function(a, b) {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).lineTo(a, b)
        },
        moveTo: function(a, b) {
            (this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).moveTo(a, b)
        },
        willRender: function() {
            this._firstDraw = !0
        },
        applyScissor: function(a, b, c, d) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
            this._canvasCtx.clip()
        },
        setGlobalComposite: function(a) {
            this._canvasCtx.globalCompositeOperation = a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "source-over"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        setAlpha: function(a) {
            this._canvasCtx.globalAlpha = a
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        fillRect: function(a, b, c, d, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation =
                "copy", this.fillRect(a, b, c, d, e), this._canvasCtx.globalCompositeOperation = "source-over") : (this._canvasCtx.fillStyle = "#" + ("00000" + a.toString(16)).slice(-6), this._canvasCtx.fillRect(b | 0, c | 0, d | 0, e | 0))
        },
        drawPattern: function(a, b, c, d, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawPattern(a, b, c, d, e), this._canvasCtx.globalCompositeOperation = "source-over") : (null == a.pattern && (a.pattern = this._canvasCtx.createPattern(a.image, "repeat")), this._canvasCtx.fillStyle =
                a.pattern, this._canvasCtx.fillRect(b | 0, c | 0, d | 0, e | 0))
        },
        drawSubImage: function(a, b, c, d, e, f, g) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubImage(a, b, c, d, e, f, g), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.image, d | 0, e | 0, f | 0, g | 0, b | 0, c | 0, f | 0, g | 0)
        },
        drawImage: function(a, b, c) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawImage(a, b, c), this._canvasCtx.globalCompositeOperation =
                "source-over") : this._canvasCtx.drawImage(a.image, b | 0, c | 0)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        transform: function(a, b, c, d, e, f) {
            this._canvasCtx.transform(a, b, c, d, e | 0, f | 0)
        },
        rotate: function(a) {
            this._canvasCtx.rotate(3.141592653589793 * a / 180)
        },
        scale: function(a, b) {
            this._canvasCtx.scale(a, b)
        },
        translate: function(a, b) {
            this._canvasCtx.translate(a | 0, b | 0)
        },
        save: function() {
            this._canvasCtx.save()
        },
        clear: function() {
            this._canvasCtx.fillStyle = "#000000";
            this._canvasCtx.fillRect(0, 0, this._canvasCtx.canvas.width,
                this._canvasCtx.canvas.height)
        },
        getTemp: function() {
            this._tempCanvas = e.html.HtmlPlatform.instance.getTempCanvas();
            this._tempGraphics = e.html.HtmlPlatform.instance.getTempGraphics()
        },
        __class__: e.html.CanvasGraphics
    };
    e.html.CanvasRenderer = function(a) {
        this._drawCtx = new e.html.CanvasGraphics(a);
        this._drawCtx.clear();
        this._drawCtx.getTemp()
    };
    i["flambe.platform.html.CanvasRenderer"] = e.html.CanvasRenderer;
    e.html.CanvasRenderer.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    e.html.CanvasRenderer.__interfaces__ = [e.Renderer];
    e.html.CanvasRenderer.prototype = {
        didRender: function() {},
        willRender: function() {
            this._drawCtx.willRender();
            return this._drawCtx
        },
        createEmptyTexture: function(a, b) {
            var c = x.document.createElement("canvas");
            c.width = a;
            c.height = b;
            return new e.html.CanvasTexture(c)
        },
        createTexture: function(a) {
            return new e.html.CanvasTexture(e.html.CanvasRenderer.CANVAS_TEXTURES ? e.html.HtmlUtil.createCanvas(a) : a)
        },
        __class__: e.html.CanvasRenderer
    };
    e.html.CanvasTexture = function(a) {
        this._graphics = null;
        this.image = a
    };
    i["flambe.platform.html.CanvasTexture"] = e.html.CanvasTexture;
    e.html.CanvasTexture.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    e.html.CanvasTexture.__interfaces__ = [j.Texture];
    e.html.CanvasTexture.prototype = {
        getContext2d: function() {
            G.__instanceof(this.image, HTMLCanvasElement) || (this.image = e.html.HtmlUtil.createCanvas(this.image));
            return this.image.getContext("2d")
        },
        get_graphics: function() {
            null == this._graphics && (this.getContext2d(), this._graphics = new e.html._CanvasTexture.InternalGraphics(this));
            return this._graphics
        },
        get_height: function() {
            return this.image.height
        },
        get_width: function() {
            return this.image.width
        },
        writePixels: function(a, b, c, d, e) {
            var f = this.getContext2d(),
                g = f.createImageData(d, e),
                h = g.data;
            if (null != h.set) h.set(a.b);
            else {
                d = 4 * d * e;
                for (e = 0; e < d;) {
                    var i = e++;
                    h[i] = a.b[i]
                }
            }
            f.putImageData(g, b, c);
            this.pattern = null
        },
        readPixels: function(a, b, c, d) {
            return V.Bytes.ofData(this.getContext2d().getImageData(a, b, c, d).data)
        },
        __class__: e.html.CanvasTexture
    };
    e.html._CanvasTexture = {};
    e.html._CanvasTexture.InternalGraphics =
        function(a) {
            e.html.CanvasGraphics.call(this, a.image);
            this._renderTarget = a
        };
    i["flambe.platform.html._CanvasTexture.InternalGraphics"] = e.html._CanvasTexture.InternalGraphics;
    e.html._CanvasTexture.InternalGraphics.__name__ = ["flambe", "platform", "html", "_CanvasTexture", "InternalGraphics"];
    e.html._CanvasTexture.InternalGraphics.__super__ = e.html.CanvasGraphics;
    e.html._CanvasTexture.InternalGraphics.prototype = w(e.html.CanvasGraphics.prototype, {
        fillRect: function(a, b, c, d, f) {
            e.html.CanvasGraphics.prototype.fillRect.call(this,
                a, b, c, d, f);
            this._renderTarget.pattern = null
        },
        drawPattern: function(a, b, c, d, f) {
            e.html.CanvasGraphics.prototype.drawPattern.call(this, a, b, c, d, f);
            this._renderTarget.pattern = null
        },
        drawSubImage: function(a, b, c, d, f, g, h) {
            e.html.CanvasGraphics.prototype.drawSubImage.call(this, a, b, c, d, f, g, h);
            this._renderTarget.pattern = null
        },
        drawImage: function(a, b, c) {
            e.html.CanvasGraphics.prototype.drawImage.call(this, a, b, c);
            this._renderTarget.pattern = null
        },
        __class__: e.html._CanvasTexture.InternalGraphics
    });
    e.html.HtmlAssetPackLoader =
        function(a, b) {
            e.BasicAssetPackLoader.call(this, a, b)
        };
    i["flambe.platform.html.HtmlAssetPackLoader"] = e.html.HtmlAssetPackLoader;
    e.html.HtmlAssetPackLoader.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    e.html.HtmlAssetPackLoader.detectAudioFormats = function() {
        var a = x.document.createElement("audio");
        if (null == a || null == a.canPlayType) return [];
        var b = new X("\\b(iPhone|iPod|iPad|Android)\\b", "");
        if (!e.html.WebAudioSound.get_supported() && b.match(x.window.navigator.userAgent)) return [];
        for (var b = [{
                extension: "m4a",
                type: "audio/mp4; codecs=mp4a"
            }, {
                extension: "mp3",
                type: "audio/mpeg"
            }, {
                extension: "ogg",
                type: "audio/ogg; codecs=vorbis"
            }, {
                extension: "wav",
                type: "audio/wav"
            }], c = [], d = 0; d < b.length;) {
            var f = b[d];
            ++d;
            var g = "";
            try {
                g = a.canPlayType(f.type)
            } catch (h) {}
            "" != g && c.push(f.extension)
        }
        return c
    };
    e.html.HtmlAssetPackLoader.supportsBlob = function() {
        if (e.html.HtmlAssetPackLoader._detectBlobSupport) {
            e.html.HtmlAssetPackLoader._detectBlobSupport = !1;
            try {
                (new XMLHttpRequest).responseType = "blob"
            } catch (a) {
                return !1
            }
            e.html.HtmlAssetPackLoader._URL =
                e.html.HtmlUtil.loadExtension("URL").value
        }
        return null != e.html.HtmlAssetPackLoader._URL && null != e.html.HtmlAssetPackLoader._URL.createObjectURL
    };
    e.html.HtmlAssetPackLoader.__super__ = e.BasicAssetPackLoader;
    e.html.HtmlAssetPackLoader.prototype = w(e.BasicAssetPackLoader.prototype, {
        handleLoad: function(a, b) {
            this.handleProgress(a, a.bytes);
            e.BasicAssetPackLoader.prototype.handleLoad.call(this, a, b)
        },
        sendRequest: function(a, b, c, d) {
            var e = this,
                f = new XMLHttpRequest,
                g = 0,
                h = function() {
                    g = Date.now();
                    f.open("GET", a, !0);
                    f.responseType = c;
                    "" == f.responseType && (f.responseType = "arraybuffer");
                    f.send()
                },
                i = 0;
            if ("undefined" != typeof f.onprogress) {
                var k = 4;
                f.onprogress = function(a) {
                    g = Date.now();
                    e.handleProgress(b, a.loaded)
                };
                i = x.window.setInterval(function() {
                    1 <= f.readyState && 5E3 < Date.now() - g && (f.abort(), --k, 0 < k ? h() : (x.window.clearInterval(i), e.handleError(b, "Failed to load asset: timeout")))
                }, 1E3)
            }
            f.onload = function() {
                x.window.clearInterval(i);
                var a = f.response;
                null == a ? a = f.responseText : "blob" == c && "arraybuffer" == f.responseType &&
                    (a = new Blob([f.response]));
                d(a)
            };
            f.onerror = function() {
                x.window.clearInterval(i);
                e.handleError(b, "Failed to load asset: error #" + r.string(f.status))
            };
            h();
            return f
        },
        getAudioFormats: function() {
            null == e.html.HtmlAssetPackLoader._audioFormats && (e.html.HtmlAssetPackLoader._audioFormats = e.html.HtmlAssetPackLoader.detectAudioFormats());
            return e.html.HtmlAssetPackLoader._audioFormats
        },
        loadEntry: function(a, b) {
            var c = this;
            switch (b.type[1]) {
                case 0:
                    var d = new Image,
                        f = new e.EventGroup;
                    f.addDisposingListener(d, "load",
                        function() {
                            e.html.HtmlAssetPackLoader.supportsBlob() && e.html.HtmlAssetPackLoader._URL.revokeObjectURL(d.src);
                            var a = c._platform.getRenderer().createTexture(d);
                            null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                        });
                    f.addDisposingListener(d, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    e.html.HtmlAssetPackLoader.supportsBlob() ? this.sendRequest(a, b, "blob", function(a) {
                        d.src = e.html.HtmlAssetPackLoader._URL.createObjectURL(a)
                    }) : d.src = a;
                    break;
                case 1:
                    if (e.html.WebAudioSound.get_supported()) this.sendRequest(a,
                        b, "arraybuffer",
                        function(a) {
                            e.html.WebAudioSound.ctx.decodeAudioData(a, function(a) {
                                c.handleLoad(b, new e.html.WebAudioSound(a))
                            }, function() {
                                c.handleLoad(b, e.DummySound.getInstance())
                            })
                        });
                    else {
                        var g = x.document.createElement("audio");
                        g.preload = "auto";
                        var h = ++e.html.HtmlAssetPackLoader._mediaRefCount;
                        null == e.html.HtmlAssetPackLoader._mediaElements && (e.html.HtmlAssetPackLoader._mediaElements = new W);
                        e.html.HtmlAssetPackLoader._mediaElements.set(h, g);
                        f = new e.EventGroup;
                        f.addDisposingListener(g, "canplaythrough",
                            function() {
                                e.html.HtmlAssetPackLoader._mediaElements.remove(h);
                                c.handleLoad(b, new e.html.HtmlSound(g))
                            });
                        f.addDisposingListener(g, "error", function() {
                            e.html.HtmlAssetPackLoader._mediaElements.remove(h);
                            var a = g.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, e.DummySound.getInstance()) : c.handleError(b, "Failed to load audio: " + r.string(g.error.code))
                        });
                        f.addListener(g, "progress", function() {
                            if (0 < g.buffered.length && 0 < g.duration) {
                                var a = g.buffered.end(0) / g.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        g.src = a;
                        g.load()
                    }
                    break;
                case 2:
                    this.sendRequest(a, b, "text", function(a) {
                        c.handleLoad(b, a)
                    })
            }
        },
        __class__: e.html.HtmlAssetPackLoader
    });
    e.html.HtmlExternal = function() {};
    i["flambe.platform.html.HtmlExternal"] = e.html.HtmlExternal;
    e.html.HtmlExternal.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    e.html.HtmlExternal.__interfaces__ = [z.External];
    e.html.HtmlExternal.prototype = {
        bind: function(a, b) {
            x.window[a] = b
        },
        call: function(a, b) {
            null == b && (b = []);
            return K.field(x.window, a).apply(null, b)
        },
        get_supported: function() {
            return !0
        },
        __class__: e.html.HtmlExternal
    };
    e.html.HtmlMouse = function(a, b) {
        e.BasicMouse.call(this, a);
        this._canvas = b
    };
    i["flambe.platform.html.HtmlMouse"] = e.html.HtmlMouse;
    e.html.HtmlMouse.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    e.html.HtmlMouse.__super__ = e.BasicMouse;
    e.html.HtmlMouse.prototype = w(e.BasicMouse.prototype, {
        set_cursor: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "";
                    break;
                case 1:
                    b = "pointer";
                    break;
                case 2:
                    b = "none"
            }
            this._canvas.style.cursor = b;
            return e.BasicMouse.prototype.set_cursor.call(this, a)
        },
        __class__: e.html.HtmlMouse
    });
    e.html.HtmlSound =
        function(a) {
            this.audioElement = a
        };
    i["flambe.platform.html.HtmlSound"] = e.html.HtmlSound;
    e.html.HtmlSound.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    e.html.HtmlSound.__interfaces__ = [H.Sound];
    e.html.HtmlSound.prototype = {
        get_duration: function() {
            return this.audioElement.duration
        },
        loop: function(a) {
            null == a && (a = 1);
            return new e.html._HtmlSound.HtmlPlayback(this, a, !0)
        },
        play: function(a) {
            null == a && (a = 1);
            return new e.html._HtmlSound.HtmlPlayback(this, a, !1)
        },
        __class__: e.html.HtmlSound
    };
    e.html._HtmlSound = {};
    e.html._HtmlSound.HtmlPlayback = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._tickableAdded = !1;
        this.volume = new F.AnimatedFloat(b, function(a) {
            d._clonedElement.volume = a
        });
        this._clonedElement = x.document.createElement("audio");
        this._clonedElement.volume = b;
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.playAudio()
    };
    i["flambe.platform.html._HtmlSound.HtmlPlayback"] = e.html._HtmlSound.HtmlPlayback;
    e.html._HtmlSound.HtmlPlayback.__name__ = ["flambe", "platform", "html", "_HtmlSound",
        "HtmlPlayback"
    ];
    e.html._HtmlSound.HtmlPlayback.__interfaces__ = [e.Tickable, H.Playback];
    e.html._HtmlSound.HtmlPlayback.prototype = {
        playAudio: function() {
            this._clonedElement.play();
            this._tickableAdded || (e.html.HtmlPlatform.instance.mainLoop.addTickable(this), this._tickableAdded = !0)
        },
        dispose: function() {
            this.set_paused(!0)
        },
        update: function(a) {
            this.volume.update(a);
            return this._clonedElement.ended || this._clonedElement.paused ? (this._tickableAdded = !1, !0) : !1
        },
        get_position: function() {
            return this._clonedElement.currentTime
        },
        get_ended: function() {
            return this._clonedElement.ended
        },
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        get_paused: function() {
            return this._clonedElement.paused
        },
        get_sound: function() {
            return this._sound
        },
        __class__: e.html._HtmlSound.HtmlPlayback
    };
    e.html.HtmlStage = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new m.Signal0;
        this.scaleFactor = e.html.HtmlStage.computeScaleFactor(a);
        1 != this.scaleFactor && (e.html.HtmlUtil.setVendorStyle(this._canvas,
            "transform-origin", "top left"), e.html.HtmlUtil.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        e.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            e.html.HtmlUtil.callLater(B(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", B(this, this.onWindowResize), !1);
        this.onWindowResize();
        this.orientation = new m.Value(null);
        null != window.orientation && (window.addEventListener("orientationchange",
            B(this, this.onOrientationChange), !1), this.onOrientationChange());
        this.fullscreen = new m.Value(!1);
        e.html.HtmlUtil.addVendorListener(x.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    i["flambe.platform.html.HtmlStage"] = e.html.HtmlStage;
    e.html.HtmlStage.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    e.html.HtmlStage.__interfaces__ = [j.Stage];
    e.html.HtmlStage.computeScaleFactor = function() {
        return 1
    };
    e.html.HtmlStage.prototype = {
        updateFullscreen: function() {
            this.fullscreen.set__(!0 ==
                e.html.HtmlUtil.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], x.document).value)
        },
        onOrientationChange: function() {
            this.orientation.set__(e.html.HtmlUtil.orientation(window.orientation))
        },
        hideMobileBrowser: function() {
            var a = this,
                b = x.document.documentElement.style;
            b.height = x.window.innerHeight + 100 + "px";
            b.width = x.window.innerWidth + "px";
            b.overflow = "visible";
            e.html.HtmlUtil.callLater(function() {
                e.html.HtmlUtil.hideMobileBrowser();
                e.html.HtmlUtil.callLater(function() {
                    b.height = x.window.innerHeight +
                        "px";
                    a.onWindowResize()
                }, 100)
            })
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                d = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == d) return !1;
            this._canvas.width = c;
            this._canvas.height = d;
            this.resize.emit0();
            return !0
        },
        onWindowResize: function() {
            var a = this._canvas.parentNode.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) {
                var a = x.document.documentElement,
                    b = e.html.HtmlUtil.loadFirstExtension(["requestFullscreen", "requestFullScreen"],
                        a).value;
                null != b && b.apply(a, [])
            } else a = e.html.HtmlUtil.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], x.document).value, null != a && a.apply(x.document, [])
        },
        requestResize: function(a, b) {
            if (this.resizeCanvas(a, b)) {
                var c = this._canvas.parentNode;
                c.style.width = a + "px";
                c.style.height = b + "px"
            }
        },
        unlockOrientation: function() {},
        lockOrientation: function() {},
        get_fullscreenSupported: function() {
            return !0 == e.html.HtmlUtil.loadFirstExtension(["fullscreenEnabled", "fullScreenEnabled"], x.document).value
        },
        get_height: function() {
            return this._canvas.height
        },
        get_width: function() {
            return this._canvas.width
        },
        __class__: e.html.HtmlStage
    };
    e.html.HtmlStorage = function(a) {
        this._storage = a
    };
    i["flambe.platform.html.HtmlStorage"] = e.html.HtmlStorage;
    e.html.HtmlStorage.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    e.html.HtmlStorage.__interfaces__ = [ba.Storage];
    e.html.HtmlStorage.prototype = {
        clear: function() {
            try {
                this._storage.clear()
            } catch (a) {
                null
            }
        },
        remove: function(a) {
            try {
                this._storage.removeItem("flambe:" + a)
            } catch (b) {
                null
            }
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" +
                    a)
            } catch (d) {
                null
            }
            if (null != c) try {
                return P.run(c)
            } catch (e) {
                null
            }
            return b
        },
        set: function(a, b) {
            var c;
            try {
                var d = new T;
                d.useCache = !0;
                d.useEnumIndex = !1;
                d.serialize(b);
                c = d.toString()
            } catch (e) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (f) {
                return !1
            }
            return !0
        },
        get_supported: function() {
            return !0
        },
        __class__: e.html.HtmlStorage
    };
    e.html.HtmlUtil = function() {};
    i["flambe.platform.html.HtmlUtil"] = e.html.HtmlUtil;
    e.html.HtmlUtil.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    e.html.HtmlUtil.callLater = function(a,
        b) {
        null == b && (b = 0);
        x.window.setTimeout(a, b)
    };
    e.html.HtmlUtil.hideMobileBrowser = function() {
        x.window.scrollTo(1, 0)
    };
    e.html.HtmlUtil.loadExtension = function(a, b) {
        null == b && (b = x.window);
        var c = K.field(b, a);
        if (null != c) return {
            prefix: null,
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + A.substr(a, 1, null), d = 0, f = e.html.HtmlUtil.VENDOR_PREFIXES; d < f.length;) {
            var g = f[d];
            ++d;
            var h = g + c,
                i = K.field(b, h);
            if (null != i) return {
                prefix: g,
                field: h,
                value: i
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    e.html.HtmlUtil.loadFirstExtension =
        function(a, b) {
            for (var c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                d = e.html.HtmlUtil.loadExtension(d, b);
                if (null != d.field) return d
            }
            return {
                prefix: null,
                field: null,
                value: null
            }
        };
    e.html.HtmlUtil.polyfill = function(a, b) {
        null == b && (b = x.window);
        var c = e.html.HtmlUtil.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    e.html.HtmlUtil.setVendorStyle = function(a, b, c) {
        for (var a = a.style, d = 0, f = e.html.HtmlUtil.VENDOR_PREFIXES; d < f.length;) {
            var g = f[d];
            ++d;
            a.setProperty("-" + g + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    e.html.HtmlUtil.addVendorListener =
        function(a, b, c, d) {
            for (var f = 0, g = e.html.HtmlUtil.VENDOR_PREFIXES; f < g.length;) {
                var h = g[f];
                ++f;
                a.addEventListener(h + b, c, d)
            }
            a.addEventListener(b, c, d)
        };
    e.html.HtmlUtil.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return j.Orientation.Landscape;
            default:
                return j.Orientation.Portrait
        }
    };
    e.html.HtmlUtil.createCanvas = function(a) {
        var b = x.document.createElement("canvas");
        b.width = a.width;
        b.height = a.height;
        var c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    z = {
        Web: function() {}
    };
    i["flambe.web.Web"] = z.Web;
    z.Web.__name__ = ["flambe", "web", "Web"];
    z.Web.prototype = {
        __class__: z.Web
    };
    e.html.HtmlWeb = function(a) {
        this._container = a
    };
    i["flambe.platform.html.HtmlWeb"] = e.html.HtmlWeb;
    e.html.HtmlWeb.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    e.html.HtmlWeb.__interfaces__ = [z.Web];
    e.html.HtmlWeb.prototype = {
        openBrowser: function(a) {
            x.window.open(a, "_blank")
        },
        createView: function(a, b, c, d) {
            var f = x.document.createElement("iframe");
            f.style.position = "absolute";
            f.style.border =
                "0";
            f.scrolling = "no";
            this._container.appendChild(f);
            a = new e.html.HtmlWebView(f, a, b, c, d);
            e.html.HtmlPlatform.instance.mainLoop.addTickable(a);
            return a
        },
        get_supported: function() {
            return !0
        },
        __class__: e.html.HtmlWeb
    };
    z.WebView = function() {};
    i["flambe.web.WebView"] = z.WebView;
    z.WebView.__name__ = ["flambe", "web", "WebView"];
    z.WebView.__interfaces__ = [m.Disposable];
    z.WebView.prototype = {
        __class__: z.WebView
    };
    e.html.HtmlWebView = function(a, b, c, d, e) {
        var f = this;
        this.iframe = a;
        a = function() {
            f.updateBounds()
        };
        this.x = new F.AnimatedFloat(b,
            a);
        this.y = new F.AnimatedFloat(c, a);
        this.width = new F.AnimatedFloat(d, a);
        this.height = new F.AnimatedFloat(e, a);
        this.updateBounds();
        this.url = new m.Value(null, function(a) {
            f.loadUrl(a)
        });
        this.error = new m.Signal1
    };
    i["flambe.platform.html.HtmlWebView"] = e.html.HtmlWebView;
    e.html.HtmlWebView.__name__ = ["flambe", "platform", "html", "HtmlWebView"];
    e.html.HtmlWebView.__interfaces__ = [e.Tickable, z.WebView];
    e.html.HtmlWebView.prototype = {
        loadUrl: function(a) {
            null != this.iframe && (this.iframe.src = a)
        },
        updateBounds: function() {
            null !=
                this.iframe && (this.iframe.style.left = this.x._value + "px", this.iframe.style.top = this.y._value + "px", this.iframe.width = this.width._value, this.iframe.height = this.height._value)
        },
        update: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.width.update(a);
            this.height.update(a);
            return null == this.iframe
        },
        dispose: function() {
            null != this.iframe && (this.iframe.parentNode.removeChild(this.iframe), this.iframe = null)
        },
        __class__: e.html.HtmlWebView
    };
    e.html.WebAudioSound = function(a) {
        this.buffer = a
    };
    i["flambe.platform.html.WebAudioSound"] =
        e.html.WebAudioSound;
    e.html.WebAudioSound.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    e.html.WebAudioSound.__interfaces__ = [H.Sound];
    e.html.WebAudioSound.get_supported = function() {
        if (e.html.WebAudioSound._detectSupport) {
            e.html.WebAudioSound._detectSupport = !1;
            var a = e.html.HtmlUtil.loadExtension("AudioContext").value;
            e.html.WebAudioSound.ctx = null != a ? new a : null
        }
        return null != e.html.WebAudioSound.ctx
    };
    e.html.WebAudioSound.prototype = {
        get_duration: function() {
            return this.buffer.duration
        },
        loop: function(a) {
            null ==
                a && (a = 1);
            return new e.html._WebAudioSound.WebAudioPlayback(this, a, !0)
        },
        play: function(a) {
            null == a && (a = 1);
            return new e.html._WebAudioSound.WebAudioPlayback(this, a, !1)
        },
        __class__: e.html.WebAudioSound
    };
    e.html._WebAudioSound = {};
    e.html._WebAudioSound.WebAudioPlayback = function(a, b, c) {
        var d = this;
        this._sound = a;
        this._head = e.html.WebAudioSound.ctx.destination;
        this._sourceNode = e.html.WebAudioSound.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.noteOn(0);
        this.playAudio();
        this.volume = new F.AnimatedFloat(b, function(a) {
            d.setVolume(a)
        });
        1 != b && this.setVolume(b)
    };
    i["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = e.html._WebAudioSound.WebAudioPlayback;
    e.html._WebAudioSound.WebAudioPlayback.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    e.html._WebAudioSound.WebAudioPlayback.__interfaces__ = [e.Tickable, H.Playback];
    e.html._WebAudioSound.WebAudioPlayback.prototype = {
        playAudio: function() {
            this._sourceNode.connect(this._head);
            this._startedAt = e.html.WebAudioSound.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (this._tickableAdded = !0, e.html.HtmlPlatform.instance.mainLoop.addTickable(this))
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = e.html.WebAudioSound.ctx.createGainNode(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        dispose: function() {
            this.set_paused(!0)
        },
        update: function(a) {
            this.volume.update(a);
            return 3 == this._sourceNode.playbackState || 0 <= this._pausedAt ? (this._tickableAdded = !1, !0) : !1
        },
        get_position: function() {
            return 3 == this._sourceNode.playbackState ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (e.html.WebAudioSound.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        get_ended: function() {
            return 3 == this._sourceNode.playbackState
        },
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_paused: function() {
            return 0 <= this._pausedAt
        },
        get_sound: function() {
            return this._sound
        },
        __class__: e.html._WebAudioSound.WebAudioPlayback
    };
    z = {
        Director: function() {
            this._width = this._height = -1;
            this._transitor = null;
            this.scenes = [];
            this.occludedScenes = [];
            this._root = new M
        }
    };
    i["flambe.scene.Director"] = z.Director;
    z.Director.__name__ = ["flambe", "scene", "Director"];
    z.Director.__super__ = N;
    z.Director.prototype = w(N.prototype, {
        get_height: function() {
            return 0 > this._height ? E._platform.getStage().get_height() : this._height
        },
        get_width: function() {
            return 0 > this._width ? E._platform.getStage().get_width() : this._width
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a],
                    b = b._compMap.Scene_4;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            b = this.get_topScene();
            null != b && this.show(b)
        },
        show: function(a) {
            a =
                a._compMap.Scene_4;
            null != a && a.shown.emit0()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        get_name: function() {
            return "Director_0"
        },
        __class__: z.Director
    });
    z._Director = {};
    z._Director.Transitor = function() {};
    i["flambe.scene._Director.Transitor"] = z._Director.Transitor;
    z._Director.Transitor.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    z._Director.Transitor.prototype = {
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        update: function(a) {
            return this._transition.update(a)
        },
        __class__: z._Director.Transitor
    };
    z.Scene = function(a) {
        null == a && (a = !0);
        this.opaque = a;
        this.shown = new m.Signal0;
        this.hidden = new m.Signal0
    };
    i["flambe.scene.Scene"] = z.Scene;
    z.Scene.__name__ = ["flambe", "scene", "Scene"];
    z.Scene.__super__ = N;
    z.Scene.prototype = w(N.prototype, {
        get_name: function() {
            return "Scene_4"
        },
        __class__: z.Scene
    });
    z.Transition = function() {};
    i["flambe.scene.Transition"] = z.Transition;
    z.Transition.__name__ = ["flambe", "scene", "Transition"];
    z.Transition.prototype = {
        complete: function() {},
        update: function() {
            return !0
        },
        __class__: z.Transition
    };
    H._Mixer = {};
    H._Mixer.MixerSound = function(a, b) {
        this._source = a;
        this._channels = b;
        this._playbacks = []
    };
    i["flambe.sound._Mixer.MixerSound"] =
        H._Mixer.MixerSound;
    H._Mixer.MixerSound.__name__ = ["flambe", "sound", "_Mixer", "MixerSound"];
    H._Mixer.MixerSound.__interfaces__ = [m.Disposable, H.Sound];
    H._Mixer.MixerSound.prototype = {
        dispose: function() {
            for (var a = 0, b = this._playbacks; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this._playbacks = []
        },
        get_duration: function() {
            return this._source.get_duration()
        },
        findOpenChannel: function() {
            for (var a = 0, b = this._channels; a < b;) {
                var c = a++,
                    d = this._playbacks[c];
                if (null == d || d.get_ended()) return c
            }
            return -1
        },
        playOrLoop: function(a,
            b) {
            var c = this.findOpenChannel();
            if (0 > c) return new e.DummyPlayback(this);
            var d = b ? this._source.loop(a) : this._source.play(a);
            return this._playbacks[c] = d
        },
        loop: function(a) {
            null == a && (a = 1);
            return this.playOrLoop(a, !0)
        },
        play: function(a) {
            null == a && (a = 1);
            return this.playOrLoop(a, !1)
        },
        __class__: H._Mixer.MixerSound
    };
    v = {
        BitmapSprite: function(a) {
            j.Sprite.call(this);
            this.symbol = a;
            this.anchorX.set__(a.anchorX);
            this.anchorY.set__(a.anchorY)
        }
    };
    i["flambe.swf.BitmapSprite"] = v.BitmapSprite;
    v.BitmapSprite.__name__ = ["flambe",
        "swf", "BitmapSprite"
    ];
    v.BitmapSprite.__super__ = j.Sprite;
    v.BitmapSprite.prototype = w(j.Sprite.prototype, {
        getNaturalHeight: function() {
            return this.symbol.height
        },
        getNaturalWidth: function() {
            return this.symbol.width
        },
        draw: function(a) {
            a.drawSubImage(this.symbol.atlas, 0, 0, this.symbol.x, this.symbol.y, this.symbol.width, this.symbol.height)
        },
        __class__: v.BitmapSprite
    });
    v.Symbol = function() {};
    i["flambe.swf.Symbol"] = v.Symbol;
    v.Symbol.__name__ = ["flambe", "swf", "Symbol"];
    v.Symbol.prototype = {
        __class__: v.Symbol
    };
    v.BitmapSymbol =
        function(a, b) {
            this._name = a.symbol;
            this.atlas = b;
            var c = a.rect;
            this.x = c[0];
            this.y = c[1];
            this.width = c[2];
            this.height = c[3];
            c = a.origin;
            null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : (c = a.offset, null != c ? (this.anchorX = -c[0], this.anchorY = -c[1]) : this.anchorY = this.anchorX = 0)
        };
    i["flambe.swf.BitmapSymbol"] = v.BitmapSymbol;
    v.BitmapSymbol.__name__ = ["flambe", "swf", "BitmapSymbol"];
    v.BitmapSymbol.__interfaces__ = [v.Symbol];
    v.BitmapSymbol.prototype = {
        get_name: function() {
            return this._name
        },
        createSprite: function() {
            return new v.BitmapSprite(this)
        },
        __class__: v.BitmapSymbol
    };
    v.Library = function(a, b) {
        this._symbols = new I;
        var c = Y.parse(a.getFile(b + "/library.json"));
        this.frameRate = c.frameRate;
        for (var d = [], e = 0, f = c.movies; e < f.length;) {
            var g = f[e];
            ++e;
            g = new v.MovieSymbol(this, g);
            d.push(g);
            this._symbols.set(g.get_name(), g)
        }
        null != c.textureGroups ? (e = c.textureGroups, (1 != e[0].scaleFactor || 1 < e.length) && null, g = e[0].atlases) : g = c.atlases;
        for (e = 0; e < g.length;) {
            c = g[e];
            ++e;
            for (var h = a.getTexture(b + "/" + m.Strings.removeFileExtension(c.file)), f = 0, c = c.textures; f < c.length;) {
                var i =
                    c[f];
                ++f;
                i = new v.BitmapSymbol(i, h);
                this._symbols.set(i.get_name(), i)
            }
        }
        for (e = 0; e < d.length;) {
            g = d[e];
            ++e;
            f = 0;
            for (c = g.layers; f < c.length;) {
                g = c[f];
                ++f;
                h = 0;
                for (i = g.keyframes; h < i.length;) {
                    var k = i[h];
                    ++h;
                    var j = this._symbols.get(k.symbolName);
                    null != j && (null == g.lastSymbol ? g.lastSymbol = j : g.lastSymbol != j && (g.multipleSymbols = !0), k.symbol = j)
                }
            }
        }
    };
    i["flambe.swf.Library"] = v.Library;
    v.Library.__name__ = ["flambe", "swf", "Library"];
    v.Library.prototype = {
        __class__: v.Library
    };
    v.MovieSprite = function(a) {
        this._looped = null;
        j.Sprite.call(this);
        this.symbol = a;
        this.animFinishedPlaying = new m.Signal1;
        this.speed = new F.AnimatedFloat(1);
        this.isPlaying = !0;
        this._animators = [];
        for (var b = 0, a = a.layers; b < a.length;) {
            var c = a[b];
            ++b;
            this._animators.push(new v._MovieSprite.LayerAnimator(c))
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    i["flambe.swf.MovieSprite"] = v.MovieSprite;
    v.MovieSprite.__name__ = ["flambe", "swf", "MovieSprite"];
    v.MovieSprite.__super__ = j.Sprite;
    v.MovieSprite.prototype = w(j.Sprite.prototype, {
        get_looped: function() {
            null == this._looped && (this._looped =
                new m.Signal0);
            return this._looped
        },
        set_paused: function(a) {
            this._flags = m.BitSets.set(this._flags, 16, a);
            return a
        },
        set_position: function(a) {
            return this._position = J.FMath.clamp(a, 0, this.symbol.duration)
        },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var d = c[b];
                        ++b;
                        d.changedKeyframe = !0;
                        d.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) d = c[b], ++b, d.composeFrame(a);
                this._frame = a
            }
        },
        onUpdate: function(a) {
            j.Sprite.prototype.onUpdate.call(this, a);
            if (this.isPlaying) {
                this.speed.update(a);
                var b = !1;
                0 == (this._flags & 16) && (this._position += this.speed._value * a, this._position > this.symbol.duration && (this._position %= this.symbol.duration, this.animFinishedPlaying.emit1(this), b = !0));
                this.isPlaying && (this["goto"](this._position * this.symbol.frameRate), b && null != this._looped && this._looped.emit0())
            }
        },
        onRemoved: function() {
            j.Sprite.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onAdded: function() {
            j.Sprite.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        __class__: v.MovieSprite
    });
    v._MovieSprite = {};
    v._MovieSprite.LayerAnimator = function(a) {
        this._sprites = null;
        this.changedKeyframe = !1;
        this.keyframeIdx = 0;
        this.layer = a;
        this.content = new M;
        var b;
        if (a.multipleSymbols) {
            this._sprites = [];
            b = 0;
            for (a = a.keyframes; b < a.length;) {
                var c = a[b];
                ++b;
                this._sprites.push(c.symbol.createSprite())
            }
            b = this._sprites[0]
        } else b = null != a.lastSymbol ? a.lastSymbol.createSprite() : new j.Sprite;
        this.content.add(b)
    };
    i["flambe.swf._MovieSprite.LayerAnimator"] = v._MovieSprite.LayerAnimator;
    v._MovieSprite.LayerAnimator.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    v._MovieSprite.LayerAnimator.prototype = {
        composeFrame: function(a) {
            for (var b = this.layer.keyframes, c = b.length - 1; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.changedKeyframe = !0;
            var d;
            this.changedKeyframe && null != this._sprites ? (this.changedKeyframe = !1, d = this._sprites[this.keyframeIdx], this.content.add(d)) : d = this.content._compMap.Sprite_1;
            var e = b[this.keyframeIdx],
                f = e.visible;
            d.set_visible(f);
            if (f) {
                var f = e.x,
                    g = e.y,
                    h = e.scaleX,
                    i = e.scaleY,
                    k = e.skewX,
                    j = e.skewY,
                    m = e.alpha;
                if (this.keyframeIdx < c) {
                    a = (a - e.index) / e.duration;
                    c = e.ease;
                    if (0 != c) {
                        var n;
                        0 > c ? (n = 1 - a, n = 1 - n * n, c = -c) : n = a * a;
                        a = c * n + (1 - c) * a
                    }
                    b = b[this.keyframeIdx + 1];
                    f += (b.x - f) * a;
                    g += (b.y - g) * a;
                    h += (b.scaleX - h) * a;
                    i += (b.scaleY - i) * a;
                    k += (b.skewX - k) * a;
                    j += (b.skewY - j) * a;
                    m += (b.alpha - m) * a
                }
                b = d.getLocalMatrix();
                a = Math.sin(k);
                k = Math.cos(k);
                c = Math.sin(j);
                j = Math.cos(j);
                b.set(j * h, c * h, -a * i, k * i, f, g);
                b.translate(-(e.pivotX +
                    d.anchorX._value), -(e.pivotY + d.anchorY._value));
                d.alpha.set__(m)
            }
        },
        __class__: v._MovieSprite.LayerAnimator
    };
    v.MovieSymbol = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = [];
        for (var c = 0, d = b.layers; c < d.length;) {
            var e = d[c];
            ++c;
            e = new v.MovieLayer(e);
            this.frames = Math.max(e.get_frames(), this.frames);
            this.layers.push(e)
        }
        this.duration = this.frames / this.frameRate
    };
    i["flambe.swf.MovieSymbol"] = v.MovieSymbol;
    v.MovieSymbol.__name__ = ["flambe", "swf", "MovieSymbol"];
    v.MovieSymbol.__interfaces__ = [v.Symbol];
    v.MovieSymbol.prototype = {
        createSprite: function() {
            return new v.MovieSprite(this)
        },
        get_name: function() {
            return this._name
        },
        __class__: v.MovieSymbol
    };
    v.MovieLayer = function(a) {
        this.name = a.name;
        this.multipleSymbols = !1;
        this.keyframes = [];
        for (var b = null, c = 0, a = a.keyframes; c < a.length;) {
            var d = a[c];
            ++c;
            b = new v.MovieKeyframe(d, b);
            this.keyframes.push(b)
        }
    };
    i["flambe.swf.MovieLayer"] = v.MovieLayer;
    v.MovieLayer.__name__ = ["flambe", "swf", "MovieLayer"];
    v.MovieLayer.prototype = {
        get_frames: function() {
            var a = this.keyframes[this.keyframes.length -
                1];
            return a.index + (a.duration | 0)
        },
        __class__: v.MovieLayer
    };
    v.MovieKeyframe = function(a, b) {
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        this.y = this.x = 0;
        this.scaleY = this.scaleX = 1;
        this.pivotY = this.pivotX = this.skewY = this.skewX = 0;
        this.alpha = 1;
        this.visible = !0;
        this.ease = 0;
        if (null != this.symbolName) {
            var c = a.loc;
            null != c && (this.x = c[0], this.y = c[1]);
            c = a.scale;
            null != c && (this.scaleX = c[0], this.scaleY = c[1]);
            c = a.skew;
            null != c && (this.skewX = c[0], this.skewY = c[1]);
            c = a.pivot;
            null != c && (this.pivotX = c[0], this.pivotY = c[1]);
            null != a.alpha && (this.alpha = a.alpha);
            null != a.visible && (this.visible = a.visible);
            null != a.ease && (this.ease = a.ease)
        }
    };
    i["flambe.swf.MovieKeyframe"] = v.MovieKeyframe;
    v.MovieKeyframe.__name__ = ["flambe", "swf", "MovieKeyframe"];
    v.MovieKeyframe.prototype = {
        __class__: v.MovieKeyframe
    };
    m.Assert = function() {};
    i["flambe.util.Assert"] = m.Assert;
    m.Assert.__name__ = ["flambe", "util", "Assert"];
    m.BitSets = function() {};
    i["flambe.util.BitSets"] = m.BitSets;
    m.BitSets.__name__ = ["flambe", "util", "BitSets"];
    m.BitSets.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    m.LogHandler = function() {};
    i["flambe.util.LogHandler"] = m.LogHandler;
    m.LogHandler.__name__ = ["flambe", "util", "LogHandler"];
    m.LogHandler.prototype = {
        __class__: m.LogHandler
    };
    m.Promise = function() {
        this.success = new m.Signal1;
        this.error = new m.Signal1;
        this.progressChanged = new m.Signal0;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    i["flambe.util.Promise"] = m.Promise;
    m.Promise.__name__ = ["flambe", "util", "Promise"];
    m.Promise.prototype = {
        set_total: function(a) {
            this._total = a;
            this.progressChanged.emit0();
            return a
        },
        set_progress: function(a) {
            this._progress = a;
            this.progressChanged.emit0();
            return a
        },
        get: function(a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit1(a);
            return a
        },
        get_result: function() {
            if (!this.hasResult) throw "Promise result not yet available";
            return this._result
        },
        __class__: m.Promise
    };
    m.Signal0 = function(a) {
        m.SignalBase.call(this, a)
    };
    i["flambe.util.Signal0"] = m.Signal0;
    m.Signal0.__name__ = ["flambe", "util", "Signal0"];
    m.Signal0.__super__ = m.SignalBase;
    m.Signal0.prototype = w(m.SignalBase.prototype, {
        __class__: m.Signal0
    });
    m._SignalBase = {};
    m._SignalBase.Task = function(a) {
        this.next = null;
        this.fn = a
    };
    i["flambe.util._SignalBase.Task"] = m._SignalBase.Task;
    m._SignalBase.Task.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    m._SignalBase.Task.prototype = {
        __class__: m._SignalBase.Task
    };
    C = void 0;
    U = void 0;
    P = void 0;
    T = void 0;
    V = void 0;
    Y = void 0;
    Y = function() {};
    i["haxe.Json"] = Y;
    Y.__name__ = ["haxe", "Json"];
    Y.parse = function(a) {
        return (new Y).doParse(a)
    };
    Y.prototype = {
        parseString: function() {
            for (var a = this.pos, b = new $;;) {
                var c = this.str.charCodeAt(this.pos++);
                if (34 == c) break;
                if (92 == c) {
                    b.b += A.substr(this.str, a, this.pos - a - 1);
                    c = this.str.charCodeAt(this.pos++);
                    switch (c) {
                        case 114:
                            b.b += String.fromCharCode(13);
                            break;
                        case 110:
                            b.b += String.fromCharCode(10);
                            break;
                        case 116:
                            b.b += String.fromCharCode(9);
                            break;
                        case 98:
                            b.b += String.fromCharCode(8);
                            break;
                        case 102:
                            b.b += String.fromCharCode(12);
                            break;
                        case 47:
                        case 92:
                        case 34:
                            b.b += String.fromCharCode(c);
                            break;
                        case 117:
                            a = r.parseInt("0x" + A.substr(this.str, this.pos, 4));
                            this.pos += 4;
                            b.b += String.fromCharCode(a);
                            break;
                        default:
                            throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
                    }
                    a = this.pos
                } else if (c != c) throw "Unclosed string";
            }
            b.b += A.substr(this.str, a, this.pos - a - 1);
            return b.b
        },
        parseRec: function() {
            for (;;) switch (this.str.charCodeAt(this.pos++)) {
                case 32:
                case 13:
                case 10:
                case 9:
                    break;
                case 123:
                    for (var a = {}, b = null, c = null;;) {
                        var d = this.str.charCodeAt(this.pos++);
                        switch (d) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 125:
                                return (null != b || !1 == c) && this.invalidChar(), a;
                            case 58:
                                null == b && this.invalidChar();
                                a[b] = this.parseRec();
                                b = null;
                                c = !0;
                                break;
                            case 44:
                                c ? c = !1 : this.invalidChar();
                                break;
                            case 34:
                                c && this.invalidChar();
                                b = this.parseString();
                                break;
                            default:
                                this.invalidChar()
                        }
                    }
                    break;
                case 91:
                    a = [];
                    for (c = null;;) switch (d = this.str.charCodeAt(this.pos++), d) {
                        case 32:
                        case 13:
                        case 10:
                        case 9:
                            break;
                        case 93:
                            return !1 ==
                                c && this.invalidChar(), a;
                        case 44:
                            c ? c = !1 : this.invalidChar();
                            break;
                        default:
                            c && this.invalidChar(), this.pos--, a.push(this.parseRec()), c = !0
                    }
                    break;
                case 116:
                    c = this.pos;
                    if (114 != this.str.charCodeAt(this.pos++) || 117 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return !0;
                case 102:
                    c = this.pos;
                    if (97 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 115 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return !1;
                case 110:
                    c = this.pos;
                    if (117 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++)) this.pos = c, this.invalidChar();
                    return null;
                case 34:
                    return this.parseString();
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 45:
                    this.pos--;
                    if (!this.reg_float.match(A.substr(this.str, this.pos, null))) throw "Invalid float at position " + this.pos;
                    c = this.reg_float.matched(0);
                    this.pos += c.length;
                    c = r.parseFloat(c);
                    d = c | 0;
                    return d ==
                        c ? d : c;
                default:
                    this.invalidChar()
            }
        },
        invalidChar: function() {
            this.pos--;
            throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
        },
        doParse: function(a) {
            this.reg_float = new X("^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?", "");
            this.str = a;
            this.pos = 0;
            return this.parseRec()
        },
        __class__: Y
    };
    T = function() {
        this.buf = new $;
        this.cache = [];
        this.useCache = T.USE_CACHE;
        this.useEnumIndex = T.USE_ENUM_INDEX;
        this.shash = new I;
        this.scount = 0
    };
    i["haxe.Serializer"] = T;
    T.__name__ = ["haxe", "Serializer"];
    T.run = function(a) {
        var b =
            new T;
        b.serialize(a);
        return b.toString()
    };
    T.prototype = {
        serialize: function(a) {
            var b = L["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += r.string("n");
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += r.string("z");
                        break
                    }
                    this.buf.b += r.string("i");
                    this.buf.b += r.string(a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += r.string("k") : Math.isFinite(a) ? (this.buf.b += r.string("d"), this.buf.b += r.string(a)) : this.buf.b += r.string(0 > a ? "m" : "p");
                    break;
                case 3:
                    this.buf.b += r.string(a ? "t" : "f");
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            var c = 0;
                            this.buf.b += r.string("a");
                            for (var d = a.length, e = 0; e < d;) b = e++, null == a[b] ? c++ : (0 < c && (1 == c ? this.buf.b += r.string("n") : (this.buf.b += r.string("u"), this.buf.b += r.string(c)), c = 0), this.serialize(a[b]));
                            0 < c && (1 == c ? this.buf.b += r.string("n") : (this.buf.b += r.string("u"), this.buf.b += r.string(c)));
                            this.buf.b += r.string("h");
                            break;
                        case ea:
                            this.buf.b += r.string("l");
                            for (a = a.iterator(); a.hasNext();) b = a.next(), this.serialize(b);
                            this.buf.b +=
                                r.string("h");
                            break;
                        case Date:
                            this.buf.b += r.string("v");
                            this.buf.b += r.string(A.dateStr(a));
                            break;
                        case I:
                            this.buf.b += r.string("b");
                            for (c = a.keys(); c.hasNext();) b = c.next(), this.serializeString(b), this.serialize(a.get(b));
                            this.buf.b += r.string("h");
                            break;
                        case W:
                            this.buf.b += r.string("q");
                            for (c = a.keys(); c.hasNext();) b = c.next(), this.buf.b += r.string(":"), this.buf.b += r.string(b), this.serialize(a.get(b));
                            this.buf.b += r.string("h");
                            break;
                        case V.Bytes:
                            b = 0;
                            c = a.length - 2;
                            d = new $;
                            for (e = T.BASE64; b < c;) {
                                var f = a.b[b++],
                                    g = a.b[b++],
                                    h = a.b[b++];
                                d.b += r.string(e.charAt(f >> 2));
                                d.b += r.string(e.charAt((f << 4 | g >> 4) & 63));
                                d.b += r.string(e.charAt((g << 2 | h >> 6) & 63));
                                d.b += r.string(e.charAt(h & 63))
                            }
                            b == c ? (f = a.b[b++], g = a.b[b++], d.b += r.string(e.charAt(f >> 2)), d.b += r.string(e.charAt((f << 4 | g >> 4) & 63)), d.b += r.string(e.charAt(g << 2 & 63))) : b == c + 1 && (f = a.b[b++], d.b += r.string(e.charAt(f >> 2)), d.b += r.string(e.charAt(f << 4 & 63)));
                            b = d.b;
                            this.buf.b += r.string("s");
                            this.buf.b += r.string(b.length);
                            this.buf.b += r.string(":");
                            this.buf.b += r.string(b);
                            break;
                        default:
                            this.cache.pop(),
                                null != a.hxSerialize ? (this.buf.b += r.string("C"), this.serializeString(L.getClassName(b)), this.cache.push(a), a.hxSerialize(this), this.buf.b += r.string("g")) : (this.buf.b += r.string("c"), this.serializeString(L.getClassName(b)), this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b += r.string("o");
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache && this.serializeRef(a)) break;
                    this.cache.pop();
                    this.buf.b += r.string(this.useEnumIndex ? "j" : "w");
                    this.serializeString(L.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += r.string(":"), this.buf.b += r.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += r.string(":");
                    d = a.length;
                    this.buf.b += r.string(d - 2);
                    for (e = 2; e < d;) b = e++, this.serialize(a[b]);
                    this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + r.string(a);
            }
        },
        serializeFields: function(a) {
            for (var b = 0, c = K.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(K.field(a, d))
            }
            this.buf.b +=
                r.string("g")
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, d = this.cache.length; c < d;) {
                var e = c++,
                    f = this.cache[e];
                if (typeof f == b && f == a) return this.buf.b += r.string("r"), this.buf.b += r.string(e), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += r.string("R"), this.buf.b += r.string(b)) : (this.shash.set(a, this.scount++), this.buf.b += r.string("y"), a = S.urlEncode(a), this.buf.b += r.string(a.length), this.buf.b += r.string(":"), this.buf.b += r.string(a))
        },
        toString: function() {
            return this.buf.b
        },
        __class__: T
    };
    U = function(a) {
        var b = this;
        this.id = window.setInterval(function() {
            b.run()
        }, a)
    };
    i["haxe.Timer"] = U;
    U.__name__ = ["haxe", "Timer"];
    U.delay = function(a, b) {
        var c = new U(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    U.prototype = {
        run: function() {},
        stop: function() {
            null != this.id && (window.clearInterval(this.id), this.id = null)
        },
        __class__: U
    };
    P = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = P.DEFAULT_RESOLVER;
        null == a && (a = L, P.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    i["haxe.Unserializer"] =
        P;
    P.__name__ = ["haxe", "Unserializer"];
    P.initCodes = function() {
        for (var a = [], b = 0, c = P.BASE64.length; b < c;) {
            var d = b++;
            a[P.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    P.run = function(a) {
        return (new P(a)).unserialize()
    };
    P.prototype = {
        unserialize: function() {
            switch (this.buf.charCodeAt(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                        else break
                    }
                    return r.parseFloat(A.substr(this.buf,
                        a, this.pos - a));
                case 121:
                    b = this.readDigits();
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw "Invalid string length";
                    a = A.substr(this.buf, this.pos, b);
                    this.pos += b;
                    a = S.urlDecode(a);
                    this.scache.push(a);
                    return a;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    var c = this.buf,
                        a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) :
                            a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return b = {}, this.cache.push(b), this.unserializeObject(b), b;
                case 114:
                    b = this.readDigits();
                    if (0 > b || b >= this.cache.length) throw "Invalid reference";
                    return this.cache[b];
                case 82:
                    b = this.readDigits();
                    if (0 > b || b >= this.scache.length) throw "Invalid string reference";
                    return this.scache[b];
                case 120:
                    throw this.unserialize();
                case 99:
                    b = this.unserialize();
                    a = this.resolver.resolveClass(b);
                    if (null == a) throw "Class not found " + b;
                    b = L.createEmptyInstance(a);
                    this.cache.push(b);
                    this.unserializeObject(b);
                    return b;
                case 119:
                    b = this.unserialize();
                    a = this.resolver.resolveEnum(b);
                    if (null == a) throw "Enum not found " + b;
                    b = this.unserializeEnum(a, this.unserialize());
                    this.cache.push(b);
                    return b;
                case 106:
                    b = this.unserialize();
                    a = this.resolver.resolveEnum(b);
                    if (null == a) throw "Enum not found " + b;
                    this.pos++;
                    var c = this.readDigits(),
                        d = L.getEnumConstructs(a)[c];
                    if (null == d) throw "Unknown enum index " + b + "@" + c;
                    b = this.unserializeEnum(a, d);
                    this.cache.push(b);
                    return b;
                case 108:
                    b = new ea;
                    for (this.cache.push(b); 104 != this.buf.charCodeAt(this.pos);) b.add(this.unserialize());
                    this.pos++;
                    return b;
                case 98:
                    c = new I;
                    for (this.cache.push(c); 104 != this.buf.charCodeAt(this.pos);) a = this.unserialize(), c.set(a, this.unserialize());
                    this.pos++;
                    return c;
                case 113:
                    c = new W;
                    this.cache.push(c);
                    for (b = this.buf.charCodeAt(this.pos++); 58 == b;) a = this.readDigits(), c.set(a, this.unserialize()), b = this.buf.charCodeAt(this.pos++);
                    if (104 != b) throw "Invalid IntHash format";
                    return c;
                case 118:
                    return b = A.strDate(A.substr(this.buf, this.pos, 19)), this.cache.push(b), this.pos += 19, b;
                case 115:
                    b = this.readDigits();
                    c =
                        this.buf;
                    if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw "Invalid bytes length";
                    d = P.CODES;
                    null == d && (d = P.initCodes(), P.CODES = d);
                    for (var a = this.pos, e = b & 3, f = a + (b - e), g = V.Bytes.alloc(3 * (b >> 2) + (2 <= e ? e - 1 : 0)), h = 0; a < f;) {
                        var i = d[c.charCodeAt(a++)],
                            k = d[c.charCodeAt(a++)];
                        g.b[h++] = (i << 2 | k >> 4) & 255;
                        i = d[c.charCodeAt(a++)];
                        g.b[h++] = (k << 4 | i >> 2) & 255;
                        k = d[c.charCodeAt(a++)];
                        g.b[h++] = (i << 6 | k) & 255
                    }
                    2 <= e && (i = d[c.charCodeAt(a++)], k = d[c.charCodeAt(a++)], g.b[h++] = (i << 2 | k >> 4) & 255, 3 == e && (i = d[c.charCodeAt(a++)],
                        g.b[h++] = (k << 4 | i >> 2) & 255));
                    this.pos += b;
                    this.cache.push(g);
                    return g;
                case 67:
                    b = this.unserialize();
                    a = this.resolver.resolveClass(b);
                    if (null == a) throw "Class not found " + b;
                    b = L.createEmptyInstance(a);
                    this.cache.push(b);
                    b.hxUnserialize(this);
                    if (103 != this.buf.charCodeAt(this.pos++)) throw "Invalid custom data";
                    return b
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        unserializeEnum: function(a, b) {
            if (58 != this.buf.charCodeAt(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return L.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return L.createEnum(a, b, d)
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if (!G.__instanceof(b, String)) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 >
                        d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : a
        },
        __class__: P
    };
    V = {
        Bytes: function(a, b) {
            this.length = a;
            this.b = b
        }
    };
    i["haxe.io.Bytes"] = V.Bytes;
    V.Bytes.__name__ = ["haxe", "io", "Bytes"];
    V.Bytes.alloc = function(a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new V.Bytes(a, b)
    };
    V.Bytes.ofData = function(a) {
        return new V.Bytes(a.length, a)
    };
    V.Bytes.prototype = {
        __class__: V.Bytes
    };
    C = {
        _Fast: {}
    };
    C._Fast.NodeAccess = function(a) {
        this.__x = a
    };
    i["haxe.xml._Fast.NodeAccess"] = C._Fast.NodeAccess;
    C._Fast.NodeAccess.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    C._Fast.NodeAccess.prototype = {
        resolve: function(a) {
            var b = this.__x.elementsNamed(a).next();
            if (null == b) throw (this.__x.nodeType == u.Document ? "Document" : this.__x.getNodeName()) + " is missing element " + a;
            return new C.Fast(b)
        },
        __class__: C._Fast.NodeAccess
    };
    C._Fast.AttribAccess = function(a) {
        this.__x = a
    };
    i["haxe.xml._Fast.AttribAccess"] = C._Fast.AttribAccess;
    C._Fast.AttribAccess.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    C._Fast.AttribAccess.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == u.Document) throw "Cannot access document attribute " + a;
            var b = this.__x.get(a);
            if (null == b) throw this.__x.getNodeName() + " is missing attribute " + a;
            return b
        },
        __class__: C._Fast.AttribAccess
    };
    C._Fast.HasAttribAccess = function(a) {
        this.__x = a
    };
    i["haxe.xml._Fast.HasAttribAccess"] = C._Fast.HasAttribAccess;
    C._Fast.HasAttribAccess.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    C._Fast.HasAttribAccess.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == u.Document) throw "Cannot access document attribute " + a;
            return this.__x.exists(a)
        },
        __class__: C._Fast.HasAttribAccess
    };
    C._Fast.HasNodeAccess = function(a) {
        this.__x = a
    };
    i["haxe.xml._Fast.HasNodeAccess"] = C._Fast.HasNodeAccess;
    C._Fast.HasNodeAccess.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    C._Fast.HasNodeAccess.prototype = {
        resolve: function(a) {
            return this.__x.elementsNamed(a).hasNext()
        },
        __class__: C._Fast.HasNodeAccess
    };
    C._Fast.NodeListAccess =
        function(a) {
            this.__x = a
        };
    i["haxe.xml._Fast.NodeListAccess"] = C._Fast.NodeListAccess;
    C._Fast.NodeListAccess.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    C._Fast.NodeListAccess.prototype = {
        resolve: function(a) {
            for (var b = new ea, a = this.__x.elementsNamed(a); a.hasNext();) {
                var c = a.next();
                b.add(new C.Fast(c))
            }
            return b
        },
        __class__: C._Fast.NodeListAccess
    };
    C.Fast = function(a) {
        if (a.nodeType != u.Document && a.nodeType != u.Element) throw "Invalid nodeType " + r.string(a.nodeType);
        this.x = a;
        this.node = new C._Fast.NodeAccess(a);
        this.nodes = new C._Fast.NodeListAccess(a);
        this.att = new C._Fast.AttribAccess(a);
        this.has = new C._Fast.HasAttribAccess(a);
        this.hasNode = new C._Fast.HasNodeAccess(a)
    };
    i["haxe.xml.Fast"] = C.Fast;
    C.Fast.__name__ = ["haxe", "xml", "Fast"];
    C.Fast.prototype = {
        getElements: function() {
            var a = this.x.elements();
            return {
                hasNext: B(a, a.hasNext),
                next: function() {
                    var b = a.next();
                    return null == b ? null : new C.Fast(b)
                }
            }
        },
        getInnerHTML: function() {
            for (var a = new $, b = this.x.iterator(); b.hasNext();) {
                var c = b.next();
                a.b += r.string(c.toString())
            }
            return a.b
        },
        getInnerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw this.getName() + " does not have data";
            var b = a.next(),
                c = a.next();
            if (null != c) {
                if (b.nodeType == u.PCData && c.nodeType == u.CData && "" == S.trim(b.getNodeValue()) && (b = a.next(), null == b || b.nodeType == u.PCData && "" == S.trim(b.getNodeValue()) && null == a.next())) return c.getNodeValue();
                throw this.getName() + " does not only have data";
            }
            if (b.nodeType != u.PCData && b.nodeType != u.CData) throw this.getName() + " does not have data";
            return b.getNodeValue()
        },
        getName: function() {
            return this.x.nodeType ==
                u.Document ? "Document" : this.x.getNodeName()
        },
        __class__: C.Fast
    };
    C.Parser = function() {};
    i["haxe.xml.Parser"] = C.Parser;
    C.Parser.__name__ = ["haxe", "xml", "Parser"];
    C.Parser.parse = function(a) {
        var b = u.createDocument();
        C.Parser.doParse(a, 0, b);
        return b
    };
    C.Parser.doParse = function(a, b, c) {
        null == b && (b = 0);
        for (var d = null, e = 1, f = 1, g = null, h = 0, i = 0, k = 0, j = a.charCodeAt(b); j == j;) {
            switch (e) {
                case 0:
                    switch (j) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            e = f;
                            continue
                    }
                    break;
                case 1:
                    switch (j) {
                        case 60:
                            e = 0;
                            f = 2;
                            break;
                        default:
                            h = b;
                            e =
                                13;
                            continue
                    }
                    break;
                case 13:
                    60 == j && (e = u.createPCData(A.substr(a, h, b - h)), c.addChild(e), i++, e = 0, f = 2);
                    break;
                case 17:
                    93 == j && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (e = u.createCData(A.substr(a, h, b - h)), c.addChild(e), i++, b += 2, e = 1);
                    break;
                case 2:
                    switch (j) {
                        case 33:
                            if (91 == a.charCodeAt(b + 1)) {
                                b += 2;
                                if ("CDATA[" != A.substr(a, b, 6).toUpperCase()) throw "Expected <![CDATA[";
                                b += 5;
                                e = 17
                            } else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) {
                                if ("OCTYPE" != A.substr(a, b + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                                b += 8;
                                e =
                                    16
                            } else {
                                if (45 != a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw "Expected <\!--";
                                b += 2;
                                e = 15
                            }
                            h = b + 1;
                            break;
                        case 63:
                            e = 14;
                            h = b;
                            break;
                        case 47:
                            if (null == c) throw "Expected node name";
                            h = b + 1;
                            e = 0;
                            f = 10;
                            break;
                        default:
                            e = 3;
                            h = b;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                        if (b == h) throw "Expected node name";
                        d = u.createElement(A.substr(a, h, b - h));
                        c.addChild(d);
                        e = 0;
                        f = 4;
                        continue
                    }
                    break;
                case 4:
                    switch (j) {
                        case 47:
                            e = 11;
                            i++;
                            break;
                        case 62:
                            e = 9;
                            i++;
                            break;
                        default:
                            e = 5;
                            h = b;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                        if (h == b) throw "Expected attribute name";
                        g = A.substr(a, h, b - h);
                        if (d.exists(g)) throw "Duplicate attribute";
                        e = 0;
                        f = 6;
                        continue
                    }
                    break;
                case 6:
                    switch (j) {
                        case 61:
                            e = 0;
                            f = 7;
                            break;
                        default:
                            throw "Expected =";
                    }
                    break;
                case 7:
                    switch (j) {
                        case 34:
                        case 39:
                            e = 8;
                            h = b;
                            break;
                        default:
                            throw 'Expected "';
                    }
                    break;
                case 8:
                    j == a.charCodeAt(h) && (f = A.substr(a, h + 1, b - h - 1), d.set(g, f), e = 0, f = 4);
                    break;
                case 9:
                    h = b = C.Parser.doParse(a, b, d);
                    e = 1;
                    break;
                case 11:
                    switch (j) {
                        case 62:
                            e =
                                1;
                            break;
                        default:
                            throw "Expected >";
                    }
                    break;
                case 12:
                    switch (j) {
                        case 62:
                            return 0 == i && c.addChild(u.createPCData("")), b;
                        default:
                            throw "Expected >";
                    }
                    case 10:
                        if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
                            if (h == b) throw "Expected node name";
                            if (A.substr(a, h, b - h) != c.getNodeName()) throw "Expected </" + c.getNodeName() + ">";
                            e = 0;
                            f = 12;
                            continue
                        }
                        break;
                    case 15:
                        45 == j && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(u.createComment(A.substr(a, h, b - h))), b += 2, e = 1);
                        break;
                    case 16:
                        91 == j ? k++ :
                            93 == j ? k-- : 62 == j && 0 == k && (c.addChild(u.createDocType(A.substr(a, h, b - h))), e = 1);
                        break;
                    case 14:
                        63 == j && 62 == a.charCodeAt(b + 1) && (b++, e = A.substr(a, h + 1, b - h - 2), c.addChild(u.createProlog(e)), e = 1)
            }
            j = a.charCodeAt(++b)
        }
        1 == e && (h = b, e = 13);
        if (13 == e) return (b != h || 0 == i) && c.addChild(u.createPCData(A.substr(a, h, b - h))), b;
        throw "Unexpected end";
    };
    Array.prototype.indexOf ? A.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    } : null;
    Math.__name__ = ["Math"];
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY =
        Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    i.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    };
    Math.isNaN = function(a) {
        return isNaN(a)
    };
    String.prototype.__class__ = i.String = String;
    String.__name__ = ["String"];
    Array.prototype.__class__ = i.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = i.Date = Date;
    Date.__name__ = ["Date"];
    var ja = i.Int = {
            __name__: ["Int"]
        },
        ka = i.Dynamic = {
            __name__: ["Dynamic"]
        },
        ha = i.Float = Number;
    ha.__name__ = ["Float"];
    var ia = i.Bool = Boolean;
    ia.__ename__ = ["Bool"];
    var la = i.Class = {
            __name__: ["Class"]
        },
        ma = {};
    u.Element = "element";
    u.PCData = "pcdata";
    u.CData = "cdata";
    u.Comment = "comment";
    u.DocType = "doctype";
    u.Prolog = "prolog";
    u.Document = "document";
    "undefined" != typeof document && (x.document = document);
    "undefined" != typeof window && (x.window = window, x.window.onerror = function(a, b, c) {
        var d = x.onerror;
        return null == d ? !1 : d(a, [b + ":" + c])
    });
    "undefined" != typeof JSON && (Y = JSON);
    g.ConstantsApp.STAGE_WIDTH = 960;
    g.ConstantsApp.STAGE_HEIGHT = 560;
    g.ConstantsApp.STAGE_CENTER_X = 480;
    g.ConstantsApp.STAGE_CENTER_Y =
        280;
    g.ConstantsApp.GROUND_Y = 510;
    g.ConstantsApp.BOUNDS_TOP = 200;
    g.ConstantsApp.BOUNDS_LEFT = 300;
    g.ConstantsApp.BOUNDS_RIGHT = 900;
    g.ConstantsApp.BARRIER_WIDTH = 75;
    g.ConstantsApp.BARRIER_HEIGHT = 15;
    g.ConstantsApp.TARGET_WIDTH = 80;
    g.ConstantsApp.TARGET_HEIGHT = 35;
    g.ConstantsApp.LAYER_BG = "layer_bg";
    g.ConstantsApp.LAYER_PARTS = "layer_parts";
    g.ConstantsApp.LAYER_PLAYER = "layer_player";
    g.ConstantsApp.LAYER_FG = "layer_fg";
    g.ConstantsApp.EVENT_PAUSE = "eventPause";
    g.ConstantsApp.EVENT_UNPAUSE = "eventUnpause";
    g.ConstantsApp.EVENT_MUTE_TOGGLE =
        "EVENT_MUTE_TOGGLE";
    g.ConstantsApp.EVENT_BURST_ORANGE = "eventBurstOrange";
    g.ConstantsApp.EVENT_HIT_CAGE = "eventHitCage";
    g.ConstantsApp.EVENT_HIT_BOMB = "eventHitBomb";
    g.ConstantsApp.EVENT_HIT_SUITCASE = "eventHitSuitcase";
    g.ConstantsApp.BOOL_GAME_LOSE = "bool_game_lose";
    g.ConstantsApp.BOOL_GAME_WIN = "bool_game_win";
    g.ConstantsApp.BOOL_LEVEL_LOSE = "bool_level_lose";
    g.ConstantsApp.BOOL_LEVEL_WIN = "bool_level_win";
    g.ConstantsApp.BOOL_GAMEOVER = "bool_gameover";
    g.ConstantsApp.BOOL_PAUSED = "bool_paused";
    g.ConstantsApp.BOOL_MUTED =
        "bool_muted";
    g.ConstantsApp.BOOL_INPUT_LOCK = "bool_inputlock";
    g.ConstantsApp.BOOL_METER = "bool_meter";
    g.ConstantsApp.BOOL_AIM = "bool_aim";
    g.ConstantsApp.BOOL_MESSAGE_1 = "bool_message1";
    g.ConstantsApp.BOOL_MESSAGE_2 = "bool_message2";
    g.ConstantsApp.BOOL_TOUCH_DEVICE = "bool_touch_device";
    g.ConstantsApp.BOOL_ORIENTATION_ALERT = "bool_orientation_alert";
    g.ConstantsApp.INT_SCORE = "int_score";
    g.ConstantsApp.INT_LEVEL = "int_level";
    g.ConstantsApp.INT_DUCKS_LEFT = "int_ducksLeft";
    g.ConstantsApp.INT_TARGETS_LEFT = "int_targetsLeft";
    g.ConstantsApp.FLOAT_POWER_METER = "int_powerMeter";
    g.ConstantsApp.INPUT_CLICK = "input_click";
    g.ConstantsApp.INPUT_SPACE = "input_space";
    g.ConstantsApp.INPUT_Z = "input_z";
    g.ConstantsApp.INPUT_X = "input_x";
    g.ConstantsApp.INPUT_C = "input_c";
    g.ConstantsApp.INPUT_P = "input_p";
    g.ConstantsApp.INPUT_UP = "input_up";
    g.ConstantsApp.INPUT_DOWN = "input_down";
    g.ConstantsApp.INPUT_LEFT = "input_left";
    g.ConstantsApp.INPUT_RIGHT = "input_right";
    g.ConstantsApp.CONFIG_XML_PATH = "config/config.xml";
    g.ConstantsApp.DEBUG_SILENCE_AUDIO = !1;
    g.ConstantsScreen.SCREEN_LOADING = "loadpanel";
    g.ConstantsScreen.SCREEN_SPLASH = "splash";
    g.ConstantsScreen.SCREEN_HELP = "help";
    g.ConstantsScreen.SCREEN_GAMEPLAY_HUD = "gameplayhud";
    g.ConstantsScreen.SCREEN_GAMEPLAY_MENU = "gameplaymenu";
    g.ConstantsScreen.SCREEN_QUIT_CONFIRM = "quitconfirm";
    g.ConstantsScreen.SCREEN_END_GOLD = "endGold";
    g.ConstantsScreen.SCREEN_END_SILVER = "endSilver";
    g.ConstantsScreen.SCREEN_END_BRONZE = "endBronze";
    g.ConstantsScreen.SCREEN_END_ALUMINUM = "endAluminum";
    g.ConstantsScreen.SCREEN_END_TIN =
        "endTin";
    g.ConstantsScreen.SCREEN_END_ROCK = "endRock";
    g.ConstantsScreen.TRANSITION_FADE = 0;
    g.ConstantsScreen.TRANSITION_SCROLL = 1;
    g.ConstantsScreen.TRANSITION_SCROLL_DOWN = 2;
    g.ConstantsScreen.TRANSITION_STAGED = 4;
    g.ConstantsScreen.TRANSITION_SCREENSHOT = 5;
    g.ConstantsScreen.CHANGE_OPEN_BEGIN = 0;
    g.ConstantsScreen.CHANGE_OPEN_COMPLETE = 1;
    g.ConstantsScreen.CHANGE_CLOSE_BEGIN = 2;
    g.ConstantsScreen.CHANGE_CLOSE_COMPLETE = 3;
    g.ConstantsScreen.OUTPUT_OPENED = 0;
    g.ConstantsScreen.OUTPUT_CLOSED = 1;
    g.ConstantsScreen.CONDITION_CLOSED_ALL =
        0;
    g.ConstantsScreen.CONDITION_CLOSED_SPECIFIC = 1;
    g.ConstantsScreen.CONDITION_TRANSITION_MIDWAY = 2;
    g.ConstantsScreen.CONDITION_TRANSITION_COMPLETE = 3;
    g.ConstantsScreen.CONDITION_IMMEDIATE = 4;
    g.ConstantsScreen.FLOW_SPLASH_PLAY = "FLOW_SPLASH_PLAY";
    g.ConstantsScreen.FLOW_HELP_CLOSE = "FLOW_HELP_CLOSE";
    g.ConstantsScreen.FLOW_GAMEPLAY_MENU = "FLOW_GAMEPLAY_MENU";
    g.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE = "FLOW_GAMEPLAY_MENU_CLOSE";
    g.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP = "FLOW_GAMEPLAY_MENU_HELP";
    g.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT =
        "FLOW_GAMEPLAY_MENU_QUIT";
    g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES = "FLOW_GAMEPLAY_QUIT_YES";
    g.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO = "FLOW_GAMEPLAY_QUIT_NO";
    g.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN = "FLOW_END_GAME_PLAY_AGAIN";
    g.ConstantsScreen.FLOW_BRANCH_GAME_WIN = "FLOW_BRANCH_GAME_WIN";
    g.ConstantsScreen.FLOW_BRANCH_GAME_LOSE = "FLOW_BRANCH_GAME_LOSE";
    g.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN = "FLOW_BRANCH_LEVEL_WIN";
    g.ConstantsScreen.FLOW_BRANCH_LEVEL_LOSE = "FLOW_BRANCH_LEVEL_LOSE";
    p.CollisionBounds.SPHERE =
        "sphere";
    p.CollisionBounds.POLY = "poly";
    p.GeomConst.DEGREE_RADIAN = Math.PI / 180;
    p.GeomConst.RADIAN_DEGREE = 180 / Math.PI;
    p.GeomConst.EPSILON = 1.0E-5;
    p.Vector.POSITIVE_Z = new p.Vector(0, 0, 1);
    k.buttons.ButtonBase.UP = "workinBtnUp";
    k.buttons.ButtonBase.DOWN = "workinBtnDown";
    k.buttons.ButtonBase.CLICK = "workinBtnClick";
    k.buttons.ButtonBase.CANCEL_DRAG = "workinBtnCancelDrag";
    q.Display.EVENT_UPDATE_DISPLAY = "event_update_display";
    k.screens.data.ScreenStateData.ACTION_STOP = 0;
    k.screens.data.ScreenStateData.ACTION_OPENED =
        1;
    k.screens.data.ScreenStateData.ACTION_EVENT = 2;
    k.screens.data.ScreenStateData.ACTION_NEW_STATE = 3;
    k.screens.data.ScreenStateData.ACTION_CLOSED = 4;
    k.screens.data.ScreenStateData.ACTION_FLOW = 5;
    t.elements.Projectile._STATE_FLYING = 0;
    t.elements.Projectile._STATE_ROLLING = 1;
    t.elements.Projectile._STATE_STUCK = 2;
    R.ConstantsCloud.STRING_REGION_ID = "cloudregionid";
    R.ConstantsCloud.LOCALIZATION_XML_PATH = "config/";
    R.ConstantsCloud.EVENT_FILES_LOADED = "EVENT_WORKINCLOUD_FILES_LOADED";
    n.WMEventFlow.EVENT_FLOW = "Nflow";
    n.WMEventInput.EVENT_INPUT = "eventinput";
    n.WMEventInput.PHASE_DOWN = 1;
    n.WMEventInput.PHASE_UP = 0;
    n.WMEventInput.PHASE_MOVE = 2;
    n.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT = "Neio";
    n.WMEventScreenOut.EVENT_SCREEN_OUTPUT = "Neso";
    n.WMEventUpdate.EVENT_UPDATE = "eventupdate";
    h.tween.PennerManager.EASE_LINEAR = "linear";
    h.tween.PennerManager.EASE = "ease";
    h.tween.PennerManager.EASE_QUAD = "quad";
    h.tween.PennerManager.EASE_IN = "easeIn";
    h.tween.PennerManager.EASE_QUAD_IN = "quadIn";
    h.tween.PennerManager.EASE_OUT = "easeOut";
    h.tween.PennerManager.EASE_QUAD_OUT = "quadOut";
    h.tween.PennerManager.EASE_EXPO = "expo";
    h.tween.PennerManager.EASE_EXPO_IN = "expoIn";
    h.tween.PennerManager.EASE_EXPO_OUT = "expoOut";
    h.tween.PennerManager.EASE_ELASTIC = "elastic";
    h.tween.PennerManager.EASE_ELASTIC_IN = "elasticIn";
    h.tween.PennerManager.EASE_ELASTIC_OUT = "elasticOut";
    h.tween.PennerManager.EASE_BUMP = "bump";
    h.tween.PennerManager.EASE_BUMP_IN = "bumpIn";
    h.tween.PennerManager.EASE_BUMP_OUT = "bumpOut";
    h.tween.PennerManager.EASE_BOUNCE = "bounce";
    h.tween.PennerManager.EASE_BOUNCE_IN =
        "bounceIn";
    h.tween.PennerManager.EASE_BOUNCE_OUT = "bounceOut";
    h.tween.PennerManager.EASE_CUBIC = "cubic";
    h.tween.PennerManager.EASE_CUBIC_IN = "cubicIn";
    h.tween.PennerManager.EASE_CUBIC_OUT = "cubicOut";
    h.tween.PennerManager.EASE_SPACE = "space";
    h.tween.PennerManager.EASE_SPACE_IN = "spaceIn";
    h.tween.PennerManager.EASE_SPACE_OUT = "spaceOut";
    h.tween.PennerManager.EASE_BLAST = "blast";
    h.tween.PennerManager.EASE_BLAST_IN = "blastIn";
    h.tween.PennerManager.EASE_BLAST_OUT = "blastOut";
    h.tween.PennerManager.EASE_WAVE = "wave";
    h.tween.PennerManager.EASE_WAVE_IN = "waveIn";
    h.tween.PennerManager.EASE_WAVE_OUT = "waveOut";
    h.tween.PennerManager.EASE_CIRCLE = "circle";
    h.tween.PennerManager.EASE_CIRCLE_IN = "circleIn";
    h.tween.PennerManager.EASE_CIRCLE_OUT = "circleOut";
    s.ServiceAnalytics._offlineUserId = "";
    s.ServiceAnalytics._offlineTrackingId = "";
    s.ServiceAnalytics._appId = "";
    s.ServiceAnalytics._sessionId = "";
    s.ServiceAnalytics._flagInitted = !1;
    s.ServiceAnalytics._flagStarted = !1;
    s.ServiceAnalytics._flagLoaded = !1;
    s.ServiceAnalytics._DEFAULT_SHARED_OBJECT_ID =
        "nkcimocuresid";
    s.ServiceAnalytics.OPTION_ENABLE_TRACKING = !0;
    f.WMPointer._DELTA_ALLOWANCE = 30;
    f.WMPointer._DELTA_TIMEOUT = 0.2;
    f.WorkinCloud.instance = new f.WorkinCloud;
    e.html.HtmlPlatform.instance = new e.html.HtmlPlatform;
    m.SignalBase.DISPATCHING_SENTINEL = new m.SignalConnection(null, null);
    E.root = new M;
    E.uncaughtError = new m.Signal1;
    E.hidden = new m.Value(!1);
    E.hasGPU = new m.Value(!1);
    E._platform = e.html.HtmlPlatform.instance;
    E._calledInit = !1;
    Z.logger = new m.Logger(E._platform.createLogHandler("flambe"));
    y.Manifest._buildManifest =
        y.Manifest.createBuildManifests();
    N = y.Manifest;
    Z = (new X("\\b(Android)\\b", "")).match(x.window.navigator.userAgent) ? !1 : null != (new XMLHttpRequest).withCredentials;
    N._supportsCrossOrigin = Z;
    j.Sprite._scratchPoint = new J.Point;
    e.BasicKeyboard._sharedEvent = new d.KeyboardEvent;
    e.BasicMouse._sharedEvent = new d.MouseEvent;
    e.BasicPointer._sharedEvent = new d.PointerEvent;
    e.html.CanvasRenderer.CANVAS_TEXTURES = (new X("(iPhone|iPod|iPad)", "")).match(x.window.navigator.userAgent);
    e.html.HtmlAssetPackLoader._mediaRefCount =
        0;
    e.html.HtmlAssetPackLoader._detectBlobSupport = !0;
    e.html.HtmlUtil.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    e.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER = x.window.top == x.window && (new X("Mobile(/.*)? Safari", "")).match(x.window.navigator.userAgent);
    e.html.WebAudioSound._detectSupport = !0;
    T.USE_CACHE = !1;
    T.USE_ENUM_INDEX = !1;
    T.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    P.DEFAULT_RESOLVER = L;
    P.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    O.main()
})();