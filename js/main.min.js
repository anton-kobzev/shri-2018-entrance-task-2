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
      r = (i.requestAnimationFrame ||
        i.webkitRequestAnimationFrame ||
        i.mozRequestAnimationFrame ||
        i.msRequestAnimationFrame,
      window);
    r.cancelAnimationFrame || r.mozCancelAnimationFrame;
    document.documentElement;
    document.createElement("_");
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function() {
          !0;
        }
      });
      window.addEventListener("test", null, a);
    } catch (t) {}
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
    function o() {
      document.querySelectorAll(".button_dropdown").forEach(t => {
        const e = t.querySelector(".button__dropdown-caption"),
          n = t.querySelectorAll(".button__dropdown-item");
        t.addEventListener("click", i => {
          i.target.classList.contains("button__dropdown-item") &&
            ((t => {
              n.forEach(t => {
                t.classList.remove("button__dropdown-item_selected");
              }),
                t.classList.add("button__dropdown-item_selected");
            })(i.target),
            (e.innerText = i.target.innerText)),
            t.classList.toggle("button_dropdown-opened");
        });
      });
    }
    class c {
      constructor(t) {
        (this.buttons = t.querySelectorAll(
          ".device-popup__buttons-wrapper .button"
        )),
          (this.range = t.querySelector(".range-control__input")),
          (this.valueDisplay = t.querySelector(".device-popup__value")),
          this.addRangeEventListener(),
          this.addButtonsEventListener();
      }
      addRangeEventListener() {
        this.range.addEventListener("input", t => {
          this.setValue(t.target.value);
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
            void 0 !== e && this.setValue(e), this.setActiveButton(t.target);
          });
        });
      }
      setValue(t) {
        (this.range.value = t),
          (t = Math.floor(t)),
          this.valueDisplay &&
            (this.valueDisplay.innerHTML = t > 0 ? "+" + t : t);
      }
      setActiveButton(t) {
        this.buttons.forEach(t => {
          t.classList.remove("button_highlight");
        }),
          t.classList.add("button_highlight");
      }
    }
    var f = function(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      },
      s = function(t) {
        return (
          1 === t.length &&
            (t = (function(t) {
              return function(e, n) {
                return f(t(e), n);
              };
            })(t)),
          {
            left: function(e, n, i, r) {
              for (null == i && (i = 0), null == r && (r = e.length); i < r; ) {
                var a = (i + r) >>> 1;
                t(e[a], n) < 0 ? (i = a + 1) : (r = a);
              }
              return i;
            },
            right: function(e, n, i, r) {
              for (null == i && (i = 0), null == r && (r = e.length); i < r; ) {
                var a = (i + r) >>> 1;
                t(e[a], n) > 0 ? (r = a) : (i = a + 1);
              }
              return i;
            }
          }
        );
      };
    var u = s(f);
    u.right, u.left;
    var h = Array.prototype;
    h.slice, h.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
    var l = function(t) {
      for (var e, n, i, r = t.length, a = -1, o = 0; ++a < r; )
        o += t[a].length;
      for (n = new Array(o); --r >= 0; )
        for (e = (i = t[r]).length; --e >= 0; ) n[--o] = i[e];
      return n;
    };
    Array.prototype.slice;
    var d = { value: function() {} };
    function _() {
      for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
        if (!(t = arguments[e] + "") || t in i)
          throw new Error("illegal type: " + t);
        i[t] = [];
      }
      return new p(i);
    }
    function p(t) {
      this._ = t;
    }
    function b(t, e) {
      for (var n, i = 0, r = t.length; i < r; ++i)
        if ((n = t[i]).name === e) return n.value;
    }
    function v(t, e, n) {
      for (var i = 0, r = t.length; i < r; ++i)
        if (t[i].name === e) {
          (t[i] = d), (t = t.slice(0, i).concat(t.slice(i + 1)));
          break;
        }
      return null != n && t.push({ name: e, value: n }), t;
    }
    p.prototype = _.prototype = {
      constructor: p,
      on: function(t, e) {
        var n,
          i = this._,
          r = (function(t, e) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function(t) {
                var n = "",
                  i = t.indexOf(".");
                if (
                  (i >= 0 && ((n = t.slice(i + 1)), (t = t.slice(0, i))),
                  t && !e.hasOwnProperty(t))
                )
                  throw new Error("unknown type: " + t);
                return { type: t, name: n };
              });
          })(t + "", i),
          a = -1,
          o = r.length;
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e)
            throw new Error("invalid callback: " + e);
          for (; ++a < o; )
            if ((n = (t = r[a]).type)) i[n] = v(i[n], t.name, e);
            else if (null == e) for (n in i) i[n] = v(i[n], t.name, null);
          return this;
        }
        for (; ++a < o; )
          if ((n = (t = r[a]).type) && (n = b(i[n], t.name))) return n;
      },
      copy: function() {
        var t = {},
          e = this._;
        for (var n in e) t[n] = e[n].slice();
        return new p(t);
      },
      call: function(t, e) {
        if ((n = arguments.length - 2) > 0)
          for (var n, i, r = new Array(n), a = 0; a < n; ++a)
            r[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (a = 0, n = (i = this._[t]).length; a < n; ++a)
          i[a].value.apply(e, r);
      },
      apply: function(t, e, n) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var i = this._[t], r = 0, a = i.length; r < a; ++r)
          i[r].value.apply(e, n);
      }
    };
    var y = _,
      g = "http://www.w3.org/1999/xhtml",
      x = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: g,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      m = function(t) {
        var e = (t += ""),
          n = e.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
          x.hasOwnProperty(e) ? { space: x[e], local: t } : t
        );
      };
    var w = function(t) {
      var e = m(t);
      return (e.local
        ? function(t) {
            return function() {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
        : function(t) {
            return function() {
              var e = this.ownerDocument,
                n = this.namespaceURI;
              return n === g && e.documentElement.namespaceURI === g
                ? e.createElement(t)
                : e.createElementNS(n, t);
            };
          })(e);
    };
    function M() {}
    var A = function(t) {
      return null == t
        ? M
        : function() {
            return this.querySelector(t);
          };
    };
    function k() {
      return [];
    }
    var T = function(t) {
        return null == t
          ? k
          : function() {
              return this.querySelectorAll(t);
            };
      },
      N = function(t) {
        return function() {
          return this.matches(t);
        };
      };
    if ("undefined" != typeof document) {
      var C = document.documentElement;
      if (!C.matches) {
        var S =
          C.webkitMatchesSelector ||
          C.msMatchesSelector ||
          C.mozMatchesSelector ||
          C.oMatchesSelector;
        N = function(t) {
          return function() {
            return S.call(this, t);
          };
        };
      }
    }
    var E = N,
      L = function(t) {
        return new Array(t.length);
      };
    function P(t, e) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
    }
    P.prototype = {
      constructor: P,
      appendChild: function(t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function(t, e) {
        return this._parent.insertBefore(t, e);
      },
      querySelector: function(t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function(t) {
        return this._parent.querySelectorAll(t);
      }
    };
    var U = "$";
    function R(t, e, n, i, r, a) {
      for (var o, c = 0, f = e.length, s = a.length; c < s; ++c)
        (o = e[c])
          ? ((o.__data__ = a[c]), (i[c] = o))
          : (n[c] = new P(t, a[c]));
      for (; c < f; ++c) (o = e[c]) && (r[c] = o);
    }
    function q(t, e, n, i, r, a, o) {
      var c,
        f,
        s,
        u = {},
        h = e.length,
        l = a.length,
        d = new Array(h);
      for (c = 0; c < h; ++c)
        (f = e[c]) &&
          ((d[c] = s = U + o.call(f, f.__data__, c, e)),
          s in u ? (r[c] = f) : (u[s] = f));
      for (c = 0; c < l; ++c)
        (f = u[(s = U + o.call(t, a[c], c, a))])
          ? ((i[c] = f), (f.__data__ = a[c]), (u[s] = null))
          : (n[c] = new P(t, a[c]));
      for (c = 0; c < h; ++c) (f = e[c]) && u[d[c]] === f && (r[c] = f);
    }
    function D(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    var F = function(t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
    function Y(t, e) {
      return (
        t.style.getPropertyValue(e) ||
        F(t)
          .getComputedStyle(t, null)
          .getPropertyValue(e)
      );
    }
    function O(t) {
      return t.trim().split(/^|\s+/);
    }
    function z(t) {
      return t.classList || new j(t);
    }
    function j(t) {
      (this._node = t), (this._names = O(t.getAttribute("class") || ""));
    }
    function $(t, e) {
      for (var n = z(t), i = -1, r = e.length; ++i < r; ) n.add(e[i]);
    }
    function B(t, e) {
      for (var n = z(t), i = -1, r = e.length; ++i < r; ) n.remove(e[i]);
    }
    j.prototype = {
      add: function(t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function(t) {
        var e = this._names.indexOf(t);
        e >= 0 &&
          (this._names.splice(e, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function(t) {
        return this._names.indexOf(t) >= 0;
      }
    };
    function H() {
      this.textContent = "";
    }
    function I() {
      this.innerHTML = "";
    }
    function V() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function X() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function Z() {
      return null;
    }
    function W() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function Q() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function J() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var G = {},
      K = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement ||
        (G = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function tt(t, e, n) {
      return (
        (t = et(t, e, n)),
        function(e) {
          var n = e.relatedTarget;
          (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
            t.call(this, e);
        }
      );
    }
    function et(t, e, n) {
      return function(i) {
        var r = K;
        K = i;
        try {
          t.call(this, this.__data__, e, n);
        } finally {
          K = r;
        }
      };
    }
    function nt(t) {
      return function() {
        var e = this.__on;
        if (e) {
          for (var n, i = 0, r = -1, a = e.length; i < a; ++i)
            (n = e[i]),
              (t.type && n.type !== t.type) || n.name !== t.name
                ? (e[++r] = n)
                : this.removeEventListener(n.type, n.listener, n.capture);
          ++r ? (e.length = r) : delete this.__on;
        }
      };
    }
    function it(t, e, n) {
      var i = G.hasOwnProperty(t.type) ? tt : et;
      return function(r, a, o) {
        var c,
          f = this.__on,
          s = i(e, a, o);
        if (f)
          for (var u = 0, h = f.length; u < h; ++u)
            if ((c = f[u]).type === t.type && c.name === t.name)
              return (
                this.removeEventListener(c.type, c.listener, c.capture),
                this.addEventListener(
                  c.type,
                  (c.listener = s),
                  (c.capture = n)
                ),
                void (c.value = e)
              );
        this.addEventListener(t.type, s, n),
          (c = {
            type: t.type,
            name: t.name,
            value: e,
            listener: s,
            capture: n
          }),
          f ? f.push(c) : (this.__on = [c]);
      };
    }
    function rt(t, e, n) {
      var i = F(t),
        r = i.CustomEvent;
      "function" == typeof r
        ? (r = new r(e, n))
        : ((r = i.document.createEvent("Event")),
          n
            ? (r.initEvent(e, n.bubbles, n.cancelable), (r.detail = n.detail))
            : r.initEvent(e, !1, !1)),
        t.dispatchEvent(r);
    }
    var at = [null];
    function ot(t, e) {
      (this._groups = t), (this._parents = e);
    }
    function ct() {
      return new ot([[document.documentElement]], at);
    }
    ot.prototype = ct.prototype = {
      constructor: ot,
      select: function(t) {
        "function" != typeof t && (t = A(t));
        for (
          var e = this._groups, n = e.length, i = new Array(n), r = 0;
          r < n;
          ++r
        )
          for (
            var a, o, c = e[r], f = c.length, s = (i[r] = new Array(f)), u = 0;
            u < f;
            ++u
          )
            (a = c[u]) &&
              (o = t.call(a, a.__data__, u, c)) &&
              ("__data__" in a && (o.__data__ = a.__data__), (s[u] = o));
        return new ot(i, this._parents);
      },
      selectAll: function(t) {
        "function" != typeof t && (t = T(t));
        for (
          var e = this._groups, n = e.length, i = [], r = [], a = 0;
          a < n;
          ++a
        )
          for (var o, c = e[a], f = c.length, s = 0; s < f; ++s)
            (o = c[s]) && (i.push(t.call(o, o.__data__, s, c)), r.push(o));
        return new ot(i, r);
      },
      filter: function(t) {
        "function" != typeof t && (t = E(t));
        for (
          var e = this._groups, n = e.length, i = new Array(n), r = 0;
          r < n;
          ++r
        )
          for (
            var a, o = e[r], c = o.length, f = (i[r] = []), s = 0;
            s < c;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && f.push(a);
        return new ot(i, this._parents);
      },
      data: function(t, e) {
        if (!t)
          return (
            (d = new Array(this.size())),
            (s = -1),
            this.each(function(t) {
              d[++s] = t;
            }),
            d
          );
        var n = e ? q : R,
          i = this._parents,
          r = this._groups;
        "function" != typeof t &&
          (t = (function(t) {
            return function() {
              return t;
            };
          })(t));
        for (
          var a = r.length,
            o = new Array(a),
            c = new Array(a),
            f = new Array(a),
            s = 0;
          s < a;
          ++s
        ) {
          var u = i[s],
            h = r[s],
            l = h.length,
            d = t.call(u, u && u.__data__, s, i),
            _ = d.length,
            p = (c[s] = new Array(_)),
            b = (o[s] = new Array(_));
          n(u, h, p, b, (f[s] = new Array(l)), d, e);
          for (var v, y, g = 0, x = 0; g < _; ++g)
            if ((v = p[g])) {
              for (g >= x && (x = g + 1); !(y = b[x]) && ++x < _; );
              v._next = y || null;
            }
        }
        return ((o = new ot(o, i))._enter = c), (o._exit = f), o;
      },
      enter: function() {
        return new ot(this._enter || this._groups.map(L), this._parents);
      },
      exit: function() {
        return new ot(this._exit || this._groups.map(L), this._parents);
      },
      merge: function(t) {
        for (
          var e = this._groups,
            n = t._groups,
            i = e.length,
            r = n.length,
            a = Math.min(i, r),
            o = new Array(i),
            c = 0;
          c < a;
          ++c
        )
          for (
            var f,
              s = e[c],
              u = n[c],
              h = s.length,
              l = (o[c] = new Array(h)),
              d = 0;
            d < h;
            ++d
          )
            (f = s[d] || u[d]) && (l[d] = f);
        for (; c < i; ++c) o[c] = e[c];
        return new ot(o, this._parents);
      },
      order: function() {
        for (var t = this._groups, e = -1, n = t.length; ++e < n; )
          for (var i, r = t[e], a = r.length - 1, o = r[a]; --a >= 0; )
            (i = r[a]) &&
              (o && o !== i.nextSibling && o.parentNode.insertBefore(i, o),
              (o = i));
        return this;
      },
      sort: function(t) {
        function e(e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n;
        }
        t || (t = D);
        for (
          var n = this._groups, i = n.length, r = new Array(i), a = 0;
          a < i;
          ++a
        ) {
          for (
            var o, c = n[a], f = c.length, s = (r[a] = new Array(f)), u = 0;
            u < f;
            ++u
          )
            (o = c[u]) && (s[u] = o);
          s.sort(e);
        }
        return new ot(r, this._parents).order();
      },
      call: function() {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function() {
        var t = new Array(this.size()),
          e = -1;
        return (
          this.each(function() {
            t[++e] = this;
          }),
          t
        );
      },
      node: function() {
        for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
          for (var i = t[e], r = 0, a = i.length; r < a; ++r) {
            var o = i[r];
            if (o) return o;
          }
        return null;
      },
      size: function() {
        var t = 0;
        return (
          this.each(function() {
            ++t;
          }),
          t
        );
      },
      empty: function() {
        return !this.node();
      },
      each: function(t) {
        for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
          for (var r, a = e[n], o = 0, c = a.length; o < c; ++o)
            (r = a[o]) && t.call(r, r.__data__, o, a);
        return this;
      },
      attr: function(t, e) {
        var n = m(t);
        if (arguments.length < 2) {
          var i = this.node();
          return n.local
            ? i.getAttributeNS(n.space, n.local)
            : i.getAttribute(n);
        }
        return this.each(
          (null == e
            ? n.local
              ? function(t) {
                  return function() {
                    this.removeAttributeNS(t.space, t.local);
                  };
                }
              : function(t) {
                  return function() {
                    this.removeAttribute(t);
                  };
                }
            : "function" == typeof e
              ? n.local
                ? function(t, e) {
                    return function() {
                      var n = e.apply(this, arguments);
                      null == n
                        ? this.removeAttributeNS(t.space, t.local)
                        : this.setAttributeNS(t.space, t.local, n);
                    };
                  }
                : function(t, e) {
                    return function() {
                      var n = e.apply(this, arguments);
                      null == n
                        ? this.removeAttribute(t)
                        : this.setAttribute(t, n);
                    };
                  }
              : n.local
                ? function(t, e) {
                    return function() {
                      this.setAttributeNS(t.space, t.local, e);
                    };
                  }
                : function(t, e) {
                    return function() {
                      this.setAttribute(t, e);
                    };
                  })(n, e)
        );
      },
      style: function(t, e, n) {
        return arguments.length > 1
          ? this.each(
              (null == e
                ? function(t) {
                    return function() {
                      this.style.removeProperty(t);
                    };
                  }
                : "function" == typeof e
                  ? function(t, e, n) {
                      return function() {
                        var i = e.apply(this, arguments);
                        null == i
                          ? this.style.removeProperty(t)
                          : this.style.setProperty(t, i, n);
                      };
                    }
                  : function(t, e, n) {
                      return function() {
                        this.style.setProperty(t, e, n);
                      };
                    })(t, e, null == n ? "" : n)
            )
          : Y(this.node(), t);
      },
      property: function(t, e) {
        return arguments.length > 1
          ? this.each(
              (null == e
                ? function(t) {
                    return function() {
                      delete this[t];
                    };
                  }
                : "function" == typeof e
                  ? function(t, e) {
                      return function() {
                        var n = e.apply(this, arguments);
                        null == n ? delete this[t] : (this[t] = n);
                      };
                    }
                  : function(t, e) {
                      return function() {
                        this[t] = e;
                      };
                    })(t, e)
            )
          : this.node()[t];
      },
      classed: function(t, e) {
        var n = O(t + "");
        if (arguments.length < 2) {
          for (var i = z(this.node()), r = -1, a = n.length; ++r < a; )
            if (!i.contains(n[r])) return !1;
          return !0;
        }
        return this.each(
          ("function" == typeof e
            ? function(t, e) {
                return function() {
                  (e.apply(this, arguments) ? $ : B)(this, t);
                };
              }
            : e
              ? function(t) {
                  return function() {
                    $(this, t);
                  };
                }
              : function(t) {
                  return function() {
                    B(this, t);
                  };
                })(n, e)
        );
      },
      text: function(t) {
        return arguments.length
          ? this.each(
              null == t
                ? H
                : ("function" == typeof t
                    ? function(t) {
                        return function() {
                          var e = t.apply(this, arguments);
                          this.textContent = null == e ? "" : e;
                        };
                      }
                    : function(t) {
                        return function() {
                          this.textContent = t;
                        };
                      })(t)
            )
          : this.node().textContent;
      },
      html: function(t) {
        return arguments.length
          ? this.each(
              null == t
                ? I
                : ("function" == typeof t
                    ? function(t) {
                        return function() {
                          var e = t.apply(this, arguments);
                          this.innerHTML = null == e ? "" : e;
                        };
                      }
                    : function(t) {
                        return function() {
                          this.innerHTML = t;
                        };
                      })(t)
            )
          : this.node().innerHTML;
      },
      raise: function() {
        return this.each(V);
      },
      lower: function() {
        return this.each(X);
      },
      append: function(t) {
        var e = "function" == typeof t ? t : w(t);
        return this.select(function() {
          return this.appendChild(e.apply(this, arguments));
        });
      },
      insert: function(t, e) {
        var n = "function" == typeof t ? t : w(t),
          i = null == e ? Z : "function" == typeof e ? e : A(e);
        return this.select(function() {
          return this.insertBefore(
            n.apply(this, arguments),
            i.apply(this, arguments) || null
          );
        });
      },
      remove: function() {
        return this.each(W);
      },
      clone: function(t) {
        return this.select(t ? J : Q);
      },
      datum: function(t) {
        return arguments.length
          ? this.property("__data__", t)
          : this.node().__data__;
      },
      on: function(t, e, n) {
        var i,
          r,
          a = (function(t) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function(t) {
                var e = "",
                  n = t.indexOf(".");
                return (
                  n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                  { type: t, name: e }
                );
              });
          })(t + ""),
          o = a.length;
        if (!(arguments.length < 2)) {
          for (c = e ? it : nt, null == n && (n = !1), i = 0; i < o; ++i)
            this.each(c(a[i], e, n));
          return this;
        }
        var c = this.node().__on;
        if (c)
          for (var f, s = 0, u = c.length; s < u; ++s)
            for (i = 0, f = c[s]; i < o; ++i)
              if ((r = a[i]).type === f.type && r.name === f.name)
                return f.value;
      },
      dispatch: function(t, e) {
        return this.each(
          ("function" == typeof e
            ? function(t, e) {
                return function() {
                  return rt(this, t, e.apply(this, arguments));
                };
              }
            : function(t, e) {
                return function() {
                  return rt(this, t, e);
                };
              })(t, e)
        );
      }
    };
    var ft = ct,
      st = function(t) {
        return "string" == typeof t
          ? new ot([[document.querySelector(t)]], [document.documentElement])
          : new ot([[t]], at);
      },
      ut = 0;
    function ht() {
      this._ = "@" + (++ut).toString(36);
    }
    ht.prototype = function() {
      return new ht();
    }.prototype = {
      constructor: ht,
      get: function(t) {
        for (var e = this._; !(e in t); ) if (!(t = t.parentNode)) return;
        return t[e];
      },
      set: function(t, e) {
        return (t[this._] = e);
      },
      remove: function(t) {
        return this._ in t && delete t[this._];
      },
      toString: function() {
        return this._;
      }
    };
    function lt(t, e, n, i, r, a, o, c, f, s) {
      (this.target = t),
        (this.type = e),
        (this.subject = n),
        (this.identifier = i),
        (this.active = r),
        (this.x = a),
        (this.y = o),
        (this.dx = c),
        (this.dy = f),
        (this._ = s);
    }
    lt.prototype.on = function() {
      var t = this._.on.apply(this._, arguments);
      return t === this._ ? this : t;
    };
    var dt = function(t, e, n) {
      (t.prototype = e.prototype = n), (n.constructor = t);
    };
    function _t(t, e) {
      var n = Object.create(t.prototype);
      for (var i in e) n[i] = e[i];
      return n;
    }
    function pt() {}
    var bt = "\\s*([+-]?\\d+)\\s*",
      vt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      yt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      gt = /^#([0-9a-f]{3})$/,
      xt = /^#([0-9a-f]{6})$/,
      mt = new RegExp("^rgb\\(" + [bt, bt, bt] + "\\)$"),
      wt = new RegExp("^rgb\\(" + [yt, yt, yt] + "\\)$"),
      Mt = new RegExp("^rgba\\(" + [bt, bt, bt, vt] + "\\)$"),
      At = new RegExp("^rgba\\(" + [yt, yt, yt, vt] + "\\)$"),
      kt = new RegExp("^hsl\\(" + [vt, yt, yt] + "\\)$"),
      Tt = new RegExp("^hsla\\(" + [vt, yt, yt, vt] + "\\)$"),
      Nt = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };
    function Ct(t) {
      var e;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = gt.exec(t))
          ? new Ut(
              (((e = parseInt(e[1], 16)) >> 8) & 15) | ((e >> 4) & 240),
              ((e >> 4) & 15) | (240 & e),
              ((15 & e) << 4) | (15 & e),
              1
            )
          : (e = xt.exec(t))
            ? St(parseInt(e[1], 16))
            : (e = mt.exec(t))
              ? new Ut(e[1], e[2], e[3], 1)
              : (e = wt.exec(t))
                ? new Ut(
                    (255 * e[1]) / 100,
                    (255 * e[2]) / 100,
                    (255 * e[3]) / 100,
                    1
                  )
                : (e = Mt.exec(t))
                  ? Et(e[1], e[2], e[3], e[4])
                  : (e = At.exec(t))
                    ? Et(
                        (255 * e[1]) / 100,
                        (255 * e[2]) / 100,
                        (255 * e[3]) / 100,
                        e[4]
                      )
                    : (e = kt.exec(t))
                      ? qt(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = Tt.exec(t))
                        ? qt(e[1], e[2] / 100, e[3] / 100, e[4])
                        : Nt.hasOwnProperty(t)
                          ? St(Nt[t])
                          : "transparent" === t
                            ? new Ut(NaN, NaN, NaN, 0)
                            : null
      );
    }
    function St(t) {
      return new Ut((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function Et(t, e, n, i) {
      return i <= 0 && (t = e = n = NaN), new Ut(t, e, n, i);
    }
    function Lt(t) {
      return (
        t instanceof pt || (t = Ct(t)),
        t ? new Ut((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ut()
      );
    }
    function Pt(t, e, n, i) {
      return 1 === arguments.length
        ? Lt(t)
        : new Ut(t, e, n, null == i ? 1 : i);
    }
    function Ut(t, e, n, i) {
      (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +i);
    }
    function Rt(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
        t.toString(16)
      );
    }
    function qt(t, e, n, i) {
      return (
        i <= 0
          ? (t = e = n = NaN)
          : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
        new Ft(t, e, n, i)
      );
    }
    function Dt(t, e, n, i) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof Ft) return new Ft(t.h, t.s, t.l, t.opacity);
            if ((t instanceof pt || (t = Ct(t)), !t)) return new Ft();
            if (t instanceof Ft) return t;
            var e = (t = t.rgb()).r / 255,
              n = t.g / 255,
              i = t.b / 255,
              r = Math.min(e, n, i),
              a = Math.max(e, n, i),
              o = NaN,
              c = a - r,
              f = (a + r) / 2;
            return (
              c
                ? ((o =
                    e === a
                      ? (n - i) / c + 6 * (n < i)
                      : n === a
                        ? (i - e) / c + 2
                        : (e - n) / c + 4),
                  (c /= f < 0.5 ? a + r : 2 - a - r),
                  (o *= 60))
                : (c = f > 0 && f < 1 ? 0 : o),
              new Ft(o, c, f, t.opacity)
            );
          })(t)
        : new Ft(t, e, n, null == i ? 1 : i);
    }
    function Ft(t, e, n, i) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +i);
    }
    function Yt(t, e, n) {
      return (
        255 *
        (t < 60
          ? e + ((n - e) * t) / 60
          : t < 180
            ? n
            : t < 240
              ? e + ((n - e) * (240 - t)) / 60
              : e)
      );
    }
    dt(pt, Ct, {
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: function() {
        return this.rgb().hex();
      },
      toString: function() {
        return this.rgb() + "";
      }
    }),
      dt(
        Ut,
        Pt,
        _t(pt, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new Ut(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new Ut(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function() {
            return this;
          },
          displayable: function() {
            return (
              0 <= this.r &&
              this.r <= 255 &&
              0 <= this.g &&
              this.g <= 255 &&
              0 <= this.b &&
              this.b <= 255 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: function() {
            return "#" + Rt(this.r) + Rt(this.g) + Rt(this.b);
          },
          toString: function() {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? "rgb("
                : "rgba(") +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === t ? ")" : ", " + t + ")")
            );
          }
        })
      ),
      dt(
        Ft,
        Dt,
        _t(pt, {
          brighter: function(t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new Ft(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new Ft(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function() {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              i = n + (n < 0.5 ? n : 1 - n) * e,
              r = 2 * n - i;
            return new Ut(
              Yt(t >= 240 ? t - 240 : t + 120, r, i),
              Yt(t, r, i),
              Yt(t < 120 ? t + 240 : t - 120, r, i),
              this.opacity
            );
          },
          displayable: function() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          }
        })
      );
    var Ot = Math.PI / 180,
      zt = 180 / Math.PI,
      jt = 0.96422,
      $t = 1,
      Bt = 0.82521,
      Ht = 4 / 29,
      It = 6 / 29,
      Vt = 3 * It * It,
      Xt = It * It * It;
    function Zt(t) {
      if (t instanceof Qt) return new Qt(t.l, t.a, t.b, t.opacity);
      if (t instanceof ie) {
        if (isNaN(t.h)) return new Qt(t.l, 0, 0, t.opacity);
        var e = t.h * Ot;
        return new Qt(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
      }
      t instanceof Ut || (t = Lt(t));
      var n,
        i,
        r = te(t.r),
        a = te(t.g),
        o = te(t.b),
        c = Jt((0.2225045 * r + 0.7168786 * a + 0.0606169 * o) / $t);
      return (
        r === a && a === o
          ? (n = i = c)
          : ((n = Jt((0.4360747 * r + 0.3850649 * a + 0.1430804 * o) / jt)),
            (i = Jt((0.0139322 * r + 0.0971045 * a + 0.7141733 * o) / Bt))),
        new Qt(116 * c - 16, 500 * (n - c), 200 * (c - i), t.opacity)
      );
    }
    function Wt(t, e, n, i) {
      return 1 === arguments.length
        ? Zt(t)
        : new Qt(t, e, n, null == i ? 1 : i);
    }
    function Qt(t, e, n, i) {
      (this.l = +t), (this.a = +e), (this.b = +n), (this.opacity = +i);
    }
    function Jt(t) {
      return t > Xt ? Math.pow(t, 1 / 3) : t / Vt + Ht;
    }
    function Gt(t) {
      return t > It ? t * t * t : Vt * (t - Ht);
    }
    function Kt(t) {
      return (
        255 *
        (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
      );
    }
    function te(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function ee(t) {
      if (t instanceof ie) return new ie(t.h, t.c, t.l, t.opacity);
      if ((t instanceof Qt || (t = Zt(t)), 0 === t.a && 0 === t.b))
        return new ie(NaN, 0, t.l, t.opacity);
      var e = Math.atan2(t.b, t.a) * zt;
      return new ie(
        e < 0 ? e + 360 : e,
        Math.sqrt(t.a * t.a + t.b * t.b),
        t.l,
        t.opacity
      );
    }
    function ne(t, e, n, i) {
      return 1 === arguments.length
        ? ee(t)
        : new ie(t, e, n, null == i ? 1 : i);
    }
    function ie(t, e, n, i) {
      (this.h = +t), (this.c = +e), (this.l = +n), (this.opacity = +i);
    }
    dt(
      Qt,
      Wt,
      _t(pt, {
        brighter: function(t) {
          return new Qt(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function(t) {
          return new Qt(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function() {
          var t = (this.l + 16) / 116,
            e = isNaN(this.a) ? t : t + this.a / 500,
            n = isNaN(this.b) ? t : t - this.b / 200;
          return new Ut(
            Kt(
              3.1338561 * (e = jt * Gt(e)) -
                1.6168667 * (t = $t * Gt(t)) -
                0.4906146 * (n = Bt * Gt(n))
            ),
            Kt(-0.9787684 * e + 1.9161415 * t + 0.033454 * n),
            Kt(0.0719453 * e - 0.2289914 * t + 1.4052427 * n),
            this.opacity
          );
        }
      })
    ),
      dt(
        ie,
        ne,
        _t(pt, {
          brighter: function(t) {
            return new ie(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          darker: function(t) {
            return new ie(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          rgb: function() {
            return Zt(this).rgb();
          }
        })
      );
    var re = -0.29227,
      ae = -0.90649,
      oe = 1.97294,
      ce = oe * ae,
      fe = 1.78277 * oe,
      se = 1.78277 * re - -0.14861 * ae;
    function ue(t, e, n, i) {
      return 1 === arguments.length
        ? (function(t) {
            if (t instanceof he) return new he(t.h, t.s, t.l, t.opacity);
            t instanceof Ut || (t = Lt(t));
            var e = t.r / 255,
              n = t.g / 255,
              i = t.b / 255,
              r = (se * i + ce * e - fe * n) / (se + ce - fe),
              a = i - r,
              o = (oe * (n - r) - re * a) / ae,
              c = Math.sqrt(o * o + a * a) / (oe * r * (1 - r)),
              f = c ? Math.atan2(o, a) * zt - 120 : NaN;
            return new he(f < 0 ? f + 360 : f, c, r, t.opacity);
          })(t)
        : new he(t, e, n, null == i ? 1 : i);
    }
    function he(t, e, n, i) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +i);
    }
    function le(t, e, n, i, r) {
      var a = t * t,
        o = a * t;
      return (
        ((1 - 3 * t + 3 * a - o) * e +
          (4 - 6 * a + 3 * o) * n +
          (1 + 3 * t + 3 * a - 3 * o) * i +
          o * r) /
        6
      );
    }
    dt(
      he,
      ue,
      _t(pt, {
        brighter: function(t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new he(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function(t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new he(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function() {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * Ot,
            e = +this.l,
            n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
            i = Math.cos(t),
            r = Math.sin(t);
          return new Ut(
            255 * (e + n * (-0.14861 * i + 1.78277 * r)),
            255 * (e + n * (re * i + ae * r)),
            255 * (e + n * (oe * i)),
            this.opacity
          );
        }
      })
    );
    var de = function(t) {
      return function() {
        return t;
      };
    };
    function _e(t, e) {
      return function(n) {
        return t + n * e;
      };
    }
    function pe(t, e) {
      var n = e - t;
      return n
        ? _e(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
        : de(isNaN(t) ? e : t);
    }
    function be(t) {
      return 1 == (t = +t)
        ? ve
        : function(e, n) {
            return n - e
              ? (function(t, e, n) {
                  return (
                    (t = Math.pow(t, n)),
                    (e = Math.pow(e, n) - t),
                    (n = 1 / n),
                    function(i) {
                      return Math.pow(t + i * e, n);
                    }
                  );
                })(e, n, t)
              : de(isNaN(e) ? n : e);
          };
    }
    function ve(t, e) {
      var n = e - t;
      return n ? _e(t, n) : de(isNaN(t) ? e : t);
    }
    var ye = (function t(e) {
      var n = be(e);
      function i(t, e) {
        var i = n((t = Pt(t)).r, (e = Pt(e)).r),
          r = n(t.g, e.g),
          a = n(t.b, e.b),
          o = ve(t.opacity, e.opacity);
        return function(e) {
          return (
            (t.r = i(e)), (t.g = r(e)), (t.b = a(e)), (t.opacity = o(e)), t + ""
          );
        };
      }
      return (i.gamma = t), i;
    })(1);
    function ge(t) {
      return function(e) {
        var n,
          i,
          r = e.length,
          a = new Array(r),
          o = new Array(r),
          c = new Array(r);
        for (n = 0; n < r; ++n)
          (i = Pt(e[n])),
            (a[n] = i.r || 0),
            (o[n] = i.g || 0),
            (c[n] = i.b || 0);
        return (
          (a = t(a)),
          (o = t(o)),
          (c = t(c)),
          (i.opacity = 1),
          function(t) {
            return (i.r = a(t)), (i.g = o(t)), (i.b = c(t)), i + "";
          }
        );
      };
    }
    var xe = ge(function(t) {
        var e = t.length - 1;
        return function(n) {
          var i =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            r = t[i],
            a = t[i + 1],
            o = i > 0 ? t[i - 1] : 2 * r - a,
            c = i < e - 1 ? t[i + 2] : 2 * a - r;
          return le((n - i / e) * e, o, r, a, c);
        };
      }),
      me = (ge(function(t) {
        var e = t.length;
        return function(n) {
          var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
            r = t[(i + e - 1) % e],
            a = t[i % e],
            o = t[(i + 1) % e],
            c = t[(i + 2) % e];
          return le((n - i / e) * e, r, a, o, c);
        };
      }),
      function(t, e) {
        return (
          (e -= t = +t),
          function(n) {
            return t + e * n;
          }
        );
      }),
      we = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Me = new RegExp(we.source, "g");
    var Ae,
      ke,
      Te,
      Ne,
      Ce = function(t, e) {
        var n,
          i,
          r,
          a = (we.lastIndex = Me.lastIndex = 0),
          o = -1,
          c = [],
          f = [];
        for (t += "", e += ""; (n = we.exec(t)) && (i = Me.exec(e)); )
          (r = i.index) > a &&
            ((r = e.slice(a, r)), c[o] ? (c[o] += r) : (c[++o] = r)),
            (n = n[0]) === (i = i[0])
              ? c[o]
                ? (c[o] += i)
                : (c[++o] = i)
              : ((c[++o] = null), f.push({ i: o, x: me(n, i) })),
            (a = Me.lastIndex);
        return (
          a < e.length && ((r = e.slice(a)), c[o] ? (c[o] += r) : (c[++o] = r)),
          c.length < 2
            ? f[0]
              ? (function(t) {
                  return function(e) {
                    return t(e) + "";
                  };
                })(f[0].x)
              : (function(t) {
                  return function() {
                    return t;
                  };
                })(e)
            : ((e = f.length),
              function(t) {
                for (var n, i = 0; i < e; ++i) c[(n = f[i]).i] = n.x(t);
                return c.join("");
              })
        );
      },
      Se = 180 / Math.PI,
      Ee = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      },
      Le = function(t, e, n, i, r, a) {
        var o, c, f;
        return (
          (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
          (f = t * n + e * i) && ((n -= t * f), (i -= e * f)),
          (c = Math.sqrt(n * n + i * i)) && ((n /= c), (i /= c), (f /= c)),
          t * i < e * n && ((t = -t), (e = -e), (f = -f), (o = -o)),
          {
            translateX: r,
            translateY: a,
            rotate: Math.atan2(e, t) * Se,
            skewX: Math.atan(f) * Se,
            scaleX: o,
            scaleY: c
          }
        );
      };
    function Pe(t, e, n, i) {
      function r(t) {
        return t.length ? t.pop() + " " : "";
      }
      return function(a, o) {
        var c = [],
          f = [];
        return (
          (a = t(a)),
          (o = t(o)),
          (function(t, i, r, a, o, c) {
            if (t !== r || i !== a) {
              var f = o.push("translate(", null, e, null, n);
              c.push({ i: f - 4, x: me(t, r) }, { i: f - 2, x: me(i, a) });
            } else (r || a) && o.push("translate(" + r + e + a + n);
          })(a.translateX, a.translateY, o.translateX, o.translateY, c, f),
          (function(t, e, n, a) {
            t !== e
              ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                a.push({
                  i: n.push(r(n) + "rotate(", null, i) - 2,
                  x: me(t, e)
                }))
              : e && n.push(r(n) + "rotate(" + e + i);
          })(a.rotate, o.rotate, c, f),
          (function(t, e, n, a) {
            t !== e
              ? a.push({ i: n.push(r(n) + "skewX(", null, i) - 2, x: me(t, e) })
              : e && n.push(r(n) + "skewX(" + e + i);
          })(a.skewX, o.skewX, c, f),
          (function(t, e, n, i, a, o) {
            if (t !== n || e !== i) {
              var c = a.push(r(a) + "scale(", null, ",", null, ")");
              o.push({ i: c - 4, x: me(t, n) }, { i: c - 2, x: me(e, i) });
            } else
              (1 === n && 1 === i) ||
                a.push(r(a) + "scale(" + n + "," + i + ")");
          })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, c, f),
          (a = o = null),
          function(t) {
            for (var e, n = -1, i = f.length; ++n < i; )
              c[(e = f[n]).i] = e.x(t);
            return c.join("");
          }
        );
      };
    }
    var Ue = Pe(
        function(t) {
          return "none" === t
            ? Ee
            : (Ae ||
                ((Ae = document.createElement("DIV")),
                (ke = document.documentElement),
                (Te = document.defaultView)),
              (Ae.style.transform = t),
              (t = Te.getComputedStyle(
                ke.appendChild(Ae),
                null
              ).getPropertyValue("transform")),
              ke.removeChild(Ae),
              (t = t.slice(7, -1).split(",")),
              Le(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
        },
        "px, ",
        "px)",
        "deg)"
      ),
      Re = Pe(
        function(t) {
          return null == t
            ? Ee
            : (Ne ||
                (Ne = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )),
              Ne.setAttribute("transform", t),
              (t = Ne.transform.baseVal.consolidate())
                ? ((t = t.matrix), Le(t.a, t.b, t.c, t.d, t.e, t.f))
                : Ee);
        },
        ", ",
        ")",
        ")"
      );
    Math.SQRT2;
    function qe(t) {
      return function(e, n) {
        var i = t((e = Dt(e)).h, (n = Dt(n)).h),
          r = ve(e.s, n.s),
          a = ve(e.l, n.l),
          o = ve(e.opacity, n.opacity);
        return function(t) {
          return (
            (e.h = i(t)), (e.s = r(t)), (e.l = a(t)), (e.opacity = o(t)), e + ""
          );
        };
      };
    }
    qe(pe), qe(ve);
    function De(t) {
      return function(e, n) {
        var i = t((e = ne(e)).h, (n = ne(n)).h),
          r = ve(e.c, n.c),
          a = ve(e.l, n.l),
          o = ve(e.opacity, n.opacity);
        return function(t) {
          return (
            (e.h = i(t)), (e.c = r(t)), (e.l = a(t)), (e.opacity = o(t)), e + ""
          );
        };
      };
    }
    De(pe), De(ve);
    function Fe(t) {
      return (function e(n) {
        function i(e, i) {
          var r = t((e = ue(e)).h, (i = ue(i)).h),
            a = ve(e.s, i.s),
            o = ve(e.l, i.l),
            c = ve(e.opacity, i.opacity);
          return function(t) {
            return (
              (e.h = r(t)),
              (e.s = a(t)),
              (e.l = o(Math.pow(t, n))),
              (e.opacity = c(t)),
              e + ""
            );
          };
        }
        return (n = +n), (i.gamma = e), i;
      })(1);
    }
    Fe(pe);
    var Ye = Fe(ve);
    var Oe,
      ze,
      je = 0,
      $e = 0,
      Be = 0,
      He = 1e3,
      Ie = 0,
      Ve = 0,
      Xe = 0,
      Ze =
        "object" == typeof performance && performance.now ? performance : Date,
      We =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function(t) {
              setTimeout(t, 17);
            };
    function Qe() {
      return Ve || (We(Je), (Ve = Ze.now() + Xe));
    }
    function Je() {
      Ve = 0;
    }
    function Ge() {
      this._call = this._time = this._next = null;
    }
    function Ke(t, e, n) {
      var i = new Ge();
      return i.restart(t, e, n), i;
    }
    function tn() {
      (Ve = (Ie = Ze.now()) + Xe), (je = $e = 0);
      try {
        !(function() {
          Qe(), ++je;
          for (var t, e = Oe; e; )
            (t = Ve - e._time) >= 0 && e._call.call(null, t), (e = e._next);
          --je;
        })();
      } finally {
        (je = 0),
          (function() {
            var t,
              e,
              n = Oe,
              i = 1 / 0;
            for (; n; )
              n._call
                ? (i > n._time && (i = n._time), (t = n), (n = n._next))
                : ((e = n._next),
                  (n._next = null),
                  (n = t ? (t._next = e) : (Oe = e)));
            (ze = t), nn(i);
          })(),
          (Ve = 0);
      }
    }
    function en() {
      var t = Ze.now(),
        e = t - Ie;
      e > He && ((Xe -= e), (Ie = t));
    }
    function nn(t) {
      je ||
        ($e && ($e = clearTimeout($e)),
        t - Ve > 24
          ? (t < 1 / 0 && ($e = setTimeout(tn, t - Ze.now() - Xe)),
            Be && (Be = clearInterval(Be)))
          : (Be || ((Ie = Ze.now()), (Be = setInterval(en, He))),
            (je = 1),
            We(tn)));
    }
    Ge.prototype = Ke.prototype = {
      constructor: Ge,
      restart: function(t, e, n) {
        if ("function" != typeof t)
          throw new TypeError("callback is not a function");
        (n = (null == n ? Qe() : +n) + (null == e ? 0 : +e)),
          this._next ||
            ze === this ||
            (ze ? (ze._next = this) : (Oe = this), (ze = this)),
          (this._call = t),
          (this._time = n),
          nn();
      },
      stop: function() {
        this._call && ((this._call = null), (this._time = 1 / 0), nn());
      }
    };
    var rn = function(t, e, n) {
        var i = new Ge();
        return (
          (e = null == e ? 0 : +e),
          i.restart(
            function(n) {
              i.stop(), t(n + e);
            },
            e,
            n
          ),
          i
        );
      },
      an = y("start", "end", "interrupt"),
      on = [],
      cn = 0,
      fn = 1,
      sn = 2,
      un = 3,
      hn = 4,
      ln = 5,
      dn = 6,
      _n = function(t, e, n, i, r, a) {
        var o = t.__transition;
        if (o) {
          if (n in o) return;
        } else t.__transition = {};
        !(function(t, e, n) {
          var i,
            r = t.__transition;
          function a(f) {
            var s, u, h, l;
            if (n.state !== fn) return c();
            for (s in r)
              if ((l = r[s]).name === n.name) {
                if (l.state === un) return rn(a);
                l.state === hn
                  ? ((l.state = dn),
                    l.timer.stop(),
                    l.on.call("interrupt", t, t.__data__, l.index, l.group),
                    delete r[s])
                  : +s < e && ((l.state = dn), l.timer.stop(), delete r[s]);
              }
            if (
              (rn(function() {
                n.state === un &&
                  ((n.state = hn), n.timer.restart(o, n.delay, n.time), o(f));
              }),
              (n.state = sn),
              n.on.call("start", t, t.__data__, n.index, n.group),
              n.state === sn)
            ) {
              for (
                n.state = un,
                  i = new Array((h = n.tween.length)),
                  s = 0,
                  u = -1;
                s < h;
                ++s
              )
                (l = n.tween[s].value.call(t, t.__data__, n.index, n.group)) &&
                  (i[++u] = l);
              i.length = u + 1;
            }
          }
          function o(e) {
            for (
              var r =
                  e < n.duration
                    ? n.ease.call(null, e / n.duration)
                    : (n.timer.restart(c), (n.state = ln), 1),
                a = -1,
                o = i.length;
              ++a < o;

            )
              i[a].call(null, r);
            n.state === ln &&
              (n.on.call("end", t, t.__data__, n.index, n.group), c());
          }
          function c() {
            for (var i in ((n.state = dn), n.timer.stop(), delete r[e], r))
              return;
            delete t.__transition;
          }
          (r[e] = n),
            (n.timer = Ke(
              function(t) {
                (n.state = fn),
                  n.timer.restart(a, n.delay, n.time),
                  n.delay <= t && a(t - n.delay);
              },
              0,
              n.time
            ));
        })(t, n, {
          name: e,
          index: i,
          group: r,
          on: an,
          tween: on,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: cn
        });
      };
    function pn(t, e) {
      var n = vn(t, e);
      if (n.state > cn) throw new Error("too late; already scheduled");
      return n;
    }
    function bn(t, e) {
      var n = vn(t, e);
      if (n.state > sn) throw new Error("too late; already started");
      return n;
    }
    function vn(t, e) {
      var n = t.__transition;
      if (!n || !(n = n[e])) throw new Error("transition not found");
      return n;
    }
    var yn = function(t, e) {
      var n,
        i,
        r,
        a = t.__transition,
        o = !0;
      if (a) {
        for (r in ((e = null == e ? null : e + ""), a))
          (n = a[r]).name === e
            ? ((i = n.state > sn && n.state < ln),
              (n.state = dn),
              n.timer.stop(),
              i && n.on.call("interrupt", t, t.__data__, n.index, n.group),
              delete a[r])
            : (o = !1);
        o && delete t.__transition;
      }
    };
    function gn(t, e, n) {
      var i = t._id;
      return (
        t.each(function() {
          var t = bn(this, i);
          (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }),
        function(t) {
          return vn(t, i).value[e];
        }
      );
    }
    var xn = function(t, e) {
      var n;
      return ("number" == typeof e
        ? me
        : e instanceof Ct
          ? ye
          : (n = Ct(e))
            ? ((e = n), ye)
            : Ce)(t, e);
    };
    var mn = ft.prototype.constructor;
    var wn = 0;
    function Mn(t, e, n, i) {
      (this._groups = t), (this._parents = e), (this._name = n), (this._id = i);
    }
    function An() {
      return ++wn;
    }
    var kn = ft.prototype;
    Mn.prototype = function(t) {
      return ft().transition(t);
    }.prototype = {
      constructor: Mn,
      select: function(t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = A(t));
        for (
          var i = this._groups, r = i.length, a = new Array(r), o = 0;
          o < r;
          ++o
        )
          for (
            var c, f, s = i[o], u = s.length, h = (a[o] = new Array(u)), l = 0;
            l < u;
            ++l
          )
            (c = s[l]) &&
              (f = t.call(c, c.__data__, l, s)) &&
              ("__data__" in c && (f.__data__ = c.__data__),
              (h[l] = f),
              _n(h[l], e, n, l, h, vn(c, n)));
        return new Mn(a, this._parents, e, n);
      },
      selectAll: function(t) {
        var e = this._name,
          n = this._id;
        "function" != typeof t && (t = T(t));
        for (
          var i = this._groups, r = i.length, a = [], o = [], c = 0;
          c < r;
          ++c
        )
          for (var f, s = i[c], u = s.length, h = 0; h < u; ++h)
            if ((f = s[h])) {
              for (
                var l,
                  d = t.call(f, f.__data__, h, s),
                  _ = vn(f, n),
                  p = 0,
                  b = d.length;
                p < b;
                ++p
              )
                (l = d[p]) && _n(l, e, n, p, d, _);
              a.push(d), o.push(f);
            }
        return new Mn(a, o, e, n);
      },
      filter: function(t) {
        "function" != typeof t && (t = E(t));
        for (
          var e = this._groups, n = e.length, i = new Array(n), r = 0;
          r < n;
          ++r
        )
          for (
            var a, o = e[r], c = o.length, f = (i[r] = []), s = 0;
            s < c;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && f.push(a);
        return new Mn(i, this._parents, this._name, this._id);
      },
      merge: function(t) {
        if (t._id !== this._id) throw new Error();
        for (
          var e = this._groups,
            n = t._groups,
            i = e.length,
            r = n.length,
            a = Math.min(i, r),
            o = new Array(i),
            c = 0;
          c < a;
          ++c
        )
          for (
            var f,
              s = e[c],
              u = n[c],
              h = s.length,
              l = (o[c] = new Array(h)),
              d = 0;
            d < h;
            ++d
          )
            (f = s[d] || u[d]) && (l[d] = f);
        for (; c < i; ++c) o[c] = e[c];
        return new Mn(o, this._parents, this._name, this._id);
      },
      selection: function() {
        return new mn(this._groups, this._parents);
      },
      transition: function() {
        for (
          var t = this._name,
            e = this._id,
            n = An(),
            i = this._groups,
            r = i.length,
            a = 0;
          a < r;
          ++a
        )
          for (var o, c = i[a], f = c.length, s = 0; s < f; ++s)
            if ((o = c[s])) {
              var u = vn(o, e);
              _n(o, t, n, s, c, {
                time: u.time + u.delay + u.duration,
                delay: 0,
                duration: u.duration,
                ease: u.ease
              });
            }
        return new Mn(i, this._parents, t, n);
      },
      call: kn.call,
      nodes: kn.nodes,
      node: kn.node,
      size: kn.size,
      empty: kn.empty,
      each: kn.each,
      on: function(t, e) {
        var n = this._id;
        return arguments.length < 2
          ? vn(this.node(), n).on.on(t)
          : this.each(
              (function(t, e, n) {
                var i,
                  r,
                  a = (function(t) {
                    return (t + "")
                      .trim()
                      .split(/^|\s+/)
                      .every(function(t) {
                        var e = t.indexOf(".");
                        return (
                          e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                        );
                      });
                  })(e)
                    ? pn
                    : bn;
                return function() {
                  var o = a(this, t),
                    c = o.on;
                  c !== i && (r = (i = c).copy()).on(e, n), (o.on = r);
                };
              })(n, t, e)
            );
      },
      attr: function(t, e) {
        var n = m(t),
          i = "transform" === n ? Re : xn;
        return this.attrTween(
          t,
          "function" == typeof e
            ? (n.local
                ? function(t, e, n) {
                    var i, r, a;
                    return function() {
                      var o,
                        c = n(this);
                      if (null != c)
                        return (o = this.getAttributeNS(t.space, t.local)) === c
                          ? null
                          : o === i && c === r
                            ? a
                            : (a = e((i = o), (r = c)));
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function(t, e, n) {
                    var i, r, a;
                    return function() {
                      var o,
                        c = n(this);
                      if (null != c)
                        return (o = this.getAttribute(t)) === c
                          ? null
                          : o === i && c === r
                            ? a
                            : (a = e((i = o), (r = c)));
                      this.removeAttribute(t);
                    };
                  })(n, i, gn(this, "attr." + t, e))
            : null == e
              ? (n.local
                  ? function(t) {
                      return function() {
                        this.removeAttributeNS(t.space, t.local);
                      };
                    }
                  : function(t) {
                      return function() {
                        this.removeAttribute(t);
                      };
                    })(n)
              : (n.local
                  ? function(t, e, n) {
                      var i, r;
                      return function() {
                        var a = this.getAttributeNS(t.space, t.local);
                        return a === n
                          ? null
                          : a === i
                            ? r
                            : (r = e((i = a), n));
                      };
                    }
                  : function(t, e, n) {
                      var i, r;
                      return function() {
                        var a = this.getAttribute(t);
                        return a === n
                          ? null
                          : a === i
                            ? r
                            : (r = e((i = a), n));
                      };
                    })(n, i, e + "")
        );
      },
      attrTween: function(t, e) {
        var n = "attr." + t;
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" != typeof e) throw new Error();
        var i = m(t);
        return this.tween(
          n,
          (i.local
            ? function(t, e) {
                function n() {
                  var n = this,
                    i = e.apply(n, arguments);
                  return (
                    i &&
                    function(e) {
                      n.setAttributeNS(t.space, t.local, i(e));
                    }
                  );
                }
                return (n._value = e), n;
              }
            : function(t, e) {
                function n() {
                  var n = this,
                    i = e.apply(n, arguments);
                  return (
                    i &&
                    function(e) {
                      n.setAttribute(t, i(e));
                    }
                  );
                }
                return (n._value = e), n;
              })(i, e)
        );
      },
      style: function(t, e, n) {
        var i = "transform" == (t += "") ? Ue : xn;
        return null == e
          ? this.styleTween(
              t,
              (function(t, e) {
                var n, i, r;
                return function() {
                  var a = Y(this, t),
                    o = (this.style.removeProperty(t), Y(this, t));
                  return a === o
                    ? null
                    : a === n && o === i
                      ? r
                      : (r = e((n = a), (i = o)));
                };
              })(t, i)
            ).on(
              "end.style." + t,
              (function(t) {
                return function() {
                  this.style.removeProperty(t);
                };
              })(t)
            )
          : this.styleTween(
              t,
              "function" == typeof e
                ? (function(t, e, n) {
                    var i, r, a;
                    return function() {
                      var o = Y(this, t),
                        c = n(this);
                      return (
                        null == c &&
                          (this.style.removeProperty(t), (c = Y(this, t))),
                        o === c
                          ? null
                          : o === i && c === r
                            ? a
                            : (a = e((i = o), (r = c)))
                      );
                    };
                  })(t, i, gn(this, "style." + t, e))
                : (function(t, e, n) {
                    var i, r;
                    return function() {
                      var a = Y(this, t);
                      return a === n ? null : a === i ? r : (r = e((i = a), n));
                    };
                  })(t, i, e + ""),
              n
            );
      },
      styleTween: function(t, e, n) {
        var i = "style." + (t += "");
        if (arguments.length < 2) return (i = this.tween(i)) && i._value;
        if (null == e) return this.tween(i, null);
        if ("function" != typeof e) throw new Error();
        return this.tween(
          i,
          (function(t, e, n) {
            function i() {
              var i = this,
                r = e.apply(i, arguments);
              return (
                r &&
                function(e) {
                  i.style.setProperty(t, r(e), n);
                }
              );
            }
            return (i._value = e), i;
          })(t, e, null == n ? "" : n)
        );
      },
      text: function(t) {
        return this.tween(
          "text",
          "function" == typeof t
            ? (function(t) {
                return function() {
                  var e = t(this);
                  this.textContent = null == e ? "" : e;
                };
              })(gn(this, "text", t))
            : (function(t) {
                return function() {
                  this.textContent = t;
                };
              })(null == t ? "" : t + "")
        );
      },
      remove: function() {
        return this.on(
          "end.remove",
          (function(t) {
            return function() {
              var e = this.parentNode;
              for (var n in this.__transition) if (+n !== t) return;
              e && e.removeChild(this);
            };
          })(this._id)
        );
      },
      tween: function(t, e) {
        var n = this._id;
        if (((t += ""), arguments.length < 2)) {
          for (
            var i, r = vn(this.node(), n).tween, a = 0, o = r.length;
            a < o;
            ++a
          )
            if ((i = r[a]).name === t) return i.value;
          return null;
        }
        return this.each(
          (null == e
            ? function(t, e) {
                var n, i;
                return function() {
                  var r = bn(this, t),
                    a = r.tween;
                  if (a !== n)
                    for (var o = 0, c = (i = n = a).length; o < c; ++o)
                      if (i[o].name === e) {
                        (i = i.slice()).splice(o, 1);
                        break;
                      }
                  r.tween = i;
                };
              }
            : function(t, e, n) {
                var i, r;
                if ("function" != typeof n) throw new Error();
                return function() {
                  var a = bn(this, t),
                    o = a.tween;
                  if (o !== i) {
                    r = (i = o).slice();
                    for (
                      var c = { name: e, value: n }, f = 0, s = r.length;
                      f < s;
                      ++f
                    )
                      if (r[f].name === e) {
                        r[f] = c;
                        break;
                      }
                    f === s && r.push(c);
                  }
                  a.tween = r;
                };
              })(n, t, e)
        );
      },
      delay: function(t) {
        var e = this._id;
        return arguments.length
          ? this.each(
              ("function" == typeof t
                ? function(t, e) {
                    return function() {
                      pn(this, t).delay = +e.apply(this, arguments);
                    };
                  }
                : function(t, e) {
                    return (
                      (e = +e),
                      function() {
                        pn(this, t).delay = e;
                      }
                    );
                  })(e, t)
            )
          : vn(this.node(), e).delay;
      },
      duration: function(t) {
        var e = this._id;
        return arguments.length
          ? this.each(
              ("function" == typeof t
                ? function(t, e) {
                    return function() {
                      bn(this, t).duration = +e.apply(this, arguments);
                    };
                  }
                : function(t, e) {
                    return (
                      (e = +e),
                      function() {
                        bn(this, t).duration = e;
                      }
                    );
                  })(e, t)
            )
          : vn(this.node(), e).duration;
      },
      ease: function(t) {
        var e = this._id;
        return arguments.length
          ? this.each(
              (function(t, e) {
                if ("function" != typeof e) throw new Error();
                return function() {
                  bn(this, t).ease = e;
                };
              })(e, t)
            )
          : vn(this.node(), e).ease;
      }
    };
    (function t(e) {
      function n(t) {
        return Math.pow(t, e);
      }
      return (e = +e), (n.exponent = t), n;
    })(3),
      (function t(e) {
        function n(t) {
          return 1 - Math.pow(1 - t, e);
        }
        return (e = +e), (n.exponent = t), n;
      })(3),
      (function t(e) {
        function n(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
        }
        return (e = +e), (n.exponent = t), n;
      })(3),
      Math.PI;
    (function t(e) {
      function n(t) {
        return t * t * ((e + 1) * t - e);
      }
      return (e = +e), (n.overshoot = t), n;
    })(1.70158),
      (function t(e) {
        function n(t) {
          return --t * t * ((e + 1) * t + e) + 1;
        }
        return (e = +e), (n.overshoot = t), n;
      })(1.70158),
      (function t(e) {
        function n(t) {
          return (
            ((t *= 2) < 1
              ? t * t * ((e + 1) * t - e)
              : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
          );
        }
        return (e = +e), (n.overshoot = t), n;
      })(1.70158);
    var Tn = 2 * Math.PI,
      Nn = ((function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Tn);
        function r(t) {
          return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n);
        }
        return (
          (r.amplitude = function(e) {
            return t(e, n * Tn);
          }),
          (r.period = function(n) {
            return t(e, n);
          }),
          r
        );
      })(1, 0.3),
      (function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Tn);
        function r(t) {
          return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n);
        }
        return (
          (r.amplitude = function(e) {
            return t(e, n * Tn);
          }),
          (r.period = function(n) {
            return t(e, n);
          }),
          r
        );
      })(1, 0.3),
      (function t(e, n) {
        var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Tn);
        function r(t) {
          return (
            ((t = 2 * t - 1) < 0
              ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n)
              : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2
          );
        }
        return (
          (r.amplitude = function(e) {
            return t(e, n * Tn);
          }),
          (r.period = function(n) {
            return t(e, n);
          }),
          r
        );
      })(1, 0.3),
      {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }
      });
    function Cn(t, e) {
      for (var n; !(n = t.__transition) || !(n = n[e]); )
        if (!(t = t.parentNode)) return (Nn.time = Qe()), Nn;
      return n;
    }
    (ft.prototype.interrupt = function(t) {
      return this.each(function() {
        yn(this, t);
      });
    }),
      (ft.prototype.transition = function(t) {
        var e, n;
        t instanceof Mn
          ? ((e = t._id), (t = t._name))
          : ((e = An()),
            ((n = Nn).time = Qe()),
            (t = null == t ? null : t + ""));
        for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
          for (var o, c = i[a], f = c.length, s = 0; s < f; ++s)
            (o = c[s]) && _n(o, t, e, s, c, n || Cn(o, e));
        return new Mn(i, this._parents, t, e);
      });
    ["e", "w"].map(Sn),
      ["n", "s"].map(Sn),
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Sn);
    function Sn(t) {
      return { type: t };
    }
    Math.cos, Math.sin, Math.PI, Math.max;
    Array.prototype.slice;
    var En = Math.PI,
      Ln = 2 * En,
      Pn = Ln - 1e-6;
    function Un() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function Rn() {
      return new Un();
    }
    Un.prototype = Rn.prototype = {
      constructor: Un,
      moveTo: function(t, e) {
        this._ +=
          "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
      },
      closePath: function() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function(t, e) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
      },
      quadraticCurveTo: function(t, e, n, i) {
        this._ +=
          "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i);
      },
      bezierCurveTo: function(t, e, n, i, r, a) {
        this._ +=
          "C" +
          +t +
          "," +
          +e +
          "," +
          +n +
          "," +
          +i +
          "," +
          (this._x1 = +r) +
          "," +
          (this._y1 = +a);
      },
      arcTo: function(t, e, n, i, r) {
        (t = +t), (e = +e), (n = +n), (i = +i), (r = +r);
        var a = this._x1,
          o = this._y1,
          c = n - t,
          f = i - e,
          s = a - t,
          u = o - e,
          h = s * s + u * u;
        if (r < 0) throw new Error("negative radius: " + r);
        if (null === this._x1)
          this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
        else if (h > 1e-6)
          if (Math.abs(u * c - f * s) > 1e-6 && r) {
            var l = n - a,
              d = i - o,
              _ = c * c + f * f,
              p = l * l + d * d,
              b = Math.sqrt(_),
              v = Math.sqrt(h),
              y = r * Math.tan((En - Math.acos((_ + h - p) / (2 * b * v))) / 2),
              g = y / v,
              x = y / b;
            Math.abs(g - 1) > 1e-6 &&
              (this._ += "L" + (t + g * s) + "," + (e + g * u)),
              (this._ +=
                "A" +
                r +
                "," +
                r +
                ",0,0," +
                +(u * l > s * d) +
                "," +
                (this._x1 = t + x * c) +
                "," +
                (this._y1 = e + x * f));
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
        else;
      },
      arc: function(t, e, n, i, r, a) {
        (t = +t), (e = +e);
        var o = (n = +n) * Math.cos(i),
          c = n * Math.sin(i),
          f = t + o,
          s = e + c,
          u = 1 ^ a,
          h = a ? i - r : r - i;
        if (n < 0) throw new Error("negative radius: " + n);
        null === this._x1
          ? (this._ += "M" + f + "," + s)
          : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - s) > 1e-6) &&
            (this._ += "L" + f + "," + s),
          n &&
            (h < 0 && (h = (h % Ln) + Ln),
            h > Pn
              ? (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  u +
                  "," +
                  (t - o) +
                  "," +
                  (e - c) +
                  "A" +
                  n +
                  "," +
                  n +
                  ",0,1," +
                  u +
                  "," +
                  (this._x1 = f) +
                  "," +
                  (this._y1 = s))
              : h > 1e-6 &&
                (this._ +=
                  "A" +
                  n +
                  "," +
                  n +
                  ",0," +
                  +(h >= En) +
                  "," +
                  u +
                  "," +
                  (this._x1 = t + n * Math.cos(r)) +
                  "," +
                  (this._y1 = e + n * Math.sin(r))));
      },
      rect: function(t, e, n, i) {
        this._ +=
          "M" +
          (this._x0 = this._x1 = +t) +
          "," +
          (this._y0 = this._y1 = +e) +
          "h" +
          +n +
          "v" +
          +i +
          "h" +
          -n +
          "Z";
      },
      toString: function() {
        return this._;
      }
    };
    var qn = Rn;
    function Dn() {}
    function Fn(t, e) {
      var n = new Dn();
      if (t instanceof Dn)
        t.each(function(t, e) {
          n.set(e, t);
        });
      else if (Array.isArray(t)) {
        var i,
          r = -1,
          a = t.length;
        if (null == e) for (; ++r < a; ) n.set(r, t[r]);
        else for (; ++r < a; ) n.set(e((i = t[r]), r, t), i);
      } else if (t) for (var o in t) n.set(o, t[o]);
      return n;
    }
    Dn.prototype = Fn.prototype = {
      constructor: Dn,
      has: function(t) {
        return "$" + t in this;
      },
      get: function(t) {
        return this["$" + t];
      },
      set: function(t, e) {
        return (this["$" + t] = e), this;
      },
      remove: function(t) {
        var e = "$" + t;
        return e in this && delete this[e];
      },
      clear: function() {
        for (var t in this) "$" === t[0] && delete this[t];
      },
      keys: function() {
        var t = [];
        for (var e in this) "$" === e[0] && t.push(e.slice(1));
        return t;
      },
      values: function() {
        var t = [];
        for (var e in this) "$" === e[0] && t.push(this[e]);
        return t;
      },
      entries: function() {
        var t = [];
        for (var e in this)
          "$" === e[0] && t.push({ key: e.slice(1), value: this[e] });
        return t;
      },
      size: function() {
        var t = 0;
        for (var e in this) "$" === e[0] && ++t;
        return t;
      },
      empty: function() {
        for (var t in this) if ("$" === t[0]) return !1;
        return !0;
      },
      each: function(t) {
        for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this);
      }
    };
    var Yn = Fn;
    function On() {}
    var zn = Yn.prototype;
    function jn(t, e) {
      var n = new On();
      if (t instanceof On)
        t.each(function(t) {
          n.add(t);
        });
      else if (t) {
        var i = -1,
          r = t.length;
        if (null == e) for (; ++i < r; ) n.add(t[i]);
        else for (; ++i < r; ) n.add(e(t[i], i, t));
      }
      return n;
    }
    On.prototype = jn.prototype = {
      constructor: On,
      has: zn.has,
      add: function(t) {
        return (this["$" + (t += "")] = t), this;
      },
      remove: zn.remove,
      clear: zn.clear,
      values: zn.keys,
      size: zn.size,
      empty: zn.empty,
      each: zn.each
    };
    Array.prototype.slice;
    var $n = {},
      Bn = {},
      Hn = 34,
      In = 10,
      Vn = 13;
    function Xn(t) {
      return new Function(
        "d",
        "return {" +
          t
            .map(function(t, e) {
              return JSON.stringify(t) + ": d[" + e + "]";
            })
            .join(",") +
          "}"
      );
    }
    var Zn = function(t) {
        var e = new RegExp('["' + t + "\n\r]"),
          n = t.charCodeAt(0);
        function i(t, e) {
          var i,
            r = [],
            a = t.length,
            o = 0,
            c = 0,
            f = a <= 0,
            s = !1;
          function u() {
            if (f) return Bn;
            if (s) return (s = !1), $n;
            var e,
              i,
              r = o;
            if (t.charCodeAt(r) === Hn) {
              for (
                ;
                (o++ < a && t.charCodeAt(o) !== Hn) || t.charCodeAt(++o) === Hn;

              );
              return (
                (e = o) >= a
                  ? (f = !0)
                  : (i = t.charCodeAt(o++)) === In
                    ? (s = !0)
                    : i === Vn && ((s = !0), t.charCodeAt(o) === In && ++o),
                t.slice(r + 1, e - 1).replace(/""/g, '"')
              );
            }
            for (; o < a; ) {
              if ((i = t.charCodeAt((e = o++))) === In) s = !0;
              else if (i === Vn) (s = !0), t.charCodeAt(o) === In && ++o;
              else if (i !== n) continue;
              return t.slice(r, e);
            }
            return (f = !0), t.slice(r, a);
          }
          for (
            t.charCodeAt(a - 1) === In && --a,
              t.charCodeAt(a - 1) === Vn && --a;
            (i = u()) !== Bn;

          ) {
            for (var h = []; i !== $n && i !== Bn; ) h.push(i), (i = u());
            (e && null == (h = e(h, c++))) || r.push(h);
          }
          return r;
        }
        function r(e) {
          return e.map(a).join(t);
        }
        function a(t) {
          return null == t
            ? ""
            : e.test((t += ""))
              ? '"' + t.replace(/"/g, '""') + '"'
              : t;
        }
        return {
          parse: function(t, e) {
            var n,
              r,
              a = i(t, function(t, i) {
                if (n) return n(t, i - 1);
                (r = t),
                  (n = e
                    ? (function(t, e) {
                        var n = Xn(t);
                        return function(i, r) {
                          return e(n(i), r, t);
                        };
                      })(t, e)
                    : Xn(t));
              });
            return (a.columns = r || []), a;
          },
          parseRows: i,
          format: function(e, n) {
            return (
              null == n &&
                (n = (function(t) {
                  var e = Object.create(null),
                    n = [];
                  return (
                    t.forEach(function(t) {
                      for (var i in t) i in e || n.push((e[i] = i));
                    }),
                    n
                  );
                })(e)),
              [n.map(a).join(t)]
                .concat(
                  e.map(function(e) {
                    return n
                      .map(function(t) {
                        return a(e[t]);
                      })
                      .join(t);
                  })
                )
                .join("\n")
            );
          },
          formatRows: function(t) {
            return t.map(r).join("\n");
          }
        };
      },
      Wn = Zn(","),
      Qn = Wn.parse,
      Jn = (Wn.parseRows, Wn.format, Wn.formatRows, Zn("\t")),
      Gn = Jn.parse;
    Jn.parseRows, Jn.format, Jn.formatRows;
    function Kn(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.text();
    }
    var ti = function(t, e) {
      return fetch(t, e).then(Kn);
    };
    function ei(t) {
      return function(e, n, i) {
        return (
          2 === arguments.length &&
            "function" == typeof n &&
            ((i = n), (n = void 0)),
          ti(e, n).then(function(e) {
            return t(e, i);
          })
        );
      };
    }
    ei(Qn), ei(Gn);
    function ni(t) {
      return function(e, n) {
        return ti(e, n).then(function(e) {
          return new DOMParser().parseFromString(e, t);
        });
      };
    }
    ni("application/xml"), ni("text/html"), ni("image/svg+xml");
    function ii(t, e, n, i) {
      if (isNaN(e) || isNaN(n)) return t;
      var r,
        a,
        o,
        c,
        f,
        s,
        u,
        h,
        l,
        d = t._root,
        _ = { data: i },
        p = t._x0,
        b = t._y0,
        v = t._x1,
        y = t._y1;
      if (!d) return (t._root = _), t;
      for (; d.length; )
        if (
          ((s = e >= (a = (p + v) / 2)) ? (p = a) : (v = a),
          (u = n >= (o = (b + y) / 2)) ? (b = o) : (y = o),
          (r = d),
          !(d = d[(h = (u << 1) | s)]))
        )
          return (r[h] = _), t;
      if (
        ((c = +t._x.call(null, d.data)),
        (f = +t._y.call(null, d.data)),
        e === c && n === f)
      )
        return (_.next = d), r ? (r[h] = _) : (t._root = _), t;
      do {
        (r = r ? (r[h] = new Array(4)) : (t._root = new Array(4))),
          (s = e >= (a = (p + v) / 2)) ? (p = a) : (v = a),
          (u = n >= (o = (b + y) / 2)) ? (b = o) : (y = o);
      } while ((h = (u << 1) | s) == (l = ((f >= o) << 1) | (c >= a)));
      return (r[l] = d), (r[h] = _), t;
    }
    var ri = function(t, e, n, i, r) {
      (this.node = t),
        (this.x0 = e),
        (this.y0 = n),
        (this.x1 = i),
        (this.y1 = r);
    };
    function ai(t) {
      return t[0];
    }
    function oi(t) {
      return t[1];
    }
    function ci(t, e, n) {
      var i = new fi(
        null == e ? ai : e,
        null == n ? oi : n,
        NaN,
        NaN,
        NaN,
        NaN
      );
      return null == t ? i : i.addAll(t);
    }
    function fi(t, e, n, i, r, a) {
      (this._x = t),
        (this._y = e),
        (this._x0 = n),
        (this._y0 = i),
        (this._x1 = r),
        (this._y1 = a),
        (this._root = void 0);
    }
    function si(t) {
      for (var e = { data: t.data }, n = e; (t = t.next); )
        n = n.next = { data: t.data };
      return e;
    }
    var ui = (ci.prototype = fi.prototype);
    (ui.copy = function() {
      var t,
        e,
        n = new fi(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        i = this._root;
      if (!i) return n;
      if (!i.length) return (n._root = si(i)), n;
      for (
        t = [{ source: i, target: (n._root = new Array(4)) }];
        (i = t.pop());

      )
        for (var r = 0; r < 4; ++r)
          (e = i.source[r]) &&
            (e.length
              ? t.push({ source: e, target: (i.target[r] = new Array(4)) })
              : (i.target[r] = si(e)));
      return n;
    }),
      (ui.add = function(t) {
        var e = +this._x.call(null, t),
          n = +this._y.call(null, t);
        return ii(this.cover(e, n), e, n, t);
      }),
      (ui.addAll = function(t) {
        var e,
          n,
          i,
          r,
          a = t.length,
          o = new Array(a),
          c = new Array(a),
          f = 1 / 0,
          s = 1 / 0,
          u = -1 / 0,
          h = -1 / 0;
        for (n = 0; n < a; ++n)
          isNaN((i = +this._x.call(null, (e = t[n])))) ||
            isNaN((r = +this._y.call(null, e))) ||
            ((o[n] = i),
            (c[n] = r),
            i < f && (f = i),
            i > u && (u = i),
            r < s && (s = r),
            r > h && (h = r));
        for (
          u < f && ((f = this._x0), (u = this._x1)),
            h < s && ((s = this._y0), (h = this._y1)),
            this.cover(f, s).cover(u, h),
            n = 0;
          n < a;
          ++n
        )
          ii(this, o[n], c[n], t[n]);
        return this;
      }),
      (ui.cover = function(t, e) {
        if (isNaN((t = +t)) || isNaN((e = +e))) return this;
        var n = this._x0,
          i = this._y0,
          r = this._x1,
          a = this._y1;
        if (isNaN(n))
          (r = (n = Math.floor(t)) + 1), (a = (i = Math.floor(e)) + 1);
        else {
          if (!(n > t || t > r || i > e || e > a)) return this;
          var o,
            c,
            f = r - n,
            s = this._root;
          switch ((c = ((e < (i + a) / 2) << 1) | (t < (n + r) / 2))) {
            case 0:
              do {
                ((o = new Array(4))[c] = s), (s = o);
              } while (((a = i + (f *= 2)), t > (r = n + f) || e > a));
              break;
            case 1:
              do {
                ((o = new Array(4))[c] = s), (s = o);
              } while (((a = i + (f *= 2)), (n = r - f) > t || e > a));
              break;
            case 2:
              do {
                ((o = new Array(4))[c] = s), (s = o);
              } while (((i = a - (f *= 2)), t > (r = n + f) || i > e));
              break;
            case 3:
              do {
                ((o = new Array(4))[c] = s), (s = o);
              } while (((i = a - (f *= 2)), (n = r - f) > t || i > e));
          }
          this._root && this._root.length && (this._root = s);
        }
        return (
          (this._x0 = n), (this._y0 = i), (this._x1 = r), (this._y1 = a), this
        );
      }),
      (ui.data = function() {
        var t = [];
        return (
          this.visit(function(e) {
            if (!e.length)
              do {
                t.push(e.data);
              } while ((e = e.next));
          }),
          t
        );
      }),
      (ui.extent = function(t) {
        return arguments.length
          ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
          : isNaN(this._x0)
            ? void 0
            : [[this._x0, this._y0], [this._x1, this._y1]];
      }),
      (ui.find = function(t, e, n) {
        var i,
          r,
          a,
          o,
          c,
          f,
          s,
          u = this._x0,
          h = this._y0,
          l = this._x1,
          d = this._y1,
          _ = [],
          p = this._root;
        for (
          p && _.push(new ri(p, u, h, l, d)),
            null == n
              ? (n = 1 / 0)
              : ((u = t - n), (h = e - n), (l = t + n), (d = e + n), (n *= n));
          (f = _.pop());

        )
          if (
            !(
              !(p = f.node) ||
              (r = f.x0) > l ||
              (a = f.y0) > d ||
              (o = f.x1) < u ||
              (c = f.y1) < h
            )
          )
            if (p.length) {
              var b = (r + o) / 2,
                v = (a + c) / 2;
              _.push(
                new ri(p[3], b, v, o, c),
                new ri(p[2], r, v, b, c),
                new ri(p[1], b, a, o, v),
                new ri(p[0], r, a, b, v)
              ),
                (s = ((e >= v) << 1) | (t >= b)) &&
                  ((f = _[_.length - 1]),
                  (_[_.length - 1] = _[_.length - 1 - s]),
                  (_[_.length - 1 - s] = f));
            } else {
              var y = t - +this._x.call(null, p.data),
                g = e - +this._y.call(null, p.data),
                x = y * y + g * g;
              if (x < n) {
                var m = Math.sqrt((n = x));
                (u = t - m),
                  (h = e - m),
                  (l = t + m),
                  (d = e + m),
                  (i = p.data);
              }
            }
        return i;
      }),
      (ui.remove = function(t) {
        if (
          isNaN((a = +this._x.call(null, t))) ||
          isNaN((o = +this._y.call(null, t)))
        )
          return this;
        var e,
          n,
          i,
          r,
          a,
          o,
          c,
          f,
          s,
          u,
          h,
          l,
          d = this._root,
          _ = this._x0,
          p = this._y0,
          b = this._x1,
          v = this._y1;
        if (!d) return this;
        if (d.length)
          for (;;) {
            if (
              ((s = a >= (c = (_ + b) / 2)) ? (_ = c) : (b = c),
              (u = o >= (f = (p + v) / 2)) ? (p = f) : (v = f),
              (e = d),
              !(d = d[(h = (u << 1) | s)]))
            )
              return this;
            if (!d.length) break;
            (e[(h + 1) & 3] || e[(h + 2) & 3] || e[(h + 3) & 3]) &&
              ((n = e), (l = h));
          }
        for (; d.data !== t; ) if (((i = d), !(d = d.next))) return this;
        return (
          (r = d.next) && delete d.next,
          i
            ? (r ? (i.next = r) : delete i.next, this)
            : e
              ? (r ? (e[h] = r) : delete e[h],
                (d = e[0] || e[1] || e[2] || e[3]) &&
                  d === (e[3] || e[2] || e[1] || e[0]) &&
                  !d.length &&
                  (n ? (n[l] = d) : (this._root = d)),
                this)
              : ((this._root = r), this)
        );
      }),
      (ui.removeAll = function(t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this;
      }),
      (ui.root = function() {
        return this._root;
      }),
      (ui.size = function() {
        var t = 0;
        return (
          this.visit(function(e) {
            if (!e.length)
              do {
                ++t;
              } while ((e = e.next));
          }),
          t
        );
      }),
      (ui.visit = function(t) {
        var e,
          n,
          i,
          r,
          a,
          o,
          c = [],
          f = this._root;
        for (
          f && c.push(new ri(f, this._x0, this._y0, this._x1, this._y1));
          (e = c.pop());

        )
          if (
            !t((f = e.node), (i = e.x0), (r = e.y0), (a = e.x1), (o = e.y1)) &&
            f.length
          ) {
            var s = (i + a) / 2,
              u = (r + o) / 2;
            (n = f[3]) && c.push(new ri(n, s, u, a, o)),
              (n = f[2]) && c.push(new ri(n, i, u, s, o)),
              (n = f[1]) && c.push(new ri(n, s, r, a, u)),
              (n = f[0]) && c.push(new ri(n, i, r, s, u));
          }
        return this;
      }),
      (ui.visitAfter = function(t) {
        var e,
          n = [],
          i = [];
        for (
          this._root &&
          n.push(new ri(this._root, this._x0, this._y0, this._x1, this._y1));
          (e = n.pop());

        ) {
          var r = e.node;
          if (r.length) {
            var a,
              o = e.x0,
              c = e.y0,
              f = e.x1,
              s = e.y1,
              u = (o + f) / 2,
              h = (c + s) / 2;
            (a = r[0]) && n.push(new ri(a, o, c, u, h)),
              (a = r[1]) && n.push(new ri(a, u, c, f, h)),
              (a = r[2]) && n.push(new ri(a, o, h, u, s)),
              (a = r[3]) && n.push(new ri(a, u, h, f, s));
          }
          i.push(e);
        }
        for (; (e = i.pop()); ) t(e.node, e.x0, e.y0, e.x1, e.y1);
        return this;
      }),
      (ui.x = function(t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      }),
      (ui.y = function(t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      });
    Math.PI, Math.sqrt(5);
    var hi = function(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          i = t.slice(0, n);
        return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)];
      },
      li = function(t) {
        return (t = hi(Math.abs(t))) ? t[1] : NaN;
      },
      di = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function _i(t) {
      return new pi(t);
    }
    function pi(t) {
      if (!(e = di.exec(t))) throw new Error("invalid format: " + t);
      var e;
      (this.fill = e[1] || " "),
        (this.align = e[2] || ">"),
        (this.sign = e[3] || "-"),
        (this.symbol = e[4] || ""),
        (this.zero = !!e[5]),
        (this.width = e[6] && +e[6]),
        (this.comma = !!e[7]),
        (this.precision = e[8] && +e[8].slice(1)),
        (this.trim = !!e[9]),
        (this.type = e[10] || "");
    }
    (_i.prototype = pi.prototype),
      (pi.prototype.toString = function() {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (null == this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (null == this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    var bi,
      vi,
      yi = function(t) {
        t: for (var e, n = t.length, i = 1, r = -1; i < n; ++i)
          switch (t[i]) {
            case ".":
              r = e = i;
              break;
            case "0":
              0 === r && (r = i), (e = i);
              break;
            default:
              if (r > 0) {
                if (!+t[i]) break t;
                r = 0;
              }
          }
        return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t;
      },
      gi = function(t, e) {
        var n = hi(t, e);
        if (!n) return t + "";
        var i = n[0],
          r = n[1];
        return r < 0
          ? "0." + new Array(-r).join("0") + i
          : i.length > r + 1
            ? i.slice(0, r + 1) + "." + i.slice(r + 1)
            : i + new Array(r - i.length + 2).join("0");
      },
      xi = {
        "%": function(t, e) {
          return (100 * t).toFixed(e);
        },
        b: function(t) {
          return Math.round(t).toString(2);
        },
        c: function(t) {
          return t + "";
        },
        d: function(t) {
          return Math.round(t).toString(10);
        },
        e: function(t, e) {
          return t.toExponential(e);
        },
        f: function(t, e) {
          return t.toFixed(e);
        },
        g: function(t, e) {
          return t.toPrecision(e);
        },
        o: function(t) {
          return Math.round(t).toString(8);
        },
        p: function(t, e) {
          return gi(100 * t, e);
        },
        r: gi,
        s: function(t, e) {
          var n = hi(t, e);
          if (!n) return t + "";
          var i = n[0],
            r = n[1],
            a = r - (bi = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
            o = i.length;
          return a === o
            ? i
            : a > o
              ? i + new Array(a - o + 1).join("0")
              : a > 0
                ? i.slice(0, a) + "." + i.slice(a)
                : "0." +
                  new Array(1 - a).join("0") +
                  hi(t, Math.max(0, e + a - 1))[0];
        },
        X: function(t) {
          return Math.round(t)
            .toString(16)
            .toUpperCase();
        },
        x: function(t) {
          return Math.round(t).toString(16);
        }
      },
      mi = function(t) {
        return t;
      },
      wi = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y"
      ],
      Mi = function(t) {
        var e =
            t.grouping && t.thousands
              ? (function(t, e) {
                  return function(n, i) {
                    for (
                      var r = n.length, a = [], o = 0, c = t[0], f = 0;
                      r > 0 &&
                      c > 0 &&
                      (f + c + 1 > i && (c = Math.max(1, i - f)),
                      a.push(n.substring((r -= c), r + c)),
                      !((f += c + 1) > i));

                    )
                      c = t[(o = (o + 1) % t.length)];
                    return a.reverse().join(e);
                  };
                })(t.grouping, t.thousands)
              : mi,
          n = t.currency,
          i = t.decimal,
          r = t.numerals
            ? (function(t) {
                return function(e) {
                  return e.replace(/[0-9]/g, function(e) {
                    return t[+e];
                  });
                };
              })(t.numerals)
            : mi,
          a = t.percent || "%";
        function o(t) {
          var o = (t = _i(t)).fill,
            c = t.align,
            f = t.sign,
            s = t.symbol,
            u = t.zero,
            h = t.width,
            l = t.comma,
            d = t.precision,
            _ = t.trim,
            p = t.type;
          "n" === p
            ? ((l = !0), (p = "g"))
            : xi[p] || (null == d && (d = 12), (_ = !0), (p = "g")),
            (u || ("0" === o && "=" === c)) && ((u = !0), (o = "0"), (c = "="));
          var b =
              "$" === s
                ? n[0]
                : "#" === s && /[boxX]/.test(p)
                  ? "0" + p.toLowerCase()
                  : "",
            v = "$" === s ? n[1] : /[%p]/.test(p) ? a : "",
            y = xi[p],
            g = /[defgprs%]/.test(p);
          function x(t) {
            var n,
              a,
              s,
              x = b,
              m = v;
            if ("c" === p) (m = y(t) + m), (t = "");
            else {
              var w = (t = +t) < 0;
              if (
                ((t = y(Math.abs(t), d)),
                _ && (t = yi(t)),
                w && 0 == +t && (w = !1),
                (x =
                  (w
                    ? "(" === f
                      ? f
                      : "-"
                    : "-" === f || "(" === f
                      ? ""
                      : f) + x),
                (m =
                  ("s" === p ? wi[8 + bi / 3] : "") +
                  m +
                  (w && "(" === f ? ")" : "")),
                g)
              )
                for (n = -1, a = t.length; ++n < a; )
                  if (48 > (s = t.charCodeAt(n)) || s > 57) {
                    (m = (46 === s ? i + t.slice(n + 1) : t.slice(n)) + m),
                      (t = t.slice(0, n));
                    break;
                  }
            }
            l && !u && (t = e(t, 1 / 0));
            var M = x.length + t.length + m.length,
              A = M < h ? new Array(h - M + 1).join(o) : "";
            switch (
              (l &&
                u &&
                ((t = e(A + t, A.length ? h - m.length : 1 / 0)), (A = "")),
              c)
            ) {
              case "<":
                t = x + t + m + A;
                break;
              case "=":
                t = x + A + t + m;
                break;
              case "^":
                t = A.slice(0, (M = A.length >> 1)) + x + t + m + A.slice(M);
                break;
              default:
                t = A + x + t + m;
            }
            return r(t);
          }
          return (
            (d =
              null == d
                ? 6
                : /[gprs]/.test(p)
                  ? Math.max(1, Math.min(21, d))
                  : Math.max(0, Math.min(20, d))),
            (x.toString = function() {
              return t + "";
            }),
            x
          );
        }
        return {
          format: o,
          formatPrefix: function(t, e) {
            var n = o((((t = _i(t)).type = "f"), t)),
              i = 3 * Math.max(-8, Math.min(8, Math.floor(li(e) / 3))),
              r = Math.pow(10, -i),
              a = wi[8 + i / 3];
            return function(t) {
              return n(r * t) + a;
            };
          }
        };
      };
    !(function(t) {
      (vi = Mi(t)), vi.format, vi.formatPrefix;
    })({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
    var Ai = function() {
      return new ki();
    };
    function ki() {
      this.reset();
    }
    ki.prototype = {
      constructor: ki,
      reset: function() {
        this.s = this.t = 0;
      },
      add: function(t) {
        Ni(Ti, t, this.t),
          Ni(this, Ti.s, this.s),
          this.s ? (this.t += Ti.t) : (this.s = Ti.t);
      },
      valueOf: function() {
        return this.s;
      }
    };
    var Ti = new ki();
    function Ni(t, e, n) {
      var i = (t.s = e + n),
        r = i - e,
        a = i - r;
      t.t = e - a + (n - r);
    }
    var Ci = 1e-6,
      Si = Math.PI,
      Ei = Si / 2,
      Li = Si / 4,
      Pi = 2 * Si,
      Ui = Si / 180,
      Ri = Math.abs,
      qi = Math.atan,
      Di = Math.atan2,
      Fi = Math.cos,
      Yi = (Math.ceil, Math.exp),
      Oi = (Math.floor, Math.log),
      zi = (Math.pow, Math.sin),
      ji = (Math.sign, Math.sqrt),
      $i = Math.tan;
    function Bi(t) {
      return t > 1 ? 0 : t < -1 ? Si : Math.acos(t);
    }
    function Hi(t) {
      return t > 1 ? Ei : t < -1 ? -Ei : Math.asin(t);
    }
    function Ii() {}
    Ai(), Ai();
    function Vi(t) {
      var e = t[0],
        n = t[1],
        i = Fi(n);
      return [i * Fi(e), i * zi(e), zi(n)];
    }
    function Xi(t, e) {
      return [
        t[1] * e[2] - t[2] * e[1],
        t[2] * e[0] - t[0] * e[2],
        t[0] * e[1] - t[1] * e[0]
      ];
    }
    function Zi(t) {
      var e = ji(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      (t[0] /= e), (t[1] /= e), (t[2] /= e);
    }
    Ai();
    function Wi(t, e) {
      return [t > Si ? t - Pi : t < -Si ? t + Pi : t, e];
    }
    Wi.invert = Wi;
    var Qi = function() {
        var t,
          e = [];
        return {
          point: function(e, n) {
            t.push([e, n]);
          },
          lineStart: function() {
            e.push((t = []));
          },
          lineEnd: Ii,
          rejoin: function() {
            e.length > 1 && e.push(e.pop().concat(e.shift()));
          },
          result: function() {
            var n = e;
            return (e = []), (t = null), n;
          }
        };
      },
      Ji = function(t, e) {
        return Ri(t[0] - e[0]) < Ci && Ri(t[1] - e[1]) < Ci;
      };
    function Gi(t, e, n, i) {
      (this.x = t),
        (this.z = e),
        (this.o = n),
        (this.e = i),
        (this.v = !1),
        (this.n = this.p = null);
    }
    var Ki = function(t, e, n, i, r) {
      var a,
        o,
        c = [],
        f = [];
      if (
        (t.forEach(function(t) {
          if (!((e = t.length - 1) <= 0)) {
            var e,
              n,
              i = t[0],
              o = t[e];
            if (Ji(i, o)) {
              for (r.lineStart(), a = 0; a < e; ++a)
                r.point((i = t[a])[0], i[1]);
              r.lineEnd();
            } else
              c.push((n = new Gi(i, t, null, !0))),
                f.push((n.o = new Gi(i, null, n, !1))),
                c.push((n = new Gi(o, t, null, !1))),
                f.push((n.o = new Gi(o, null, n, !0)));
          }
        }),
        c.length)
      ) {
        for (f.sort(e), tr(c), tr(f), a = 0, o = f.length; a < o; ++a)
          f[a].e = n = !n;
        for (var s, u, h = c[0]; ; ) {
          for (var l = h, d = !0; l.v; ) if ((l = l.n) === h) return;
          (s = l.z), r.lineStart();
          do {
            if (((l.v = l.o.v = !0), l.e)) {
              if (d)
                for (a = 0, o = s.length; a < o; ++a)
                  r.point((u = s[a])[0], u[1]);
              else i(l.x, l.n.x, 1, r);
              l = l.n;
            } else {
              if (d)
                for (s = l.p.z, a = s.length - 1; a >= 0; --a)
                  r.point((u = s[a])[0], u[1]);
              else i(l.x, l.p.x, -1, r);
              l = l.p;
            }
            (s = (l = l.o).z), (d = !d);
          } while (!l.v);
          r.lineEnd();
        }
      }
    };
    function tr(t) {
      if ((e = t.length)) {
        for (var e, n, i = 0, r = t[0]; ++i < e; )
          (r.n = n = t[i]), (n.p = r), (r = n);
        (r.n = n = t[0]), (n.p = r);
      }
    }
    var er = Ai(),
      nr = function(t, e) {
        var n = e[0],
          i = e[1],
          r = zi(i),
          a = [zi(n), -Fi(n), 0],
          o = 0,
          c = 0;
        er.reset(), 1 === r ? (i = Ei + Ci) : -1 === r && (i = -Ei - Ci);
        for (var f = 0, s = t.length; f < s; ++f)
          if ((h = (u = t[f]).length))
            for (
              var u,
                h,
                l = u[h - 1],
                d = l[0],
                _ = l[1] / 2 + Li,
                p = zi(_),
                b = Fi(_),
                v = 0;
              v < h;
              ++v, d = g, p = m, b = w, l = y
            ) {
              var y = u[v],
                g = y[0],
                x = y[1] / 2 + Li,
                m = zi(x),
                w = Fi(x),
                M = g - d,
                A = M >= 0 ? 1 : -1,
                k = A * M,
                T = k > Si,
                N = p * m;
              if (
                (er.add(Di(N * A * zi(k), b * w + N * Fi(k))),
                (o += T ? M + A * Pi : M),
                T ^ (d >= n) ^ (g >= n))
              ) {
                var C = Xi(Vi(l), Vi(y));
                Zi(C);
                var S = Xi(a, C);
                Zi(S);
                var E = (T ^ (M >= 0) ? -1 : 1) * Hi(S[2]);
                (i > E || (i === E && (C[0] || C[1]))) &&
                  (c += T ^ (M >= 0) ? 1 : -1);
              }
            }
        return (o < -Ci || (o < Ci && er < -Ci)) ^ (1 & c);
      },
      ir = function(t, e, n, i) {
        return function(r) {
          var a,
            o,
            c,
            f = e(r),
            s = Qi(),
            u = e(s),
            h = !1,
            d = {
              point: _,
              lineStart: b,
              lineEnd: v,
              polygonStart: function() {
                (d.point = y),
                  (d.lineStart = g),
                  (d.lineEnd = x),
                  (o = []),
                  (a = []);
              },
              polygonEnd: function() {
                (d.point = _), (d.lineStart = b), (d.lineEnd = v), (o = l(o));
                var t = nr(a, i);
                o.length
                  ? (h || (r.polygonStart(), (h = !0)), Ki(o, ar, t, n, r))
                  : t &&
                    (h || (r.polygonStart(), (h = !0)),
                    r.lineStart(),
                    n(null, null, 1, r),
                    r.lineEnd()),
                  h && (r.polygonEnd(), (h = !1)),
                  (o = a = null);
              },
              sphere: function() {
                r.polygonStart(),
                  r.lineStart(),
                  n(null, null, 1, r),
                  r.lineEnd(),
                  r.polygonEnd();
              }
            };
          function _(e, n) {
            t(e, n) && r.point(e, n);
          }
          function p(t, e) {
            f.point(t, e);
          }
          function b() {
            (d.point = p), f.lineStart();
          }
          function v() {
            (d.point = _), f.lineEnd();
          }
          function y(t, e) {
            c.push([t, e]), u.point(t, e);
          }
          function g() {
            u.lineStart(), (c = []);
          }
          function x() {
            y(c[0][0], c[0][1]), u.lineEnd();
            var t,
              e,
              n,
              i,
              f = u.clean(),
              l = s.result(),
              d = l.length;
            if ((c.pop(), a.push(c), (c = null), d))
              if (1 & f) {
                if ((e = (n = l[0]).length - 1) > 0) {
                  for (
                    h || (r.polygonStart(), (h = !0)), r.lineStart(), t = 0;
                    t < e;
                    ++t
                  )
                    r.point((i = n[t])[0], i[1]);
                  r.lineEnd();
                }
              } else
                d > 1 && 2 & f && l.push(l.pop().concat(l.shift())),
                  o.push(l.filter(rr));
          }
          return d;
        };
      };
    function rr(t) {
      return t.length > 1;
    }
    function ar(t, e) {
      return (
        ((t = t.x)[0] < 0 ? t[1] - Ei - Ci : Ei - t[1]) -
        ((e = e.x)[0] < 0 ? e[1] - Ei - Ci : Ei - e[1])
      );
    }
    ir(
      function() {
        return !0;
      },
      function(t) {
        var e,
          n = NaN,
          i = NaN,
          r = NaN;
        return {
          lineStart: function() {
            t.lineStart(), (e = 1);
          },
          point: function(a, o) {
            var c = a > 0 ? Si : -Si,
              f = Ri(a - n);
            Ri(f - Si) < Ci
              ? (t.point(n, (i = (i + o) / 2 > 0 ? Ei : -Ei)),
                t.point(r, i),
                t.lineEnd(),
                t.lineStart(),
                t.point(c, i),
                t.point(a, i),
                (e = 0))
              : r !== c &&
                f >= Si &&
                (Ri(n - r) < Ci && (n -= r * Ci),
                Ri(a - c) < Ci && (a -= c * Ci),
                (i = (function(t, e, n, i) {
                  var r,
                    a,
                    o = zi(t - n);
                  return Ri(o) > Ci
                    ? qi(
                        (zi(e) * (a = Fi(i)) * zi(n) -
                          zi(i) * (r = Fi(e)) * zi(t)) /
                          (r * a * o)
                      )
                    : (e + i) / 2;
                })(n, i, a, o)),
                t.point(r, i),
                t.lineEnd(),
                t.lineStart(),
                t.point(c, i),
                (e = 0)),
              t.point((n = a), (i = o)),
              (r = c);
          },
          lineEnd: function() {
            t.lineEnd(), (n = i = NaN);
          },
          clean: function() {
            return 2 - e;
          }
        };
      },
      function(t, e, n, i) {
        var r;
        if (null == t)
          (r = n * Ei),
            i.point(-Si, r),
            i.point(0, r),
            i.point(Si, r),
            i.point(Si, 0),
            i.point(Si, -r),
            i.point(0, -r),
            i.point(-Si, -r),
            i.point(-Si, 0),
            i.point(-Si, r);
        else if (Ri(t[0] - e[0]) > Ci) {
          var a = t[0] < e[0] ? Si : -Si;
          (r = (n * a) / 2), i.point(-a, r), i.point(0, r), i.point(a, r);
        } else i.point(e[0], e[1]);
      },
      [-Si, -Ei]
    );
    Ai();
    Ai(), Ai();
    function or(t) {
      this._context = t;
    }
    or.prototype = {
      _radius: 4.5,
      pointRadius: function(t) {
        return (this._radius = t), this;
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        0 === this._line && this._context.closePath(), (this._point = NaN);
      },
      point: function(t, e) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t, e), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(t, e);
            break;
          default:
            this._context.moveTo(t + this._radius, e),
              this._context.arc(t, e, this._radius, 0, Pi);
        }
      },
      result: Ii
    };
    Ai();
    function cr() {
      this._string = [];
    }
    function fr(t) {
      return (
        "m0," +
        t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        -2 * t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        2 * t +
        "z"
      );
    }
    cr.prototype = {
      _radius: 4.5,
      _circle: fr(4.5),
      pointRadius: function(t) {
        return (
          (t = +t) !== this._radius &&
            ((this._radius = t), (this._circle = null)),
          this
        );
      },
      polygonStart: function() {
        this._line = 0;
      },
      polygonEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        0 === this._line && this._string.push("Z"), (this._point = NaN);
      },
      point: function(t, e) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", e), (this._point = 1);
            break;
          case 1:
            this._string.push("L", t, ",", e);
            break;
          default:
            null == this._circle && (this._circle = fr(this._radius)),
              this._string.push("M", t, ",", e, this._circle);
        }
      },
      result: function() {
        if (this._string.length) {
          var t = this._string.join("");
          return (this._string = []), t;
        }
        return null;
      }
    };
    function sr(t) {
      return function(e) {
        var n = new ur();
        for (var i in t) n[i] = t[i];
        return (n.stream = e), n;
      };
    }
    function ur() {}
    ur.prototype = {
      constructor: ur,
      point: function(t, e) {
        this.stream.point(t, e);
      },
      sphere: function() {
        this.stream.sphere();
      },
      lineStart: function() {
        this.stream.lineStart();
      },
      lineEnd: function() {
        this.stream.lineEnd();
      },
      polygonStart: function() {
        this.stream.polygonStart();
      },
      polygonEnd: function() {
        this.stream.polygonEnd();
      }
    };
    Fi(30 * Ui);
    sr({
      point: function(t, e) {
        this.stream.point(t * Ui, e * Ui);
      }
    });
    function hr(t) {
      return function(e, n) {
        var i = Fi(e),
          r = Fi(n),
          a = t(i * r);
        return [a * r * zi(e), a * zi(n)];
      };
    }
    function lr(t) {
      return function(e, n) {
        var i = ji(e * e + n * n),
          r = t(i),
          a = zi(r),
          o = Fi(r);
        return [Di(e * a, i * o), Hi(i && (n * a) / i)];
      };
    }
    var dr = hr(function(t) {
      return ji(2 / (1 + t));
    });
    dr.invert = lr(function(t) {
      return 2 * Hi(t / 2);
    });
    var _r = hr(function(t) {
      return (t = Bi(t)) && t / zi(t);
    });
    _r.invert = lr(function(t) {
      return t;
    });
    function pr(t, e) {
      return [t, Oi($i((Ei + e) / 2))];
    }
    pr.invert = function(t, e) {
      return [t, 2 * qi(Yi(e)) - Ei];
    };
    function br(t, e) {
      return [t, e];
    }
    br.invert = br;
    function vr(t, e) {
      var n = Fi(e),
        i = Fi(t) * n;
      return [(n * zi(t)) / i, zi(e) / i];
    }
    vr.invert = lr(qi);
    function yr(t, e) {
      var n = e * e,
        i = n * n;
      return [
        t *
          (0.8707 -
            0.131979 * n +
            i * (i * (0.003971 * n - 0.001529 * i) - 0.013791)),
        e *
          (1.007226 +
            n * (0.015085 + i * (0.028874 * n - 0.044475 - 0.005916 * i)))
      ];
    }
    yr.invert = function(t, e) {
      var n,
        i = e,
        r = 25;
      do {
        var a = i * i,
          o = a * a;
        i -= n =
          (i *
            (1.007226 +
              a * (0.015085 + o * (0.028874 * a - 0.044475 - 0.005916 * o))) -
            e) /
          (1.007226 +
            a * (0.045255 + o * (0.259866 * a - 0.311325 - 0.005916 * 11 * o)));
      } while (Ri(n) > Ci && --r > 0);
      return [
        t /
          (0.8707 +
            (a = i * i) *
              (a * (a * a * a * (0.003971 - 0.001529 * a) - 0.013791) -
                0.131979)),
        i
      ];
    };
    function gr(t, e) {
      return [Fi(e) * zi(t), zi(e)];
    }
    gr.invert = lr(Hi);
    function xr(t, e) {
      var n = Fi(e),
        i = 1 + Fi(t) * n;
      return [(n * zi(t)) / i, zi(e) / i];
    }
    xr.invert = lr(function(t) {
      return 2 * qi(t);
    });
    function mr(t, e) {
      return [Oi($i((Ei + e) / 2)), -t];
    }
    mr.invert = function(t, e) {
      return [-e, 2 * qi(Yi(t)) - Ei];
    };
    function wr(t) {
      var e = 0,
        n = t.children,
        i = n && n.length;
      if (i) for (; --i >= 0; ) e += n[i].value;
      else e = 1;
      t.value = e;
    }
    function Mr(t, e) {
      var n,
        i,
        r,
        a,
        o,
        c = new Nr(t),
        f = +t.value && (c.value = t.value),
        s = [c];
      for (null == e && (e = Ar); (n = s.pop()); )
        if ((f && (n.value = +n.data.value), (r = e(n.data)) && (o = r.length)))
          for (n.children = new Array(o), a = o - 1; a >= 0; --a)
            s.push((i = n.children[a] = new Nr(r[a]))),
              (i.parent = n),
              (i.depth = n.depth + 1);
      return c.eachBefore(Tr);
    }
    function Ar(t) {
      return t.children;
    }
    function kr(t) {
      t.data = t.data.data;
    }
    function Tr(t) {
      var e = 0;
      do {
        t.height = e;
      } while ((t = t.parent) && t.height < ++e);
    }
    function Nr(t) {
      (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    Nr.prototype = Mr.prototype = {
      constructor: Nr,
      count: function() {
        return this.eachAfter(wr);
      },
      each: function(t) {
        var e,
          n,
          i,
          r,
          a = this,
          o = [a];
        do {
          for (e = o.reverse(), o = []; (a = e.pop()); )
            if ((t(a), (n = a.children)))
              for (i = 0, r = n.length; i < r; ++i) o.push(n[i]);
        } while (o.length);
        return this;
      },
      eachAfter: function(t) {
        for (var e, n, i, r = this, a = [r], o = []; (r = a.pop()); )
          if ((o.push(r), (e = r.children)))
            for (n = 0, i = e.length; n < i; ++n) a.push(e[n]);
        for (; (r = o.pop()); ) t(r);
        return this;
      },
      eachBefore: function(t) {
        for (var e, n, i = this, r = [i]; (i = r.pop()); )
          if ((t(i), (e = i.children)))
            for (n = e.length - 1; n >= 0; --n) r.push(e[n]);
        return this;
      },
      sum: function(t) {
        return this.eachAfter(function(e) {
          for (
            var n = +t(e.data) || 0, i = e.children, r = i && i.length;
            --r >= 0;

          )
            n += i[r].value;
          e.value = n;
        });
      },
      sort: function(t) {
        return this.eachBefore(function(e) {
          e.children && e.children.sort(t);
        });
      },
      path: function(t) {
        for (
          var e = this,
            n = (function(t, e) {
              if (t === e) return t;
              var n = t.ancestors(),
                i = e.ancestors(),
                r = null;
              for (t = n.pop(), e = i.pop(); t === e; )
                (r = t), (t = n.pop()), (e = i.pop());
              return r;
            })(e, t),
            i = [e];
          e !== n;

        )
          (e = e.parent), i.push(e);
        for (var r = i.length; t !== n; ) i.splice(r, 0, t), (t = t.parent);
        return i;
      },
      ancestors: function() {
        for (var t = this, e = [t]; (t = t.parent); ) e.push(t);
        return e;
      },
      descendants: function() {
        var t = [];
        return (
          this.each(function(e) {
            t.push(e);
          }),
          t
        );
      },
      leaves: function() {
        var t = [];
        return (
          this.eachBefore(function(e) {
            e.children || t.push(e);
          }),
          t
        );
      },
      links: function() {
        var t = this,
          e = [];
        return (
          t.each(function(n) {
            n !== t && e.push({ source: n.parent, target: n });
          }),
          e
        );
      },
      copy: function() {
        return Mr(this).eachBefore(kr);
      }
    };
    Array.prototype.slice;
    var Cr = function(t, e, n, i, r) {
      for (
        var a,
          o = t.children,
          c = -1,
          f = o.length,
          s = t.value && (i - e) / t.value;
        ++c < f;

      )
        ((a = o[c]).y0 = n), (a.y1 = r), (a.x0 = e), (a.x1 = e += a.value * s);
    };
    function Sr(t, e) {
      (this._ = t),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = e);
    }
    Sr.prototype = Object.create(Nr.prototype);
    var Er = function(t, e, n, i, r) {
        for (
          var a,
            o = t.children,
            c = -1,
            f = o.length,
            s = t.value && (r - n) / t.value;
          ++c < f;

        )
          ((a = o[c]).x0 = e),
            (a.x1 = i),
            (a.y0 = n),
            (a.y1 = n += a.value * s);
      },
      Lr = (1 + Math.sqrt(5)) / 2;
    function Pr(t, e, n, i, r, a) {
      for (
        var o,
          c,
          f,
          s,
          u,
          h,
          l,
          d,
          _,
          p,
          b,
          v = [],
          y = e.children,
          g = 0,
          x = 0,
          m = y.length,
          w = e.value;
        g < m;

      ) {
        (f = r - n), (s = a - i);
        do {
          u = y[x++].value;
        } while (!u && x < m);
        for (
          h = l = u,
            b = u * u * (p = Math.max(s / f, f / s) / (w * t)),
            _ = Math.max(l / b, b / h);
          x < m;
          ++x
        ) {
          if (
            ((u += c = y[x].value),
            c < h && (h = c),
            c > l && (l = c),
            (b = u * u * p),
            (d = Math.max(l / b, b / h)) > _)
          ) {
            u -= c;
            break;
          }
          _ = d;
        }
        v.push((o = { value: u, dice: f < s, children: y.slice(g, x) })),
          o.dice
            ? Cr(o, n, i, r, w ? (i += (s * u) / w) : a)
            : Er(o, n, i, w ? (n += (f * u) / w) : r, a),
          (w -= u),
          (g = x);
      }
      return v;
    }
    (function t(e) {
      function n(t, n, i, r, a) {
        Pr(e, t, n, i, r, a);
      }
      return (
        (n.ratio = function(e) {
          return t((e = +e) > 1 ? e : 1);
        }),
        n
      );
    })(Lr),
      (function t(e) {
        function n(t, n, i, r, a) {
          if ((o = t._squarify) && o.ratio === e)
            for (
              var o, c, f, s, u, h = -1, l = o.length, d = t.value;
              ++h < l;

            ) {
              for (
                f = (c = o[h]).children, s = c.value = 0, u = f.length;
                s < u;
                ++s
              )
                c.value += f[s].value;
              c.dice
                ? Cr(c, n, i, r, (i += ((a - i) * c.value) / d))
                : Er(c, n, i, (n += ((r - n) * c.value) / d), a),
                (d -= c.value);
            }
          else (t._squarify = o = Pr(e, t, n, i, r, a)), (o.ratio = e);
        }
        return (
          (n.ratio = function(e) {
            return t((e = +e) > 1 ? e : 1);
          }),
          n
        );
      })(Lr);
    var Ur = function() {
        return Math.random();
      },
      Rr = ((function t(e) {
        function n(t, n) {
          return (
            (t = null == t ? 0 : +t),
            (n = null == n ? 1 : +n),
            1 === arguments.length ? ((n = t), (t = 0)) : (n -= t),
            function() {
              return e() * n + t;
            }
          );
        }
        return (n.source = t), n;
      })(Ur),
      (function t(e) {
        function n(t, n) {
          var i, r;
          return (
            (t = null == t ? 0 : +t),
            (n = null == n ? 1 : +n),
            function() {
              var a;
              if (null != i) (a = i), (i = null);
              else
                do {
                  (i = 2 * e() - 1), (a = 2 * e() - 1), (r = i * i + a * a);
                } while (!r || r > 1);
              return t + n * a * Math.sqrt((-2 * Math.log(r)) / r);
            }
          );
        }
        return (n.source = t), n;
      })(Ur)),
      qr = ((function t(e) {
        function n() {
          var t = Rr.source(e).apply(this, arguments);
          return function() {
            return Math.exp(t());
          };
        }
        return (n.source = t), n;
      })(Ur),
      (function t(e) {
        function n(t) {
          return function() {
            for (var n = 0, i = 0; i < t; ++i) n += e();
            return n;
          };
        }
        return (n.source = t), n;
      })(Ur)),
      Dr = ((function t(e) {
        function n(t) {
          var n = qr.source(e)(t);
          return function() {
            return n() / t;
          };
        }
        return (n.source = t), n;
      })(Ur),
      (function t(e) {
        function n(t) {
          return function() {
            return -Math.log(1 - e()) / t;
          };
        }
        return (n.source = t), n;
      })(Ur),
      Array.prototype);
    Dr.map, Dr.slice;
    var Fr = new Date(),
      Yr = new Date();
    function Or(t, e, n, i) {
      function r(e) {
        return t((e = new Date(+e))), e;
      }
      return (
        (r.floor = r),
        (r.ceil = function(n) {
          return t((n = new Date(n - 1))), e(n, 1), t(n), n;
        }),
        (r.round = function(t) {
          var e = r(t),
            n = r.ceil(t);
          return t - e < n - t ? e : n;
        }),
        (r.offset = function(t, n) {
          return e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t;
        }),
        (r.range = function(n, i, a) {
          var o,
            c = [];
          if (
            ((n = r.ceil(n)),
            (a = null == a ? 1 : Math.floor(a)),
            !(n < i && a > 0))
          )
            return c;
          do {
            c.push((o = new Date(+n))), e(n, a), t(n);
          } while (o < n && n < i);
          return c;
        }),
        (r.filter = function(n) {
          return Or(
            function(e) {
              if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
            },
            function(t, i) {
              if (t >= t)
                if (i < 0) for (; ++i <= 0; ) for (; e(t, -1), !n(t); );
                else for (; --i >= 0; ) for (; e(t, 1), !n(t); );
            }
          );
        }),
        n &&
          ((r.count = function(e, i) {
            return (
              Fr.setTime(+e),
              Yr.setTime(+i),
              t(Fr),
              t(Yr),
              Math.floor(n(Fr, Yr))
            );
          }),
          (r.every = function(t) {
            return (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? r.filter(
                      i
                        ? function(e) {
                            return i(e) % t == 0;
                          }
                        : function(e) {
                            return r.count(0, e) % t == 0;
                          }
                    )
                  : r
                : null
            );
          })),
        r
      );
    }
    var zr = Or(
      function() {},
      function(t, e) {
        t.setTime(+t + e);
      },
      function(t, e) {
        return e - t;
      }
    );
    zr.every = function(t) {
      return (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? Or(
                function(e) {
                  e.setTime(Math.floor(e / t) * t);
                },
                function(e, n) {
                  e.setTime(+e + n * t);
                },
                function(e, n) {
                  return (n - e) / t;
                }
              )
            : zr
          : null
      );
    };
    zr.range;
    var jr = 6e4,
      $r = 6048e5,
      Br = Or(
        function(t) {
          t.setTime(1e3 * Math.floor(t / 1e3));
        },
        function(t, e) {
          t.setTime(+t + 1e3 * e);
        },
        function(t, e) {
          return (e - t) / 1e3;
        },
        function(t) {
          return t.getUTCSeconds();
        }
      ),
      Hr = (Br.range,
      Or(
        function(t) {
          t.setTime(Math.floor(t / jr) * jr);
        },
        function(t, e) {
          t.setTime(+t + e * jr);
        },
        function(t, e) {
          return (e - t) / jr;
        },
        function(t) {
          return t.getMinutes();
        }
      )),
      Ir = (Hr.range,
      Or(
        function(t) {
          var e = (t.getTimezoneOffset() * jr) % 36e5;
          e < 0 && (e += 36e5),
            t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e);
        },
        function(t, e) {
          t.setTime(+t + 36e5 * e);
        },
        function(t, e) {
          return (e - t) / 36e5;
        },
        function(t) {
          return t.getHours();
        }
      )),
      Vr = (Ir.range,
      Or(
        function(t) {
          t.setHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setDate(t.getDate() + e);
        },
        function(t, e) {
          return (
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * jr) /
            864e5
          );
        },
        function(t) {
          return t.getDate() - 1;
        }
      )),
      Xr = Vr;
    Vr.range;
    function Zr(t) {
      return Or(
        function(e) {
          e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
            e.setHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setDate(t.getDate() + 7 * e);
        },
        function(t, e) {
          return (
            (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * jr) / $r
          );
        }
      );
    }
    var Wr = Zr(0),
      Qr = Zr(1),
      Jr = Zr(2),
      Gr = Zr(3),
      Kr = Zr(4),
      ta = Zr(5),
      ea = Zr(6),
      na = (Wr.range,
      Qr.range,
      Jr.range,
      Gr.range,
      Kr.range,
      ta.range,
      ea.range,
      Or(
        function(t) {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setMonth(t.getMonth() + e);
        },
        function(t, e) {
          return (
            e.getMonth() -
            t.getMonth() +
            12 * (e.getFullYear() - t.getFullYear())
          );
        },
        function(t) {
          return t.getMonth();
        }
      )),
      ia = (na.range,
      Or(
        function(t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setFullYear(t.getFullYear() + e);
        },
        function(t, e) {
          return e.getFullYear() - t.getFullYear();
        },
        function(t) {
          return t.getFullYear();
        }
      ));
    ia.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? Or(
            function(e) {
              e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                e.setMonth(0, 1),
                e.setHours(0, 0, 0, 0);
            },
            function(e, n) {
              e.setFullYear(e.getFullYear() + n * t);
            }
          )
        : null;
    };
    var ra = ia,
      aa = (ia.range,
      Or(
        function(t) {
          t.setUTCSeconds(0, 0);
        },
        function(t, e) {
          t.setTime(+t + e * jr);
        },
        function(t, e) {
          return (e - t) / jr;
        },
        function(t) {
          return t.getUTCMinutes();
        }
      )),
      oa = (aa.range,
      Or(
        function(t) {
          t.setUTCMinutes(0, 0, 0);
        },
        function(t, e) {
          t.setTime(+t + 36e5 * e);
        },
        function(t, e) {
          return (e - t) / 36e5;
        },
        function(t) {
          return t.getUTCHours();
        }
      )),
      ca = (oa.range,
      Or(
        function(t) {
          t.setUTCHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setUTCDate(t.getUTCDate() + e);
        },
        function(t, e) {
          return (e - t) / 864e5;
        },
        function(t) {
          return t.getUTCDate() - 1;
        }
      )),
      fa = ca;
    ca.range;
    function sa(t) {
      return Or(
        function(e) {
          e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
            e.setUTCHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setUTCDate(t.getUTCDate() + 7 * e);
        },
        function(t, e) {
          return (e - t) / $r;
        }
      );
    }
    var ua = sa(0),
      ha = sa(1),
      la = sa(2),
      da = sa(3),
      _a = sa(4),
      pa = sa(5),
      ba = sa(6),
      va = (ua.range,
      ha.range,
      la.range,
      da.range,
      _a.range,
      pa.range,
      ba.range,
      Or(
        function(t) {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setUTCMonth(t.getUTCMonth() + e);
        },
        function(t, e) {
          return (
            e.getUTCMonth() -
            t.getUTCMonth() +
            12 * (e.getUTCFullYear() - t.getUTCFullYear())
          );
        },
        function(t) {
          return t.getUTCMonth();
        }
      )),
      ya = (va.range,
      Or(
        function(t) {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        function(t, e) {
          t.setUTCFullYear(t.getUTCFullYear() + e);
        },
        function(t, e) {
          return e.getUTCFullYear() - t.getUTCFullYear();
        },
        function(t) {
          return t.getUTCFullYear();
        }
      ));
    ya.every = function(t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? Or(
            function(e) {
              e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                e.setUTCMonth(0, 1),
                e.setUTCHours(0, 0, 0, 0);
            },
            function(e, n) {
              e.setUTCFullYear(e.getUTCFullYear() + n * t);
            }
          )
        : null;
    };
    var ga = ya;
    ya.range;
    function xa(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function ma(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function wa(t) {
      return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
    }
    var Ma,
      Aa,
      ka,
      Ta = { "-": "", _: " ", 0: "0" },
      Na = /^\s*\d+/,
      Ca = /^%/,
      Sa = /[\\^$*+?|[\]().{}]/g;
    function Ea(t, e, n) {
      var i = t < 0 ? "-" : "",
        r = (i ? -t : t) + "",
        a = r.length;
      return i + (a < n ? new Array(n - a + 1).join(e) + r : r);
    }
    function La(t) {
      return t.replace(Sa, "\\$&");
    }
    function Pa(t) {
      return new RegExp("^(?:" + t.map(La).join("|") + ")", "i");
    }
    function Ua(t) {
      for (var e = {}, n = -1, i = t.length; ++n < i; )
        e[t[n].toLowerCase()] = n;
      return e;
    }
    function Ra(t, e, n) {
      var i = Na.exec(e.slice(n, n + 1));
      return i ? ((t.w = +i[0]), n + i[0].length) : -1;
    }
    function qa(t, e, n) {
      var i = Na.exec(e.slice(n, n + 1));
      return i ? ((t.u = +i[0]), n + i[0].length) : -1;
    }
    function Da(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.U = +i[0]), n + i[0].length) : -1;
    }
    function Fa(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.V = +i[0]), n + i[0].length) : -1;
    }
    function Ya(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.W = +i[0]), n + i[0].length) : -1;
    }
    function Oa(t, e, n) {
      var i = Na.exec(e.slice(n, n + 4));
      return i ? ((t.y = +i[0]), n + i[0].length) : -1;
    }
    function za(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i
        ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), n + i[0].length)
        : -1;
    }
    function ja(t, e, n) {
      var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
      return i
        ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), n + i[0].length)
        : -1;
    }
    function $a(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.m = i[0] - 1), n + i[0].length) : -1;
    }
    function Ba(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.d = +i[0]), n + i[0].length) : -1;
    }
    function Ha(t, e, n) {
      var i = Na.exec(e.slice(n, n + 3));
      return i ? ((t.m = 0), (t.d = +i[0]), n + i[0].length) : -1;
    }
    function Ia(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.H = +i[0]), n + i[0].length) : -1;
    }
    function Va(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.M = +i[0]), n + i[0].length) : -1;
    }
    function Xa(t, e, n) {
      var i = Na.exec(e.slice(n, n + 2));
      return i ? ((t.S = +i[0]), n + i[0].length) : -1;
    }
    function Za(t, e, n) {
      var i = Na.exec(e.slice(n, n + 3));
      return i ? ((t.L = +i[0]), n + i[0].length) : -1;
    }
    function Wa(t, e, n) {
      var i = Na.exec(e.slice(n, n + 6));
      return i ? ((t.L = Math.floor(i[0] / 1e3)), n + i[0].length) : -1;
    }
    function Qa(t, e, n) {
      var i = Ca.exec(e.slice(n, n + 1));
      return i ? n + i[0].length : -1;
    }
    function Ja(t, e, n) {
      var i = Na.exec(e.slice(n));
      return i ? ((t.Q = +i[0]), n + i[0].length) : -1;
    }
    function Ga(t, e, n) {
      var i = Na.exec(e.slice(n));
      return i ? ((t.Q = 1e3 * +i[0]), n + i[0].length) : -1;
    }
    function Ka(t, e) {
      return Ea(t.getDate(), e, 2);
    }
    function to(t, e) {
      return Ea(t.getHours(), e, 2);
    }
    function eo(t, e) {
      return Ea(t.getHours() % 12 || 12, e, 2);
    }
    function no(t, e) {
      return Ea(1 + Xr.count(ra(t), t), e, 3);
    }
    function io(t, e) {
      return Ea(t.getMilliseconds(), e, 3);
    }
    function ro(t, e) {
      return io(t, e) + "000";
    }
    function ao(t, e) {
      return Ea(t.getMonth() + 1, e, 2);
    }
    function oo(t, e) {
      return Ea(t.getMinutes(), e, 2);
    }
    function co(t, e) {
      return Ea(t.getSeconds(), e, 2);
    }
    function fo(t) {
      var e = t.getDay();
      return 0 === e ? 7 : e;
    }
    function so(t, e) {
      return Ea(Wr.count(ra(t), t), e, 2);
    }
    function uo(t, e) {
      var n = t.getDay();
      return (
        (t = n >= 4 || 0 === n ? Kr(t) : Kr.ceil(t)),
        Ea(Kr.count(ra(t), t) + (4 === ra(t).getDay()), e, 2)
      );
    }
    function ho(t) {
      return t.getDay();
    }
    function lo(t, e) {
      return Ea(Qr.count(ra(t), t), e, 2);
    }
    function _o(t, e) {
      return Ea(t.getFullYear() % 100, e, 2);
    }
    function po(t, e) {
      return Ea(t.getFullYear() % 1e4, e, 4);
    }
    function bo(t) {
      var e = t.getTimezoneOffset();
      return (
        (e > 0 ? "-" : ((e *= -1), "+")) +
        Ea((e / 60) | 0, "0", 2) +
        Ea(e % 60, "0", 2)
      );
    }
    function vo(t, e) {
      return Ea(t.getUTCDate(), e, 2);
    }
    function yo(t, e) {
      return Ea(t.getUTCHours(), e, 2);
    }
    function go(t, e) {
      return Ea(t.getUTCHours() % 12 || 12, e, 2);
    }
    function xo(t, e) {
      return Ea(1 + fa.count(ga(t), t), e, 3);
    }
    function mo(t, e) {
      return Ea(t.getUTCMilliseconds(), e, 3);
    }
    function wo(t, e) {
      return mo(t, e) + "000";
    }
    function Mo(t, e) {
      return Ea(t.getUTCMonth() + 1, e, 2);
    }
    function Ao(t, e) {
      return Ea(t.getUTCMinutes(), e, 2);
    }
    function ko(t, e) {
      return Ea(t.getUTCSeconds(), e, 2);
    }
    function To(t) {
      var e = t.getUTCDay();
      return 0 === e ? 7 : e;
    }
    function No(t, e) {
      return Ea(ua.count(ga(t), t), e, 2);
    }
    function Co(t, e) {
      var n = t.getUTCDay();
      return (
        (t = n >= 4 || 0 === n ? _a(t) : _a.ceil(t)),
        Ea(_a.count(ga(t), t) + (4 === ga(t).getUTCDay()), e, 2)
      );
    }
    function So(t) {
      return t.getUTCDay();
    }
    function Eo(t, e) {
      return Ea(ha.count(ga(t), t), e, 2);
    }
    function Lo(t, e) {
      return Ea(t.getUTCFullYear() % 100, e, 2);
    }
    function Po(t, e) {
      return Ea(t.getUTCFullYear() % 1e4, e, 4);
    }
    function Uo() {
      return "+0000";
    }
    function Ro() {
      return "%";
    }
    function qo(t) {
      return +t;
    }
    function Do(t) {
      return Math.floor(+t / 1e3);
    }
    !(function(t) {
      (Ma = (function(t) {
        var e = t.dateTime,
          n = t.date,
          i = t.time,
          r = t.periods,
          a = t.days,
          o = t.shortDays,
          c = t.months,
          f = t.shortMonths,
          s = Pa(r),
          u = Ua(r),
          h = Pa(a),
          l = Ua(a),
          d = Pa(o),
          _ = Ua(o),
          p = Pa(c),
          b = Ua(c),
          v = Pa(f),
          y = Ua(f),
          g = {
            a: function(t) {
              return o[t.getDay()];
            },
            A: function(t) {
              return a[t.getDay()];
            },
            b: function(t) {
              return f[t.getMonth()];
            },
            B: function(t) {
              return c[t.getMonth()];
            },
            c: null,
            d: Ka,
            e: Ka,
            f: ro,
            H: to,
            I: eo,
            j: no,
            L: io,
            m: ao,
            M: oo,
            p: function(t) {
              return r[+(t.getHours() >= 12)];
            },
            Q: qo,
            s: Do,
            S: co,
            u: fo,
            U: so,
            V: uo,
            w: ho,
            W: lo,
            x: null,
            X: null,
            y: _o,
            Y: po,
            Z: bo,
            "%": Ro
          },
          x = {
            a: function(t) {
              return o[t.getUTCDay()];
            },
            A: function(t) {
              return a[t.getUTCDay()];
            },
            b: function(t) {
              return f[t.getUTCMonth()];
            },
            B: function(t) {
              return c[t.getUTCMonth()];
            },
            c: null,
            d: vo,
            e: vo,
            f: wo,
            H: yo,
            I: go,
            j: xo,
            L: mo,
            m: Mo,
            M: Ao,
            p: function(t) {
              return r[+(t.getUTCHours() >= 12)];
            },
            Q: qo,
            s: Do,
            S: ko,
            u: To,
            U: No,
            V: Co,
            w: So,
            W: Eo,
            x: null,
            X: null,
            y: Lo,
            Y: Po,
            Z: Uo,
            "%": Ro
          },
          m = {
            a: function(t, e, n) {
              var i = d.exec(e.slice(n));
              return i ? ((t.w = _[i[0].toLowerCase()]), n + i[0].length) : -1;
            },
            A: function(t, e, n) {
              var i = h.exec(e.slice(n));
              return i ? ((t.w = l[i[0].toLowerCase()]), n + i[0].length) : -1;
            },
            b: function(t, e, n) {
              var i = v.exec(e.slice(n));
              return i ? ((t.m = y[i[0].toLowerCase()]), n + i[0].length) : -1;
            },
            B: function(t, e, n) {
              var i = p.exec(e.slice(n));
              return i ? ((t.m = b[i[0].toLowerCase()]), n + i[0].length) : -1;
            },
            c: function(t, n, i) {
              return A(t, e, n, i);
            },
            d: Ba,
            e: Ba,
            f: Wa,
            H: Ia,
            I: Ia,
            j: Ha,
            L: Za,
            m: $a,
            M: Va,
            p: function(t, e, n) {
              var i = s.exec(e.slice(n));
              return i ? ((t.p = u[i[0].toLowerCase()]), n + i[0].length) : -1;
            },
            Q: Ja,
            s: Ga,
            S: Xa,
            u: qa,
            U: Da,
            V: Fa,
            w: Ra,
            W: Ya,
            x: function(t, e, i) {
              return A(t, n, e, i);
            },
            X: function(t, e, n) {
              return A(t, i, e, n);
            },
            y: za,
            Y: Oa,
            Z: ja,
            "%": Qa
          };
        function w(t, e) {
          return function(n) {
            var i,
              r,
              a,
              o = [],
              c = -1,
              f = 0,
              s = t.length;
            for (n instanceof Date || (n = new Date(+n)); ++c < s; )
              37 === t.charCodeAt(c) &&
                (o.push(t.slice(f, c)),
                null != (r = Ta[(i = t.charAt(++c))])
                  ? (i = t.charAt(++c))
                  : (r = "e" === i ? " " : "0"),
                (a = e[i]) && (i = a(n, r)),
                o.push(i),
                (f = c + 1));
            return o.push(t.slice(f, c)), o.join("");
          };
        }
        function M(t, e) {
          return function(n) {
            var i,
              r,
              a = wa(1900);
            if (A(a, t, (n += ""), 0) != n.length) return null;
            if ("Q" in a) return new Date(a.Q);
            if (("p" in a && (a.H = (a.H % 12) + 12 * a.p), "V" in a)) {
              if (a.V < 1 || a.V > 53) return null;
              "w" in a || (a.w = 1),
                "Z" in a
                  ? ((i =
                      (r = (i = ma(wa(a.y))).getUTCDay()) > 4 || 0 === r
                        ? ha.ceil(i)
                        : ha(i)),
                    (i = fa.offset(i, 7 * (a.V - 1))),
                    (a.y = i.getUTCFullYear()),
                    (a.m = i.getUTCMonth()),
                    (a.d = i.getUTCDate() + ((a.w + 6) % 7)))
                  : ((i =
                      (r = (i = e(wa(a.y))).getDay()) > 4 || 0 === r
                        ? Qr.ceil(i)
                        : Qr(i)),
                    (i = Xr.offset(i, 7 * (a.V - 1))),
                    (a.y = i.getFullYear()),
                    (a.m = i.getMonth()),
                    (a.d = i.getDate() + ((a.w + 6) % 7)));
            } else
              ("W" in a || "U" in a) &&
                ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0),
                (r = "Z" in a ? ma(wa(a.y)).getUTCDay() : e(wa(a.y)).getDay()),
                (a.m = 0),
                (a.d =
                  "W" in a
                    ? ((a.w + 6) % 7) + 7 * a.W - ((r + 5) % 7)
                    : a.w + 7 * a.U - ((r + 6) % 7)));
            return "Z" in a
              ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), ma(a))
              : e(a);
          };
        }
        function A(t, e, n, i) {
          for (var r, a, o = 0, c = e.length, f = n.length; o < c; ) {
            if (i >= f) return -1;
            if (37 === (r = e.charCodeAt(o++))) {
              if (
                ((r = e.charAt(o++)),
                !(a = m[r in Ta ? e.charAt(o++) : r]) || (i = a(t, n, i)) < 0)
              )
                return -1;
            } else if (r != n.charCodeAt(i++)) return -1;
          }
          return i;
        }
        return (
          (g.x = w(n, g)),
          (g.X = w(i, g)),
          (g.c = w(e, g)),
          (x.x = w(n, x)),
          (x.X = w(i, x)),
          (x.c = w(e, x)),
          {
            format: function(t) {
              var e = w((t += ""), g);
              return (
                (e.toString = function() {
                  return t;
                }),
                e
              );
            },
            parse: function(t) {
              var e = M((t += ""), xa);
              return (
                (e.toString = function() {
                  return t;
                }),
                e
              );
            },
            utcFormat: function(t) {
              var e = w((t += ""), x);
              return (
                (e.toString = function() {
                  return t;
                }),
                e
              );
            },
            utcParse: function(t) {
              var e = M(t, ma);
              return (
                (e.toString = function() {
                  return t;
                }),
                e
              );
            }
          }
        );
      })(t)),
        Ma.format,
        Ma.parse,
        (Aa = Ma.utcFormat),
        (ka = Ma.utcParse);
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    });
    Date.prototype.toISOString || Aa("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || ka("%Y-%m-%dT%H:%M:%S.%LZ");
    var Fo = function(t) {
        for (var e = (t.length / 6) | 0, n = new Array(e), i = 0; i < e; )
          n[i] = "#" + t.slice(6 * i, 6 * ++i);
        return n;
      },
      Yo = (Fo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      Fo("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
      Fo("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
      Fo(
        "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
      ),
      Fo("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
      Fo("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
      Fo("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
      Fo("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
      Fo(
        "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
      ),
      function(t) {
        return xe(t[t.length - 1]);
      });
    Yo(
      new Array(3)
        .concat(
          "d8b365f5f5f55ab4ac",
          "a6611adfc27d80cdc1018571",
          "a6611adfc27df5f5f580cdc1018571",
          "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
          "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
          "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
          "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
          "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
          "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
        )
        .map(Fo)
    ),
      Yo(
        new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(Fo)
      ),
      Yo(
        new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(Fo)
      ),
      Ye(ue(300, 0.5, 0), ue(-240, 0.5, 1)),
      Ye(ue(-100, 0.75, 0.35), ue(80, 1.5, 0.8)),
      Ye(ue(260, 0.75, 0.35), ue(80, 1.5, 0.8)),
      ue(),
      Pt(),
      Math.PI,
      Math.PI;
    function Oo(t) {
      var e = t.length;
      return function(n) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
      };
    }
    Oo(
      Fo(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    ),
      Oo(
        Fo(
          "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
        )
      ),
      Oo(
        Fo(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      Oo(
        Fo(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
    var zo = function(t) {
        return function() {
          return t;
        };
      },
      jo = Math.abs,
      $o = Math.atan2,
      Bo = Math.cos,
      Ho = Math.max,
      Io = Math.min,
      Vo = Math.sin,
      Xo = Math.sqrt,
      Zo = 1e-12,
      Wo = Math.PI,
      Qo = Wo / 2,
      Jo = 2 * Wo;
    function Go(t) {
      return t >= 1 ? Qo : t <= -1 ? -Qo : Math.asin(t);
    }
    function Ko(t) {
      return t.innerRadius;
    }
    function tc(t) {
      return t.outerRadius;
    }
    function ec(t) {
      return t.startAngle;
    }
    function nc(t) {
      return t.endAngle;
    }
    function ic(t) {
      return t && t.padAngle;
    }
    function rc(t, e, n, i, r, a, o) {
      var c = t - n,
        f = e - i,
        s = (o ? a : -a) / Xo(c * c + f * f),
        u = s * f,
        h = -s * c,
        l = t + u,
        d = e + h,
        _ = n + u,
        p = i + h,
        b = (l + _) / 2,
        v = (d + p) / 2,
        y = _ - l,
        g = p - d,
        x = y * y + g * g,
        m = r - a,
        w = l * p - _ * d,
        M = (g < 0 ? -1 : 1) * Xo(Ho(0, m * m * x - w * w)),
        A = (w * g - y * M) / x,
        k = (-w * y - g * M) / x,
        T = (w * g + y * M) / x,
        N = (-w * y + g * M) / x,
        C = A - b,
        S = k - v,
        E = T - b,
        L = N - v;
      return (
        C * C + S * S > E * E + L * L && ((A = T), (k = N)),
        {
          cx: A,
          cy: k,
          x01: -u,
          y01: -h,
          x11: A * (r / m - 1),
          y11: k * (r / m - 1)
        }
      );
    }
    var ac = function() {
      var t = Ko,
        e = tc,
        n = zo(0),
        i = null,
        r = ec,
        a = nc,
        o = ic,
        c = null;
      function f() {
        var f,
          s,
          u = +t.apply(this, arguments),
          h = +e.apply(this, arguments),
          l = r.apply(this, arguments) - Qo,
          d = a.apply(this, arguments) - Qo,
          _ = jo(d - l),
          p = d > l;
        if ((c || (c = f = qn()), h < u && ((s = h), (h = u), (u = s)), h > Zo))
          if (_ > Jo - Zo)
            c.moveTo(h * Bo(l), h * Vo(l)),
              c.arc(0, 0, h, l, d, !p),
              u > Zo &&
                (c.moveTo(u * Bo(d), u * Vo(d)), c.arc(0, 0, u, d, l, p));
          else {
            var b,
              v,
              y = l,
              g = d,
              x = l,
              m = d,
              w = _,
              M = _,
              A = o.apply(this, arguments) / 2,
              k = A > Zo && (i ? +i.apply(this, arguments) : Xo(u * u + h * h)),
              T = Io(jo(h - u) / 2, +n.apply(this, arguments)),
              N = T,
              C = T;
            if (k > Zo) {
              var S = Go((k / u) * Vo(A)),
                E = Go((k / h) * Vo(A));
              (w -= 2 * S) > Zo
                ? ((x += S *= p ? 1 : -1), (m -= S))
                : ((w = 0), (x = m = (l + d) / 2)),
                (M -= 2 * E) > Zo
                  ? ((y += E *= p ? 1 : -1), (g -= E))
                  : ((M = 0), (y = g = (l + d) / 2));
            }
            var L = h * Bo(y),
              P = h * Vo(y),
              U = u * Bo(m),
              R = u * Vo(m);
            if (T > Zo) {
              var q = h * Bo(g),
                D = h * Vo(g),
                F = u * Bo(x),
                Y = u * Vo(x);
              if (_ < Wo) {
                var O =
                    w > Zo
                      ? (function(t, e, n, i, r, a, o, c) {
                          var f = n - t,
                            s = i - e,
                            u = o - r,
                            h = c - a,
                            l = (u * (e - a) - h * (t - r)) / (h * f - u * s);
                          return [t + l * f, e + l * s];
                        })(L, P, F, Y, q, D, U, R)
                      : [U, R],
                  z = L - O[0],
                  j = P - O[1],
                  $ = q - O[0],
                  B = D - O[1],
                  H =
                    1 /
                    Vo(
                      (function(t) {
                        return t > 1 ? 0 : t < -1 ? Wo : Math.acos(t);
                      })(
                        (z * $ + j * B) /
                          (Xo(z * z + j * j) * Xo($ * $ + B * B))
                      ) / 2
                    ),
                  I = Xo(O[0] * O[0] + O[1] * O[1]);
                (N = Io(T, (u - I) / (H - 1))), (C = Io(T, (h - I) / (H + 1)));
              }
            }
            M > Zo
              ? C > Zo
                ? ((b = rc(F, Y, L, P, h, C, p)),
                  (v = rc(q, D, U, R, h, C, p)),
                  c.moveTo(b.cx + b.x01, b.cy + b.y01),
                  C < T
                    ? c.arc(
                        b.cx,
                        b.cy,
                        C,
                        $o(b.y01, b.x01),
                        $o(v.y01, v.x01),
                        !p
                      )
                    : (c.arc(
                        b.cx,
                        b.cy,
                        C,
                        $o(b.y01, b.x01),
                        $o(b.y11, b.x11),
                        !p
                      ),
                      c.arc(
                        0,
                        0,
                        h,
                        $o(b.cy + b.y11, b.cx + b.x11),
                        $o(v.cy + v.y11, v.cx + v.x11),
                        !p
                      ),
                      c.arc(
                        v.cx,
                        v.cy,
                        C,
                        $o(v.y11, v.x11),
                        $o(v.y01, v.x01),
                        !p
                      )))
                : (c.moveTo(L, P), c.arc(0, 0, h, y, g, !p))
              : c.moveTo(L, P),
              u > Zo && w > Zo
                ? N > Zo
                  ? ((b = rc(U, R, q, D, u, -N, p)),
                    (v = rc(L, P, F, Y, u, -N, p)),
                    c.lineTo(b.cx + b.x01, b.cy + b.y01),
                    N < T
                      ? c.arc(
                          b.cx,
                          b.cy,
                          N,
                          $o(b.y01, b.x01),
                          $o(v.y01, v.x01),
                          !p
                        )
                      : (c.arc(
                          b.cx,
                          b.cy,
                          N,
                          $o(b.y01, b.x01),
                          $o(b.y11, b.x11),
                          !p
                        ),
                        c.arc(
                          0,
                          0,
                          u,
                          $o(b.cy + b.y11, b.cx + b.x11),
                          $o(v.cy + v.y11, v.cx + v.x11),
                          p
                        ),
                        c.arc(
                          v.cx,
                          v.cy,
                          N,
                          $o(v.y11, v.x11),
                          $o(v.y01, v.x01),
                          !p
                        )))
                  : c.arc(0, 0, u, m, x, p)
                : c.lineTo(U, R);
          }
        else c.moveTo(0, 0);
        if ((c.closePath(), f)) return (c = null), f + "" || null;
      }
      return (
        (f.centroid = function() {
          var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
            i =
              (+r.apply(this, arguments) + +a.apply(this, arguments)) / 2 -
              Wo / 2;
          return [Bo(i) * n, Vo(i) * n];
        }),
        (f.innerRadius = function(e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : zo(+e)), f)
            : t;
        }),
        (f.outerRadius = function(t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : zo(+t)), f)
            : e;
        }),
        (f.cornerRadius = function(t) {
          return arguments.length
            ? ((n = "function" == typeof t ? t : zo(+t)), f)
            : n;
        }),
        (f.padRadius = function(t) {
          return arguments.length
            ? ((i = null == t ? null : "function" == typeof t ? t : zo(+t)), f)
            : i;
        }),
        (f.startAngle = function(t) {
          return arguments.length
            ? ((r = "function" == typeof t ? t : zo(+t)), f)
            : r;
        }),
        (f.endAngle = function(t) {
          return arguments.length
            ? ((a = "function" == typeof t ? t : zo(+t)), f)
            : a;
        }),
        (f.padAngle = function(t) {
          return arguments.length
            ? ((o = "function" == typeof t ? t : zo(+t)), f)
            : o;
        }),
        (f.context = function(t) {
          return arguments.length ? ((c = null == t ? null : t), f) : c;
        }),
        f
      );
    };
    function oc(t) {
      this._context = t;
    }
    oc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, e);
        }
      }
    };
    var cc = function(t) {
      return new oc(t);
    };
    sc(cc);
    function fc(t) {
      this._curve = t;
    }
    function sc(t) {
      function e(e) {
        return new fc(t(e));
      }
      return (e._curve = t), e;
    }
    fc.prototype = {
      areaStart: function() {
        this._curve.areaStart();
      },
      areaEnd: function() {
        this._curve.areaEnd();
      },
      lineStart: function() {
        this._curve.lineStart();
      },
      lineEnd: function() {
        this._curve.lineEnd();
      },
      point: function(t, e) {
        this._curve.point(e * Math.sin(t), e * -Math.cos(t));
      }
    };
    Array.prototype.slice;
    Math.sqrt(1 / 3);
    var uc = Math.sin(Wo / 10) / Math.sin((7 * Wo) / 10),
      hc = (Math.sin(Jo / 10),
      Math.cos(Jo / 10),
      Math.sqrt(3),
      Math.sqrt(3),
      Math.sqrt(12),
      function() {});
    function lc(t, e, n) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + e) / 6,
        (t._y0 + 4 * t._y1 + n) / 6
      );
    }
    function dc(t) {
      this._context = t;
    }
    dc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            lc(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6
              );
          default:
            lc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = e);
      }
    };
    function _c(t) {
      this._context = t;
    }
    _c.prototype = {
      areaStart: hc,
      areaEnd: hc,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = e);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = e);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = e),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + e) / 6
              );
            break;
          default:
            lc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = e);
      }
    };
    function pc(t) {
      this._context = t;
    }
    pc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var n = (this._x0 + 4 * this._x1 + t) / 6,
              i = (this._y0 + 4 * this._y1 + e) / 6;
            this._line
              ? this._context.lineTo(n, i)
              : this._context.moveTo(n, i);
            break;
          case 3:
            this._point = 4;
          default:
            lc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = e);
      }
    };
    function bc(t, e) {
      (this._basis = new dc(t)), (this._beta = e);
    }
    bc.prototype = {
      lineStart: function() {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function() {
        var t = this._x,
          e = this._y,
          n = t.length - 1;
        if (n > 0)
          for (
            var i, r = t[0], a = e[0], o = t[n] - r, c = e[n] - a, f = -1;
            ++f <= n;

          )
            (i = f / n),
              this._basis.point(
                this._beta * t[f] + (1 - this._beta) * (r + i * o),
                this._beta * e[f] + (1 - this._beta) * (a + i * c)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function(t, e) {
        this._x.push(+t), this._y.push(+e);
      }
    };
    (function t(e) {
      function n(t) {
        return 1 === e ? new dc(t) : new bc(t, e);
      }
      return (
        (n.beta = function(e) {
          return t(+e);
        }),
        n
      );
    })(0.85);
    function vc(t, e, n) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - e),
        t._y2 + t._k * (t._y1 - n),
        t._x2,
        t._y2
      );
    }
    function yc(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    yc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            vc(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = e);
            break;
          case 2:
            this._point = 3;
          default:
            vc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return new yc(t, e);
      }
      return (
        (n.tension = function(e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function gc(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    gc.prototype = {
      areaStart: hc,
      areaEnd: hc,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = e);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = e));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = e);
            break;
          default:
            vc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return new gc(t, e);
      }
      return (
        (n.tension = function(e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function xc(t, e) {
      (this._context = t), (this._k = (1 - e) / 6);
    }
    xc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            vc(this, t, e);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return new xc(t, e);
      }
      return (
        (n.tension = function(e) {
          return t(+e);
        }),
        n
      );
    })(0);
    function mc(t, e, n) {
      var i = t._x1,
        r = t._y1,
        a = t._x2,
        o = t._y2;
      if (t._l01_a > Zo) {
        var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          f = 3 * t._l01_a * (t._l01_a + t._l12_a);
        (i = (i * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f),
          (r = (r * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f);
      }
      if (t._l23_a > Zo) {
        var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          u = 3 * t._l23_a * (t._l23_a + t._l12_a);
        (a = (a * s + t._x1 * t._l23_2a - e * t._l12_2a) / u),
          (o = (o * s + t._y1 * t._l23_2a - n * t._l12_2a) / u);
      }
      t._context.bezierCurveTo(i, r, a, o, t._x2, t._y2);
    }
    function wc(t, e) {
      (this._context = t), (this._alpha = e);
    }
    wc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        if (((t = +t), (e = +e), this._point)) {
          var n = this._x2 - t,
            i = this._y2 - e;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(n * n + i * i, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            mc(this, t, e);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return e ? new wc(t, e) : new yc(t, 0);
      }
      return (
        (n.alpha = function(e) {
          return t(+e);
        }),
        n
      );
    })(0.5);
    function Mc(t, e) {
      (this._context = t), (this._alpha = e);
    }
    Mc.prototype = {
      areaStart: hc,
      areaEnd: hc,
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function(t, e) {
        if (((t = +t), (e = +e), this._point)) {
          var n = this._x2 - t,
            i = this._y2 - e;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(n * n + i * i, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = e);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = e));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = e);
            break;
          default:
            mc(this, t, e);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return e ? new Mc(t, e) : new gc(t, 0);
      }
      return (
        (n.alpha = function(e) {
          return t(+e);
        }),
        n
      );
    })(0.5);
    function Ac(t, e) {
      (this._context = t), (this._alpha = e);
    }
    Ac.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function() {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        if (((t = +t), (e = +e), this._point)) {
          var n = this._x2 - t,
            i = this._y2 - e;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(n * n + i * i, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            mc(this, t, e);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = e);
      }
    };
    (function t(e) {
      function n(t) {
        return e ? new Ac(t, e) : new xc(t, 0);
      }
      return (
        (n.alpha = function(e) {
          return t(+e);
        }),
        n
      );
    })(0.5);
    function kc(t) {
      this._context = t;
    }
    kc.prototype = {
      areaStart: hc,
      areaEnd: hc,
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        this._point && this._context.closePath();
      },
      point: function(t, e) {
        (t = +t),
          (e = +e),
          this._point
            ? this._context.lineTo(t, e)
            : ((this._point = 1), this._context.moveTo(t, e));
      }
    };
    function Tc(t) {
      return t < 0 ? -1 : 1;
    }
    function Nc(t, e, n) {
      var i = t._x1 - t._x0,
        r = e - t._x1,
        a = (t._y1 - t._y0) / (i || (r < 0 && -0)),
        o = (n - t._y1) / (r || (i < 0 && -0)),
        c = (a * r + o * i) / (i + r);
      return (
        (Tc(a) + Tc(o)) *
          Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(c)) || 0
      );
    }
    function Cc(t, e) {
      var n = t._x1 - t._x0;
      return n ? ((3 * (t._y1 - t._y0)) / n - e) / 2 : e;
    }
    function Sc(t, e, n) {
      var i = t._x0,
        r = t._y0,
        a = t._x1,
        o = t._y1,
        c = (a - i) / 3;
      t._context.bezierCurveTo(i + c, r + c * e, a - c, o - c * n, a, o);
    }
    function Ec(t) {
      this._context = t;
    }
    function Lc(t) {
      this._context = new Pc(t);
    }
    function Pc(t) {
      this._context = t;
    }
    function Uc(t) {
      this._context = t;
    }
    function Rc(t) {
      var e,
        n,
        i = t.length - 1,
        r = new Array(i),
        a = new Array(i),
        o = new Array(i);
      for (r[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < i - 1; ++e)
        (r[e] = 1), (a[e] = 4), (o[e] = 4 * t[e] + 2 * t[e + 1]);
      for (
        r[i - 1] = 2, a[i - 1] = 7, o[i - 1] = 8 * t[i - 1] + t[i], e = 1;
        e < i;
        ++e
      )
        (n = r[e] / a[e - 1]), (a[e] -= n), (o[e] -= n * o[e - 1]);
      for (r[i - 1] = o[i - 1] / a[i - 1], e = i - 2; e >= 0; --e)
        r[e] = (o[e] - r[e + 1]) / a[e];
      for (a[i - 1] = (t[i] + r[i - 1]) / 2, e = 0; e < i - 1; ++e)
        a[e] = 2 * t[e + 1] - r[e + 1];
      return [r, a];
    }
    (Ec.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Sc(this, this._t0, Cc(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function(t, e) {
        var n = NaN;
        if (((e = +e), (t = +t) !== this._x1 || e !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Sc(this, Cc(this, (n = Nc(this, t, e))), n);
              break;
            default:
              Sc(this, this._t0, (n = Nc(this, t, e)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e),
            (this._t0 = n);
        }
      }
    }),
      ((Lc.prototype = Object.create(Ec.prototype)).point = function(t, e) {
        Ec.prototype.point.call(this, e, t);
      }),
      (Pc.prototype = {
        moveTo: function(t, e) {
          this._context.moveTo(e, t);
        },
        closePath: function() {
          this._context.closePath();
        },
        lineTo: function(t, e) {
          this._context.lineTo(e, t);
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
          this._context.bezierCurveTo(e, t, i, n, a, r);
        }
      }),
      (Uc.prototype = {
        areaStart: function() {
          this._line = 0;
        },
        areaEnd: function() {
          this._line = NaN;
        },
        lineStart: function() {
          (this._x = []), (this._y = []);
        },
        lineEnd: function() {
          var t = this._x,
            e = this._y,
            n = t.length;
          if (n)
            if (
              (this._line
                ? this._context.lineTo(t[0], e[0])
                : this._context.moveTo(t[0], e[0]),
              2 === n)
            )
              this._context.lineTo(t[1], e[1]);
            else
              for (var i = Rc(t), r = Rc(e), a = 0, o = 1; o < n; ++a, ++o)
                this._context.bezierCurveTo(
                  i[0][a],
                  r[0][a],
                  i[1][a],
                  r[1][a],
                  t[o],
                  e[o]
                );
          (this._line || (0 !== this._line && 1 === n)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function(t, e) {
          this._x.push(+t), this._y.push(+e);
        }
      });
    function qc(t, e) {
      (this._context = t), (this._t = e);
    }
    qc.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function() {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function(t, e) {
        switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, e), this._context.lineTo(t, e);
            else {
              var n = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(n, this._y), this._context.lineTo(n, e);
            }
        }
        (this._x = t), (this._y = e);
      }
    };
    function Dc() {
      this._ = null;
    }
    function Fc(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function Yc(t, e) {
      var n = e,
        i = e.R,
        r = n.U;
      r ? (r.L === n ? (r.L = i) : (r.R = i)) : (t._ = i),
        (i.U = r),
        (n.U = i),
        (n.R = i.L),
        n.R && (n.R.U = n),
        (i.L = n);
    }
    function Oc(t, e) {
      var n = e,
        i = e.L,
        r = n.U;
      r ? (r.L === n ? (r.L = i) : (r.R = i)) : (t._ = i),
        (i.U = r),
        (n.U = i),
        (n.L = i.R),
        n.L && (n.L.U = n),
        (i.R = n);
    }
    function zc(t) {
      for (; t.L; ) t = t.L;
      return t;
    }
    Dc.prototype = {
      constructor: Dc,
      insert: function(t, e) {
        var n, i, r;
        if (t) {
          if (((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)) {
            for (t = t.R; t.L; ) t = t.L;
            t.L = e;
          } else t.R = e;
          n = t;
        } else
          this._
            ? ((t = zc(this._)),
              (e.P = null),
              (e.N = t),
              (t.P = t.L = e),
              (n = t))
            : ((e.P = e.N = null), (this._ = e), (n = null));
        for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C; )
          n === (i = n.U).L
            ? (r = i.R) && r.C
              ? ((n.C = r.C = !1), (i.C = !0), (t = i))
              : (t === n.R && (Yc(this, n), (n = (t = n).U)),
                (n.C = !1),
                (i.C = !0),
                Oc(this, i))
            : (r = i.L) && r.C
              ? ((n.C = r.C = !1), (i.C = !0), (t = i))
              : (t === n.L && (Oc(this, n), (n = (t = n).U)),
                (n.C = !1),
                (i.C = !0),
                Yc(this, i)),
            (n = t.U);
        this._.C = !1;
      },
      remove: function(t) {
        t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
        var e,
          n,
          i,
          r = t.U,
          a = t.L,
          o = t.R;
        if (
          ((n = a ? (o ? zc(o) : a) : o),
          r ? (r.L === t ? (r.L = n) : (r.R = n)) : (this._ = n),
          a && o
            ? ((i = n.C),
              (n.C = t.C),
              (n.L = a),
              (a.U = n),
              n !== o
                ? ((r = n.U),
                  (n.U = t.U),
                  (t = n.R),
                  (r.L = t),
                  (n.R = o),
                  (o.U = n))
                : ((n.U = r), (r = n), (t = n.R)))
            : ((i = t.C), (t = n)),
          t && (t.U = r),
          !i)
        )
          if (t && t.C) t.C = !1;
          else {
            do {
              if (t === this._) break;
              if (t === r.L) {
                if (
                  ((e = r.R).C &&
                    ((e.C = !1), (r.C = !0), Yc(this, r), (e = r.R)),
                  (e.L && e.L.C) || (e.R && e.R.C))
                ) {
                  (e.R && e.R.C) ||
                    ((e.L.C = !1), (e.C = !0), Oc(this, e), (e = r.R)),
                    (e.C = r.C),
                    (r.C = e.R.C = !1),
                    Yc(this, r),
                    (t = this._);
                  break;
                }
              } else if (
                ((e = r.L).C &&
                  ((e.C = !1), (r.C = !0), Oc(this, r), (e = r.L)),
                (e.L && e.L.C) || (e.R && e.R.C))
              ) {
                (e.L && e.L.C) ||
                  ((e.R.C = !1), (e.C = !0), Yc(this, e), (e = r.L)),
                  (e.C = r.C),
                  (r.C = e.L.C = !1),
                  Oc(this, r),
                  (t = this._);
                break;
              }
              (e.C = !0), (t = r), (r = r.U);
            } while (!t.C);
            t && (t.C = !1);
          }
      }
    };
    var jc = Dc;
    function $c(t, e, n, i) {
      var r = [null, null],
        a = hf.push(r) - 1;
      return (
        (r.left = t),
        (r.right = e),
        n && Hc(r, t, e, n),
        i && Hc(r, e, t, i),
        sf[t.index].halfedges.push(a),
        sf[e.index].halfedges.push(a),
        r
      );
    }
    function Bc(t, e, n) {
      var i = [e, n];
      return (i.left = t), i;
    }
    function Hc(t, e, n, i) {
      t[0] || t[1]
        ? t.left === n
          ? (t[1] = i)
          : (t[0] = i)
        : ((t[0] = i), (t.left = e), (t.right = n));
    }
    function Ic(t, e, n, i, r) {
      var a,
        o = t[0],
        c = t[1],
        f = o[0],
        s = o[1],
        u = 0,
        h = 1,
        l = c[0] - f,
        d = c[1] - s;
      if (((a = e - f), l || !(a > 0))) {
        if (((a /= l), l < 0)) {
          if (a < u) return;
          a < h && (h = a);
        } else if (l > 0) {
          if (a > h) return;
          a > u && (u = a);
        }
        if (((a = i - f), l || !(a < 0))) {
          if (((a /= l), l < 0)) {
            if (a > h) return;
            a > u && (u = a);
          } else if (l > 0) {
            if (a < u) return;
            a < h && (h = a);
          }
          if (((a = n - s), d || !(a > 0))) {
            if (((a /= d), d < 0)) {
              if (a < u) return;
              a < h && (h = a);
            } else if (d > 0) {
              if (a > h) return;
              a > u && (u = a);
            }
            if (((a = r - s), d || !(a < 0))) {
              if (((a /= d), d < 0)) {
                if (a > h) return;
                a > u && (u = a);
              } else if (d > 0) {
                if (a < u) return;
                a < h && (h = a);
              }
              return (
                !(u > 0 || h < 1) ||
                (u > 0 && (t[0] = [f + u * l, s + u * d]),
                h < 1 && (t[1] = [f + h * l, s + h * d]),
                !0)
              );
            }
          }
        }
      }
    }
    function Vc(t, e, n, i, r) {
      var a = t[1];
      if (a) return !0;
      var o,
        c,
        f = t[0],
        s = t.left,
        u = t.right,
        h = s[0],
        l = s[1],
        d = u[0],
        _ = u[1],
        p = (h + d) / 2,
        b = (l + _) / 2;
      if (_ === l) {
        if (p < e || p >= i) return;
        if (h > d) {
          if (f) {
            if (f[1] >= r) return;
          } else f = [p, n];
          a = [p, r];
        } else {
          if (f) {
            if (f[1] < n) return;
          } else f = [p, r];
          a = [p, n];
        }
      } else if (((c = b - (o = (h - d) / (_ - l)) * p), o < -1 || o > 1))
        if (h > d) {
          if (f) {
            if (f[1] >= r) return;
          } else f = [(n - c) / o, n];
          a = [(r - c) / o, r];
        } else {
          if (f) {
            if (f[1] < n) return;
          } else f = [(r - c) / o, r];
          a = [(n - c) / o, n];
        }
      else if (l < _) {
        if (f) {
          if (f[0] >= i) return;
        } else f = [e, o * e + c];
        a = [i, o * i + c];
      } else {
        if (f) {
          if (f[0] < e) return;
        } else f = [i, o * i + c];
        a = [e, o * e + c];
      }
      return (t[0] = f), (t[1] = a), !0;
    }
    function Xc(t, e) {
      var n = t.site,
        i = e.left,
        r = e.right;
      return (
        n === r && ((r = i), (i = n)),
        r
          ? Math.atan2(r[1] - i[1], r[0] - i[0])
          : (n === i ? ((i = e[1]), (r = e[0])) : ((i = e[0]), (r = e[1])),
            Math.atan2(i[0] - r[0], r[1] - i[1]))
      );
    }
    function Zc(t, e) {
      return e[+(e.left !== t.site)];
    }
    function Wc(t, e) {
      return e[+(e.left === t.site)];
    }
    var Qc,
      Jc = [];
    function Gc(t) {
      var e = t.P,
        n = t.N;
      if (e && n) {
        var i = e.site,
          r = t.site,
          a = n.site;
        if (i !== a) {
          var o = r[0],
            c = r[1],
            f = i[0] - o,
            s = i[1] - c,
            u = a[0] - o,
            h = a[1] - c,
            l = 2 * (f * h - s * u);
          if (!(l >= -df)) {
            var d = f * f + s * s,
              _ = u * u + h * h,
              p = (h * d - s * _) / l,
              b = (f * _ - u * d) / l,
              v =
                Jc.pop() ||
                new function() {
                  Fc(this),
                    (this.x = this.y = this.arc = this.site = this.cy = null);
                }();
            (v.arc = t),
              (v.site = r),
              (v.x = p + o),
              (v.y = (v.cy = b + c) + Math.sqrt(p * p + b * b)),
              (t.circle = v);
            for (var y = null, g = uf._; g; )
              if (v.y < g.y || (v.y === g.y && v.x <= g.x)) {
                if (!g.L) {
                  y = g.P;
                  break;
                }
                g = g.L;
              } else {
                if (!g.R) {
                  y = g;
                  break;
                }
                g = g.R;
              }
            uf.insert(y, v), y || (Qc = v);
          }
        }
      }
    }
    function Kc(t) {
      var e = t.circle;
      e &&
        (e.P || (Qc = e.N), uf.remove(e), Jc.push(e), Fc(e), (t.circle = null));
    }
    var tf = [];
    function ef(t) {
      var e =
        tf.pop() ||
        new function() {
          Fc(this), (this.edge = this.site = this.circle = null);
        }();
      return (e.site = t), e;
    }
    function nf(t) {
      Kc(t), ff.remove(t), tf.push(t), Fc(t);
    }
    function rf(t) {
      var e = t.circle,
        n = e.x,
        i = e.cy,
        r = [n, i],
        a = t.P,
        o = t.N,
        c = [t];
      nf(t);
      for (
        var f = a;
        f.circle &&
        Math.abs(n - f.circle.x) < lf &&
        Math.abs(i - f.circle.cy) < lf;

      )
        (a = f.P), c.unshift(f), nf(f), (f = a);
      c.unshift(f), Kc(f);
      for (
        var s = o;
        s.circle &&
        Math.abs(n - s.circle.x) < lf &&
        Math.abs(i - s.circle.cy) < lf;

      )
        (o = s.N), c.push(s), nf(s), (s = o);
      c.push(s), Kc(s);
      var u,
        h = c.length;
      for (u = 1; u < h; ++u)
        (s = c[u]), (f = c[u - 1]), Hc(s.edge, f.site, s.site, r);
      (f = c[0]),
        ((s = c[h - 1]).edge = $c(f.site, s.site, null, r)),
        Gc(f),
        Gc(s);
    }
    function af(t) {
      for (var e, n, i, r, a = t[0], o = t[1], c = ff._; c; )
        if ((i = of(c, o) - a) > lf) c = c.L;
        else {
          if (!((r = a - cf(c, o)) > lf)) {
            i > -lf
              ? ((e = c.P), (n = c))
              : r > -lf
                ? ((e = c), (n = c.N))
                : (e = n = c);
            break;
          }
          if (!c.R) {
            e = c;
            break;
          }
          c = c.R;
        }
      !(function(t) {
        sf[t.index] = { site: t, halfedges: [] };
      })(t);
      var f = ef(t);
      if ((ff.insert(e, f), e || n)) {
        if (e === n)
          return (
            Kc(e),
            (n = ef(e.site)),
            ff.insert(f, n),
            (f.edge = n.edge = $c(e.site, f.site)),
            Gc(e),
            void Gc(n)
          );
        if (n) {
          Kc(e), Kc(n);
          var s = e.site,
            u = s[0],
            h = s[1],
            l = t[0] - u,
            d = t[1] - h,
            _ = n.site,
            p = _[0] - u,
            b = _[1] - h,
            v = 2 * (l * b - d * p),
            y = l * l + d * d,
            g = p * p + b * b,
            x = [(b * y - d * g) / v + u, (l * g - p * y) / v + h];
          Hc(n.edge, s, _, x),
            (f.edge = $c(s, t, null, x)),
            (n.edge = $c(t, _, null, x)),
            Gc(e),
            Gc(n);
        } else f.edge = $c(e.site, f.site);
      }
    }
    function of(t, e) {
      var n = t.site,
        i = n[0],
        r = n[1],
        a = r - e;
      if (!a) return i;
      var o = t.P;
      if (!o) return -1 / 0;
      var c = (n = o.site)[0],
        f = n[1],
        s = f - e;
      if (!s) return c;
      var u = c - i,
        h = 1 / a - 1 / s,
        l = u / s;
      return h
        ? (-l +
            Math.sqrt(
              l * l - 2 * h * ((u * u) / (-2 * s) - f + s / 2 + r - a / 2)
            )) /
            h +
            i
        : (i + c) / 2;
    }
    function cf(t, e) {
      var n = t.N;
      if (n) return of(n, e);
      var i = t.site;
      return i[1] === e ? i[0] : 1 / 0;
    }
    var ff,
      sf,
      uf,
      hf,
      lf = 1e-6,
      df = 1e-12;
    function _f(t, e, n) {
      return (t[0] - n[0]) * (e[1] - t[1]) - (t[0] - e[0]) * (n[1] - t[1]);
    }
    function pf(t, e) {
      return e[1] - t[1] || e[0] - t[0];
    }
    function bf(t, e) {
      var n,
        i,
        r,
        a = t.sort(pf).pop();
      for (hf = [], sf = new Array(t.length), ff = new jc(), uf = new jc(); ; )
        if (((r = Qc), a && (!r || a[1] < r.y || (a[1] === r.y && a[0] < r.x))))
          (a[0] === n && a[1] === i) || (af(a), (n = a[0]), (i = a[1])),
            (a = t.pop());
        else {
          if (!r) break;
          rf(r.arc);
        }
      if (
        ((function() {
          for (var t, e, n, i, r = 0, a = sf.length; r < a; ++r)
            if ((t = sf[r]) && (i = (e = t.halfedges).length)) {
              var o = new Array(i),
                c = new Array(i);
              for (n = 0; n < i; ++n) (o[n] = n), (c[n] = Xc(t, hf[e[n]]));
              for (
                o.sort(function(t, e) {
                  return c[e] - c[t];
                }),
                  n = 0;
                n < i;
                ++n
              )
                c[n] = e[o[n]];
              for (n = 0; n < i; ++n) e[n] = c[n];
            }
        })(),
        e)
      ) {
        var o = +e[0][0],
          c = +e[0][1],
          f = +e[1][0],
          s = +e[1][1];
        !(function(t, e, n, i) {
          for (var r, a = hf.length; a--; )
            (Vc((r = hf[a]), t, e, n, i) &&
              Ic(r, t, e, n, i) &&
              (Math.abs(r[0][0] - r[1][0]) > lf ||
                Math.abs(r[0][1] - r[1][1]) > lf)) ||
              delete hf[a];
        })(o, c, f, s),
          (function(t, e, n, i) {
            var r,
              a,
              o,
              c,
              f,
              s,
              u,
              h,
              l,
              d,
              _,
              p,
              b = sf.length,
              v = !0;
            for (r = 0; r < b; ++r)
              if ((a = sf[r])) {
                for (o = a.site, c = (f = a.halfedges).length; c--; )
                  hf[f[c]] || f.splice(c, 1);
                for (c = 0, s = f.length; c < s; )
                  (_ = (d = Wc(a, hf[f[c]]))[0]),
                    (p = d[1]),
                    (h = (u = Zc(a, hf[f[++c % s]]))[0]),
                    (l = u[1]),
                    (Math.abs(_ - h) > lf || Math.abs(p - l) > lf) &&
                      (f.splice(
                        c,
                        0,
                        hf.push(
                          Bc(
                            o,
                            d,
                            Math.abs(_ - t) < lf && i - p > lf
                              ? [t, Math.abs(h - t) < lf ? l : i]
                              : Math.abs(p - i) < lf && n - _ > lf
                                ? [Math.abs(l - i) < lf ? h : n, i]
                                : Math.abs(_ - n) < lf && p - e > lf
                                  ? [n, Math.abs(h - n) < lf ? l : e]
                                  : Math.abs(p - e) < lf && _ - t > lf
                                    ? [Math.abs(l - e) < lf ? h : t, e]
                                    : null
                          )
                        ) - 1
                      ),
                      ++s);
                s && (v = !1);
              }
            if (v) {
              var y,
                g,
                x,
                m = 1 / 0;
              for (r = 0, v = null; r < b; ++r)
                (a = sf[r]) &&
                  (x = (y = (o = a.site)[0] - t) * y + (g = o[1] - e) * g) <
                    m &&
                  ((m = x), (v = a));
              if (v) {
                var w = [t, e],
                  M = [t, i],
                  A = [n, i],
                  k = [n, e];
                v.halfedges.push(
                  hf.push(Bc((o = v.site), w, M)) - 1,
                  hf.push(Bc(o, M, A)) - 1,
                  hf.push(Bc(o, A, k)) - 1,
                  hf.push(Bc(o, k, w)) - 1
                );
              }
            }
            for (r = 0; r < b; ++r)
              (a = sf[r]) && (a.halfedges.length || delete sf[r]);
          })(o, c, f, s);
      }
      (this.edges = hf), (this.cells = sf), (ff = uf = hf = sf = null);
    }
    bf.prototype = {
      constructor: bf,
      polygons: function() {
        var t = this.edges;
        return this.cells.map(function(e) {
          var n = e.halfedges.map(function(n) {
            return Zc(e, t[n]);
          });
          return (n.data = e.site.data), n;
        });
      },
      triangles: function() {
        var t = [],
          e = this.edges;
        return (
          this.cells.forEach(function(n, i) {
            if ((a = (r = n.halfedges).length))
              for (
                var r,
                  a,
                  o,
                  c = n.site,
                  f = -1,
                  s = e[r[a - 1]],
                  u = s.left === c ? s.right : s.left;
                ++f < a;

              )
                (o = u),
                  (u = (s = e[r[f]]).left === c ? s.right : s.left),
                  o &&
                    u &&
                    i < o.index &&
                    i < u.index &&
                    _f(c, o, u) < 0 &&
                    t.push([c.data, o.data, u.data]);
          }),
          t
        );
      },
      links: function() {
        return this.edges
          .filter(function(t) {
            return t.right;
          })
          .map(function(t) {
            return { source: t.left.data, target: t.right.data };
          });
      },
      find: function(t, e, n) {
        for (
          var i, r, a = this, o = a._found || 0, c = a.cells.length;
          !(r = a.cells[o]);

        )
          if (++o >= c) return null;
        var f = t - r.site[0],
          s = e - r.site[1],
          u = f * f + s * s;
        do {
          (r = a.cells[(i = o)]),
            (o = null),
            r.halfedges.forEach(function(n) {
              var i = a.edges[n],
                c = i.left;
              if ((c !== r.site && c) || (c = i.right)) {
                var f = t - c[0],
                  s = e - c[1],
                  h = f * f + s * s;
                h < u && ((u = h), (o = c.index));
              }
            });
        } while (null !== o);
        return (a._found = i), null == n || u <= n * n ? r.site : null;
      }
    };
    function vf(t, e, n) {
      (this.k = t), (this.x = e), (this.y = n);
    }
    vf.prototype = {
      constructor: vf,
      scale: function(t) {
        return 1 === t ? this : new vf(this.k * t, this.x, this.y);
      },
      translate: function(t, e) {
        return (0 === t) & (0 === e)
          ? this
          : new vf(this.k, this.x + this.k * t, this.y + this.k * e);
      },
      apply: function(t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
      },
      applyX: function(t) {
        return t * this.k + this.x;
      },
      applyY: function(t) {
        return t * this.k + this.y;
      },
      invert: function(t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
      },
      invertX: function(t) {
        return (t - this.x) / this.k;
      },
      invertY: function(t) {
        return (t - this.y) / this.k;
      },
      rescaleX: function(t) {
        return t.copy().domain(
          t
            .range()
            .map(this.invertX, this)
            .map(t.invert, t)
        );
      },
      rescaleY: function(t) {
        return t.copy().domain(
          t
            .range()
            .map(this.invertY, this)
            .map(t.invert, t)
        );
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    new vf(1, 0, 0);
    vf.prototype;
    class yf {
      constructor(t, e) {
        (this.elem = t),
          (this.maxValue = e.maxValue),
          (this.size = e.size),
          (this.center = e.size / 2),
          (this.radius = e.size / 2 - e.stroke),
          (this.stroke = e.stroke),
          (this.startAngle = -yf.radians(150)),
          (this.onValueChange = e.onValueChange),
          this.renderInitial(),
          this.setValue(e.value),
          this.addEventsListeners();
      }
      renderInitial() {
        (this.svg = st(this.elem)
          .append("svg")
          .attr("width", this.size + "px")
          .attr("height", this.size + "px")
          .attr("draggable", "false")),
          this.svg
            .append("defs")
            .html(
              '<filter x="-3.9%" y="-2.8%" width="107.9%" height="107.9%" filterUnits="objectBoundingBox" id="filter-2">\n        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n        <feColorMatrix values="0 0 0 0 0.524208121   0 0 0 0 0.475951723   0 0 0 0 0.279116418  0 0 0 0.446388134 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>\n      </filter>'
            ),
          this.svg
            .append("circle")
            .attr("fill", "none")
            .attr("cx", this.center)
            .attr("cy", this.center)
            .attr("r", this.radius)
            .attr("stroke", "#333")
            .attr("stroke-width", 2 * this.stroke);
        const t = ac()
          .innerRadius(this.radius)
          .outerRadius(this.radius + this.stroke / 2)
          .startAngle(this.startAngle)
          .endAngle(this.angle);
        (this.sector = this.svg
          .append("path")
          .attr("fill", "none")
          .attr("stroke", "#F5A623")
          .attr("stroke-width", this.stroke)
          .attr("transform", `translate(${this.center}, ${this.center})`)
          .attr("d", t)),
          this.svg
            .append("circle")
            .attr("fill", "none")
            .attr("cx", this.center)
            .attr("cy", this.center)
            .attr("r", this.radius + this.stroke)
            .attr("stroke", "#fff")
            .attr("stroke-width", 2 * this.stroke)
            .attr("stroke-dasharray", "4,1");
        const e = ac()
          .innerRadius(this.radius)
          .outerRadius(this.radius + this.stroke)
          .startAngle(this.startAngle)
          .endAngle(this.startAngle - 2 * (Math.PI + this.startAngle));
        this.svg
          .append("path")
          .attr("fill", "white")
          .attr(
            "transform",
            `translate(${this.radius + this.stroke}, ${this.radius +
              this.stroke})`
          )
          .attr("d", e),
          this.svg
            .append("circle")
            .attr("fill", "white")
            .attr("cx", this.center)
            .attr("cy", this.center)
            .attr("r", this.radius)
            .attr("filter", "url(#filter-2)"),
          (this.circle = this.svg.append("g")),
          this.circle
            .append("circle")
            .attr("fill", "white")
            .attr("cx", this.center)
            .attr("cy", this.center)
            .attr("r", this.radius),
          this.circle
            .append("path")
            .attr(
              "d",
              "M0.311431,5.943579 L5.036156,0.590855 C5.371306,0.211158 5.527735,0.113005 5.715788,0.048431 C5.903841,-0.016144 6.096159,-0.016144 6.284212,0.048431 C6.472265,0.113005 6.628694,0.211158 6.963844,0.590855 L11.688569,5.943579 C12.10381,6.414014 12.10381,7.176739 11.688569,7.647174 C11.489162,7.873085 11.21871,8 10.936707,8 L1.063293,8 C0.476053,8 0,7.460672 0,6.795376 C0,6.47589 0.112025,6.169489 0.311431,5.943579 Z"
            )
            .attr(
              "transform",
              `translate(${this.radius + this.stroke - 6}, ${this.stroke})`
            ),
          (this.valueText = this.svg
            .append("text")
            .attr("fill", "#333")
            .attr("font-size", "66px")
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .attr("class", "circle-control__value-text")
            .attr("x", this.size / 2)
            .attr("y", this.size / 2 + this.size / 10));
      }
      render() {
        const t = ac()
          .innerRadius(this.radius)
          .outerRadius(this.radius + this.stroke / 2)
          .startAngle(this.startAngle - 0.5)
          .endAngle(this.angle - 0.15);
        this.sector.attr("d", t),
          this.circle.attr("transform", () => {
            var t = this.circle.node(),
              e = t.getBBox().x + t.getBBox().width / 2,
              n = t.getBBox().y + t.getBBox().height / 2;
            return `rotate(${yf.degrees(this.angle)}, ${e}, ${n})`;
          });
        const e = this.getValue();
        this.valueText.text(e), this.onValueChange(e);
      }
      addEventsListeners() {
        const t = document.querySelector(this.elem);
        t.addEventListener("mousemove", t => {
          1 == t.buttons && this.click(t.offsetX, t.offsetY);
        }),
          t.addEventListener("click", t => {
            this.click(t.offsetX, t.offsetY);
          });
      }
      click(t, e) {
        (this.clickX = t),
          (this.clickY = e),
          (this.angle = this.calcClickAngle()),
          this.render();
      }
      getValue() {
        let t = Math.floor(
          ((this.angle - this.startAngle) / (2 * -this.startAngle)) *
            (this.maxValue + 1)
        );
        return (
          t < 0 && (t = 0),
          t > this.maxValue && (t = this.maxValue),
          t > 0 ? "+" + t : t
        );
      }
      setValue(t) {
        (this.angle =
          (2 * -this.startAngle * t) / (this.maxValue + 1) + this.startAngle),
          this.render();
      }
      calcClickAngle() {
        const t = this.clickX,
          e = this.clickY,
          n = Math.hypot(t - this.center, e - this.center);
        let i = Math.asin(Math.abs(this.center - t) / n);
        return (
          e > this.center && (i = Math.PI - i),
          t < this.center && (i *= -1),
          i < this.startAngle - 0.08 && (i = this.startAngle - 0.08),
          i > 0.08 - this.startAngle && (i = 0.08 - this.startAngle),
          i
        );
      }
      static degrees(t) {
        return (180 * t) / Math.PI;
      }
      static radians(t) {
        return (t * Math.PI) / 180;
      }
    }
    const gf = document.querySelector(".popup-container"),
      xf = document.querySelector(".overlay_popup");
    function mf(t, e) {
      const n = e.getBoundingClientRect(),
        i = (n.right - n.left) / t.clientWidth;
      (t.style.left = n.left + "px"),
        (t.style.top = n.top + "px"),
        (t.style.transform = `scale(${i}`),
        togglePopup();
    }
    xf.addEventListener("click", t => {
      t.target == xf && togglePopup();
    }),
      (window.togglePopup = () => {
        setTimeout(() => {
          const t = document.querySelector(".popup");
          t &&
            ((t.style.transition =
              "all .5s cubic-bezier(0.165, 0.84, 0.44, 1)"),
            t.classList.toggle("popup_opened")),
            document.body.classList.toggle("popup-opened");
        }, 10);
      });
    class wf {
      constructor(t, e) {
        (this.scrollElem = document.querySelector(t)),
          (this.controls = document.querySelectorAll(e)),
          (this.controlLeft = document.querySelector(e + ".control_left")),
          (this.controlRight = document.querySelector(e + ".control_right")),
          this.addEventListeners(),
          this.refresh();
      }
      addEventListeners() {
        this.controls.forEach(t => {
          t.addEventListener("click", () => {
            let e = this.scrollElem.scrollLeft,
              n = 0,
              i = this.getScrollBy();
            t.classList.contains("control_left") && (i *= -1);
            const r = () => {
              (n += 5),
                (this.scrollElem.scrollLeft = wf.easeInOutQuad(n, e, i, 250)),
                n < 250 && setTimeout(r, 5);
            };
            r();
          });
        }),
          this.scrollElem.addEventListener("scroll", t => {
            this.refresh();
          });
      }
      refresh() {
        this.controlLeft.classList.remove("disabled"),
          this.controlRight.classList.remove("disabled"),
          0 == this.scrollElem.scrollLeft &&
            this.controlLeft.classList.add("disabled"),
          this.scrollElem.scrollWidth - this.scrollElem.scrollLeft <=
            this.scrollElem.clientWidth &&
            this.controlRight.classList.add("disabled");
      }
      static easeInOutQuad(t, e, n, i) {
        return (t /= i / 2) < 1
          ? (n / 2) * t * t + e
          : (-n / 2) * (--t * (t - 2) - 1) + e;
      }
      getScrollBy() {
        return this.scrollElem.classList.contains("slider_with-sections") &&
          window.innerWidth > 1365
          ? 648
          : 215;
      }
    }
    window.onload = () => {
      o(),
        document.addEventListener("scroll", t => {
          window.scrollY > 7
            ? document.body.classList.add("scrolled")
            : document.body.classList.remove("scrolled");
        });
      const t = document.querySelector(".header__menu");
      t.querySelector(".menu__hamburger").addEventListener("click", () => {
        t.classList.toggle("menu_opened"),
          document.body.classList.toggle("header-menu-opened");
      }),
        document.querySelectorAll(".scroll-tip-wrapper").forEach(t => {
          t.addEventListener("scroll", t => {
            t.target.querySelector(".slider__tip-wrapper").style.opacity = 0;
          });
        });
      const e = new wf(
        ".favorite-devices .slider",
        ".favorite-devices .block__control"
      );
      new wf(
        ".favorite-scenarios .slider",
        ".favorite-scenarios .block__control"
      );
      document.querySelectorAll(".device").forEach(t => {
        t.addEventListener("click", () => {
          !(function(t) {
            const e = t.dataset.title,
              n = t.dataset.subtitle,
              i = t.dataset.type;
            if ("temperature" == i) {
              gf.innerHTML = `<div class="popup device-popup device-popup_temperature">\n        <div class="device-popup__inner">\n            <div class="device-popup__title-wrap">\n                <div class="device-popup__title">${e}\n                    <div class="device-popup__subtitle">${n}</div>\n                </div>\n                <div class="device-popup__info">\n                    <span class="device-popup__value">+23</span>\n                    <span class="device-popup__icon icon icon_temperature"></span>\n                </div>\n            </div>\n            <div class="device-popup__buttons-wrapper">\n                <button class="button button_highlight device-popup__manual-button">Вручную</button>\n                <button class="button device-popup__preset-button" data-preset="-10">Холодно</button>\n                <button class="button device-popup__preset-button" data-preset="10">Тепло</button>\n                <button class="button device-popup__preset-button" data-preset="20">Жарко</button>\n            </div>\n            <div class="device-popup__controls-wrapper">\n                <div class="device-popup__control range-control range-control_temperature">\n                    <div class="range-control__fill"></div>\n                    <div class="range-control__bound range-control__bound_min">–10</div>\n                    <input type="range" class="range-control__input"\n                           value="23" min="-10" max="30" step="0.01" />\n                    <div class="range-control__bound range-control__bound_max">+30</div>\n                </div>\n            </div>\n        </div>\n        <div class="device-popup__modal-buttons-wrapper">\n            <button class="button button_highlight" onclick="togglePopup()">Применить</button>\n            <button class="button" onclick="togglePopup()">Закрыть</button>\n        </div>\n    </div>`;
              const i = document.querySelector(".device-popup");
              new c(i), mf(i, t);
            } else if ("light" == i) {
              gf.innerHTML = `<div class="popup device-popup device-popup_light">\n        <div class="device-popup__inner">\n            <div class="device-popup__title-wrap">\n                <div class="device-popup__title">${e}\n                    <div class="device-popup__subtitle">${n}</div>\n                </div>\n                <div class="device-popup__info">\n                    <span class="device-popup__icon icon icon_sun"></span>\n                </div>\n            </div>\n            <div class="device-popup__buttons-wrapper">\n                <button class="button button_highlight device-popup__manual-button">Вручную</button>\n                <button class="button device-popup__preset-button" data-preset="10">Дневной свет</button>\n                <button class="button device-popup__preset-button" data-preset="30">Вечерний свет</button>\n                <button class="button device-popup__preset-button" data-preset="20">Рассвет</button>\n            </div>\n            <div class="device-popup__controls-wrapper">\n                <div class="device-popup__control range-control range-control_light">\n                    <div class="range-control__fill"></div>\n                    <div class="range-control__bound range-control__bound_icon range-control__bound_min">\n                      <span class="icon icon_sun-min"></span>\n                    </div>\n                    <input type="range" class="range-control__input"\n                           value="23" min="0" max="30" step="0.01" />\n                    <div class="range-control__bound range-control__bound_icon range-control__bound_max">\n                      <span class="icon icon_sun-max"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="device-popup__modal-buttons-wrapper">\n            <button class="button button_highlight" onclick="togglePopup()">Применить</button>\n            <button class="button" onclick="togglePopup()">Закрыть</button>\n        </div>\n    </div>`;
              const i = document.querySelector(".device-popup");
              new c(i), mf(i, t);
            } else if ("floor" == i) {
              gf.innerHTML = `<div class="popup device-popup device-popup_floor">\n        <div class="device-popup__inner">\n            <div class="device-popup__title-wrap">\n                <div class="device-popup__title">${e}\n                    <div class="device-popup__subtitle">${n}</div>\n                </div>\n                <div class="device-popup__info">\n                    <span class="device-popup__value">+23</span>\n                    <span class="device-popup__icon icon icon_temperature icon_highlight"></span>\n                </div>\n            </div>\n            <div class="device-popup__controls-wrapper device-popup__controls-wrapper_circle-control">\n                <div class="device-popup__control circle-control"></div>\n            </div>\n        </div>\n        <div class="device-popup__modal-buttons-wrapper">\n            <button class="button button_highlight" onclick="togglePopup()">Применить</button>\n            <button class="button" onclick="togglePopup()">Закрыть</button>\n        </div>\n    </div>`;
              const i = document.querySelector(".device-popup"),
                r = i.querySelector(".device-popup__value");
              new yf(".device-popup__control.circle-control", {
                size: 220,
                stroke: 24,
                value: 23,
                maxValue: 26,
                onValueChange: t => {
                  r.innerHTML = t;
                }
              }),
                mf(i, t);
            }
          })(t);
        });
      }),
        new class {
          constructor(t, e, n) {
            (this.items = document.querySelectorAll(t)),
              (this.filterButtons = document.querySelectorAll(e)),
              (this.onAfterFilter = n),
              this.addEventListeners();
          }
          addEventListeners() {
            this.filterButtons.forEach(t => {
              t.addEventListener("click", t => {
                this.filter(t.target.dataset.filter),
                  this.setActiveButton(t.target);
              });
            });
          }
          filter(t) {
            this.items.forEach(e => {
              "all" == t || e.dataset.filter.split(" ").includes(t)
                ? e.classList.remove("hidden")
                : e.classList.add("hidden");
            }),
              this.onAfterFilter();
          }
          setActiveButton(t) {
            this.filterButtons.forEach(t => {
              t.classList.remove("button_highlight");
            }),
              t.classList.add("button_highlight");
          }
        }(
          ".favorite-devices .device",
          ".favorite-devices .device-filter__button",
          () => {
            setTimeout(() => {
              e.refresh();
            }, 500);
          }
        );
    };
  }
]);
