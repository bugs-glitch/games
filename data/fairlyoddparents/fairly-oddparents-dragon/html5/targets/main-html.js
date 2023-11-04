/**
 * Cooked with Flambe
 * https://github.com/aduros/flambe
 */
'use strict';
(function () {
  var N,
  ca,
  e,
  t,
  g,
  f,
  P,
  r,
  m,
  i,
  $,
  o,
  Q,
  C,
  T,
  O,
  S,
  U,
  X,
  w,
  y,
  D,
  L,
  l,
  d,
  H,
  n,
  M,
  z,
  v,
  G,
  h,
  Y,
  A,
  F,
  aa;
  function x(a, b) {
    function c() {
    }
    c.prototype = a;
    var k = new c,
    e;
    for (e in b) k[e] = b[e];
    return k
  }
  function fa(a) {
    return a instanceof Array ? function () {
      return B.iter(a)
    }
     : 'function' == typeof a.iterator ? s(a, a.iterator)  : a.iterator
  }
  function s(a, b) {
    var c = function () {
      return c.method.apply(c.scope, arguments)
    };
    c.scope = a;
    c.method = b;
    return c
  }
  var j = {
  },
  p = function () {
    return w.__string_rec(this, '')
  },
  W = function (a, b) {
    b = b.split('u').join('');
    this.r = RegExp(a, b)
  };
  j.EReg = W;
  W.__name__ = [
    'EReg'
  ];
  W.prototype = {
    matchedPos: function () {
      if (null == this.r.m) throw 'No string matched';
      return {
        pos: this.r.m.index,
        len: this.r.m[0].length
      }
    },
    matched: function (a) {
      if (null != this.r.m && 0 <= a && a < this.r.m.length) a = this.r.m[a];
       else throw 'EReg::matched';
      return a
    },
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.m = this.r.exec(a);
      this.r.s = a;
      return null != this.r.m
    },
    __class__: W
  };
  var I = function () {
    this.h = {
    }
  };
  j.Hash = I;
  I.__name__ = [
    'Hash'
  ];
  I.prototype = {
    iterator: function () {
      return {
        ref: this.h,
        it: this.keys(),
        hasNext: function () {
          return this.it.hasNext()
        },
        next: function () {
          return this.ref['$' + this.it.next()]
        }
      }
    },
    keys: function () {
      var a = [
      ],
      b;
      for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
      return B.iter(a)
    },
    remove: function (a) {
      a = '$' + a;
      if (!this.h.hasOwnProperty(a)) return !1;
      delete this.h[a];
      return !0
    },
    exists: function (a) {
      return this.h.hasOwnProperty('$' + a)
    },
    get: function (a) {
      return this.h['$' + a]
    },
    set: function (a, b) {
      this.h['$' + a] = b
    },
    __class__: I
  };
  var B = function () {
  };
  j.HxOverrides = B;
  B.__name__ = [
    'HxOverrides'
  ];
  B.dateStr = function (a) {
    var b = a.getMonth() + 1,
    c = a.getDate(),
    k = a.getHours(),
    e = a.getMinutes(),
    d = a.getSeconds();
    return a.getFullYear() + '-' + (10 > b ? '0' + b : '' + b) + '-' + (10 > c ? '0' + c : '' + c) + ' ' + (10 > k ? '0' + k : '' + k) + ':' + (10 > e ? '0' + e : '' + e) + ':' + (10 > d ? '0' + d : '' + d)
  };
  B.strDate = function (a) {
    switch (a.length) {
      case 8:
        var a = a.split(':'),
        b = new Date;
        b.setTime(0);
        b.setUTCHours(a[0]);
        b.setUTCMinutes(a[1]);
        b.setUTCSeconds(a[2]);
        return b;
      case 10:
        return a = a.split('-'),
        new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
      case 19:
        return a = a.split(' '),
        b = a[0].split('-'),
        a = a[1].split(':'),
        new Date(b[0], b[1] - 1, b[2], a[0], a[1], a[2]);
      default:
        throw 'Invalid date format : ' + a;
    }
  };
  B.cca = function (a, b) {
    var c = a.charCodeAt(b);
    return c != c ? void 0 : c
  };
  B.substr = function (a, b, c) {
    if (null != b && 0 != b && null != c && 0 > c) return '';
    null == c && (c = a.length);
    0 > b ? (b = a.length + b, 0 > b && (b = 0))  : 0 > c && (c = a.length + c - b);
    return a.substr(b, c)
  };
  B.remove = function (a, b) {
    for (var c = 0, k = a.length; c < k; ) {
      if (a[c] == b) return a.splice(c, 1),
      !0;
      c++
    }
    return !1
  };
  B.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur <
        this.arr.length
      },
      next: function () {
        return this.arr[this.cur++]
      }
    }
  };
  var V = function () {
    this.h = {
    }
  };
  j.IntHash = V;
  V.__name__ = [
    'IntHash'
  ];
  V.prototype = {
    keys: function () {
      var a = [
      ],
      b;
      for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
      return B.iter(a)
    },
    remove: function (a) {
      if (!this.h.hasOwnProperty(a)) return !1;
      delete this.h[a];
      return !0
    },
    exists: function (a) {
      return this.h.hasOwnProperty(a)
    },
    get: function (a) {
      return this.h[a]
    },
    set: function (a, b) {
      this.h[a] = b
    },
    __class__: V
  };
  var ba = function () {
  };
  j.Lambda = ba;
  ba.__name__ = [
    'Lambda'
  ];
  ba.array = function (a) {
    for (var b = [
    ], a = fa(a) (); a.hasNext(); ) {
      var c = a.next();
      b.push(c)
    }
    return b
  };
  ba.has = function (a, b, c) {
    if (null == c) for (c = fa(a) (); c.hasNext(); ) {
      if (a = c.next(), a == b) return !0
    } else for (var k = fa(a) (); k.hasNext(); ) if (a = k.next(), c(a, b)) return !0;
    return !1
  };
  ba.count = function (a, b) {
    var c = 0;
    if (null == b) for (var k = fa(a) (); k.hasNext(); ) k.next(),
    c++;
     else for (k = fa(a) (); k.hasNext(); ) {
      var e = k.next();
      b(e) && c++
    }
    return c
  };
  var da = function () {
    this.length = 0
  };
  j.List = da;
  da.__name__ = [
    'List'
  ];
  da.prototype = {
    iterator: function () {
      return {
        h: this.h,
        hasNext: function () {
          return null != this.h
        },
        next: function () {
          if (null == this.h) return null;
          var a = this.h[0];
          this.h = this.h[1];
          return a
        }
      }
    },
    add: function (a) {
      a = [
        a
      ];
      null == this.h ? this.h = a : this.q[1] = a;
      this.q = a;
      this.length++
    },
    __class__: da
  };
  var J = function () {
  };
  j.Reflect = J;
  J.__name__ = [
    'Reflect'
  ];
  J.field = function (a, b) {
    var c = null;
    try {
      c = a[b]
    } catch (k) {
    }
    return c
  };
  J.fields = function (a) {
    var b = [
    ];
    if (null != a) {
      var c = Object.prototype.hasOwnProperty,
      k;
      for (k in a) c.call(a, k) && b.push(k)
    }
    return b
  };
  J.isFunction = function (a) {
    return 'function' ==
    typeof a && !(a.__name__ || a.__ename__)
  };
  J.compareMethods = function (a, b) {
    return a == b ? !0 : !J.isFunction(a) || !J.isFunction(b) ? !1 : a.scope == b.scope && a.method == b.method && null != a.method
  };
  var q = function () {
  };
  j.Std = q;
  q.__name__ = [
    'Std'
  ];
  q.string = function (a) {
    return w.__string_rec(a, '')
  };
  q.parseInt = function (a) {
    var b = parseInt(a, 10);
    if (0 == b && (120 == B.cca(a, 1) || 88 == B.cca(a, 1))) b = parseInt(a);
    return isNaN(b) ? null : b
  };
  q.parseFloat = function (a) {
    return parseFloat(a)
  };
  var Z = function () {
    this.b = ''
  };
  j.StringBuf = Z;
  Z.__name__ = [
    'StringBuf'
  ];
  Z.prototype = {
    __class__: Z
  };
  var R = function () {
  };
  j.StringTools = R;
  R.__name__ = [
    'StringTools'
  ];
  R.urlEncode = function (a) {
    return encodeURIComponent(a)
  };
  R.urlDecode = function (a) {
    return decodeURIComponent(a.split('+').join(' '))
  };
  R.startsWith = function (a, b) {
    return a.length >= b.length && B.substr(a, 0, b.length) == b
  };
  R.isSpace = function (a, b) {
    var c = B.cca(a, b);
    return 9 <= c && 13 >= c || 32 == c
  };
  R.ltrim = function (a) {
    for (var b = a.length, c = 0; c < b && R.isSpace(a, c); ) c++;
    return 0 < c ? B.substr(a, c, b - c)  : a
  };
  R.rtrim = function (a) {
    for (var b = a.length, c = 0; c < b && R.isSpace(a, b - c - 1); ) c++;
    return 0 < c ? B.substr(a, 0, b - c)  : a
  };
  R.trim = function (a) {
    return R.ltrim(R.rtrim(a))
  };
  var E = j.ValueType = {
    __ename__: [
      'ValueType'
    ],
    __constructs__: 'TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown'.split(',')
  };
  E.TNull = [
    'TNull',
    0
  ];
  E.TNull.toString = p;
  E.TNull.__enum__ = E;
  E.TInt = [
    'TInt',
    1
  ];
  E.TInt.toString = p;
  E.TInt.__enum__ = E;
  E.TFloat = [
    'TFloat',
    2
  ];
  E.TFloat.toString = p;
  E.TFloat.__enum__ = E;
  E.TBool = [
    'TBool',
    3
  ];
  E.TBool.toString = p;
  E.TBool.__enum__ = E;
  E.TObject = [
    'TObject',
    4
  ];
  E.TObject.toString = p;
  E.TObject.__enum__ = E;
  E.TFunction = [
    'TFunction',
    5
  ];
  E.TFunction.toString = p;
  E.TFunction.__enum__ = E;
  E.TClass = function (a) {
    a = [
      'TClass',
      6,
      a
    ];
    a.__enum__ = E;
    a.toString = p;
    return a
  };
  E.TEnum = function (a) {
    a = [
      'TEnum',
      7,
      a
    ];
    a.__enum__ = E;
    a.toString = p;
    return a
  };
  E.TUnknown = [
    'TUnknown',
    8
  ];
  E.TUnknown.toString = p;
  E.TUnknown.__enum__ = E;
  var K = function () {
  };
  j.Type = K;
  K.__name__ = [
    'Type'
  ];
  K.getClassName = function (a) {
    return a.__name__.join('.')
  };
  K.getEnumName = function (a) {
    return a.__ename__.join('.')
  };
  K.resolveClass = function (a) {
    a = j[a];
    return null == a || !a.__name__ ? null : a
  };
  K.resolveEnum = function (a) {
    a = j[a];
    return null == a || !a.__ename__ ? null : a
  };
  K.createInstance = function (a, b) {
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
        return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
      default:
        throw 'Too many arguments';
    }
  };
  K.createEmptyInstance = function (a) {
    function b() {
    }
    b.prototype = a.prototype;
    return new b
  };
  K.createEnum = function (a, b, c) {
    var k = J.field(a, b);
    if (null == k) throw 'No such constructor ' + b;
    if (J.isFunction(k)) {
      if (null == c) throw 'Constructor ' + b + ' need parameters';
      return k.apply(a, c)
    }
    if (null != c && 0 != c.length) throw 'Constructor ' + b + ' does not need parameters';
    return k
  };
  K.getEnumConstructs = function (a) {
    return a.__constructs__.slice()
  };
  K['typeof'] = function (a) {
    switch (typeof a) {
      case 'boolean':
        return E.TBool;
      case 'string':
        return E.TClass(String);
      case 'number':
        return Math.ceil(a) == a % 2147483648 ? E.TInt : E.TFloat;
      case 'object':
        if (null == a) return E.TNull;
        var b = a.__enum__;
        if (null != b) return E.TEnum(b);
        a = a.__class__;
        return null != a ? E.TClass(a)  : E.TObject;
      case 'function':
        return a.__name__ || a.__ename__ ? E.TObject : E.TFunction;
      case 'undefined':
        return E.TNull;
      default:
        return E.TUnknown
    }
  };
  var u = function () {
  };
  j.Xml = u;
  u.__name__ = [
    'Xml'
  ];
  u.parse = function (a) {
    return C.Parser.parse(a)
  };
  u.createElement = function (a) {
    var b = new u;
    b.nodeType = u.Element;
    b._children = [
    ];
    b._attributes = new I;
    b.setNodeName(a);
    return b
  };
  u.createPCData = function (a) {
    var b = new u;
    b.nodeType = u.PCData;
    b.setNodeValue(a);
    return b
  };
  u.createCData = function (a) {
    var b = new u;
    b.nodeType = u.CData;
    b.setNodeValue(a);
    return b
  };
  u.createComment = function (a) {
    var b = new u;
    b.nodeType = u.Comment;
    b.setNodeValue(a);
    return b
  };
  u.createDocType = function (a) {
    var b = new u;
    b.nodeType = u.DocType;
    b.setNodeValue(a);
    return b
  };
  u.createProlog = function (a) {
    var b = new u;
    b.nodeType = u.Prolog;
    b.setNodeValue(a);
    return b
  };
  u.createDocument = function () {
    var a = new u;
    a.nodeType = u.Document;
    a._children = [
    ];
    return a
  };
  u.prototype = {
    toString: function () {
      if (this.nodeType == u.PCData) return this._nodeValue;
      if (this.nodeType == u.CData) return '<![CDATA[' + this._nodeValue + ']]>';
      if (this.nodeType == u.Comment) return '<!--' + this._nodeValue + '-->';
      if (this.nodeType == u.DocType) return '<!DOCTYPE ' + this._nodeValue + '>';
      if (this.nodeType == u.Prolog) return '<?' + this._nodeValue + '?>';
      var a = new Z;
      if (this.nodeType ==
      u.Element) {
        a.b += q.string('<');
        a.b += q.string(this._nodeName);
        for (var b = this._attributes.keys(); b.hasNext(); ) {
          var c = b.next();
          a.b += q.string(' ');
          a.b += q.string(c);
          a.b += q.string('="');
          a.b += q.string(this._attributes.get(c));
          a.b += q.string('"')
        }
        if (0 == this._children.length) return a.b += q.string('/>'),
        a.b;
        a.b += q.string('>')
      }
      for (b = this.iterator(); b.hasNext(); ) c = b.next(),
      a.b += q.string(c.toString());
      this.nodeType == u.Element && (a.b += q.string('</'), a.b += q.string(this._nodeName), a.b += q.string('>'));
      return a.b
    },
    addChild: function (a) {
      if (null ==
      this._children) throw 'bad nodetype';
      null != a._parent && B.remove(a._parent._children, a);
      a._parent = this;
      this._children.push(a)
    },
    firstElement: function () {
      if (null == this._children) throw 'bad nodetype';
      for (var a = 0, b = this._children.length; a < b; ) {
        var c = this._children[a];
        if (c.nodeType == u.Element) return c;
        a++
      }
      return null
    },
    elementsNamed: function (a) {
      if (null == this._children) throw 'bad nodetype';
      return {
        cur: 0,
        x: this._children,
        hasNext: function () {
          for (var b = this.cur, c = this.x.length; b < c; ) {
            var k = this.x[b];
            if (k.nodeType == u.Element && k._nodeName == a) break;
            b++
          }
          this.cur = b;
          return b < c
        },
        next: function () {
          for (var b = this.cur, c = this.x.length; b < c; ) {
            var k = this.x[b];
            b++;
            if (k.nodeType == u.Element && k._nodeName == a) return this.cur = b,
            k
          }
          return null
        }
      }
    },
    elements: function () {
      if (null == this._children) throw 'bad nodetype';
      return {
        cur: 0,
        x: this._children,
        hasNext: function () {
          for (var a = this.cur, b = this.x.length; a < b && !(this.x[a].nodeType == u.Element); ) a += 1;
          this.cur = a;
          return a < b
        },
        next: function () {
          for (var a = this.cur, b = this.x.length; a < b; ) {
            var c = this.x[a],
            a = a + 1;
            if (c.nodeType ==
            u.Element) return this.cur = a,
            c
          }
          return null
        }
      }
    },
    iterator: function () {
      if (null == this._children) throw 'bad nodetype';
      return {
        cur: 0,
        x: this._children,
        hasNext: function () {
          return this.cur < this.x.length
        },
        next: function () {
          return this.x[this.cur++]
        }
      }
    },
    exists: function (a) {
      if (this.nodeType != u.Element) throw 'bad nodeType';
      return this._attributes.exists(a)
    },
    set: function (a, b) {
      if (this.nodeType != u.Element) throw 'bad nodeType';
      this._attributes.set(a, b)
    },
    get: function (a) {
      if (this.nodeType != u.Element) throw 'bad nodeType';
      return this._attributes.get(a)
    },
    getParent: function () {
      return this._parent
    },
    setNodeValue: function (a) {
      if (this.nodeType == u.Element || this.nodeType == u.Document) throw 'bad nodeType';
      return this._nodeValue = a
    },
    getNodeValue: function () {
      if (this.nodeType == u.Element || this.nodeType == u.Document) throw 'bad nodeType';
      return this._nodeValue
    },
    setNodeName: function (a) {
      if (this.nodeType != u.Element) throw 'bad nodeType';
      return this._nodeName = a
    },
    getNodeName: function () {
      if (this.nodeType != u.Element) throw 'bad nodeType';
      return this._nodeName
    },
    __class__: u
  };
  N = function () {
  };
  ca = void 0;
  e = void 0;
  t = void 0;
  g = void 0;
  j['com.nick.fop.dragon_drop.DocumentApp'] = N;
  N.__name__ = [
    'com',
    'nick',
    'fop',
    'dragon_drop',
    'DocumentApp'
  ];
  N.main = function () {
    D.init();
    N._fillEntity = new L;
    N._fillSprite = new l.FillSprite(0, 960, 560);
    N._fillEntity.add(N._fillSprite);
    D.root.addChild(N._fillEntity);
    f.WorkinCloud.instance.getAssets()._setBaseUrl(N.trimUrl(f.JSEmbedProxy.getBase()));
    f.WorkinCloud.instance.getDispatcher().addEventListener(P.ConstantsCloud.EVENT_FILES_LOADED, N._onBootstrapLoad);
    f.WorkinCloud.instance.getAssets().addPackDef('bootstrap');
    f.WorkinCloud.instance.getAssets().loadPack('bootstrap')
  };
  N._onBootstrapLoad = function () {
    f.WorkinCloud.instance.getDispatcher().removeEventListener(P.ConstantsCloud.EVENT_FILES_LOADED, N._onBootstrapLoad);
    N._initServices();
    T.delay(N._initMain, 800)
  };
  N._initMain = function () {
    N._main = new ca
  };
  N._initServices = function () {
    for (var a = f.WorkinCloud.instance.getAssets().getXML(e.ConstantsApp.CONFIG_XML_PATH).node.resolve('services').nodes.resolve('service').iterator(); a.hasNext(); ) {
      var b = a.next();
      switch (b.att.resolve('type').toString()) {
        case 'analytics':
          'true' ==
          b.att.resolve('enabled').toString() && (f.WorkinCloud.instance.log('[DocumentApp](_initServices) initAnalytics'), r.ServiceAnalytics.init(b.att.resolve('id').toString()))
      }
    }
  };
  N.trimUrl = function (a) {
    if ('' == a) return '';
    if (0 > a.indexOf('http')) return '/' == a.charAt(0) && (a = B.substr(a, 1, a.length - 1)),
    a;
    var b = a.indexOf('http://');
    0 > b ? (b = a.indexOf('https://'), b = 0 > b ? 0 : b + 8)  : b += 7;
    b = a.indexOf('/', b);
    a = B.substr(a, b, a.length - b);
    0 > a.indexOf('assets') && (a += 'assets/');
    return a
  };
  ca = function () {
    this._RATE_REFRESH_SCALE = 0.4;
    this._flagGameplayPaused = this._flagInitialLoadComplete = this._flagJSEmbedPauseState = this._flagJSEmbedExists = !1;
    this._timerRefreshScale = 0.001;
    f.WorkinCloud.instance.log('[Main] Constructed');
    this._timeline = D.root;
    D.uncaughtError.connect(s(this, this.errorHandler));
    f.WorkinCloud.instance.getInput().prime();
    this._scaleSprite = new l.Sprite;
    this._timeline.add(this._scaleSprite);
    this._layerWorld = new L;
    this._layerUI = new L;
    this._flagWebAudioUnlocked = !1;
    this._timeline.addChild(this._layerWorld);
    this._timeline.addChild(this._layerUI);
    this._dt = 0;
    this._isUIActive = this._isWorldActive = !1;
    this._flagFirstPlay = !0;
    this._flagJSEmbedExists = f.JSEmbedProxy.getExists();
    this._document = {
      canvasScale: 1
    };
    this._document = eval('document');
    this._changeActions = [
    ];
    this._flowstack = [
    ];
    this._beginEngine();
    this._parseConfigXML();
    this._addEventListeners()
  };
  j['com.nick.fop.dragon_drop.Main'] = ca;
  ca.__name__ = [
    'com',
    'nick',
    'fop',
    'dragon_drop',
    'Main'
  ];
  ca.prototype = {
    _worldDestroy: function () {
      this._isWorldActive && (this._isWorldActive = !1, this._world.dispose(), this._world = null)
    },
    _onEventInterfaceChange: function (a) {
      this._executeInterfaceChange(a.flowId, a.screenId)
    },
    _handleWebAudioUnlock: function () {
      this._flagWebAudioUnlocked || (this._flagWebAudioUnlocked = !0, f.WorkinCloud.instance._getSound().playSound('audio/silent'))
    },
    _onEventInput: function (a) {
      this._handleWebAudioUnlock();
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT) || this._ui.handleInput(a) && this._isWorldActive && this._world.handleInput(a)
    },
    _onFlowEvent: function (a) {
      this._addFlowEvent(a.flowId)
    },
    _onMuteToggle: function () {
      f.WorkinCloud.instance.setValue(e.ConstantsApp.BOOL_MUTED, !f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_MUTED))
    },
    _enableInput: function () {
      f.WorkinCloud.instance.getDispatcher().addEventListener(m.WMEventInput.EVENT_INPUT, s(this, this._onEventInput))
    },
    _addEventListeners: function () {
      f.WorkinCloud.instance.getDispatcher().addEventListener(m.WMEventUpdate.EVENT_UPDATE, s(this, this._onEventUpdate));
      f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_MUTE_TOGGLE, s(this, this._onMuteToggle));
      f.WorkinCloud.instance.getDispatcher().addEventListener(m.WMEventFlow.EVENT_FLOW, s(this, this._onFlowEvent));
      this._ui.addEventListener(m.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT, s(this, this._onEventInterfaceChange))
    },
    _executeInterfaceChange: function (a, b) {
      for (var c = this._changeActions.length; 0 < c; ) c--,
      this._changeActions[c]._getScreenId() == b && this._changeActions[c]._getChangeEvent() == a && (this._changeActions[c]._getAction() (), this._changeActions.splice(c, 1))
    },
    _executeFlowStack: function (a) {
      if (!this._ui._getHasTransition()) switch (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_INPUT_LOCK, !1), a) {
        case e.ConstantsScreen.FLOW_SPLASH_PLAY:
          f.WorkinCloud.instance._getSound().playMusic('dragon_drop_final_theme', 0.5);
          this._gotoAndPlayGame();
          this._flagFirstPlay && r.ServiceAnalytics.start();
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_MENU:
          f.WorkinCloud.instance.log('[Main] Main Menu Flow Click');
          f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_PAUSE));
          this._ui.openScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU, !1);
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE:
          f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_UNPAUSE));
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU);
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_OPEN:
          this._ui.openScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_HUD, !1);
          this._ui.openScreen(e.ConstantsScreen.SCREEN_ATTACK_MENU, !1);
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_ATTACK_MENU, !1);
          break;
        case e.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN:
          this._ui.openScreen(e.ConstantsScreen.SCREEN_LEVEL_WIN, !1);
          break;
        case e.ConstantsScreen.FLOW_END_LEVEL_NEXT:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_LEVEL_WIN);
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_HUD);
          f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.CURRENT_LEVEL, 1);
          this._gotoAndPlayGame();
          this._resetCoolDowns();
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT:
          this._ui.openScreen(e.ConstantsScreen.SCREEN_QUIT_CONFIRM, !1);
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU, !1);
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_QUIT_CONFIRM, !1);
          this._ui.openScreen(e.ConstantsScreen.SCREEN_END_GAME, !1);
          r.ServiceAnalytics.sendMilestone('custom7');
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_QUIT_CONFIRM, !1);
          this._ui.openScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU, !1);
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU, !1);
          this._ui.openScreen(e.ConstantsScreen.SCREEN_HELP, !1);
          r.ServiceAnalytics.sendMilestone('custom3');
          break;
        case e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP_CLOSE:
          f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_UNPAUSE));
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_HELP, !1);
          break;
        case e.ConstantsScreen.FLOW_BRANCH_GAME_LOSE:
          this._ui.openScreen(e.ConstantsScreen.SCREEN_END_GAME, !1);
          r.ServiceAnalytics.sendMilestone('custom7');
          break;
        case e.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN:
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_HUD),
          this._ui.closeScreen(e.ConstantsScreen.SCREEN_END_GAME),
          this._setDefaults(),
          this._gotoAndPlayGame()
      }
    },
    _runFlowStack: function () {
      if (0 != this._flowstack.length) for (; 0 < this._flowstack.length; ) this._executeFlowStack(this._flowstack[0]),
      this._flowstack.shift()
    },
    _addFlowEvent: function (a) {
      this._flowstack.push(a)
    },
    _hideOrientationAlert: function () {
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT) && (f.WorkinCloud.instance.log('[Main](_showOrientationAlert) Back to landscape.'), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT, !1), f.JSEmbedProxy.unpause(), f.JSEmbedProxy.alertOff())
    },
    _showOrientationAlert: function () {
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT) || (f.WorkinCloud.instance.log('[Main](_showOrientationAlert) Portrait mode!'), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT, !0), f.JSEmbedProxy.pause(), f.JSEmbedProxy.alertOn(f.WorkinCloud.instance._getLocalize().getData('orientation_landscape')._getString()))
    },
    _unpauseGameplay: function (a) {
      null == a && (a = !0);
      a && (this._flagGameplayPaused = !1);
      f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_UNPAUSE))
    },
    _pauseGameplay: function (a) {
      null == a && (a = !0);
      a && (this._flagGameplayPaused = !0);
      f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_PAUSE))
    },
    _onEventUpdate: function (a) {
      this._dt = a.getDt();
      0.12 < this._dt && (this._dt = 0.12);
      if (this._flagJSEmbedExists && (f.JSEmbedProxy.getIsPaused() != this._flagJSEmbedPauseState && ((this._flagJSEmbedPauseState = f.JSEmbedProxy.getIsPaused()) ? this._pauseGameplay(!1)  : this._flagGameplayPaused || this._unpauseGameplay()), this._timerRefreshScale -= this._dt, 0 >= this._timerRefreshScale)) {
        this._timerRefreshScale = this._RATE_REFRESH_SCALE;
        if (this._flagInitialLoadComplete && f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_TOUCH_DEVICE)) {
          if (f.JSEmbedProxy.getCanvasHeight() >
          f.JSEmbedProxy.getCanvasWidth()) {
            this._showOrientationAlert();
            return
          }
          if (f.WorkinCloud.instance.getValue(e.ConstantsApp.BOOL_ORIENTATION_ALERT)) {
            this._hideOrientationAlert();
            return
          }
        }
        this._flagJSEmbedExists && f.JSEmbedProxy.getCanvasScale() != this._scaleSprite.scaleX._value && (this._scaleSprite.scaleX.set__(this._scaleSprite.scaleY.set__(f.JSEmbedProxy.getCanvasScale())), f.WorkinCloud.instance.getInput()._setScale(f.JSEmbedProxy.getCanvasScale()))
      }
      i.tween.WorkinTweener._getInstance().update(a.getDt());
      f.WorkinCloud.instance.getInput().update(a.getDt());
      this._isUIActive && this._ui.update(a.getDt());
      this._isWorldActive && (this._world.update(a.getDt()), this._world.render());
      f.WorkinCloud.instance._getSound().update(a.getDt());
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_GAME_LOSE) ? this._onFlowEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_GAME_LOSE))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_GAME_WIN) ? this._onFlowEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_GAME_WIN))  :
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_LEVEL_LOSE) ? this._onFlowEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_LEVEL_LOSE))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_LEVEL_WIN) && this._onFlowEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN));
      this._runFlowStack()
    },
    _generateWorld: function () {
      this._isWorldActive && this._worldDestroy();
      this._isWorldActive = !0;
      this._world = new t.World(this._layerWorld, this._flagFirstPlay);
      this._flagFirstPlay && (this._flagFirstPlay = !1)
    },
    _resetCoolDowns: function () {
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_FIRE_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_HEAL_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_MEZ_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_WINGS_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS, 0);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ENABLED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN, !1)
    },
    _gotoAndPlayGame: function () {
      this._loadChunks(['gameplay'], s(this, this._eventLoadCompleteGameplay), 800) && (this._generateWorld(), this._ui.changeScreenTo(e.ConstantsScreen.SCREEN_GAMEPLAY_HUD), r.ServiceAnalytics.sendMilestone('custom6'))
    },
    _generateUI: function () {
      this._isUIActive = !0;
      this._ui.addScreen(e.ConstantsScreen.SCREEN_LOADING, g.screens.ScreenLoading, 'ui/loading_screen');
      this._ui.addScreen(e.ConstantsScreen.SCREEN_LOADING_OVERLAY, g.screens.ScreenGeneric, 'ui/loading_2/loading_overlay');
      this._ui.addScreen(e.ConstantsScreen.SCREEN_CUTSCENE_BORDERS, g.screens.ScreenGeneric, 'ui/cutscene/cutscene_border');
      this._ui.addScreen(e.ConstantsScreen.SCREEN_SPLASH, g.screens.ScreenSplash, 'ui/splash/splash_screen_logos');
      this._ui.addScreen(e.ConstantsScreen.SCREEN_ATTACK_MENU, g.screens.ScreenAttackMenu);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_MENU, g.screens.ScreenGameplayMenu);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_GAMEPLAY_HUD, g.screens.ScreenGameplayHUD);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_LEVEL_WIN, g.screens.ScreenLevelWin);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_QUIT_CONFIRM, g.screens.ScreenQuitConfirm);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_HELP, g.screens.ScreenGameplayHelp);
      this._ui.addScreen(e.ConstantsScreen.SCREEN_END_GAME, g.screens.ScreenGameOver)
    },
    _registerInput: function () {
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_SPACE, [
        d.Key.Space
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_LEFT, [
        d.Key.Left,
        d.Key.A
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_RIGHT, [
        d.Key.Right,
        d.Key.D
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_UP, [
        d.Key.Up,
        d.Key.W
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_DOWN, [
        d.Key.Down,
        d.Key.S
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_Z, [
        d.Key.Z
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_X, [
        d.Key.X
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_C, [
        d.Key.C
      ]);
      f.WorkinCloud.instance.getInput().registerInput(e.ConstantsApp.INPUT_P, [
        d.Key.P
      ])
    },
    _setDefaults: function () {
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_PAUSED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MUTED, !0);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_GAMEOVER, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_GAME_WIN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_GAME_LOSE, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_LEVEL_WIN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_LEVEL_LOSE, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_INPUT_LOCK, !1);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_HEALTH, 3);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_LIVES, 3);
      f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_SCORE, 0);
      f.WorkinCloud.instance.setFloat(e.ConstantsApp.CURRENT_LEVEL, 1);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_FIRE_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_HEAL_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_MEZ_COOLDOWN, 0);
      f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_WINGS_COOLDOWN, 0);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ENABLED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ENABLED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ENABLED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ENABLED, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ON_COOLDOWN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ON_COOLDOWN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ON_COOLDOWN, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT, !1);
      f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_TOUCH_DEVICE, !1)
    },
    _beginEngine: function () {
      f.WorkinCloud.instance.log('[Main](_beginEngine)');
      this._ui = new g.ScreenManager(this._layerUI);
      this._timeline.add(new $.ComponentUpdater);
      this._registerInput();
      this._generateUI();
      this._setDefaults()
    },
    _eventLoadCompleteGameplay: function () {
      f.WorkinCloud.instance.getDispatcher().removeEventListener(P.ConstantsCloud.EVENT_FILES_LOADED, this._loadCallbackMethod);
      T.delay(s(this, this._gotoAndPlayGame), 800)
    },
    _loadChunksDelayCallback: function () {
      this._loadChunks(this._loadChunksCurrent, this._loadCallbackMethod, 0)
    },
    _loadChunks: function (a, b, c) {
      null == c && (c = 0);
      for (var k = 0, d = !0; k < a.length; ) f.WorkinCloud.instance.getAssets().isChunkLoaded(a[k]) || (d = !1),
      k++;
      if (d) return !0;
      this._loadChunksCurrent = a;
      this._loadCallbackMethod = b;
      if (0 < c) return T.delay(s(this, this._loadChunksDelayCallback), c),
      this._ui.changeScreenTo(e.ConstantsScreen.SCREEN_LOADING, !1, e.ConstantsScreen.TRANSITION_SCROLL_UP),
      !1;
      f.WorkinCloud.instance.getDispatcher().addEventListener(P.ConstantsCloud.EVENT_FILES_LOADED, this._loadCallbackMethod);
      for (k = 0; k < a.length; ) f.WorkinCloud.instance.getAssets().isChunkLoaded(a[k]) || f.WorkinCloud.instance.getAssets().loadChunk(a[k]),
      k++;
      this._ui.changeScreenTo(e.ConstantsScreen.SCREEN_LOADING, !1, e.ConstantsScreen.TRANSITION_SCROLL_UP);
      return !1
    },
    _gotoSplash: function () {
      this._enableInput();
      this._ui.changeScreenTo(e.ConstantsScreen.SCREEN_SPLASH, !1, e.ConstantsScreen.TRANSITION_SCROLL_DOWN);
      r.ServiceAnalytics.sendMilestone('custom2')
    },
    _eventLoadCompleteInitial: function () {
      f.WorkinCloud.instance.getDispatcher().removeEventListener(P.ConstantsCloud.EVENT_FILES_LOADED, this._loadCallbackMethod);
      this._flagInitialLoadComplete = !0;
      T.delay(s(this, this._gotoSplash), 500)
    },
    _beginInitialLoad: function () {
      this._loadChunks(['initial','gameplay'], s(this, this._eventLoadCompleteInitial), 800);
      f.WorkinCloud.instance.getAssets().loadFolder('fonts_' + f.WorkinCloud.instance.getString(P.ConstantsCloud.STRING_REGION_ID))
    },
    _parseConfigXML: function () {
      f.WorkinCloud.instance.log('[Main](_parseConfigXML) Parse Config XML: ' + e.ConstantsApp.CONFIG_XML_PATH);
      for (var a = f.WorkinCloud.instance.getAssets().getXML(e.ConstantsApp.CONFIG_XML_PATH), b = a.node.resolve('packs').nodes.resolve('pack').iterator(); b.hasNext(); ) {
        for (var c = b.next(), k = [
        ], d = c.nodes.resolve('flump').iterator(); d.hasNext(); ) {
          var h = d.next();
          k.push(h.att.resolve('id').toString())
        }
        d = [
        ];
        for (h = c.nodes.resolve('tiles').iterator(); h.hasNext(); ) {
          var g = h.next();
          d.push(g.att.resolve('id').toString())
        }
        f.WorkinCloud.instance.getAssets().addPackDef(c.att.resolve('id').toString(), k, d)
      }
      for (b = a.node.resolve('chunks').nodes.resolve('chunk').iterator(); b.hasNext(); ) c = b.next(),
      f.WorkinCloud.instance.getAssets().addChunk(c.att.resolve('id').toString(), c);
      f.WorkinCloud.instance.setString(P.ConstantsCloud.STRING_REGION_ID, q.string(a.node.resolve('localization').node.resolve('region').getInnerData()));
      f.WorkinCloud.instance.log('[Main] Localization : Set Region: ' + f.WorkinCloud.instance.getString(P.ConstantsCloud.STRING_REGION_ID));
      T.delay(s(this, this._beginInitialLoad), 800)
    },
    errorHandler: function (a) {
      f.WorkinCloud.instance.log('Error:' +
      a)
    },
    __class__: ca
  };
  e = {
    ConstantsApp: function () {
    }
  };
  j['com.nick.fop.dragon_drop.data.ConstantsApp'] = e.ConstantsApp;
  e.ConstantsApp.__name__ = 'com,nick,fop,dragon_drop,data,ConstantsApp'.split(',');
  e.ConstantsScreen = function () {
  };
  j['com.nick.fop.dragon_drop.data.ConstantsScreen'] = e.ConstantsScreen;
  e.ConstantsScreen.__name__ = 'com,nick,fop,dragon_drop,data,ConstantsScreen'.split(',');
  m = {
  };
  f = void 0;
  P = void 0;
  r = void 0;
  i = void 0;
  $ = void 0;
  o = void 0;
  Q = void 0;
  m.WMEventDispatcher = function () {
    this._signals = new I
  };
  j['com.workinman.events.WMEventDispatcher'] = m.WMEventDispatcher;
  m.WMEventDispatcher.__name__ = [
    'com',
    'workinman',
    'events',
    'WMEventDispatcher'
  ];
  m.WMEventDispatcher.prototype = {
    dispose: function () {
      for (var a = this._signals.iterator(); a.hasNext(); ) a.next().dispose();
      this._signals = null
    },
    dispatchEvent: function (a) {
      this._signals.exists(a.getEventId()) && this._signals.get(a.getEventId()).dispatchEvent(a)
    },
    removeEventListener: function (a, b) {
      this._signals.exists(a) && (this._signals.get(a).removeEventListener(b), this._signals.get(a).isEmtpy() && (this._signals.get(a).dispose(), this._signals.remove(a)))
    },
    addEventListener: function (a, b) {
      this._signals.exists(a) || this._signals.set(a, new m._WMEventDispatcher.WMEventTracker);
      this._signals.get(a).addEventListener(b)
    },
    __class__: m.WMEventDispatcher
  };
  g = {
    ScreenManager: function (a) {
      m.WMEventDispatcher.call(this);
      this._container = a;
      this._layerScreen = new L;
      this._layerTransition = new L;
      this._container.addChild(this._layerScreen);
      this._container.addChild(this._layerTransition);
      this._isPaused = !1;
      this._screens = [
      ];
      this._screensOpen = [
      ];
      this._screensQueue = [
      ];
      this._transitionType = - 1;
      this._flagCloseAllScreensWhenBottomCloses = this._flagHasScreenshot = this._flagOpenScreenAfterTransition = this._flagCloseScreenAfterTransition = this._flagHasTransition = !1;
      this._camera = new i.WorkinCamera(e.ConstantsApp.STAGE_CENTER_X, e.ConstantsApp.STAGE_CENTER_Y)
    }
  };
  j['com.nick.fop.dragon_drop.ui.ScreenManager'] = g.ScreenManager;
  g.ScreenManager.__name__ = 'com,nick,fop,dragon_drop,ui,ScreenManager'.split(',');
  g.ScreenManager.__super__ = m.WMEventDispatcher;
  g.ScreenManager.prototype = x(m.WMEventDispatcher.prototype, {
    _transitionPlay: function () {
      this._transition.show();
      this._transition.start()
    },
    _removeTransition: function () {
      this._flagHasTransition && (this._layerTransition.removeChild(this._transition._getEntity()), this._transition._getDispatcher().removeEventListener(m.WMEventScreenOut.EVENT_SCREEN_OUTPUT, s(this, this._onEventTransitionOutput)), this._transition.dispose(), this._transition = null, this._flagHasTransition = !1)
    },
    _addTransition: function (a, b) {
      null == b && (b = !0);
      if (this._flagHasTransition) {
        if (!b) return;
        this._removeTransition()
      }
      this._transition = new g.transitions.TransitionBase(a);
      this._transition.hide();
      this._transition._getDispatcher().addEventListener(m.WMEventScreenOut.EVENT_SCREEN_OUTPUT, s(this, this._onEventTransitionOutput));
      this._layerTransition.addChild(this._transition._getEntity());
      this._flagHasTransition = !0
    },
    _updateTransition: function (a) {
      switch (this._transitionType) {
        case e.ConstantsScreen.TRANSITION_SCROLL:
          this._transitionScreenHeadedOut._getPos().x -= 3000 * a;
          this._transitionScreenHeadedIn._getPos().x -=
          3000 * a;
          0 >= this._transitionScreenHeadedIn._getPos().x && (this._transitionScreenHeadedIn._getPos().x = 0, this._flagHasTransition = !1, this._onTransitionCloseScreen(), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE));
          break;
        case e.ConstantsScreen.TRANSITION_SCROLL_UP:
          this._transitionScreenHeadedOut._getPos().y -= 2000 * a;
          this._transitionScreenHeadedIn._getPos().y -= 2000 * a;
          0 >= this._transitionScreenHeadedIn._getPos().y && (this._transitionScreenHeadedIn._getPos().y = 0, this._flagHasTransition = !1, this._onTransitionCloseScreen(), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE));
          break;
        case e.ConstantsScreen.TRANSITION_SCROLL_DOWN:
          this._transitionScreenHeadedOut._getPos().y += 2000 * a;
          this._transitionScreenHeadedIn._getPos().y += 2000 * a;
          0 <= this._transitionScreenHeadedIn._getPos().y && (this._transitionScreenHeadedIn._getPos().y = 0, this._flagHasTransition = !1, this._onTransitionCloseScreen(), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE));
          break;
        case e.ConstantsScreen.TRANSITION_FADE:
          this._transition.update(a),
          this._transition.flagDispose && this._removeTransition()
      }
    },
    _removeScreenDisplay: function (a) {
      this._layerScreen.removeChild(a)
    },
    _addScreenDisplay: function (a) {
      this._layerScreen.addChild(a)
    },
    _dispatchEventChange: function (a, b) {
      this.dispatchEvent(new m.WMEventInterfaceChange(a, b))
    },
    _onQueueConditionMet: function (a, b) {
      null == b && (b = '');
      for (var c = 0; c < this._screensQueue.length; ) this._screensQueue[c].validateCondition(a, b) && (this._generateScreen(this._screensQueue[c].screenData), this._screensQueue.splice(c, 1)),
      c++
    },
    dispose: function () {
      for (var a = 0; a < this._screensOpen.length; ) this._disposeScreen(this._screensOpen[a].id),
      a++;
      this._screens = this._screensQueue = null;
      this._removeTransition();
      this._container.removeChild(this._layerScreen);
      this._container.removeChild(this._layerTransition);
      this._layerTransition = this._layerScreen = null;
      m.WMEventDispatcher.prototype.dispose.call(this)
    },
    _getScreenData: function (a) {
      for (var b = this._screens.length - 1; 0 <= b; ) {
        if (this._screens[b].id == a) return this._screens[b];
        b--
      }
      f.WorkinCloud.instance.log('[ScreenManager](_getScreenData) ERROR: Screen >' +
      a + '< idoes not exist. getScreenData() returning NULL.');
      return null
    },
    _hasScreenData: function (a) {
      for (var b = this._screens.length - 1; 0 <= b; ) {
        if (this._screens[b].id == a) return !0;
        b--
      }
      return !1
    },
    _removeScreenshot: function () {
      this._flagHasScreenshot && (this._layerScreen.removeChild(this._screenshot._getEntity()), this._screenshot.dispose(), this._screenshot = null, this._flagHasScreenshot = !1)
    },
    _addScreenshot: function () {
      f.WorkinCloud.instance.log('[ScreenManager](_addScreenshot) ERROR: Screenshots not supported in HTML5 yet.')
    },
    _onTransitionCloseScreen: function () {
      this._flagCloseScreenAfterTransition && (this.closeScreen(this._screenIdToCloseAfterTransition, !1), this._flagCloseScreenAfterTransition = !1);
      this._flagOpenScreenAfterTransition && (this.openScreen(this._screenIdToOpenDuringTransition, !1), this._flagOpenScreenAfterTransition = !1)
    },
    _onEventTransitionOutput: function (a) {
      a.flowId == e.ConstantsScreen.OUTPUT_OPENED ? (f.WorkinCloud.instance.log('[ScreenManager] Transition Midway...'), this._onTransitionCloseScreen(), this._removeScreenshot(), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_TRANSITION_MIDWAY))  : a.flowId == e.ConstantsScreen.OUTPUT_CLOSED && (f.WorkinCloud.instance.log('[ScreenManager] Transition Complete.'), this._removeScreenshot(), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE))
    },
    _onEventScreenOutput: function (a) {
      a.flowId == e.ConstantsScreen.OUTPUT_OPENED ? this._dispatchEventChange(e.ConstantsScreen.CHANGE_OPEN_COMPLETE, a.screenId)  : a.flowId == e.ConstantsScreen.OUTPUT_CLOSED && (this._dispatchEventChange(e.ConstantsScreen.CHANGE_CLOSE_COMPLETE, a.screenId), this._onQueueConditionMet(e.ConstantsScreen.CONDITION_CLOSED_SPECIFIC, a.screenId), this._flagHasTransition && this._transitionType == e.ConstantsScreen.TRANSITION_STAGED && this._transitionPlay())
    },
    _disposeScreen: function (a) {
      for (var b = 0; b < this._screensOpen.length; ) {
        if (this._screensOpen[b].id == a) {
          this._screensOpen[b]._getDispatcher().removeEventListener(m.WMEventScreenOut.EVENT_SCREEN_OUTPUT, s(this, this._onEventScreenOutput));
          this._removeScreenDisplay(this._screensOpen[b]._getEntity());
          this._screensOpen[b].dispose();
          this._screensOpen.splice(b, 1);
          break
        }
        b++
      }
    },
    _generateScreen: function (a) {
      if (this.isScreenOpen(a.id)) this.getScreen(a.id).reset(),
      this._dispatchEventChange(e.ConstantsScreen.CHANGE_OPEN_BEGIN, a.id);
       else {
        var b = K.createInstance(a.screenClass, [
          a.id,
          a.assetClassName,
          a.data
        ]);
        b.renderPosition(this._camera);
        if (null == b) f.WorkinCloud.instance.log('[ScreenManager](_generateScreen) ERROR: Screen Class for >' + a.id + '< not found.');
         else {
          if (this._flagHasTransition) switch (this._transitionScreenHeadedIn = b, this._transitionType) {
            case e.ConstantsScreen.TRANSITION_SCROLL:
              b._getPos().x = e.ConstantsApp.STAGE_WIDTH;
              break;
            case e.ConstantsScreen.TRANSITION_SCROLL_UP:
              b._getPos().y = e.ConstantsApp.STAGE_HEIGHT;
              break;
            case e.ConstantsScreen.TRANSITION_SCROLL_DOWN:
              b._getPos().y = - e.ConstantsApp.STAGE_HEIGHT
          }
          this._screensOpen.push(b);
          b.renderPosition(this._camera);
          this._addScreenDisplay(b._getEntity());
          b._getDispatcher().addEventListener(m.WMEventScreenOut.EVENT_SCREEN_OUTPUT, s(this, this._onEventScreenOutput));
          b.open(!0);
          this._dispatchEventChange(e.ConstantsScreen.CHANGE_OPEN_BEGIN, a.id)
        }
      }
    },
    _addScreenToQueue: function (a, b, c) {
      null == c && (c = '');
      this.hasQueuedScreen(a.id) || this._screensQueue.push(new g.screens.data.ScreenQueueData(a, b, c))
    },
    removeAllQueuedScreens: function () {
      for (var a = this._screensQueue.length - 1; 0 <= a; ) this._screensQueue.splice(a, 1),
      a--
    },
    removeQueuedScreen: function (a) {
      for (var b = this._screensQueue.length - 1; 0 <= b; ) {
        if (this._screensQueue[b].screenData.id == a) {
          this._screensQueue.splice(b, 1);
          break
        }
        b--
      }
    },
    hasQueuedScreen: function (a) {
      for (var b = this._screensQueue.length - 1; 0 <= b; ) {
        if (this._screensQueue[b].screenData.id ==
        a) return !0;
        b--
      }
      return !1
    },
    isScreenOpen: function (a) {
      for (var b = this._screensOpen.length - 1; 0 <= b; ) {
        if (this._screensOpen[b].id == a) return !0;
        b--
      }
      return !1
    },
    getScreen: function (a) {
      null == a && (a = '');
      if (0 == this._screensOpen.length) return f.WorkinCloud.instance.log('[ScreenManager](getScreen) ERROR: no screens are open. Unable to getScreen()'),
      null;
      if ('' == a) return this._screensOpen[this._screensOpen.length - 1];
      for (var b = this._screensOpen.length - 1; 0 <= b; ) {
        if (this._screensOpen[b].id == a) return this._screensOpen[b];
        b--
      }
      f.WorkinCloud.instance.log('[ScreenManager](getScreen) ERROR: Screen >' +
      a + '< is not open or does not exist. getScreen() returning NULL.');
      return null
    },
    update: function (a) {
      if (!this._isPaused) {
        0.15 < a && (a = 0.15);
        this._flagHasTransition && this._updateTransition(a);
        for (this._loop = this._screensOpen.length - 1; 0 <= this._loop; ) this._screensOpen[this._loop].update(a),
        this._screensOpen[this._loop].renderPosition(this._camera),
        this._screensOpen[this._loop].flagDispose && (this._disposeScreen(this._screensOpen[this._loop].id), 0 == this._screensOpen.length && this._onQueueConditionMet(e.ConstantsScreen.CONDITION_CLOSED_ALL)),
        this._loop--
      }
    },
    _getHasTransition: function () {
      return this._flagHasTransition
    },
    changeScreenTo: function (a, b, c, k) {
      null == k && (k = '');
      null == c && (c = - 1);
      null == b && (b = !1);
      f.WorkinCloud.instance.log('[ScreenManager](changeTo) ' + a);
      this.removeAllQueuedScreens();
      if (this.isScreenOpen(a)) {
        f.WorkinCloud.instance.log('[ScreenManager](changeTo) Screen is already open.');
        for (b = this._screensOpen.length - 1; 0 <= b; ) this._screensOpen[b].id != a && this.closeScreen(this._screensOpen[b].id, !1, b),
        b--;
        this._dispatchEventChange(e.ConstantsScreen.CHANGE_OPEN_BEGIN, a);
        this._dispatchEventChange(e.ConstantsScreen.CHANGE_OPEN_COMPLETE, a)
      } else if (this._flagOpenScreenAfterTransition = this._flagCloseScreenAfterTransition = !1, 0 < this._screensOpen.length) {
        f.WorkinCloud.instance.log('[ScreenManager](changeFrom) ' + this._screensOpen[0].id);
        var d = e.ConstantsScreen.CONDITION_CLOSED_ALL;
        if ( - 1 < c) switch (this._transitionType = c, this._transitionType) {
          case e.ConstantsScreen.TRANSITION_SCREENSHOT:
            this._flagOpenScreenAfterTransition = !0;
            b = !1;
            this._addScreenshot();
            this._transitionPlay();
            break;
          case e.ConstantsScreen.TRANSITION_SCROLL:
            this._flagHasTransition = !0;
            this._flagOpenScreenAfterTransition = !1;
            this._flagCloseScreenAfterTransition = !0;
            b = !1;
            this._transitionScreenHeadedOut = this._screensOpen[0];
            d = e.ConstantsScreen.CONDITION_IMMEDIATE;
            break;
          case e.ConstantsScreen.TRANSITION_SCROLL_UP:
            this._flagHasTransition = !0;
            this._flagOpenScreenAfterTransition = !1;
            this._flagCloseScreenAfterTransition = !0;
            b = !1;
            this._transitionScreenHeadedOut = this._screensOpen[0];
            d = e.ConstantsScreen.CONDITION_IMMEDIATE;
            break;
          case e.ConstantsScreen.TRANSITION_SCROLL_DOWN:
            this._flagHasTransition = !0;
            this._flagOpenScreenAfterTransition = !1;
            this._flagCloseScreenAfterTransition = !0;
            b = !1;
            this._transitionScreenHeadedOut = this._screensOpen[0];
            d = e.ConstantsScreen.CONDITION_IMMEDIATE;
            break;
          case e.ConstantsScreen.TRANSITION_SCROLL:
            this._flagHasTransition = !0;
            this._flagOpenScreenAfterTransition = !1;
            this._flagCloseScreenAfterTransition = !0;
            b = !1;
            this._transitionScreenHeadedOut = this._screensOpen[0];
            d = e.ConstantsScreen.CONDITION_IMMEDIATE;
            break;
          case e.ConstantsScreen.TRANSITION_FADE:
            this._addTransition(k, this._flagHasTransition ? this._transition._getIsOutro() ? !0 : !1 : !1),
            this._flagCloseScreenAfterTransition = !0,
            b = !1,
            this._transitionPlay(),
            d = e.ConstantsScreen.CONDITION_TRANSITION_MIDWAY
        }
        if (0 < this._screensOpen.length && (this._flagCloseScreenAfterTransition ? this._screenIdToCloseAfterTransition = this._screensOpen[0].id : this.closeScreen(this._screensOpen[0].id, b, 0), 1 < this._screensOpen.length)) for (b = 1; b < this._screensOpen.length; ) this.closeScreen(this._screensOpen[b].id, !1, this._screensOpen.length),
        b++;
        this._flagOpenScreenAfterTransition ? (f.WorkinCloud.instance.log('[ScreenManager] Store Screen to open at transition midway: ' + a), this._screenIdToOpenDuringTransition = a)  : this.openScreen(a, !0, d)
      } else this.openScreen(a, !1)
    },
    _moveScreenToTop: function (a) {
      var b = this.getScreen(a);
      if (null == b) f.WorkinCloud.instance.log('[ScreenManager](_moveScreenToTop) ERROR: Screen >' + a + '< is not open or does not exist. Cancelling move.');
       else {
        b.isClosing() && b.open(!1);
        for (var c = this._screensOpen.length -
        1; 0 <= c && !(this._screensOpen[c].id == a); ) c--;
        this._screensOpen.splice(c, 1);
        b.reset();
        this._removeScreenDisplay(b._getEntity());
        this._addScreenDisplay(b._getEntity());
        this._screensOpen.push(b)
      }
    },
    openScreen: function (a, b, c, k) {
      null == k && (k = '');
      null == c && (c = 0);
      null == b && (b = !0);
      f.WorkinCloud.instance.log('[ScreenManager](openScreen) ' + a);
      if (this._hasScreenData(a)) if (this.isScreenOpen(a)) this._moveScreenToTop(a);
       else {
        if (c != e.ConstantsScreen.CONDITION_IMMEDIATE && b) {
          if (0 < this._screensOpen.length) {
            this._addScreenToQueue(this._getScreenData(a), c, k);
            return
          }
          if ((c == e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE || c == e.ConstantsScreen.CONDITION_TRANSITION_MIDWAY) && this._flagHasTransition) {
            this._addScreenToQueue(this._getScreenData(a), c, k);
            return
          }
        }
        this._generateScreen(this._getScreenData(a))
      } else f.WorkinCloud.instance.log('[ScreenManager](closeScreen) ERROR: Screen >' + a + '< does not exist. Cancelling open().')
    },
    closeScreen: function (a, b, c) {
      null == c && (c = - 1);
      null == b && (b = !0);
      null == a && (a = '');
      if (0 == this._screensOpen.length) this.removeQueuedScreen(a);
       else {
        if ('' == a) c = this._screensOpen[this._screensOpen.length - 1];
         else if (0 <= c && c < this._screensOpen.length) c = this._screensOpen[c];
         else if (c = this.getScreen(a), null == c) {
          this.removeQueuedScreen(a);
          return
        }
        c.close(b);
        this._dispatchEventChange(e.ConstantsScreen.CHANGE_CLOSE_BEGIN, a)
      }
    },
    handleInput: function (a) {
      for (var b = !0, c = this._screensOpen.length - 1; 0 <= c; ) this._screensOpen[c].handleInput(a) || (b = !1),
      c--;
      return b
    },
    addScreen: function (a, b, c, k, d) {
      null == k && (k = 0);
      null == c && (c = '');
      this._screens.push(new g.screens.data.ScreenData(a, b, c, k, d))
    },
    __class__: g.ScreenManager
  });
  o = {
  };
  o.Element = function (a) {
    this._entity = new L;
    this._display = new l.Sprite;
    this._entity.add(this._display);
    this._textureEntity = new L;
    this._entity.addChild(this._textureEntity);
    this._texture = new l.Sprite;
    this._textureEntity.add(this._texture);
    this._dispatcher = new m.WMEventDispatcher;
    this._pos = new i.WorkinPoint;
    this._velocity = new i.WorkinPoint;
    this._renderOffset = new i.WorkinPoint;
    this._renderOrigin = new i.WorkinPoint;
    this._render = new o.Renderable;
    this._layer = this._assetId = '';
    this._doDelete = !1;
    a.asset && (this._assetId = a.asset, this.setTexture(this._assetId));
    a.layer && (this._layer = a.layer);
    a.x && (this._pos.x = a.x);
    a.y && (this._pos.y = a.y);
    a.rot && (this._render.rotation = a.rot);
    a.origin && this.setOrigin(a.origin);
    this._addEventListeners()
  };
  j['com.workinman.display.Element'] = o.Element;
  o.Element.__name__ = [
    'com',
    'workinman',
    'display',
    'Element'
  ];
  o.Element.prototype = {
    _removeEventListeners: function () {
    },
    _addEventListeners: function () {
    },
    setOrigin: function (a) {
      this._renderOrigin.toPoint(a);
      this._texture.x.set__( - (this._renderOrigin.x * this._render.width));
      this._texture.y.set__( - (this._renderOrigin.y * this._render.height))
    },
    applyRenderable: function () {
      this._display.x.set__(this._render.x);
      this._display.y.set__(this._render.y);
      this._display.scaleX.set__(this._render.scaleX);
      this._display.scaleY.set__(this._render.scaleY);
      this._display.rotation.set__(this._render.rotation);
      this._display.alpha.set__(this._render.alpha);
      this._display.set_visible(this._render.visible)
    },
    renderPosition: function (a) {
      this._render.x = this._pos.x - a._getPos().x + a._getScreenCenterX() + this._renderOffset.x;
      this._render.y = this._pos.y - a._getPos().y + a._getScreenCenterY() + this._renderOffset.y;
      this.applyRenderable()
    },
    updatePositionFromVelocity: function (a) {
      this._pos.x += this._velocity.x * a;
      this._pos.y += this._velocity.y * a
    },
    update: function () {
    },
    setTexture: function (a) {
      !1 == f.WorkinCloud.instance.getAssets().hasAsset(a) ? f.WorkinCloud.instance.log('[Element](setTexture) No asset named ' + a + ' exists!')  : (this._textureEntity.remove(this._texture), this._texture.dispose(), this._texture = new l.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture(a)), this._render.width = this._texture.getNaturalWidth(), this._render.height = this._texture.getNaturalHeight(), this._texture.x.set__( - (this._renderOrigin.x * this._render.width)), this._texture.y.set__( - (this._renderOrigin.y * this._render.height)), this._textureEntity.add(this._texture))
    },
    _setLayer: function (a) {
      return this._layer = a
    },
    _getLayer: function () {
      return this._layer
    },
    _getDispatcher: function () {
      return this._dispatcher
    },
    _getEntity: function () {
      return this._entity
    },
    _getRenderable: function () {
      return this._render
    },
    _setDoDelete: function (a) {
      return this._doDelete = a
    },
    _getDoDelete: function () {
      return this._doDelete
    },
    _setPos: function (a) {
      this._pos.toPoint(a);
      return this._pos
    },
    _getPos: function () {
      return this._pos
    },
    dispose: function () {
      this._removeEventListeners();
      this._dispatcher.dispose();
      this._dispatcher = null;
      this._entity.dispose();
      this._velocity = this._pos = this._entity = null;
      this._texture.dispose();
      this._display = this._texture = null;
      this._textureEntity.dispose();
      this._renderOrigin = this._renderOffset = this._render = this._textureEntity = null
    },
    __class__: o.Element
  };
  g.buttons = {
  };
  g.buttons.ButtonBase = function (a, b, c, k, d, e, f, h) {
    null == h && (h = !0);
    null == f && (f = '');
    null == e && (e = '');
    null == d && (d = '');
    null == k && (k = '');
    this._DEBUG_SHOW_HITBOX = !1;
    null == c && (c = new i.WorkinPoint);
    o.Element.call(this, {
      x: a,
      y: b,
      asset: this._assetUp,
      origin: c
    });
    this._assetUp = '' == k ? this._getDefaultAssetUp()  : k;
    this._assetOver = '' == d ? this._getDefaultAssetOver()  : d;
    this._assetDown = '' == e ? this._getDefaultAssetDown()  : e;
    this._assetDisabled = '' == f ? this._getDefaultAssetDisabled()  : f;
    this._flagDragged = this._flagClickTransition = this._flagDown = !1;
    h ? this.enable()  : this.disable();
    this._buildHitBox()
  };
  j['com.nick.fop.dragon_drop.ui.buttons.ButtonBase'] = g.buttons.ButtonBase;
  g.buttons.ButtonBase.__name__ = 'com,nick,fop,dragon_drop,ui,buttons,ButtonBase'.split(',');
  g.buttons.ButtonBase.__super__ = o.Element;
  g.buttons.ButtonBase.prototype = x(o.Element.prototype, {
    _renderDisabled: function () {
      '' != this._assetDisabled && this.setTexture(this._assetDisabled)
    },
    _renderReturnUp: function () {
      !this._flagClickTransition && this._flagEnabled && (i.tween.WorkinTweener._getInstance().tween(this._render, 0.15, {
        scaleX: 1,
        scaleY: 1
      }).ease(i.tween.PennerManager.EASE_QUAD_OUT), this._renderUp())
    },
    _renderDown: function () {
      !this._flagClickTransition && this._flagEnabled && (i.tween.WorkinTweener._getInstance().tween(this._render, 0.15, {
        scaleX: 1.04,
        scaleY: 1.04
      }).ease(i.tween.PennerManager.EASE_QUAD_OUT), '' != this._assetDown && this.setTexture(this._assetDown))
    },
    _renderUp: function () {
      '' != this._assetUp && this.setTexture(this._assetUp)
    },
    update: function (a) {
      o.Element.prototype.update.call(this, a);
      this._flagDown && !1 == f.WorkinCloud.instance.getInput().getInput(e.ConstantsApp.INPUT_CLICK) && (this._upConnection.dispose(), this._renderReturnUp())
    },
    _onCancelDrag: function () {
      this._flagDragged = !1;
      this._dispatch(g.buttons.ButtonBase.CANCEL_DRAG)
    },
    _onUp: function () {
      this._flagDown && (this._upConnection.dispose(), this._upConnection = null, this._flagDown = !1, this._renderReturnUp(), this._click(), this._flagDragged && this._onCancelDrag(), this._dispatch(g.buttons.ButtonBase.UP))
    },
    _onDown: function () {
      this._flagDown = !0;
      this._renderDown();
      this._upConnection = this._hitBox.get_pointerUp().connect(s(this, this._onUpEvent));
      this._dispatch(g.buttons.ButtonBase.DOWN)
    },
    _click: function () {
      f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_ORIENTATION_ALERT) || (this._dispatch(g.buttons.ButtonBase.CLICK), '' != this._getClickFlow() && f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(this._getClickFlow())), '' != this._getClickEvent() && f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(this._getClickEvent())))
    },
    _dispatch: function (a) {
      this._GET_DO_DISPATCH() && this._dispatcher.dispatchEvent(new m.WMEvent(a))
    },
    _onUpEvent: function (a) {
      this._onUp(a.viewX, a.viewY)
    },
    _onDownEvent: function (a) {
      this._onDown(a.viewX, a.viewY)
    },
    _getClickFlow: function () {
      return ''
    },
    _getClickEvent: function () {
      return ''
    },
    _GET_DISABLE_FRAME: function () {
      return 1
    },
    _GET_CUSTOM_HIT_BOX: function () {
      return new H.Point(0, 0)
    },
    _GET_DO_DISPATCH: function () {
      return !0
    },
    _getDefaultAssetDisabled: function () {
      return ''
    },
    _getDefaultAssetDown: function () {
      return ''
    },
    _getDefaultAssetOver: function () {
      return ''
    },
    _getDefaultAssetUp: function () {
      return ''
    },
    dispose: function () {
      this.disable();
      this._downConnection.dispose();
      this._downConnection = null;
      this._flagDown && (this._upConnection.dispose(), this._upConnection = null);
      this._hitBox.dispose();
      o.Element.prototype.dispose.call(this)
    },
    _buildHitBox: function () {
      this._hitBox = this._DEBUG_SHOW_HITBOX ? new l.FillSprite(16711680, this._render.width | 0, this._render.height | 0)  : new l.ImageSprite(D.createTexture(this._render.width | 0, this._render.height | 0));
      var a = new L;
      a.add(this._hitBox);
      this._textureEntity.addChild(a);
      this._downConnection = this._hitBox.get_pointerDown().connect(s(this, this._onDownEvent))
    },
    disable: function () {
      this._flagEnabled = !1;
      this._renderDisabled()
    },
    enable: function () {
      this._flagEnabled = !0;
      this._renderUp()
    },
    __class__: g.buttons.ButtonBase
  });
  o.Display = function (a, b, c, k) {
    null == c && (c = '');
    o.Element.call(this, {
      x: a,
      y: b,
      asset: c,
      origin: k
    });
    this._addEventListeners()
  };
  j['com.workinman.display.Display'] = o.Display;
  o.Display.__name__ = [
    'com',
    'workinman',
    'display',
    'Display'
  ];
  o.Display.__super__ = o.Element;
  o.Display.prototype = x(o.Element.prototype, {
    dispose: function () {
      o.Element.prototype.dispose.call(this);
      this._removeEventListeners()
    },
    _updateValue: function () {
      return ''
    },
    _refresh: function () {
    },
    _onUpdateDisplay: function (a) {
      a._getData().valueID == this._updateValue() && this._refresh()
    },
    _removeEventListeners: function () {
      o.Element.prototype._removeEventListeners.call(this);
      f.WorkinCloud.instance.getDispatcher().removeEventListener(o.Display.EVENT_UPDATE_DISPLAY, s(this, this._onUpdateDisplay))
    },
    _addEventListeners: function () {
      o.Element.prototype._addEventListeners.call(this);
      f.WorkinCloud.instance.getDispatcher().addEventListener(o.Display.EVENT_UPDATE_DISPLAY, s(this, this._onUpdateDisplay))
    },
    __class__: o.Display
  });
  g.displays = {
  };
  g.displays.DisplayHealth = function (a, b, c, k, d) {
    null == k && (k = '');
    o.Display.call(this, a, b, k, d);
    this._healthType = c;
    this._percMaxTime = 1.5;
    this._percCurrTime = 0;
    this._container = new L;
    this._maskingBar = new l.ShapeSprite;
    switch (this._healthType) {
      case 0:
        this._healthBar = new l.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture('ui/gameplay_hud/hud_timmy_health_masking.png'));
        this._maxHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
        this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
        this._ratio = 72 * this._health / this._maxHealth;
        this._displayI = this._i = 0;
        break;
      case 1:
        this._healthBar = new l.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture('ui/gameplay_hud/hud_dragon_health_masking.png'));
        this._maxHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
        this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
        this._ratio = 76 * this._health / this._maxHealth;
        this._displayI = this._i = 0;
        break;
      case 2:
        this._healthBar = new l.ImageSprite(f.WorkinCloud.instance.getAssets().getTexture('ui/gameplay_hud/hud_baby_dragon_health_masking.png')),
        this._maxHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH),
        this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH),
        this._ratio = 70 * this._health / this._maxHealth,
        this._displayI = this._i = 0
    }
    this._insideEntity = (new L).add(this._healthBar);
    this._entity.addChild(this._insideEntity)
  };
  j['com.nick.fop.dragon_drop.ui.displays.DisplayHealth'] = g.displays.DisplayHealth;
  g.displays.DisplayHealth.__name__ = 'com,nick,fop,dragon_drop,ui,displays,DisplayHealth'.split(',');
  g.displays.DisplayHealth.__super__ = o.Display;
  g.displays.DisplayHealth.prototype = x(o.Display.prototype, {
    dispose: function () {
      o.Display.prototype.dispose.call(this);
      this._percentageText = this._container = this._insideEntity = this._redBar = this._maskingBar = this._healthBar = this._background = null
    },
    _updateValue: function () {
      switch (this._healthType) {
        case 0:
          return e.ConstantsApp.FLOAT_HEALTH;
        case 1:
          return e.ConstantsApp.FLOAT_DRAGON_HEALTH;
        case 2:
          return e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH;
        default:
          return ''
      }
    },
    update: function (a) {
      o.Display.prototype.update.call(this, a)
    },
    _refresh: function () {
    },
    __class__: g.displays.DisplayHealth
  }); g.displays.DisplayLevel = function (a, b, c, k) {
    null == c && (c = '');
    o.Display.call(this, a, b, c, k);
    this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('final_font'), 'Level: ' + f.WorkinCloud.instance.getFloat(this._updateValue()));
    this._render.scaleX = 0.65;
    this._render.scaleY = 0.65;
    this._display = this._text;
    this._text.x.set__(a);
    this._text.y.set__(b);
    this._entity.add(this._display)
  }; j['com.nick.fop.dragon_drop.ui.displays.DisplayLevel'] = g.displays.DisplayLevel; g.displays.DisplayLevel.__name__ = 'com,nick,fop,dragon_drop,ui,displays,DisplayLevel'.split(','); g.displays.DisplayLevel.__super__ = o.Display; g.displays.DisplayLevel.prototype = x(o.Display.prototype, {
    dispose: function () {
      o.Display.prototype.dispose.call(this);
      this._text = null
    },
    _updateValue: function () {
      return e.ConstantsApp.CURRENT_LEVEL
    },
    _refresh: function () {
    },
    update: function () {
      this._text.set_text('Level: ' + f.WorkinCloud.instance.getFloat(this._updateValue()))
    },
    __class__: g.displays.DisplayLevel
  }); g.displays.DisplayScore = function (a, b, c, k) {
    null == c && (c = '');
    o.Display.call(this, a, b, c, k);
    this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('final_font'), 'Score: ' + f.WorkinCloud.instance.getFloat(this._updateValue()));
    this._render.scaleX = 0.65;
    this._render.scaleY = 0.65;
    this._display = this._text;
    this._text.x.set__(a);
    this._text.y.set__(b);
    this._entity.add(this._display)
  }; j['com.nick.fop.dragon_drop.ui.displays.DisplayScore'] = g.displays.DisplayScore; g.displays.DisplayScore.__name__ = 'com,nick,fop,dragon_drop,ui,displays,DisplayScore'.split(','); g.displays.DisplayScore.__super__ = o.Display; g.displays.DisplayScore.prototype = x(o.Display.prototype, {
    dispose: function () {
      this._text = null;
      o.Display.prototype.dispose.call(this)
    },
    _updateValue: function () {
      return e.ConstantsApp.FLOAT_SCORE
    },
    _refresh: function () {
    },
    update: function () {
      this._text.set_text('Score: ' + f.WorkinCloud.instance.getFloat(this._updateValue()))
    },
    __class__: g.displays.DisplayScore
  }); g.displays.DisplayText = function (a, b, c, k, d, e) {
    null == d && (d = '');
    null == k && (k = 0.65);
    o.Display.call(this, a, b, d, e);
    this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('final_font'), c);
    this._render.scaleX = k;
    this._render.scaleY = k;
    this._display = this._text;
    this._text.x.set__(a);
    this._text.y.set__(b);
    this._entity.add(this._display)
  }; j['com.nick.fop.dragon_drop.ui.displays.DisplayText'] = g.displays.DisplayText; g.displays.DisplayText.__name__ = 'com,nick,fop,dragon_drop,ui,displays,DisplayText'.split(','); g.displays.DisplayText.__super__ = o.Display; g.displays.DisplayText.prototype = x(o.Display.prototype, {
    dispose: function () {
      this._text = null;
      o.Display.prototype.dispose.call(this)
    },
    setText: function (a) {
      this._text.set_text('' + a)
    },
    __class__: g.displays.DisplayText
  });
  g.screens = {
  }; g.screens.ScreenBase = function (a, b) {
    this._STATE_OPENED = 'opened';
    this._STATE_OUT = 'out';
    this._STATE_IN = 'in';
    this.id = a;
    o.Element.call(this, {
      asset: b
    });
    this._clickWall = new L;
    var c = new l.FillSprite(16711680, e.ConstantsApp.STAGE_WIDTH, e.ConstantsApp.STAGE_HEIGHT);
    c.alpha.set__(0);
    this._clickWall.add(c);
    this._entity.addChild(this._clickWall);
    this._entity.addChild(this._textureEntity);
    this._addEventListeners();
    this._elements = [
    ];
    this._buildButtons();
    this._flagStateAnimationComplete = this._flagStateCompleteTemp = this.flagDispose = !1;
    this._states = [
    ];
    this._generateStates();
    this._stateIndex = this._states.length + 2;
    this._setFirstState()
  }; j['com.nick.fop.dragon_drop.ui.screens.ScreenBase'] = g.screens.ScreenBase; g.screens.ScreenBase.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenBase'.split(','); g.screens.ScreenBase.__super__ = o.Element; g.screens.ScreenBase.prototype = x(o.Element.prototype, {
    _onStateComplete: function () {
      this._flagStateCompleteTemp = !1;
      '' != this._states[this._stateIndex].outFunc && f.WorkinCloud.instance.log('[ScreenBase](_onStateComplete) Out Func not supported in HTML5 yet');
      switch (this._states[this._stateIndex].actionOnComplete) {
        case g.screens.data.ScreenStateData.ACTION_OPENED:
          this._setOpenedState();
          this._dispatcher.dispatchEvent(new m.WMEventScreenOut(e.ConstantsScreen.OUTPUT_OPENED, this.id));
          break;
        case g.screens.data.ScreenStateData.ACTION_CLOSED:
          this.setFlagDispose();
          this._dispatcher.dispatchEvent(new m.WMEventScreenOut(e.ConstantsScreen.OUTPUT_CLOSED, this.id));
          break;
        case g.screens.data.ScreenStateData.ACTION_NEW_STATE:
          this._setState(this._states[this._stateIndex].actionData);
          break;
        case g.screens.data.ScreenStateData.ACTION_EVENT:
          this._dispatcher.dispatchEvent(new m.WMEvent(this._states[this._stateIndex].actionData));
          break;
        case g.screens.data.ScreenStateData.ACTION_FLOW:
          this._doFlowEvent(this._states[this._stateIndex].actionData)
      }
    },
    _findStateIndex: function (a) {
      for (var b = this._states.length - 1; 0 <= b; ) {
        if (this._states[b].id == a) return b;
        b--
      }
      return - 1
    },
    getState: function () {
      return this._states[this._stateIndex].id
    },
    _setState: function (a, b) {
      null == b && (b = !1);
      var c = this._findStateIndex(a);
      if (0 > c) f.WorkinCloud.instance.log('[ScreenBase](_setState) ERROR : State >' + a + '< not found.'),
      f.WorkinCloud.instance.log('[ScreenBase](_setState) cancelling setState().');
       else if (b || c != this._stateIndex) this._flagStateAnimationComplete = this._flagStateCompleteTemp = !1,
      this._stateIndex = c
    },
    _addState: function (a, b, c, k, d, e) {
      null == e && (e = '');
      null == d && (d = '');
      null == k && (k = '');
      null == c && (c = 0);
      this._states.push(new g.screens.data.ScreenStateData(a, b, c, k, d, e))
    },
    isClosing: function () {
      return this.getState() == this._STATE_OUT
    },
    close: function () {
      this.setFlagDispose();
      this._dispatcher.dispatchEvent(new m.WMEventScreenOut(e.ConstantsScreen.OUTPUT_CLOSED, this.id))
    },
    open: function () {
      this._setOpenedState();
      this._dispatcher.dispatchEvent(new m.WMEventScreenOut(e.ConstantsScreen.OUTPUT_OPENED, this.id))
    },
    dispose: function () {
      for (var a = 0, b = this._elements; a < b.length; ) {
        var c = b[a];
        ++a;
        c.dispose()
      }
      this._elements = null;
      this._removeEventListeners();
      this._states = null;
      o.Element.prototype.dispose.call(this)
    },
    reset: function () {
      this._setFirstState()
    },
    handleInput: function (a) {
      var b = !0;
      switch (a.input) {
        case e.ConstantsApp.INPUT_CLICK:
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
    renderPosition: function (a) {
      o.Element.prototype.renderPosition.call(this, a);
      for (var b = 0, c = this._elements; b < c.length; ) {
        var k = c[b];
        ++b;
        k.renderPosition(a)
      }
  },
  update: function (a) {
    o.Element.prototype.update.call(this, a);
    for (var b = 0, c = this._elements; b < c.length; ) {
      var k = c[b];
      ++b;
      k.update(a)
    }
    this._flagStateCompleteTemp && this._onStateComplete()
},
_doFlowEvent: function (a) {
  f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(a))
},
_addElement: function (a) {
this._elements.push(a);
this._entity.addChild(a._getEntity());
return a
},
_buildButtons: function () {
},
_onInput: function () {
return !0
},
_onInputMove: function () {
return !0
},
_onInputUp: function () {
return !0
},
_onInputDown: function () {
return !0
},
_generateStates: function () {
this._addState(this._STATE_IN, 'in', g.screens.data.ScreenStateData.ACTION_OPENED);
this._addState(this._STATE_OUT, 'out', g.screens.data.ScreenStateData.ACTION_CLOSED);
this._addState(this._STATE_OPENED, 'open')
},
_setOpenedState: function () {
this._setState(this._STATE_OPENED)
},
_setFirstState: function () {
this._setState(this._STATE_IN)
},
setFlagDispose: function () {
this.flagDispose = !0
},
__class__: g.screens.ScreenBase
});
g.screens.ScreenAttackMenu = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._pos.y = - 100;
this._flagFireEnabled = f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_FIRE_ENABLED);
this._flagHealEnabled = f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_HEAL_ENABLED);
this._flagMezEnabled = f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_MEZ_ENABLED);
this._flagWingsEnabled = f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_WINGS_ENABLED);
this._addElement(new o.Element({
asset: 'ui/attack_menu/timmy_attack_menu_icon',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 + 100,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._flagFireEnabled ? this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 115, 345, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_fire_active', 'ui/attack_menu/active/button_attack_fire_active_over', 'ui/attack_menu/active/button_attack_fire_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventFireClick))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_FIRE_ON_COOLDOWN) ? (this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 115, 345, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/cooldown/button_attack_fire_cooldown', 'ui/attack_menu/cooldown/button_attack_fire_cooldown', 'ui/attack_menu/cooldown/button_attack_fire_cooldown', 'ui/attack_menu/cooldown/button_attack_fire_cooldown', !1)), this._cooldownFire = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_FIRE_COOLDOWN), w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 + 90, 320, '' + this._cooldownFire, 0.9)), g.displays.DisplayText))  : this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 115, 345, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/inactive/button_attack_fire_inactive', 'ui/attack_menu/inactive/button_attack_fire_inactive', 'ui/attack_menu/inactive/button_attack_fire_inactive', 'ui/attack_menu/inactive/button_attack_fire_inactive', !1));
this._flagHealEnabled ? this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 110, 455, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_heal_active', 'ui/attack_menu/active/button_attack_heal_active_over', 'ui/attack_menu/active/button_attack_heal_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventHealClick))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_HEAL_ON_COOLDOWN) ? (this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 110, 455, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/cooldown/button_attack_heal_cooldown', 'ui/attack_menu/cooldown/button_attack_heal_cooldown', 'ui/attack_menu/cooldown/button_attack_heal_cooldown', 'ui/attack_menu/cooldown/button_attack_heal_cooldown', !1)), this._cooldownHeal = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_HEAL_COOLDOWN), w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 + 88, 425, '' + this._cooldownHeal, 0.9)), g.displays.DisplayText))  : this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 110, 455, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/inactive/button_attack_heal_inactive', 'ui/attack_menu/inactive/button_attack_heal_inactive', 'ui/attack_menu/inactive/button_attack_heal_inactive', 'ui/attack_menu/inactive/button_attack_heal_inactive', !1));
this._flagMezEnabled ? this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 100, 450, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_mez_active', 'ui/attack_menu/active/button_attack_mez_active_over', 'ui/attack_menu/active/button_attack_mez_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventMezClick))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN) ? (this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 100, 450, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/cooldown/button_attack_mez_cooldown', 'ui/attack_menu/cooldown/button_attack_mez_cooldown', 'ui/attack_menu/cooldown/button_attack_mez_cooldown', 'ui/attack_menu/cooldown/button_attack_mez_cooldown', !1)), this._cooldownMez = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_MEZ_COOLDOWN), w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 - 130, 421, '' + this._cooldownMez, 0.9)), g.displays.DisplayText))  : this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 100, 450, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/inactive/button_attack_mez_inactive', 'ui/attack_menu/inactive/button_attack_mez_inactive', 'ui/attack_menu/inactive/button_attack_mez_inactive', 'ui/attack_menu/inactive/button_attack_mez_inactive', !1));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2, 515, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_shield_active', 'ui/attack_menu/active/button_attack_shield_active_over', 'ui/attack_menu/active/button_attack_shield_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventShieldClick));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 100, 350, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_weapon_active', 'ui/attack_menu/active/button_attack_weapon_active_over', 'ui/attack_menu/active/button_attack_weapon_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventWeaponClick));
this._flagWingsEnabled ? this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2, 275, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/active/button_attack_wings_active', 'ui/attack_menu/active/button_attack_wings_active_over', 'ui/attack_menu/active/button_attack_wings_active_over'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventWingsClick))  : f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_WINGS_ON_COOLDOWN) ? (this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2, 275, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/cooldown/button_attack_wings_cooldown', 'ui/attack_menu/cooldown/button_attack_wings_cooldown', 'ui/attack_menu/cooldown/button_attack_wings_cooldown', 'ui/attack_menu/cooldown/button_attack_wings_cooldown', !1)), this._cooldownWings = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_WINGS_COOLDOWN), w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 - 20, 238, '' + this._cooldownWings, 0.9)), g.displays.DisplayText))  : this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2, 275, new i.WorkinPoint(0.5, 0.5), 'ui/attack_menu/inactive/button_attack_wings_inactive', 'ui/attack_menu/inactive/button_attack_wings_inactive', 'ui/attack_menu/inactive/button_attack_wings_inactive', 'ui/attack_menu/inactive/button_attack_wings_inactive', !1))
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenAttackMenu'] = g.screens.ScreenAttackMenu;
g.screens.ScreenAttackMenu.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenAttackMenu'.split(',');
g.screens.ScreenAttackMenu.__super__ = g.screens.ScreenBase;
g.screens.ScreenAttackMenu.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
g.screens.ScreenBase.prototype.dispose.call(this)
},
_onEventWeaponClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 6);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
_onEventShieldClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 5);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
_onEventWingsClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 4);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_WINGS_COOLDOWN, 2);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
_onEventMezClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 3);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_MEZ_COOLDOWN, 5);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
_onEventHealClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 2);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_HEAL_COOLDOWN, 4);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
_onEventFireClick: function () {
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, 1);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_FIRE_COOLDOWN, 4);
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE)
},
__class__: g.screens.ScreenAttackMenu
});
g.screens.ScreenGameOver = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._addElement(new o.Element({
asset: 'ui/game_over/game_over_screen_container',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2,
origin: new i.WorkinPoint(0.5, 0.5)
}));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X -
160, 180, 'Game Over', 1)), g.displays.DisplayText);
this._previousLevel = f.WorkinCloud.instance.getInt(e.ConstantsApp.CURRENT_LEVEL);
this._text = 'You made it to level: ' + this._previousLevel;
this._score = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_SCORE);
this._scoreText = 'Score: ' + this._score;
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 175, 280, this._text, 0.5)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(400, 330, this._scoreText, 0.5)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 120, 390, '(Tap Anywhere to Play Again!)', 0.3)), g.displays.DisplayText)
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenGameOver'] = g.screens.ScreenGameOver;
g.screens.ScreenGameOver.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenGameOver'.split(',');
g.screens.ScreenGameOver.__super__ = g.screens.ScreenBase;
g.screens.ScreenGameOver.prototype = x(g.screens.ScreenBase.prototype, {
update: function (a) {
g.screens.ScreenBase.prototype.update.call(this, a)
},
_onInputDown: function () {
f.WorkinCloud.instance.log('[Splash] State: ' + this.getState());
if (this.getState() != this._STATE_OPENED) return !1;
this._doFlowEvent(e.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN);
return !1
},
__class__: g.screens.ScreenGameOver
});
g.screens.ScreenGameplayHelp = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._addElement(new o.Element({
asset: 'help_screen_container',
x: e.ConstantsApp.STAGE_WIDTH / 2 + 5,
y: e.ConstantsApp.STAGE_HEIGHT / 2,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._addElement(new g.buttons.ButtonBase(60, 507, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventQuitYesClick));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 215, 185, 'How to Play', 1)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 245, 285, 'Use your finger to select an action', 0.5)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 245, 320, 'Level up to unlock new abilities!', 0.5)), g.displays.DisplayText)
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenGameplayHelp'] = g.screens.ScreenGameplayHelp;
g.screens.ScreenGameplayHelp.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenGameplayHelp'.split(',');
g.screens.ScreenGameplayHelp.__super__ = g.screens.ScreenBase;
g.screens.ScreenGameplayHelp.prototype = x(g.screens.ScreenBase.prototype, {
_removeEventListeners: function () {
g.screens.ScreenBase.prototype._removeEventListeners.call(this)
},
_addEventListeners: function () {
g.screens.ScreenBase.prototype._addEventListeners.call(this)
},
_onEventQuitYesClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP_CLOSE)
},
__class__: g.screens.ScreenGameplayHelp
});
g.screens.ScreenGameplayHUD = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._addElement(new o.Element({
asset: 'ui/gameplay_hud/hud_container',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: 70,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._addElement(new g.buttons.ButtonBase(50, 515, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/pause_button', 'ui/gameplay_hud/pause_button', 'ui/gameplay_hud/pause_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventPauseClick));
this._percMaxTime = 1.5;
this._percCurrTime = 0;
this._playerHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
this._maxPlayerHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
this._playerRatio = Math.floor(100 * (this._playerHealth / this._maxPlayerHealth));
this._displayPlayerHealth = w.__cast(this._addElement(new g.displays.DisplayHealth(e.ConstantsApp.STAGE_WIDTH / 2 - 130, 40, 0)), g.displays.DisplayHealth);
this._percentageTextPlayer = w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 - 113, 65, '' + this._playerRatio, 0.285)), g.displays.DisplayText);
this._displayI = 100;
this._dragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
this._maxDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
this._dragonRatio = Math.floor(100 * (this._dragonHealth / this._maxDragonHealth));
this._displayDragonHealth = w.__cast(this._addElement(new g.displays.DisplayHealth(e.ConstantsApp.STAGE_WIDTH / 2 + 75, 40, 1)), g.displays.DisplayHealth);
this._percentageTextDragon = w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 + 99, 70, '100', 0.3)), g.displays.DisplayText);
this._displayDragonI = 100;
this._score = w.__cast(this._addElement(new g.displays.DisplayScore(10, 50)), g.displays.DisplayScore);
this._level = w.__cast(this._addElement(new g.displays.DisplayLevel(e.ConstantsApp.STAGE_WIDTH - 170, 50)), g.displays.DisplayLevel);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 - 30, 46, 'VS', 0.8)), g.displays.DisplayText);
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) ? (this._babyDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH), this._maxBabyDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH), this._babyDragonRatio = Math.floor(100 * (this._babyDragonHealth / this._maxBabyDragonHealth)), this._displayBabyDragonI = 100, this._displayBabyDragonHealth = w.__cast(this._addElement(new g.displays.DisplayHealth(e.ConstantsApp.STAGE_WIDTH / 2 + 175, 40, 2)), g.displays.DisplayHealth), this._percentageTextBabyDragon = w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 + 185, 70, '100', 0.285)), g.displays.DisplayText), this._flagBabyDragonSpawned = !0)  : this._flagBabyDragonSpawned = !1
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenGameplayHUD'] = g.screens.ScreenGameplayHUD;
g.screens.ScreenGameplayHUD.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenGameplayHUD'.split(',');
g.screens.ScreenGameplayHUD.__super__ = g.screens.ScreenBase;
g.screens.ScreenGameplayHUD.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
g.screens.ScreenBase.prototype.dispose.call(this);
this._level = this._score = this._percentageTextBabyDragon = this._percentageTextDragon = this._displayBabyDragonHealth = this._percentageTextPlayer = this._displayDragonHealth = this._displayPlayerHealth = null
},
_onEventPauseClick: function () {
this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_MENU)
},
update: function (a) {
g.screens.ScreenBase.prototype.update.call(this, a);
this._playerHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
if (this._playerHealth != this._maxPlayerHealth && this._playerHealth <= this._maxPlayerHealth) {
this._percCurrTime += a;
this._percCurrTime >= this._percMaxTime && (this._percCurrTime = this._percMaxTime);
this._playerRatio = Math.ceil(100 * (this._playerHealth / f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_MAX_HEALTH)));
this._playerDamage = 100 - this._playerRatio;
var b = this._percCurrTime / this._percMaxTime;
this._displayI = Math.ceil(this._displayI - this._playerDamage * b);
0 > this._displayI && (this._displayI = 0);
0 == this._displayI && 0 < this._playerHealth && (this._displayI = 1);
this._percentageTextPlayer.setText('' + this._displayI);
this._displayI <= this._playerRatio && (this._maxPlayerHealth = this._playerHealth, this._percCurrTime = 0)
}
this._playerHealth != this._maxPlayerHealth && this._playerHealth > this._maxPlayerHealth && (this._percCurrTime +=
a, this._percCurrTime >= this._percMaxTime && (this._percCurrTime = this._percMaxTime), this._playerRatio = Math.floor(100 * (this._playerHealth / f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_MAX_HEALTH))), b = this._percCurrTime / this._percMaxTime, this._displayI = Math.ceil(this._displayI + this._playerRatio * b), 100 < this._displayI && (this._displayI = 100), this._percentageTextPlayer.setText('' + this._displayI), this._displayI >= this._playerRatio && (this._maxPlayerHealth = this._playerHealth, this._percCurrTime = 0));
this._dragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
this._dragonHealth != this._maxDragonHealth && (this._percCurrTime += a, this._percCurrTime >= this._percMaxTime && (this._percCurrTime = this._percMaxTime), this._dragonRatio = Math.ceil(100 * (this._dragonHealth / f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_MAX_HEALTH))), this._dragonDamage = 100 - this._dragonRatio, b = this._percCurrTime / this._percMaxTime, this._displayDragonI = Math.ceil(this._displayDragonI - this._dragonDamage * b), 0 > this._displayDragonI && (this._displayDragonI = 0), 0 == this._displayDragonI && 0 < this._dragonHealth && (this._displayDragonI = 1), this._percentageTextDragon.setText('' + this._displayDragonI), this._displayDragonI <= this._dragonRatio && (this._maxDragonHealth = this._dragonHealth, this._percCurrTime = 0));
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) && !1 == this._flagBabyDragonSpawned && (this._babyDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH), this._maxBabyDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH), this._babyDragonRatio = Math.floor(100 * (this._babyDragonHealth / this._maxBabyDragonHealth)), this._displayBabyDragonI = 100, this._displayBabyDragonHealth = w.__cast(this._addElement(new g.displays.DisplayHealth(e.ConstantsApp.STAGE_WIDTH / 2 + 175, 40, 2)), g.displays.DisplayHealth), this._percentageTextBabyDragon = w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 + 185, 70, '100', 0.285)), g.displays.DisplayText), this._flagBabyDragonSpawned = !0);
0 >= f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) && !0 == this._flagBabyDragonSpawned && (this._entity.removeChild(this._percentageTextBabyDragon._getEntity()), this._entity.removeChild(this._displayBabyDragonHealth._getEntity()), this._flagBabyDragonSpawned = !1);
this._flagBabyDragonSpawned && (this._babyDragonHealth = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH), this._babyDragonHealth != this._maxBabyDragonHealth && (this._percCurrTime += a, this._percCurrTime >= this._percMaxTime && (this._percCurrTime = this._percMaxTime), this._babyDragonRatio = Math.ceil(100 * (this._babyDragonHealth / f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_MAX_HEALTH))), this._babyDragonDamage = 100 - this._babyDragonRatio, b = this._percCurrTime / this._percMaxTime, this._displayBabyDragonI = Math.ceil(this._displayBabyDragonI - this._babyDragonDamage * b), 0 > this._displayBabyDragonI && (this._displayBabyDragonI = 0), 0 == this._displayBabyDragonI && 0 < this._babyDragonHealth && (this._displayBabyDragonI = 1), this._percentageTextBabyDragon.setText('' + this._displayBabyDragonI), this._displayBabyDragonI <=
this._babyDragonRatio && (this._maxBabyDragonHealth = this._babyDragonHealth, this._percCurrTime = 0)))
},
__class__: g.screens.ScreenGameplayHUD
});
g.screens.ScreenGameplayMenu = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._soundIsMuted = f.WorkinCloud.instance._getSound().getMute();
this._addElement(new o.Element({
asset: 'ui/gameplay_hud/pause_menu',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 180, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventResumeClick));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 50, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/help_button', 'ui/gameplay_hud/help_button', 'ui/gameplay_hud/help_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventHelpClick));
this._soundIsMuted ? (this._buttonSoundOff = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 70, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/sound_off_button', 'ui/gameplay_hud/sound_off_button', 'ui/gameplay_hud/sound_off_button'), this._addElement(this._buttonSoundOff)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)))  : (this._buttonSoundOn = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 70, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/sound_on_button', 'ui/gameplay_hud/sound_on_button', 'ui/gameplay_hud/sound_on_button'), this._addElement(this._buttonSoundOn)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 200, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/quit_button', 'ui/gameplay_hud/quit_button', 'ui/gameplay_hud/quit_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventQuitClick));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X -
90, 180, 'Paused', 1)), g.displays.DisplayText)
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenGameplayMenu'] = g.screens.ScreenGameplayMenu;
g.screens.ScreenGameplayMenu.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenGameplayMenu'.split(',');
g.screens.ScreenGameplayMenu.__super__ = g.screens.ScreenBase;
g.screens.ScreenGameplayMenu.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
this._buttonQuit = this._buttonResume = this._buttonSoundOff = this._buttonSoundOn = this._buttonHelp = null;
g.screens.ScreenBase.prototype.dispose.call(this)
},
_removeEventListeners: function () {
g.screens.ScreenBase.prototype._removeEventListeners.call(this)
},
_addEventListeners: function () {
g.screens.ScreenBase.prototype._addEventListeners.call(this)
},
_onEventQuitClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT)
},
_onEventResumeClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE)
},
_onEventSoundToggleClick: function () {
!1 == this._soundIsMuted ? (this._soundIsMuted = !0, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted), this._buttonSoundOff = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 70, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/sound_off_button', 'ui/gameplay_hud/sound_off_button', 'ui/gameplay_hud/sound_off_button'), this._addElement(this._buttonSoundOff)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._buttonSoundOn._getDispatcher().removeEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._entity.removeChild(this._buttonSoundOn._getEntity()))  : (this._soundIsMuted = !1, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted), this._buttonSoundOn = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 70, 320, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/sound_on_button', 'ui/gameplay_hud/sound_on_button', 'ui/gameplay_hud/sound_on_button'), this._addElement(this._buttonSoundOn)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._buttonSoundOff._getDispatcher().removeEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._entity.removeChild(this._buttonSoundOff._getEntity()))
},
_onEventHelpClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP)
},
__class__: g.screens.ScreenGameplayMenu
});
g.screens.ScreenGeneric = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._flagHasSpaceAction = !1
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenGeneric'] = g.screens.ScreenGeneric;
g.screens.ScreenGeneric.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenGeneric'.split(',');
g.screens.ScreenGeneric.__super__ = g.screens.ScreenBase;
g.screens.ScreenGeneric.prototype = x(g.screens.ScreenBase.prototype, {
_onInputMove: function () {
return !1
},
_onInputUp: function () {
return !1
},
_onInputDown: function () {
return !1
},
__class__: g.screens.ScreenGeneric
});
g.screens.ScreenLevelWin = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._addElement(new o.Element({
asset: 'ui/win_level/level_win_screen',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._addElement(new g.buttons.ButtonBase(60, 507, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button', 'ui/gameplay_hud/play_button'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventPauseClick));
this._previousLevel = f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) | 0;
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 120, 330, 'You have gained the', 0.4)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 60, 355, 'ability:', 0.4)), g.displays.DisplayText);
switch (this._previousLevel) {
case 1:
this._text = 'heal';
this._addElement(new o.Element({
asset: 'ui/win_level/win_heal',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 - 30,
origin: new i.WorkinPoint(0.5, 0.5)
}));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X -
40, 380, this._text, 0.5)), g.displays.DisplayText);
break;
case 2:
this._text = 'fire breath';
this._addElement(new o.Element({
asset: 'ui/win_level/win_fire',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 - 45,
origin: new i.WorkinPoint(0.5, 0.5)
}));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 85, 380, this._text, 0.5)), g.displays.DisplayText);
break;
case 3:
this._text = 'wing attack';
this._addElement(new o.Element({
asset: 'ui/win_level/win_wings',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 - 20,
origin: new i.WorkinPoint(0.5, 0.5)
}));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 90, 380, this._text, 0.5)), g.displays.DisplayText);
break;
case 4:
this._text = 'hypnotize';
this._addElement(new o.Element({
asset: 'ui/win_level/win_daze',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 - 35,
origin: new i.WorkinPoint(0.5, 0.5)
}));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 85, 380, this._text, 0.5)), g.displays.DisplayText);
break;
default:
this._text = 'all abilities!',
this._addElement(new o.Element({
asset: 'ui/win_level/win_daze',
x: e.ConstantsApp.STAGE_WIDTH / 2,
y: e.ConstantsApp.STAGE_HEIGHT / 2 - 45,
origin: new i.WorkinPoint(0.5, 0.5)
})),
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 85, 380, this._text, 0.5)), g.displays.DisplayText)
}
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenLevelWin'] = g.screens.ScreenLevelWin;
g.screens.ScreenLevelWin.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenLevelWin'.split(',');
g.screens.ScreenLevelWin.__super__ = g.screens.ScreenBase;
g.screens.ScreenLevelWin.prototype = x(g.screens.ScreenBase.prototype, {
_onEventPauseClick: function () {
this._doFlowEvent(e.ConstantsScreen.FLOW_END_LEVEL_NEXT)
},
update: function (a) {
g.screens.ScreenBase.prototype.update.call(this, a)
},
__class__: g.screens.ScreenLevelWin
});
g.screens.ScreenLoading = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._pos.y = - 100;
this._timerSpin = 0.25;
this._loadSpinner = this._addElement(new o.Element({
x: e.ConstantsApp.STAGE_CENTER_X,
y: e.ConstantsApp.STAGE_CENTER_Y + 175,
origin: new i.WorkinPoint(0.5, 0.5),
asset: 'loading_spinner'
}))
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenLoading'] = g.screens.ScreenLoading;
g.screens.ScreenLoading.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenLoading'.split(',');
g.screens.ScreenLoading.__super__ = g.screens.ScreenBase;
g.screens.ScreenLoading.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
g.screens.ScreenBase.prototype.dispose.call(this);
this._loadSpinner = null
},
update: function (a) {
g.screens.ScreenBase.prototype.update.call(this, a);
this._timerSpin -= a;
0 >= this._timerSpin && (this._timerSpin = 0.1, this._loadSpinner._getRenderable().rotation += 45)
},
__class__: g.screens.ScreenLoading
});
g.screens.ScreenQuitConfirm = function (a, b, c) {
null == b && (b = '');
g.screens.ScreenBase.call(this, a, b, c);
this._addElement(new o.Element({
asset: 'ui/gameplay_hud/quit_confirm_container',
x: e.ConstantsApp.STAGE_WIDTH / 2 - 50,
y: e.ConstantsApp.STAGE_HEIGHT / 2 + 75,
origin: new i.WorkinPoint(0.5, 0.5)
}));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 - 10, 350, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/quit_confirm_yes', 'ui/gameplay_hud/quit_confirm_yes', 'ui/gameplay_hud/quit_confirm_yes'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventQuitYesClick));
this._addElement(new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH / 2 + 135, 350, new i.WorkinPoint(0.5, 0.5), 'ui/gameplay_hud/quit_confirm_no', 'ui/gameplay_hud/quit_confirm_no', 'ui/gameplay_hud/quit_confirm_no'))._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventQuitNoClick));
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 218, 137, 'Are You Sure You', 1)), g.displays.DisplayText);
w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_CENTER_X - 165, 210, 'Want To Quit?', 1)), g.displays.DisplayText)
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenQuitConfirm'] = g.screens.ScreenQuitConfirm;
g.screens.ScreenQuitConfirm.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenQuitConfirm'.split(',');
g.screens.ScreenQuitConfirm.__super__ = g.screens.ScreenBase;
g.screens.ScreenQuitConfirm.prototype = x(g.screens.ScreenBase.prototype, {
_removeEventListeners: function () {
g.screens.ScreenBase.prototype._removeEventListeners.call(this)
},
_addEventListeners: function () {
g.screens.ScreenBase.prototype._addEventListeners.call(this)
},
_onEventQuitNoClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO)
},
_onEventQuitYesClick: function () {
this.getState() == this._STATE_OPENED && this._doFlowEvent(e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES)
},
__class__: g.screens.ScreenQuitConfirm
});
g.screens.ScreenScreenshot = function () {
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenScreenshot'] = g.screens.ScreenScreenshot;
g.screens.ScreenScreenshot.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenScreenshot'.split(',');
g.screens.ScreenScreenshot.__super__ = g.screens.ScreenBase;
g.screens.ScreenScreenshot.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
g.screens.ScreenBase.prototype.dispose.call(this)
},
__class__: g.screens.ScreenScreenshot
});
g.screens.ScreenSplash = function (a, b, c) {
null == b && (b = '');
this._BLINK_TIME = 0.9;
g.screens.ScreenBase.call(this, a, b, c);
this._soundIsMuted = f.WorkinCloud.instance._getSound().getMute();
this._text = w.__cast(this._addElement(new g.displays.DisplayText(e.ConstantsApp.STAGE_WIDTH / 2 - 310, 400, 'TAP ANYWHERE TO PLAY', 1)), g.displays.DisplayText);
this._blinkTimer = this._BLINK_TIME;
this._soundIsMuted ? (this._buttonSoundOff = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH - 75, 500, new i.WorkinPoint(0.5, 0.5), 'ui/splash/splash_sound_off_toggle', 'ui/splash/splash_sound_off_toggle', 'ui/splash/splash_sound_off_toggle'), this._addElement(this._buttonSoundOff)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)))  : (this._buttonSoundOn = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH - 75, 500, new i.WorkinPoint(0.5, 0.5), 'ui/splash/splash_sound_on_toggle', 'ui/splash/splash_sound_on_toggle', 'ui/splash/splash_sound_on_toggle'), this._addElement(this._buttonSoundOn)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)))
};
j['com.nick.fop.dragon_drop.ui.screens.ScreenSplash'] = g.screens.ScreenSplash;
g.screens.ScreenSplash.__name__ = 'com,nick,fop,dragon_drop,ui,screens,ScreenSplash'.split(',');
g.screens.ScreenSplash.__super__ = g.screens.ScreenBase;
g.screens.ScreenSplash.prototype = x(g.screens.ScreenBase.prototype, {
dispose: function () {
null != this._buttonSoundOn && (this._buttonSoundOn = null);
null != this._buttonSoundOff && (this._buttonSoundOff = null);
this._clickToPlayText = this._clickToPlayImage = this._text = null;
g.screens.ScreenBase.prototype.dispose.call(this)
},
_onInputDown: function (a, b) {
if (!(832 < a && 945 > a && 440 < b && 550 > b)) {
f.WorkinCloud.instance.log('[Splash] State: ' + this.getState());
if (this.getState() != this._STATE_OPENED) return !1;
this._doFlowEvent(e.ConstantsScreen.FLOW_SPLASH_PLAY)
}
return !1
},
_onEventSoundToggleClick: function () {
!1 == this._soundIsMuted ? (this._soundIsMuted = !0, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted), this._buttonSoundOff = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH -
75, 500, new i.WorkinPoint(0.5, 0.5), 'ui/splash/splash_sound_off_toggle', 'ui/splash/splash_sound_off_toggle', 'ui/splash/splash_sound_off_toggle'), this._addElement(this._buttonSoundOff)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._buttonSoundOn._getDispatcher().removeEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._entity.removeChild(this._buttonSoundOn._getEntity()))  : (this._soundIsMuted = !1, f.WorkinCloud.instance._getSound().setMute(this._soundIsMuted), this._buttonSoundOn = new g.buttons.ButtonBase(e.ConstantsApp.STAGE_WIDTH - 75, 500, new i.WorkinPoint(0.5, 0.5), 'ui/splash/splash_sound_on_toggle', 'ui/splash/splash_sound_on_toggle', 'ui/splash/splash_sound_on_toggle'), this._addElement(this._buttonSoundOn)._getDispatcher().addEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._buttonSoundOff._getDispatcher().removeEventListener(g.buttons.ButtonBase.CLICK, s(this, this._onEventSoundToggleClick)), this._entity.removeChild(this._buttonSoundOff._getEntity()))
},
update: function (a) {
g.screens.ScreenBase.prototype.update.call(this, a)
},
__class__: g.screens.ScreenSplash
});
g.screens.data = {
};
g.screens.data.ChangeActionData = function () {
};
j['com.nick.fop.dragon_drop.ui.screens.data.ChangeActionData'] = g.screens.data.ChangeActionData;
g.screens.data.ChangeActionData.__name__ = 'com,nick,fop,dragon_drop,ui,screens,data,ChangeActionData'.split(',');
g.screens.data.ChangeActionData.prototype = {
_getAction: function () {
return this._action
},
_getChangeEvent: function () {
return this._changeEvent
},
_getScreenId: function () {
return this._screenId
},
__class__: g.screens.data.ChangeActionData
};
g.screens.data.ScreenData = function (a, b, c, k, d) {
null == k && (k = 0);
null == c && (c = '');
this.id = a;
this.screenClass = b;
this.assetClassName = c;
this.layer = k;
this.data = null == d ? new I : d
};
j['com.nick.fop.dragon_drop.ui.screens.data.ScreenData'] = g.screens.data.ScreenData;
g.screens.data.ScreenData.__name__ = 'com,nick,fop,dragon_drop,ui,screens,data,ScreenData'.split(',');
g.screens.data.ScreenData.prototype = {
__class__: g.screens.data.ScreenData
};
g.screens.data.ScreenQueueData = function (a, b, c) {
null == c && (c = '');
this.screenData = a;
this.openCondition = b;
this.openTestString = c
};
j['com.nick.fop.dragon_drop.ui.screens.data.ScreenQueueData'] = g.screens.data.ScreenQueueData;
g.screens.data.ScreenQueueData.__name__ = 'com,nick,fop,dragon_drop,ui,screens,data,ScreenQueueData'.split(',');
g.screens.data.ScreenQueueData.prototype = {
validateCondition: function (a, b) {
null == b && (b = '');
return this.openCondition == a ? '' == this.openTestString || this.openTestString == b : !1
},
__class__: g.screens.data.ScreenQueueData
};
g.screens.data.ScreenStateData = function (a, b, c, k, d, e) {
this.id = a;
this.animation = b;
this.actionOnComplete = c;
this.actionData = k;
this.inFunc = d;
this.outFunc = e
};
j['com.nick.fop.dragon_drop.ui.screens.data.ScreenStateData'] = g.screens.data.ScreenStateData;
g.screens.data.ScreenStateData.__name__ = 'com,nick,fop,dragon_drop,ui,screens,data,ScreenStateData'.split(',');
g.screens.data.ScreenStateData.prototype = {
__class__: g.screens.data.ScreenStateData
};
g.transitions = {
};
g.transitions.TransitionBase = function (a, b, c, k) {
null ==
k && (k = '');
null == c && (c = !1);
null == b && (b = !0);
this._STATE_OUT = 3;
this._STATE_IDLE = 2;
this._STATE_IN = 1;
this._STATE_HIDDEN = 0;
this._transitionId = k;
this._flagOutOnly = c;
this.flagDispose = !1;
o.Element.call(this, {
asset: a
});
b ? this._setState(this._STATE_HIDDEN)  : this._flagOutOnly ? this._setState(this._STATE_OUT)  : this._setState(this._STATE_IN)
};
j['com.nick.fop.dragon_drop.ui.transitions.TransitionBase'] = g.transitions.TransitionBase;
g.transitions.TransitionBase.__name__ = 'com,nick,fop,dragon_drop,ui,transitions,TransitionBase'.split(',');
g.transitions.TransitionBase.__super__ = o.Element;
g.transitions.TransitionBase.prototype = x(o.Element.prototype, {
dispose: function () {
o.Element.prototype.dispose.call(this);
this._mc = null
},
_setState: function (a) {
this._state = a;
switch (this._state) {
case this._STATE_HIDDEN:
this.hide()
}
},
show: function () {
this._mc.set_visible(!0)
},
hide: function () {
this._mc.set_visible(!1)
},
start: function () {
this.show();
this._setState(this._STATE_IN)
},
update: function (a) {
o.Element.prototype.update.call(this, a)
},
_getIsOutro: function () {
return this._state ==
this._STATE_OUT
},
__class__: g.transitions.TransitionBase
}); t = {
}; t.World = function (a, b) {
this._flagTargeting = 0;
m.WMEventDispatcher.call(this);
this._timeline = a;
this._elementManager = new o.ElementManager(this._timeline, e.ConstantsApp.STAGE_CENTER_X, e.ConstantsApp.STAGE_CENTER_Y);
this._elementManager.addLayer(e.ConstantsApp.LAYER_BG);
this._elementManager.addLayer(e.ConstantsApp.LAYER_PLAYER);
this._elementManager.addLayer(e.ConstantsApp.LAYER_FG);
this._elementManager.addLayer(e.ConstantsApp.LAYER_UI);
this._elementManager.addElement(new o.Element({
layer: e.ConstantsApp.LAYER_BG,
x: 0,
y: - 210,
asset: 'backgroundImages/background'
}));
this._babyDragons = [
];
this._player = new t.elements.Player(155, 450);
this._dragon = new t.elements.Dragon(575, 150);
this._babyDragonTarget = new t.elements.BabyDragon(0, 0, !1);
this._elementManager.addElement(this._dragon);
this._elementManager.addElement(this._player);
this._prevPlayerAttack = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_ATTACK_TYPE);
this._flagNewGame = b;
this._player.setTarget(this._dragon);
this._dragon.setTarget(this._player);
this._addEventListeners();
this._previousState = - 1;
this._setState(0)
}; j['com.nick.fop.dragon_drop.world.World'] = t.World; t.World.__name__ = 'com,nick,fop,dragon_drop,world,World'.split(','); t.World.__super__ = m.WMEventDispatcher; t.World.prototype = x(m.WMEventDispatcher.prototype, {
render: function () {
this._elementManager.renderElements()
},
handleInput: function (a) {
if (!f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_PAUSED)) switch (a.input) {
case e.ConstantsApp.INPUT_CLICK:
switch (a.phase) {
case m.WMEventInput.PHASE_DOWN:
if (2 == this._flagTargeting) for (var b = 0, c = this._babyDragons; b < c.length; ) {
var k = c[b];
++b;
var d = l.Sprite.getBounds(k._getEntity()),
h = l.Sprite.getBounds(this._dragon._getEntity());
d.contains(a.x, a.y) ? (this._player.setTarget(k), this._babyDragonTarget = k, this._flagTargeting = 1, this._prevPlayerAttack = - 1, this._removeIndicators())  : h.contains(a.x, a.y) && (this._player.setTarget(this._dragon), this._flagTargeting = 1, this._prevPlayerAttack = - 1, this._removeIndicators())
}
}
}
},
_removeIndicators: function () {
this._elementManager.removeElement(this._userIndicator);
this._elementManager.removeElement(this._dragonArrow);
0 < this._babyDragons.length && !1 == this._babyDragonTarget.getIsMezzed() && this._elementManager.removeElement(this._babyDragonArrow)
},
_onSpawnCombatText: function () {
switch (f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE)) {
case 0:
this._combatText = new t.elements.CombatText(this._dragon._getPos().x + 50, this._dragon._getPos().y + 50, 0);
break;
case 1:
this._combatText = new t.elements.CombatText(this._player._getPos().x + 50, this._player._getPos().y -
50, 0);
break;
case 2:
this._combatText = this._babyDragonTarget.getIsMezzed() ? new t.elements.CombatText(this._dragon._getPos().x + 50, this._dragon._getPos().y + 50, 0)  : new t.elements.CombatText(this._player._getPos().x + 50, this._player._getPos().y - 50, 0);
break;
case 3:
this._combatText = new t.elements.CombatText(this._player._getPos().x + 50, this._player._getPos().y - 50, 1);
break;
case 4:
this._combatText = new t.elements.CombatText(this._babyDragonTarget._getPos().x - 10, this._babyDragonTarget._getPos().y - 10, 0)
}
this._elementManager.addElement(this._combatText)
},
_onSpawnUserIndicator: function () {
this._userIndicator = new t.elements.UserIndicators(160, 165);
this._elementManager.addElement(this._userIndicator);
this._dragonArrow = new t.elements.UserIndicators(650, 165, 1);
this._elementManager.addElement(this._dragonArrow);
0 < this._babyDragons.length && !1 == this._babyDragonTarget.getIsMezzed() && (this._babyDragonArrow = new t.elements.UserIndicators(570, 360, 1), this._elementManager.addElement(this._babyDragonArrow))
},
_onEndBabyDragonTurn: function () {
1 == this._babyDragons.length ? (this._previousState = this._state, this._setState(1))  : 0 < this._prevBabyDragon ? (this._previousState = - 1, this._babyDragons[this._prevBabyDragon - 1].setIsNext(!0), this._prevBabyDragon--)  : (this._previousState = this._state, this._setState(1))
},
_onMezBabyDragon: function () {
this._babyDragonTarget = this._babyDragons[0];
this._babyDragonTarget.setTarget(this._dragon);
this._babyDragonTarget.setFriendlyTarget(this._player);
this._player.setTarget(this._dragon);
this._babyDragonTarget.setIsMezzed(!0);
this._babyDragonTarget.setState(9);
this._dragon.setTarget(this._babyDragonTarget);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_BABY_DRAGON_MEZ_COUNTER, 1)
},
_onSpawnBabyDragon: function () {
if (3 > this._babyDragons.length) {
this._babyDragons.push(this._elementManager.addElement(new t.elements.BabyDragon(850, 400)));
var a = this._babyDragons.length;
f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS, a);
for (1 == a && this._babyDragons[0].setIsNext(!0); 0 < a; ) a--,
this._babyDragons[a].getIsNewBorn() && this._babyDragons[a].setTarget(this._player)
}
},
_onEndTurn: function () {
this._previousState = this._state;
0 == this._babyDragons.length ? this._setState(1)  : (this._setState(3), this._babyDragons[this._babyDragons.length - 1].setIsNext(!0))
},
_onEndPlayerTurn: function () {
this._previousState = this._state;
this._setState(2)
},
_onSpawnFire: function () {
this._elementManager.addElement(new t.elements.Flames(575, 150))
},
_unpause: function () {
f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_PAUSED, !1)
},
_pause: function () {
f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_PAUSED, !0)
},
_onUnpause: function () {
this._unpause()
},
_onPause: function () {
this._pause()
},
_removeEventListeners: function () {
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_PAUSE, s(this, this._onPause));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_UNPAUSE, s(this, this._onUnpause));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_END_PLAYER_TURN, s(this, this._onEndPlayerTurn));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_END_TURN, s(this, this._onEndTurn));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN, s(this, this._onEndBabyDragonTurn));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_SPAWN_BABY_DRAGON, s(this, this._onSpawnBabyDragon));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_MEZ_BABY_DRAGON, s(this, this._onMezBabyDragon));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_SPAWN_USER_INDICATOR, s(this, this._onSpawnUserIndicator));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT, s(this, this._onSpawnCombatText));
f.WorkinCloud.instance.getDispatcher().removeEventListener(e.ConstantsApp.EVENT_SPAWN_FIRE, s(this, this._onSpawnFire))
},
_addEventListeners: function () {
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_PAUSE, s(this, this._onPause));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_UNPAUSE, s(this, this._onUnpause));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_END_PLAYER_TURN, s(this, this._onEndPlayerTurn));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_END_TURN, s(this, this._onEndTurn));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN, s(this, this._onEndBabyDragonTurn));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_SPAWN_BABY_DRAGON, s(this, this._onSpawnBabyDragon));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_MEZ_BABY_DRAGON, s(this, this._onMezBabyDragon));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_SPAWN_USER_INDICATOR, s(this, this._onSpawnUserIndicator));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT, s(this, this._onSpawnCombatText));
f.WorkinCloud.instance.getDispatcher().addEventListener(e.ConstantsApp.EVENT_SPAWN_FIRE, s(this, this._onSpawnFire))
},
_updateCooldowns: function () {
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_FIRE_COOLDOWN) && f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_FIRE_COOLDOWN, - 1);
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_HEAL_COOLDOWN) && f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_HEAL_COOLDOWN, - 1);
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_MEZ_COOLDOWN) && f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_MEZ_COOLDOWN, - 1);
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_WINGS_COOLDOWN) && f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_WINGS_COOLDOWN, - 1);
0 < this._babyDragons.length && this._babyDragonTarget.getIsMezzed() && (f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_BABY_DRAGON_MEZ_COUNTER, - 1), 0 > f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_BABY_DRAGON_MEZ_COUNTER) && (f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_BABY_DRAGON_MEZ_COUNTER, 0), this._babyDragonTarget.setIsMezzed(!1), this._babyDragonTarget.setFriendlyTarget(this._dragon), this._babyDragonTarget.setTarget(this._player), this._babyDragonTarget.setState(9), this._dragon.setTarget(this._player)))
},
_babyDragonTurn: function () {
if (0 == this._babyDragons.length) f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN));
 else if (this._previousState != this._state) {
this._previousState = this._state;
var a = this._babyDragons.length;
if (1 == a) a--,
this._babyDragons[a].getIsNext() && (this._player.getIsBlocking() ? this._babyDragons[a].setPlayerBlocking(!0)  : this._babyDragons[a].setPlayerBlocking(!1), this._babyDragons[a].chooseAttack());
 else for (; 0 < a; ) a--,
this._babyDragons[a].getIsNext() && (this._player.getIsBlocking() ? this._babyDragons[a].setPlayerBlocking(!0)  : this._babyDragons[a].setPlayerBlocking(!1), this._babyDragons[a].chooseAttack(), this._prevBabyDragon = a)
}
},
_dragonTurn: function () {
this._previousState != this._state && this._flagDragonTurn && (this._previousState = this._state, this._flagDragonTurn = !1, this._player.getIsBlocking() ? this._dragon.setPlayerBlocking(!0)  : this._dragon.setPlayerBlocking(!1), this._dragon.getIsDragonDead() ? (this._dragon.setState(7), f.WorkinCloud.instance._getSound().playSound('audio/dragon_whimper', 1))  : this._dragon.chooseAttack())
},
_openAttackMenu: function () {
this._level = f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL);
this._updateCooldowns();
4 < this._level && 0 < this._babyDragons.length && !1 == this._dragon.getIsDragonDead() && (0 >= f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_MEZ_COOLDOWN) ? (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ENABLED, !0), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN, !1))  : (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ENABLED, !1), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN, !0)));
3 < this._level && (0 >= f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_WINGS_COOLDOWN) ? (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ENABLED, !0), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ON_COOLDOWN, !1))  : (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ENABLED, !1), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_WINGS_ON_COOLDOWN, !0)));
2 < this._level && (0 >= f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_FIRE_COOLDOWN) ? (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ENABLED, !0), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ON_COOLDOWN, !1))  : (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ENABLED, !1), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_FIRE_ON_COOLDOWN, !0)));
1 < this._level && (0 >= f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_HEAL_COOLDOWN) ? (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ENABLED, !0), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ON_COOLDOWN, !1))  : (f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ENABLED, !1), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_HEAL_ON_COOLDOWN, !0)));
if (!this._dragon.getIsDragonDead()) f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_OPEN));
else {this._dragon.setState(7)}
},
_playerTurn: function () {
this._dragon.getIsBlocking() ? this._player.setIsDragonBlocking(!0)  : this._player.setIsDragonBlocking(!1);
var a = f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_ATTACK_TYPE);
if (this._prevPlayerAttack != a) switch (this._prevPlayerAttack = a, this._prevPlayerAttack) {
case 1:
this._player.fireSelect();
break;
case 2:
this._player.healSelect();
break;
case 3:
this._player.mezSelect();
break;
case 4:
if (0 < this._babyDragons.length && !1 == this._babyDragonTarget.getIsMezzed()) switch (this._flagTargeting) {
case 0:
this._selectTarget();
break;
case 1:
this._player.wingsSelect(),
this._flagTargeting = 0
} else this._player.wingsSelect();
break;
case 5:
this._player.shieldSelect();
break;
case 6:
if (0 < this._babyDragons.length && !1 == this._babyDragonTarget.getIsMezzed()) switch (this._flagTargeting) {
case 0:
this._selectTarget();
break;
case 1:
this._player.weaponSelect(),
this._flagTargeting = 0
} else this._player.weaponSelect()
}
},
update: function (a) {
if (!0 != f.WorkinCloud.instance.getBool(e.ConstantsApp.BOOL_PAUSED)) {
a = Math.round(1000 * a) / 1000;
switch (this._state) {
case 0:
this._elementManager.updateElements(a);
this._timerDelay -= a;
0 > this._timerDelay && (this._setState(1), this._timerDelay = 0);
return;
case 1:
this._elementManager.updateElements(a);
this._playerTurn(a);
break;
case 2:
this._elementManager.updateElements(a);
this._dragonTurn(a);
break;
case 3:
this._elementManager.updateElements(a);
this._babyDragonTurn(a);
break;
case 4:
this._elementManager.updateElements(a)
}
for (this._numBabyDragons = this._babyDragons.length; 0 < this._numBabyDragons; ) this._numBabyDragons--,
this._babyDragons[this._numBabyDragons].getIsDragonDead() && (this._elementManager.removeElement(this._babyDragons[this._numBabyDragons]), this._babyDragons.splice(this._numBabyDragons, 1), f.WorkinCloud.instance.modifyInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS, - 1),
this._player.setTarget(this._dragon), this._dragon.setTarget(this._player), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ENABLED, !1), f.WorkinCloud.instance.setBool(e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN, !0))
}
},
_setState: function (a) {
this._state = a;
switch (a) {
case 0:
this._timerDelay = 0.6;
break;
case 1:
this._player.getIsDead() ? this._setState(4)  : (this._openAttackMenu(), this._player.setState(0), f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_ATTACK_TYPE, - 1), this._flagNewGame && (f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP)), this._flagNewGame = !1));
break;
case 2:
this._dragon.setState(5),
this._flagDragonTurn = !0
}
},
dispose: function () {
this._elementManager.dispose();
this._timeline = this._elementManager = null;
this._removeEventListeners();
this._userIndicator = this._babyDragonTarget = this._babyDragonArrow = this._combatText = this._dragonArrow = this._transition = this._target = this._dragon = this._player = this._babyDragons = null;
m.WMEventDispatcher.prototype.dispose.call(this)
},
_selectTarget: function () {
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_USER_INDICATOR));
this._flagTargeting = 2
},
__class__: t.World
});
o.AnimatedElement = function (a) {
o.Element.call(this, a);
this._animations = new I;
this._queuedAnimations = [
];
this._lastFrame = - 1;
this._currentFrame = 0;
this._currentAnimation = '';
this._fps = 24;
this._animationStopped = !0;
this._type = this._symbol = this._library = '';
a.library && a.movie && this.setLibraryAndSymbol(a.library, a.movie);
a.fps && (this._fps = a.fps)
};
j['com.workinman.display.AnimatedElement'] = o.AnimatedElement;
o.AnimatedElement.__name__ = [
'com',
'workinman',
'display',
'AnimatedElement'
];
o.AnimatedElement.__super__ = o.Element;
o.AnimatedElement.prototype = x(o.Element.prototype, {
_onAnimationComplete: function () {
},
_setFrame: function () {
this._movie.set_position(Math.floor(this._currentFrame) / this._frames * this._duration)
},
update: function (a) {
o.Element.prototype.update.call(this, a);
if ('' != this._currentAnimation && (0 < this._currentLoop || this._flagLoop) && !1 == this._animationStopped) this._currentFrame += this._fps * a,
this._currentFrame > this._currentFrameList[1] && (this._currentLoop--, 1 > this._currentLoop && !1 == this._flagLoop ? 0 < this._queuedAnimations.length ? (this._doAnimate(this._queuedAnimations[0]._getName(), this._queuedAnimations[0]._getLoops(), this._queuedAnimations[0]._getForce()), this._queuedAnimations.splice(0, 1))  : this._onAnimationComplete()  : this._currentFrame = this._currentFrameList[0]),
null != this._movie && (this._currentFrame | 0) != this._lastFrame && this._setFrame(this._currentFrame),
this._lastFrame = this._currentFrame | 0
},
clearQueue: function () {
for (; 0 < this._queuedAnimations.length; ) this._queuedAnimations.splice(0, 1)
},
stopAnimation: function () {
this._animationStopped = !0
},
_doAnimate: function (a, b, c) {
null == c && (c = !1);
null == b && (b = 0);
this._currentAnimation == a && !1 == c || (null != this._animations && this._animations.exists(a) ? (this._currentFrameList = null, this._currentFrameList = this._animations.get(a).slice(), this._currentFrame = this._currentFrameList[0], this._currentAnimation = a, this._currentLoop = b, this._flagLoop = 0 == b, this._animationStopped = !1)  : f.WorkinCloud.instance.log('Animation not found: ' + a))
},
animate: function (a, b, c) {
null ==
c && (c = !1);
null == b && (b = 0);
this.clearQueue();
this._doAnimate(a, b, c);
return this
},
addAnimation: function (a, b, c) {
null == c && (c = - 1);
null == b && (b = - 1);
- 1 == b && (b = 0);
- 1 == c && (c = this._frames | 0);
this._animations.set(a, [
b,
c
]);
return this
},
setLibraryAndSymbol: function (a, b) {
this._library = a;
this._symbol = b;
this._texture.dispose();
var c = f.WorkinCloud.instance.getAssets().getLibrary(this._library)._symbols.get(this._symbol);
this._duration = c.duration;
this._frames = c.frames;
this._movie = c.createSprite();
this._movie.set_paused(!0);
this._texture = this._movie;
this._textureEntity.add(this._texture);
return this
},
_getAnimationFrameRelative: function () {
return this._currentFrame - this._currentFrameList[0] | 0
},
_setAnimationFrame: function (a) {
this._currentFrame = a;
this._setFrame(this._currentFrame);
this.stopAnimation();
return this._currentFrame | 0
},
_getAnimationFrame: function () {
return this._currentFrame | 0
},
_getAnimationRatio: function () {
return (this._currentFrame - this._currentFrameList[0]) / (this._currentFrameList[1] - this._currentFrameList[0])
},
_setFps: function (a) {
return this._fps = a
},
_getFps: function () {
return this._fps
},
_getCurrentAnimation: function () {
return this._currentAnimation
},
getType: function () {
return this._type
},
dispose: function () {
this._currentFrameList = this._animations = this._movie = null;
this._queuedAnimations = [];
o.Element.prototype.dispose.call(this)
},
__class__: o.AnimatedElement
});
t.elements = {
};
t.elements.BabyDragon = function (a, b, c) {
null == c && (c = !0);
o.AnimatedElement.call(this, {
layer: e.ConstantsApp.LAYER_PLAYER,
library: 'anim_baby_dragon',
movie: '_gameplay_dragon_babycopy',
fps: 30,
origin: new i.WorkinPoint(0.5, 0)
});
this._type = 'Baby Dragon';
this._pos.x = a;
this._pos.y = b;
this._flagIsNewBorn = !0;
this._flagIsMezzed = this._flagDragonDead = this._flagIsNext = !1;
this._flagPlayBornSound = c;
this._velocity.y = 450;
this.addAnimation('idle', 1, 1);
this.addAnimation('open', 1, 29);
this.addAnimation('fly', 41, 60);
this.addAnimation('fly attack', 61, 80);
this.addAnimation('attack 1', 81, 90);
this.addAnimation('attack 2', 91, 98);
this.addAnimation('hurt', 99, 104);
this._maxHealth = 2 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_MAX_HEALTH, this._maxHealth);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH, this._maxHealth);
this.setState(0)
};
j['com.nick.fop.dragon_drop.world.elements.BabyDragon'] = t.elements.BabyDragon;
t.elements.BabyDragon.__name__ = 'com,nick,fop,dragon_drop,world,elements,BabyDragon'.split(',');
t.elements.BabyDragon.__super__ = o.AnimatedElement;
t.elements.BabyDragon.prototype = x(o.AnimatedElement.prototype, {
dispose: function () {
o.AnimatedElement.prototype.dispose.call(this);
this._friendlyTarget = this._target = null
},
_snapBack: function () {
i.tween.WorkinTweener._getInstance().tween(this._render, 1, {
scaleX: 1,
scaleY: 1,
rotation: 0
}).ease(i.tween.PennerManager.EASE_ELASTIC_OUT);
this.setState(1)
},
_moveBack: function (a) {
this._flagIsMezzed ? this._pos.x > this._friendlyTarget._getPos().x + 130 ? (this._render.scaleX = 1, this._pos.x -= 400 * a)  : (this._pos.x = this._friendlyTarget._getPos().x + 130, this._flagIsNext = this._flagMoving = !1, this.setState(2), this._flagAtTarget = !1, this._render.scaleX = - 1, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN)))  : 650 > this._pos.x ? (this._render.scaleX = - 1, this._pos.x += 400 * a)  : (this._pos.x = 650, this._flagIsNext = this._flagMoving = !1, this.setState(2), this._flagAtTarget = !1, this._render.scaleX = 1, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN)))
},
_moveToFriendly: function (a) {
this._flagAtTarget ? (this._render.scaleX = this._flagIsMezzed ? - 1 : 1, this._previousState = this._currentState, this.setState(2), this._flagMoving = !1)  : this._flagIsMezzed ? this._pos.x > this._friendlyTarget._getPos().x + 130 ? this._pos.x -= 400 * a : (this._pos.x = this._friendlyTarget._getPos().x + 130, this._flagAtTarget = !0, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN)))  : 650 > this._pos.x ? (this._render.scaleX = - 1, this._pos.x += 400 * a)  : (this._pos.x = 650, this._flagAtTarget = !0)
},
_moveToTarget: function (a) {
this._flagAtTarget ? (this._previousState = this._currentState, this.setState(4), this._flagMoving = !1)  : this._flagIsMezzed ? this._pos.x < this._target._getPos().x ? this._pos.x += 400 * a : (this._pos.x = this._target._getPos().x, this._flagAtTarget = !0)  : this._pos.x > this._target._getPos().x + 130 ? this._pos.x -= 400 * a : (this._pos.x = this._target._getPos().x + 130, this._flagAtTarget = !0)
},
_moveDown: function (a) {
this._pos.y += this._velocity.y * a;
475 < this._pos.y && (i.tween.WorkinTweener._getInstance().tween(this._render, 0.1, {
scaleX: 1,
scaleY: 0.8
}).ease(i.tween.PennerManager.EASE_OUT).onComplete(s(this, this._snapBack)), this._pos.y = 475, this._flagMoving = !1)
},
_dealDamage: function () {
var a;
a = 1 + 1.3 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1);
a = Math.round(a);
'Dragon' == this._target.getType() ? f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH, - a)  : (this._flagPlayerBlocking && (a /= 2), f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_HEALTH, - a));
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 2);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DAMAGE_AMOUNT, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT))
},
chooseAttack: function () {
this.setState(3)
},
_onAnimationComplete: function () {
this._previousState = this._currentState;
switch (this._previousState) {
case 4:
f.WorkinCloud.instance._getSound().playSound('audio/baby_dragon_chomp', 1);
this._dealDamage();
this.setState(7);
break;
case 7:
this._flagMoving = !0;
this.setState(6);
break;
case 1:
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_TURN));
this._flagIsNewBorn = !1;
break;
case 8:
break;
default:
this.setState(2)
}
},
setState: function (a) {
this._currentState = a;
switch (this._currentState) {
case 0:
this._flagPlayBornSound && f.WorkinCloud.instance._getSound().playSound('audio/dragon_born', 1);
this._flagMoving = !0;
this.animate('idle');
break;
case 1:
this.animate('open', 1);
break;
case 2:
this._flagAtTarget = !1;
this.animate('fly');
break;
case 3:
this._flagMoving = !0;
this.animate('fly attack');
break;
case 4:
this.animate('attack 1', 1);
break;
case 7:
this.animate('attack 2', 1);
break;
case 5:
f.WorkinCloud.instance._getSound().playSound('audio/baby_dragon_hurt', 1);
this.animate('hurt', 1);
break;
case 6:
this._flagMoving = !0;
this.animate('fly attack');
break;
case 8:
this.animate('hurt', 1);
break;
case 9:
this._flagMoving = !0,
this.animate('fly attack')
}
},
update: function (a) {
o.AnimatedElement.prototype.update.call(this, a);
if (this._flagMoving) switch (this._currentState) {
case 0:
this._moveDown(a);
break;
case 3:
this._moveToTarget(a);
break;
case 6:
this._moveBack(a);
break;
case 9:
this._moveToFriendly(a)
}
this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH);
this._maxHealth != this._health && (this._maxHealth = this._health, this.setState(5));
0 > f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH) && !1 == this._flagDragonDead && (this.setState(8), this._flagDragonDead = !0)
},
setPlayerBlocking: function (a) {
this._flagPlayerBlocking = a
},
getIsMezzed: function () {
return this._flagIsMezzed
},
setIsMezzed: function (a) {
this._flagIsMezzed = a
},
getIsDragonDead: function () {
return this._flagDragonDead
},
getIsNewBorn: function () {
return this._flagIsNewBorn
},
setIsNext: function (a) {
this._flagIsNext = a
},
getIsNext: function () {
return this._flagIsNext
},
setFriendlyTarget: function (a) {
this._friendlyTarget = a
},
setTarget: function (a) {
this._target = a
},
__class__: t.elements.BabyDragon
});
t.elements.CombatText = function (a, b, c) {
null == c && (c = 0);
o.Element.call(this, {
asset: '',
layer: e.ConstantsApp.LAYER_FG,
origin: new i.WorkinPoint(0.5, 0.5)
});
this._sinDisplay = Math.random() * Math.PI;
this._pos.x = a;
this._pos.y = b;
this._damageAmount = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DAMAGE_AMOUNT);
switch (c) {
case 0:
this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('fonts/damage_font'), '' + this._damageAmount);
break;
case 1:
this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('fonts/heal_font'), '' + this._damageAmount)
}
this._text.x.set__(this._getPos().x);
this._text.y.set__(this._getPos().y);
this._display = this._text;
this._entity.add(this._display);
this._render.alpha = 0
};
j['com.nick.fop.dragon_drop.world.elements.CombatText'] = t.elements.CombatText;
t.elements.CombatText.__name__ = 'com,nick,fop,dragon_drop,world,elements,CombatText'.split(',');
t.elements.CombatText.__super__ = o.Element;
t.elements.CombatText.prototype = x(o.Element.prototype, {
dispose: function () {
o.Element.prototype.dispose.call(this);
this._text = null
},
update: function (a) {
o.Element.prototype.update.call(this, a);
this._render.alpha += 2 * a;
1.5 < this._render.alpha && this.removeIndicator();
this._getPos().y -= 60 * a;
this._getPos().x += 20 * a
},
removeIndicator: function () {
this._setDoDelete(!0)
},
__class__: t.elements.CombatText
});
t.elements.Crystal = function () {
};
j['com.nick.fop.dragon_drop.world.elements.Crystal'] = t.elements.Crystal;
t.elements.Crystal.__name__ = 'com,nick,fop,dragon_drop,world,elements,Crystal'.split(',');
t.elements.Crystal.__super__ = o.Element;
t.elements.Crystal.prototype = x(o.Element.prototype, {
dispose: function () {
o.Element.prototype.dispose.call(this)
},
update: function (a) {
o.Element.prototype.update.call(this, a);
this._pos.x -= this._speed * a;
- 100 > this._pos.x && this._setDoDelete(!0);
this._render.rotation += this._rot * a
},
__class__: t.elements.Crystal
});
t.elements.Dragon = function (a, b) {
o.AnimatedElement.call(this, {
layer: e.ConstantsApp.LAYER_PLAYER,
library: 'anim_ranger',
movie: 'com.nick.fop.holiday_dragon.entities.Dragon',
fps: 30,
origin: new i.WorkinPoint(0.5, 0.5)
});
this._type = 'Dragon';
this._pos.x = a;
this._pos.y = b;
this._flagDragonDead = !1;
this.addAnimation('idle', 1, 40);
this.addAnimation('presents', 41, 79);
this.addAnimation('fire 1', 80, 92);
this.addAnimation('fire 2', 93, 116);
this.addAnimation('claw 1', 117, 163);
this.addAnimation('claw 2', 164, 226);
this.addAnimation('swipe 1', 227, 239);
this.addAnimation('swipe 2', 240, 250);
this.addAnimation('block', 251, 259);
this.addAnimation('hurt', 261, 267);
this.addAnimation('defeated', 268, 308);
this.addAnimation('defeated idle', 281, 297);
this.addAnimation('pre presents', 41, 53);
this.addAnimation('pre fire', 80, 92);
this.addAnimation('pre claw', 126, 138);
this.addAnimation('pre swipe', 230, 242);
this.addAnimation('pre block', 259, 270);
this.setState(5);
this._previousState = this._attack = - 1;
this._currentState = 0;
this._rdyToAttack = this._hasChangedState = !1;
this._babiesSpawned = this._fireCooldown = 0;
this._maxHealth = 9 < f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) ? 10 + Math.round(13 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1))  : 4 < f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) ? 10 + Math.round(10 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1))  : 10 + Math.round(5 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) +
1));
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DRAGON_MAX_HEALTH, this._maxHealth);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH, this._maxHealth)
};
j['com.nick.fop.dragon_drop.world.elements.Dragon'] = t.elements.Dragon;
t.elements.Dragon.__name__ = 'com,nick,fop,dragon_drop,world,elements,Dragon'.split(',');
t.elements.Dragon.__super__ = o.AnimatedElement;
t.elements.Dragon.prototype = x(o.AnimatedElement.prototype, {
dispose: function () {
o.AnimatedElement.prototype.dispose.call(this);
this._target = null
},
_doDamage: function () {
var a = 0;
switch (this._attack) {
case 0:
a = 4;
break;
case 1:
a = 5;
break;
case 3:
a = 8
}
a += 1.3 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1);
this._flagPlayerBlocking && (a = 3 == this._attack ? a / 4 : a / 2);
a = Math.round(a);
3 == this._attack ? (0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) && f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH, - a), f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_HEALTH, - a))  : 'Baby Dragon' ==
this._target.getType() ? f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH, - a)  : f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_HEALTH, - a);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 1);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DAMAGE_AMOUNT, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT))
},
chooseAttack: function () {
switch (this._attack) {
case - 1:
this.setState(0);
break;
case 0:
this.setState(0);
break;
case 1:
this.setState(1);
break;
case 3:
0 < this._fireCooldown ? this.setState(1)  : this.setState(3);
break;
case 4:
0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) ? this.setState(0)  : this.setState(4);
break;
case 2:
this.setState(2)
}
},
_nextAttack: function () {
         if(this._flagDragonDead)
         {
            this.setState(7);
         }
         else
         {
            if(this._fireCooldown > 0)
            {
               this._fireCooldown = this._fireCooldown - 1;
            }
            if(f.WorkinCloud.instance.getInt(e.ConstantsApp.CURRENT_LEVEL) > 4)
            {
               this._attack = f.WorkinUtils.getRandom(0, 4, !0);
            }
            else if(f.WorkinCloud.instance.getInt(e.ConstantsApp.CURRENT_LEVEL) > 2)
            {
               this._attack = f.WorkinUtils.getRandom(0, 3, !0);
            }
            else
            {
               this._attack = f.WorkinUtils.getRandom(0, 2, !0);
            }
            null;
         }
},
_onAnimationComplete: function () {
this._previousState = this._currentState;
switch (this._previousState) {
case 0:
this._doDamage();
this.setState(11);
break;
case 11:
this.setState(5);
this._nextAttack();
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_TURN));
break;
case 1:
this._doDamage();
this.setState(10);
break;
case 10:
this.setState(5);
this._nextAttack();
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_TURN));
break;
case 3:
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_FIRE));
this._doDamage();
this.setState(12);
break;
case 12:
this.setState(5);
this._nextAttack();
this._fireCooldown = 4;
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_TURN));
break;
case 4:
this.setState(5);
this._nextAttack();
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_BABY_DRAGON));
break;
case 2:
this._nextAttack();
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_TURN));
break;
case 8:
this.setState(5);
break;
case 7:
this.animate('defeated idle');
break;
case 6:
this.setState(5)
}
},
setState: function (a) {
this._currentState = a;
switch (this._currentState) {
case 0:
this.animate('swipe 1', 1);
f.WorkinCloud.instance._getSound().playSound('timmy_swordattack', 1);
break;
case 11:
this.animate('swipe 2', 1);
break;
case 1:
this.animate('claw 1', 1);
break;
case 10:
f.WorkinCloud.instance._getSound().playSound('audio/dragon_swoopattack', 1);
this.animate('claw 2', 1);
break;
case 3:
f.WorkinCloud.instance._getSound().playSound('audio/dragon_fire', 1);
this.animate('fire 1', 1);
break;
case 12:
this.animate('fire 2', 1);
break;
case 4:
this.animate('presents', 1);
break;
case 2:
this._flagIsBlocking = !0;
this.animate('block', 1);
break;
case 5:
this._flagIsBlocking = !1;
this.animate('idle');
break;
case 6:
f.WorkinCloud.instance._getSound().playSound('audio/dragon_hurt', 1);
this.animate('hurt', 1);
break;
case 7:
this.animate('defeated idle');
break;
case 8:
switch (this._attack) {
case 0:
this.animate('pre swipe', 1);
break;
case 1:
this.animate('pre claw', 1);
break;
case 3:
this.animate('pre fire', 1);
break;
case 4:
this.animate('pre presents', 1);
break;
case 2:
this.animate('pre block', 1)
}
}
},
update: function (a) {
o.AnimatedElement.prototype.update.call(this, a);
this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH);
this._maxHealth != this._health && (this._maxHealth = this._health, this.setState(6));
0 >= f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH) && !1 == this._flagDragonDead && (this._flagDragonDead = !0, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN)))
},
setPlayerBlocking: function (a) {
this._flagPlayerBlocking = a
},
getIsBlocking: function () {
return this._flagIsBlocking
},
setTarget: function (a) {
this._target = a
},
getIsDragonDead: function () {
return this._flagDragonDead
},
__class__: t.elements.Dragon
});
t.elements.Flames = function (a, b) {
o.AnimatedElement.call(this, {
layer: e.ConstantsApp.LAYER_PLAYER,
library: 'anim_flames',
movie: 'FirebreathShrunk',
fps: 30,
origin: new i.WorkinPoint(0.5, 0.5)
});
this._pos.x = a;
this._pos.y = b;
this.addAnimation('idle', 0, 20);
this.animate('idle', 1)
};
j['com.nick.fop.dragon_drop.world.elements.Flames'] = t.elements.Flames;
t.elements.Flames.__name__ = 'com,nick,fop,dragon_drop,world,elements,Flames'.split(',');
t.elements.Flames.__super__ = o.AnimatedElement;
t.elements.Flames.prototype = x(o.AnimatedElement.prototype, {
dispose: function () {
o.AnimatedElement.prototype.dispose.call(this)
},
_onAnimationComplete: function () {
this._setDoDelete(!0)
},
__class__: t.elements.Flames
});
t.elements.Player = function (a, b) {
this._currentLevel = f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) | 0;
o.AnimatedElement.call(this, {
layer: e.ConstantsApp.LAYER_PLAYER,
library: 'anim_timmy',
movie: this._assetID(),
fps: 30,
origin: new i.WorkinPoint(0.5, 0.5)
});
this._pos.x = a;
this._pos.y = b;
this.addAnimation('idle', 0, 49);
this.addAnimation('wings crouch', 50, 57);
this.addAnimation('wings up', 58, 87);
this.addAnimation('wings fly', 88, 91);
this.addAnimation('wings attack 1', 92, 112);
this.addAnimation('wings attack 2', 113, 118);
this.addAnimation('wings land', 119, 130);
this.addAnimation('shield', 141, 150);
this.addAnimation('heal', 151, 174);
this.addAnimation('fire 1', 175, 189);
this.addAnimation('fire 2', 190, 224);
this.addAnimation('mez', 225, 285);
this.addAnimation('weapon 1', 286, 295);
this.addAnimation('weapon 2', 296, 305);
this.addAnimation('hit', 306, 317);
this._currentState = 0;
this._previousState = - 1;
this.setState(0);
this._startingHealth = this._maxHealth = 20 + 4.5 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) +
1);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_MAX_HEALTH, this._maxHealth);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_HEALTH, this._maxHealth);
this._atTarget = this._isJumping = this._flagIsDead = !1
};
j['com.nick.fop.dragon_drop.world.elements.Player'] = t.elements.Player;
t.elements.Player.__name__ = 'com,nick,fop,dragon_drop,world,elements,Player'.split(',');
t.elements.Player.__super__ = o.AnimatedElement;
t.elements.Player.prototype = x(o.AnimatedElement.prototype, {
dispose: function () {
o.AnimatedElement.prototype.dispose.call(this);
this._target = null
},
_doMez: function () {
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_MEZ_BABY_DRAGON))
},
_heal: function () {
f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_HEALTH, this._healAmount);
var a = 0,
a = this._healAmount,
a = a * 10 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1);
f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_SCORE, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN))
},
_calculateHeal: function () {
this._healAmount = Math.floor(6 + 3 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1));
var a = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
this._healAmount + a > this._startingHealth && (this._healAmount = Math.floor(this._startingHealth - a), null);
f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 3);
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DAMAGE_AMOUNT, this._healAmount);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT))
},
_dealDamage: function () {
var a = 0;
switch (this._currentState) {
case 6:
a = 4;
break;
case 1:
a = 8;
break;
case 4:
a = 5
}
a += 2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1;
1 == this._currentState ? (0 < f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS) ? f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH, - a)  : this._flagIsDragonBlocking && (a /= 2), f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH, - a), f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 0))  : 'Dragon' == this._target.getType() ? (this._flagIsDragonBlocking && (a /= 2), f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_DRAGON_HEALTH, - a), f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 0))  : 'Baby Dragon' == this._target.getType() && (f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH, - a), f.WorkinCloud.instance.setInt(e.ConstantsApp.INT_COMBAT_TEXT_TYPE, 4));
f.WorkinCloud.instance.setFloat(e.ConstantsApp.FLOAT_DAMAGE_AMOUNT, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT));
a *= 10 * (2 * f.WorkinCloud.instance.getFloat(e.ConstantsApp.CURRENT_LEVEL) + 1);
f.WorkinCloud.instance.modifyFloat(e.ConstantsApp.FLOAT_SCORE, a);
null
},
_wingsFlyBack: function (a) {
165 < this._pos.x ? (this._render.scaleX = - 1, this._pos.x -= 450 * a)  : (this._pos.x = 165, this._pos.y = 450, this.setState(16), this._render.scaleX = 1, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN)))
},
_wingsFly: function (a) {
this._pos.x < this._target._getPos().x ? this._pos.x += 450 * a : (this._pos.x = this._target._getPos().x, this.setState(4), f.WorkinCloud.instance._getSound().playSound('timmy_swordattack', 1))
},
_wingsUp: function () {
200 < this._pos.y ? this._pos.y -= 15 : (this._flagJumping = !1, this._pos.y = 200, this.setState(14))
},
_jumpBack: function () {
165 < this._pos.x ? this._pos.x -= 40 : (this._pos.x = 165, this._previousState = this._currentState, this._currentState = 0, this.setState(0), this._flagJumping = this._isJumping = this._atTarget = !1, f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN)))
},
_jumpingToTarget: function () {
this._atTarget ? (this._previousState = this._currentState, this._currentState = 6, this.setState(6), this._flagJumping = !1, f.WorkinCloud.instance._getSound().playSound('timmy_swordattack', 1))  : 'Baby Dragon' == this._target.getType() ? this._pos.x < this._target._getPos().x - 60 ? this._pos.x += 40 : (this._pos.x = this._target._getPos().x - 60, this._atTarget = !0)  : this._pos.x < this._target._getPos().x ? this._pos.x += 40 : (this._pos.x = this._target._getPos().x, this._atTarget = !0)
},
testDragonBlock: function () {
null
},
_testSkipTargettingIfSingleTarget: function () {
f.WorkinCloud.instance.getInt(e.ConstantsApp.INT_NUMBER_BABY_DRAGONS)
},
shieldSelect: function () {
this._previousState = 5;
this.setState(5);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN))
},
wingsSelect: function () {
this._testSkipTargettingIfSingleTarget();
this.setState(12)
},
mezSelect: function () {
this.setState(3);
f.WorkinCloud.instance._getSound().playSound('hypnotize', 1)
},
healSelect: function () {
f.WorkinCloud.instance._getSound().playSound('timmy_heal', 1);
this.setState(2);
this._calculateHeal()
},
fireSelect: function () {
this.testDragonBlock();
this.setState(1);
f.WorkinCloud.instance._getSound().playSound('timmy_fire', 1)
},
weaponSelect: function () {
null == this._target ? this._currentState = 8 : this.setState(9)
},
_onAnimationComplete: function () {
switch (this._currentState) {
case 1:
this._dealDamage();
this.setState(19);
break;
case 19:
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(e.ConstantsApp.EVENT_END_PLAYER_TURN));
this.setState(0);
break;
case 8:
this.setState(9);
break;
case 2:
this._heal();
this._previousState = 2;
this.setState(0);
break;
case 6:
this._dealDamage();
this.setState(18);
break;
case 18:
this.setState(10);
break;
case 5:
this.setState(5);
break;
case 12:
f.WorkinCloud.instance._getSound().playSound('drop_swoop', 1);
this.setState(13);
break;
case 4:
this._dealDamage();
this.setState(20);
break;
case 20:
this.setState(17);
break;
case 3:
this._doMez();
this.setState(0);
break;
case 7:
this._isBlocking ? this.setState(5)  : this.setState(0);
break;
default:
this.setState(0)
}
},
setState: function (a) {
this._currentState = a;
switch (this._currentState) {
case 0:
this._isBlocking = !1;
this.animate('idle');
break;
case 1:
this.animate('fire 1', 1);
break;
case 19:
this.animate('fire 2', 1);
break;
case 2:
this.animate('heal', 1);
break;
case 3:
this.animate('mez', 1);
break;
case 4:
this.animate('wings attack 1', 1);
break;
case 20:
this.animate('wings attack 2', 1);
break;
case 5:
this.animate('shield', 1);
this._isBlocking = !0;
break;
case 6:
this.animate('weapon 1', 1);
break;
case 18:
this.animate('weapon 2', 1);
break;
case 7:
f.WorkinCloud.instance._getSound().playSound('timmy_hit', 1);
this.animate('hit', 1);
break;
case 21:
f.WorkinCloud.instance._getSound().playSound('timmy_block', 0.5);
break;
case 8:
this.animate('idle');
break;
case 9:
this._flagJumping = !0;
break;
case 10:
this._flagJumping = !0;
break;
case 12:
this.animate('wings crouch', 1);
break;
case 13:
this.animate('wings up');
this._flagJumping = !0;
break;
case 14:
this.animate('wings fly');
this._flagJumping = !0;
break;
case 17:
f.WorkinCloud.instance._getSound().playSound('drop_swoop', 1);
this.animate('wings fly');
this._flagJumping = !0;
break;
case 16:
this.animate('wings land', 1)
}
},
update: function (a) {
o.AnimatedElement.prototype.update.call(this, a);
if (this._flagJumping) switch (this._currentState) {
case 9:
this._jumpingToTarget(a);
return;
case 10:
this._jumpBack(a);
return;
case 13:
this._wingsUp(a);
return;
case 14:
this._wingsFly(a);
return;
case 17:
this._wingsFlyBack(a);
return
}
this._health = f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH);
this._maxHealth != this._health && this._health < this._maxHealth ? (this._maxHealth = this._health, 5 == this._currentState || 21 == this._currentState ?
this.setState(21)  : this.setState(7))  : this._maxHealth != this._health && this._health > this._maxHealth && (this._maxHealth = this._health);
0 >= f.WorkinCloud.instance.getFloat(e.ConstantsApp.FLOAT_HEALTH) && !1 == this._flagIsDead && (f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventFlow(e.ConstantsScreen.FLOW_BRANCH_GAME_LOSE)), this._flagIsDead = !0)
},
_assetID: function () {
switch (this._currentLevel) {
case 1:
return 'Level1Timmy';
case 2:
return 'Level2Timmy';
case 3:
return 'Level3Timmy';
case 4:
return 'Level4Timmy';
default:
return 'Level5Timmy'
}
},
getIsDead: function () {
return this._flagIsDead
},
getIsBlocking: function () {
return this._isBlocking
},
setIsDragonBlocking: function (a) {
this._flagIsDragonBlocking = a
},
setTarget: function (a) {
this._target = a
},
__class__: t.elements.Player
});
t.elements.TestElement = function () {
};
j['com.nick.fop.dragon_drop.world.elements.TestElement'] = t.elements.TestElement;
t.elements.TestElement.__name__ = 'com,nick,fop,dragon_drop,world,elements,TestElement'.split(',');
t.elements.TestElement.__super__ = o.Element;
t.elements.TestElement.prototype = x(o.Element.prototype, {
update: function (a) {
o.Element.prototype.update.call(this, a);
this.updatePositionFromVelocity(a);
if (0 < this._velocity.x && this._pos.x > e.ConstantsApp.STAGE_WIDTH - this._render.width / 2 || 0 > this._velocity.x && this._pos.x < this._render.width / 2) this._velocity.x *= - 1;
if (0 < this._velocity.y && this._pos.y > e.ConstantsApp.STAGE_HEIGHT - this._render.height / 2 || 0 > this._velocity.y && this._pos.y < this._render.height / 2) this._velocity.y *= - 1;
this.rect.x = this._pos.x -
this._render.width / 2;
this.rect.y = this._pos.y - this._render.height / 2;
this._render.rotation += this._rotation * a
},
dispose: function () {
this.rect = null;
o.Element.prototype.dispose.call(this)
},
__class__: t.elements.TestElement
});
t.elements.Transition = function (a, b) {
o.AnimatedElement.call(this, {
layer: e.ConstantsApp.LAYER_UI,
library: 'flump_exploder',
movie: 'com.nick.fop.holiday_dragon.ui.screens.Gameplay',
fps: 30,
origin: new i.WorkinPoint(0.5, 0)
});
this._pos.x = a;
this._pos.y = b;
this.addAnimation('transition in', 1, 10);
this.addAnimation('transition out', 11, 20);
this.setState(1)
};
j['com.nick.fop.dragon_drop.world.elements.Transition'] = t.elements.Transition;
t.elements.Transition.__name__ = 'com,nick,fop,dragon_drop,world,elements,Transition'.split(',');
t.elements.Transition.__super__ = o.AnimatedElement;
t.elements.Transition.prototype = x(o.AnimatedElement.prototype, {
dispose: function () {
o.AnimatedElement.prototype.dispose.call(this)
},
_onAnimationComplete: function () {
switch (this._state) {
case 1:
this.setState(2);
break;
case 2:
this._setDoDelete(!0)
}
},
setState: function (a) {
this._state = a;
switch (this._state) {
case 1:
this.animate('transition in', 1);
break;
case 2:
this.animate('transition out', 1)
}
},
__class__: t.elements.Transition
});
t.elements.UserIndicators = function (a, b, c) {
null == c && (c = 0);
switch (c) {
case 0:
this._asset = '';
break;
case 1:
this._asset = 'elements/arrow_indicator'
}
o.Element.call(this, {
asset: this._asset,
layer: e.ConstantsApp.LAYER_FG,
origin: new i.WorkinPoint(0.5, 0.5)
});
this._sinDisplay = Math.random() * Math.PI;
this._pos.x = a;
this._pos.y = b;
switch (c) {
case 0:
this._text = new l.TextSprite(f.WorkinCloud.instance.getAssets().getFont('final_font'), 'Select a target');
this._text.x.set__(this._getPos().x);
this._text.y.set__(this._getPos().y);
this._display = this._text;
this._entity.add(this._display);
this._display.alpha.set__(0);
break;
case 1:
this._render.rotation = 150
}
};
j['com.nick.fop.dragon_drop.world.elements.UserIndicators'] = t.elements.UserIndicators;
t.elements.UserIndicators.__name__ = 'com,nick,fop,dragon_drop,world,elements,UserIndicators'.split(',');
t.elements.UserIndicators.__super__ = o.Element;
t.elements.UserIndicators.prototype = x(o.Element.prototype, {
dispose: function () {
o.Element.prototype.dispose.call(this);
this._text = null
},
update: function (a) {
o.Element.prototype.update.call(this, a);
var b = this._display.alpha;
b.set__(b._value + 2 * a);
this._sinDisplay += 20 * a;
this._pos.y += 30 * Math.sin(this._sinDisplay) * a
},
__class__: t.elements.UserIndicators
});
D = void 0;
L = void 0;
l = void 0;
d = void 0;
H = void 0;
n = void 0;
M = void 0;
z = void 0;
v = void 0;
G = void 0;
h = void 0;
Y = void 0;
A = void 0;
F = void 0;
A = void 0;
aa = void 0;
A = void 0;
A = void 0;
n = {
Disposable: function () {
}
};
j['flambe.util.Disposable'] = n.Disposable;
n.Disposable.__name__ = [
'flambe',
'util',
'Disposable'
];
n.Disposable.prototype = {
__class__: n.Disposable
};
M = function () {
};
j['flambe.Component'] = M;
M.__name__ = [
'flambe',
'Component'
];
M.__interfaces__ = [
n.Disposable
];
M.prototype = {
_internal_init: function (a, b) {
this.owner = a;
this.next = b
},
get_name: function () {
return null
},
dispose: function () {
null != this.owner && this.owner.remove(this)
},
onUpdate: function () {
},
onRemoved: function () {
},
onAdded: function () {
},
__class__: M
};
$ = {
ComponentUpdater: function () {
this._paused = !1
}
};
j['com.workinman.components.ComponentUpdater'] = $.ComponentUpdater;
$.ComponentUpdater.__name__ = [
'com',
'workinman',
'components',
'ComponentUpdater'
];
$.ComponentUpdater.__super__ = M;
$.ComponentUpdater.prototype = x(M.prototype, {
setPaused: function (a) {
return this._paused = a
},
getPaused: function () {
return this._paused
},
onUpdate: function (a) {
this._paused || f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventUpdate(a))
},
get_name: function () {
return 'ComponentUpdater_3'
},
__class__: $.ComponentUpdater
});
P = {
ConstantsCloud: function () {
}
};
j['com.workinman.data.ConstantsCloud'] = P.ConstantsCloud;
P.ConstantsCloud.__name__ = [
'com',
'workinman',
'data',
'ConstantsCloud'
];
o.QueuedAnimation = function () {
};
j['com.workinman.display.QueuedAnimation'] = o.QueuedAnimation;
o.QueuedAnimation.__name__ = [
'com',
'workinman',
'display',
'QueuedAnimation'
];
o.QueuedAnimation.prototype = {
_getForce: function () {
return this._force
},
_getLoops: function () {
return this._loops
},
_getName: function () {
return this._name
},
__class__: o.QueuedAnimation
};
o.ElementManager = function (a, b, c) {
this._timeline = a;
this._layers = new I;
this._elements = [
];
this._camera = new i.WorkinCamera(b, c)
};
j['com.workinman.display.ElementManager'] = o.ElementManager;
o.ElementManager.__name__ = [
'com',
'workinman',
'display',
'ElementManager'
];
o.ElementManager.prototype = {
renderElements: function () {
for (var a = 0, b = this._elements; a < b.length; ) {
var c = b[a];
++a;
c.renderPosition(this._camera)
}
},
updateElements: function (a) {
for (var b = this._elements.length; 0 < b; ) b--,
this._elements[b].update(a),
this._elements[b]._getDoDelete() && this.removeElementAtIndex(b)
},
removeElement: function (a) {
for (var b = this._elements.length; 0 < b; ) if (b--, this._elements[b] == a) {
this.removeElementAtIndex(b);
break
}
},
removeElementAtIndex: function (a) {
this._elements[a]._getEntity().parent.removeChild(this._elements[a]._getEntity());
this._elements[a]._setDoDelete(!0);
this._elements[a].dispose();
this._elements.splice(a, 1)
},
addElement: function (a) {
if (!1 == this._layers.exists(a._getLayer())) return f.WorkinCloud.instance.log('[ElementManager](addElement) Trying to add element to non-existant layer \'' +
a._getLayer() + '\'!'),
a;
this._elements.push(a);
this._layers.get(a._getLayer()).addChild(a._getEntity());
return a
},
addLayer: function (a) {
if (this._layers.exists(a)) this._timeline.removeChild(this._layers.get(a)),
this._timeline.addChild(this._layers.get(a));
 else {
var b = new L;
this._timeline.addChild(b);
this._layers.set(a, b)
}
},
_getElements: function () {
return this._elements
},
_getCamera: function () {
return this._camera
},
dispose: function () {
for (; 0 < this._elements.length; ) this.removeElementAtIndex(this._elements.length -
1);
this._elements = null;
this._camera.dispose();
this._camera = null;
for (var a = this._layers.iterator(); a.hasNext(); ) a.next().dispose();
this._timeline = this._layers = null
},
__class__: o.ElementManager
};
o.MaskedElement = function () {
this._TWEEN_SPEED = 5
};
j['com.workinman.display.MaskedElement'] = o.MaskedElement;
o.MaskedElement.__name__ = [
'com',
'workinman',
'display',
'MaskedElement'
];
o.MaskedElement.__super__ = o.Element;
o.MaskedElement.prototype = x(o.Element.prototype, {
update: function (a) {
this._currentScale.x += (this._newScale.x -
this._currentScale.x) * a * this._TWEEN_SPEED;
this._currentScale.y += (this._newScale.y - this._currentScale.y) * a * this._TWEEN_SPEED;
this.updateMask(this._currentScale.x, this._currentScale.y);
o.Element.prototype.update.call(this, a)
},
updateMask: function (a, b) {
this._mask.clear();
this._mask.beginPath();
this._mask.moveTo(0, this._height * b);
this._mask.lineTo(this._width * a, this._height * b);
this._mask.lineTo(this._width * a, 0);
this._mask.lineTo(0, 0);
this._mask.closePath()
},
__class__: o.MaskedElement
});
o.Renderable = function (a, b) {
null == b && (b = 1);
null == a && (a = 1);
this.rotation = this.y = this.x = 0;
this.scaleY = this.scaleX = 1;
this.width = a;
this.height = b;
this.alpha = 1;
this.visible = !0
};
j['com.workinman.display.Renderable'] = o.Renderable;
o.Renderable.__name__ = [
'com',
'workinman',
'display',
'Renderable'
];
o.Renderable.prototype = {
__class__: o.Renderable
};
m.WMEvent = function (a) {
this._eventId = a
};
j['com.workinman.events.WMEvent'] = m.WMEvent;
m.WMEvent.__name__ = [
'com',
'workinman',
'events',
'WMEvent'
];
m.WMEvent.prototype = {
getEventId: function () {
return this._eventId
},
__class__: m.WMEvent
};
m.WMEventData = function (a, b) {
m.WMEvent.call(this, a);
this._data = b
};
j['com.workinman.events.WMEventData'] = m.WMEventData;
m.WMEventData.__name__ = [
'com',
'workinman',
'events',
'WMEventData'
];
m.WMEventData.__super__ = m.WMEvent;
m.WMEventData.prototype = x(m.WMEvent.prototype, {
_getData: function () {
return this._data
},
__class__: m.WMEventData
});
m._WMEventDispatcher = {
};
m._WMEventDispatcher.WMEventTracker = function () {
this._signalConnection = [
];
this._signal = new n.Signal1
};
j['com.workinman.events._WMEventDispatcher.WMEventTracker'] = m._WMEventDispatcher.WMEventTracker;
m._WMEventDispatcher.WMEventTracker.__name__ = [
'com',
'workinman',
'events',
'_WMEventDispatcher',
'WMEventTracker'
];
m._WMEventDispatcher.WMEventTracker.prototype = {
dispose: function () {
this._signal = null;
for (var a = 0, b = this._signalConnection; a < b.length; ) {
var c = b[a];
++a;
c.dispose()
}
this._signalConnection = null
},
isEmtpy: function () {
return null == this._signal._head
},
dispatchEvent: function (a) {
this._signal.emit1(a)
},
removeEventListener: function (a) {
for (var b = this._signalConnection.length; 0 <
b; ) b--,
J.compareMethods(this._signalConnection[b]._getListener(), a) && (this._signalConnection[b].dispose(), this._signalConnection.splice(b, 1))
},
addEventListener: function (a) {
this._signalConnection.push(new m._WMEventDispatcher.SignalTracker(a, this._signal.connect(a)))
},
__class__: m._WMEventDispatcher.WMEventTracker
};
m._WMEventDispatcher.SignalTracker = function (a, b) {
this._function = a;
this._connection = b
};
j['com.workinman.events._WMEventDispatcher.SignalTracker'] = m._WMEventDispatcher.SignalTracker;
m._WMEventDispatcher.SignalTracker.__name__ = [
'com',
'workinman',
'events',
'_WMEventDispatcher',
'SignalTracker'
];
m._WMEventDispatcher.SignalTracker.prototype = {
_getListener: function () {
return this._function
},
dispose: function () {
this._function = null;
this._connection.dispose();
this._connection = null
},
__class__: m._WMEventDispatcher.SignalTracker
};
m.WMEventFlow = function (a, b) {
null == b && (b = !1);
this.flowId = a;
this.targetScreen = b;
m.WMEvent.call(this, m.WMEventFlow.EVENT_FLOW)
};
j['com.workinman.events.WMEventFlow'] = m.WMEventFlow;
m.WMEventFlow.__name__ = [
'com',
'workinman',
'events',
'WMEventFlow'
];
m.WMEventFlow.__super__ = m.WMEvent;
m.WMEventFlow.prototype = x(m.WMEvent.prototype, {
__class__: m.WMEventFlow
});
m.WMEventInput = function (a, b, c, k) {
m.WMEvent.call(this, m.WMEventInput.EVENT_INPUT);
this.phase = a;
this.input = b;
this.x = c;
this.y = k
};
j['com.workinman.events.WMEventInput'] = m.WMEventInput;
m.WMEventInput.__name__ = [
'com',
'workinman',
'events',
'WMEventInput'
];
m.WMEventInput.__super__ = m.WMEvent;
m.WMEventInput.prototype = x(m.WMEvent.prototype, {
__class__: m.WMEventInput
});
m.WMEventInterfaceChange = function (a, b, c) {
null == b && (b = '');
this.flowId = a;
this.screenId = b;
null == c && (c = new I);
this.customData = c;
m.WMEvent.call(this, m.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT)
};
j['com.workinman.events.WMEventInterfaceChange'] = m.WMEventInterfaceChange;
m.WMEventInterfaceChange.__name__ = [
'com',
'workinman',
'events',
'WMEventInterfaceChange'
];
m.WMEventInterfaceChange.__super__ = m.WMEvent;
m.WMEventInterfaceChange.prototype = x(m.WMEvent.prototype, {
__class__: m.WMEventInterfaceChange
});
m.WMEventScreenOut = function (a, b) {
this.flowId = a;
this.screenId = b;
m.WMEvent.call(this, m.WMEventScreenOut.EVENT_SCREEN_OUTPUT)
};
j['com.workinman.events.WMEventScreenOut'] = m.WMEventScreenOut;
m.WMEventScreenOut.__name__ = [
'com',
'workinman',
'events',
'WMEventScreenOut'
];
m.WMEventScreenOut.__super__ = m.WMEvent;
m.WMEventScreenOut.prototype = x(m.WMEvent.prototype, {
__class__: m.WMEventScreenOut
});
m.WMEventUpdate = function (a) {
m.WMEvent.call(this, m.WMEventUpdate.EVENT_UPDATE);
this._dt = a
};
j['com.workinman.events.WMEventUpdate'] = m.WMEventUpdate;
m.WMEventUpdate.__name__ = [
'com',
'workinman',
'events',
'WMEventUpdate'
];
m.WMEventUpdate.__super__ = m.WMEvent;
m.WMEventUpdate.prototype = x(m.WMEvent.prototype, {
getDt: function () {
return this._dt
},
__class__: m.WMEventUpdate
});
i = {
};
i.WorkinCamera = function (a, b) {
this._screenCenterX = a;
this._screenCenterY = b;
this._pos = new i.WorkinPoint(a, b)
};
j['com.workinman.math.WorkinCamera'] = i.WorkinCamera;
i.WorkinCamera.__name__ = [
'com',
'workinman',
'math',
'WorkinCamera'
];
i.WorkinCamera.prototype = {
_getScreenCenterY: function () {
return this._screenCenterY
},
_getScreenCenterX: function () {
return this._screenCenterX
},
_getPos: function () {
return this._pos
},
dispose: function () {
this._pos = null
},
__class__: i.WorkinCamera
};
i.WorkinLine = function (a, b) {
this._p0 = a.copy();
this._p1 = b.copy();
this._calcProperties()
};
j['com.workinman.math.WorkinLine'] = i.WorkinLine;
i.WorkinLine.__name__ = [
'com',
'workinman',
'math',
'WorkinLine'
];
i.WorkinLine.prototype = {
_calcProperties: function () {
this._length = Math.round(1000 * Math.sqrt((this._p0.x - this._p1.x) * (this._p0.x - this._p1.x) + (this._p0.y -
this._p1.y) * (this._p0.y - this._p1.y))) / 1000;
this._vector = new i.WorkinPoint(this._getP1().x - this._getP0().x, this._getP1().y - this._getP0().y);
this._slope = this._vector.y / this._vector.x;
0 == this._getVector().x && (this._slope = 100000);
this._yIntercept = this._getP0().y - this._slope * this._getP0().x;
this._parametricDenom = new i.WorkinPoint(this._getP1().x - this._getP0().x, this._getP1().y - this._getP0().y);
this._normal = this._vector.pseudoCross();
this._normal.normalize()
},
endToPoint: function (a) {
this._p1.toPoint(a);
this._calcProperties()
},
originToPoint: function (a) {
this._p0.toPoint(a);
this._calcProperties()
},
to: function (a, b) {
this._p0.toPoint(a);
this._p1.toPoint(b);
this._calcProperties()
},
copy: function () {
return new i.WorkinLine(this._p0, this._p1)
},
_setLength: function (a) {
if (0 == this._getLength()) return this._length;
this._p1 = new i.WorkinPoint(this._p0.x + this._vector.x * (a / this._getLength()), this._p0.y + this._vector.y * (a / this._getLength()));
this._calcProperties();
return this._length
},
_getLength: function () {
return this._length
},
_getParametricDenom: function () {
return this._parametricDenom
},
_getCenterY: function () {
return this._p0.y + this._vector.y / 2
},
_getCenterX: function () {
return this._p0.x + this._vector.x / 2
},
_getCenter: function () {
return new i.WorkinPoint(this._p0.x + this._vector.x / 2, this._p0.y + this._vector.y / 2)
},
_getVector: function () {
return this._vector
},
_getNormal: function () {
return this._normal
},
_getYIntercept: function () {
return this._yIntercept
},
_getSlope: function () {
return this._slope
},
_getP1: function () {
return this._p1
},
_getP0: function () {
return this._p0
},
dispose: function () {
this._parametricDenom = this._vector = this._normal = this._p1 = this._p0 = null
},
__class__: i.WorkinLine
};
i.WorkinPoint = function (a, b, c) {
null == c && (c = 0);
null == b && (b = 0);
null == a && (a = 0);
this.x = Math.round(1000 * a) / 1000;
this.y = Math.round(1000 * b) / 1000;
this.z = Math.round(1000 * c) / 1000;
this.calculateLength()
};
j['com.workinman.math.WorkinPoint'] = i.WorkinPoint;
i.WorkinPoint.__name__ = [
'com',
'workinman',
'math',
'WorkinPoint'
];
i.WorkinPoint.prototype = {
_getNormalizedMagnitude: function () {
var a = this.normalizeCopy();
return Math.sqrt(a.x * a.x + a.y * a.y)
},
calculateLength: function () {
this._length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
},
pseudoCross: function () {
return new i.WorkinPoint(this.y, - this.x, this.z)
},
normalizeCopy: function () {
return 0 == this._length ? new i.WorkinPoint(0, 0, 0)  : new i.WorkinPoint(this.x / this._length, this.y / this._length, this.z / this._length)
},
normalize: function () {
0 != this._length && (this.x /= this._length, this.y /= this._length, this.z /= this._length, this.calculateLength())
},
_setLength: function (a) {
if (0 == this._length || 0 >= a) return this.to(0, 0),
this._length;
this.multiply(a / this._length);
return this._length
},
_getLength: function () {
return this._length
},
copy: function () {
return new i.WorkinPoint(this.x, this.y, this.z)
},
multiply: function (a) {
this.x *= a;
this.y *= a;
this.z *= a;
this.clean();
this.calculateLength()
},
subtractPoint: function (a) {
this.x -= a.x;
this.y -= a.y;
this.z -= a.z;
this.calculateLength()
},
toPoint: function (a) {
this.x = a.x;
this.y = a.y;
this.z = a.z;
this.calculateLength()
},
to: function (a, b, c) {
null == c && (c = 0);
this.x = a;
this.y = b;
this.z = c;
this.calculateLength()
},
clean: function () {
this.x = Math.round(1000 * this.x) / 1000;
this.y = Math.round(1000 * this.y) / 1000;
this.z = Math.round(1000 * this.z) / 1000
},
_getAngle: function () {
return 180 * Math.atan2(this.y, this.x) / Math.PI
},
__class__: i.WorkinPoint
};
i.tween = {
};
i.tween.PennerEasing = function () {
};
j['com.workinman.math.tween.PennerEasing'] = i.tween.PennerEasing;
i.tween.PennerEasing.__name__ = [
'com',
'workinman',
'math',
'tween',
'PennerEasing'
];
i.tween.PennerEasing.easeInQuad = function (a, b, c, k) {
return c * (a /= k) * a + b
};
i.tween.PennerEasing.easeOutQuad = function (a, b, c, k) {
return - c * (a /= k) * (a - 2) + b
};
i.tween.PennerEasing.easeInOutQuad = function (a, b, c, k) {
return 1 > (a /= k / 2) ? c / 2 * a * a + b : - c / 2 * (--a * (a - 2) - 1) + b
};
i.tween.PennerEasing.easeInExpo = function (a, b, c, k) {
return 0 == a ? b : c * Math.pow(2, 10 * (a / k - 1)) + b
};
i.tween.PennerEasing.easeOutExpo = function (a, b, c, k) {
return a == k ? b + c : c * ( - Math.pow(2, - 10 * a / k) + 1) + b
};
i.tween.PennerEasing.easeInOutExpo = function (a, b, c, k) {
return 0 == a ? b : a == k ? b + c : 1 > (a /= k / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * ( - Math.pow(2, - 10 * --a) + 2) + b
};
i.tween.PennerEasing.easeInElastic = function (a, b, c, k) {
return i.tween.PennerEasing.easeInElasticL(a, b, c, k)
};
i.tween.PennerEasing.easeInElasticL = function (a, b, c, k, d, e) {
null == e && (e = - 0.123456);
null == d && (d = - 0.123456);
if (0 == a) return b;
if (1 == (a /= k)) return b + c;
- 0.123456 == e && (e = 0.3 * k);
- 0.123456 == d || d < Math.abs(c) ? (d = c, c = e / 4)  : c = e / (2 * Math.PI) * Math.asin(c / d);
return - (d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * k - c) * 2 * Math.PI / e)) + b
};
i.tween.PennerEasing.easeOutElastic = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutElasticL(a, b, c, k)
};
i.tween.PennerEasing.easeOutElasticL = function (a, b, c, k, d, e) {
null == e && (e = - 0.123456);
null == d && (d = - 0.123456);
var f;
if (0 == a) return b;
if (1 == (a /= k)) return b + c;
- 0.123456 == e && (e = 0.3 * k);
- 0.123456 == d || d < Math.abs(c) ? (d = c, f = e / 4)  : f = e / (2 * Math.PI) * Math.asin(c / d);
return d * Math.pow(2, - 10 * a) * Math.sin((a * k - f) * 2 * Math.PI / e) + c + b
};
i.tween.PennerEasing.easeInOutElastic = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutElasticL(a, b, c, k)
};
i.tween.PennerEasing.easeInOutElasticL = function (a, b, c, k, d, e) {
null == e && (e = - 0.123456);
null == d && (d = - 0.123456);
var f;
if (0 ==
a) return b;
if (2 == (a /= k / 2)) return b + c;
- 0.123456 == e && (e = k * 0.3 * 1.5);
- 0.123456 == d || d < Math.abs(c) ? (d = c, f = e / 4)  : f = e / (2 * Math.PI) * Math.asin(c / d);
return 1 > a ? - 0.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * k - f) * 2 * Math.PI / e) + b : 0.5 * d * Math.pow(2, - 10 * (a -= 1)) * Math.sin((a * k - f) * 2 * Math.PI / e) + c + b
};
i.tween.PennerEasing.easeInBack = function (a, b, c, k) {
return i.tween.PennerEasing.easeInBackL(a, b, c, k)
};
i.tween.PennerEasing.easeInBackL = function (a, b, c, k, d) {
null == d && (d = - 0.123456);
- 0.123456 == d && (d = 1.70158);
return c * (a /= k) * a * ((d + 1) * a -
d) + b
};
i.tween.PennerEasing.easeInOutBack = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutBackL(a, b, c, k)
};
i.tween.PennerEasing.easeInOutBackL = function (a, b, c, k, d) {
null == d && (d = - 0.123456);
- 0.123456 == d && (d = 1.70158);
return 1 > (a /= k / 2) ? c / 2 * a * a * (((d *= 1.525) + 1) * a - d) + b : c / 2 * ((a -= 2) * a * (((d *= 1.525) + 1) * a + d) + 2) + b
};
i.tween.PennerEasing.easeOutBounce = function (a, b, c, k) {
return (a /= k) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
};
i.tween.PennerEasing.easeInBounce = function (a, b, c, k) {
return c - i.tween.PennerEasing.easeOutBounce(k - a, 0, c, k) + b
};
i.tween.PennerEasing.easeInOutBounce = function (a, b, c, k) {
return a < k / 2 ? 0.5 * i.tween.PennerEasing.easeInBounce(2 * a, 0, c, k) + b : 0.5 * i.tween.PennerEasing.easeOutBounce(2 * a - k, 0, c, k) + 0.5 * c + b
};
i.tween.PennerEasing.easeInCubic = function (a, b, c, k) {
return c * (a /= k) * a * a + b
};
i.tween.PennerEasing.easeOutCubic = function (a, b, c, k) {
return c * ((a = a / k - 1) * a * a + 1) + b
};
i.tween.PennerEasing.easeInOutCubic = function (a, b, c, k) {
return 1 > (a /= k / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
};
i.tween.PennerEasing.easeInQuart = function (a, b, c, k) {
return c * (a /= k) * a * a * a + b
};
i.tween.PennerEasing.easeOutQuart = function (a, b, c, k) {
return - c * ((a = a / k - 1) * a * a * a - 1) + b
};
i.tween.PennerEasing.easeInOutQuart = function (a, b, c, k) {
return 1 > (a /= k / 2) ? c / 2 * a * a * a * a + b : - c / 2 * ((a -= 2) * a * a * a - 2) + b
};
i.tween.PennerEasing.easeInQuint = function (a, b, c, k) {
return c * (a /= k) * a * a * a * a + b
};
i.tween.PennerEasing.easeOutQuint = function (a, b, c, k) {
return c * ((a = a / k - 1) * a * a * a * a + 1) +
b
};
i.tween.PennerEasing.easeInOutQuint = function (a, b, c, k) {
return 1 > (a /= k / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
};
i.tween.PennerEasing.easeInSine = function (a, b, c, k) {
return - c * Math.cos(a / k * (Math.PI / 2)) + c + b
};
i.tween.PennerEasing.easeOutSine = function (a, b, c, k) {
return c * Math.sin(a / k * (Math.PI / 2)) + b
};
i.tween.PennerEasing.easeInOutSine = function (a, b, c, k) {
return - c / 2 * (Math.cos(Math.PI * a / k) - 1) + b
};
i.tween.PennerEasing.easeInCirc = function (a, b, c, k) {
return - c * (Math.sqrt(1 - (a /= k) * a) - 1) + b
};
i.tween.PennerEasing.easeOutCirc = function (a, b, c, k) {
return c * Math.sqrt(1 - (a = a / k - 1) * a) + b
};
i.tween.PennerEasing.easeInOutCirc = function (a, b, c, k) {
return 1 > (a /= k / 2) ? - c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
};
i.tween.PennerManager = function () {
};
j['com.workinman.math.tween.PennerManager'] = i.tween.PennerManager;
i.tween.PennerManager.__name__ = [
'com',
'workinman',
'math',
'tween',
'PennerManager'
];
i.tween.PennerManager.getEaseFunction = function (a) {
switch (a) {
case i.tween.PennerManager.EASE_IN:
case i.tween.PennerManager.EASE_QUAD_IN:
return i.tween.PennerManager._tweenEaseIn;
case i.tween.PennerManager.EASE_OUT:
case i.tween.PennerManager.EASE_QUAD_OUT:
return i.tween.PennerManager._tweenEaseOut;
case i.tween.PennerManager.EASE:
case i.tween.PennerManager.EASE_QUAD:
return i.tween.PennerManager._tweenEaseBoth;
case i.tween.PennerManager.EASE_EXPO:
return i.tween.PennerManager._tweenExpoBoth;
case i.tween.PennerManager.EASE_EXPO_IN:
return i.tween.PennerManager._tweenExpoIn;
case i.tween.PennerManager.EASE_EXPO_OUT:
return i.tween.PennerManager._tweenExpoOut;
case i.tween.PennerManager.EASE_ELASTIC:
return i.tween.PennerManager._tweenElasticBoth;
case i.tween.PennerManager.EASE_ELASTIC_IN:
return i.tween.PennerManager._tweenElasticIn;
case i.tween.PennerManager.EASE_ELASTIC_OUT:
return i.tween.PennerManager._tweenElasticOut;
case i.tween.PennerManager.EASE_BUMP:
return i.tween.PennerManager._tweenBumpBoth;
case i.tween.PennerManager.EASE_BUMP_IN:
return i.tween.PennerManager._tweenBumpIn;
case i.tween.PennerManager.EASE_BUMP_OUT:
return i.tween.PennerManager._tweenBumpBoth;
case i.tween.PennerManager.EASE_BOUNCE:
return i.tween.PennerManager._tweenBounceBoth;
case i.tween.PennerManager.EASE_BOUNCE_IN:
return i.tween.PennerManager._tweenBounceIn;
case i.tween.PennerManager.EASE_BOUNCE_OUT:
return i.tween.PennerManager._tweenBounceOut;
case i.tween.PennerManager.EASE_CUBIC:
return i.tween.PennerManager._tweenCubicBoth;
case i.tween.PennerManager.EASE_CUBIC_IN:
return i.tween.PennerManager._tweenCubicIn;
case i.tween.PennerManager.EASE_CUBIC_OUT:
return i.tween.PennerManager._tweenCubicOut;
case i.tween.PennerManager.EASE_SPACE:
return i.tween.PennerManager._tweenSpaceBoth;
case i.tween.PennerManager.EASE_SPACE_IN:
return i.tween.PennerManager._tweenSpaceIn;
case i.tween.PennerManager.EASE_SPACE_OUT:
return i.tween.PennerManager._tweenSpaceOut;
case i.tween.PennerManager.EASE_BLAST:
return i.tween.PennerManager._tweenBlastBoth;
case i.tween.PennerManager.EASE_BLAST_IN:
return i.tween.PennerManager._tweenBlastIn;
case i.tween.PennerManager.EASE_BLAST_OUT:
return i.tween.PennerManager._tweenBlastOut;
case i.tween.PennerManager.EASE_WAVE:
return i.tween.PennerManager._tweenWaveBoth;
case i.tween.PennerManager.EASE_WAVE_IN:
return i.tween.PennerManager._tweenWaveIn;
case i.tween.PennerManager.EASE_WAVE_OUT:
return i.tween.PennerManager._tweenWaveOut;
case i.tween.PennerManager.EASE_CIRCLE:
return i.tween.PennerManager._tweenCircleBoth;
case i.tween.PennerManager.EASE_CIRCLE_IN:
return i.tween.PennerManager._tweenCircleIn;
case i.tween.PennerManager.EASE_CIRCLE_OUT:
return i.tween.PennerManager._tweenCircleOut;
case i.tween.PennerManager.EASE_LINEAR:
return i.tween.PennerManager._tweenLinear;
default:
return i.tween.PennerManager._tweenLinear
}
};
i.tween.PennerManager._tweenLinear = function (a, b, c, k) {
return a + c / k * b
};
i.tween.PennerManager._tweenEaseBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutQuad(c, a, b, k)
};
i.tween.PennerManager._tweenEaseIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInQuad(c, a, b, k)
};
i.tween.PennerManager._tweenEaseOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutQuad(c, a, b, k)
};
i.tween.PennerManager._tweenExpoBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutExpo(c, a, b, k)
};
i.tween.PennerManager._tweenExpoIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInExpo(c, a, b, k)
};
i.tween.PennerManager._tweenExpoOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutExpo(c, a, b, k)
};
i.tween.PennerManager._tweenElasticBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutElastic(c, a, b, k)
};
i.tween.PennerManager._tweenElasticIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInElastic(c, a, b, k)
};
i.tween.PennerManager._tweenElasticOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutElastic(c, a, b, k)
};
i.tween.PennerManager._tweenBumpBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutBack(c, a, b, k)
};
i.tween.PennerManager._tweenBumpIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInBack(c, a, b, k)
};
i.tween.PennerManager._tweenBounceBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutBounce(c, a, b, k)
};
i.tween.PennerManager._tweenBounceIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInBounce(c, a, b, k)
};
i.tween.PennerManager._tweenBounceOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutBounce(c, a, b, k)
};
i.tween.PennerManager._tweenCubicBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutCubic(c, a, b, k)
};
i.tween.PennerManager._tweenCubicIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInCubic(c, a, b, k)
};
i.tween.PennerManager._tweenCubicOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutCubic(c, a, b, k)
};
i.tween.PennerManager._tweenSpaceBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutQuart(c, a, b, k)
};
i.tween.PennerManager._tweenSpaceIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInQuart(c, a, b, k)
};
i.tween.PennerManager._tweenSpaceOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutQuart(c, a, b, k)
};
i.tween.PennerManager._tweenBlastBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutQuint(c, a, b, k)
};
i.tween.PennerManager._tweenBlastIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInQuint(c, a, b, k)
};
i.tween.PennerManager._tweenBlastOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutQuint(c, a, b, k)
};
i.tween.PennerManager._tweenWaveBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutSine(c, a, b, k)
};
i.tween.PennerManager._tweenWaveIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInSine(c, a, b, k)
};
i.tween.PennerManager._tweenWaveOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutSine(c, a, b, k)
};
i.tween.PennerManager._tweenCircleBoth = function (a, b, c, k) {
return i.tween.PennerEasing.easeInOutCirc(c, a, b, k)
};
i.tween.PennerManager._tweenCircleIn = function (a, b, c, k) {
return i.tween.PennerEasing.easeInCirc(c, a, b, k)
};
i.tween.PennerManager._tweenCircleOut = function (a, b, c, k) {
return i.tween.PennerEasing.easeOutCirc(c, a, b, k)
};
i.tween.WorkinTweener = function () {
this._targets = [
]
};
j['com.workinman.math.tween.WorkinTweener'] = i.tween.WorkinTweener;
i.tween.WorkinTweener.__name__ = [
'com',
'workinman',
'math',
'tween',
'WorkinTweener'
];
i.tween.WorkinTweener._getInstance = function () {
null == i.tween.WorkinTweener._instance && (i.tween.WorkinTweener._instance = new i.tween.WorkinTweener);
return i.tween.WorkinTweener._instance
};
i.tween.WorkinTweener.prototype = {
tween: function (a, b, c, k) {
null == k && (k = !1);
for (var b = new i.tween._WorkinTweener.WorkinTweenDef(a, b, c), c = !1, d = 0, e = this._targets; d < e.length; ) {
var f = e[d];
++d;
f._getTarget() == a && (c = !0, k && f.clearTweens(), f.addTween(b))
}
!1 == c && (a = new i.tween._WorkinTweener.WorkinTweenTracker(a), this._targets.push(a), a.addTween(b));
return b
},
update: function (a) {
for (var b = this._targets.length; 0 < b; ) b--,
this._targets[b].update(a),
this._targets[b]._getIsComplete() && (this._targets[b].dispose(), this._targets.splice(b, 1))
},
__class__: i.tween.WorkinTweener
};
i.tween._WorkinTweener = {
};
i.tween._WorkinTweener.WorkinTweenTracker = function (a) {
this._target = a;
this._tweens = [
];
this._isComplete = !1
};
j['com.workinman.math.tween._WorkinTweener.WorkinTweenTracker'] = i.tween._WorkinTweener.WorkinTweenTracker;
i.tween._WorkinTweener.WorkinTweenTracker.__name__ = 'com,workinman,math,tween,_WorkinTweener,WorkinTweenTracker'.split(',');
i.tween._WorkinTweener.WorkinTweenTracker.prototype = {
addTween: function (a) {
this._tweens.push(a)
},
clearTweens: function () {
for (var a = 0, b = this._tweens; a < b.length; ) {
var c = b[a];
++a;
c._setIsComplete(!0)
}
},
_setIsComplete: function (a) {
return this._isComplete = a
},
_getIsComplete: function () {
return this._isComplete
},
_getTarget: function () {
return this._target
},
update: function (a) {
for (var b = this._tweens.length; 0 < b; ) b--,
this._tweens[b].update(a),
this._tweens[b]._getIsComplete() && (this._tweens[b].dispose(), this._tweens.splice(b, 1));
1 > this._tweens.length && (this._isComplete = !0)
},
dispose: function () {
this._target = null;
for (var a = 0, b = this._tweens; a < b.length; ) {
var c = b[a];
++a;
c.dispose()
}
this._tweens = null
},
__class__: i.tween._WorkinTweener.WorkinTweenTracker
};
i.tween._WorkinTweener.WorkinTweenDef = function (a, b, c) {
this._target = a;
this._duration = b;
this._delay = 0;
this._dest = c;
this._easeFunction = i.tween.PennerManager.getEaseFunction(i.tween.PennerManager.EASE_LINEAR);
this._isComplete = !1;
this._completionArgs = this._completionHandler = null;
this._progress = 0;
this._origin = {
};
a = 0;
for (b = J.fields(this._dest); a < b.length; ) c = b[a],
++a,
null != J.field(this._target, c) && (this._origin[c] = J.field(this._target, c))
};
j['com.workinman.math.tween._WorkinTweener.WorkinTweenDef'] = i.tween._WorkinTweener.WorkinTweenDef;
i.tween._WorkinTweener.WorkinTweenDef.__name__ = 'com,workinman,math,tween,_WorkinTweener,WorkinTweenDef'.split(',');
i.tween._WorkinTweener.WorkinTweenDef.prototype = {
onComplete: function (a, b) {
null == b && (b = [
]);
this._completionHandler = a;
this._completionArgs = b;
return this
},
ease: function (a) {
this._easeFunction = i.tween.PennerManager.getEaseFunction(a);
return this
},
_setIsComplete: function (a) {
return this._isComplete = a
},
_getIsComplete: function () {
return this._isComplete
},
update: function (a) {
if (0 < this._delay && (this._delay -= a, 0 < this._delay)) return;
this._progress +=
a;
this._progress > this._duration && (this._progress = this._duration);
this.ratio = this._progress / this._duration;
for (var b = 0, c = J.fields(this._dest); b < c.length; ) {
var k = c[b];
++b;
a = J.field(this._dest, k) - J.field(this._origin, k);
this._target[k] = this._easeFunction(J.field(this._origin, k), a, this._progress, this._duration)
}
this._progress >= this._duration && (null != this._completionHandler && this._completionHandler.apply(this._completionHandler, this._completionArgs), this._isComplete = !0)
},
dispose: function () {
this._dest = this._target = this._origin = null
},
__class__: i.tween._WorkinTweener.WorkinTweenDef
};
Q = {
WMSharedObject: function () {
m.WMEventDispatcher.call(this);
this._data = {
};
this.sharedKey = ''
}
};
j['com.workinman.net.WMSharedObject'] = Q.WMSharedObject;
Q.WMSharedObject.__name__ = [
'com',
'workinman',
'net',
'WMSharedObject'
];
Q.WMSharedObject.getLocalStorage = function () {
return y.window.localStorage
};
Q.WMSharedObject.getLocal = function (a, b) {
var c = y.window.location.href;
null == b && (b = c);
c = new Q.WMSharedObject;
c.sharedKey = b + ':' + a;
var k = Q.WMSharedObject.getLocalStorage().getItem(c.sharedKey);
c._setData('' == k || null == k ? {
}
 : O.run(k));
return c
};
Q.WMSharedObject.__super__ = m.WMEventDispatcher;
Q.WMSharedObject.prototype = x(m.WMEventDispatcher.prototype, {
flush: function () {
var a = S.run(this._getData());
Q.WMSharedObject.getLocalStorage().setItem(this.sharedKey, a);
return Q.SharedObjectFlushedStatus.FLUSHED
},
_setData: function (a) {
return this._data = a
},
_getData: function () {
return this._data
},
dispose: function () {
this._data = null;
m.WMEventDispatcher.prototype.dispose.call(this)
},
__class__: Q.WMSharedObject
});
Q.SharedObjectFlushedStatus = function () {
};
j['com.workinman.net.SharedObjectFlushedStatus'] = Q.SharedObjectFlushedStatus;
Q.SharedObjectFlushedStatus.__name__ = [
'com',
'workinman',
'net',
'SharedObjectFlushedStatus'
];
r = {
ServiceAnalytics: function () {
}
};
j['com.workinman.services.ServiceAnalytics'] = r.ServiceAnalytics;
r.ServiceAnalytics.__name__ = [
'com',
'workinman',
'services',
'ServiceAnalytics'
];
r.ServiceAnalytics.onAnalyticsLoad = function () {
r.ServiceAnalytics._flagLoaded || (f.WorkinCloud.instance.log('[ServiceAnalytics](onAnalyticsLoad) Load complete'), r.ServiceAnalytics._flagLoaded = !0, T.delay(r.ServiceAnalytics._runQueuedCommands, 1000))
};
r.ServiceAnalytics.init = function (a, b) {
null == b && (b = '');
r.ServiceAnalytics._flagInitted = !0;
r.ServiceAnalytics._queuedCommands = [
];
'x' == a.toLowerCase() && (r.ServiceAnalytics.OPTION_ENABLE_TRACKING = !1);
r.ServiceAnalytics.OPTION_ENABLE_TRACKING && ('' == b && (b = r.ServiceAnalytics._DEFAULT_SHARED_OBJECT_ID), r.ServiceAnalytics._flagStarted = !1, f.WorkinCloud.instance.log('[ServiceAnalytics](initAnalytics)'), r.ServiceAnalytics._appId = a, r.ServiceAnalytics._sharedObjectId = b, r.ServiceAnalytics._sharedObjectData = f.WorkinCloud.instance.sharedObjectGetData(r.ServiceAnalytics._sharedObjectId), r.ServiceAnalytics._generateSessionID(), null == r.ServiceAnalytics._sharedObjectData.userID || 14 > q.string(r.ServiceAnalytics._sharedObjectData.userID).length ? (r.ServiceAnalytics._generateOfflineIDs(), r.ServiceAnalytics._sharedObjectData.userID = r.ServiceAnalytics._offlineUserId, r.ServiceAnalytics._sharedObjectData.trackingID = r.ServiceAnalytics._offlineTrackingId, f.WorkinCloud.instance.sharedObjectSetData(r.ServiceAnalytics._sharedObjectId, r.ServiceAnalytics._sharedObjectData))  : (r.ServiceAnalytics._offlineUserId = r.ServiceAnalytics._sharedObjectData.userID, r.ServiceAnalytics._offlineTrackingId = r.ServiceAnalytics._sharedObjectData.trackingID), eval('\t\t\t\t\n\t\t\t\twindow._pnConfig = new Array();\n\t\t\t\twindow._pnConfig[\'userId\'] = \'' + r.ServiceAnalytics._offlineUserId + '\';\n\t\t\t\t\n\t\t\t\tvar _pnAPIURL = document.location.protocol + \'//js.a.playnomics.net/v1/api?a=' +
r.ServiceAnalytics._appId + '\';\n\t\t\t\tvar _pnAPI = document.createElement(\'script\');\t\t\t\t\n\t\t\t\t_pnAPI.type = \'text/javascript\'; \n\t\t\t\t_pnAPI.async = false; \n\t\t\t\t_pnAPI.src = _pnAPIURL;\n\t\t\t\twindow.pnCallbackReference = _pnAPI;\t\t\t\t\n\t\t\t'), eval('window.pnCallbackReference').addEventListener('load', r.ServiceAnalytics.onAnalyticsLoad, !1), eval('document.body.appendChild(window.pnCallbackReference);'), r.ServiceAnalytics.sendUserInfo(), r.ServiceAnalytics.sendMilestone('custom1'))
};
r.ServiceAnalytics._runQueuedCommands = function () {
for (; 0 < r.ServiceAnalytics._queuedCommands.length; ) r.ServiceAnalytics.sendPlaynomicsEvent(r.ServiceAnalytics._queuedCommands[0].method, r.ServiceAnalytics._queuedCommands[0].params),
r.ServiceAnalytics._queuedCommands.shift()
};
r.ServiceAnalytics.start = function () {
};
r.ServiceAnalytics.sendUserInfo = function () {
r.ServiceAnalytics.sendPlaynomicsEvent('pnUserInfo', [
'update',
null,
null,
'',
'',
'html5'
])
};
r.ServiceAnalytics.sendMilestone = function (a) {
r.ServiceAnalytics.sendPlaynomicsEvent('pnMilestone', [
q.string(Math.floor(6012 + 999999999 * Math.random())),
a
])
};
r.ServiceAnalytics.sendPlaynomicsEvent = function (a, b) {
if (r.ServiceAnalytics.OPTION_ENABLE_TRACKING && r.ServiceAnalytics._flagInitted) if (r.ServiceAnalytics._flagLoaded) {
f.WorkinCloud.instance.log('[ServiceAnalytics](sendPlaynomicsEvent) ' + a);
var c,
k = '';
for (c = 0; c < b.length; ) k += '\'' + b[c] + '\'',
c++,
c < b.length && (k += ',');
eval(a + '(' + k + ')')
} else r.ServiceAnalytics._queuedCommands.push({
method: a,
params: b
})
};
r.ServiceAnalytics._generateSessionID = function () {
for (var a = '', b = 11; - 1 < b; ) a += Math.floor(10 * Math.random()),
b--;
r.ServiceAnalytics._sessionId = a
};
r.ServiceAnalytics._generateOfflineIDs = function () {
r.ServiceAnalytics._offlineUserId = '';
r.ServiceAnalytics._offlineTrackingId = '';
for (var a = 15; - 1 < a; ) {
if (0.66 > Math.random()) r.ServiceAnalytics._offlineUserId += q.string(Math.floor(10 * Math.random()));
 else switch (Math.floor(10 * Math.random())) {
case 0:
r.ServiceAnalytics._offlineUserId += 'a';
break;
case 1:
r.ServiceAnalytics._offlineUserId += 'b';
break;
case 2:
r.ServiceAnalytics._offlineUserId +=
'c';
break;
case 3:
r.ServiceAnalytics._offlineUserId += 'd';
break;
case 4:
r.ServiceAnalytics._offlineUserId += 'e';
break;
case 5:
r.ServiceAnalytics._offlineUserId += 'f';
break;
case 6:
r.ServiceAnalytics._offlineUserId += 'g';
break;
case 7:
r.ServiceAnalytics._offlineUserId += 'h';
break;
case 8:
r.ServiceAnalytics._offlineUserId += 'i';
break;
case 9:
r.ServiceAnalytics._offlineUserId += 'j';
break;
default:
r.ServiceAnalytics._offlineUserId += 'z'
}
a--
}
r.ServiceAnalytics._offlineTrackingId = '';
for (a = 15; - 1 < a; ) r.ServiceAnalytics._offlineTrackingId +=
Math.floor(10 * Math.random()),
a--
};
r.ServiceAnalytics.prototype = {
__class__: r.ServiceAnalytics
};
f = {
JSEmbedProxy: function () {
}
};
j['com.workinman.utils.JSEmbedProxy'] = f.JSEmbedProxy;
f.JSEmbedProxy.__name__ = [
'com',
'workinman',
'utils',
'JSEmbedProxy'
];
f.JSEmbedProxy.alertOn = function (a) {
f.JSEmbedProxy.callJSEmbedMethod('addAlert(\'' + a + '\', \'\')')
};
f.JSEmbedProxy.alertOff = function () {
f.JSEmbedProxy.callJSEmbedMethod('removeAlert(\'\')')
};
f.JSEmbedProxy.getExists = function () {
return f.JSEmbedProxy.callJSEmbedMethod('exists()')
};
f.JSEmbedProxy.getParameters = function () {
return f.JSEmbedProxy.callJSEmbedMethod('params()')
};
f.JSEmbedProxy.getAttributes = function () {
return f.JSEmbedProxy.callJSEmbedMethod('attr()')
};
f.JSEmbedProxy.getBase = function () {
return f.JSEmbedProxy.callJSEmbedMethod('baseUrl()')
};
f.JSEmbedProxy.getCanvasScale = function () {
return q.parseFloat(f.JSEmbedProxy.callJSEmbedMethod('canvasScale()'))
};
f.JSEmbedProxy.getCanvasWidth = function () {
return q.parseFloat(f.JSEmbedProxy.callJSEmbedMethod('canvasWidth()'))
};
f.JSEmbedProxy.getCanvasHeight = function () {
return q.parseFloat(f.JSEmbedProxy.callJSEmbedMethod('canvasHeight()'))
};
f.JSEmbedProxy.getIsPaused = function () {
return f.JSEmbedProxy.callJSEmbedMethod('isPaused()')
};
f.JSEmbedProxy.pause = function () {
f.JSEmbedProxy.callJSEmbedMethod('pause()')
};
f.JSEmbedProxy.unpause = function () {
f.JSEmbedProxy.callJSEmbedMethod('unpause()')
};
f.JSEmbedProxy.callJSEmbedMethod = function (a) {
try {
var b = eval('jsembed.' + a);
return null == b ? '' : b
} catch (c) {
}
return ''
};
f.JSEmbedProxy.prototype = {
__class__: f.JSEmbedProxy
};
f.WMAssetManager = function () {
this._LOADING_CHANCES = 3;
this._baseUrl = '';
this._assets = new I;
this._defs = new I;
this._flump = new I;
this._packs = new I;
this._chunks = new I;
this._packsLoaded = this._packsMax = this._loadingChances = 0
};
j['com.workinman.utils.WMAssetManager'] = f.WMAssetManager;
f.WMAssetManager.__name__ = [
'com',
'workinman',
'utils',
'WMAssetManager'
];
f.WMAssetManager.prototype = {
getFont: function (a) {
return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log('[WMAssetManager](getFont) no asset named ' + a + ' exists! Returning null.'), null)  : new l.Font(this._assets.get(a)._getPack(), a)
},
getLibrary: function (a) {
return !1 == this._flump.exists(a) ? (f.WorkinCloud.instance.log('[WMAssetManager](getLibrary) no library named ' + a + ' exists! Is it defined in config.xml?'), null)  : this._flump.get(a)
},
getSound: function (a) {
return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log('[AssetManager](getSound) no asset named ' + a + ' exists! Returning null.'), null)  : this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData()  : this._assets.get(a)._getPack().getSound(this._assets.get(a)._getPath(), !0)
},
getXML: function (a) {
if (!1 == this._assets.exists(a)) return f.WorkinCloud.instance.log('[WMAssetManager](getXML) no asset named ' + a + ' exists! Returning null.'),
null;
a = u.parse(this.getFile(a));
return new C.Fast(a.firstElement())
},
getFile: function (a) {
return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log('[WMAssetManager](getFile) no asset named ' + a + ' exists! Returning empty string.'), '')  : this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData()  : this._assets.get(a)._getPack().getFile(this._assets.get(a)._getPath(), !0)
},
getTexture: function (a) {
a = a.split('.') [0];
return !1 == this._assets.exists(a) ? (f.WorkinCloud.instance.log('[WMAssetManager](getTexture) no asset named ' + a + ' exists! Returning null.'), null)  : !0 == this._assets.get(a)._getConstructed() ? this._assets.get(a)._getData()  : this._assets.get(a)._getPack().getTexture(this._assets.get(a)._getPath(), !0)
},
hasAsset: function (a) {
return this._assets.exists(a)
},
_parseSpritesheet: function (a) {
for (var b = this.getXML(a + '.xml'), a = this.getTexture(a), c = '', k = new H.Rectangle(0, 0, 0, 0), d, b = b.nodes.resolve('SubTexture').iterator(); b.hasNext(); ) d = b.next(),
c = d.att.resolve('name').toString(),
k.x = q.parseFloat(d.att.resolve('x').toString()),
k.y = q.parseFloat(d.att.resolve('y').toString()),
k.width = q.parseFloat(d.att.resolve('width').toString()),
k.height = q.parseFloat(d.att.resolve('height').toString()),
d = D.createTexture(k.width | 0, k.height | 0),
d.get_graphics().drawSubImage(a, 0, 0, k.x | 0, k.y | 0, k.width | 0, k.height | 0),
this.addConstructedAsset(c, d)
},
_onAllLoadComplete: function () {
f.WorkinCloud.instance.log('[WMAssetManager](_onAllLoadComplete) all packs loaded!');
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEvent(P.ConstantsCloud.EVENT_FILES_LOADED))
},
addConstructedAsset: function (a, b) {
new f._WMAssetManager.AssetDef(a, this._assets, b)
},
addPack: function (a) {
for (var b = B.iter(a.get_manifest()._entries); b.hasNext(); ) {
var c = b.next();
new f._WMAssetManager.AssetDef(c.name, this._assets, a)
}
},
isPackLoaded: function (a) {
return this._packs.exists(a)
},
loadPack: function (a, b, c) {
null == c && (c = !0);
null == b && (b = '');
var k = this;
!1 == this._defs.exists(a) && f.WorkinCloud.instance.log('[WMAssetManager](loadPack) Can\'t load pack ' +
a + ' , define the pack in config.xml.');
f.WorkinCloud.instance.log('[WMAssetManager](loadPack) ' + a);
c && (this._loadingChances = this._LOADING_CHANCES, this._packsMax++);
c = z.Manifest.build(a);
'' != this._baseUrl && c.set_relativeBasePath(this._baseUrl);
c = D._platform.loadAssetPack(c);
c.error.connect(function (c) {
f.WorkinCloud.instance.log('[WMAssetManager](_onLoadingError) Loading failed with error: ' + c);
k._loadingChances--;
0 <= k._loadingChances ? T.delay(function () {
f.WorkinCloud.instance.log('[WMAssetManager](_onLoadingError) Retrying. With ' +
k._loadingChances + ' more chances.');
k.loadPack(a, b, !1)
}, 500)  : f.WorkinCloud.instance.log('[WMAssetManager](_onLoadingError) Loading attempts timed out.')
});
c.get(function (b) {
k.addPack(b);
k._packsLoaded++;
for (var c = 0, d = k._defs.get(a)._getFlump(); c < d.length; ) {
var e = d[c];
++c;
k._flump.set(e, new v.Library(b, e))
}
c = 0;
for (d = k._defs.get(a)._getTiles(); c < d.length; ) e = d[c],
++c,
k._parseSpritesheet(e);
k._packs.set(a, b);
k._packsLoaded >= k._packsMax && k._onAllLoadComplete()
})
},
addPackDef: function (a, b, c) {
null == b && (b = [
]);
null == c && (c = [
]);
this._defs.set(a, new f._WMAssetManager.PackDef(a, b, c))
},
_parseChunk: function (a, b) {
for (var c = [
], d = [
], e = b.nodes.resolve('chunk').iterator(); e.hasNext(); ) {
var h = e.next();
c.push(h.getInnerData().toString())
}
for (e = b.nodes.resolve('pack').iterator(); e.hasNext(); ) h = e.next(),
d.push(h.getInnerData().toString());
return new f._WMAssetManager.ChunkDef(a, d, c)
},
loadFolder: function (a) {
f.WorkinCloud.instance.log('[WMAssetManager](loadFolder) ' + a);
this.isPackLoaded(a) || (this.addPackDef(a), this.loadPack(a))
},
loadChunk: function (a) {
!1 == this._chunks.exists(a) && f.WorkinCloud.instance.log('[WMAssetManager](loadChunk) No chunk named ' + a + ' defined.');
for (var b = 0, c = this._chunks.get(a)._getChunks(); b < c.length; ) {
var d = c[b];
++b;
this.loadChunk(d)
}
b = 0;
for (c = this._chunks.get(a)._getPacks(); b < c.length; ) d = c[b],
++b,
!1 == this.isPackLoaded(d) && this.loadPack(d)
},
isChunkLoaded: function (a) {
if (!1 == this._chunks.exists(a)) return f.WorkinCloud.instance.log('[WMAssetManager](isChunkLoaded) No chunk named ' + a + ' defined.'),
!1;
for (var b = 0, a = this._chunks.get(a)._getPacks(); b < a.length; ) {
var c = a[b];
++b;
if (!1 == this.isPackLoaded(c)) return !1
}
return !0
},
addChunk: function (a, b) {
var c = this._parseChunk(a, b);
this._chunks.set(a, c)
},
_setBaseUrl: function (a) {
this._baseUrl = a;
f.WorkinCloud.instance.log('[WMAssetManager](setBaseUrl) Base Url set to \'' + a + '\'');
return this._baseUrl
},
_getBaseUrl: function () {
return this._baseUrl
},
__class__: f.WMAssetManager
};
f._WMAssetManager = {
};
f._WMAssetManager.AssetDef = function (a, b, c) {
this._path = a;
a = a.split('/');
this._id = a[a.length - 1].split('.') [0];
this._constructed = !1;
this._data = this._pack = null;
w.__instanceof(c, z.AssetPack) ? this._pack = c : (this._constructed = !0, this._data = c);
this._hash = b;
this._hash.set(this._path, this);
this._hash.set(this._id, this)
};
j['com.workinman.utils._WMAssetManager.AssetDef'] = f._WMAssetManager.AssetDef;
f._WMAssetManager.AssetDef.__name__ = [
'com',
'workinman',
'utils',
'_WMAssetManager',
'AssetDef'
];
f._WMAssetManager.AssetDef.prototype = {
_getPack: function () {
return this._pack
},
_getPath: function () {
return this._path
},
_getData: function () {
return this._data
},
_getConstructed: function () {
return this._constructed
},
__class__: f._WMAssetManager.AssetDef
};
f._WMAssetManager.PackDef = function (a, b, c) {
this._id = a;
this._flump = b;
this._tiles = c
};
j['com.workinman.utils._WMAssetManager.PackDef'] = f._WMAssetManager.PackDef;
f._WMAssetManager.PackDef.__name__ = [
'com',
'workinman',
'utils',
'_WMAssetManager',
'PackDef'
];
f._WMAssetManager.PackDef.prototype = {
_getTiles: function () {
return this._tiles
},
_getFlump: function () {
return this._flump
},
__class__: f._WMAssetManager.PackDef
};
f._WMAssetManager.ChunkDef = function (a, b, c) {
this._id = a;
this._packs = b;
this._chunks = c
};
j['com.workinman.utils._WMAssetManager.ChunkDef'] = f._WMAssetManager.ChunkDef;
f._WMAssetManager.ChunkDef.__name__ = [
'com',
'workinman',
'utils',
'_WMAssetManager',
'ChunkDef'
];
f._WMAssetManager.ChunkDef.prototype = {
_getChunks: function () {
return this._chunks
},
_getPacks: function () {
return this._packs
},
__class__: f._WMAssetManager.ChunkDef
};
f.WMInput = function () {
this._multiTouchAvail = !1;
this._keycodes = new I;
this._keydown = new I;
this._touchList = new I;
this._touchRemoval = [
];
this._keydown.set('input_click', !1);
this._scale = 1;
this._offset = new i.WorkinPoint;
this._pointer = new f.WMPointer('', 0)
};
j['com.workinman.utils.WMInput'] = f.WMInput;
f.WMInput.__name__ = [
'com',
'workinman',
'utils',
'WMInput'
];
f.WMInput.prototype = {
_onPointerUp: function (a) {
this._keydown.set('input_click', !1);
var b = a.viewX / this._scale,
a = a.viewY / this._scale,
b = b + this._offset.x,
a = a + this._offset.y;
this._pointer.end(b, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(0, 'input_click', b, a))
},
_onPointerMove: function (a) {
var b = a.viewX / this._scale,
a = a.viewY / this._scale,
b = b + this._offset.x,
a = a + this._offset.y;
this._pointer.move(b, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(2, 'input_click', b, a))
},
_onPointerDown: function (a) {
this._keydown.set('input_click', !0);
var b = a.viewX / this._scale,
a = a.viewY / this._scale,
b = b + this._offset.x,
a = a + this._offset.y;
this._pointer.begin(b, a);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(1, 'input_click', b, a))
},
_onTouchUp: function (a) {
var b = a.viewX / this._scale,
c = a.viewY / this._scale,
b = b + this._offset.x,
c = c + this._offset.y;
this._touchList.get(q.string(a.id)).end(b, c);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(0, 'input_click', b, c))
},
_onTouchMove: function (a) {
var b = a.viewX / this._scale,
c = a.viewY / this._scale,
b = b + this._offset.x,
c = c + this._offset.y;
this._touchList.get(q.string(a.id)).move(b, c);
f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(2, 'input_click', b, c))
},
_onTouchDown: function (a) {
var b = 0,
c = !1;
do for (var c = !0, d = this._touchList.iterator(); d.hasNext(); ) {
var e = d.next();
if (b == e._getIndex()) {
b++;
c = !1;
break
}
} while (!1 == c);
c = new f.WMPointer(q.string(a.id), b);
this._touchList.set(c._getId(), c);
d = a.viewX / this._scale;
a = a.viewY / this._scale;
d += this._offset.x;
a += this._offset.y;
c.begin(d, a);
0 < b && f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(1, 'input_click', d, a))
},
_onKeyUp: function (a) {
for (var b, c = this._keycodes.keys(); c.hasNext(); ) {
var d = c.next();
b = this._keycodes.get(d);
for (var e = 0; e < b.length; ) {
var h = b[e];
++e;
h == a.key && (this._keydown.set(d, !1), f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(0, d, 0, 0)))
}
}
},
_onKeyDown: function (a) {
for (var b, c = this._keycodes.keys(); c.hasNext(); ) {
var d = c.next();
b = this._keycodes.get(d);
for (var e = 0; e < b.length; ) {
var h = b[e];
++e;
h == a.key && (this._keydown.set(d, !0), f.WorkinCloud.instance.getDispatcher().dispatchEvent(new m.WMEventInput(1, d, 0, 0)))
}
}
},
getInput: function (a) {
return this._keydown.get(a)
},
registerInput: function (a, b) {
this._keycodes.set(a, b);
this._keydown.set(a, !1)
},
prime: function () {
this._multiTouchAvail = D._platform.getTouch().get_supported();
D._platform.getKeyboard().down.connect(s(this, this._onKeyDown));
D._platform.getKeyboard().up.connect(s(this, this._onKeyUp));
this._multiTouchAvail && (D._platform.getTouch().down.connect(s(this, this._onTouchDown)), D._platform.getTouch().move.connect(s(this, this._onTouchMove)), D._platform.getTouch().up.connect(s(this, this._onTouchUp)));
D._platform.getPointer().down.connect(s(this, this._onPointerDown));
D._platform.getPointer().move.connect(s(this, this._onPointerMove));
D._platform.getPointer().up.connect(s(this, this._onPointerUp))
},
_getMultiTouch: function () {
return this._touchList
},
_getPointer: function () {
return this._pointer
},
_setOffset: function (a) {
return this._offset = a
},
_getOffset: function () {
return this._offset
},
_setScale: function (a) {
this._scale = a;
0 == this._scale && (this._scale = 0.01);
return this._scale
},
_getScale: function () {
return this._scale
},
update: function (a) {
this._pointer.update(a);
for (var b = this._touchList.iterator(); b.hasNext(); ) {
var c = b.next();
c.update(a);
0 == c._getPhase() && this._touchRemoval.push(c._getId())
}
a = 0;
for (b = this._touchRemoval; a < b.length; ) c = b[a],
++a,
this._touchList.get(c).dispose(),
this._touchList.remove(c);
for (; 0 < this._touchRemoval.length; ) this._touchRemoval.pop()
},
__class__: f.WMInput
};
f.WMPointer = function (a, b) {
this.SWIPE_DOWN = 4;
this.SWIPE_UP = 3;
this.SWIPE_RIGHT = 2;
this.SWIPE_LEFT = 1;
this.SWIPE_NONE = 0;
this._resetDeltaLine = !0;
this._timer = f.WMPointer._DELTA_TIMEOUT;
this._id = a;
this._index = b;
this._origin = new i.WorkinPoint(0, 0);
this._current = new i.WorkinPoint(0, 0);
this._last = new i.WorkinPoint(0, 0);
this._delta = new i.WorkinPoint(0, 0);
this._line = new i.WorkinLine(new i.WorkinPoint(0, 0), new i.WorkinPoint(0, 0));
this._deltaLine = this._line.copy();
this._camera = new i.WorkinCamera(0, 0);
this._phase = m.WMEventInput.PHASE_UP;
this._swipe = this.SWIPE_NONE;
this._consumed = !1
};
j['com.workinman.utils.WMPointer'] = f.WMPointer;
f.WMPointer.__name__ = [
'com',
'workinman',
'utils',
'WMPointer'
];
f.WMPointer.prototype = {
update: function (a) {
this._resetDeltaLine = !0;
this._timer -= a;
0 > this._timer && (this._timer = f.WMPointer._DELTA_TIMEOUT, this._deltaLine.originToPoint(this._current))
},
_updateInfo: function (a, b) {
this._last.toPoint(this._current);
this._current.to(a, b);
this._current.x += this._camera._getPos().x - this._camera._getScreenCenterX();
this._current.y += this._camera._getPos().y - this._camera._getScreenCenterY();
this._delta.toPoint(this._current);
this._delta.subtractPoint(this._last)
},
end: function (a, b) {
this._phase = m.WMEventInput.PHASE_UP;
this._updateInfo(a, b);
this._line.endToPoint(this._current);
this._swipe = this.SWIPE_NONE;
this._consumed = !1
},
move: function (a, b) {
this._updateInfo(a, b);
if (!1 != f.WorkinCloud.instance.getInput().getInput('input_click')) {
this._phase = m.WMEventInput.PHASE_MOVE;
if (!1 == this._consumed) {
var c = this._origin.x - this._current.x,
d = this._origin.y - this._current.y;
this._swipe = Math.abs(c) >= f.WMPointer._DELTA_ALLOWANCE && Math.abs(d) < f.WMPointer._DELTA_ALLOWANCE ? 0 < c ? this.SWIPE_LEFT : this.SWIPE_RIGHT :
Math.abs(d) >= f.WMPointer._DELTA_ALLOWANCE && Math.abs(c) < f.WMPointer._DELTA_ALLOWANCE ? 0 < d ? this.SWIPE_UP : this.SWIPE_DOWN : this.SWIPE_NONE
} else this._swipe = this.SWIPE_NONE;
this._line.endToPoint(this._current)
}
},
begin: function (a, b) {
this._origin.to(a, b);
this._origin.x += this._camera._getPos().x - this._camera._getScreenCenterX();
this._origin.y += this._camera._getPos().y - this._camera._getScreenCenterY();
this._current.toPoint(this._origin);
this._last.toPoint(this._origin);
this._delta.to(0, 0);
this._line.to(this._origin, this._current);
this._deltaLine.to(this._origin, this._current);
this._consumed = !1;
this._phase = m.WMEventInput.PHASE_DOWN;
this._swipe = this.SWIPE_NONE
},
_getDeltaLine: function () {
if (!1 == this._resetDeltaLine) return this._deltaLine;
this._deltaLine.endToPoint(this._current);
this._resetDeltaLine = !1;
return this._deltaLine
},
_setIndex: function (a) {
return this._index = a
},
_getIndex: function () {
return this._index
},
_getId: function () {
return this._id
},
_setConsumed: function (a) {
return this._consumed = a
},
_getConsumed: function () {
return this._consumed
},
_getSwipe: function () {
return this._swipe
},
_getLine: function () {
return this._line
},
_getDeltaPos: function () {
return this._delta
},
_getLastPos: function () {
return this._last
},
_getCurrentPos: function () {
return this._current
},
_getOriginPos: function () {
return this._origin
},
_getPhase: function () {
return this._phase
},
dispose: function () {
this._delta = this._last = this._current = this._origin = null;
this._line.dispose();
this._line = null;
this._deltaLine.dispose();
this._camera = this._deltaLine = null
},
__class__: f.WMPointer
};
f.WMLocalize = function () {
};
j['com.workinman.utils.WMLocalize'] = f.WMLocalize;
f.WMLocalize.__name__ = [
'com',
'workinman',
'utils',
'WMLocalize'
];
f.WMLocalize.prototype = {
getData: function (a, b) {
null == b && (b = '');
'' == b && (b = P.ConstantsCloud.LOCALIZATION_XML_PATH + 'translation_' + f.WorkinCloud.instance.getString(P.ConstantsCloud.STRING_REGION_ID) + '.xml');
for (var c = f.WorkinCloud.instance.getAssets().getXML(b).nodes.resolve('string').iterator(); c.hasNext(); ) {
var d = c.next();
if (d.att.resolve('id') == a) return new f.WMLocalizedData(d.att.resolve('id'), d.getInnerData(), d.att.resolve('fontName'), q.parseFloat(d.att.resolve('fontScale')), q.parseFloat(d.att.resolve('offsetX')), q.parseFloat(d.att.resolve('offsetX')))
}
f.WorkinCloud.instance.log('[WMLocalize] ERROR: No localization data for : ' + a);
return new f.WMLocalizedData(a, '', '', 1, 0, 0)
},
__class__: f.WMLocalize
};
f.WMLocalizedData = function (a, b, c, d, e, f) {
this._id = a;
this._string = b;
this._fontName = c;
this._scale = d;
this._offsetX = e;
this._offsetY = f
};
j['com.workinman.utils.WMLocalizedData'] = f.WMLocalizedData;
f.WMLocalizedData.__name__ = [
'com',
'workinman',
'utils',
'WMLocalizedData'
];
f.WMLocalizedData.prototype = {
_getOffsetY: function () {
return this._offsetY
},
_getOffsetX: function () {
return this._offsetX
},
_getScale: function () {
return this._scale
},
_getFontName: function () {
return this._fontName
},
_getString: function () {
return this._string
},
_getId: function () {
return this._id
},
__class__: f.WMLocalizedData
};
f.WMSound = function () {
this._musicId = '';
this._musicGain = 1;
this._musicPlaying = null;
this._isMuted = !1;
this._mixer = new G.Mixer;
this._sounds = [
]
};
j['com.workinman.utils.WMSound'] = f.WMSound;
f.WMSound.__name__ = [
'com',
'workinman',
'utils',
'WMSound'
];
f.WMSound.prototype = {
update: function () {
},
_muteMusic: function (a) {
'' != this._musicId && (a ? this._musicPlaying = null : (this._musicPlaying = a = new f._WMSound.SoundDef(this._musicId, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(this._musicId), 1), !0), a.playSound(this._musicGain)))
},
playMusic: function (a, b) {
null == b && (b = 1);
if (this._musicId != a && (this._musicId = a, this._musicGain = b, !(this._isMuted || '' == a))) {
null != this._musicPlaying && this._musicPlaying.dispose();
var c = new f._WMSound.SoundDef(a, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(this._musicId), 1), !0);
this._musicPlaying = c;
c.playSound(b)
}
},
playSound: function (a, b) {
null == b && (b = 1);
if (!this._isMuted) {
for (var c = 0; c < this._sounds.length; ) {
if (this._sounds[c].id == a) {
this._sounds[c].playSound(b);
return
}
c++
}
c = new f._WMSound.SoundDef(a, this._mixer.newSound(f.WorkinCloud.instance.getAssets().getSound(a)), !1);
this._sounds.push(c);
c.playSound(b)
}
},
setMute: function (a) {
if (a && !1 == this._isMuted) {
this._isMuted = !0;
for (this._mixer.stopAll(); 0 < this._sounds.length; ) this._sounds.splice(0, 1);
this._muteMusic(this._isMuted)
} else !1 == a && this._isMuted && (this._isMuted = !1, this._muteMusic(this._isMuted))
},
getMute: function () {
return this._isMuted
},
__class__: f.WMSound
};
f._WMSound = {
};
f._WMSound.SoundDef = function (a, b, c) {
null == c && (c = !1);
this.id = a;
this.isMusic = c;
this._flagPlayed = this._flagHasSound = !1;
this._sound = b
};
j['com.workinman.utils._WMSound.SoundDef'] = f._WMSound.SoundDef;
f._WMSound.SoundDef.__name__ = [
'com',
'workinman',
'utils',
'_WMSound',
'SoundDef'
];
f._WMSound.SoundDef.prototype = {
playSound: function (a) {
null == a && (a = 1);
this._playback = this.isMusic ? this._sound.loop(a)  : this._sound.play(a)
},
_setPlayback: function (a) {
return this._playback = a
},
_getPlayback: function () {
return this._playback
},
dispose: function () {
this._playback.dispose();
this._playback = null
},
__class__: f._WMSound.SoundDef
};
G = {
Mixer: function () {
this._sounds = [
]
}
};
j['flambe.sound.Mixer'] = G.Mixer;
G.Mixer.__name__ = [
'flambe',
'sound',
'Mixer'
];
G.Mixer.__super__ = M;
G.Mixer.prototype = x(M.prototype, {
onRemoved: function () {
this.stopAll();
this._sounds = [
]
},
stopAll: function () {
for (var a = 0, b = this._sounds; a < b.length; ) {
var c = b[a];
++a;
c.dispose()
}
},
newSound: function (a, b) {
null == b && (b = 2147483647);
var c = new G._Mixer.MixerSound(a, b);
this._sounds.push(c);
return c
},
get_name: function () {
return 'Mixer_2'
},
__class__: G.Mixer
});
f.WorkinCloud = function () {
this._values = new I;
this._defaults = new I;
this._localize = new f.WMLocalize;
this._dispatcher = new m.WMEventDispatcher;
this._input = new f.WMInput;
this._assets = new f.WMAssetManager;
this._sound = new f.WMSound
};
j['com.workinman.utils.WorkinCloud'] = f.WorkinCloud;
f.WorkinCloud.__name__ = [
'com',
'workinman',
'utils',
'WorkinCloud'
];
f.WorkinCloud.prototype = {
_updateDisplays: function (a) {
this._dispatcher.dispatchEvent(new m.WMEventData(o.Display.EVENT_UPDATE_DISPLAY, {
valueID: a
}))
},
sharedObjectSetData: function (a, b) {
var c = Q.WMSharedObject.getLocal(a);
c._setData(b);
c.flush();
c.dispose()
},
sharedObjectGetData: function (a) {
var a = Q.WMSharedObject.getLocal(a),
b = a._getData();
a.dispose();
return b
},
resetValue: function (a) {
this._values.set(a, this._defaults.get(a));
this._updateDisplays(a)
},
modifyValue: function (a, b) {
null == b && (b = 1);
this._values.set(a, this.getFloat(a) + b);
this._updateDisplays(a);
return this.getFloat(a)
},
setValue: function (a, b) {
this._values.set(a, b);
!1 == this._defaults.exists(a) && this.setDefault(a, b);
this._updateDisplays(a)
},
getValue: function (a) {
return this._values.get(a)
},
setDefault: function (a, b) {
this._defaults.set(a, b);
this.resetValue(a)
},
getString: function (a) {
return this._values.get(a)
},
setString: function (a, b) {
this.setValue(a, b)
},
getInt: function (a) {
return this._values.get(a)
},
modifyInt: function (a, b) {
return Math.floor(this.modifyValue(a, b))
},
setInt: function (a, b) {
this.setValue(a, b)
},
getFloat: function (a) {
return this._values.get(a)
},
modifyFloat: function (a, b) {
return this.modifyValue(a, b)
},
setFloat: function (a, b) {
this.setValue(a, b)
},
getBool: function (a) {
return this._values.get(a)
},
setBool: function (a, b) {
this.setValue(a, b)
},
_getSound: function () {
return this._sound
},
getAssets: function () {
return this._assets
},
getInput: function () {
return this._input
},
getDispatcher: function () {
return this._dispatcher
},
_getLocalize: function () {
return this._localize
},
log: function () {
null
},
__class__: f.WorkinCloud
};
f.WorkinUtils = function () {
};
j['com.workinman.utils.WorkinUtils'] = f.WorkinUtils;
f.WorkinUtils.__name__ = [
'com',
'workinman',
'utils',
'WorkinUtils'
];
f.WorkinUtils.getRandom = function (a, b, c) {
null == c && (c = !0);
var d = Math.random();
1 == d && (d = 0.99);
return c ? a + Math.floor(d * (b + 1 - a))  : a + d * (b - a)
};
L = function () {
this.parent = this.firstChild = this.next = this.firstComponent = null;
this._compMap = {
}
};
j['flambe.Entity'] = L;
L.__name__ = [
'flambe',
'Entity'
];
L.__interfaces__ = [
n.Disposable
];
L.prototype = {
dispose: function () {
for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent; ) this.firstComponent.dispose();
this.disposeChildren();
this.onDispose()
},
disposeChildren: function () {
for (; null != this.firstChild; ) this.firstChild.dispose()
},
onDispose: function () {
},
onRemoved: function () {
},
onAdded: function () {
},
removeChild: function (a) {
for (var b = null, c = this.firstChild; null != c; ) {
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
addChild: function (a, b) {
null == b && (b = !0);
null != a.parent && a.parent.removeChild(a);
a.parent = this;
if (b) {
for (var c = null, d = this.firstChild; null != d; ) c = d,
d = d.next;
null != c ? c.next = a : this.firstChild = a
} else a.next = this.firstChild,
this.firstChild = a;
a.onAdded();
return this
},
remove: function (a) {
for (var b = null, c = this.firstComponent; null != c; ) {
var d = c.next;
if (c == a) {
null == b ? this.firstComponent = d : b._internal_init(this, d);
delete this._compMap[c.get_name()];
c.onRemoved();
c._internal_init(null, null);
break
}
b = c;
c = d
}
},
add: function (a) {
var b = a.get_name(),
c = this._compMap[b];
null != c && this.remove(c);
this._compMap[b] = a;
b = null;
for (c = this.firstComponent; null != c; ) b = c,
c = c.next;
null != b ? b.next = a : this.firstComponent = a;
a._internal_init(this, null);
a.onAdded();
return this
},
__class__: L
};
n.PackageLog = function () {
};
j['flambe.util.PackageLog'] = n.PackageLog;
n.PackageLog.__name__ = [
'flambe',
'util',
'PackageLog'
];
h = {
Platform: function () {
}
};
j['flambe.platform.Platform'] = h.Platform;
h.Platform.__name__ = [
'flambe',
'platform',
'Platform'
];
h.Platform.prototype = {
__class__: h.Platform
};
h.html = {
};
h.html.HtmlPlatform = function () {
};
j['flambe.platform.html.HtmlPlatform'] = h.html.HtmlPlatform;
h.html.HtmlPlatform.__name__ = [
'flambe',
'platform',
'html',
'HtmlPlatform'
];
h.html.HtmlPlatform.__interfaces__ = [
h.Platform
];
h.html.HtmlPlatform.prototype = {
getY: function (a, b) {
return this._stage.scaleFactor * (a.clientY - b.top)
},
getX: function (a, b) {
return this._stage.scaleFactor * (a.clientX - b.left)
},
getTempGraphics: function () {
return this._tempGraphics
},
getTempCanvas: function () {
return this._tempCanvas
},
getRenderer: function () {
return this._renderer
},
getExternal: function () {
null == this._external && (this._external = new h.html.HtmlExternal);
return this._external
},
getWeb: function () {
null == this._web && (this._web = new h.html.HtmlWeb(this._container));
return this._web
},
getKeyboard: function () {
return this._keyboard
},
getTouch: function () {
return this._touch
},
getMouse: function () {
return this._mouse
},
getPointer: function () {
return this._pointer
},
update: function (a) {
var b = (a - this._lastUpdate) / 1000;
this._lastUpdate = a;
this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer))
},
getTime: function () {
return Date.now() / 1000
},
createLogHandler: function () {
return null
},
getLocale: function () {
return y.window.navigator.language
},
getStorage: function () {
if (null == this._storage) {
var a = null;
try {
a = y.window.localStorage
} catch (b) {
}
this._storage = null != a ? new h.html.HtmlStorage(a)  : new h.DummyStorage
}
return this._storage
},
getStage: function () {
return this._stage
},
loadAssetPack: function (a) {
return (new h.html.HtmlAssetPackLoader(this, a)).promise
},
init: function () {
var a = this,
b = null;
try {
b = y.window.flambe.canvas
} catch (c) {
}
b.setAttribute('tabindex', '0');
b.style.outlineStyle = 'none';
b.setAttribute('moz-opaque', 'true');
this._stage = new h.html.HtmlStage(b);
this._pointer = new h.BasicPointer;
this._mouse = new h.html.HtmlMouse(this._pointer, b);
this._keyboard = new h.BasicKeyboard;
this._tempCanvas = h.html.HtmlUtil.createCanvas(b);
this._tempGraphics = new h.html.CanvasGraphics(this._tempCanvas);
this._renderer = new h.html.CanvasRenderer(b);
D.hasGPU.set__(!0);
this.mainLoop = new h.MainLoop;
this._container = b.parentNode;
this._container.style.overflow = 'hidden';
this._container.style.position = 'relative';
this._container.style.msTouchAction = 'none';
var d = 0,
e = function (c) {
if (!(1000 > c.timeStamp - d)) {
var e = b.getBoundingClientRect(),
f = a.getX(c, e),
e = a.getY(c, e);
switch (c.type) {
case 'mousedown':
c.target ==
b && (c.preventDefault(), a._mouse.submitDown(f, e, c.button), c.target.focus());
break;
case 'mousemove':
a._mouse.submitMove(f, e);
break;
case 'mouseup':
a._mouse.submitUp(f, e, c.button);
break;
case 'mousewheel':
case 'DOMMouseScroll':
a._mouse.submitScroll(f, e, 'mousewheel' == c.type ? c.wheelDelta / 40 : - c.detail) && c.preventDefault()
}
}
};
window.addEventListener('mousedown', e, !1);
window.addEventListener('mousemove', e, !1);
window.addEventListener('mouseup', e, !1);
b.addEventListener('mousewheel', e, !1);
b.addEventListener('DOMMouseScroll', e, !1);
if ('ontouchstart' in window) {
var f = new h.BasicTouch(this._pointer);
this._touch = f;
e = function (b) {
var c = b.changedTouches,
e = b.target.getBoundingClientRect();
d = b.timeStamp;
switch (b.type) {
case 'touchstart':
b.preventDefault();
h.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && h.html.HtmlUtil.hideMobileBrowser();
for (b = 0; b < c.length; ) {
var g = c[b];
++b;
var i = a.getX(g, e),
ea = a.getY(g, e);
f.submitDown(g.identifier | 0, i, ea)
}
break;
case 'touchmove':
b.preventDefault();
for (b = 0; b < c.length; ) g = c[b],
++b,
i = a.getX(g, e),
ea = a.getY(g, e),
f.submitMove(g.identifier | 0, i, ea);
break;
case 'touchend':
case 'touchcancel':
for (b = 0; b < c.length; ) g = c[b],
++b,
i = a.getX(g, e),
ea = a.getY(g, e),
f.submitUp(g.identifier | 0, i, ea)
}
};
b.addEventListener('touchstart', e, !1);
b.addEventListener('touchmove', e, !1);
b.addEventListener('touchend', e, !1);
b.addEventListener('touchcancel', e, !1)
} else this._touch = new h.DummyTouch;
e = function (b) {
switch (b.type) {
case 'keydown':
a._keyboard.submitDown(b.keyCode) && b.preventDefault();
break;
case 'keyup':
a._keyboard.submitUp(b.keyCode)
}
};
b.addEventListener('keydown', e, !1);
b.addEventListener('keyup', e, !1);
var g = y.window.onerror;
y.window.onerror = function (a, b, c) {
D.uncaughtError.emit1(a);
return null != g ? g(a, b, c)  : !1
};
var i = h.html.HtmlUtil.loadExtension('hidden', y.document);
null != i.value && (e = function () {
D.hidden.set__(J.field(y.document, i.field))
}, e(), y.document.addEventListener(i.prefix + 'visibilitychange', e, !1), D.hidden.get_changed().connect(function (b) {
b || (a._skipFrame = !0)
}));
this._lastUpdate = Date.now();
this._skipFrame = !1;
var l = h.html.HtmlUtil.loadExtension('requestAnimationFrame').value;
if (null != l) {
var j = y.window.performance,
m = null != j && h.html.HtmlUtil.polyfill('now', j);
m ? this._lastUpdate = j.now()  : null;
var n = null,
n = function (c) {
a.update(m ? j.now()  : c);
l(n, b)
};
l(n, b)
} else y.window.setInterval(function () {
a.update(Date.now())
}, 1000 / 60)
},
__class__: h.html.HtmlPlatform
};
n.Value = function (a, b) {
this._value = a;
null != b && (this._changed = new n.Signal2(b))
};
j['flambe.util.Value'] = n.Value;
n.Value.__name__ = [
'flambe',
'util',
'Value'
];
n.Value.prototype = {
get_changed: function () {
null == this._changed && (this._changed = new n.Signal2);
return this._changed
},
set__: function (a) {
var b = this._value;
a != b && (this._value = a, null != this._changed && this._changed.emit2(a, b));
return a
},
__class__: n.Value
};
n.SignalConnection = function (a, b) {
this._internal_next = null;
this._signal = a;
this._internal_listener = b;
this.stayInList = !0
};
j['flambe.util.SignalConnection'] = n.SignalConnection;
n.SignalConnection.__name__ = [
'flambe',
'util',
'SignalConnection'
];
n.SignalConnection.__interfaces__ = [
n.Disposable
];
n.SignalConnection.prototype = {
dispose: function () {
null !=
this._signal && (this._signal._internal_disconnect(this), this._signal = null)
},
once: function () {
this.stayInList = !1;
return this
},
__class__: n.SignalConnection
};
n.SignalBase = function (a) {
this._head = null != a ? new n.SignalConnection(this, a)  : null;
this._deferredTasks = null
};
j['flambe.util.SignalBase'] = n.SignalBase;
n.SignalBase.__name__ = [
'flambe',
'util',
'SignalBase'
];
n.SignalBase.prototype = {
listRemove: function (a) {
for (var b = null, c = this._head; null != c; ) {
if (c == a) {
a = c._internal_next;
null == b ? this._head = a : b._internal_next = a;
break
}
b = c;
c = c._internal_next
}
},
listAdd: function (a, b) {
if (b) a._internal_next = this._head,
this._head = a;
 else {
for (var c = null, d = this._head; null != d; ) c = d,
d = d._internal_next;
null != c ? c._internal_next = a : this._head = a
}
},
didEmit: function (a) {
for (this._head = a; null != this._deferredTasks; ) this._deferredTasks.fn(),
this._deferredTasks = this._deferredTasks.next
},
willEmit: function () {
var a = this._head;
this._head = n.SignalBase.DISPATCHING_SENTINEL;
return a
},
defer: function (a) {
for (var b = null, c = this._deferredTasks; null != c; ) b = c,
c = c.next;
a = new n._SignalBase.Task(a);
null != b ? b.next = a : this._deferredTasks = a
},
emit2: function (a, b) {
for (var c = this.willEmit(), d = c; null != d; ) d._internal_listener(a, b),
d.stayInList || d.dispose(),
d = d._internal_next;
this.didEmit(c)
},
emit1: function (a) {
for (var b = this.willEmit(), c = b; null != c; ) c._internal_listener(a),
c.stayInList || c.dispose(),
c = c._internal_next;
this.didEmit(b)
},
emit0: function () {
for (var a = this.willEmit(), b = a; null != b; ) b._internal_listener(),
b.stayInList || b.dispose(),
b = b._internal_next;
this.didEmit(a)
},
_internal_disconnect: function (a) {
var b = this;
this._head == n.SignalBase.DISPATCHING_SENTINEL ? this.defer(function () {
b.listRemove(a)
})  : this.listRemove(a)
},
connectImpl: function (a, b) {
var c = this,
d = new n.SignalConnection(this, a);
this._head == n.SignalBase.DISPATCHING_SENTINEL ? this.defer(function () {
c.listAdd(d, b)
})  : this.listAdd(d, b);
return d
},
__class__: n.SignalBase
};
n.Signal2 = function (a) {
n.SignalBase.call(this, a)
};
j['flambe.util.Signal2'] = n.Signal2;
n.Signal2.__name__ = [
'flambe',
'util',
'Signal2'
];
n.Signal2.__super__ = n.SignalBase;
n.Signal2.prototype = x(n.SignalBase.prototype, {
connect: function (a, b) {
null == b && (b = !1);
return this.connectImpl(a, b)
},
__class__: n.Signal2
});
n.Signal1 = function (a) {
n.SignalBase.call(this, a)
};
j['flambe.util.Signal1'] = n.Signal1;
n.Signal1.__name__ = [
'flambe',
'util',
'Signal1'
];
n.Signal1.__super__ = n.SignalBase;
n.Signal1.prototype = x(n.SignalBase.prototype, {
connect: function (a, b) {
null == b && (b = !1);
return this.connectImpl(a, b)
},
__class__: n.Signal1
});
D = function () {
};
j['flambe.System'] = D;
D.__name__ = [
'flambe',
'System'
];
D.init = function () {
D._calledInit || (D._platform.init(), D._calledInit = !0)
};
D.createTexture = function (a, b) {
return D._platform.getRenderer().createEmptyTexture(a, b)
};
n.Logger = function (a) {
this._handler = a
};
j['flambe.util.Logger'] = n.Logger;
n.Logger.__name__ = [
'flambe',
'util',
'Logger'
];
n.Logger.prototype = {
__class__: n.Logger
};
Y = function () {
};
j['flambe.Log'] = Y;
Y.__name__ = [
'flambe',
'Log'
];
Y.__super__ = n.PackageLog;
Y.prototype = x(n.PackageLog.prototype, {
__class__: Y
});
A = function (a) {
null == a && (a = 1);
this._internal_realDt = 0;
this.scale = new F.AnimatedFloat(a)
};
j['flambe.SpeedAdjuster'] = A;
A.__name__ = [
'flambe',
'SpeedAdjuster'
];
A.__super__ = M;
A.prototype = x(M.prototype, {
onUpdate: function (a) {
0 < this._internal_realDt && (a = this._internal_realDt, this._internal_realDt = 0);
this.scale.update(a)
},
get_name: function () {
return 'SpeedAdjuster_5'
},
__class__: A
});
F = {
AnimatedFloat: function (a, b) {
n.Value.call(this, a, b);
this.behaviorComplete = new n.Signal0
}
};
j['flambe.animation.AnimatedFloat'] = F.AnimatedFloat;
F.AnimatedFloat.__name__ = [
'flambe',
'animation',
'AnimatedFloat'
];
F.AnimatedFloat.__super__ = n.Value;
F.AnimatedFloat.prototype = x(n.Value.prototype, {
set_behavior: function (a) {
this._behavior = a;
this.update(0);
return a
},
update: function (a) {
null != this._behavior && (n.Value.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null, this.behaviorComplete.emit0()))
},
set__: function (a) {
this._behavior = null;
return n.Value.prototype.set__.call(this, a)
},
__class__: F.AnimatedFloat
});
F.Behavior = function () {
};
j['flambe.animation.Behavior'] = F.Behavior;
F.Behavior.__name__ = [
'flambe',
'animation',
'Behavior'
];
F.Behavior.prototype = {
__class__: F.Behavior
};
F.Binding = function () {
};
j['flambe.animation.Binding'] = F.Binding;
F.Binding.__name__ = [
'flambe',
'animation',
'Binding'
];
F.Binding.__interfaces__ = [
F.Behavior
];
F.Binding.prototype = {
isComplete: function () {
return !1
},
update: function () {
var a = this._target._value;
return null != this._fn ? this._fn(a)  : a
},
__class__: F.Binding
};
z = {
};
z.AssetType = j['flambe.asset.AssetType'] = {
__ename__: [
'flambe',
'asset',
'AssetType'
],
__constructs__: [
'Image',
'Audio',
'Data'
]
};
z.AssetType.Image = [
'Image',
0
];
z.AssetType.Image.toString = p;
z.AssetType.Image.__enum__ = z.AssetType;
z.AssetType.Audio = [
'Audio',
1
];
z.AssetType.Audio.toString = p;
z.AssetType.Audio.__enum__ = z.AssetType;
z.AssetType.Data = [
'Data',
2
];
z.AssetType.Data.toString = p;
z.AssetType.Data.__enum__ = z.AssetType;
z.AssetEntry = function (a, b, c, d) {
this.name = a;
this.url = b;
this.type = c;
this.bytes = d
};
j['flambe.asset.AssetEntry'] = z.AssetEntry;
z.AssetEntry.__name__ = [
'flambe',
'asset',
'AssetEntry'
];
z.AssetEntry.prototype = {
getUrlExtension: function () {
return n.Strings.getFileExtension(this.url.split('?') [0]).toLowerCase()
},
__class__: z.AssetEntry
};
z.AssetPack = function () {
};
j['flambe.asset.AssetPack'] = z.AssetPack;
z.AssetPack.__name__ = [
'flambe',
'asset',
'AssetPack'
];
z.AssetPack.prototype = {
__class__: z.AssetPack
};
w = void 0;
y = void 0;
w = function () {
};
j['js.Boot'] = w;
w.__name__ = [
'js',
'Boot'
];
w.__string_rec = function (a, b) {
if (null == a) return 'null';
if (5 <= b.length) return '<...>';
var c = typeof a;
if ('function' == c && (a.__name__ || a.__ename__)) c = 'object';
switch (c) {
case 'object':
if (a instanceof Array) {
if (a.__enum__) {
if (2 == a.length) return a[0];
for (var c = a[0] + '(', b = b + '\t', d = 2, e = a.length; d < e; ) var f = d++,
c = 2 != f ? c + (',' + w.__string_rec(a[f], b))  : c + w.__string_rec(a[f], b);
return c + ')'
}
d = a.length;
c = '[';
b += '\t';
for (e = 0; e < d; ) f = e++,
c += (0 < f ? ',' : '') + w.__string_rec(a[f], b);
return c + ']'
}
try {
e = a.toString
} catch (h) {
return '???'
}
if (null != e && e != Object.toString && (c = a.toString(), '[object Object]' != c)) return c;
e = null;
c = '{\n';
b += '\t';
d = null != a.hasOwnProperty;
for (e in a) if (!d || a.hasOwnProperty(e)) 'prototype' == e || '__class__' == e || '__super__' == e || '__interfaces__' == e || '__properties__' == e || (2 != c.length && (c += ', \n'), c += b + e + ' : ' + w.__string_rec(a[e], b));
b = b.substring(1);
return c + ('\n' + b + '}');
case 'function':
return '<function>';
case 'string':
return a;
default:
return '' + a
}
};
w.__interfLoop = function (a, b) {
if (null == a) return !1;
if (a == b) return !0;
var c = a.__interfaces__;
if (null != c) for (var d = 0, e = c.length; d < e; ) {
var f = d++,
f = c[f];
if (f == b || w.__interfLoop(f, b)) return !0
}
return w.__interfLoop(a.__super__, b)
};
w.__instanceof = function (a, b) {
try {
if (a instanceof b) return b == Array ? null == a.__enum__ : !0;
if (w.__interfLoop(a.__class__, b)) return !0
} catch (c) {
if (null == b) return !1
}
switch (b) {
case ia:
return Math.ceil(a % 2147483648) === a;
case ga:
return 'number' == typeof a;
case ha:
return !0 === a || !1 === a;
case String:
return 'string' == typeof a;
case ja:
return !0;
default:
if (null == a) return !1;
if (b == ka && null != a.__name__) return !0;
null;
if (b == la && null != a.__ename__) return !0;
null;
return a.__enum__ == b
}
};
w.__cast = function (a, b) {
if (w.__instanceof(a, b)) return a;
throw 'Cannot cast ' + q.string(a) + ' to ' + q.string(b);
};
n.Strings = function () {
};
j['flambe.util.Strings'] = n.Strings;
n.Strings.__name__ = [
'flambe',
'util',
'Strings'
];
n.Strings.getFileExtension = function (a) {
var b = a.lastIndexOf('.');
return 0 < b ? B.substr(a, b + 1, null)  : null
};
n.Strings.removeFileExtension = function (a) {
var b = a.lastIndexOf('.');
return 0 < b ? B.substr(a, 0, b)  : a
};
n.Strings.joinPath = function (a, b) {
47 != a.charCodeAt(a.length - 1) && (a += '/');
return a + b
};
n.Strings.withFields = function (a, b) {
var c = b.length;
if (0 < c) {
for (var a = a + (0 < a.length ? ' [' : '['), d = 0; d < c; ) {
0 < d && (a += ', ');
var e = b[d],
f = b[d + 1];
if (w.__instanceof(f, Error)) {
var h = f.stack;
null != h && (f = h)
}
a += e + '=' + q.string(f);
d += 2
}
a += ']'
}
return a
};
y = function () {
};
j['js.Lib'] = y;
y.__name__ = [
'js',
'Lib'
];
z.Manifest = function () {
this._entries = [
]
};
j['flambe.asset.Manifest'] = z.Manifest;
z.Manifest.__name__ = [
'flambe',
'asset',
'Manifest'
];
z.Manifest.build = function (a, b) {
null == b && (b = !0);
var c = z.Manifest._buildManifest.get(a);
if (null == c) {
if (b) throw n.Strings.withFields('Missing asset pack', [
'name',
a
]);
return null
}
return c.clone()
};
z.Manifest.inferType = function (a) {
a = n.Strings.getFileExtension(a.split('?') [0]);
if (null != a) switch (a.toLowerCase()) {
case 'png':
case 'jpg':
case 'gif':
return z.AssetType.Image;
case 'ogg':
case 'm4a':
case 'mp3':
case 'wav':
return z.AssetType.Audio
}
return z.AssetType.Data
};
z.Manifest.createBuildManifests = function () {
var a = new I;
a.set('initial_load', [
{
name: 'ui/splash/splash_sound_on_toggle.png',
md5: '233f23ac6d024e822d3c2f807c564821',
bytes: 9132
},
{
name: 'ui/splash/splash_sound_off_toggle.png',
md5: '0aedcc7da326651e6e6a5160e180850f',
bytes: 8108
},
{
name: 'ui/splash/splash_screen_logos.jpg',
md5: '55d180eb223fa558712ac8d27f2cdd13',
bytes: 80975
},
{
name: 'ui/help_screen_container.png',
md5: '368cc427345e8423f04a66fa7368b336',
bytes: 43381
},
{
name: 'audio/timmy_swordattack.ogg',
md5: 'bf9aeb73238d29238016d4882f075f19',
bytes: 17770
},
{
name: 'audio/timmy_swordattack.mp3',
md5: '54dce84dcc294652ad129fdafba18176',
bytes: 13373
},
{
name: 'audio/timmy_hit.ogg',
md5: '07201c07320ab64d6ef3d05d3f58e53f',
bytes: 30327
},
{
name: 'audio/timmy_hit.mp3',
md5: '2ac26210a744165f59e3576434751a69',
bytes: 25076
},
{
name: 'audio/timmy_heal.ogg',
md5: 'a4b12ea5cb49f0860b5b146efdb62e0d',
bytes: 57217
},
{
name: 'audio/timmy_heal.mp3',
md5: 'ce2f0be4d78f4f45a5155effc60f6ad0',
bytes: 53497
},
{
name: 'audio/timmy_fire.ogg',
md5: '6671bd7157a41e69fd9e9613b4c3125e',
bytes: 62198
},
{
name: 'audio/timmy_fire.mp3',
md5: 'fe67fa64f68a771ee3434d353034509a',
bytes: 57259
},
{
name: 'audio/timmy_block.ogg',
md5: 'c9c4e5489e10e10fbe61135975325ca9',
bytes: 9013
},
{
name: 'audio/timmy_block.mp3',
md5: 'b7355003ced317b38086141c088b2984',
bytes: 8358
},
{
name: 'audio/hypnotize.ogg',
md5: 'e2d038efc041964fa8565ceb31569c93',
bytes: 27187
},
{
name: 'audio/hypnotize.mp3',
md5: 'd59a85b3d302ace0d8b1848889950ca4',
bytes: 25076
},
{
name: 'audio/drop_swoop.ogg',
md5: '6b6aa79f962de6770602d49248f098f5',
bytes: 19744
},
{
name: 'audio/drop_swoop.mp3',
md5: '7a714483eea7e97f100bd82988f6e09f',
bytes: 17971
},
{
name: 'audio/dragon_drop_final_theme.ogg',
md5: 'a9b7889d56edeb5243d77d66f77c45a2',
bytes: 668751
},
{
name: 'audio/dragon_drop_final_theme.mp3',
md5: 'a9c22777b2e277e28272787c072f432e',
bytes: 543346
}
]);
a.set('gameplay_universal', [
{
name: 'ui/win_level/win_wings.png',
md5: '001e3e4bbad41adb9e15e1423bfac681',
bytes: 6278
},
{
name: 'ui/win_level/win_heal.png',
md5: '5bfc0097def7e52dd9d5bec2ec6c4ccf',
bytes: 1439
},
{
name: 'ui/win_level/win_fire.png',
md5: '6e14f48b4db2551cdb61cfaaccebda46',
bytes: 6393
},
{
name: 'ui/win_level/win_daze.png',
md5: '5b86539c6c6000c3ee8b07f484b99c8d',
bytes: 9656
},
{
name: 'ui/win_level/level_win_screen.png',
md5: 'a40a72c4afcf329df9268496862421a4',
bytes: 17336
},
{
name: 'ui/gameplay_hud/sound_on_button.png',
md5: '6545d08bad1dc8918fb998c80a4a192c',
bytes: 14963
},
{
name: 'ui/gameplay_hud/sound_off_button.png',
md5: 'e9520532b3f4dcf80e8ff68eee19050e',
bytes: 11869
},
{
name: 'ui/gameplay_hud/quit_confirm_yes.png',
md5: '9cc140de487686ad8a392295fd86900f',
bytes: 2916
},
{
name: 'ui/gameplay_hud/quit_confirm_no.png',
md5: 'bbb6a591233fda2647058e5ec2f8b29d',
bytes: 2488
},
{
name: 'ui/gameplay_hud/quit_confirm_container.png',
md5: '38c2bec1b1dd6722d2558e423390a4af',
bytes: 151091
},
{
name: 'ui/gameplay_hud/quit_button.png',
md5: '4b25e1e81eb43bcbac33cacf2a33b908',
bytes: 13806
},
{
name: 'ui/gameplay_hud/play_button.png',
md5: '9e2c7997c1327569e2b65e655ea94836',
bytes: 12379
},
{
name: 'ui/gameplay_hud/pause_menu.png',
md5: '8f2c5f2203e42d3418c2139788108aaf',
bytes: 43367
},
{
name: 'ui/gameplay_hud/pause_button.png',
md5: '916dddbaa5a21b9d66ff1a9d46a178b9',
bytes: 11549
},
{
name: 'ui/gameplay_hud/level_win_screen.png',
md5: '6a4ad0735e42bcf41cdb582a1e8d1711',
bytes: 22915
},
{
name: 'ui/gameplay_hud/huh_timmy_health_container.png',
md5: '326377a9149d276b9f26a4c17d0a23bb',
bytes: 3271
},
{
name: 'ui/gameplay_hud/huh_dragon_health_container.png',
md5: '6c22bb753565d76869cd662f1ca0a271',
bytes: 4409
},
{
name: 'ui/gameplay_hud/huh_baby_dragon_health_container.png',
md5: '64aa95a0350a28ee0179dccade4eb50d',
bytes: 4775
},
{
name: 'ui/gameplay_hud/hud_timmy_health_masking.png',
md5: 'c977baa0631873795a2af6b844ca25e3',
bytes: 3580
},
{
name: 'ui/gameplay_hud/hud_dragon_health_masking.png',
md5: '9b1d69922f1c69dafe8590a71dca1876',
bytes: 4338
},
{
name: 'ui/gameplay_hud/hud_container.png',
md5: '5f579aa52b5c4404a76d5339ffab36b5',
bytes: 3802
},
{
name: 'ui/gameplay_hud/hud_baby_dragon_health_masking.png',
md5: 'f3dc399a3cdd9d5c091e0786c75061d4',
bytes: 4738
},
{
name: 'ui/gameplay_hud/help_button.png',
md5: '082276d7c7ba8f560f610134a28a258b',
bytes: 12817
},
{
name: 'ui/game_over/game_over_screen_container.png',
md5: '5c3c68db7575d254ac8af383a3f556bd',
bytes: 56349
},
{
name: 'ui/attack_menu/timmy_attack_menu_icon.png',
md5: '8b5f54850d56b78c8a1efc1b12f11107',
bytes: 13790
},
{
name: 'ui/attack_menu/inactive/button_attack_wings_inactive.png',
md5: 'f2195baf370227a534e17517c6311f2b',
bytes: 8248
},
{
name: 'ui/attack_menu/inactive/button_attack_weapon_inactive.png',
md5: '02dfb4d2c7ed4fc2d69a9ba26324f436',
bytes: 8826
},
{
name: 'ui/attack_menu/inactive/button_attack_shield_inactive.png',
md5: 'fbd6ecb187e31303ca3773d72fa15c56',
bytes: 7226
},
{
name: 'ui/attack_menu/inactive/button_attack_mez_inactive.png',
md5: '166562ccb19e87833b59a5ba3ff942d6',
bytes: 9409
},
{
name: 'ui/attack_menu/inactive/button_attack_heal_inactive.png',
md5: '388c00f542a471c395becc5687f50291',
bytes: 7950
},
{
name: 'ui/attack_menu/inactive/button_attack_fire_inactive.png',
md5: '6f31fea2496cf60242c1af5f41f3edd8',
bytes: 9082
},
{
name: 'ui/attack_menu/cooldown/button_attack_wings_cooldown.png',
md5: '9d856101f4bbce42a6efe4e211c39152',
bytes: 13318
},
{
name: 'ui/attack_menu/cooldown/button_attack_mez_cooldown.png',
md5: '15aed733a3c8812f0088ec9465217077',
bytes: 13657
},
{
name: 'ui/attack_menu/cooldown/button_attack_heal_cooldown.png',
md5: 'ce16236a131e7a250caad497d4c628eb',
bytes: 12945
},
{
name: 'ui/attack_menu/cooldown/button_attack_fire_cooldown.png',
md5: '9ddb78a853d1e2ddc005c485696cb0bb',
bytes: 14487
},
{
name: 'ui/attack_menu/active/button_attack_wings_active_over.png',
md5: '8b7f1116309c0bf333eec1dd553b149b',
bytes: 13107
},
{
name: 'ui/attack_menu/active/button_attack_wings_active.png',
md5: '3ad2720cd83535940ce0f44a806c0926',
bytes: 10830
},
{
name: 'ui/attack_menu/active/button_attack_weapon_active_over.png',
md5: '502358a71df127ca0a4b4d95b143d047',
bytes: 15199
},
{
name: 'ui/attack_menu/active/button_attack_weapon_active.png',
md5: 'c03f2fef7b534cb5492fded2458d33f1',
bytes: 12532
},
{
name: 'ui/attack_menu/active/button_attack_shield_active_over.png',
md5: '6409e9963016c2b9cf74fb5bf23d72b6',
bytes: 11725
},
{
name: 'ui/attack_menu/active/button_attack_shield_active.png',
md5: 'c8dd2e457327b14498e4f5d5c979ca22',
bytes: 9853
},
{
name: 'ui/attack_menu/active/button_attack_mez_active_over.png',
md5: '2d7ab4b7afa27d58f1b1e75f10d31d3a',
bytes: 14299
},
{
name: 'ui/attack_menu/active/button_attack_mez_active.png',
md5: '01d69653a51036415e1759bf4f1d9d90',
bytes: 12108
},
{
name: 'ui/attack_menu/active/button_attack_heal_active_over.png',
md5: '15a5b7a55960aa69c95a8cae66e38ae3',
bytes: 13616
},
{
name: 'ui/attack_menu/active/button_attack_heal_active.png',
md5: '6a7c792b890c1e49f2492e7f8087c9f0',
bytes: 11049
},
{
name: 'ui/attack_menu/active/button_attack_fire_active_over.png',
md5: '9a8a63a6cda816561b2286d15a5ae4f6',
bytes: 15220
},
{
name: 'ui/attack_menu/active/button_attack_fire_active.png',
md5: '86430bf6d6e0489b7c2ba06449bb0837',
bytes: 12804
},
{
name: 'fonts/heal_font.png',
md5: '38df9b608f1b2958ca5e614d36d7e817',
bytes: 131730
},
{
name: 'fonts/heal_font.fnt',
md5: 'c89665d02b15a8c0bd028eb02213f35c',
bytes: 15884
},
{
name: 'fonts/damage_font.png',
md5: '4fe544a842282e28af725bdd8eef8ae5',
bytes: 156080
},
{
name: 'fonts/damage_font.fnt',
md5: '8e475b19a90f2a98093a7712d7316f87',
bytes: 15886
},
{
name: 'flump_exploder/library.json',
md5: '88520b28ab84eee86108983488c9c764',
bytes: 1485
},
{
name: 'flump_exploder/atlas0.png',
md5: '73e7cdb24f90a177c91c19bc23c24115',
bytes: 39671
},
{
name: 'elements/arrow_indicator.png',
md5: '7a28fd7fb763931cb163d5fdb02de0b9',
bytes: 6105
},
{
name: 'backgroundImages/background.jpg',
md5: '1528606d7c453f358ec44a5a724d0b11',
bytes: 83067
},
{
name: 'audio/dragon_whimper.ogg',
md5: '8a1648cdfa5c1c53fa4761e39532355a',
bytes: 79205
},
{
name: 'audio/dragon_whimper.mp3',
md5: 'd7fd7ced0ce0a85978a35ed36a99bcd4',
bytes: 129148
},
{
name: 'audio/dragon_swoopattack.ogg',
md5: '974c95d8f91bcdc4b57ed6e9a17dd405',
bytes: 21827
},
{
name: 'audio/dragon_swoopattack.mp3',
md5: 'bb2d849cddc72a12666e4fdda5e60983',
bytes: 12119
},
{
name: 'audio/dragon_hurt.ogg',
md5: '78649d2f858d35258cc543c3d1508fa5',
bytes: 14998
},
{
name: 'audio/dragon_hurt.mp3',
md5: '1a969c766a1ae1c1de84aa42e6d3e4d0',
bytes: 79411
},
{
name: 'audio/dragon_fire.ogg',
md5: '8fb9a4a1f2404e0aa0705e991459f8a0',
bytes: 18876
},
{
name: 'audio/dragon_fire.mp3',
md5: 'd1e0cbbbfa4a1620b1f094ca0288778d',
bytes: 27584
},
{
name: 'audio/dragon_born.ogg',
md5: '44332c666fc31e666b0ac87ccd05a22a',
bytes: 83954
},
{
name: 'audio/dragon_born.mp3',
md5: 'deba6cfb1d0c58071c1312ff47ab2fdd',
bytes: 81919
},
{
name: 'audio/baby_dragon_hurt.ogg',
md5: 'e911538f20109ec95fdedb382f00739b',
bytes: 14764
},
{
name: 'audio/baby_dragon_hurt.mp3',
md5: '2c14e57d4aee84372e0c24fd915fd21a',
bytes: 77321
},
{
name: 'audio/baby_dragon_chomp.ogg',
md5: '5e9ef2dc7ab58c5cb31627d0fa03c2d0',
bytes: 16195
},
{
name: 'audio/baby_dragon_chomp.mp3',
md5: 'b50a690dc366bfb4eb290e81cc47abb4',
bytes: 9612
},
{
name: 'anim_timmy/library.json',
md5: '0c7ca830ecaa6e0b1e2a26554ceb9d8f',
bytes: 498122
},
{
name: 'anim_timmy/atlas1.png',
md5: '2f7ac9e93032925f104fef94bcf0e024',
bytes: 11896
},
{
name: 'anim_timmy/atlas0.png',
md5: '2fc32db025168099f3083cb612dbc4a5',
bytes: 85069
},
{
name: 'anim_ranger/library.json',
md5: '004abf3538f9aecad4b2c0988377acb3',
bytes: 220363
},
{
name: 'anim_ranger/atlas1.png',
md5: '6a7bce998d44c71a967a799b77c560f9',
bytes: 5272
},
{
name: 'anim_ranger/atlas0.png',
md5: '6371730512a59e324f64cc5f300d1504',
bytes: 159163
},
{
name: 'anim_flames/library.json',
md5: 'a5ec8c93ea9fbedad7597cb023886285',
bytes: 3966
},
{
name: 'anim_flames/atlas0.png',
md5: '649ffc540abe43d70c0a3c0cd6a3b165',
bytes: 65715
},
{
name: 'anim_baby_dragon/library.json',
md5: '6206c1d51a032da939b194a7d48b5419',
bytes: 35480
},
{
name: 'anim_baby_dragon/atlas0.png',
md5: '9d8a09d9e638efade3a4779ac128cfa8',
bytes: 43487
}
]);
a.set('fonts_la', [
{
name: 'final_font.png',
md5: '375a2ce060311df383366d7850760c34',
bytes: 273163
},
{
name: 'final_font.fnt',
md5: '232e4cfae5f23f2e691078c4fec74be7',
bytes: 20270
}
]);
a.set('fonts_kr', [
{
name: 'final_font.png',
md5: '375a2ce060311df383366d7850760c34',
bytes: 273163
},
{
name: 'final_font.fnt',
md5: '232e4cfae5f23f2e691078c4fec74be7',
bytes: 20270
}
]);
a.set('fonts_jp', [
{
name: 'final_font.png',
md5: '375a2ce060311df383366d7850760c34',
bytes: 273163
},
{
name: 'final_font.fnt',
md5: '232e4cfae5f23f2e691078c4fec74be7',
bytes: 20270
}
]);
a.set('fonts_en', [
{
name: 'final_font.png',
md5: '076f51a444d34b76de73f271956a6615',
bytes: 160705
},
{
name: 'final_font.fnt',
md5: 'cdf196abf7da23c3096cf19b4f4dae10',
bytes: 12024
}
]);
a.set('fonts_cn', [
{
name: 'final_font.png',
md5: '375a2ce060311df383366d7850760c34',
bytes: 273163
},
{
name: 'final_font.fnt',
md5: '232e4cfae5f23f2e691078c4fec74be7',
bytes: 20270
}
]);
a.set('bootstrap', [
{
name: 'ui/loading_spinner.png',
md5: '4d3d00e1e4ec16e9b3cbb531f6c59dcd',
bytes: 12504
},
{
name: 'ui/loading_screen.jpg',
md5: 'e5dbf17993235f1ebcee3023180c8295',
bytes: 80412
},
{
name: 'config/translation_la.xml',
md5: '16079644fc201a17834d903f57ec7120',
bytes: 6203
},
{
name: 'config/translation_kr.xml',
md5: '16079644fc201a17834d903f57ec7120',
bytes: 6203
},
{
name: 'config/translation_jp.xml',
md5: '16079644fc201a17834d903f57ec7120',
bytes: 6203
},
{
name: 'config/translation_en.xml',
md5: '16079644fc201a17834d903f57ec7120',
bytes: 6203
},
{
name: 'config/translation_cn.xml',
md5: '16079644fc201a17834d903f57ec7120',
bytes: 6203
},
{
name: 'config/config.xml',
md5: 'd018f01c5a72c0111a2b41386f5ba44a',
bytes: 1290
},
{
name: 'audio/silent.ogg',
md5: '3526550092a0e091f382852de5ef2315',
bytes: 5514
},
{
name: 'audio/silent.mp3',
md5: 'ba9e6829ba32e427142251a85cbd4fbb',
bytes: 2114
}
]);
for (var b = new I, c = a.keys(); c.hasNext(); ) {
var d = c.next(),
e = new z.Manifest;
e.set_relativeBasePath('assets');
for (var f = 0, h = a.get(d); f < h.length; ) {
var g = h[f];
++f;
var i = g.name,
l = d + '/' + i + '?v=' + q.string(g.md5),
j = z.Manifest.inferType(i);
if (j == z.AssetType.Image || j == z.AssetType.Audio) i = n.Strings.removeFileExtension(i);
e.add(i, l, g.bytes, j)
}
b.set(d, e)
}
return b
};
z.Manifest.prototype = {
set_externalBasePath: function (a) {
this._externalBasePath = a;
null != a && null;
return a
},
get_externalBasePath: function () {
return this._externalBasePath
},
set_relativeBasePath: function (a) {
this._relativeBasePath = a;
null != a && null;
return a
},
get_relativeBasePath: function () {
return this._relativeBasePath
},
getFullURL: function (a) {
var b = null != this.get_externalBasePath() && z.Manifest._supportsCrossOrigin ? this.get_externalBasePath()  : this.get_relativeBasePath(),
c = null != this.get_externalBasePath() ? this.get_externalBasePath()  : this.get_relativeBasePath();
a.type == z.AssetType.Data && (c = b);
return null != c ? n.Strings.joinPath(c, a.url)  : a.url
},
clone: function () {
var a = new z.Manifest;
a.set_relativeBasePath(this.get_relativeBasePath());
a.set_externalBasePath(this.get_externalBasePath());
a._entries = this._entries.slice();
return a
},
iterator: function () {
return B.iter(this._entries)
},
add: function (a, b, c, d) {
null == c && (c = 0);
null == d && (d = z.Manifest.inferType(b));
a = new z.AssetEntry(a, b, d, c);
this._entries.push(a);
return a
},
__class__: z.Manifest
};
l = {
};
l.BlendMode = j['flambe.display.BlendMode'] = {
__ename__: [
'flambe',
'display',
'BlendMode'
],
__constructs__: [
'Normal',
'Add',
'CopyExperimental'
]
};
l.BlendMode.Normal = [
'Normal',
0
];
l.BlendMode.Normal.toString = p;
l.BlendMode.Normal.__enum__ = l.BlendMode;
l.BlendMode.Add = [
'Add',
1
];
l.BlendMode.Add.toString = p;
l.BlendMode.Add.__enum__ = l.BlendMode;
l.BlendMode.CopyExperimental = [
'CopyExperimental',
2
];
l.BlendMode.CopyExperimental.toString = p;
l.BlendMode.CopyExperimental.__enum__ = l.BlendMode;
H = {
Point: function (a, b) {
null == b && (b = 0);
null == a && (a = 0);
this.x = a;
this.y = b
}
};
j['flambe.math.Point'] = H.Point;
H.Point.__name__ = [
'flambe',
'math',
'Point'
];
H.Point.prototype = {
__class__: H.Point
};
l.Sprite = function () {
this.blendMode = this.scissor = null;
var a = this;
this._flags = 11;
this._localMatrix = new H.Matrix;
var b = function () {
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
j['flambe.display.Sprite'] = l.Sprite;
l.Sprite.__name__ = [
'flambe',
'display',
'Sprite'
];
l.Sprite.hitTest = function (a, b, c) {
var d = a._compMap.Sprite_1;
if (null != d) {
if (3 != (d._flags & 3)) return null;
d.getLocalMatrix().inverseTransform(b, c, l.Sprite._scratchPoint) && (b = l.Sprite._scratchPoint.x, c = l.Sprite._scratchPoint.y);
var e = d.scissor;
if (null != e && !e.contains(b, c)) return null
}
a = l.Sprite.hitTestBackwards(a.firstChild, b, c);
return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
};
l.Sprite.getBounds = function (a, b) {
null ==
b && (b = new H.Rectangle);
b.set(1.79769313486231e+308, 1.79769313486231e+308, - 1.79769313486231e+308, - 1.79769313486231e+308);
l.Sprite.getBoundsImpl(a, null, b);
b.width -= b.x;
b.height -= b.y;
return b
};
l.Sprite.render = function (a, b) {
var c = a._compMap.Sprite_1;
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
if (null != d) for (var d = d.occludedScenes, e = 0; e < d.length; ) {
var f = d[e];
++e;
l.Sprite.render(f, b)
}
for (d = a.firstChild; null != d; ) e = d.next,
l.Sprite.render(d, b),
d = e;
null != c && b.restore()
};
l.Sprite.hitTestBackwards = function (a, b, c) {
if (null != a) {
var d = l.Sprite.hitTestBackwards(a.next, b, c);
return null != d ? d : l.Sprite.hitTest(a, b, c)
}
return null
};
l.Sprite.getBoundsImpl = function (a, b, c) {
var d = a._compMap.Sprite_1;
if (null != d) {
var b = null != b ? H.Matrix.multiply(b, d.getLocalMatrix())  :
d.getLocalMatrix(),
e = d.getNaturalWidth(),
d = d.getNaturalHeight();
0 < e && 0 < d && (l.Sprite.extendRect(b, 0, 0, c), l.Sprite.extendRect(b, e, 0, c), l.Sprite.extendRect(b, e, d, c), l.Sprite.extendRect(b, 0, d, c))
}
e = a._compMap.Director_0;
if (null != e) for (var e = e.occludedScenes, d = 0, f = e.length; d < f; ) l.Sprite.getBoundsImpl(e[d], b, c),
++d;
for (a = a.firstChild; null != a; ) e = a.next,
l.Sprite.getBoundsImpl(a, b, c),
a = e
};
l.Sprite.extendRect = function (a, b, c, d) {
a = a.transform(b, c, l.Sprite._scratchPoint);
b = a.x;
c = a.y;
b < d.x && (d.x = b);
c < d.y && (d.y = c);
b > d.width && (d.width = b);
c > d.height && (d.height = c)
};
l.Sprite.__super__ = M;
l.Sprite.prototype = x(M.prototype, {
set_pointerEnabled: function (a) {
this._flags = n.BitSets.set(this._flags, 2, a);
return a
},
set_visible: function (a) {
this._flags = n.BitSets.set(this._flags, 1, a);
return a
},
get_pointerUp: function () {
null == this._internal_pointerUp && (this._internal_pointerUp = new n.Signal1);
return this._internal_pointerUp
},
get_pointerMove: function () {
null == this._internal_pointerMove && (this._internal_pointerMove = new n.Signal1);
return this._internal_pointerMove
},
get_pointerDown: function () {
null == this._internal_pointerDown && (this._internal_pointerDown = new n.Signal1);
return this._internal_pointerDown
},
draw: function () {
},
onUpdate: function (a) {
this.x.update(a);
this.y.update(a);
this.rotation.update(a);
this.scaleX.update(a);
this.scaleY.update(a);
this.alpha.update(a);
this.anchorX.update(a);
this.anchorY.update(a)
},
getLocalMatrix: function () {
0 != (this._flags & 4) && (this._flags &= - 5, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate( - this.anchorX._value, - this.anchorY._value));
return this._localMatrix
},
containsLocal: function (a, b) {
return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
},
getNaturalHeight: function () {
return 0
},
getNaturalWidth: function () {
return 0
},
get_name: function () {
return 'Sprite_1'
},
__class__: l.Sprite
});
l.FillSprite = function (a, b, c) {
l.Sprite.call(this);
this.color = a;
this.width = new F.AnimatedFloat(b);
this.height = new F.AnimatedFloat(c)
};
j['flambe.display.FillSprite'] = l.FillSprite;
l.FillSprite.__name__ = [
'flambe',
'display',
'FillSprite'
];
l.FillSprite.__super__ = l.Sprite;
l.FillSprite.prototype = x(l.Sprite.prototype, {
onUpdate: function (a) {
l.Sprite.prototype.onUpdate.call(this, a);
this.width.update(a);
this.height.update(a)
},
getNaturalHeight: function () {
return this.height._value
},
getNaturalWidth: function () {
return this.width._value
},
draw: function (a) {
a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
},
__class__: l.FillSprite
});
l.Font = function (a, b) {
this.name = b;
this._glyphs = new V;
for (var c = new l._Font.ConfigParser(a.getFile(b + '.fnt')), d = new V, e = b.lastIndexOf('/'), e = 0 <= e ? B.substr(b, 0, e + 1)  : '', f = c.keywords(); f.hasNext(); ) switch (f.next()) {
case 'info':
for (var h = c.pairs(); h.hasNext(); ) {
var g = h.next();
switch (g.key) {
case 'size':
this.size = g.getInt()
}
}
break;
case 'page':
for (var h = 0, i = null, j = c.pairs(); j.hasNext(); ) switch (g = j.next(), g.key) {
case 'id':
h = g.getInt();
break;
case 'file':
i = g.getString()
}
d.set(h, a.getTexture(e + n.Strings.removeFileExtension(i)));
break;
case 'char':
h = null;
for (i = c.pairs(); i.hasNext(); ) switch (g = i.next(), g.key) {
case 'id':
h = new l.Glyph(g.getInt());
break;
case 'x':
h.x = g.getInt();
break;
case 'y':
h.y = g.getInt();
break;
case 'width':
h.width = g.getInt();
break;
case 'height':
h.height = g.getInt();
break;
case 'page':
h.page = d.get(g.getInt());
break;
case 'xoffset':
h.xOffset = g.getInt();
break;
case 'yoffset':
h.yOffset = g.getInt();
break;
case 'xadvance':
h.xAdvance = g.getInt()
}
this._glyphs.set(h.charCode, h);
break;
case 'kerning':
h = null;
i = - 1;
for (j = c.pairs(); j.hasNext(); ) switch (g = j.next(), g.key) {
case 'first':
h = this._glyphs.get(g.getInt());
break;
case 'second':
i = g.getInt();
break;
case 'amount':
h._internal_setKerning(i, g.getInt())
}
}
};
j['flambe.display.Font'] = l.Font;
l.Font.__name__ = [
'flambe',
'display',
'Font'
];
l.Font.prototype = {
getGlyphs: function (a) {
for (var b = [
], c = 0, d = a.length; c < d; ) {
var e = c++,
e = this._glyphs.get(a.charCodeAt(e));
null != e ? b.push(e)  : null
}
return b
},
__class__: l.Font
};
l.Glyph = function (a) {
this.charCode = a
};
j['flambe.display.Glyph'] = l.Glyph;
l.Glyph.__name__ = [
'flambe',
'display',
'Glyph'
];
l.Glyph.prototype = {
_internal_setKerning: function (a, b) {
null == this._kernings && (this._kernings = new V);
this._kernings.set(a, b)
},
getKerning: function (a) {
return null != this._kernings ? this._kernings.get(a) | 0 : 0
},
draw: function (a, b, c) {
0 < this.width && a.drawSubImage(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
},
__class__: l.Glyph
};
l._Font = {
};
l._Font.ConfigParser = function (a) {
this._configText = a;
this._keywordPattern = new W('([a-z]+)(.*)', '');
this._pairPattern = new W('([a-z]+)=("[^"]*"|[^\\s]+)', '')
};
j['flambe.display._Font.ConfigParser'] = l._Font.ConfigParser;
l._Font.ConfigParser.__name__ = [
'flambe',
'display',
'_Font',
'ConfigParser'
];
l._Font.ConfigParser.advance = function (a, b) {
var c = b.matchedPos();
return B.substr(a, c.pos + c.len, a.length)
};
l._Font.ConfigParser.prototype = {
pairs: function () {
var a = this,
b = this._pairText;
return {
next: function () {
b = l._Font.ConfigParser.advance(b, a._pairPattern);
return new l._Font.ConfigPair(a._pairPattern.matched(1), a._pairPattern.matched(2))
},
hasNext: function () {
return a._pairPattern.match(b)
}
}
},
keywords: function () {
var a = this,
b = this._configText;
return {
next: function () {
b = l._Font.ConfigParser.advance(b, a._keywordPattern);
a._pairText = a._keywordPattern.matched(2);
return a._keywordPattern.matched(1)
},
hasNext: function () {
return a._keywordPattern.match(b)
}
}
},
__class__: l._Font.ConfigParser
};
l._Font.ConfigPair = function (a, b) {
this.key = a;
this._value = b
};
j['flambe.display._Font.ConfigPair'] = l._Font.ConfigPair;
l._Font.ConfigPair.__name__ = [
'flambe',
'display',
'_Font',
'ConfigPair'
];
l._Font.ConfigPair.prototype = {
getString: function () {
return 34 != this._value.charCodeAt(0) ? null : B.substr(this._value, 1, this._value.length - 2)
},
getInt: function () {
return q.parseInt(this._value)
},
__class__: l._Font.ConfigPair
};
l.Graphics = function () {
};
j['flambe.display.Graphics'] = l.Graphics;
l.Graphics.__name__ = [
'flambe',
'display',
'Graphics'
];
l.Graphics.prototype = {
__class__: l.Graphics
};
l.ImageSprite = function (a) {
l.Sprite.call(this);
this.texture = a
};
j['flambe.display.ImageSprite'] = l.ImageSprite;
l.ImageSprite.__name__ = [
'flambe',
'display',
'ImageSprite'
];
l.ImageSprite.__super__ = l.Sprite;
l.ImageSprite.prototype = x(l.Sprite.prototype, {
getNaturalHeight: function () {
return this.texture.get_height()
},
getNaturalWidth: function () {
return this.texture.get_width()
},
draw: function (a) {
a.drawImage(this.texture, 0, 0)
},
__class__: l.ImageSprite
});
l.MaskSprite = function (a, b) {
l.Sprite.call(this);
this.image = b;
this.shape = a;
this.flagRefreshMask = !0
};
j['flambe.display.MaskSprite'] = l.MaskSprite;
l.MaskSprite.__name__ = [
'flambe',
'display',
'MaskSprite'
];
l.MaskSprite.__super__ = l.Sprite;
l.MaskSprite.prototype = x(l.Sprite.prototype, {
onUpdate: function (a) {
l.Sprite.prototype.onUpdate.call(this, a);
this.image.onUpdate(a);
this.shape.onUpdate(a)
},
draw: function (a) {
a.mask(this.shape, this.image)
},
__class__: l.MaskSprite
});
l.Orientation = j['flambe.display.Orientation'] = {
__ename__: [
'flambe',
'display',
'Orientation'
],
__constructs__: [
'Portrait',
'Landscape'
]
};
l.Orientation.Portrait = [
'Portrait',
0
];
l.Orientation.Portrait.toString = p;
l.Orientation.Portrait.__enum__ = l.Orientation;
l.Orientation.Landscape = [
'Landscape',
1
];
l.Orientation.Landscape.toString = p;
l.Orientation.Landscape.__enum__ = l.Orientation;
l.SHAPE_METHODS = j['flambe.display.SHAPE_METHODS'] = {
__ename__: [
'flambe',
'display',
'SHAPE_METHODS'
],
__constructs__: 'MoveTo,LineTo,BeginPath,ClosePath,BeginStroke,EndStroke,BeginFill,EndFill,QuadCurve,BezCurve,Save,Restore,DrawRect,Arc'.split(',')
};
l.SHAPE_METHODS.MoveTo = [
'MoveTo',
0
];
l.SHAPE_METHODS.MoveTo.toString = p;
l.SHAPE_METHODS.MoveTo.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.LineTo = [
'LineTo',
1
];
l.SHAPE_METHODS.LineTo.toString = p;
l.SHAPE_METHODS.LineTo.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.BeginPath = [
'BeginPath',
2
];
l.SHAPE_METHODS.BeginPath.toString = p;
l.SHAPE_METHODS.BeginPath.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.ClosePath = [
'ClosePath',
3
];
l.SHAPE_METHODS.ClosePath.toString = p;
l.SHAPE_METHODS.ClosePath.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.BeginStroke = [
'BeginStroke',
4
];
l.SHAPE_METHODS.BeginStroke.toString = p;
l.SHAPE_METHODS.BeginStroke.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.EndStroke = [
'EndStroke',
5
];
l.SHAPE_METHODS.EndStroke.toString = p;
l.SHAPE_METHODS.EndStroke.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.BeginFill = [
'BeginFill',
6
];
l.SHAPE_METHODS.BeginFill.toString = p;
l.SHAPE_METHODS.BeginFill.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.EndFill = [
'EndFill',
7
];
l.SHAPE_METHODS.EndFill.toString = p;
l.SHAPE_METHODS.EndFill.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.QuadCurve = [
'QuadCurve',
8
];
l.SHAPE_METHODS.QuadCurve.toString = p;
l.SHAPE_METHODS.QuadCurve.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.BezCurve = [
'BezCurve',
9
];
l.SHAPE_METHODS.BezCurve.toString = p;
l.SHAPE_METHODS.BezCurve.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.Save = [
'Save',
10
];
l.SHAPE_METHODS.Save.toString = p;
l.SHAPE_METHODS.Save.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.Restore = [
'Restore',
11
];
l.SHAPE_METHODS.Restore.toString = p;
l.SHAPE_METHODS.Restore.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.DrawRect = [
'DrawRect',
12
];
l.SHAPE_METHODS.DrawRect.toString = p;
l.SHAPE_METHODS.DrawRect.__enum__ = l.SHAPE_METHODS;
l.SHAPE_METHODS.Arc = [
'Arc',
13
];
l.SHAPE_METHODS.Arc.toString = p;
l.SHAPE_METHODS.Arc.__enum__ = l.SHAPE_METHODS;
l.ShapeSprite = function () {
this.isShape = this.isLine = this.isPath = !1;
this.color = 0;
l.Sprite.call(this);
this.points = [
]
};
j['flambe.display.ShapeSprite'] = l.ShapeSprite;
l.ShapeSprite.__name__ = [
'flambe',
'display',
'ShapeSprite'
];
l.ShapeSprite.__super__ = l.Sprite;
l.ShapeSprite.prototype = x(l.Sprite.prototype, {
draw: function (a) {
this.isShape && a.beginFill(this.color);
this.isLine && a.beginStroke(this.color, 1);
for (var b = 0; b < this.points.length; ) {
switch (this.points[b][0][1]) {
case 0:
a.moveTo(this.points[b][1], this.points[b][2]);
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
a.bezierCurveTo(this.points[b][1], this.points[b][2], this.points[b][3], this.points[b][4], this.points[b][5], this.points[b][6]);
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
clear: function () {
this.points = [
]
},
lineTo: function (a, b) {
this.points.push([l.SHAPE_METHODS.LineTo,
a,
b])
},
moveTo: function (a, b) {
this.points.push([l.SHAPE_METHODS.MoveTo,
a,
b])
},
closePath: function () {
this.points.push([l.SHAPE_METHODS.ClosePath])
},
beginPath: function () {
this.points.push([l.SHAPE_METHODS.BeginPath])
},
__class__: l.ShapeSprite
}); l.Stage = function () {
}; j['flambe.display.Stage'] = l.Stage; l.Stage.__name__ = [
'flambe',
'display',
'Stage'
]; l.Stage.prototype = {
__class__: l.Stage
}; l.TextSprite = function (a, b) {
null == b && (b = '');
this._width = this._height = 0;
this._glyphs = this._offsets = this._font = this._text = null;
l.Sprite.call(this);
this._font = a;
this._text = b;
this._flags |= 32
}; j['flambe.display.TextSprite'] = l.TextSprite; l.TextSprite.__name__ = [
'flambe',
'display',
'TextSprite'
]; l.TextSprite.__super__ = l.Sprite; l.TextSprite.prototype = x(l.Sprite.prototype, {
updateGlyphs: function () {
if (0 != (this._flags & 32)) {
this._flags &= - 33;
this._glyphs = this._font.getGlyphs(this._text);
this._offsets = [
0
];
for (var a = this._height = this._width = 0, b = this._glyphs.length; a < b; ) {
var c = this._glyphs[a];
++a;
a == b ? this._width += c.width : (this._width += c.xAdvance +
c.getKerning(this._glyphs[a].charCode), this._offsets.push(this._width));
this._height = H.FMath.max(this._height, c.height + c.yOffset)
}
}
},
set_font: function (a) {
this._font = a;
this._flags |= 32;
return a
},
set_text: function (a) {
this._text = a;
this._flags |= 32;
return a
},
getNaturalHeight: function () {
this.updateGlyphs();
return this._height
},
getNaturalWidth: function () {
this.updateGlyphs();
return this._width
},
draw: function (a) {
this.updateGlyphs();
for (var b = 0, c = this._glyphs.length; b < c; ) this._glyphs[b].draw(a, this._offsets[b], 0),
++b
},
__class__: l.TextSprite
}); l.Texture = function () {
}; j['flambe.display.Texture'] = l.Texture; l.Texture.__name__ = [
'flambe',
'display',
'Texture'
]; l.Texture.prototype = {
__class__: l.Texture
}; A = {
External: function () {
}
}; j['flambe.external.External'] = A.External; A.External.__name__ = [
'flambe',
'external',
'External'
]; A.External.prototype = {
__class__: A.External
}; d = {
}; d.Key = j['flambe.input.Key'] = {
__ename__: [
'flambe',
'input',
'Key'
],
__constructs__: 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown'.split(',')
};
d.Key.A = [
'A',
0
]; d.Key.A.toString = p; d.Key.A.__enum__ = d.Key; d.Key.B = [
'B',
1
]; d.Key.B.toString = p; d.Key.B.__enum__ = d.Key; d.Key.C = [
'C',
2
]; d.Key.C.toString = p; d.Key.C.__enum__ = d.Key; d.Key.D = [
'D',
3
]; d.Key.D.toString = p; d.Key.D.__enum__ = d.Key; d.Key.E = [
'E',
4
]; d.Key.E.toString = p; d.Key.E.__enum__ = d.Key; d.Key.F = [
'F',
5
]; d.Key.F.toString = p; d.Key.F.__enum__ = d.Key; d.Key.G = [
'G',
6
]; d.Key.G.toString = p; d.Key.G.__enum__ = d.Key; d.Key.H = [
'H',
7
]; d.Key.H.toString = p; d.Key.H.__enum__ = d.Key; d.Key.I = [
'I',
8
]; d.Key.I.toString = p; d.Key.I.__enum__ = d.Key; d.Key.J = [
'J',
9
]; d.Key.J.toString = p; d.Key.J.__enum__ = d.Key; d.Key.K = [
'K',
10
]; d.Key.K.toString = p; d.Key.K.__enum__ = d.Key; d.Key.L = [
'L',
11
]; d.Key.L.toString = p; d.Key.L.__enum__ = d.Key; d.Key.M = [
'M',
12
]; d.Key.M.toString = p; d.Key.M.__enum__ = d.Key; d.Key.N = [
'N',
13
]; d.Key.N.toString = p; d.Key.N.__enum__ = d.Key; d.Key.O = [
'O',
14
]; d.Key.O.toString = p; d.Key.O.__enum__ = d.Key; d.Key.P = [
'P',
15
]; d.Key.P.toString = p; d.Key.P.__enum__ = d.Key; d.Key.Q = [
'Q',
16
]; d.Key.Q.toString = p; d.Key.Q.__enum__ = d.Key; d.Key.R = [
'R',
17
]; d.Key.R.toString = p; d.Key.R.__enum__ = d.Key; d.Key.S = [
'S',
18
]; d.Key.S.toString = p; d.Key.S.__enum__ = d.Key; d.Key.T = [
'T',
19
]; d.Key.T.toString = p; d.Key.T.__enum__ = d.Key; d.Key.U = [
'U',
20
]; d.Key.U.toString = p; d.Key.U.__enum__ = d.Key; d.Key.V = [
'V',
21
]; d.Key.V.toString = p; d.Key.V.__enum__ = d.Key; d.Key.W = [
'W',
22
]; d.Key.W.toString = p; d.Key.W.__enum__ = d.Key; d.Key.X = [
'X',
23
]; d.Key.X.toString = p; d.Key.X.__enum__ = d.Key; d.Key.Y = [
'Y',
24
]; d.Key.Y.toString = p; d.Key.Y.__enum__ = d.Key; d.Key.Z = [
'Z',
25
]; d.Key.Z.toString = p; d.Key.Z.__enum__ = d.Key; d.Key.Number0 = [
'Number0',
26
]; d.Key.Number0.toString = p; d.Key.Number0.__enum__ = d.Key; d.Key.Number1 = [
'Number1',
27
]; d.Key.Number1.toString = p; d.Key.Number1.__enum__ = d.Key; d.Key.Number2 = [
'Number2',
28
]; d.Key.Number2.toString = p; d.Key.Number2.__enum__ = d.Key; d.Key.Number3 = [
'Number3',
29
]; d.Key.Number3.toString = p; d.Key.Number3.__enum__ = d.Key; d.Key.Number4 = [
'Number4',
30
]; d.Key.Number4.toString = p; d.Key.Number4.__enum__ = d.Key; d.Key.Number5 = [
'Number5',
31
]; d.Key.Number5.toString = p; d.Key.Number5.__enum__ = d.Key; d.Key.Number6 = [
'Number6',
32
]; d.Key.Number6.toString = p; d.Key.Number6.__enum__ = d.Key; d.Key.Number7 = [
'Number7',
33
]; d.Key.Number7.toString = p; d.Key.Number7.__enum__ = d.Key; d.Key.Number8 = [
'Number8',
34
]; d.Key.Number8.toString = p; d.Key.Number8.__enum__ = d.Key; d.Key.Number9 = [
'Number9',
35
]; d.Key.Number9.toString = p; d.Key.Number9.__enum__ = d.Key; d.Key.Numpad0 = [
'Numpad0',
36
]; d.Key.Numpad0.toString = p; d.Key.Numpad0.__enum__ = d.Key; d.Key.Numpad1 = [
'Numpad1',
37
]; d.Key.Numpad1.toString = p; d.Key.Numpad1.__enum__ = d.Key; d.Key.Numpad2 = [
'Numpad2',
38
];
d.Key.Numpad2.toString = p; d.Key.Numpad2.__enum__ = d.Key; d.Key.Numpad3 = [
'Numpad3',
39
]; d.Key.Numpad3.toString = p; d.Key.Numpad3.__enum__ = d.Key; d.Key.Numpad4 = [
'Numpad4',
40
]; d.Key.Numpad4.toString = p; d.Key.Numpad4.__enum__ = d.Key; d.Key.Numpad5 = [
'Numpad5',
41
]; d.Key.Numpad5.toString = p; d.Key.Numpad5.__enum__ = d.Key; d.Key.Numpad6 = [
'Numpad6',
42
]; d.Key.Numpad6.toString = p; d.Key.Numpad6.__enum__ = d.Key; d.Key.Numpad7 = [
'Numpad7',
43
]; d.Key.Numpad7.toString = p; d.Key.Numpad7.__enum__ = d.Key; d.Key.Numpad8 = [
'Numpad8',
44
]; d.Key.Numpad8.toString = p; d.Key.Numpad8.__enum__ = d.Key; d.Key.Numpad9 = [
'Numpad9',
45
]; d.Key.Numpad9.toString = p; d.Key.Numpad9.__enum__ = d.Key; d.Key.NumpadAdd = [
'NumpadAdd',
46
]; d.Key.NumpadAdd.toString = p; d.Key.NumpadAdd.__enum__ = d.Key; d.Key.NumpadDecimal = [
'NumpadDecimal',
47
]; d.Key.NumpadDecimal.toString = p; d.Key.NumpadDecimal.__enum__ = d.Key; d.Key.NumpadDivide = [
'NumpadDivide',
48
]; d.Key.NumpadDivide.toString = p; d.Key.NumpadDivide.__enum__ = d.Key; d.Key.NumpadEnter = [
'NumpadEnter',
49
]; d.Key.NumpadEnter.toString = p; d.Key.NumpadEnter.__enum__ = d.Key; d.Key.NumpadMultiply = [
'NumpadMultiply',
50
]; d.Key.NumpadMultiply.toString = p; d.Key.NumpadMultiply.__enum__ = d.Key; d.Key.NumpadSubtract = [
'NumpadSubtract',
51
]; d.Key.NumpadSubtract.toString = p; d.Key.NumpadSubtract.__enum__ = d.Key; d.Key.F1 = [
'F1',
52
]; d.Key.F1.toString = p; d.Key.F1.__enum__ = d.Key; d.Key.F2 = [
'F2',
53
]; d.Key.F2.toString = p; d.Key.F2.__enum__ = d.Key; d.Key.F3 = [
'F3',
54
]; d.Key.F3.toString = p; d.Key.F3.__enum__ = d.Key; d.Key.F4 = [
'F4',
55
]; d.Key.F4.toString = p; d.Key.F4.__enum__ = d.Key; d.Key.F5 = [
'F5',
56
]; d.Key.F5.toString = p; d.Key.F5.__enum__ = d.Key; d.Key.F6 = [
'F6',
57
]; d.Key.F6.toString = p; d.Key.F6.__enum__ = d.Key; d.Key.F7 = [
'F7',
58
]; d.Key.F7.toString = p; d.Key.F7.__enum__ = d.Key; d.Key.F8 = [
'F8',
59
]; d.Key.F8.toString = p; d.Key.F8.__enum__ = d.Key; d.Key.F9 = [
'F9',
60
]; d.Key.F9.toString = p; d.Key.F9.__enum__ = d.Key; d.Key.F10 = [
'F10',
61
]; d.Key.F10.toString = p; d.Key.F10.__enum__ = d.Key; d.Key.F11 = [
'F11',
62
]; d.Key.F11.toString = p; d.Key.F11.__enum__ = d.Key; d.Key.F12 = [
'F12',
63
]; d.Key.F12.toString = p; d.Key.F12.__enum__ = d.Key; d.Key.F13 = [
'F13',
64
]; d.Key.F13.toString = p; d.Key.F13.__enum__ = d.Key; d.Key.F14 = [
'F14',
65
]; d.Key.F14.toString = p; d.Key.F14.__enum__ = d.Key; d.Key.F15 = [
'F15',
66
]; d.Key.F15.toString = p; d.Key.F15.__enum__ = d.Key; d.Key.Left = [
'Left',
67
]; d.Key.Left.toString = p; d.Key.Left.__enum__ = d.Key; d.Key.Up = [
'Up',
68
]; d.Key.Up.toString = p; d.Key.Up.__enum__ = d.Key; d.Key.Right = [
'Right',
69
]; d.Key.Right.toString = p; d.Key.Right.__enum__ = d.Key; d.Key.Down = [
'Down',
70
]; d.Key.Down.toString = p; d.Key.Down.__enum__ = d.Key; d.Key.Alt = [
'Alt',
71
]; d.Key.Alt.toString = p; d.Key.Alt.__enum__ = d.Key; d.Key.Backquote = [
'Backquote',
72
]; d.Key.Backquote.toString = p; d.Key.Backquote.__enum__ = d.Key; d.Key.Backslash = [
'Backslash',
73
]; d.Key.Backslash.toString = p; d.Key.Backslash.__enum__ = d.Key; d.Key.Backspace = [
'Backspace',
74
]; d.Key.Backspace.toString = p; d.Key.Backspace.__enum__ = d.Key; d.Key.CapsLock = [
'CapsLock',
75
]; d.Key.CapsLock.toString = p; d.Key.CapsLock.__enum__ = d.Key; d.Key.Comma = [
'Comma',
76
]; d.Key.Comma.toString = p; d.Key.Comma.__enum__ = d.Key; d.Key.Command = [
'Command',
77
]; d.Key.Command.toString = p; d.Key.Command.__enum__ = d.Key; d.Key.Control = [
'Control',
78
]; d.Key.Control.toString = p; d.Key.Control.__enum__ = d.Key; d.Key.Delete = [
'Delete',
79
]; d.Key.Delete.toString = p; d.Key.Delete.__enum__ = d.Key; d.Key.End = [
'End',
80
]; d.Key.End.toString = p; d.Key.End.__enum__ = d.Key; d.Key.Enter = [
'Enter',
81
]; d.Key.Enter.toString = p; d.Key.Enter.__enum__ = d.Key; d.Key.Equals = [
'Equals',
82
]; d.Key.Equals.toString = p; d.Key.Equals.__enum__ = d.Key; d.Key.Escape = [
'Escape',
83
]; d.Key.Escape.toString = p; d.Key.Escape.__enum__ = d.Key; d.Key.Home = [
'Home',
84
]; d.Key.Home.toString = p; d.Key.Home.__enum__ = d.Key; d.Key.Insert = [
'Insert',
85
]; d.Key.Insert.toString = p; d.Key.Insert.__enum__ = d.Key; d.Key.LeftBracket = [
'LeftBracket',
86
]; d.Key.LeftBracket.toString = p; d.Key.LeftBracket.__enum__ = d.Key; d.Key.Minus = [
'Minus',
87
]; d.Key.Minus.toString = p; d.Key.Minus.__enum__ = d.Key; d.Key.PageDown = [
'PageDown',
88
]; d.Key.PageDown.toString = p; d.Key.PageDown.__enum__ = d.Key; d.Key.PageUp = [
'PageUp',
89
]; d.Key.PageUp.toString = p; d.Key.PageUp.__enum__ = d.Key; d.Key.Period = [
'Period',
90
]; d.Key.Period.toString = p; d.Key.Period.__enum__ = d.Key; d.Key.Quote = [
'Quote',
91
]; d.Key.Quote.toString = p; d.Key.Quote.__enum__ = d.Key; d.Key.RightBracket = [
'RightBracket',
92
]; d.Key.RightBracket.toString = p; d.Key.RightBracket.__enum__ = d.Key; d.Key.Semicolon = [
'Semicolon',
93
]; d.Key.Semicolon.toString = p; d.Key.Semicolon.__enum__ = d.Key; d.Key.Shift = [
'Shift',
94
]; d.Key.Shift.toString = p; d.Key.Shift.__enum__ = d.Key; d.Key.Slash = [
'Slash',
95
]; d.Key.Slash.toString = p; d.Key.Slash.__enum__ = d.Key; d.Key.Space = [
'Space',
96
]; d.Key.Space.toString = p; d.Key.Space.__enum__ = d.Key; d.Key.Tab = [
'Tab',
97
]; d.Key.Tab.toString = p; d.Key.Tab.__enum__ = d.Key; d.Key.Menu = [
'Menu',
98
]; d.Key.Menu.toString = p; d.Key.Menu.__enum__ = d.Key; d.Key.Search = [
'Search',
99
]; d.Key.Search.toString = p; d.Key.Search.__enum__ = d.Key; d.Key.Unknown = function (a) {
a = [
'Unknown',
100,
a
];
a.__enum__ = d.Key;
a.toString = p;
return a
}; d.Keyboard = function () {
}; j['flambe.input.Keyboard'] = d.Keyboard; d.Keyboard.__name__ = [
'flambe',
'input',
'Keyboard'
]; d.Keyboard.prototype = {
__class__: d.Keyboard
}; d.KeyboardEvent = function () {
this._internal_init(0, null)
};
j['flambe.input.KeyboardEvent'] = d.KeyboardEvent; d.KeyboardEvent.__name__ = [
'flambe',
'input',
'KeyboardEvent'
]; d.KeyboardEvent.prototype = {
_internal_init: function (a, b) {
this.id = a;
this.key = b
},
__class__: d.KeyboardEvent
}; d.Mouse = function () {
}; j['flambe.input.Mouse'] = d.Mouse; d.Mouse.__name__ = [
'flambe',
'input',
'Mouse'
]; d.Mouse.prototype = {
__class__: d.Mouse
}; d.MouseButton = j['flambe.input.MouseButton'] = {
__ename__: [
'flambe',
'input',
'MouseButton'
],
__constructs__: [
'Left',
'Middle',
'Right',
'Unknown'
]
}; d.MouseButton.Left = [
'Left',
0
]; d.MouseButton.Left.toString = p; d.MouseButton.Left.__enum__ = d.MouseButton; d.MouseButton.Middle = [
'Middle',
1
]; d.MouseButton.Middle.toString = p; d.MouseButton.Middle.__enum__ = d.MouseButton; d.MouseButton.Right = [
'Right',
2
]; d.MouseButton.Right.toString = p; d.MouseButton.Right.__enum__ = d.MouseButton; d.MouseButton.Unknown = function (a) {
a = [
'Unknown',
3,
a
];
a.__enum__ = d.MouseButton;
a.toString = p;
return a
}; d.MouseCursor = j['flambe.input.MouseCursor'] = {
__ename__: [
'flambe',
'input',
'MouseCursor'
],
__constructs__: [
'Default',
'Button',
'None'
]
}; d.MouseCursor.Default = [
'Default',
0
]; d.MouseCursor.Default.toString = p; d.MouseCursor.Default.__enum__ = d.MouseCursor; d.MouseCursor.Button = [
'Button',
1
]; d.MouseCursor.Button.toString = p; d.MouseCursor.Button.__enum__ = d.MouseCursor; d.MouseCursor.None = [
'None',
2
]; d.MouseCursor.None.toString = p; d.MouseCursor.None.__enum__ = d.MouseCursor; d.MouseEvent = function () {
this._internal_init(0, 0, 0, null)
}; j['flambe.input.MouseEvent'] = d.MouseEvent; d.MouseEvent.__name__ = [
'flambe',
'input',
'MouseEvent'
]; d.MouseEvent.prototype = {
_internal_init: function (a, b, c, d) {
this.id = a;
this.viewX = b;
this.viewY = c;
this.button = d
},
__class__: d.MouseEvent
}; d.Pointer = function () {
}; j['flambe.input.Pointer'] = d.Pointer; d.Pointer.__name__ = [
'flambe',
'input',
'Pointer'
]; d.Pointer.prototype = {
__class__: d.Pointer
}; d.EventSource = j['flambe.input.EventSource'] = {
__ename__: [
'flambe',
'input',
'EventSource'
],
__constructs__: [
'Mouse',
'Touch'
]
}; d.EventSource.Mouse = function (a) {
a = [
'Mouse',
0,
a
];
a.__enum__ = d.EventSource;
a.toString = p;
return a
}; d.EventSource.Touch = function (a) {
a = [
'Touch',
1,
a
];
a.__enum__ = d.EventSource;
a.toString = p;
return a
}; d.PointerEvent = function () {
this._internal_init(0, 0, 0, null, null)
}; j['flambe.input.PointerEvent'] = d.PointerEvent; d.PointerEvent.__name__ = [
'flambe',
'input',
'PointerEvent'
]; d.PointerEvent.prototype = {
_internal_init: function (a, b, c, d, e) {
this.id = a;
this.viewX = b;
this.viewY = c;
this.hit = d;
this.source = e;
this._internal_stopped = !1
},
__class__: d.PointerEvent
}; d.Touch = function () {
}; j['flambe.input.Touch'] = d.Touch; d.Touch.__name__ = [
'flambe',
'input',
'Touch'
];
d.Touch.prototype = {
__class__: d.Touch
}; d.TouchPoint = function (a) {
this.id = a;
this._internal_source = d.EventSource.Touch(this)
}; j['flambe.input.TouchPoint'] = d.TouchPoint; d.TouchPoint.__name__ = [
'flambe',
'input',
'TouchPoint'
]; d.TouchPoint.prototype = {
_internal_init: function (a, b) {
this.viewX = a;
this.viewY = b
},
__class__: d.TouchPoint
}; H.FMath = function () {
}; j['flambe.math.FMath'] = H.FMath; H.FMath.__name__ = [
'flambe',
'math',
'FMath'
]; H.FMath.max = function (a, b) {
return a > b ? a : b
}; H.FMath.clamp = function (a, b, c) {
return a < b ? b :
a > c ? c : a
}; H.Matrix = function () {
this.identity()
}; j['flambe.math.Matrix'] = H.Matrix; H.Matrix.__name__ = [
'flambe',
'math',
'Matrix'
]; H.Matrix.multiply = function (a, b, c) {
null == c && (c = new H.Matrix);
var d = a.m00 * b.m00 + a.m01 * b.m10,
e = a.m00 * b.m01 + a.m01 * b.m11,
f = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
c.m00 = d;
c.m01 = e;
c.m02 = f;
d = a.m10 * b.m00 + a.m11 * b.m10;
e = a.m10 * b.m01 + a.m11 * b.m11;
f = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
c.m10 = d;
c.m11 = e;
c.m12 = f;
return c
}; H.Matrix.prototype = {
inverseTransform: function (a, b, c) {
var d = this.determinant();
if (0 == d) return !1;
a -= this.m02;
b -= this.m12;
c.x = (a * this.m11 - b * this.m01) / d;
c.y = (b * this.m00 - a * this.m10) / d;
return !0
},
determinant: function () {
return this.m00 * this.m11 - this.m01 * this.m10
},
transform: function (a, b, c) {
null == c && (c = new H.Point);
c.x = a * this.m00 + b * this.m01 + this.m02;
c.y = a * this.m10 + b * this.m11 + this.m12;
return c
},
translate: function (a, b) {
this.m02 += this.m00 * a + this.m01 * b;
this.m12 += this.m11 * b + this.m10 * a
},
compose: function (a, b, c, d, e) {
var f = Math.sin(e),
e = Math.cos(e);
this.set(e * c, f * c, - f * d, e * d, a, b)
},
identity: function () {
this.set(1, 0, 0, 1, 0, 0)
},
set: function (a, b, c, d, e, f) {
this.m00 = a;
this.m01 = c;
this.m02 = e;
this.m10 = b;
this.m11 = d;
this.m12 = f
},
__class__: H.Matrix
}; H.Rectangle = function (a, b, c, d) {
null == d && (d = 0);
null == c && (c = 0);
null == b && (b = 0);
null == a && (a = 0);
this.set(a, b, c, d)
}; j['flambe.math.Rectangle'] = H.Rectangle; H.Rectangle.__name__ = [
'flambe',
'math',
'Rectangle'
]; H.Rectangle.prototype = {
contains: function (a, b) {
a -= this.x;
b -= this.y;
return 0 <= a && 0 <= b && a <= this.width && b <= this.height
},
set: function (a, b, c, d) {
this.x = a;
this.y = b;
this.width = c;
this.height = d
},
__class__: H.Rectangle
}; h.BasicAssetPackLoader = function (a, b) {
this._platform = a;
this.promise = new n.Promise;
this._bytesLoaded = new I;
this._pack = new h._BasicAssetPackLoader.BasicAssetPack(b);
var c = ba.array(b);
if (0 == c.length) this.handleSuccess();
 else {
for (var d = 0, e = new I, f = 0; f < c.length; ) {
var g = c[f];
++f;
var i = e.get(g.name);
null == i && (i = [
], e.set(g.name, i));
i.push(g)
}
this._assetsRemaining = ba.count(e);
for (c = e.iterator(); c.hasNext(); ) if (i = c.next(), i = 1 < i.length ? this.pickBestEntry(i)  : i[0], e = this.createPlaceholder(i), null != e) this.handleLoad(i, e);
 else {
d += i.bytes;
e = b.getFullURL(i);
try {
this.loadEntry(e, i)
} catch (l) {
this.handleError(i, 'Unexpected error: ' + q.string(l))
}
}
this.promise.set_total(d)
}
}; j['flambe.platform.BasicAssetPackLoader'] = h.BasicAssetPackLoader; h.BasicAssetPackLoader.__name__ = [
'flambe',
'platform',
'BasicAssetPackLoader'
]; h.BasicAssetPackLoader.prototype = {
handleTextureError: function (a) {
this.handleError(a, 'Failed to create texture. Is the GPU context unavailable?')
},
handleError: function (a, b) {
this.promise.error.emit1(n.Strings.withFields(b, [
'url',
a.url
]))
},
handleSuccess: function () {
this.promise.set_result(this._pack)
},
handleProgress: function (a, b) {
this._bytesLoaded.set(a.name, b);
for (var c = 0, d = this._bytesLoaded.iterator(); d.hasNext(); ) var e = d.next(),
c = c + e;
this.promise.set_progress(c)
},
handleLoad: function (a, b) {
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
this._pack.files.set(c, b)
}
this._assetsRemaining -= 1;
0 >= this._assetsRemaining && this.handleSuccess()
},
getAudioFormats: function () {
return []
},
loadEntry: function () {
},
createPlaceholder: function (a) {
switch (a.type[1]) {
case 1:
if (!ba.has(this.getAudioFormats(), a.getUrlExtension())) return h.DummySound.getInstance()
}
return null
},
pickBestEntry: function (a) {
switch (a[0].type[1]) {
case 1:
for (var b = this.getAudioFormats(), c = 0; c < b.length; ) {
var d = b[c];
++c;
for (var e = 0; e < a.length; ) {
var f = a[e];
++e;
if (f.getUrlExtension() == d) return f
}
}
}
return a[0]
},
__class__: h.BasicAssetPackLoader
};
h._BasicAssetPackLoader = {
};
h._BasicAssetPackLoader.BasicAssetPack = function (a) {
this._manifest = a;
this.textures = new I;
this.sounds = new I;
this.files = new I
};
j['flambe.platform._BasicAssetPackLoader.BasicAssetPack'] = h._BasicAssetPackLoader.BasicAssetPack;
h._BasicAssetPackLoader.BasicAssetPack.__name__ = [
'flambe',
'platform',
'_BasicAssetPackLoader',
'BasicAssetPack'
];
h._BasicAssetPackLoader.BasicAssetPack.__interfaces__ = [
z.AssetPack
];
h._BasicAssetPackLoader.BasicAssetPack.prototype = {
get_manifest: function () {
return this._manifest
},
getFile: function (a, b) {
null == b && (b = !0);
var c = this.files.get(a);
if (null == c && b) throw n.Strings.withFields('Missing file', [
'name',
a
]);
return c
},
getSound: function (a, b) {
null == b && (b = !0);
var c = this.sounds.get(a);
if (null == c && b) throw n.Strings.withFields('Missing sound', [
'name',
a
]);
return c
},
getTexture: function (a, b) {
null == b && (b = !0);
var c = this.textures.get(a);
if (null == c && b) throw n.Strings.withFields('Missing texture', [
'name',
a
]);
return c
},
__class__: h._BasicAssetPackLoader.BasicAssetPack
};
h.BasicKeyboard = function () {
this.down = new n.Signal1;
this.up = new n.Signal1;
this.backButton = new n.Signal0;
this._keyStates = new V
};
j['flambe.platform.BasicKeyboard'] = h.BasicKeyboard;
h.BasicKeyboard.__name__ = [
'flambe',
'platform',
'BasicKeyboard'
];
h.BasicKeyboard.__interfaces__ = [
d.Keyboard
];
h.BasicKeyboard.prototype = {
submitUp: function (a) {
this._keyStates.exists(a) && (this._keyStates.remove(a), h.BasicKeyboard._sharedEvent._internal_init(h.BasicKeyboard._sharedEvent.id + 1, h.KeyCodes.toKey(a)), this.up.emit1(h.BasicKeyboard._sharedEvent))
},
submitDown: function (a) {
if (16777238 == a) return null !=
this.backButton._head ? (this.backButton.emit0(), !0)  : !1;
this._keyStates.exists(a) || (this._keyStates.set(a, !0), h.BasicKeyboard._sharedEvent._internal_init(h.BasicKeyboard._sharedEvent.id + 1, h.KeyCodes.toKey(a)), this.down.emit1(h.BasicKeyboard._sharedEvent));
return !0
},
isDown: function (a) {
return this._keyStates.exists(h.KeyCodes.toKeyCode(a))
},
get_supported: function () {
return !0
},
__class__: h.BasicKeyboard
};
h.BasicMouse = function (a) {
this._pointer = a;
this._source = d.EventSource.Mouse(h.BasicMouse._sharedEvent);
this.down = new n.Signal1;
this.move = new n.Signal1;
this.up = new n.Signal1;
this.scroll = new n.Signal1;
this._y = this._x = 0;
this._cursor = d.MouseCursor.Default;
this._buttonStates = new V
};
j['flambe.platform.BasicMouse'] = h.BasicMouse;
h.BasicMouse.__name__ = [
'flambe',
'platform',
'BasicMouse'
];
h.BasicMouse.__interfaces__ = [
d.Mouse
];
h.BasicMouse.prototype = {
prepare: function (a, b, c) {
this._x = a;
this._y = b;
h.BasicMouse._sharedEvent._internal_init(h.BasicMouse._sharedEvent.id + 1, a, b, c)
},
submitScroll: function (a, b, c) {
this._x = a;
this._y = b;
if (null == this.scroll._head) return !1;
this.scroll.emit1(c);
return !0
},
submitUp: function (a, b, c) {
this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, h.MouseCodes.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit1(h.BasicMouse._sharedEvent))
},
submitMove: function (a, b) {
this.prepare(a, b, null);
this._pointer.submitMove(a, b, this._source);
this.move.emit1(h.BasicMouse._sharedEvent)
},
submitDown: function (a, b, c) {
this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, h.MouseCodes.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit1(h.BasicMouse._sharedEvent))
},
isDown: function (a) {
return this._buttonStates.exists(h.MouseCodes.toButtonCode(a))
},
set_cursor: function (a) {
return this._cursor = a
},
get_cursor: function () {
return this._cursor
},
get_y: function () {
return this._y
},
get_x: function () {
return this._x
},
get_supported: function () {
return !0
},
__class__: h.BasicMouse
};
h.BasicPointer = function (a, b, c) {
null == c && (c = !1);
null == b && (b = 0);
null == a && (a = 0);
this.down = new n.Signal1;
this.move = new n.Signal1;
this.up = new n.Signal1;
this._x = a;
this._y = b;
this._isDown = c
};
j['flambe.platform.BasicPointer'] = h.BasicPointer;
h.BasicPointer.__name__ = [
'flambe',
'platform',
'BasicPointer'
];
h.BasicPointer.__interfaces__ = [
d.Pointer
];
h.BasicPointer.prototype = {
prepare: function (a, b, c, d) {
this._x = a;
this._y = b;
h.BasicPointer._sharedEvent._internal_init(h.BasicPointer._sharedEvent.id + 1, a, b, c, d)
},
submitUp: function (a, b, c) {
if (this._isDown) {
this._isDown = !1;
var d = [
],
e = l.Sprite.hitTest(D.root, a, b);
if (null != e) {
var f = e.owner;
do {
var g = f._compMap.Sprite_1;
null != g && d.push(g);
f = f.parent
} while (null != f)
}
this.prepare(a, b, e, c);
for (a = 0; a < d.length; ) if (g = d[a], ++a, g = g._internal_pointerUp, null != g && (g.emit1(h.BasicPointer._sharedEvent), h.BasicPointer._sharedEvent._internal_stopped)) return;
this.up.emit1(h.BasicPointer._sharedEvent)
}
},
submitMove: function (a, b, c) {
var d = [
],
e = l.Sprite.hitTest(D.root, a, b);
if (null != e) {
var f = e.owner;
do {
var g = f._compMap.Sprite_1;
null != g && d.push(g);
f = f.parent
} while (null != f)
}
this.prepare(a, b, e, c);
for (a = 0; a < d.length; ) if (g = d[a], ++a, g = g._internal_pointerMove, null != g && (g.emit1(h.BasicPointer._sharedEvent), h.BasicPointer._sharedEvent._internal_stopped)) return;
this.move.emit1(h.BasicPointer._sharedEvent)
},
submitDown: function (a, b, c) {
if (!this._isDown) {
this._isDown = !0;
var d = [
],
e = l.Sprite.hitTest(D.root, a, b);
if (null != e) {
var f = e.owner;
do {
var g = f._compMap.Sprite_1;
null != g && d.push(g);
f = f.parent
} while (null != f)
}
this.prepare(a, b, e, c);
for (a = 0; a < d.length; ) if (g = d[a], ++a, g = g._internal_pointerDown, null !=
g && (g.emit1(h.BasicPointer._sharedEvent), h.BasicPointer._sharedEvent._internal_stopped)) return;
this.down.emit1(h.BasicPointer._sharedEvent)
}
},
isDown: function () {
return this._isDown
},
get_y: function () {
return this._y
},
get_x: function () {
return this._x
},
get_supported: function () {
return !0
},
__class__: h.BasicPointer
};
h.BasicTouch = function (a, b) {
null == b && (b = 4);
this._pointer = a;
this._maxPoints = b;
this._pointMap = new V;
this._points = [
];
this.down = new n.Signal1;
this.move = new n.Signal1;
this.up = new n.Signal1
};
j['flambe.platform.BasicTouch'] = h.BasicTouch;
h.BasicTouch.__name__ = [
'flambe',
'platform',
'BasicTouch'
];
h.BasicTouch.__interfaces__ = [
d.Touch
];
h.BasicTouch.prototype = {
submitUp: function (a, b, c) {
var d = this._pointMap.get(a);
null != d && (d._internal_init(b, c), this._pointMap.remove(a), B.remove(this._points, d), this._pointerTouch == d && (this._pointerTouch = null, this._pointer.submitUp(b, c, d._internal_source)), this.up.emit1(d))
},
submitMove: function (a, b, c) {
a = this._pointMap.get(a);
null != a && (a._internal_init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._internal_source), this.move.emit1(a))
},
submitDown: function (a, b, c) {
if (!this._pointMap.exists(a)) {
var e = new d.TouchPoint(a);
e._internal_init(b, c);
this._pointMap.set(a, e);
this._points.push(e);
null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._internal_source));
this.down.emit1(e)
}
},
get_points: function () {
return this._points.slice()
},
get_maxPoints: function () {
return this._maxPoints
},
get_supported: function () {
return !0
},
__class__: h.BasicTouch
};
G.Sound = function () {
};
j['flambe.sound.Sound'] = G.Sound;
G.Sound.__name__ = [
'flambe',
'sound',
'Sound'
];
G.Sound.prototype = {
__class__: G.Sound
};
h.DummySound = function () {
this._playback = new h.DummyPlayback(this)
};
j['flambe.platform.DummySound'] = h.DummySound;
h.DummySound.__name__ = [
'flambe',
'platform',
'DummySound'
];
h.DummySound.__interfaces__ = [
G.Sound
];
h.DummySound.getInstance = function () {
null == h.DummySound._instance && (h.DummySound._instance = new h.DummySound);
return h.DummySound._instance
};
h.DummySound.prototype = {
get_duration: function () {
return 0
},
loop: function () {
return this._playback
},
play: function () {
return this._playback
},
__class__: h.DummySound
};
G.Playback = function () {
};
j['flambe.sound.Playback'] = G.Playback;
G.Playback.__name__ = [
'flambe',
'sound',
'Playback'
];
G.Playback.__interfaces__ = [
n.Disposable
];
G.Playback.prototype = {
__class__: G.Playback
};
h.DummyPlayback = function (a) {
this._sound = a;
this.volume = new F.AnimatedFloat(0)
};
j['flambe.platform.DummyPlayback'] = h.DummyPlayback;
h.DummyPlayback.__name__ = [
'flambe',
'platform',
'DummyPlayback'
];
h.DummyPlayback.__interfaces__ = [
G.Playback
];
h.DummyPlayback.prototype = {
dispose: function () {
},
get_position: function () {
return 0
},
get_ended: function () {
return !0
},
set_paused: function () {
return !0
},
get_paused: function () {
return !0
},
get_sound: function () {
return this._sound
},
__class__: h.DummyPlayback
};
aa = {
Storage: function () {
}
};
j['flambe.storage.Storage'] = aa.Storage;
aa.Storage.__name__ = [
'flambe',
'storage',
'Storage'
];
aa.Storage.prototype = {
__class__: aa.Storage
};
h.DummyStorage = function () {
this.clear()
};
j['flambe.platform.DummyStorage'] = h.DummyStorage;
h.DummyStorage.__name__ = [
'flambe',
'platform',
'DummyStorage'
];
h.DummyStorage.__interfaces__ = [
aa.Storage
];
h.DummyStorage.prototype = {
clear: function () {
this._hash = new I
},
remove: function (a) {
this._hash.remove(a)
},
get: function (a, b) {
return this._hash.exists(a) ? this._hash.get(a)  : b
},
set: function (a, b) {
this._hash.set(a, b);
return !0
},
get_supported: function () {
return !1
},
__class__: h.DummyStorage
};
h.DummyTouch = function () {
this.down = new n.Signal1;
this.move = new n.Signal1;
this.up = new n.Signal1
};
j['flambe.platform.DummyTouch'] = h.DummyTouch;
h.DummyTouch.__name__ = [
'flambe',
'platform',
'DummyTouch'
];
h.DummyTouch.__interfaces__ = [
d.Touch
];
h.DummyTouch.prototype = {
get_points: function () {
return []
},
get_maxPoints: function () {
return 0
},
get_supported: function () {
return !1
},
__class__: h.DummyTouch
};
h.EventGroup = function () {
this._entries = [
]
};
j['flambe.platform.EventGroup'] = h.EventGroup;
h.EventGroup.__name__ = [
'flambe',
'platform',
'EventGroup'
];
h.EventGroup.__interfaces__ = [
n.Disposable
];
h.EventGroup.prototype = {
dispose: function () {
for (var a = 0, b = this._entries; a < b.length; ) {
var c = b[a];
++a;
c.dispatcher.removeEventListener(c.type, c.listener, !1)
}
this._entries = [
]
},
addDisposingListener: function (a, b, c) {
var d = this;
this.addListener(a, b, function (a) {
d.dispose();
c(a)
})
},
addListener: function (a, b, c) {
a.addEventListener(b, c, !1);
this._entries.push(new h._EventGroup.Entry(a, b, c))
},
__class__: h.EventGroup
};
h._EventGroup = {
};
h._EventGroup.Entry = function (a, b, c) {
this.dispatcher = a;
this.type = b;
this.listener = c
};
j['flambe.platform._EventGroup.Entry'] = h._EventGroup.Entry;
h._EventGroup.Entry.__name__ = [
'flambe',
'platform',
'_EventGroup',
'Entry'
];
h._EventGroup.Entry.prototype = {
__class__: h._EventGroup.Entry
};
h.KeyCodes = function () {
};
j['flambe.platform.KeyCodes'] = h.KeyCodes;
h.KeyCodes.__name__ = [
'flambe',
'platform',
'KeyCodes'
];
h.KeyCodes.toKey = function (a) {
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
h.KeyCodes.toKeyCode = function (a) {
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
h.MainLoop = function () {
this._tickables = [
]
};
j['flambe.platform.MainLoop'] = h.MainLoop;
h.MainLoop.__name__ = [
'flambe',
'platform',
'MainLoop'
];
h.MainLoop.updateEntity = function (a, b) {
var c = a._compMap.SpeedAdjuster_5;
if (null != c && (c._internal_realDt = b, b *= c.scale._value, 0 >= b)) {
c.onUpdate(b);
return
}
for (var d = a.firstComponent; null != d; ) c = d.next,
d.onUpdate(b),
d = c;
for (d = a.firstChild; null != d; ) c = d.next,
h.MainLoop.updateEntity(d, b),
d = c
};
h.MainLoop.prototype = {
addTickable: function (a) {
this._tickables.push(a)
},
render: function (a) {
var b = a.willRender();
null != b && (l.Sprite.render(D.root, b), a.didRender())
},
update: function (a) {
if (!(0 >= a)) {
1 < a && (a = 1);
for (var b = 0; b < this._tickables.length; ) {
var c = this._tickables[b];
null == c || c.update(a) ? this._tickables.splice(b, 1)  : ++b
}
h.MainLoop.updateEntity(D.root, a)
}
},
__class__: h.MainLoop
};
h.ManifestBuilder = function () {
};
j['flambe.platform.ManifestBuilder'] = h.ManifestBuilder;
h.ManifestBuilder.__name__ = [
'flambe',
'platform',
'ManifestBuilder'
];
h.MouseCodes = function () {
};
j['flambe.platform.MouseCodes'] = h.MouseCodes;
h.MouseCodes.__name__ = [
'flambe',
'platform',
'MouseCodes'
];
h.MouseCodes.toButton = function (a) {
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
h.MouseCodes.toButtonCode = function (a) {
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
h.Renderer = function () {
};
j['flambe.platform.Renderer'] = h.Renderer;
h.Renderer.__name__ = [
'flambe',
'platform',
'Renderer'
];
h.Renderer.prototype = {
__class__: h.Renderer
};
h.Tickable = function () {
};
j['flambe.platform.Tickable'] = h.Tickable;
h.Tickable.__name__ = [
'flambe',
'platform',
'Tickable'
];
h.Tickable.prototype = {
__class__: h.Tickable
};
h.html.CanvasGraphics = function (a) {
this._firstDraw = this._drawToTemp = !1;
this._canvasCtx = a.getContext('2d');
this.clear()
};
j['flambe.platform.html.CanvasGraphics'] = h.html.CanvasGraphics;
h.html.CanvasGraphics.__name__ = [
'flambe',
'platform',
'html',
'CanvasGraphics'
];
h.html.CanvasGraphics.__interfaces__ = [
l.Graphics
];
h.html.CanvasGraphics.prototype = {
erase: function () {
this._canvasCtx.clearRect(0, 0, this._canvasCtx.canvas.width, this._canvasCtx.canvas.height)
},
clip2: function (a, b) {
this._tempGraphics.erase();
this._tempGraphics.save();
var c = b.getLocalMatrix();
this._tempGraphics.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12);
this._tempGraphics.setAlpha(b.alpha._value);
w.__instanceof(b, l.MaskSprite) ? (c = w.__cast(b, l.MaskSprite), w.__instanceof(c.shape, l.FillSprite) && this.tint(c.shape, c.image, !1))  : b.draw(this._tempGraphics);
this._tempGraphics.restore();
this._tempGraphics.save();
this._tempGraphics.setGlobalComposite('destination-in');
c = a.getLocalMatrix();
this._tempGraphics.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12);
this._tempGraphics.setAlpha(a.alpha._value);
a.draw(this._tempGraphics);
this._tempGraphics.setGlobalComposite('source-over');
this.setGlobalComposite('source-over');
this._canvasCtx.drawImage(this._tempCanvas, 0, 0);
this._tempGraphics.restore()
},
clip: function (a, b) {
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
tint: function (a, b, c) {
null == c && (c = !0);
c && this._tempGraphics.erase();
this._tempGraphics.setAlpha(a.alpha._value);
a.draw(this._tempGraphics);
this._tempGraphics.setGlobalComposite('destination-atop');
this._tempGraphics.setAlpha(b.alpha._value);
b.draw(this._tempGraphics);
this._tempGraphics.setGlobalComposite('source-over');
this.setGlobalComposite('source-over');
c && this._canvasCtx.drawImage(this._tempCanvas, 0, 0)
},
mask: function (a, b) {
w.__instanceof(a, l.FillSprite) ? this.tint(a, b)  : w.__instanceof(a, l.ShapeSprite) ? this.clip(a, b)  : this.clip2(a, b)
},
arc: function (a, b, c, d, e) {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).arc(a, b, c, d, e)
},
isPointInPath: function (a, b) {
return this._canvasCtx.isPointInPath(a, b)
},
bezierCurveTo: function (a, b, c, d, e, f) {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).bezierCurveTo(a, b, c, d, e, f)
},
quadraticCurveTo: function (a, b, c, d) {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).quadraticCurveTo(a, b, c, d)
},
drawShapeSprite: function () {
this._canvasCtx.drawImage(this._tempCanvas, 0, 0);
this._tempGraphics.erase()
},
endFill: function () {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).fill();
this._drawToTemp = !1
},
beginFill: function (a) {
this._drawToTemp = !0;
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).fillStyle = '#' + ('00000' + a.toString(16)).slice( - 6)
},
endStroke: function () {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).stroke();
this._drawToTemp = !1
},
beginStroke: function (a, b) {
this._drawToTemp = !0;
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).strokeStyle = '#' + ('00000' + a.toString(16)).slice( - 6);
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).lineWidth = b
},
closePath: function () {
(this._drawToTemp ?
this._tempGraphics._canvasCtx : this._canvasCtx).closePath()
},
beginPath: function () {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).beginPath()
},
lineTo: function (a, b) {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).lineTo(a, b)
},
moveTo: function (a, b) {
(this._drawToTemp ? this._tempGraphics._canvasCtx : this._canvasCtx).moveTo(a, b)
},
willRender: function () {
this._firstDraw = !0
},
applyScissor: function (a, b, c, d) {
this._canvasCtx.beginPath();
this._canvasCtx.rect(a | 0, b | 0, c | 0, d | 0);
this._canvasCtx.clip()
},
setGlobalComposite: function (a) {
this._canvasCtx.globalCompositeOperation = a
},
setBlendMode: function (a) {
var b;
switch (a[1]) {
case 0:
b = 'source-over';
break;
case 1:
b = 'lighter';
break;
case 2:
b = 'source-over'
}
this._canvasCtx.globalCompositeOperation = b
},
setAlpha: function (a) {
this._canvasCtx.globalAlpha = a
},
multiplyAlpha: function (a) {
this._canvasCtx.globalAlpha *= a
},
fillRect: function (a, b, c, d, e) {
this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = 'copy', this.fillRect(a, b, c, d, e), this._canvasCtx.globalCompositeOperation = 'source-over')  : (this._canvasCtx.fillStyle = '#' + ('00000' + a.toString(16)).slice( - 6), this._canvasCtx.fillRect(b | 0, c | 0, d | 0, e | 0))
},
drawPattern: function (a, b, c, d, e) {
this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = 'copy', this.drawPattern(a, b, c, d, e), this._canvasCtx.globalCompositeOperation = 'source-over')  : (null == a.pattern && (a.pattern = this._canvasCtx.createPattern(a.image, 'repeat')), this._canvasCtx.fillStyle = a.pattern, this._canvasCtx.fillRect(b | 0, c | 0, d | 0, e | 0))
},
drawSubImage: function (a, b, c, d, e, f, h) {
this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = 'copy', this.drawSubImage(a, b, c, d, e, f, h), this._canvasCtx.globalCompositeOperation = 'source-over')  : this._canvasCtx.drawImage(a.image, d | 0, e | 0, f | 0, h | 0, b | 0, c | 0, f | 0, h | 0)
},
drawImage: function (a, b, c) {
this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = 'copy', this.drawImage(a, b, c), this._canvasCtx.globalCompositeOperation = 'source-over')  : this._canvasCtx.drawImage(a.image, b | 0, c | 0)
},
restore: function () {
this._canvasCtx.restore()
},
transform: function (a, b, c, d, e, f) {
this._canvasCtx.transform(a, b, c, d, e | 0, f | 0)
},
rotate: function (a) {
this._canvasCtx.rotate(3.141592653589793 * a / 180)
},
scale: function (a, b) {
this._canvasCtx.scale(a, b)
},
translate: function (a, b) {
this._canvasCtx.translate(a | 0, b | 0)
},
save: function () {
this._canvasCtx.save()
},
clear: function () {
this._canvasCtx.fillStyle = '#000000';
this._canvasCtx.fillRect(0, 0, this._canvasCtx.canvas.width, this._canvasCtx.canvas.height)
},
getTemp: function () {
this._tempCanvas = h.html.HtmlPlatform.instance.getTempCanvas();
this._tempGraphics = h.html.HtmlPlatform.instance.getTempGraphics()
},
__class__: h.html.CanvasGraphics
};
h.html.CanvasRenderer = function (a) {
this._drawCtx = new h.html.CanvasGraphics(a);
this._drawCtx.clear();
this._drawCtx.getTemp()
};
j['flambe.platform.html.CanvasRenderer'] = h.html.CanvasRenderer;
h.html.CanvasRenderer.__name__ = [
'flambe',
'platform',
'html',
'CanvasRenderer'
];
h.html.CanvasRenderer.__interfaces__ = [
h.Renderer
];
h.html.CanvasRenderer.prototype = {
didRender: function () {
},
willRender: function () {
this._drawCtx.willRender();
return this._drawCtx
},
createEmptyTexture: function (a, b) {
var c = y.document.createElement('canvas');
c.width = a;
c.height = b;
return new h.html.CanvasTexture(c)
},
createTexture: function (a) {
return new h.html.CanvasTexture(h.html.CanvasRenderer.CANVAS_TEXTURES ? h.html.HtmlUtil.createCanvas(a)  : a)
},
__class__: h.html.CanvasRenderer
};
h.html.CanvasTexture = function (a) {
this._graphics = null;
this.image = a
};
j['flambe.platform.html.CanvasTexture'] = h.html.CanvasTexture;
h.html.CanvasTexture.__name__ = [
'flambe',
'platform',
'html',
'CanvasTexture'
];
h.html.CanvasTexture.__interfaces__ = [
l.Texture
];
h.html.CanvasTexture.prototype = {
getContext2d: function () {
w.__instanceof(this.image, HTMLCanvasElement) || (this.image = h.html.HtmlUtil.createCanvas(this.image));
return this.image.getContext('2d')
},
get_graphics: function () {
null == this._graphics && (this.getContext2d(), this._graphics = new h.html._CanvasTexture.InternalGraphics(this));
return this._graphics
},
get_height: function () {
return this.image.height
},
get_width: function () {
return this.image.width
},
writePixels: function (a, b, c, d, e) {
var f = this.getContext2d(),
h = f.createImageData(d, e),
g = h.data;
if (null != g.set) g.set(a.b);
 else {
d = 4 * d * e;
for (e = 0; e < d; ) {
var i = e++;
g[i] = a.b[i]
}
}
f.putImageData(h, b, c);
this.pattern = null
},
readPixels: function (a, b, c, d) {
return U.Bytes.ofData(this.getContext2d().getImageData(a, b, c, d).data)
},
__class__: h.html.CanvasTexture
};
h.html._CanvasTexture = {
};
h.html._CanvasTexture.InternalGraphics = function (a) {
h.html.CanvasGraphics.call(this, a.image);
this._renderTarget = a
};
j['flambe.platform.html._CanvasTexture.InternalGraphics'] = h.html._CanvasTexture.InternalGraphics;
h.html._CanvasTexture.InternalGraphics.__name__ = [
'flambe',
'platform',
'html',
'_CanvasTexture',
'InternalGraphics'
];
h.html._CanvasTexture.InternalGraphics.__super__ = h.html.CanvasGraphics;
h.html._CanvasTexture.InternalGraphics.prototype = x(h.html.CanvasGraphics.prototype, {
fillRect: function (a, b, c, d, e) {
h.html.CanvasGraphics.prototype.fillRect.call(this, a, b, c, d, e);
this._renderTarget.pattern = null
},
drawPattern: function (a, b, c, d, e) {
h.html.CanvasGraphics.prototype.drawPattern.call(this, a, b, c, d, e);
this._renderTarget.pattern = null
},
drawSubImage: function (a, b, c, d, e, f, g) {
h.html.CanvasGraphics.prototype.drawSubImage.call(this, a, b, c, d, e, f, g);
this._renderTarget.pattern = null
},
drawImage: function (a, b, c) {
h.html.CanvasGraphics.prototype.drawImage.call(this, a, b, c);
this._renderTarget.pattern = null
},
__class__: h.html._CanvasTexture.InternalGraphics
});
h.html.HtmlAssetPackLoader = function (a, b) {
h.BasicAssetPackLoader.call(this, a, b)
};
j['flambe.platform.html.HtmlAssetPackLoader'] = h.html.HtmlAssetPackLoader;
h.html.HtmlAssetPackLoader.__name__ = [
'flambe',
'platform',
'html',
'HtmlAssetPackLoader'
];
h.html.HtmlAssetPackLoader.detectAudioFormats = function () {
var a = y.document.createElement('audio');
if (null == a || null == a.canPlayType) return [];
var b = new W('\\b(iPhone|iPod|iPad|Android)\\b', '');
if (!h.html.WebAudioSound.get_supported() && b.match(y.window.navigator.userAgent)) return [];
for (var b = [
{
extension: 'm4a',
type: 'audio/mp4; codecs=mp4a'
},
{
extension: 'mp3',
type: 'audio/mpeg'
},
{
extension: 'ogg',
type: 'audio/ogg; codecs=vorbis'
},
{
extension: 'wav',
type: 'audio/wav'
}
], c = [
], d = 0; d < b.length; ) {
var e = b[d];
++d;
var f = '';
try {
f = a.canPlayType(e.type)
} catch (g) {
}
'' != f && c.push(e.extension)
}
return c
};
h.html.HtmlAssetPackLoader.supportsBlob = function () {
if (h.html.HtmlAssetPackLoader._detectBlobSupport) {
h.html.HtmlAssetPackLoader._detectBlobSupport = !1;
try {
(new XMLHttpRequest).responseType = ''
} catch (a) {
return !1
}
h.html.HtmlAssetPackLoader._URL = h.html.HtmlUtil.loadExtension('URL').value
}
return null != h.html.HtmlAssetPackLoader._URL && null != h.html.HtmlAssetPackLoader._URL.createObjectURL
};
h.html.HtmlAssetPackLoader.__super__ = h.BasicAssetPackLoader;
h.html.HtmlAssetPackLoader.prototype = x(h.BasicAssetPackLoader.prototype, {
handleLoad: function (a, b) {
this.handleProgress(a, a.bytes);
h.BasicAssetPackLoader.prototype.handleLoad.call(this, a, b)
},
sendRequest: function (a, b, c, d) {
var e = this,
f = new XMLHttpRequest,
h = 0,
g = function () {
h = Date.now();
f.open('GET', a, !0);
f.responseType = c;
'' == f.responseType && (f.responseType = 'arraybuffer');
f.send()
},
i = 0;
if ('undefined' != typeof f.onprogress) {
var l = 4;
f.onprogress = function (a) {
h = Date.now();
e.handleProgress(b, a.loaded)
};
i = y.window.setInterval(function () {
1 <= f.readyState && 5000 < Date.now() - h && (f.abort(), --l, 0 < l ? g()  : (y.window.clearInterval(i), e.handleError(b, 'Failed to load asset: timeout')))
}, 1000)
}
f.onload = function () {
y.window.clearInterval(i);
var a = f.response;
null == a ? a = f.responseText : 'blob' == c && 'arraybuffer' == f.responseType && (a = new Blob([f.response]));
d(a)
};
f.onerror = function () {
y.window.clearInterval(i);
e.handleError(b, 'Failed to load asset: error #' + q.string(f.status))
};
g();
return f
},
getAudioFormats: function () {
null == h.html.HtmlAssetPackLoader._audioFormats && (h.html.HtmlAssetPackLoader._audioFormats = h.html.HtmlAssetPackLoader.detectAudioFormats());
return h.html.HtmlAssetPackLoader._audioFormats
},
loadEntry: function (a, b) {
var c = this;
switch (b.type[1]) {
case 0:
var d = new Image,
e = new h.EventGroup;
e.addDisposingListener(d, 'load', function () {
h.html.HtmlAssetPackLoader.supportsBlob() && h.html.HtmlAssetPackLoader._URL.revokeObjectURL(d.src);
var a = c._platform.getRenderer().createTexture(d);
null !=
a ? c.handleLoad(b, a)  : c.handleTextureError(b)
});
e.addDisposingListener(d, 'error', function () {
c.handleError(b, 'Failed to load image')
});
h.html.HtmlAssetPackLoader.supportsBlob() ? this.sendRequest(a, b, 'blob', function (a) {
d.src = h.html.HtmlAssetPackLoader._URL.createObjectURL(a)
})  : d.src = a;
break;
case 1:
if (h.html.WebAudioSound.get_supported()) this.sendRequest(a, b, 'arraybuffer', function (a) {
h.html.WebAudioSound.ctx.decodeAudioData(a, function (a) {
c.handleLoad(b, new h.html.WebAudioSound(a))
}, function () {
c.handleLoad(b, h.DummySound.getInstance())
})
});
 else {
var f = y.document.createElement('audio');
f.preload = 'auto';
var g = ++h.html.HtmlAssetPackLoader._mediaRefCount;
null == h.html.HtmlAssetPackLoader._mediaElements && (h.html.HtmlAssetPackLoader._mediaElements = new V);
h.html.HtmlAssetPackLoader._mediaElements.set(g, f);
e = new h.EventGroup;
e.addDisposingListener(f, 'canplaythrough', function () {
h.html.HtmlAssetPackLoader._mediaElements.remove(g);
c.handleLoad(b, new h.html.HtmlSound(f))
});
e.addDisposingListener(f, 'error', function () {
h.html.HtmlAssetPackLoader._mediaElements.remove(g);
var a = f.error.code;
3 == a || 4 == a ? c.handleLoad(b, h.DummySound.getInstance())  : c.handleError(b, 'Failed to load audio: ' + q.string(f.error.code))
});
e.addListener(f, 'progress', function () {
if (0 < f.buffered.length && 0 < f.duration) {
var a = f.buffered.end(0) / f.duration;
c.handleProgress(b, a * b.bytes | 0)
}
});
f.src = a;
f.load()
}
break;
case 2:
this.sendRequest(a, b, 'text', function (a) {
c.handleLoad(b, a)
})
}
},
__class__: h.html.HtmlAssetPackLoader
}); h.html.HtmlExternal = function () {
}; j['flambe.platform.html.HtmlExternal'] = h.html.HtmlExternal;
h.html.HtmlExternal.__name__ = [
'flambe',
'platform',
'html',
'HtmlExternal'
]; h.html.HtmlExternal.__interfaces__ = [
A.External
]; h.html.HtmlExternal.prototype = {
bind: function (a, b) {
y.window[a] = b
},
call: function (a, b) {
null == b && (b = [
]);
return J.field(y.window, a).apply(null, b)
},
get_supported: function () {
return !0
},
__class__: h.html.HtmlExternal
}; h.html.HtmlMouse = function (a, b) {
h.BasicMouse.call(this, a);
this._canvas = b
}; j['flambe.platform.html.HtmlMouse'] = h.html.HtmlMouse; h.html.HtmlMouse.__name__ = [
'flambe',
'platform',
'html',
'HtmlMouse'
]; h.html.HtmlMouse.__super__ = h.BasicMouse; h.html.HtmlMouse.prototype = x(h.BasicMouse.prototype, {
set_cursor: function (a) {
var b;
switch (a[1]) {
case 0:
b = '';
break;
case 1:
b = 'pointer';
break;
case 2:
b = 'none'
}
this._canvas.style.cursor = b;
return h.BasicMouse.prototype.set_cursor.call(this, a)
},
__class__: h.html.HtmlMouse
}); h.html.HtmlSound = function (a) {
this.audioElement = a
}; j['flambe.platform.html.HtmlSound'] = h.html.HtmlSound; h.html.HtmlSound.__name__ = [
'flambe',
'platform',
'html',
'HtmlSound'
]; h.html.HtmlSound.__interfaces__ = [
G.Sound
]; h.html.HtmlSound.prototype = {
get_duration: function () {
return this.audioElement.duration
},
loop: function (a) {
null == a && (a = 1);
return new h.html._HtmlSound.HtmlPlayback(this, a, !0)
},
play: function (a) {
null == a && (a = 1);
return new h.html._HtmlSound.HtmlPlayback(this, a, !1)
},
__class__: h.html.HtmlSound
}; h.html._HtmlSound = {
}; h.html._HtmlSound.HtmlPlayback = function (a, b, c) {
var d = this;
this._sound = a;
this._tickableAdded = !1;
this.volume = new F.AnimatedFloat(b, function (a) {
d._clonedElement.volume = a
});
this._clonedElement = y.document.createElement('audio');
this._clonedElement.volume = b;
this._clonedElement.loop = c;
this._clonedElement.src = a.audioElement.src;
this.playAudio()
}; j['flambe.platform.html._HtmlSound.HtmlPlayback'] = h.html._HtmlSound.HtmlPlayback; h.html._HtmlSound.HtmlPlayback.__name__ = [
'flambe',
'platform',
'html',
'_HtmlSound',
'HtmlPlayback'
]; h.html._HtmlSound.HtmlPlayback.__interfaces__ = [
h.Tickable,
G.Playback
]; h.html._HtmlSound.HtmlPlayback.prototype = {
playAudio: function () {
this._clonedElement.play();
this._tickableAdded || (h.html.HtmlPlatform.instance.mainLoop.addTickable(this), this._tickableAdded = !0)
},
dispose: function () {
this.set_paused(!0)
},
update: function (a) {
this.volume.update(a);
return this._clonedElement.ended || this._clonedElement.paused ? (this._tickableAdded = !1, !0)  : !1
},
get_position: function () {
return this._clonedElement.currentTime
},
get_ended: function () {
return this._clonedElement.ended
},
set_paused: function (a) {
this._clonedElement.paused != a && (a ? this._clonedElement.pause()  : this.playAudio());
return a
},
get_paused: function () {
return this._clonedElement.paused
},
get_sound: function () {
return this._sound
},
__class__: h.html._HtmlSound.HtmlPlayback
}; h.html.HtmlStage = function (a) {
var b = this;
this._canvas = a;
this.resize = new n.Signal0;
this.scaleFactor = h.html.HtmlStage.computeScaleFactor(a);
1 != this.scaleFactor && (h.html.HtmlUtil.setVendorStyle(this._canvas, 'transform-origin', 'top left'), h.html.HtmlUtil.setVendorStyle(this._canvas, 'transform', 'scale(' + 1 / this.scaleFactor + ')'));
h.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener('orientationchange', function () {
h.html.HtmlUtil.callLater(s(b, b.hideMobileBrowser), 200)
}, !1), this.hideMobileBrowser());
window.addEventListener('resize', s(this, this.onWindowResize), !1);
this.onWindowResize();
this.orientation = new n.Value(null);
null != window.orientation && (window.addEventListener('orientationchange', s(this, this.onOrientationChange), !1), this.onOrientationChange());
this.fullscreen = new n.Value(!1);
h.html.HtmlUtil.addVendorListener(y.document, 'fullscreenchange', function () {
b.updateFullscreen()
}, !1);
this.updateFullscreen()
}; j['flambe.platform.html.HtmlStage'] = h.html.HtmlStage; h.html.HtmlStage.__name__ = [
'flambe',
'platform',
'html',
'HtmlStage'
]; h.html.HtmlStage.__interfaces__ = [
l.Stage
]; h.html.HtmlStage.computeScaleFactor = function () {
return 1
}; h.html.HtmlStage.prototype = {
updateFullscreen: function () {
this.fullscreen.set__(!0 == h.html.HtmlUtil.loadFirstExtension(['fullscreen',
'fullScreen',
'isFullScreen'], y.document).value)
},
onOrientationChange: function () {
this.orientation.set__(h.html.HtmlUtil.orientation(window.orientation))
},
hideMobileBrowser: function () {
var a = this,
b = y.document.documentElement.style;
b.height = y.window.innerHeight + 100 + 'px';
b.width = y.window.innerWidth + 'px';
b.overflow = 'visible';
h.html.HtmlUtil.callLater(function () {
h.html.HtmlUtil.hideMobileBrowser();
h.html.HtmlUtil.callLater(function () {
b.height = y.window.innerHeight + 'px';
a.onWindowResize()
}, 100)
})
},
resizeCanvas: function (a, b) {
var c = this.scaleFactor * a,
d = this.scaleFactor * b;
if (this._canvas.width == c && this._canvas.height == d) return !1;
this._canvas.width = c;
this._canvas.height = d;
this.resize.emit0();
return !0
},
onWindowResize: function () {
var a = this._canvas.parentNode.getBoundingClientRect();
this.resizeCanvas(a.width, a.height)
},
requestFullscreen: function (a) {
null == a && (a = !0);
if (a) {
var a = y.document.documentElement,
b = h.html.HtmlUtil.loadFirstExtension(['requestFullscreen',
'requestFullScreen'], a).value;
null != b && b.apply(a, [
])
} else a = h.html.HtmlUtil.loadFirstExtension(['cancelFullscreen',
'cancelFullScreen'], y.document).value,
null != a && a.apply(y.document, [
])
},
requestResize: function (a, b) {
if (this.resizeCanvas(a, b)) {
var c = this._canvas.parentNode;
c.style.width = a + 'px';
c.style.height = b + 'px'
}
},
unlockOrientation: function () {
},
lockOrientation: function () {
},
get_fullscreenSupported: function () {
return !0 == h.html.HtmlUtil.loadFirstExtension(['fullscreenEnabled',
'fullScreenEnabled'], y.document).value
},
get_height: function () {
return this._canvas.height
},
get_width: function () {
return this._canvas.width
},
__class__: h.html.HtmlStage
}; h.html.HtmlStorage = function (a) {
this._storage = a
}; j['flambe.platform.html.HtmlStorage'] = h.html.HtmlStorage;
h.html.HtmlStorage.__name__ = [
'flambe',
'platform',
'html',
'HtmlStorage'
]; h.html.HtmlStorage.__interfaces__ = [
aa.Storage
]; h.html.HtmlStorage.prototype = {
clear: function () {
try {
this._storage.clear()
} catch (a) {
null
}
},
remove: function (a) {
try {
this._storage.removeItem('flambe:' + a)
} catch (b) {
null
}
},
get: function (a, b) {
var c = null;
try {
c = this._storage.getItem('flambe:' + a)
} catch (d) {
null
}
if (null != c) try {
return O.run(c)
} catch (e) {
null
}
return b
},
set: function (a, b) {
var c;
try {
var d = new S;
d.useCache = !0;
d.useEnumIndex = !1;
d.serialize(b);
c = d.toString()
} catch (e) {
return !1
}
try {
this._storage.setItem('flambe:' + a, c)
} catch (f) {
return !1
}
return !0
},
get_supported: function () {
return !0
},
__class__: h.html.HtmlStorage
}; h.html.HtmlUtil = function () {
}; j['flambe.platform.html.HtmlUtil'] = h.html.HtmlUtil; h.html.HtmlUtil.__name__ = [
'flambe',
'platform',
'html',
'HtmlUtil'
]; h.html.HtmlUtil.callLater = function (a, b) {
null == b && (b = 0);
y.window.setTimeout(a, b)
}; h.html.HtmlUtil.hideMobileBrowser = function () {
y.window.scrollTo(1, 0)
}; h.html.HtmlUtil.loadExtension = function (a, b) {
null == b && (b = y.window);
var c = J.field(b, a);
if (null != c) return {
prefix: null,
field: a,
value: c
};
for (var c = a.charAt(0).toUpperCase() + B.substr(a, 1, null), d = 0, e = h.html.HtmlUtil.VENDOR_PREFIXES; d < e.length; ) {
var f = e[d];
++d;
var g = f + c,
i = J.field(b, g);
if (null != i) return {
prefix: f,
field: g,
value: i
}
}
return {
prefix: null,
field: null,
value: null
}
}; h.html.HtmlUtil.loadFirstExtension = function (a, b) {
for (var c = 0; c < a.length; ) {
var d = a[c];
++c;
d = h.html.HtmlUtil.loadExtension(d, b);
if (null != d.field) return d
}
return {
prefix: null,
field: null,
value: null
}
}; h.html.HtmlUtil.polyfill = function (a, b) {
null == b && (b = y.window);
var c = h.html.HtmlUtil.loadExtension(a, b).value;
if (null == c) return !1;
b[a] = c;
return !0
}; h.html.HtmlUtil.setVendorStyle = function (a, b, c) {
for (var a = a.style, d = 0, e = h.html.HtmlUtil.VENDOR_PREFIXES; d < e.length; ) {
var f = e[d];
++d;
a.setProperty('-' + f + '-' + b, c)
}
a.setProperty(b, c)
}; h.html.HtmlUtil.addVendorListener = function (a, b, c, d) {
for (var e = 0, f = h.html.HtmlUtil.VENDOR_PREFIXES; e < f.length; ) {
var g = f[e];
++e;
a.addEventListener(g + b, c, d)
}
a.addEventListener(b, c, d)
}; h.html.HtmlUtil.orientation = function (a) {
switch (a) {
case - 90:
case 90:
return l.Orientation.Landscape;
default:
return l.Orientation.Portrait
}
};
h.html.HtmlUtil.createCanvas = function (a) {
var b = y.document.createElement('canvas');
b.width = a.width;
b.height = a.height;
var c = b.getContext('2d');
c.save();
c.globalCompositeOperation = 'copy';
c.drawImage(a, 0, 0);
c.restore();
return b
};
A = {
Web: function () {
}
};
j['flambe.web.Web'] = A.Web;
A.Web.__name__ = [
'flambe',
'web',
'Web'
];
A.Web.prototype = {
__class__: A.Web
};
h.html.HtmlWeb = function (a) {
this._container = a
};
j['flambe.platform.html.HtmlWeb'] = h.html.HtmlWeb;
h.html.HtmlWeb.__name__ = [
'flambe',
'platform',
'html',
'HtmlWeb'
];
h.html.HtmlWeb.__interfaces__ = [
A.Web
];
h.html.HtmlWeb.prototype = {
openBrowser: function (a) {
y.window.open(a, '_blank')
},
createView: function (a, b, c, d) {
var e = y.document.createElement('iframe');
e.style.position = 'absolute';
e.style.border = '0';
e.scrolling = 'no';
this._container.appendChild(e);
a = new h.html.HtmlWebView(e, a, b, c, d);
h.html.HtmlPlatform.instance.mainLoop.addTickable(a);
return a
},
get_supported: function () {
return !0
},
__class__: h.html.HtmlWeb
};
A.WebView = function () {
};
j['flambe.web.WebView'] = A.WebView;
A.WebView.__name__ = [
'flambe',
'web',
'WebView'
];
A.WebView.__interfaces__ = [
n.Disposable
];
A.WebView.prototype = {
__class__: A.WebView
};
h.html.HtmlWebView = function (a, b, c, d, e) {
var f = this;
this.iframe = a;
a = function () {
f.updateBounds()
};
this.x = new F.AnimatedFloat(b, a);
this.y = new F.AnimatedFloat(c, a);
this.width = new F.AnimatedFloat(d, a);
this.height = new F.AnimatedFloat(e, a);
this.updateBounds();
this.url = new n.Value(null, function (a) {
f.loadUrl(a)
});
this.error = new n.Signal1
};
j['flambe.platform.html.HtmlWebView'] = h.html.HtmlWebView;
h.html.HtmlWebView.__name__ = [
'flambe',
'platform',
'html',
'HtmlWebView'
];
h.html.HtmlWebView.__interfaces__ = [
h.Tickable,
A.WebView
];
h.html.HtmlWebView.prototype = {
loadUrl: function (a) {
null != this.iframe && (this.iframe.src = a)
},
updateBounds: function () {
null != this.iframe && (this.iframe.style.left = this.x._value + 'px', this.iframe.style.top = this.y._value + 'px', this.iframe.width = this.width._value, this.iframe.height = this.height._value)
},
update: function (a) {
this.x.update(a);
this.y.update(a);
this.width.update(a);
this.height.update(a);
return null == this.iframe
},
dispose: function () {
null != this.iframe && (this.iframe.parentNode.removeChild(this.iframe), this.iframe = null)
},
__class__: h.html.HtmlWebView
};
h.html.WebAudioSound = function (a) {
this.buffer = a
};
j['flambe.platform.html.WebAudioSound'] = h.html.WebAudioSound;
h.html.WebAudioSound.__name__ = [
'flambe',
'platform',
'html',
'WebAudioSound'
];
h.html.WebAudioSound.__interfaces__ = [
G.Sound
];
h.html.WebAudioSound.get_supported = function () {
if (h.html.WebAudioSound._detectSupport) {
h.html.WebAudioSound._detectSupport = !1;
var a = h.html.HtmlUtil.loadExtension('AudioContext').value;
h.html.WebAudioSound.ctx = null != a ? new a : null
}
return null != h.html.WebAudioSound.ctx
};
h.html.WebAudioSound.prototype = {
get_duration: function () {
return this.buffer.duration
},
loop: function (a) {
null == a && (a = 1);
return new h.html._WebAudioSound.WebAudioPlayback(this, a, !0)
},
play: function (a) {
null == a && (a = 1);
return new h.html._WebAudioSound.WebAudioPlayback(this, a, !1)
},
__class__: h.html.WebAudioSound
};
h.html._WebAudioSound = {
};
h.html._WebAudioSound.WebAudioPlayback = function (a, b, c) {
var d = this;
this._sound = a;
this._head = h.html.WebAudioSound.ctx.destination;
this._sourceNode = h.html.WebAudioSound.ctx.createBufferSource();
this._sourceNode.buffer = a.buffer;
this._sourceNode.loop = c;
this._sourceNode.start(0);
this.playAudio();
this.volume = new F.AnimatedFloat(b, function (a) {
d.setVolume(a)
});
1 != b && this.setVolume(b)
};
j['flambe.platform.html._WebAudioSound.WebAudioPlayback'] = h.html._WebAudioSound.WebAudioPlayback;
h.html._WebAudioSound.WebAudioPlayback.__name__ = [
'flambe',
'platform',
'html',
'_WebAudioSound',
'WebAudioPlayback'
];
h.html._WebAudioSound.WebAudioPlayback.__interfaces__ = [
h.Tickable,
G.Playback
];
h.html._WebAudioSound.WebAudioPlayback.prototype = {
playAudio: function () {
this._sourceNode.connect(this._head);
this._startedAt = h.html.WebAudioSound.ctx.currentTime;
this._pausedAt = - 1;
this._tickableAdded || (this._tickableAdded = !0, h.html.HtmlPlatform.instance.mainLoop.addTickable(this))
},
insertNode: function (a) {
0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
a.connect(this._head);
this._head = a
},
setVolume: function (a) {
null == this._gainNode && (this._gainNode = h.html.WebAudioSound.ctx.createGain(), this.insertNode(this._gainNode));
this._gainNode.gain.value = a
},
dispose: function () {
this.set_paused(!0)
},
update: function (a) {
this.volume.update(a);
return 3 == this._sourceNode.playbackState || 0 <= this._pausedAt ? (this._tickableAdded = !1, !0)  : !1
},
get_position: function () {
return 3 ==
this._sourceNode.playbackState ? this._sound.get_duration()  : 0 <= this._pausedAt ? this._pausedAt : (h.html.WebAudioSound.ctx.currentTime - this._startedAt) % this._sound.get_duration()
},
get_ended: function () {
return 3 == this._sourceNode.playbackState
},
set_paused: function (a) {
a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position())  : this.playAudio());
return a
},
get_paused: function () {
return 0 <= this._pausedAt
},
get_sound: function () {
return this._sound
},
__class__: h.html._WebAudioSound.WebAudioPlayback
};
A = {
Director: function () {
this._width = this._height = - 1;
this._transitor = null;
this.scenes = [
];
this.occludedScenes = [
];
this._root = new L
}
};
j['flambe.scene.Director'] = A.Director;
A.Director.__name__ = [
'flambe',
'scene',
'Director'
];
A.Director.__super__ = M;
A.Director.prototype = x(M.prototype, {
get_height: function () {
return 0 > this._height ? D._platform.getStage().get_height()  : this._height
},
get_width: function () {
return 0 > this._width ? D._platform.getStage().get_width()  : this._width
},
completeTransition: function () {
null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
},
invalidateVisibility: function () {
for (var a = this.scenes.length; 0 < a; ) {
var b = this.scenes[--a],
b = b._compMap.Scene_4;
if (null == b || b.opaque) break
}
this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1)  : [
];
b = this.get_topScene();
null != b && this.show(b)
},
show: function (a) {
a = a._compMap.Scene_4;
null != a && a.shown.emit0()
},
get_topScene: function () {
var a = this.scenes.length;
return 0 < a ? this.scenes[a - 1] : null
},
onUpdate: function (a) {
null !=
this._transitor && this._transitor.update(a) && this.completeTransition()
},
onRemoved: function () {
this.completeTransition();
for (var a = 0, b = this.scenes; a < b.length; ) {
var c = b[a];
++a;
c.dispose()
}
this.scenes = [
];
this.occludedScenes = [
];
this._root.dispose()
},
onAdded: function () {
this.owner.addChild(this._root)
},
get_name: function () {
return 'Director_0'
},
__class__: A.Director
});
A._Director = {
};
A._Director.Transitor = function () {
};
j['flambe.scene._Director.Transitor'] = A._Director.Transitor;
A._Director.Transitor.__name__ = [
'flambe',
'scene',
'_Director',
'Transitor'
];
A._Director.Transitor.prototype = {
complete: function () {
this._transition.complete();
this._onComplete()
},
update: function (a) {
return this._transition.update(a)
},
__class__: A._Director.Transitor
};
A.Scene = function (a) {
null == a && (a = !0);
this.opaque = a;
this.shown = new n.Signal0;
this.hidden = new n.Signal0
};
j['flambe.scene.Scene'] = A.Scene;
A.Scene.__name__ = [
'flambe',
'scene',
'Scene'
];
A.Scene.__super__ = M;
A.Scene.prototype = x(M.prototype, {
get_name: function () {
return 'Scene_4'
},
__class__: A.Scene
});
A.Transition = function () {
};
j['flambe.scene.Transition'] = A.Transition;
A.Transition.__name__ = [
'flambe',
'scene',
'Transition'
];
A.Transition.prototype = {
complete: function () {
},
update: function () {
return !0
},
__class__: A.Transition
};
G._Mixer = {
};
G._Mixer.MixerSound = function (a, b) {
this._source = a;
this._channels = b;
this._playbacks = [
]
};
j['flambe.sound._Mixer.MixerSound'] = G._Mixer.MixerSound;
G._Mixer.MixerSound.__name__ = [
'flambe',
'sound',
'_Mixer',
'MixerSound'
];
G._Mixer.MixerSound.__interfaces__ = [
n.Disposable,
G.Sound
];
G._Mixer.MixerSound.prototype = {
dispose: function () {
for (var a = 0, b = this._playbacks; a < b.length; ) {
var c = b[a];
++a;
c.dispose()
}
this._playbacks = [
]
},
get_duration: function () {
return this._source.get_duration()
},
findOpenChannel: function () {
for (var a = 0, b = this._channels; a < b; ) {
var c = a++,
d = this._playbacks[c];
if (null == d || d.get_ended()) return c
}
return - 1
},
playOrLoop: function (a, b) {
var c = this.findOpenChannel();
if (0 > c) return new h.DummyPlayback(this);
var d = b ? this._source.loop(a)  : this._source.play(a);
return this._playbacks[c] = d
},
loop: function (a) {
null == a && (a = 1);
return this.playOrLoop(a, !0)
},
play: function (a) {
null == a && (a = 1);
return this.playOrLoop(a, !1)
},
__class__: G._Mixer.MixerSound
};
v = {
BitmapSprite: function (a) {
l.Sprite.call(this);
this.symbol = a;
this.anchorX.set__(a.anchorX);
this.anchorY.set__(a.anchorY)
}
};
j['flambe.swf.BitmapSprite'] = v.BitmapSprite;
v.BitmapSprite.__name__ = [
'flambe',
'swf',
'BitmapSprite'
];
v.BitmapSprite.__super__ = l.Sprite;
v.BitmapSprite.prototype = x(l.Sprite.prototype, {
getNaturalHeight: function () {
return this.symbol.height
},
getNaturalWidth: function () {
return this.symbol.width
},
draw: function (a) {
a.drawSubImage(this.symbol.atlas, 0, 0, this.symbol.x, this.symbol.y, this.symbol.width, this.symbol.height)
},
__class__: v.BitmapSprite
});
v.Symbol = function () {
};
j['flambe.swf.Symbol'] = v.Symbol;
v.Symbol.__name__ = [
'flambe',
'swf',
'Symbol'
];
v.Symbol.prototype = {
__class__: v.Symbol
};
v.BitmapSymbol = function (a, b) {
this._name = a.symbol;
this.atlas = b;
var c = a.rect;
this.x = c[0];
this.y = c[1];
this.width = c[2];
this.height = c[3];
c = a.origin;
null != c ? (this.anchorX = c[0], this.anchorY = c[1])  : (c = a.offset, null != c ? (this.anchorX = - c[0], this.anchorY = - c[1])  : this.anchorY = this.anchorX = 0)
};
j['flambe.swf.BitmapSymbol'] = v.BitmapSymbol;
v.BitmapSymbol.__name__ = [
'flambe',
'swf',
'BitmapSymbol'
];
v.BitmapSymbol.__interfaces__ = [
v.Symbol
];
v.BitmapSymbol.prototype = {
get_name: function () {
return this._name
},
createSprite: function () {
return new v.BitmapSprite(this)
},
__class__: v.BitmapSymbol
};
v.Library = function (a, b) {
this._symbols = new I;
var c = X.parse(a.getFile(b + '/library.json'));
this.frameRate = c.frameRate;
for (var d = [
], e = 0, f = c.movies; e < f.length; ) {
var h = f[e];
++e;
h = new v.MovieSymbol(this, h);
d.push(h);
this._symbols.set(h.get_name(), h)
}
null != c.textureGroups ? (e = c.textureGroups, (1 != e[0].scaleFactor || 1 < e.length) && null, h = e[0].atlases)  : h = c.atlases;
for (e = 0; e < h.length; ) {
c = h[e];
++e;
for (var g = a.getTexture(b + '/' + n.Strings.removeFileExtension(c.file)), f = 0, c = c.textures; f < c.length; ) {
var i = c[f];
++f;
i = new v.BitmapSymbol(i, g);
this._symbols.set(i.get_name(), i)
}
}
for (e = 0; e < d.length; ) {
h = d[e];
++e;
f = 0;
for (c = h.layers; f <
c.length; ) {
h = c[f];
++f;
g = 0;
for (i = h.keyframes; g < i.length; ) {
var l = i[g];
++g;
var j = this._symbols.get(l.symbolName);
null != j && (null == h.lastSymbol ? h.lastSymbol = j : h.lastSymbol != j && (h.multipleSymbols = !0), l.symbol = j)
}
}
}
};
j['flambe.swf.Library'] = v.Library;
v.Library.__name__ = [
'flambe',
'swf',
'Library'
];
v.Library.prototype = {
__class__: v.Library
};
v.MovieSprite = function (a) {
this._looped = null;
l.Sprite.call(this);
this.symbol = a;
this.animFinishedPlaying = new n.Signal1;
this.speed = new F.AnimatedFloat(1);
this.isPlaying = !0;
this._animators = [
];
for (var b = 0, a = a.layers; b < a.length; ) {
var c = a[b];
++b;
this._animators.push(new v._MovieSprite.LayerAnimator(c))
}
this._position = this._frame = 0;
this['goto'](1)
};
j['flambe.swf.MovieSprite'] = v.MovieSprite;
v.MovieSprite.__name__ = [
'flambe',
'swf',
'MovieSprite'
];
v.MovieSprite.__super__ = l.Sprite;
v.MovieSprite.prototype = x(l.Sprite.prototype, {
get_looped: function () {
null == this._looped && (this._looped = new n.Signal0);
return this._looped
},
set_paused: function (a) {
this._flags = n.BitSets.set(this._flags, 16, a);
return a
},
set_position: function (a) {
return this._position = H.FMath.clamp(a, 0, this.symbol.duration)
},
'goto': function (a) {
if (this._frame != a) {
if (a < this._frame) for (var b = 0, c = this._animators; b < c.length; ) {
var d = c[b];
++b;
d.changedKeyframe = !0;
d.keyframeIdx = 0
}
b = 0;
for (c = this._animators; b < c.length; ) d = c[b],
++b,
d.composeFrame(a);
this._frame = a
}
},
onUpdate: function (a) {
l.Sprite.prototype.onUpdate.call(this, a);
if (this.isPlaying) {
this.speed.update(a);
var b = !1;
0 == (this._flags & 16) && (this._position += this.speed._value * a, this._position > this.symbol.duration && (this._position %= this.symbol.duration, this.animFinishedPlaying.emit1(this), b = !0));
this.isPlaying && (this['goto'](this._position * this.symbol.frameRate), b && null != this._looped && this._looped.emit0())
}
},
onRemoved: function () {
l.Sprite.prototype.onRemoved.call(this);
for (var a = 0, b = this._animators; a < b.length; ) {
var c = b[a];
++a;
this.owner.removeChild(c.content)
}
},
onAdded: function () {
l.Sprite.prototype.onAdded.call(this);
for (var a = 0, b = this._animators; a < b.length; ) {
var c = b[a];
++a;
this.owner.addChild(c.content)
}
},
__class__: v.MovieSprite
});
v._MovieSprite = {
};
v._MovieSprite.LayerAnimator = function (a) {
this._sprites = null;
this.changedKeyframe = !1;
this.keyframeIdx = 0;
this.layer = a;
this.content = new L;
var b;
if (a.multipleSymbols) {
this._sprites = [
];
b = 0;
for (a = a.keyframes; b < a.length; ) {
var c = a[b];
++b;
this._sprites.push(c.symbol.createSprite())
}
b = this._sprites[0]
} else b = null != a.lastSymbol ? a.lastSymbol.createSprite()  : new l.Sprite;
this.content.add(b)
};
j['flambe.swf._MovieSprite.LayerAnimator'] = v._MovieSprite.LayerAnimator;
v._MovieSprite.LayerAnimator.__name__ = [
'flambe',
'swf',
'_MovieSprite',
'LayerAnimator'
];
v._MovieSprite.LayerAnimator.prototype = {
composeFrame: function (a) {
for (var b = this.layer.keyframes, c = b.length - 1; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a; ) ++this.keyframeIdx,
this.changedKeyframe = !0;
var d;
this.changedKeyframe && null != this._sprites ? (this.changedKeyframe = !1, d = this._sprites[this.keyframeIdx], this.content.add(d))  : d = this.content._compMap.Sprite_1;
var e = b[this.keyframeIdx],
f = e.visible;
d.set_visible(f);
if (f) {
var f = e.x,
h = e.y,
g = e.scaleX,
i = e.scaleY,
l = e.skewX,
j = e.skewY,
m = e.alpha;
if (this.keyframeIdx < c) {
a = (a - e.index) / e.duration;
c = e.ease;
if (0 != c) {
var n;
0 > c ? (n = 1 - a, n = 1 - n * n, c = - c)  : n = a * a;
a = c * n + (1 - c) * a
}
b = b[this.keyframeIdx + 1];
f += (b.x - f) * a;
h += (b.y - h) * a;
g += (b.scaleX - g) * a;
i += (b.scaleY - i) * a;
l += (b.skewX - l) * a;
j += (b.skewY - j) * a;
m += (b.alpha - m) * a
}
b = d.getLocalMatrix();
a = Math.sin(l);
l = Math.cos(l);
c = Math.sin(j);
j = Math.cos(j);
b.set(j * g, c * g, - a * i, l * i, f, h);
b.translate( - (e.pivotX + d.anchorX._value), - (e.pivotY + d.anchorY._value));
d.alpha.set__(m)
}
},
__class__: v._MovieSprite.LayerAnimator
};
v.MovieSymbol = function (a, b) {
this._name = b.id;
this.frameRate = a.frameRate;
this.frames = 0;
this.layers = [
];
for (var c = 0, d = b.layers; c < d.length; ) {
var e = d[c];
++c;
e = new v.MovieLayer(e);
this.frames = Math.max(e.get_frames(), this.frames);
this.layers.push(e)
}
this.duration = this.frames / this.frameRate
};
j['flambe.swf.MovieSymbol'] = v.MovieSymbol;
v.MovieSymbol.__name__ = [
'flambe',
'swf',
'MovieSymbol'
];
v.MovieSymbol.__interfaces__ = [
v.Symbol
];
v.MovieSymbol.prototype = {
createSprite: function () {
return new v.MovieSprite(this)
},
get_name: function () {
return this._name
},
__class__: v.MovieSymbol
};
v.MovieLayer = function (a) {
this.name = a.name;
this.multipleSymbols = !1;
this.keyframes = [
];
for (var b = null, c = 0, a = a.keyframes; c < a.length; ) {
var d = a[c];
++c;
b = new v.MovieKeyframe(d, b);
this.keyframes.push(b)
}
};
j['flambe.swf.MovieLayer'] = v.MovieLayer;
v.MovieLayer.__name__ = [
'flambe',
'swf',
'MovieLayer'
];
v.MovieLayer.prototype = {
get_frames: function () {
var a = this.keyframes[this.keyframes.length -
1];
return a.index + (a.duration | 0)
},
__class__: v.MovieLayer
};
v.MovieKeyframe = function (a, b) {
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
j['flambe.swf.MovieKeyframe'] = v.MovieKeyframe;
v.MovieKeyframe.__name__ = [
'flambe',
'swf',
'MovieKeyframe'
];
v.MovieKeyframe.prototype = {
__class__: v.MovieKeyframe
};
n.Assert = function () {
};
j['flambe.util.Assert'] = n.Assert;
n.Assert.__name__ = [
'flambe',
'util',
'Assert'
];
n.BitSets = function () {
};
j['flambe.util.BitSets'] = n.BitSets;
n.BitSets.__name__ = [
'flambe',
'util',
'BitSets'
];
n.BitSets.set = function (a, b, c) {
return c ? a | b : a & ~b
};
n.LogHandler = function () {
};
j['flambe.util.LogHandler'] = n.LogHandler;
n.LogHandler.__name__ = [
'flambe',
'util',
'LogHandler'
];
n.LogHandler.prototype = {
__class__: n.LogHandler
};
n.Promise = function () {
this.success = new n.Signal1;
this.error = new n.Signal1;
this.progressChanged = new n.Signal0;
this.hasResult = !1;
this._total = this._progress = 0
};
j['flambe.util.Promise'] = n.Promise;
n.Promise.__name__ = [
'flambe',
'util',
'Promise'
];
n.Promise.prototype = {
set_total: function (a) {
this._total = a;
this.progressChanged.emit0();
return a
},
set_progress: function (a) {
this._progress = a;
this.progressChanged.emit0();
return a
},
get: function (a) {
return this.hasResult ? (a(this._result), null)  : this.success.connect(a).once()
},
set_result: function (a) {
if (this.hasResult) throw 'Promise result already assigned';
this._result = a;
this.hasResult = !0;
this.success.emit1(a);
return a
},
get_result: function () {
if (!this.hasResult) throw 'Promise result not yet available';
return this._result
},
__class__: n.Promise
};
n.Signal0 = function (a) {
n.SignalBase.call(this, a)
};
j['flambe.util.Signal0'] = n.Signal0;
n.Signal0.__name__ = [
'flambe',
'util',
'Signal0'
];
n.Signal0.__super__ = n.SignalBase;
n.Signal0.prototype = x(n.SignalBase.prototype, {
__class__: n.Signal0
});
n._SignalBase = {
};
n._SignalBase.Task = function (a) {
this.next = null;
this.fn = a
};
j['flambe.util._SignalBase.Task'] = n._SignalBase.Task;
n._SignalBase.Task.__name__ = [
'flambe',
'util',
'_SignalBase',
'Task'
];
n._SignalBase.Task.prototype = {
__class__: n._SignalBase.Task
};
C = void 0;
T = void 0;
O = void 0;
S = void 0;
U = void 0;
X = void 0;
X = function () {
};
j['haxe.Json'] = X;
X.__name__ = [
'haxe',
'Json'
];
X.parse = function (a) {
return (new X).doParse(a)
};
X.prototype = {
parseString: function () {
for (var a = this.pos, b = new Z; ; ) {
var c = this.str.charCodeAt(this.pos++);
if (34 == c) break;
if (92 == c) {
b.b += B.substr(this.str, a, this.pos - a - 1);
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
a = q.parseInt('0x' + B.substr(this.str, this.pos, 4));
this.pos += 4;
b.b += String.fromCharCode(a);
break;
default:
throw 'Invalid escape sequence \\' + String.fromCharCode(c) + ' at position ' + (this.pos - 1);
}
a = this.pos
} else if (c != c) throw 'Unclosed string';
}
b.b += B.substr(this.str, a, this.pos - a - 1);
return b.b
},
parseRec: function () {
for (; ; ) switch (this.str.charCodeAt(this.pos++)) {
case 32:
case 13:
case 10:
case 9:
break;
case 123:
for (var a = {
}, b = null, c = null; ; ) {
var d = this.str.charCodeAt(this.pos++);
switch (d) {
case 32:
case 13:
case 10:
case 9:
break;
case 125:
return (null != b || !1 == c) && this.invalidChar(),
a;
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
a = [
];
for (c = null; ; ) switch (d = this.str.charCodeAt(this.pos++), d) {
case 32:
case 13:
case 10:
case 9:
break;
case 93:
return !1 ==
c && this.invalidChar(),
a;
case 44:
c ? c = !1 : this.invalidChar();
break;
default:
c && this.invalidChar(),
this.pos--,
a.push(this.parseRec()),
c = !0
}
break;
case 116:
c = this.pos;
if (114 != this.str.charCodeAt(this.pos++) || 117 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c,
this.invalidChar();
return !0;
case 102:
c = this.pos;
if (97 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 115 != this.str.charCodeAt(this.pos++) || 101 != this.str.charCodeAt(this.pos++)) this.pos = c,
this.invalidChar();
return !1;
case 110:
c = this.pos;
if (117 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++) || 108 != this.str.charCodeAt(this.pos++)) this.pos = c,
this.invalidChar();
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
if (!this.reg_float.match(B.substr(this.str, this.pos, null))) throw 'Invalid float at position ' + this.pos;
c = this.reg_float.matched(0);
this.pos += c.length;
c = q.parseFloat(c);
d = c | 0;
return d ==
c ? d : c;
default:
this.invalidChar()
}
},
invalidChar: function () {
this.pos--;
throw 'Invalid char ' + this.str.charCodeAt(this.pos) + ' at position ' + this.pos;
},
doParse: function (a) {
this.reg_float = new W('^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?', '');
this.str = a;
this.pos = 0;
return this.parseRec()
},
__class__: X
};
S = function () {
this.buf = new Z;
this.cache = [
];
this.useCache = S.USE_CACHE;
this.useEnumIndex = S.USE_ENUM_INDEX;
this.shash = new I;
this.scount = 0
};
j['haxe.Serializer'] = S;
S.__name__ = [
'haxe',
'Serializer'
];
S.run = function (a) {
var b = new S;
b.serialize(a);
return b.toString()
};
S.prototype = {
serialize: function (a) {
var b = K['typeof'](a);
switch (b[1]) {
case 0:
this.buf.b += q.string('n');
break;
case 1:
if (0 == a) {
this.buf.b += q.string('z');
break
}
this.buf.b += q.string('i');
this.buf.b += q.string(a);
break;
case 2:
Math.isNaN(a) ? this.buf.b += q.string('k')  : Math.isFinite(a) ? (this.buf.b += q.string('d'), this.buf.b += q.string(a))  : this.buf.b += q.string(0 > a ? 'm' : 'p');
break;
case 3:
this.buf.b += q.string(a ? 't' : 'f');
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
this.buf.b += q.string('a');
for (var d = a.length, e = 0; e < d; ) b = e++,
null == a[b] ? c++ : (0 < c && (1 == c ? this.buf.b += q.string('n')  : (this.buf.b += q.string('u'), this.buf.b += q.string(c)), c = 0), this.serialize(a[b]));
0 < c && (1 == c ? this.buf.b += q.string('n')  : (this.buf.b += q.string('u'), this.buf.b += q.string(c)));
this.buf.b += q.string('h');
break;
case da:
this.buf.b += q.string('l');
for (a = a.iterator(); a.hasNext(); ) b = a.next(),
this.serialize(b);
this.buf.b +=
q.string('h');
break;
case Date:
this.buf.b += q.string('v');
this.buf.b += q.string(B.dateStr(a));
break;
case I:
this.buf.b += q.string('b');
for (c = a.keys(); c.hasNext(); ) b = c.next(),
this.serializeString(b),
this.serialize(a.get(b));
this.buf.b += q.string('h');
break;
case V:
this.buf.b += q.string('q');
for (c = a.keys(); c.hasNext(); ) b = c.next(),
this.buf.b += q.string(':'),
this.buf.b += q.string(b),
this.serialize(a.get(b));
this.buf.b += q.string('h');
break;
case U.Bytes:
b = 0;
c = a.length - 2;
d = new Z;
for (e = S.BASE64; b < c; ) {
var f = a.b[b++],
h = a.b[b++],
g = a.b[b++];
d.b += q.string(e.charAt(f >> 2));
d.b += q.string(e.charAt((f << 4 | h >> 4) & 63));
d.b += q.string(e.charAt((h << 2 | g >> 6) & 63));
d.b += q.string(e.charAt(g & 63))
}
b == c ? (f = a.b[b++], h = a.b[b++], d.b += q.string(e.charAt(f >> 2)), d.b += q.string(e.charAt((f << 4 | h >> 4) & 63)), d.b += q.string(e.charAt(h << 2 & 63)))  : b == c + 1 && (f = a.b[b++], d.b += q.string(e.charAt(f >> 2)), d.b += q.string(e.charAt(f << 4 & 63)));
b = d.b;
this.buf.b += q.string('s');
this.buf.b += q.string(b.length);
this.buf.b += q.string(':');
this.buf.b += q.string(b);
break;
default:
this.cache.pop(),
null != a.hxSerialize ? (this.buf.b += q.string('C'), this.serializeString(K.getClassName(b)), this.cache.push(a), a.hxSerialize(this), this.buf.b += q.string('g'))  : (this.buf.b += q.string('c'), this.serializeString(K.getClassName(b)), this.cache.push(a), this.serializeFields(a))
}
break;
case 4:
if (this.useCache && this.serializeRef(a)) break;
this.buf.b += q.string('o');
this.serializeFields(a);
break;
case 7:
b = b[2];
if (this.useCache && this.serializeRef(a)) break;
this.cache.pop();
this.buf.b += q.string(this.useEnumIndex ? 'j' : 'w');
this.serializeString(K.getEnumName(b));
this.useEnumIndex ? (this.buf.b += q.string(':'), this.buf.b += q.string(a[1]))  : this.serializeString(a[0]);
this.buf.b += q.string(':');
d = a.length;
this.buf.b += q.string(d - 2);
for (e = 2; e < d; ) b = e++,
this.serialize(a[b]);
this.cache.push(a);
break;
case 5:
throw 'Cannot serialize function';
default:
throw 'Cannot serialize ' + q.string(a);
}
},
serializeFields: function (a) {
for (var b = 0, c = J.fields(a); b < c.length; ) {
var d = c[b];
++b;
this.serializeString(d);
this.serialize(J.field(a, d))
}
this.buf.b +=
q.string('g')
},
serializeRef: function (a) {
for (var b = typeof a, c = 0, d = this.cache.length; c < d; ) {
var e = c++,
f = this.cache[e];
if (typeof f == b && f == a) return this.buf.b += q.string('r'),
this.buf.b += q.string(e),
!0
}
this.cache.push(a);
return !1
},
serializeString: function (a) {
var b = this.shash.get(a);
null != b ? (this.buf.b += q.string('R'), this.buf.b += q.string(b))  : (this.shash.set(a, this.scount++), this.buf.b += q.string('y'), a = R.urlEncode(a), this.buf.b += q.string(a.length), this.buf.b += q.string(':'), this.buf.b += q.string(a))
},
toString: function () {
return this.buf.b
},
__class__: S
};
T = function (a) {
var b = this;
this.id = window.setInterval(function () {
b.run()
}, a)
};
j['haxe.Timer'] = T;
T.__name__ = [
'haxe',
'Timer'
];
T.delay = function (a, b) {
var c = new T(b);
c.run = function () {
c.stop();
a()
};
return c
};
T.prototype = {
run: function () {
},
stop: function () {
null != this.id && (window.clearInterval(this.id), this.id = null)
},
__class__: T
};
O = function (a) {
this.buf = a;
this.length = a.length;
this.pos = 0;
this.scache = [
];
this.cache = [
];
a = O.DEFAULT_RESOLVER;
null == a && (a = K, O.DEFAULT_RESOLVER = a);
this.setResolver(a)
};
j['haxe.Unserializer'] = O;
O.__name__ = [
'haxe',
'Unserializer'
];
O.initCodes = function () {
for (var a = [
], b = 0, c = O.BASE64.length; b < c; ) {
var d = b++;
a[O.BASE64.charCodeAt(d)] = d
}
return a
};
O.run = function (a) {
return (new O(a)).unserialize()
};
O.prototype = {
unserialize: function () {
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
for (var a = this.pos; ; ) {
var b = this.buf.charCodeAt(this.pos);
if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
 else break
}
return q.parseFloat(B.substr(this.buf, a, this.pos - a));
case 121:
b = this.readDigits();
if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw 'Invalid string length';
a = B.substr(this.buf, this.pos, b);
this.pos += b;
a = R.urlDecode(a);
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
a = [
];
for (this.cache.push(a); ; ) {
b = this.buf.charCodeAt(this.pos);
if (104 == b) {
this.pos++;
break
}
117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null)  :
a.push(this.unserialize())
}
return a;
case 111:
return b = {
},
this.cache.push(b),
this.unserializeObject(b),
b;
case 114:
b = this.readDigits();
if (0 > b || b >= this.cache.length) throw 'Invalid reference';
return this.cache[b];
case 82:
b = this.readDigits();
if (0 > b || b >= this.scache.length) throw 'Invalid string reference';
return this.scache[b];
case 120:
throw this.unserialize();
case 99:
b = this.unserialize();
a = this.resolver.resolveClass(b);
if (null == a) throw 'Class not found ' + b;
b = K.createEmptyInstance(a);
this.cache.push(b);
this.unserializeObject(b);
return b;
case 119:
b = this.unserialize();
a = this.resolver.resolveEnum(b);
if (null == a) throw 'Enum not found ' + b;
b = this.unserializeEnum(a, this.unserialize());
this.cache.push(b);
return b;
case 106:
b = this.unserialize();
a = this.resolver.resolveEnum(b);
if (null == a) throw 'Enum not found ' + b;
this.pos++;
var c = this.readDigits(),
d = K.getEnumConstructs(a) [c];
if (null == d) throw 'Unknown enum index ' + b + '@' + c;
b = this.unserializeEnum(a, d);
this.cache.push(b);
return b;
case 108:
b = new da;
for (this.cache.push(b); 104 != this.buf.charCodeAt(this.pos); ) b.add(this.unserialize());
this.pos++;
return b;
case 98:
c = new I;
for (this.cache.push(c); 104 != this.buf.charCodeAt(this.pos); ) a = this.unserialize(),
c.set(a, this.unserialize());
this.pos++;
return c;
case 113:
c = new V;
this.cache.push(c);
for (b = this.buf.charCodeAt(this.pos++); 58 == b; ) a = this.readDigits(),
c.set(a, this.unserialize()),
b = this.buf.charCodeAt(this.pos++);
if (104 != b) throw 'Invalid IntHash format';
return c;
case 118:
return b = B.strDate(B.substr(this.buf, this.pos, 19)),
this.cache.push(b),
this.pos += 19,
b;
case 115:
b = this.readDigits();
c = this.buf;
if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw 'Invalid bytes length';
d = O.CODES;
null == d && (d = O.initCodes(), O.CODES = d);
for (var a = this.pos, e = b & 3, f = a + (b - e), h = U.Bytes.alloc(3 * (b >> 2) + (2 <= e ? e - 1 : 0)), g = 0; a < f; ) {
var i = d[c.charCodeAt(a++)],
l = d[c.charCodeAt(a++)];
h.b[g++] = (i << 2 | l >> 4) & 255;
i = d[c.charCodeAt(a++)];
h.b[g++] = (l << 4 | i >> 2) & 255;
l = d[c.charCodeAt(a++)];
h.b[g++] = (i << 6 | l) & 255
}
2 <= e && (i = d[c.charCodeAt(a++)], l = d[c.charCodeAt(a++)], h.b[g++] = (i << 2 | l >> 4) & 255, 3 == e && (i = d[c.charCodeAt(a++)], h.b[g++] = (l << 4 | i >> 2) & 255));
this.pos += b;
this.cache.push(h);
return h;
case 67:
b = this.unserialize();
a = this.resolver.resolveClass(b);
if (null == a) throw 'Class not found ' + b;
b = K.createEmptyInstance(a);
this.cache.push(b);
b.hxUnserialize(this);
if (103 != this.buf.charCodeAt(this.pos++)) throw 'Invalid custom data';
return b
}
this.pos--;
throw 'Invalid char ' + this.buf.charAt(this.pos) + ' at position ' + this.pos;
},
unserializeEnum: function (a, b) {
if (58 != this.buf.charCodeAt(this.pos++)) throw 'Invalid enum format';
var c = this.readDigits();
if (0 == c) return K.createEnum(a, b);
for (var d = [
]; 0 < c--; ) d.push(this.unserialize());
return K.createEnum(a, b, d)
},
unserializeObject: function (a) {
for (; ; ) {
if (this.pos >= this.length) throw 'Invalid object';
if (103 == this.buf.charCodeAt(this.pos)) break;
var b = this.unserialize();
if (!w.__instanceof(b, String)) throw 'Invalid object key';
var c = this.unserialize();
a[b] = c
}
this.pos++
},
readDigits: function () {
for (var a = 0, b = !1, c = this.pos; ; ) {
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
b && (a *= - 1);
return a
},
setResolver: function (a) {
this.resolver = null == a ? {
resolveClass: function () {
return null
},
resolveEnum: function () {
return null
}
}
 : a
},
__class__: O
};
U = {
Bytes: function (a, b) {
this.length = a;
this.b = b
}
};
j['haxe.io.Bytes'] = U.Bytes;
U.Bytes.__name__ = [
'haxe',
'io',
'Bytes'
];
U.Bytes.alloc = function (a) {
for (var b = [
], c = 0; c < a; ) c++,
b.push(0);
return new U.Bytes(a, b)
};
U.Bytes.ofData = function (a) {
return new U.Bytes(a.length, a)
};
U.Bytes.prototype = {
__class__: U.Bytes
};
C = {
_Fast: {
}
};
C._Fast.NodeAccess = function (a) {
this.__x = a
};
j['haxe.xml._Fast.NodeAccess'] = C._Fast.NodeAccess;
C._Fast.NodeAccess.__name__ = [
'haxe',
'xml',
'_Fast',
'NodeAccess'
];
C._Fast.NodeAccess.prototype = {
resolve: function (a) {
var b = this.__x.elementsNamed(a).next();
if (null == b) throw (this.__x.nodeType == u.Document ? 'Document' : this.__x.getNodeName()) + ' is missing element ' + a;
return new C.Fast(b)
},
__class__: C._Fast.NodeAccess
};
C._Fast.AttribAccess = function (a) {
this.__x = a
};
j['haxe.xml._Fast.AttribAccess'] = C._Fast.AttribAccess;
C._Fast.AttribAccess.__name__ = [
'haxe',
'xml',
'_Fast',
'AttribAccess'
];
C._Fast.AttribAccess.prototype = {
resolve: function (a) {
if (this.__x.nodeType == u.Document) throw 'Cannot access document attribute ' + a;
var b = this.__x.get(a);
if (null == b) throw this.__x.getNodeName() + ' is missing attribute ' + a;
return b
},
__class__: C._Fast.AttribAccess
};
C._Fast.HasAttribAccess = function (a) {
this.__x = a
};
j['haxe.xml._Fast.HasAttribAccess'] = C._Fast.HasAttribAccess;
C._Fast.HasAttribAccess.__name__ = [
'haxe',
'xml',
'_Fast',
'HasAttribAccess'
];
C._Fast.HasAttribAccess.prototype = {
resolve: function (a) {
if (this.__x.nodeType == u.Document) throw 'Cannot access document attribute ' + a;
return this.__x.exists(a)
},
__class__: C._Fast.HasAttribAccess
};
C._Fast.HasNodeAccess = function (a) {
this.__x = a
};
j['haxe.xml._Fast.HasNodeAccess'] = C._Fast.HasNodeAccess;
C._Fast.HasNodeAccess.__name__ = [
'haxe',
'xml',
'_Fast',
'HasNodeAccess'
];
C._Fast.HasNodeAccess.prototype = {
resolve: function (a) {
return this.__x.elementsNamed(a).hasNext()
},
__class__: C._Fast.HasNodeAccess
};
C._Fast.NodeListAccess = function (a) {
this.__x = a
};
j['haxe.xml._Fast.NodeListAccess'] = C._Fast.NodeListAccess;
C._Fast.NodeListAccess.__name__ = [
'haxe',
'xml',
'_Fast',
'NodeListAccess'
];
C._Fast.NodeListAccess.prototype = {
resolve: function (a) {
for (var b = new da, a = this.__x.elementsNamed(a); a.hasNext(); ) {
var c = a.next();
b.add(new C.Fast(c))
}
return b
},
__class__: C._Fast.NodeListAccess
};
C.Fast = function (a) {
if (a.nodeType != u.Document && a.nodeType != u.Element) throw 'Invalid nodeType ' + q.string(a.nodeType);
this.x = a;
this.node = new C._Fast.NodeAccess(a);
this.nodes = new C._Fast.NodeListAccess(a);
this.att = new C._Fast.AttribAccess(a);
this.has = new C._Fast.HasAttribAccess(a);
this.hasNode = new C._Fast.HasNodeAccess(a)
};
j['haxe.xml.Fast'] = C.Fast;
C.Fast.__name__ = [
'haxe',
'xml',
'Fast'
];
C.Fast.prototype = {
getElements: function () {
var a = this.x.elements();
return {
hasNext: s(a, a.hasNext),
next: function () {
var b = a.next();
return null == b ? null : new C.Fast(b)
}
}
},
getInnerHTML: function () {
for (var a = new Z, b = this.x.iterator(); b.hasNext(); ) {
var c = b.next();
a.b += q.string(c.toString())
}
return a.b
},
getInnerData: function () {
var a = this.x.iterator();
if (!a.hasNext()) throw this.getName() + ' does not have data';
var b = a.next(),
c = a.next();
if (null != c) {
if (b.nodeType == u.PCData && c.nodeType == u.CData && '' == R.trim(b.getNodeValue()) && (b = a.next(), null == b || b.nodeType == u.PCData && '' == R.trim(b.getNodeValue()) && null == a.next())) return c.getNodeValue();
throw this.getName() + ' does not only have data';
}
if (b.nodeType != u.PCData && b.nodeType != u.CData) throw this.getName() + ' does not have data';
return b.getNodeValue()
},
getName: function () {
return this.x.nodeType ==
u.Document ? 'Document' : this.x.getNodeName()
},
__class__: C.Fast
};
C.Parser = function () {
};
j['haxe.xml.Parser'] = C.Parser;
C.Parser.__name__ = [
'haxe',
'xml',
'Parser'
];
C.Parser.parse = function (a) {
var b = u.createDocument();
C.Parser.doParse(a, 0, b);
return b
};
C.Parser.doParse = function (a, b, c) {
null == b && (b = 0);
for (var d = null, e = 1, f = 1, h = null, g = 0, i = 0, l = 0, j = a.charCodeAt(b); j == j; ) {
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
g = b;
e = 13;
continue
}
break;
case 13:
60 == j && (e = u.createPCData(B.substr(a, g, b - g)), c.addChild(e), i++, e = 0, f = 2);
break;
case 17:
93 == j && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (e = u.createCData(B.substr(a, g, b - g)), c.addChild(e), i++, b += 2, e = 1);
break;
case 2:
switch (j) {
case 33:
if (91 == a.charCodeAt(b + 1)) {
b += 2;
if ('CDATA[' != B.substr(a, b, 6).toUpperCase()) throw 'Expected <![CDATA[';
b += 5;
e = 17
} else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) {
if ('OCTYPE' != B.substr(a, b + 2, 6).toUpperCase()) throw 'Expected <!DOCTYPE';
b += 8;
e = 16
} else {
if (45 != a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw 'Expected <!--';
b += 2;
e = 15
}
g = b + 1;
break;
case 63:
e = 14;
g = b;
break;
case 47:
if (null == c) throw 'Expected node name';
g = b + 1;
e = 0;
f = 10;
break;
default:
e = 3;
g = b;
continue
}
break;
case 3:
if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
if (b == g) throw 'Expected node name';
d = u.createElement(B.substr(a, g, b - g));
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
g = b;
continue
}
break;
case 5:
if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
if (g == b) throw 'Expected attribute name';
h = B.substr(a, g, b - g);
if (d.exists(h)) throw 'Duplicate attribute';
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
throw 'Expected =';
}
break;
case 7:
switch (j) {
case 34:
case 39:
e = 8;
g = b;
break;
default:
throw 'Expected "';
}
break;
case 8:
j == a.charCodeAt(g) && (f = B.substr(a, g + 1, b - g - 1), d.set(h, f), e = 0, f = 4);
break;
case 9:
g = b = C.Parser.doParse(a, b, d);
e = 1;
break;
case 11:
switch (j) {
case 62:
e = 1;
break;
default:
throw 'Expected >';
}
break;
case 12:
switch (j) {
case 62:
return 0 == i && c.addChild(u.createPCData('')),
b;
default:
throw 'Expected >';
}
case 10:
if (!(97 <= j && 122 >= j || 65 <= j && 90 >= j || 48 <= j && 57 >= j || 58 == j || 46 == j || 95 == j || 45 == j)) {
if (g == b) throw 'Expected node name';
if (B.substr(a, g, b - g) != c.getNodeName()) throw 'Expected </' + c.getNodeName() + '>';
e = 0;
f = 12;
continue
}
break;
case 15:
45 == j && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(u.createComment(B.substr(a, g, b - g))), b += 2, e = 1);
break;
case 16:
91 == j ? l++ :
93 == j ? l-- : 62 == j && 0 == l && (c.addChild(u.createDocType(B.substr(a, g, b - g))), e = 1);
break;
case 14:
63 == j && 62 == a.charCodeAt(b + 1) && (b++, e = B.substr(a, g + 1, b - g - 2), c.addChild(u.createProlog(e)), e = 1)
}
j = a.charCodeAt(++b)
}
1 == e && (g = b, e = 13);
if (13 == e) return (b != g || 0 == i) && c.addChild(u.createPCData(B.substr(a, g, b - g))),
b;
throw 'Unexpected end';
};
Array.prototype.indexOf ? B.remove = function (a, b) {
var c = a.indexOf(b);
if ( - 1 == c) return !1;
a.splice(c, 1);
return !0
}
 : null;
Math.__name__ = [
'Math'
];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
j.Math = Math;
Math.isFinite = function (a) {
return isFinite(a)
};
Math.isNaN = function (a) {
return isNaN(a)
};
String.prototype.__class__ = j.String = String;
String.__name__ = [
'String'
];
Array.prototype.__class__ = j.Array = Array;
Array.__name__ = [
'Array'
];
Date.prototype.__class__ = j.Date = Date;
Date.__name__ = [
'Date'
];
var ia = j.Int = {
__name__: [
'Int'
]
},
ja = j.Dynamic = {
__name__: [
'Dynamic'
]
},
ga = j.Float = Number;
ga.__name__ = [
'Float'
];
var ha = j.Bool = Boolean;
ha.__ename__ = [
'Bool'
];
var ka = j.Class = {
__name__: [
'Class'
]
},
la = {
};
u.Element = 'element';
u.PCData = 'pcdata';
u.CData = 'cdata';
u.Comment = 'comment';
u.DocType = 'doctype';
u.Prolog = 'prolog';
u.Document = 'document';
'undefined' != typeof document && (y.document = document);
'undefined' != typeof window && (y.window = window, y.window.onerror = function (a, b, c) {
var d = y.onerror;
return null == d ? !1 : d(a, [
b + ':' + c
])
});
'undefined' != typeof JSON && (X = JSON);
e.ConstantsApp.STAGE_WIDTH = 960;
e.ConstantsApp.STAGE_HEIGHT = 560;
e.ConstantsApp.STAGE_CENTER_X = 480;
e.ConstantsApp.STAGE_CENTER_Y = 280;
e.ConstantsApp.CURRENT_LEVEL = 'current_level';
e.ConstantsApp.LAYER_BG = 'layer_bg';
e.ConstantsApp.LAYER_PLAYER = 'layer_player';
e.ConstantsApp.LAYER_FG = 'layer_fg';
e.ConstantsApp.LAYER_UI = 'layer_ui';
e.ConstantsApp.EVENT_PAUSE = 'eventPause';
e.ConstantsApp.EVENT_UNPAUSE = 'eventUnpause';
e.ConstantsApp.EVENT_END_TURN = 'EVENT_END_TURN';
e.ConstantsApp.EVENT_END_PLAYER_TURN = 'EVENT_END_PLAYER_TURN';
e.ConstantsApp.EVENT_END_BABY_DRAGON_TURN = 'EVENT_END_BABY_DRAGON_TURN';
e.ConstantsApp.EVENT_MUTE_TOGGLE = 'EVENT_MUTE_TOGGLE';
e.ConstantsApp.EVENT_SPAWN_BABY_DRAGON = 'EVENT_SPAWN_BABY_DRAGON';
e.ConstantsApp.EVENT_MEZ_BABY_DRAGON = 'EVENT_MEZ_BABY_DRAGON';
e.ConstantsApp.EVENT_SPAWN_USER_INDICATOR = 'EVENT_SPAWN_USER_INDICATOR';
e.ConstantsApp.EVENT_SPAWN_COMBAT_TEXT = 'EVENT_SPAWN_COMBAT_TEXT';
e.ConstantsApp.EVENT_SPAWN_FIRE = 'EVENT_SPAWN_FIRE';
e.ConstantsApp.BOOL_GAME_LOSE = 'bool_game_lose';
e.ConstantsApp.BOOL_GAME_WIN = 'bool_game_win';
e.ConstantsApp.BOOL_LEVEL_LOSE = 'bool_level_lose';
e.ConstantsApp.BOOL_LEVEL_WIN = 'bool_level_win';
e.ConstantsApp.BOOL_GAMEOVER = 'bool_gameover';
e.ConstantsApp.BOOL_PAUSED = 'bool_paused';
e.ConstantsApp.BOOL_MUTED = 'bool_muted';
e.ConstantsApp.BOOL_INPUT_LOCK = 'bool_inputlock';
e.ConstantsApp.BOOL_ORIENTATION_ALERT = 'bool_orientation_alert';
e.ConstantsApp.BOOL_FIRE_ENABLED = 'bool_fire_enabled';
e.ConstantsApp.BOOL_WINGS_ENABLED = 'bool_wings_enabled';
e.ConstantsApp.BOOL_HEAL_ENABLED = 'bool_heal_enabled';
e.ConstantsApp.BOOL_MEZ_ENABLED = 'bool_mez_enabled';
e.ConstantsApp.BOOL_FIRE_ON_COOLDOWN = 'BOOL_FIRE_ON_COOLDOWN';
e.ConstantsApp.BOOL_WINGS_ON_COOLDOWN = 'BOOL_WINGS_ON_COOLDOWN';
e.ConstantsApp.BOOL_HEAL_ON_COOLDOWN = 'BOOL_HEAL_ON_COOLDOWN';
e.ConstantsApp.BOOL_MEZ_ON_COOLDOWN = 'BOOL_MEZ_ON_COOLDOWN';
e.ConstantsApp.BOOL_TOUCH_DEVICE = 'BOOL_TOUCH_DEVICE';
e.ConstantsApp.FLOAT_HEALTH = 'float_health';
e.ConstantsApp.FLOAT_DRAGON_HEALTH = 'float_dragon_health';
e.ConstantsApp.FLOAT_BABY_DRAGON_HEALTH = 'float_baby_dragon_health';
e.ConstantsApp.FLOAT_SCORE = 'float_score';
e.ConstantsApp.FLOAT_DAMAGE_AMOUNT = 'float_damage_amount';
e.ConstantsApp.FLOAT_MAX_HEALTH = 'float_max_health';
e.ConstantsApp.FLOAT_DRAGON_MAX_HEALTH = 'float_dragon_max_health';
e.ConstantsApp.FLOAT_BABY_DRAGON_MAX_HEALTH = 'float_baby_dragon_max_health';
e.ConstantsApp.INT_HEALTH = 'int_health';
e.ConstantsApp.INT_LIVES = 'int_lives';
e.ConstantsApp.INT_ATTACK_TYPE = 'int_attack_type';
e.ConstantsApp.INT_HEAL_COOLDOWN = 'int_heal_cooldown';
e.ConstantsApp.INT_FIRE_COOLDOWN = 'int_fire_cooldown';
e.ConstantsApp.INT_WINGS_COOLDOWN = 'int_wings_cooldown';
e.ConstantsApp.INT_MEZ_COOLDOWN = 'int_mez_cooldown';
e.ConstantsApp.INT_BABY_DRAGON_MEZ_COUNTER = 'INT_BABY_DRAGON_MEZ_COUNTER';
e.ConstantsApp.INT_COMBAT_TEXT_TYPE = 'INT_COMBAT_TEXT_TYPE';
e.ConstantsApp.INT_NUMBER_BABY_DRAGONS = 'int_number_baby_dragons';
e.ConstantsApp.INPUT_CLICK = 'input_click';
e.ConstantsApp.INPUT_SPACE = 'input_space';
e.ConstantsApp.INPUT_Z = 'input_z';
e.ConstantsApp.INPUT_X = 'input_x';
e.ConstantsApp.INPUT_C = 'input_c';
e.ConstantsApp.INPUT_P = 'input_p';
e.ConstantsApp.INPUT_UP = 'input_up';
e.ConstantsApp.INPUT_DOWN = 'input_down';
e.ConstantsApp.INPUT_LEFT = 'input_left';
e.ConstantsApp.INPUT_RIGHT = 'input_right';
e.ConstantsApp.CONFIG_XML_PATH = 'config/config.xml';
e.ConstantsScreen.SCREEN_LOADING = 'loadpanel';
e.ConstantsScreen.SCREEN_LOADING_OVERLAY = 'loadoverlay';
e.ConstantsScreen.SCREEN_SPLASH = 'splash';
e.ConstantsScreen.SCREEN_HELP = 'help';
e.ConstantsScreen.SCREEN_GAMEPLAY_HUD = 'gameplayhud';
e.ConstantsScreen.SCREEN_GAMEPLAY_MENU = 'gameplaymenu';
e.ConstantsScreen.SCREEN_QUIT_CONFIRM = 'quitconfirm';
e.ConstantsScreen.SCREEN_END_GAME = 'endgame';
e.ConstantsScreen.SCREEN_CUTSCENE_BORDERS = 'cutsceneborders';
e.ConstantsScreen.SCREEN_ATTACK_MENU = 'screenattackmenu';
e.ConstantsScreen.SCREEN_LEVEL_WIN = 'screenlevelwin';
e.ConstantsScreen.TRANSITION_FADE = 0;
e.ConstantsScreen.TRANSITION_SCROLL = 1;
e.ConstantsScreen.TRANSITION_SCROLL_DOWN = 2;
e.ConstantsScreen.TRANSITION_SCROLL_UP = 3;
e.ConstantsScreen.TRANSITION_STAGED = 4;
e.ConstantsScreen.TRANSITION_SCREENSHOT = 5;
e.ConstantsScreen.CHANGE_OPEN_BEGIN = 0;
e.ConstantsScreen.CHANGE_OPEN_COMPLETE = 1;
e.ConstantsScreen.CHANGE_CLOSE_BEGIN = 2;
e.ConstantsScreen.CHANGE_CLOSE_COMPLETE = 3;
e.ConstantsScreen.OUTPUT_OPENED = 0;
e.ConstantsScreen.OUTPUT_CLOSED = 1;
e.ConstantsScreen.CONDITION_CLOSED_ALL = 0;
e.ConstantsScreen.CONDITION_CLOSED_SPECIFIC = 1;
e.ConstantsScreen.CONDITION_TRANSITION_MIDWAY = 2;
e.ConstantsScreen.CONDITION_TRANSITION_COMPLETE = 3;
e.ConstantsScreen.CONDITION_IMMEDIATE = 4;
e.ConstantsScreen.FLOW_SPLASH_PLAY = 'FLOW_SPLASH_PLAY';
e.ConstantsScreen.FLOW_GAMEPLAY_MENU = 'FLOW_GAMEPLAY_MENU';
e.ConstantsScreen.FLOW_GAMEPLAY_MENU_CLOSE = 'FLOW_GAMEPLAY_MENU_CLOSE';
e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP = 'FLOW_GAMEPLAY_MENU_HELP';
e.ConstantsScreen.FLOW_GAMEPLAY_MENU_HELP_CLOSE = 'FLOW_GAMEPLAY_MENU_HELP_CLOSE';
e.ConstantsScreen.FLOW_GAMEPLAY_MENU_QUIT = 'FLOW_GAMEPLAY_MENU_QUIT';
e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_YES = 'FLOW_GAMEPLAY_QUIT_YES';
e.ConstantsScreen.FLOW_GAMEPLAY_QUIT_NO = 'FLOW_GAMEPLAY_QUIT_NO';
e.ConstantsScreen.FLOW_END_LEVEL_NEXT = 'FLOW_END_LEVEL_NEXT';
e.ConstantsScreen.FLOW_END_GAME_PLAY_AGAIN = 'FLOW_END_GAME_PLAY_AGAIN';
e.ConstantsScreen.FLOW_BRANCH_GAME_WIN = 'FLOW_BRANCH_GAME_WIN';
e.ConstantsScreen.FLOW_BRANCH_GAME_LOSE = 'FLOW_BRANCH_GAME_LOSE';
e.ConstantsScreen.FLOW_BRANCH_LEVEL_WIN = 'FLOW_BRANCH_LEVEL_WIN';
e.ConstantsScreen.FLOW_BRANCH_LEVEL_LOSE = 'FLOW_BRANCH_LEVEL_LOSE';
e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_OPEN = 'FLOW_GAMEPLAY_ATTACK_MENU_OPEN';
e.ConstantsScreen.FLOW_GAMEPLAY_ATTACK_MENU_CLOSE = 'FLOW_GAMEPLAY_ATTACK_MENU_CLOSE';
g.buttons.ButtonBase.UP = 'workinBtnUp';
g.buttons.ButtonBase.DOWN = 'workinBtnDown';
g.buttons.ButtonBase.CLICK = 'workinBtnClick';
g.buttons.ButtonBase.CANCEL_DRAG = 'workinBtnCancelDrag';
o.Display.EVENT_UPDATE_DISPLAY = 'event_update_display';
g.screens.data.ScreenStateData.ACTION_STOP = 0;
g.screens.data.ScreenStateData.ACTION_OPENED = 1;
g.screens.data.ScreenStateData.ACTION_EVENT = 2;
g.screens.data.ScreenStateData.ACTION_NEW_STATE = 3;
g.screens.data.ScreenStateData.ACTION_CLOSED = 4;
g.screens.data.ScreenStateData.ACTION_FLOW = 5;
P.ConstantsCloud.STRING_REGION_ID = 'cloudregionid';
P.ConstantsCloud.LOCALIZATION_XML_PATH = 'config/';
P.ConstantsCloud.EVENT_FILES_LOADED = 'EVENT_WORKINCLOUD_FILES_LOADED';
m.WMEventFlow.EVENT_FLOW = 'Nflow';
m.WMEventInput.EVENT_INPUT = 'eventinput';
m.WMEventInput.PHASE_DOWN = 1;
m.WMEventInput.PHASE_UP = 0;
m.WMEventInput.PHASE_MOVE = 2;
m.WMEventInterfaceChange.EVENT_INTERFACE_OUTPUT = 'Neio';
m.WMEventScreenOut.EVENT_SCREEN_OUTPUT = 'Neso';
m.WMEventUpdate.EVENT_UPDATE = 'eventupdate';
i.tween.PennerManager.EASE_LINEAR = 'linear';
i.tween.PennerManager.EASE = 'ease';
i.tween.PennerManager.EASE_QUAD = 'quad';
i.tween.PennerManager.EASE_IN = 'easeIn';
i.tween.PennerManager.EASE_QUAD_IN = 'quadIn';
i.tween.PennerManager.EASE_OUT = 'easeOut';
i.tween.PennerManager.EASE_QUAD_OUT = 'quadOut';
i.tween.PennerManager.EASE_EXPO = 'expo';
i.tween.PennerManager.EASE_EXPO_IN = 'expoIn';
i.tween.PennerManager.EASE_EXPO_OUT = 'expoOut';
i.tween.PennerManager.EASE_ELASTIC = 'elastic';
i.tween.PennerManager.EASE_ELASTIC_IN = 'elasticIn';
i.tween.PennerManager.EASE_ELASTIC_OUT = 'elasticOut';
i.tween.PennerManager.EASE_BUMP = 'bump';
i.tween.PennerManager.EASE_BUMP_IN = 'bumpIn';
i.tween.PennerManager.EASE_BUMP_OUT = 'bumpOut';
i.tween.PennerManager.EASE_BOUNCE = 'bounce';
i.tween.PennerManager.EASE_BOUNCE_IN = 'bounceIn';
i.tween.PennerManager.EASE_BOUNCE_OUT = 'bounceOut';
i.tween.PennerManager.EASE_CUBIC = 'cubic';
i.tween.PennerManager.EASE_CUBIC_IN = 'cubicIn';
i.tween.PennerManager.EASE_CUBIC_OUT = 'cubicOut';
i.tween.PennerManager.EASE_SPACE = 'space';
i.tween.PennerManager.EASE_SPACE_IN = 'spaceIn';
i.tween.PennerManager.EASE_SPACE_OUT = 'spaceOut';
i.tween.PennerManager.EASE_BLAST = 'blast';
i.tween.PennerManager.EASE_BLAST_IN = 'blastIn';
i.tween.PennerManager.EASE_BLAST_OUT = 'blastOut';
i.tween.PennerManager.EASE_WAVE = 'wave';
i.tween.PennerManager.EASE_WAVE_IN = 'waveIn';
i.tween.PennerManager.EASE_WAVE_OUT = 'waveOut';
i.tween.PennerManager.EASE_CIRCLE = 'circle';
i.tween.PennerManager.EASE_CIRCLE_IN = 'circleIn';
i.tween.PennerManager.EASE_CIRCLE_OUT = 'circleOut';
r.ServiceAnalytics._offlineUserId = '';
r.ServiceAnalytics._offlineTrackingId = '';
r.ServiceAnalytics._appId = '';
r.ServiceAnalytics._sessionId = '';
r.ServiceAnalytics._flagInitted = !1;
r.ServiceAnalytics._flagStarted = !1;
r.ServiceAnalytics._flagLoaded = !1;
r.ServiceAnalytics._DEFAULT_SHARED_OBJECT_ID = 'nkcimocuresid';
r.ServiceAnalytics.OPTION_ENABLE_TRACKING = !1;
f.WMPointer._DELTA_ALLOWANCE = 30;
f.WMPointer._DELTA_TIMEOUT = 0.2;
f.WorkinCloud.instance = new f.WorkinCloud;
h.html.HtmlPlatform.instance = new h.html.HtmlPlatform;
n.SignalBase.DISPATCHING_SENTINEL = new n.SignalConnection(null, null);
D.root = new L;
D.uncaughtError = new n.Signal1;
D.hidden = new n.Value(!1);
D.hasGPU = new n.Value(!1);
D._platform = h.html.HtmlPlatform.instance;
D._calledInit = !1;
Y.logger = new n.Logger(D._platform.createLogHandler('flambe'));
z.Manifest._buildManifest = z.Manifest.createBuildManifests();
M = z.Manifest;
Y = (new W('\\b(Android)\\b', '')).match(y.window.navigator.userAgent) ? !1 : null != (new XMLHttpRequest).withCredentials;
M._supportsCrossOrigin = Y;
l.Sprite._scratchPoint = new H.Point;
h.BasicKeyboard._sharedEvent = new d.KeyboardEvent;
h.BasicMouse._sharedEvent = new d.MouseEvent;
h.BasicPointer._sharedEvent = new d.PointerEvent;
h.html.CanvasRenderer.CANVAS_TEXTURES = (new W('(iPhone|iPod|iPad)', '')).match(y.window.navigator.userAgent);
h.html.HtmlAssetPackLoader._mediaRefCount = 0;
h.html.HtmlAssetPackLoader._detectBlobSupport = !1;
h.html.HtmlUtil.VENDOR_PREFIXES = [
'webkit',
'moz',
'ms',
'o',
'khtml'
];
h.html.HtmlUtil.SHOULD_HIDE_MOBILE_BROWSER = y.window.top == y.window && (new W('Mobile(/.*)? Safari', '')).match(y.window.navigator.userAgent);
h.html.WebAudioSound._detectSupport = !0;
S.USE_CACHE = !1;
S.USE_ENUM_INDEX = !1;
S.BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:';
O.DEFAULT_RESOLVER = K;
O.BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:';
N.main()
}) ();
