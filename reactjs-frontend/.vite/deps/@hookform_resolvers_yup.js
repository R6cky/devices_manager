import {
  appendErrors,
  get,
  set
} from "./chunk-B3AVS3EK.js";
import "./chunk-32E4H3EV.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@hookform/resolvers/dist/resolvers.mjs
var s = (e, s2, o3) => {
  if (e && "reportValidity" in e) {
    const r2 = get(o3, s2);
    e.setCustomValidity(r2 && r2.message || ""), e.reportValidity();
  }
};
var o = (t, e) => {
  for (const o3 in e.fields) {
    const r2 = e.fields[o3];
    r2 && r2.ref && "reportValidity" in r2.ref ? s(r2.ref, o3, t) : r2.refs && r2.refs.forEach((e2) => s(e2, o3, t));
  }
};
var r = (s2, r2) => {
  r2.shouldUseNativeValidation && o(s2, r2);
  const f = {};
  for (const o3 in s2) {
    const n = get(r2.fields, o3), a = Object.assign(s2[o3] || {}, { ref: n && n.ref });
    if (i(r2.names || Object.keys(s2), o3)) {
      const s3 = Object.assign({}, get(f, o3));
      set(s3, "root", a), set(f, o3, s3);
    } else set(f, o3, a);
  }
  return f;
};
var i = (t, e) => t.some((t2) => t2.startsWith(e + "."));

// node_modules/@hookform/resolvers/yup/dist/yup.mjs
function o2(o3, n, a) {
  return void 0 === n && (n = {}), void 0 === a && (a = {}), function(s2, i2, c) {
    try {
      return Promise.resolve(function(t, r2) {
        try {
          var u = (n.context && true && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(o3["sync" === a.mode ? "validateSync" : "validate"](s2, Object.assign({ abortEarly: false }, n, { context: i2 }))).then(function(t2) {
            return c.shouldUseNativeValidation && o({}, c), { values: a.raw ? s2 : t2, errors: {} };
          }));
        } catch (e) {
          return r2(e);
        }
        return u && u.then ? u.then(void 0, r2) : u;
      }(0, function(e) {
        if (!e.inner) throw e;
        return { values: {}, errors: r((o4 = e, n2 = !c.shouldUseNativeValidation && "all" === c.criteriaMode, (o4.inner || []).reduce(function(e2, t) {
          if (e2[t.path] || (e2[t.path] = { message: t.message, type: t.type }), n2) {
            var o5 = e2[t.path].types, a2 = o5 && o5[t.type];
            e2[t.path] = appendErrors(t.path, n2, e2, t.type, a2 ? [].concat(a2, t.message) : t.message);
          }
          return e2;
        }, {})), c) };
        var o4, n2;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
export {
  o2 as yupResolver
};
//# sourceMappingURL=@hookform_resolvers_yup.js.map
