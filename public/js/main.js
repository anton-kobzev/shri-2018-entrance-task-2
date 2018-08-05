!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(t, e, n) {
    n(3), (t.exports = n(1));
  },
  function(t, e, n) {},
  ,
  function(t, e, n) {
    "use strict";
    n.r(e);
    var i = window,
      r =
        i.requestAnimationFrame ||
        i.webkitRequestAnimationFrame ||
        i.mozRequestAnimationFrame ||
        i.msRequestAnimationFrame ||
        function(t) {
          return setTimeout(t, 16);
        },
      a = window,
      o =
        a.cancelAnimationFrame ||
        a.mozCancelAnimationFrame ||
        function(t) {
          clearTimeout(t);
        };
    function s() {
      for (
        var t, e, n, i = arguments[0] || {}, r = 1, a = arguments.length;
        r < a;
        r++
      )
        if (null !== (t = arguments[r]))
          for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
      return i;
    }
    function u(t) {
      return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
    }
    function l(t, e, n, i) {
      return i && t.setItem(e, n), n;
    }
    function c() {
      var t = document,
        e = t.body;
      return e || ((e = t.createElement("body")).fake = !0), e;
    }
    var d = document.documentElement;
    function f(t) {
      var e = "";
      return (
        t.fake &&
          ((e = d.style.overflow),
          (t.style.background = ""),
          (t.style.overflow = d.style.overflow = "hidden"),
          d.appendChild(t)),
        e
      );
    }
    function v(t, e) {
      t.fake && (t.remove(), (d.style.overflow = e), d.offsetHeight);
    }
    function p(t, e, n, i) {
      "insertRule" in t
        ? t.insertRule(e + "{" + n + "}", i)
        : t.addRule(e, n, i);
    }
    function h(t) {
      return ("insertRule" in t ? t.cssRules : t.rules).length;
    }
    function m(t, e, n) {
      for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i);
    }
    var y = "classList" in document.createElement("_"),
      g = y
        ? function(t, e) {
            return t.classList.contains(e);
          }
        : function(t, e) {
            return t.className.indexOf(e) >= 0;
          },
      b = y
        ? function(t, e) {
            g(t, e) || t.classList.add(e);
          }
        : function(t, e) {
            g(t, e) || (t.className += " " + e);
          },
      x = y
        ? function(t, e) {
            g(t, e) && t.classList.remove(e);
          }
        : function(t, e) {
            g(t, e) && (t.className = t.className.replace(e, ""));
          };
    function w(t, e) {
      return t.hasAttribute(e);
    }
    function A(t, e) {
      return t.getAttribute(e);
    }
    function C(t) {
      return void 0 !== t.item;
    }
    function E(t, e) {
      if (
        ((t = C(t) || t instanceof Array ? t : [t]),
        "[object Object]" === Object.prototype.toString.call(e))
      )
        for (var n = t.length; n--; )
          for (var i in e) t[n].setAttribute(i, e[i]);
    }
    function M(t, e) {
      t = C(t) || t instanceof Array ? t : [t];
      for (
        var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
        i--;

      )
        for (var r = n; r--; ) t[i].removeAttribute(e[r]);
    }
    function T(t) {
      w(t, "hidden") || E(t, { hidden: "" });
    }
    function L(t) {
      w(t, "hidden") && M(t, "hidden");
    }
    function O(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0;
    }
    function N(t) {
      if ("string" == typeof t) {
        var e = [t],
          n = t.charAt(0).toUpperCase() + t.substr(1);
        ["Webkit", "Moz", "ms", "O"].forEach(function(i) {
          ("ms" === i && "transform" !== t) || e.push(i + n);
        }),
          (t = e);
      }
      for (
        var i = document.createElement("fakeelement"), r = (t.length, 0);
        r < t.length;
        r++
      ) {
        var a = t[r];
        if (void 0 !== i.style[a]) return a;
      }
      return !1;
    }
    function k(t, e) {
      var n = !1;
      return (
        /^Webkit/.test(t)
          ? (n = "webkit" + e + "End")
          : /^O/.test(t)
            ? (n = "o" + e + "End")
            : t && (n = e.toLowerCase() + "end"),
        n
      );
    }
    var D = !1;
    try {
      var S = Object.defineProperty({}, "passive", {
        get: function() {
          D = !0;
        }
      });
      window.addEventListener("test", null, S);
    } catch (t) {}
    var B = !!D && { passive: !0 };
    function P(t, e) {
      for (var n in e) {
        var i = ("touchstart" === n || "touchmove" === n) && B;
        t.addEventListener(n, e[n], i);
      }
    }
    function I(t, e) {
      for (var n in e) {
        var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && B;
        t.removeEventListener(n, e[n], i);
      }
    }
    Object.keys ||
      (Object.keys = function(t) {
        var e = [];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e;
      }),
      "remove" in Element.prototype ||
        (Element.prototype.remove = function() {
          this.parentNode && this.parentNode.removeChild(this);
        });
    var H = function(t) {
      t = s(
        {
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: !1,
          autoWidth: !1,
          viewportMax: !1,
          slideBy: 1,
          controls: !0,
          controlsText: ["prev", "next"],
          controlsContainer: !1,
          prevButton: !1,
          nextButton: !1,
          nav: !0,
          navContainer: !1,
          navAsThumbnails: !1,
          arrowKeys: !1,
          speed: 300,
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: !1,
          autoplayButton: !1,
          autoplayButtonOutput: !0,
          autoplayResetOnVisibility: !0,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: !1,
          loop: !0,
          rewind: !1,
          autoHeight: !1,
          responsive: !1,
          lazyload: !1,
          touch: !0,
          mouseDrag: !1,
          swipeAngle: 15,
          nested: !1,
          freezable: !0,
          onInit: !1,
          useLocalStorage: !0
        },
        t || {}
      );
      var e = document,
        n = window,
        i = {
          ENTER: 13,
          SPACE: 32,
          PAGEUP: 33,
          PAGEDOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40
        },
        a = {},
        d = t.useLocalStorage;
      if (d) {
        var y = navigator.userAgent,
          C = new Date();
        try {
          (a = n.localStorage)
            ? (a.setItem(C, C), (d = a.getItem(C) == C), a.removeItem(C))
            : (d = !1),
            d || (a = {});
        } catch (t) {
          d = !1;
        }
        d &&
          (a.tnsApp &&
            a.tnsApp !== y &&
            [
              "tC",
              "tPL",
              "tMQ",
              "tTf",
              "t3D",
              "tTDu",
              "tTDe",
              "tADu",
              "tADe",
              "tTE",
              "tAE"
            ].forEach(function(t) {
              a.removeItem(t);
            }),
          (localStorage.tnsApp = y));
      }
      for (
        var D = a.tC
            ? u(a.tC)
            : l(
                a,
                "tC",
                (function() {
                  var t = document,
                    e = c(),
                    n = f(e),
                    i = t.createElement("div"),
                    r = !1;
                  e.appendChild(i);
                  try {
                    for (
                      var a,
                        o = "(10px * 10)",
                        s = ["calc" + o, "-moz-calc" + o, "-webkit-calc" + o],
                        u = 0;
                      u < 3;
                      u++
                    )
                      if (
                        ((a = s[u]), (i.style.width = a), 100 === i.offsetWidth)
                      ) {
                        r = a.replace(o, "");
                        break;
                      }
                  } catch (t) {}
                  return e.fake ? v(e, n) : i.remove(), r;
                })(),
                d
              ),
          S = a.tPL
            ? u(a.tPL)
            : l(
                a,
                "tPL",
                (function() {
                  var t,
                    e = document,
                    n = c(),
                    i = f(n),
                    r = e.createElement("div"),
                    a = e.createElement("div"),
                    o = "";
                  (r.className = "tns-t-subp2"), (a.className = "tns-t-ct");
                  for (var s = 0; s < 70; s++) o += "<div></div>";
                  return (
                    (a.innerHTML = o),
                    r.appendChild(a),
                    n.appendChild(r),
                    (t =
                      Math.abs(
                        r.getBoundingClientRect().left -
                          a.children[67].getBoundingClientRect().left
                      ) < 2),
                    n.fake ? v(n, i) : r.remove(),
                    t
                  );
                })(),
                d
              ),
          B = a.tMQ
            ? u(a.tMQ)
            : l(
                a,
                "tMQ",
                (function() {
                  var t,
                    e = document,
                    n = c(),
                    i = f(n),
                    r = e.createElement("div"),
                    a = e.createElement("style"),
                    o =
                      "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
                  return (
                    (a.type = "text/css"),
                    (r.className = "tns-mq-test"),
                    n.appendChild(a),
                    n.appendChild(r),
                    a.styleSheet
                      ? (a.styleSheet.cssText = o)
                      : a.appendChild(e.createTextNode(o)),
                    (t = window.getComputedStyle
                      ? window.getComputedStyle(r).position
                      : r.currentStyle.position),
                    n.fake ? v(n, i) : r.remove(),
                    "absolute" === t
                  );
                })(),
                d
              ),
          R = a.tTf ? u(a.tTf) : l(a, "tTf", N("transform"), d),
          W = a.t3D
            ? u(a.t3D)
            : l(
                a,
                "t3D",
                (function(t) {
                  if (!t) return !1;
                  if (!window.getComputedStyle) return !1;
                  var e,
                    n = document,
                    i = c(),
                    r = f(i),
                    a = n.createElement("p"),
                    o =
                      t.length > 9
                        ? "-" + t.slice(0, -9).toLowerCase() + "-"
                        : "";
                  return (
                    (o += "transform"),
                    i.insertBefore(a, null),
                    (a.style[t] = "translate3d(1px,1px,1px)"),
                    (e = window.getComputedStyle(a).getPropertyValue(o)),
                    i.fake ? v(i, r) : a.remove(),
                    void 0 !== e && e.length > 0 && "none" !== e
                  );
                })(R),
                d
              ),
          _ = a.tTDu ? u(a.tTDu) : l(a, "tTDu", N("transitionDuration"), d),
          q = a.tTDe ? u(a.tTDe) : l(a, "tTDe", N("transitionDelay"), d),
          z = a.tADu ? u(a.tADu) : l(a, "tADu", N("animationDuration"), d),
          j = a.tADe ? u(a.tADe) : l(a, "tADe", N("animationDelay"), d),
          F = a.tTE ? u(a.tTE) : l(a, "tTE", k(_, "Transition"), d),
          G = a.tAE ? u(a.tAE) : l(a, "tAE", k(z, "Animation"), d),
          U = n.console && "function" == typeof n.console.warn,
          Q = [
            "container",
            "controlsContainer",
            "prevButton",
            "nextButton",
            "navContainer",
            "autoplayButton"
          ],
          V = {},
          X = Q.length;
        X--;

      ) {
        var Y = Q[X];
        if ("string" == typeof t[Y]) {
          var K = t[Y],
            J = e.querySelector(K);
          if (((V[Y] = K), !J || !J.nodeName))
            return void (U && console.warn("Can't find", t[Y]));
          t[Y] = J;
        }
      }
      if (!(t.container.children.length < 1)) {
        var Z = t.responsive,
          $ = t.nested,
          tt = "carousel" === t.mode;
        if (Z) {
          0 in Z && ((t = s(t, Z[0])), delete Z[0]);
          var et = {};
          for (var nt in Z) {
            var it = Z[nt];
            (it = "number" == typeof it ? { items: it } : it), (et[nt] = it);
          }
          (Z = et), (et = null);
        }
        if (
          ((tt && "outer" !== $) ||
            (function t(e) {
              for (var n in e)
                tt ||
                  ("slideBy" === n && (e[n] = "page"),
                  "edgePadding" === n && (e[n] = !1)),
                  "outer" === $ && "autoHeight" === n && (e[n] = !0),
                  "responsive" === n && t(e[n]);
            })(t),
          !tt)
        ) {
          (t.axis = "horizontal"), (t.slideBy = "page"), (t.edgePadding = !1);
          var rt = t.animateIn,
            at = t.animateOut,
            ot = t.animateDelay,
            st = t.animateNormal;
        }
        var ut,
          lt,
          ct = "horizontal" === t.axis,
          dt = e.createElement("div"),
          ft = e.createElement("div"),
          vt = t.container,
          pt = vt.parentNode,
          ht = vt.outerHTML,
          mt = vt.children,
          yt = mt.length,
          gt = mn();
        Z && Sn();
        var bt,
          xt,
          wt = t.autoWidth,
          At = bn("fixedWidth"),
          Ct = bn("edgePadding"),
          Et = bn("gutter"),
          Mt = yn(),
          Tt = wt ? 1 : Math.floor(bn("items")),
          Lt = bn("slideBy"),
          Ot = t.viewportMax || t.fixedWidthViewportWidth,
          Nt = bn("arrowKeys"),
          kt = bn("speed"),
          Dt = t.rewind,
          St = !Dt && t.loop,
          Bt = bn("autoHeight"),
          Pt = (function(t) {
            var e = document.createElement("style");
            return (
              t && e.setAttribute("media", t),
              document.querySelector("head").appendChild(e),
              e.sheet ? e.sheet : e.styleSheet
            );
          })(),
          It = t.lazyload,
          Ht = [],
          Rt = St
            ? (function() {
                var e = (function() {
                    if (wt || (At && !Ot)) return yt - 1;
                    var e = At ? "fixedWidth" : "items",
                      n = [];
                    if (((At || t[e] < yt) && n.push(t[e]), Z))
                      for (var i in Z) {
                        var r = Z[i][e];
                        r && (At || r < yt) && n.push(r);
                      }
                    return (
                      n.length || n.push(0),
                      Math.ceil(
                        At
                          ? Ot / Math.min.apply(null, n)
                          : Math.max.apply(null, n)
                      )
                    );
                  })(),
                  n = tt ? Math.ceil((5 * e - yt) / 2) : 4 * e - yt;
                return (n = Math.max(e, n)), gn("edgePadding") ? n + 1 : n;
              })()
            : 0,
          Wt = tt ? yt + 2 * Rt : yt + Rt,
          _t = !((!At && !wt) || St),
          qt = At ? Zn() : null,
          zt = !tt || !St,
          jt = ct ? "left" : "top",
          Ft = "",
          Gt = "",
          Ut = At
            ? function() {
                return Math.floor(-qt / (At + Et)) + 1;
              }
            : wt
              ? function() {
                  for (var t = Wt, e = t - 1; t--; ) bt[t] > -qt && (e = t);
                  return e;
                }
              : function() {
                  return St || tt ? Math.max(0, Wt - Math.ceil(Tt)) : Wt - 1;
                },
          Qt = pn(bn("startIndex")),
          Vt = Qt,
          Xt = 0,
          Yt = wt ? null : Ut(),
          Kt = t.swipeAngle,
          Jt = !Kt || "?",
          Zt = !1,
          $t = t.onInit,
          te = new function() {
            return {
              topics: {},
              on: function(t, e) {
                (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
              },
              off: function(t, e) {
                if (this.topics[t])
                  for (var n = 0; n < this.topics[t].length; n++)
                    if (this.topics[t][n] === e) {
                      this.topics[t].splice(n, 1);
                      break;
                    }
              },
              emit: function(t, e) {
                this.topics[t] &&
                  this.topics[t].forEach(function(t) {
                    t(e);
                  });
              }
            };
          }(),
          ee = " tns-slider tns-" + t.mode,
          ne =
            vt.id ||
            (function() {
              var t = window.tnsId;
              return (window.tnsId = t ? t + 1 : 1), "tns" + window.tnsId;
            })(),
          ie = bn("disable"),
          re = !1,
          ae = t.freezable,
          oe = !(!ae || wt) && Dn(),
          se = !1,
          ue = {
            click: si,
            keydown: function(t) {
              switch ((t = hi(t)).keyCode) {
                case i.LEFT:
                case i.UP:
                case i.PAGEUP:
                  ke.disabled || si(t, -1);
                  break;
                case i.RIGHT:
                case i.DOWN:
                case i.PAGEDOWN:
                  De.disabled || si(t, 1);
                  break;
                case i.HOME:
                  oi("first", t);
                  break;
                case i.END:
                  oi("last", t);
              }
            }
          },
          le = {
            click: function(t) {
              Zt && ai();
              var e = (t = hi(t)).target || t.srcElement;
              for (; e !== Pe && !w(e, "data-nav"); ) e = e.parentNode;
              w(e, "data-nav") && oi((We = [].indexOf.call(Se, e)), t);
            },
            keydown: function(n) {
              var r = e.activeElement;
              if (!w(r, "data-nav")) return;
              var a = (n = hi(n)).keyCode,
                o = [].indexOf.call(Se, r),
                s = He.length,
                u = He.indexOf(o);
              t.navContainer && ((s = yt), (u = o));
              function l(e) {
                return t.navContainer ? e : He[e];
              }
              switch (a) {
                case i.LEFT:
                case i.PAGEUP:
                  u > 0 && pi(Se[l(u - 1)]);
                  break;
                case i.UP:
                case i.HOME:
                  u > 0 && pi(Se[l(0)]);
                  break;
                case i.RIGHT:
                case i.PAGEDOWN:
                  u < s - 1 && pi(Se[l(u + 1)]);
                  break;
                case i.DOWN:
                case i.END:
                  u < s - 1 && pi(Se[l(s - 1)]);
                  break;
                case i.ENTER:
                case i.SPACE:
                  (We = o), oi(o, n);
              }
            }
          },
          ce = {
            mouseover: function() {
              Fe && (li(), (Ge = !0));
            },
            mouseout: function() {
              Ge && (ui(), (Ge = !1));
            }
          },
          de = {
            visibilitychange: function() {
              e.hidden ? Fe && (li(), (Qe = !0)) : Qe && (ui(), (Qe = !1));
            }
          },
          fe = {
            keydown: function(t) {
              switch ((t = hi(t)).keyCode) {
                case i.LEFT:
                  si(t, -1);
                  break;
                case i.RIGHT:
                  si(t, 1);
              }
            }
          },
          ve = { touchstart: bi, touchmove: xi, touchend: Ai, touchcancel: Ai },
          pe = { mousedown: bi, mousemove: xi, mouseup: Ai, mouseleave: Ai },
          he = gn("controls"),
          me = gn("nav"),
          ye = !!wt || t.navAsThumbnails,
          ge = gn("autoplay"),
          be = gn("touch"),
          xe = gn("mouseDrag"),
          we = "tns-slide-active",
          Ae = "tns-complete",
          Ce = { load: Wn, error: Wn };
        if (he)
          var Ee,
            Me,
            Te = bn("controls"),
            Le = bn("controlsText"),
            Oe = t.controlsContainer,
            Ne = t.controlsContainer ? t.controlsContainer.outerHTML : "",
            ke = t.prevButton,
            De = t.nextButton;
        if (me)
          var Se,
            Be = bn("nav"),
            Pe = t.navContainer,
            Ie = t.navContainer ? t.navContainer.outerHTML : "",
            He = [],
            Re = He,
            We = -1,
            _e = hn(),
            qe = _e,
            ze = "tns-nav-active";
        if (ge)
          var je,
            Fe,
            Ge,
            Ue,
            Qe,
            Ve = bn("autoplay"),
            Xe = bn("autoplayTimeout"),
            Ye = "forward" === t.autoplayDirection ? 1 : -1,
            Ke = bn("autoplayText"),
            Je = bn("autoplayHoverPause"),
            Ze = t.autoplayButton,
            $e = t.autoplayButton ? t.autoplayButton.outerHTML : "",
            tn = bn("autoplayResetOnVisibility"),
            en = ["<span class='tns-visually-hidden'>", " animation</span>"];
        if (be || xe)
          var nn,
            rn = {},
            an = {},
            on = !1,
            sn = 0,
            un = ct
              ? function(t, e) {
                  return t.x - e.x;
                }
              : function(t, e) {
                  return t.y - e.y;
                };
        if (be) var ln = bn("touch");
        if (xe) var cn = bn("mouseDrag");
        vn(ie || oe),
          R &&
            ((jt = R),
            (Ft = "translate"),
            W
              ? ((Ft += ct ? "3d(" : "3d(0px, "),
                (Gt = ct ? ", 0px, 0px)" : ", 0px)"))
              : ((Ft += ct ? "X(" : "Y("), (Gt = ")"))),
          (function() {
            !(function() {
              gn("gutter");
              (dt.className = "tns-outer"),
                (ft.className = "tns-inner"),
                (ft.id = ne + "-iw"),
                Bt && (ft.className += " tns-ah");
              "" === vt.id && (vt.id = ne);
              (ee += S || wt ? " tns-subpixel" : " tns-no-subpixel"),
                (ee += D ? " tns-calc" : " tns-no-calc"),
                tt && (ee += " tns-" + t.axis);
              if (((vt.className += ee), tt)) {
                var n = e.createElement("div");
                (n.className = "tns-ovh"), dt.appendChild(n), n.appendChild(ft);
              } else dt.appendChild(ft);
              pt.insertBefore(dt, vt), ft.appendChild(vt);
            })();
            for (var i = 0; i < yt; i++) {
              var r = mt[i];
              r.id || (r.id = ne + "-item" + i),
                b(r, "tns-item"),
                !tt && st && b(r, st),
                E(r, { "aria-hidden": "true", tabindex: "-1" });
            }
            if (Rt) {
              for (
                var a = e.createDocumentFragment(),
                  o = e.createDocumentFragment(),
                  s = Rt;
                s--;

              ) {
                var u = s % yt,
                  l = mt[u].cloneNode(!0);
                if ((M(l, "id"), o.insertBefore(l, o.firstChild), tt)) {
                  var c = mt[yt - 1 - u].cloneNode(!0);
                  M(c, "id"), a.appendChild(c);
                }
              }
              vt.insertBefore(a, vt.firstChild),
                vt.appendChild(o),
                (mt = vt.children);
            }
            (function() {
              for (var e = Qt, i = Qt + Math.min(yt, Tt); e < i; e++) {
                var r = mt[e];
                E(r, { "aria-hidden": "false" }),
                  M(r, ["tabindex"]),
                  b(r, we),
                  tt ||
                    ((r.style.left = (100 * (e - Qt)) / Tt + "%"),
                    b(r, rt),
                    x(r, st));
              }
              if (
                (tt &&
                  ct &&
                  (S || wt
                    ? (p(
                        Pt,
                        "#" + ne + " > .tns-item",
                        "font-size:" + n.getComputedStyle(mt[0]).fontSize + ";",
                        h(Pt)
                      ),
                      p(Pt, "#" + ne, "font-size:0;", h(Pt)))
                    : m(mt, function(t, e) {
                        t.style.marginLeft = (function(t) {
                          return D
                            ? D + "(" + 100 * t + "% / " + Wt + ")"
                            : (100 * t) / Wt + "%";
                        })(e);
                      })),
                B)
              ) {
                var a = xn(t.edgePadding, t.gutter, t.fixedWidth, t.speed);
                p(Pt, "#" + ne + "-iw", a, h(Pt)),
                  tt &&
                    ((a =
                      ct && !wt
                        ? "width:" + wn(t.fixedWidth, t.gutter, t.items) + ";"
                        : ""),
                    _ && (a += Mn(kt)),
                    p(Pt, "#" + ne, a, h(Pt))),
                  (a = ct && !wt ? An(t.fixedWidth, t.gutter, t.items) : ""),
                  t.gutter && (a += Cn(t.gutter)),
                  tt || (_ && (a += Mn(kt)), z && (a += Tn(kt))),
                  a && p(Pt, "#" + ne + " > .tns-item", a, h(Pt));
              } else {
                (ft.style.cssText = xn(Ct, Et, At)),
                  tt && ct && !wt && (vt.style.width = wn(At, Et, Tt));
                var a = ct && !wt ? An(At, Et, Tt) : "";
                Et && (a += Cn(Et)),
                  a && p(Pt, "#" + ne + " > .tns-item", a, h(Pt));
              }
              if (Z && B)
                for (var o in Z) {
                  o = parseInt(o);
                  var s = Z[o],
                    a = "",
                    u = "",
                    l = "",
                    c = "",
                    d = wt ? null : bn("items", o),
                    f = bn("fixedWidth", o),
                    v = bn("speed", o),
                    y = bn("edgePadding", o),
                    g = bn("gutter", o);
                  ("edgePadding" in s || "gutter" in s) &&
                    (u = "#" + ne + "-iw{" + xn(y, g, f, v) + "}"),
                    tt &&
                      ct &&
                      !wt &&
                      ("fixedWidth" in s ||
                        "items" in s ||
                        (At && "gutter" in s)) &&
                      (l = "width:" + wn(f, g, d) + ";"),
                    _ && "speed" in s && (l += Mn(v)),
                    l && (l = "#" + ne + "{" + l + "}"),
                    ("fixedWidth" in s ||
                      (At && "gutter" in s) ||
                      (!tt && "items" in s)) &&
                      (c += An(f, g, d)),
                    "gutter" in s && (c += Cn(g)),
                    !tt &&
                      "speed" in s &&
                      (_ && (c += Mn(v)), z && (c += Tn(v))),
                    c && (c = "#" + ne + " > .tns-item{" + c + "}"),
                    (a = u + l + c) &&
                      Pt.insertRule(
                        "@media (min-width: " + o / 16 + "em) {" + a + "}",
                        Pt.cssRules.length
                      );
                }
            })(),
              Ln(),
              wt || On();
            Z && Sn();
            if (tt && F) {
              var d = {};
              (d[F] = ai), P(vt, d);
            }
            ln && P(vt, ve);
            cn && P(vt, pe);
            Nt && P(e, fe);
            "inner" === $
              ? te.on("outerResized", function() {
                  kn(), te.emit("innerLoaded", Mi());
                })
              : (Z || At || wt || !ct) && P(n, { resize: Nn });
            "outer" === $
              ? te.on("innerLoaded", qn)
              : (!Bt && tt) || ie || qn();
            wt || Rn();
            ie ? Hn() : oe && In();
            te.on("indexChanged", jn), "function" == typeof $t && $t(Mi());
            "inner" === $ && te.emit("innerLoaded", Mi());
            lt = !0;
          })();
        var dn = St
            ? tt
              ? function() {
                  var t = Xt,
                    e = Yt;
                  (t += Lt),
                    (e -= Lt),
                    Ct
                      ? ((t += 1), (e -= 1))
                      : At && Mt % (At + Et) && (e -= 1),
                    Rt && (Qt > e ? (Qt -= yt) : Qt < t && (Qt += yt));
                }
              : function() {
                  if (Qt > Yt) for (; Qt >= Xt + yt; ) Qt -= yt;
                  else if (Qt < Xt) for (; Qt <= Yt - yt; ) Qt += yt;
                }
            : function() {
                Qt = Math.max(Xt, Math.min(Yt, Qt));
              },
          fn = tt
            ? function() {
                _ || !kt
                  ? (ei(), (kt && O(vt)) || ai())
                  : (function(t, e, n, i, r, a, o) {
                      var s = Math.min(a, 10),
                        u = r.indexOf("%") >= 0 ? "%" : "px",
                        l = ((r = r.replace(u, "")),
                        Number(
                          t.style[e]
                            .replace(n, "")
                            .replace(i, "")
                            .replace(u, "")
                        )),
                        c = ((r - l) / a) * s;
                      setTimeout(function r() {
                        (a -= s),
                          (l += c),
                          (t.style[e] = n + l + u + i),
                          a > 0 ? setTimeout(r, s) : o();
                      }, s);
                    })(vt, jt, Ft, Gt, $n(), kt, ai),
                  ct || Ci();
              }
            : function() {
                Ht = [];
                var t = {};
                (t[F] = t[G] = ai),
                  I(mt[Vt], t),
                  P(mt[Qt], t),
                  ni(Vt, rt, at, !0),
                  ni(Qt, st, rt),
                  (F && G && kt && O(vt)) || ai();
              };
        return {
          getInfo: Mi,
          events: te,
          goTo: oi,
          play: function() {
            Ve && !Fe && (di(), (Ue = !1));
          },
          pause: function() {
            Fe && (fi(), (Ue = !0));
          },
          isOn: lt,
          updateSliderHeight: Gn,
          refresh: Ln,
          destroy: function() {
            if (
              ((Pt.disabled = !0),
              I(n, { resize: Nn }),
              Nt && I(e, fe),
              Oe && I(Oe, ue),
              Ne && (Oe.outerHTML = Ne),
              Pe && I(Pe, le),
              Ie && (Pe.outerHTML = Ie),
              I(vt, ce),
              I(vt, de),
              Ze && I(Ze, { click: vi }),
              Ve && clearInterval(je),
              $e && (Ze.outerHTML = $e),
              tt && F)
            ) {
              var t = {};
              (t[F] = ai), I(vt, t);
            }
            ln && I(vt, ve),
              cn && I(vt, pe),
              (dt.outerHTML = ht),
              (rt = at = ot = st = ct = dt = ft = vt = pt = ht = mt = yt = ut = gt = wt = At = Ct = Et = Mt = Tt = Lt = Ot = Nt = kt = Dt = St = Bt = Pt = It = bt = Ht = Rt = Wt = _t = qt = zt = jt = Ft = Gt = Ut = Qt = Vt = Xt = Yt = Kt = Jt = Zt = $t = te = ee = ne = ie = re = ae = oe = se = ue = le = ce = de = fe = ve = pe = he = me = ye = ge = be = xe = we = Ae = Ce = xt = Te = Le = Oe = Ne = ke = De = Ee = Me = Be = Pe = Ie = Se = He = Re = We = _e = qe = ze = Ve = Xe = Ye = Ke = Je = Ze = $e = tn = en = je = Fe = Ge = Ue = Qe = rn = an = nn = on = sn = un = ln = cn = null),
              (this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null),
              (this.isOn = lt = !1);
          },
          rebuild: function() {
            return H(s(t, V));
          }
        };
      }
      function vn(t) {
        t && (Te = Be = ln = cn = Nt = Ve = Je = tn = !1);
      }
      function pn(t) {
        return (
          (t = t ? Math.max(0, Math.min(St ? yt - 1 : yt - Tt, t)) : 0),
          tt ? t + Rt : t
        );
      }
      function hn(t) {
        for (null == t && (t = Qt), tt && (t -= Rt); t < 0; ) t += yt;
        return Math.floor(t % yt);
      }
      function mn() {
        return (
          n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        );
      }
      function yn() {
        var t = (function t(e) {
          return e.clientWidth || t(e.parentNode);
        })(pt);
        return Ct ? t - (2 * Ct - Et) : t;
      }
      function gn(e) {
        if (t[e]) return !0;
        if (Z) for (var n in Z) if (Z[n][e]) return !0;
        return !1;
      }
      function bn(e, n) {
        if ((null == n && (n = gt), "items" === e && At))
          return Math.floor(Mt / (At + Et)) || 1;
        var i = t[e];
        if (Z) for (var r in Z) n >= parseInt(r) && e in Z[r] && (i = Z[r][e]);
        return (
          "slideBy" === e && "page" === i && (i = bn("items")),
          tt || ("slideBy" !== e && "items" !== e) || (i = Math.floor(i)),
          i
        );
      }
      function xn(t, e, n, i) {
        var r = "";
        if (t) {
          var a = t;
          e && (a -= e),
            (r = ct
              ? "margin: 0 " + a + "px 0 " + t + "px;"
              : "margin: " + t + "px 0 " + a + "px 0;");
        } else if (e && !n) {
          var o = "-" + e + "px";
          r = "margin: 0 " + (ct ? o + " 0 0" : "0 " + o + " 0") + ";";
        }
        return _ && i && (r += Mn(i)), r;
      }
      function wn(t, e, n) {
        return t
          ? (t + e) * Wt + "px"
          : D
            ? D + "(" + 100 * Wt + "% / " + n + ")"
            : (100 * Wt) / n + "%";
      }
      function An(t, e, n) {
        var i;
        if (t) i = t + e + "px";
        else {
          tt || (n = Math.floor(n));
          var r = tt ? Wt : n;
          i = D ? D + "(100% / " + r + ")" : 100 / r + "%";
        }
        return (i = "width:" + i), "inner" !== $ ? i + ";" : i + " !important;";
      }
      function Cn(t) {
        var e = "";
        !1 !== t &&
          (e =
            (ct ? "padding-" : "margin-") +
            (ct ? "right" : "bottom") +
            ": " +
            t +
            "px;");
        return e;
      }
      function En(t, e) {
        var n = t.substring(0, t.length - e).toLowerCase();
        return n && (n = "-" + n + "-"), n;
      }
      function Mn(t) {
        return En(_, 18) + "transition-duration:" + t / 1e3 + "s;";
      }
      function Tn(t) {
        return En(z, 17) + "animation-duration:" + t / 1e3 + "s;";
      }
      function Ln() {
        if (gn("autoHeight") || !tt || wt || !ct) {
          var t = vt.querySelectorAll("img");
          m(t, function(t) {
            var e = t.src;
            e.indexOf("data:image") < 0
              ? (P(t, Ce),
                (t.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                (t.src = e))
              : b(t, Ae);
          }),
            r(function() {
              zn(
                (function(t) {
                  for (var e = [], n = 0, i = t.length; n < i; n++)
                    e.push(t[n]);
                  return e;
                })(t),
                function() {
                  (xt = !0),
                    ie ||
                      ((ct && !wt) ||
                        (Un(),
                        Rn(),
                        wt
                          ? ((qt = Zn()),
                            ae && (oe = Dn()),
                            (Yt = Ut()),
                            oe && (Te = Be = ln = cn = Nt = Ve = Je = tn = !1),
                            On())
                          : Ci()),
                      tt && ti());
                }
              );
            });
        }
        tt && ct && !wt && ti();
      }
      function On() {
        if (ge) {
          var e = Ve ? "stop" : "start";
          Ze
            ? E(Ze, { "data-action": e })
            : t.autoplayButtonOutput &&
              (dt.insertAdjacentHTML(
                "afterbegin",
                '<button data-action="' +
                  e +
                  '" type="button">' +
                  en[0] +
                  e +
                  en[1] +
                  Ke[0] +
                  "</button>"
              ),
              (Ze = dt.querySelector("[data-action]"))),
            Ze && P(Ze, { click: vi }),
            Ve && (di(), Je && P(vt, ce), tn && P(vt, de));
        }
        if (me) {
          var n = tt ? Rt : 0;
          if (Pe) {
            E(Pe, { "aria-label": "Carousel Pagination" }), (Se = Pe.children);
            for (var i = 0; i < yt; i++) {
              var r = Se[i];
              r &&
                E(r, {
                  "data-nav": i,
                  tabindex: "-1",
                  "aria-selected": "false",
                  "aria-controls": mt[n + i].id
                });
            }
          } else {
            var a = "",
              o = ye ? "" : "hidden";
            for (i = 0; i < yt; i++)
              a +=
                '<button data-nav="' +
                i +
                '" tabindex="-1" aria-selected="false" aria-controls="' +
                mt[n + i].id +
                '" ' +
                o +
                ' type="button"></button>';
            (a =
              '<div class="tns-nav" aria-label="Carousel Pagination">' +
              a +
              "</div>"),
              dt.insertAdjacentHTML("afterbegin", a),
              (Pe = dt.querySelector(".tns-nav")),
              (Se = Pe.children);
          }
          if ((Ei(), _)) {
            var s = _.substring(0, _.length - 18).toLowerCase(),
              u = "transition: all " + kt / 1e3 + "s";
            s && (u = "-" + s + "-" + u),
              p(Pt, "[aria-controls^=" + ne + "-item]", u, h(Pt));
          }
          E(Se[_e], { tabindex: "0", "aria-selected": "true" }),
            b(Se[_e], ze),
            P(Pe, le);
        }
        he &&
          (Oe || (ke && De)
            ? (Oe &&
                ((ke = Oe.children[0]),
                (De = Oe.children[1]),
                E(Oe, { "aria-label": "Carousel Navigation", tabindex: "0" }),
                E(Oe.children, { "aria-controls": ne, tabindex: "-1" })),
              E(ke, { "data-controls": "prev" }),
              E(De, { "data-controls": "next" }))
            : (dt.insertAdjacentHTML(
                "afterbegin",
                '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' +
                  ne +
                  '" type="button">' +
                  Le[0] +
                  '</button><button data-controls="next" tabindex="-1" aria-controls="' +
                  ne +
                  '" type="button">' +
                  Le[1] +
                  "</button></div>"
              ),
              (Oe = dt.querySelector(".tns-controls")),
              (ke = Oe.children[0]),
              (De = Oe.children[1])),
          (Ee = Vn(ke)),
          (Me = Vn(De)),
          Kn(),
          Oe ? P(Oe, ue) : (P(ke, ue), P(De, ue))),
          Bn();
      }
      function Nn(t) {
        r(function() {
          kn(hi(t));
        });
      }
      function kn(t) {
        if (lt) {
          "outer" === $ && te.emit("outerResized", Mi(t)), (gt = mn());
          var n,
            i,
            r,
            a = At,
            o = Tt,
            s = ie,
            u = oe,
            l = Nt,
            c = Bt,
            d = Te,
            f = Le,
            v = Be,
            y = ln,
            g = cn,
            w = Ve,
            A = Je,
            C = tn,
            E = Ke,
            M = Qt,
            O = ut,
            N = !1;
          if (!B)
            var k = Et,
              D = Ct;
          if (
            ((At = bn("fixedWidth")),
            (Ct = bn("edgePadding")),
            (Et = bn("gutter")),
            (ie = bn("disable")),
            (Lt = bn("slideBy")),
            (kt = bn("speed")),
            (Bt = bn("autoHeight")),
            (Nt = bn("arrowKeys")),
            (Te = bn("controls")),
            (Le = bn("controlsText")),
            (Be = bn("nav")),
            (ln = bn("touch")),
            (cn = bn("mouseDrag")),
            (Ve = bn("autoplay")),
            (Ke = bn("autoplayText")),
            (Xe = bn("autoplayTimeout")),
            (Je = bn("autoplayHoverPause")),
            (tn = bn("autoplayResetOnVisibility")),
            vn(ie),
            Z && (Sn(), (n = O !== ut) && te.emit("newBreakpointStart", Mi(t))),
            (Mt = yn()),
            (ct && !wt) || ie || (Un(), ct || (Ci(), (N = !0))),
            (At || wt) && ((qt = Zn()), (Yt = Ut())),
            (n || At) &&
              (r = (Tt = bn("items")) !== o) &&
              (At || wt || (Yt = Ut()), dn()),
            n &&
              (ie !== s &&
                (ie
                  ? Hn()
                  : (function() {
                      if (!re) return;
                      if (((Pt.disabled = !1), (vt.className += ee), ti(), St))
                        for (var t = Rt; t--; )
                          tt && L(mt[t]), L(mt[Wt - t - 1]);
                      if (!tt)
                        for (var e = Qt, n = Qt + yt; e < n; e++) {
                          var i = mt[e],
                            r = e < Qt + Tt ? rt : st;
                          (i.style.left = (100 * (e - Qt)) / Tt + "%"), b(i, r);
                        }
                      Pn(), (re = !1);
                    })()),
              At !== a && (N = !0)),
            ae &&
              (n || At || wt) &&
              (oe = Dn()) !== u &&
              (oe
                ? (ei($n(pn(0))), In())
                : (!(function() {
                    if (!se) return;
                    Ct && B && (ft.style.margin = "");
                    if (Rt)
                      for (var t = "tns-transparent", e = Rt; e--; )
                        tt && x(mt[e], t), x(mt[Wt - e - 1], t);
                    Pn(), (se = !1);
                  })(),
                  (N = !0))),
            vn(ie || oe),
            Ve || (Je = tn = !1),
            Bt !== c && (Bt || (ft.style.height = "")),
            Nt !== l && (Nt ? P(e, fe) : I(e, fe)),
            Te !== d && (Te ? L(Oe) : T(Oe)),
            Le !== f && ((ke.innerHTML = Le[0]), (De.innerHTML = Le[1])),
            Be !== v && (Be ? (L(Pe), Ei()) : T(Pe)),
            ln !== y && (ln ? P(vt, ve) : I(vt, ve)),
            cn !== g && (cn ? P(vt, pe) : I(vt, pe)),
            Ve !== w &&
              (Ve
                ? (Ze && L(Ze), Fe || Ue || di())
                : (Ze && T(Ze), Fe && fi())),
            Ze && Ke !== E)
          ) {
            var S = Ve ? 1 : 0,
              H = Ze.innerHTML,
              R = H.length - E[S].length;
            H.substring(R) === E[S] &&
              (Ze.innerHTML = H.substring(0, R) + Ke[S]);
          }
          if (
            (Je !== A && (Je ? P(vt, ce) : I(vt, ce)),
            tn !== C && (tn ? P(e, de) : I(e, de)),
            (i = Qt !== M) && (te.emit("indexChanged", Mi()), (N = !0)),
            r &&
              (i || jn(),
              tt ||
                (function() {
                  for (var t = Qt + Math.min(yt, Tt), e = Wt; e--; ) {
                    var n = mt[e];
                    e >= Qt && e < t
                      ? (b(n, "tns-moving"),
                        (n.style.left = (100 * (e - Qt)) / Tt + "%"),
                        b(n, rt),
                        x(n, st))
                      : n.style.left &&
                        ((n.style.left = ""), b(n, st), x(n, rt)),
                      x(n, at);
                  }
                  setTimeout(function() {
                    m(mt, function(t) {
                      x(t, "tns-moving");
                    });
                  }, 300);
                })()),
            !ie && !oe)
          ) {
            if (
              !B &&
              n &&
              ((Ct === D && Et === k) || (ft.style.cssText = xn(Ct, Et, At)),
              ct)
            ) {
              tt && (vt.style.width = wn(At, Et, Tt));
              var W = An(At, Et, Tt) + Cn(Et);
              !(function(t, e) {
                "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
              })(Pt, h(Pt) - 1),
                p(Pt, "#" + ne + " > .tns-item", W, h(Pt));
            }
            (!Bt && tt) || qn(), N && (ti(), (Vt = Qt));
          }
          n && te.emit("newBreakpointEnd", Mi(t));
        }
      }
      function Dn() {
        return At || wt
          ? St
            ? (At ? (At + Et) * yt : bt[yt]) - Et <= Mt
            : !qt
          : yt <= Tt;
      }
      function Sn() {
        for (var t in ((ut = 0), Z)) (t = parseInt(t)), gt >= t && (ut = t);
      }
      function Bn() {
        !Ve && Ze && T(Ze), !Be && Pe && T(Pe), !Te && Oe && T(Oe);
      }
      function Pn() {
        Ve && Ze && L(Ze), Be && Pe && L(Pe), Te && Oe && L(Oe);
      }
      function In() {
        if (!se) {
          if ((Ct && (ft.style.margin = "0px"), Rt))
            for (var t = "tns-transparent", e = Rt; e--; )
              tt && b(mt[e], t), b(mt[Wt - e - 1], t);
          Bn(), (se = !0);
        }
      }
      function Hn() {
        if (!re) {
          if (
            ((Pt.disabled = !0),
            (vt.className = vt.className.replace(ee.substring(1), "")),
            M(vt, ["style"]),
            St)
          )
            for (var t = Rt; t--; ) tt && T(mt[t]), T(mt[Wt - t - 1]);
          if (((ct && tt) || M(ft, ["style"]), !tt))
            for (var e = Qt, n = Qt + yt; e < n; e++) {
              var i = mt[e];
              M(i, ["style"]), x(i, rt), x(i, st);
            }
          Bn(), (re = !0);
        }
      }
      function Rn() {
        if (It && !ie) {
          var t = Qt;
          if (wt)
            for (var e = Qt + 1, n = e, i = bt[Qt] + Mt + Ct - Et; bt[e] < i; )
              n = ++e;
          else n = Qt + Tt;
          for (
            Ct && ((t -= 1), wt || (n += 1)),
              t = Math.floor(Math.max(t, 0)),
              n = Math.ceil(Math.min(n, Wt));
            t < n;
            t++
          )
            m(mt[t].querySelectorAll(".tns-lazy-img"), function(t) {
              var e = {};
              (e[F] = function(t) {
                t.stopPropagation();
              }),
                P(t, e),
                g(t, "loaded") || ((t.src = A(t, "data-src")), b(t, "loaded"));
            });
        }
      }
      function Wn(t) {
        var e = mi(t);
        b(e, Ae), I(e, Ce);
      }
      function _n(t, e) {
        for (var n = [], i = t, r = Math.min(t + e, Wt); i < r; i++)
          m(mt[i].querySelectorAll("img"), function(t) {
            n.push(t);
          });
        return n;
      }
      function qn() {
        var t = Bt ? _n(Qt, Tt) : _n(Rt, yt);
        r(function() {
          zn(t, Gn);
        });
      }
      function zn(t, e) {
        return xt
          ? e()
          : (t.forEach(function(e, n) {
              g(e, Ae) && t.splice(n, 1);
            }),
            t.length
              ? void r(function() {
                  zn(t, e);
                })
              : e());
      }
      function jn() {
        Rn(),
          (function() {
            for (var t = Qt + Math.min(yt, Tt), e = Wt; e--; ) {
              var n = mt[e];
              e >= Qt && e < t
                ? w(n, "tabindex") &&
                  (E(n, { "aria-hidden": "false" }),
                  M(n, ["tabindex"]),
                  b(n, we))
                : (w(n, "tabindex") ||
                    E(n, { "aria-hidden": "true", tabindex: "-1" }),
                  g(n, we) && x(n, we));
            }
          })(),
          Kn(),
          Ei(),
          (function() {
            if (Be && ((_e = -1 !== We ? We : hn()), (We = -1), _e !== qe)) {
              var t = Se[qe],
                e = Se[_e];
              E(t, { tabindex: "-1", "aria-selected": "false" }),
                E(e, { tabindex: "0", "aria-selected": "true" }),
                x(t, ze),
                b(e, ze),
                (qe = _e);
            }
          })();
      }
      function Fn(t, e) {
        for (var n = [], i = t, r = Math.min(t + e, Wt); i < r; i++)
          n.push(mt[i].offsetHeight);
        return Math.max.apply(null, n);
      }
      function Gn() {
        var t = Bt ? Fn(Qt, Tt) : Fn(Rt, yt);
        ft.style.height !== t && (ft.style.height = t + "px");
      }
      function Un() {
        bt = [0];
        for (
          var t,
            e = ct ? "left" : "top",
            n = mt[0].getBoundingClientRect()[e],
            i = 1;
          i < Wt;
          i++
        )
          (t = mt[i].getBoundingClientRect()[e]), bt.push(t - n);
      }
      function Qn(t) {
        return t.nodeName.toLowerCase();
      }
      function Vn(t) {
        return "button" === Qn(t);
      }
      function Xn(t) {
        return "true" === t.getAttribute("aria-disabled");
      }
      function Yn(t, e, n) {
        t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }
      function Kn() {
        if (Te && !Dt && !St) {
          var t = Ee ? ke.disabled : Xn(ke),
            e = Me ? De.disabled : Xn(De),
            n = Qt <= Xt,
            i = !Dt && Qt >= Yt;
          n && !t && Yn(Ee, ke, !0),
            !n && t && Yn(Ee, ke, !1),
            i && !e && Yn(Me, De, !0),
            !i && e && Yn(Me, De, !1);
        }
      }
      function Jn(t, e) {
        _ && (t.style[_] = e);
      }
      function Zn() {
        var t =
          Mt -
          ((At
            ? (At + Et) * Wt
            : bt[Wt - 1] + mt[Wt - 1].getBoundingClientRect().width) -
            Et);
        return Ct && (t += Ct - Et), t > 0 && (t = 0), t;
      }
      function $n(t) {
        var e;
        (null == t && (t = Qt), ct && !wt)
          ? (e = At ? -(At + Et) * t : (100 * -t) / (R ? Wt : Tt))
          : (e = -bt[t]);
        return _t && (e = Math.max(e, qt)), (e += !ct || wt || At ? "px" : "%");
      }
      function ti(t) {
        Jn(vt, "0s"),
          ei(t),
          setTimeout(function() {
            Jn(vt, "");
          }, 10);
      }
      function ei(t) {
        null == t && (t = $n()), (vt.style[jt] = Ft + t + Gt);
      }
      function ni(t, e, n, i) {
        var r = t + Tt;
        St || (r = Math.min(r, Wt));
        for (var a = t; a < r; a++) {
          var o = mt[a];
          i || (o.style.left = (100 * (a - Qt)) / Tt + "%"),
            ot && q && (o.style[q] = o.style[j] = (ot * (a - t)) / 1e3 + "s"),
            x(o, e),
            b(o, n),
            i && Ht.push(o);
        }
      }
      function ii(t, e) {
        zt && dn(),
          (Qt !== Vt || e) &&
            (te.emit("indexChanged", Mi()),
            te.emit("transitionStart", Mi()),
            Bt && qn(),
            Fe && t && ["click", "keydown"].indexOf(t.type) >= 0 && fi(),
            (Zt = !0),
            fn());
      }
      function ri(t) {
        return t.toLowerCase().replace(/-/g, "");
      }
      function ai(t) {
        if (tt || Zt) {
          if ((te.emit("transitionEnd", Mi(t)), !tt && Ht.length > 0))
            for (var e = 0; e < Ht.length; e++) {
              var n = Ht[e];
              (n.style.left = ""),
                j && q && ((n.style[j] = ""), (n.style[q] = "")),
                x(n, at),
                b(n, st);
            }
          if (
            !t ||
            (!tt && t.target.parentNode === vt) ||
            (t.target === vt && ri(t.propertyName) === ri(jt))
          ) {
            if (!zt) {
              var i = Qt;
              dn(), Qt !== i && (te.emit("indexChanged", Mi()), ti());
            }
            "inner" === $ && te.emit("innerLoaded", Mi()), (Zt = !1), (Vt = Qt);
          }
        }
      }
      function oi(t, e) {
        if (!oe)
          if ("prev" === t) si(e, -1);
          else if ("next" === t) si(e, 1);
          else {
            Zt && ai();
            var n = hn(),
              i = 0;
            if (
              ("first" === t
                ? (i = -n)
                : "last" === t
                  ? (i = tt ? yt - Tt - n : yt - 1 - n)
                  : ("number" != typeof t && (t = parseInt(t)),
                    isNaN(t) ||
                      (e || (t = Math.max(0, Math.min(yt - 1, t))),
                      (i = t - n))),
              !tt && i && Math.abs(i) < Tt)
            ) {
              var r = i > 0 ? 1 : -1;
              i += Qt + i - yt >= Xt ? yt * r : 2 * yt * r * -1;
            }
            (Qt += i),
              tt && St && (Qt < Xt && (Qt += yt), Qt > Yt && (Qt -= yt)),
              hn(Qt) !== hn(Vt) && ii(e);
          }
      }
      function si(t, e) {
        var n;
        if ((Zt && ai(), !e)) {
          for (
            var i = (t = hi(t)).target || t.srcElement;
            i !== Oe && [ke, De].indexOf(i) < 0;

          )
            i = i.parentNode;
          var r = [ke, De].indexOf(i);
          r >= 0 && ((n = !0), (e = 0 === r ? -1 : 1));
        }
        if (Dt) {
          if (Qt === Xt && -1 === e) return void oi("last", t);
          if (Qt === Yt && 1 === e) return void oi("first", t);
        }
        e &&
          ((Qt += Lt * e),
          wt && (Qt = Math.floor(Qt)),
          ii(n || (t && "keydown" === t.type) ? t : null));
      }
      function ui() {
        (je = setInterval(function() {
          si(null, Ye);
        }, Xe)),
          (Fe = !0);
      }
      function li() {
        clearInterval(je), (Fe = !1);
      }
      function ci(t, e) {
        E(Ze, { "data-action": t }), (Ze.innerHTML = en[0] + t + en[1] + e);
      }
      function di() {
        ui(), Ze && ci("stop", Ke[1]);
      }
      function fi() {
        li(), Ze && ci("start", Ke[0]);
      }
      function vi() {
        Fe ? (fi(), (Ue = !0)) : (di(), (Ue = !1));
      }
      function pi(t) {
        t.focus();
      }
      function hi(t) {
        return yi((t = t || n.event)) ? t.changedTouches[0] : t;
      }
      function mi(t) {
        return t.target || n.event.srcElement;
      }
      function yi(t) {
        return t.type.indexOf("touch") >= 0;
      }
      function gi(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function bi(t) {
        Zt && ai(), (on = !0), tt && (o(sn), (sn = 0));
        var e = hi(t);
        te.emit(yi(t) ? "touchStart" : "dragStart", Mi(t)),
          !yi(t) && ["img", "a"].indexOf(Qn(mi(t))) >= 0 && gi(t),
          (an.x = rn.x = parseInt(e.clientX)),
          (an.y = rn.y = parseInt(e.clientY)),
          tt &&
            ((nn = parseFloat(vt.style[jt].replace(Ft, "").replace(Gt, ""))),
            Jn(vt, "0s"));
      }
      function xi(t) {
        if (on) {
          var e = hi(t);
          (an.x = parseInt(e.clientX)),
            (an.y = parseInt(e.clientY)),
            tt &&
              !sn &&
              (sn = r(function() {
                !(function t(e) {
                  if (!Jt) return void (on = !1);
                  o(sn);
                  on &&
                    (sn = r(function() {
                      t(e);
                    }));
                  wi();
                  if (Jt) {
                    try {
                      e.type &&
                        te.emit(yi(e) ? "touchMove" : "dragMove", Mi(e));
                    } catch (t) {}
                    var n = nn,
                      i = un(an, rn);
                    if (!ct || At || wt) (n += i), (n += "px");
                    else {
                      var a = R ? (i * Tt * 100) / (Mt * Wt) : (100 * i) / Mt;
                      (n += a), (n += "%");
                    }
                    vt.style[jt] = Ft + n + Gt;
                  }
                })(t);
              }));
        }
      }
      function wi() {
        "?" === Jt &&
          an.x !== rn.x &&
          an.y !== rn.y &&
          (Jt =
            (function(t, e) {
              var n = !1,
                i = Math.abs(90 - Math.abs(t));
              return (
                i >= 90 - e ? (n = "horizontal") : i <= e && (n = "vertical"), n
              );
            })(
              (function(t, e) {
                return Math.atan2(t, e) * (180 / Math.PI);
              })(an.y - rn.y, an.x - rn.x),
              Kt
            ) === t.axis);
      }
      function Ai(t) {
        if (on) {
          tt && (o(sn), Jn(vt, "")), (on = !1);
          var e = hi(t);
          (an.x = parseInt(e.clientX)), (an.y = parseInt(e.clientY));
          var n = un(an, rn);
          if (Math.abs(n) >= 5) {
            if (!yi(t)) {
              var i = mi(t);
              P(i, {
                click: function t(e) {
                  gi(e), I(i, { click: t });
                }
              });
            }
            tt
              ? (sn = r(function() {
                  if (ct && !wt) {
                    var e = (-n * Tt) / Mt;
                    (e = n > 0 ? Math.floor(e) : Math.ceil(e)), (Qt += e);
                  } else {
                    var i = -(nn + n);
                    if (i <= 0) Qt = Xt;
                    else if (i >= bt[bt.length - 1]) Qt = Yt;
                    else
                      for (var r = 0; r < Wt && i >= bt[r]; )
                        (Qt = r), i > bt[r] && n < 0 && (Qt += 1), r++;
                  }
                  ii(t, n), te.emit(yi(t) ? "touchEnd" : "dragEnd", Mi(t));
                }))
              : (wi(), Jt && si(t, n > 0 ? -1 : 1));
          }
        }
        Kt && (Jt = "?");
      }
      function Ci() {
        ft.style.height = bt[Qt + Tt] - bt[Qt] + "px";
      }
      function Ei() {
        Be &&
          !ye &&
          (!(function() {
            He = [];
            for (var t = hn() % Tt; t < yt; )
              tt && !St && t + Tt > yt && (t = yt - Tt), He.push(t), (t += Tt);
            ((St && He.length * Tt < yt) || (!St && He[0] > 0)) &&
              He.unshift(0);
          })(),
          He !== Re &&
            (m(Se, function(t, e) {
              He.indexOf(e) < 0 ? T(t) : L(t);
            }),
            (Re = He)));
      }
      function Mi(t) {
        return {
          container: vt,
          slideItems: mt,
          navContainer: Pe,
          navItems: Se,
          controlsContainer: Oe,
          hasControls: he,
          prevButton: ke,
          nextButton: De,
          items: Tt,
          slideBy: Lt,
          cloneCount: Rt,
          slideCount: yt,
          slideCountNew: Wt,
          index: Qt,
          indexCached: Vt,
          navCurrentIndex: _e,
          navCurrentIndexCached: qe,
          visibleNavIndexes: He,
          visibleNavIndexesCached: Re,
          sheet: Pt,
          event: t || {}
        };
      }
      U && console.warn("No slides found in", t.container);
    };
    const R = document.querySelector(".popup-overlay");
    function W() {
      document.body.classList.toggle("popup-opened");
    }
    R.addEventListener("click", t => {
      t.target == R && W();
    });
    class _ {
      constructor(t) {
        (this.buttons = t.querySelectorAll(
          ".device-popup__buttons-wrapper .button"
        )),
          (this.range = t.querySelector(
            ".range-control_temperature .range-control__input"
          )),
          (this.valueDisplay = t.querySelector(".device-popup__value")),
          this.addRangeEventListener(),
          this.addButtonsEventListener();
      }
      addRangeEventListener() {
        this.range.addEventListener("input", t => {
          this.setTemperature(t.target.value);
          const e = Array.prototype.find.call(this.buttons, t =>
            t.classList.contains("device-popup__manual-button")
          );
          this.setActiveButton(e);
        });
      }
      addButtonsEventListener() {
        this.buttons.forEach(t => {
          t.addEventListener("click", t => {
            const e = t.target.dataset.preset;
            void 0 !== e && this.setTemperature(e),
              this.setActiveButton(t.target);
          });
        });
      }
      setTemperature(t) {
        (this.range.value = t),
          (t = Math.floor(t)),
          (this.valueDisplay.innerHTML = t > 0 ? "+" + t : t);
      }
      setActiveButton(t) {
        this.buttons.forEach(t => {
          t.classList.remove("button_highlight");
        }),
          t.classList.add("button_highlight");
      }
    }
    window.onload = () => {
      document
        .querySelector(".vertical-slider-wrapper")
        .addEventListener("scroll", t => {
          t.target.querySelector(".slider__tip-wrapper").style.opacity = 0;
        }),
        H({
          container: ".favorite-scenarios .slider",
          loop: !1,
          nav: !1,
          items: 1,
          slideBy: 1,
          gutter: 15,
          autoWidth: !0,
          controlsContainer: ".favorite-scenarios .block__controls-wrapper",
          disable: !0,
          responsive: {
            940: { disable: !1 },
            1330: { items: 3, slideBy: 3 },
            1120: { items: 2, slideBy: 2 }
          },
          useLocalStorage: !1
        }),
        H({
          container: ".favorite-devices .slider",
          items: 6,
          loop: !1,
          nav: !1,
          slideBy: 3,
          gutter: 15,
          autoWidth: !0,
          controlsContainer: ".favorite-devices .block__controls-wrapper",
          disable: !0,
          responsive: { 940: { disable: !1 } },
          useLocalStorage: !1
        }),
        document.querySelectorAll(".device").forEach(t => {
          t.addEventListener("click", () => {
            !(function(t) {
              W(),
                t
                  .querySelectorAll(
                    ".device-popup__modal-buttons-wrapper .button"
                  )
                  .forEach(t => {
                    t.addEventListener("click", W);
                  }),
                new _(t);
            })(document.querySelector(".device-popup"));
          });
        });
    };
  }
]);
