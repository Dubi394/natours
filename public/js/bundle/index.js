// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7zAMY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "b8e5beffa3b6ddc5";
module.bundle.HMR_BUNDLE_ID = "94acea904e7fdaa6";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4uyBp":[function(require,module,exports) {
/* eslint-disable */ var _mapboxJs = require("./mapbox.js");
var _loginJs = require("./login.js");
var _singupJs = require("./singup.js");
var _updateSettings = require("./updateSettings");
var _stripe = require("./stripe");
// const { displayMap } = require('./mapbox');
// const { login, logout } = require('./login');
//DOM ELEMENTS
const mapBox = document.getElementById("map");
const loginForm = document.querySelector(".form--login");
const singupForm = document.querySelector(".form--singup");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
const bookBtn = document.getElementById("book-tour");
// DELEGATION
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    (0, _mapboxJs.displayMap)(locations);
}
if (loginForm) loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, _loginJs.login)(email, password);
});
if (singupForm) singupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    (0, _singupJs.singup)(userName, email, password, passwordConfirm);
});
if (logOutBtn) logOutBtn.addEventListener("click", (0, _loginJs.logout));
if (userDataForm) userDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    console.log(form);
    (0, _updateSettings.updateSettings)(form, "data");
});
if (userPasswordForm) userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    console.log(passwordCurrent, password, passwordConfirm);
    await (0, _updateSettings.updateSettings)({
        passwordCurrent,
        password,
        passwordConfirm
    }, "password");
    document.querySelector(".btn--save-password").textContent = "Save Password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
});
if (bookBtn) bookBtn.addEventListener("click", (e)=>{
    e.target.textContent = "Processing...";
    const { tourId  } = e.target.dataset;
    (0, _stripe.bookTour)(tourId);
});

},{"./mapbox.js":"cr3Up","./login.js":"qZEOz","./updateSettings":"28JcJ","./stripe":"hu9K2","./singup.js":"b76pe"}],"cr3Up":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayMap", ()=>displayMap);
const displayMap = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1IjoiZHViaTM5NCIsImEiOiJjbDhseXl6djIwYmJlM3NvYTh4Zm02NXhiIn0.C6ZbzusU9dStSpwybuYLxw";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/dubi394/cl8n810wg003z15mtqpgckiw3",
        scrollZoom: false
    });
    map.on("style.load", ()=>{
        map.setFog({}); // Set the default atmosphere style
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement("div");
        el.className = "marker";
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        // Add Popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map to include current locationsd
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}],"5Birt":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"qZEOz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "logout", ()=>logout);
var _alerts = require("./alerts");
/* eslint-disable */ // import axios from 'axios';
const axios = require("../../node_modules/axios/dist/axios");
const login = async (email, password)=>{
    try {
        const res = await axios({
            method: "POST",
            url: "http://127.0.0.1:3000/api/v1/users/login",
            data: {
                email,
                password
            }
        });
        if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "Logged in successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, _alerts.showAlert)("error", err.response.data.message);
    }
};
const logout = async ()=>{
    try {
        const currentPage = window.location.pathname;
        const res = await axios({
            method: "GET",
            url: "http://127.0.0.1:3000/api/v1/users/logout"
        });
        if (res.data.status === "success") window.location.pathname === "/me" ? location.assign("/") : location.reload(true);
    } catch (err) {
        console.log(err.response);
        (0, _alerts.showAlert)("error", "Error logging out! Try again.");
    }
};

},{"./alerts":"j4hQk","../../node_modules/axios/dist/axios":"03fd0","@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}],"j4hQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideAlert", ()=>hideAlert);
parcelHelpers.export(exports, "showAlert", ()=>showAlert);
const hideAlert = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const showAlert = (type, msg)=>{
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, 5000);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}],"03fd0":[function(require,module,exports) {
/* axios v0.27.2 | (c) 2022 by Matt Zabriskie */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "./index.js");
    /******/ }({
        /***/ "./index.js": /*!******************!*\
  !*** ./index.js ***!
  \******************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__(/*! ./lib/axios */ "./lib/axios.js");
        /***/ },
        /***/ "./lib/adapters/xhr.js": /*!*****************************!*\
  !*** ./lib/adapters/xhr.js ***!
  \*****************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            var settle = __webpack_require__(/*! ./../core/settle */ "./lib/core/settle.js");
            var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./lib/helpers/cookies.js");
            var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./lib/helpers/buildURL.js");
            var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./lib/core/buildFullPath.js");
            var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./lib/helpers/parseHeaders.js");
            var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./lib/helpers/isURLSameOrigin.js");
            var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./lib/defaults/transitional.js");
            var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./lib/core/AxiosError.js");
            var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./lib/cancel/CanceledError.js");
            var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./lib/helpers/parseProtocol.js");
            module1.exports = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                    var requestData = config.data;
                    var requestHeaders = config.headers;
                    var responseType = config.responseType;
                    var onCanceled;
                    function done() {
                        if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
                        if (config.signal) config.signal.removeEventListener("abort", onCanceled);
                    }
                    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) delete requestHeaders["Content-Type"]; // Let the browser set it
                    var request = new XMLHttpRequest();
                    // HTTP basic authentication
                    if (config.auth) {
                        var username = config.auth.username || "";
                        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
                        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
                    }
                    var fullPath = buildFullPath(config.baseURL, config.url);
                    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
                    // Set the request timeout in MS
                    request.timeout = config.timeout;
                    function onloadend() {
                        if (!request) return;
                        // Prepare the response
                        var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                        var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
                        var response = {
                            data: responseData,
                            status: request.status,
                            statusText: request.statusText,
                            headers: responseHeaders,
                            config: config,
                            request: request
                        };
                        settle(function _resolve(value) {
                            resolve(value);
                            done();
                        }, function _reject(err) {
                            reject(err);
                            done();
                        }, response);
                        // Clean up request
                        request = null;
                    }
                    if ("onloadend" in request) // Use onloadend if available
                    request.onloadend = onloadend;
                    else // Listen for ready state to emulate onloadend
                    request.onreadystatechange = function handleLoad() {
                        if (!request || request.readyState !== 4) return;
                        // The request errored out and we didn't get a response, this will be
                        // handled by onerror instead
                        // With one exception: request that using file: protocol, most browsers
                        // will return status as 0 even though it's a successful request
                        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
                        // readystate handler is calling before onerror or ontimeout handlers,
                        // so we should call onloadend on the next 'tick'
                        setTimeout(onloadend);
                    };
                    // Handle browser request cancellation (as opposed to a manual cancellation)
                    request.onabort = function handleAbort() {
                        if (!request) return;
                        reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
                        // Clean up request
                        request = null;
                    };
                    // Handle low level network errors
                    request.onerror = function handleError() {
                        // Real errors are hidden from us by the browser
                        // onerror should only fire if it's a network error
                        reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
                        // Clean up request
                        request = null;
                    };
                    // Handle timeout
                    request.ontimeout = function handleTimeout() {
                        var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
                        var transitional = config.transitional || transitionalDefaults;
                        if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
                        reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
                        // Clean up request
                        request = null;
                    };
                    // Add xsrf header
                    // This is only done if running in a standard browser environment.
                    // Specifically not if we're in a web worker, or react-native.
                    if (utils.isStandardBrowserEnv()) {
                        // Add xsrf header
                        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
                        if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
                    }
                    // Add headers to the request
                    if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
                        delete requestHeaders[key];
                        else // Otherwise add header to the request
                        request.setRequestHeader(key, val);
                    });
                    // Add withCredentials to request if needed
                    if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
                    // Add responseType to request if needed
                    if (responseType && responseType !== "json") request.responseType = config.responseType;
                    // Handle progress if needed
                    if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
                    // Not all browsers support upload events
                    if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
                    if (config.cancelToken || config.signal) {
                        // Handle cancellation
                        // eslint-disable-next-line func-names
                        onCanceled = function(cancel) {
                            if (!request) return;
                            reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
                            request.abort();
                            request = null;
                        };
                        config.cancelToken && config.cancelToken.subscribe(onCanceled);
                        if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
                    }
                    if (!requestData) requestData = null;
                    var protocol = parseProtocol(fullPath);
                    if (protocol && [
                        "http",
                        "https",
                        "file"
                    ].indexOf(protocol) === -1) {
                        reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
                        return;
                    }
                    // Send the request
                    request.send(requestData);
                });
            };
        /***/ },
        /***/ "./lib/axios.js": /*!**********************!*\
  !*** ./lib/axios.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");
            var bind = __webpack_require__(/*! ./helpers/bind */ "./lib/helpers/bind.js");
            var Axios = __webpack_require__(/*! ./core/Axios */ "./lib/core/Axios.js");
            var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./lib/core/mergeConfig.js");
            var defaults = __webpack_require__(/*! ./defaults */ "./lib/defaults/index.js");
            /**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
                var context = new Axios(defaultConfig);
                var instance = bind(Axios.prototype.request, context);
                // Copy axios.prototype to instance
                utils.extend(instance, Axios.prototype, context);
                // Copy context to instance
                utils.extend(instance, context);
                // Factory for creating new instances
                instance.create = function create(instanceConfig) {
                    return createInstance(mergeConfig(defaultConfig, instanceConfig));
                };
                return instance;
            }
            // Create the default instance to be exported
            var axios = createInstance(defaults);
            // Expose Axios class to allow class inheritance
            axios.Axios = Axios;
            // Expose Cancel & CancelToken
            axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./lib/cancel/CanceledError.js");
            axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./lib/cancel/CancelToken.js");
            axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./lib/cancel/isCancel.js");
            axios.VERSION = __webpack_require__(/*! ./env/data */ "./lib/env/data.js").version;
            axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./lib/helpers/toFormData.js");
            // Expose AxiosError class
            axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./lib/core/AxiosError.js");
            // alias for CanceledError for backward compatibility
            axios.Cancel = axios.CanceledError;
            // Expose all/spread
            axios.all = function all(promises) {
                return Promise.all(promises);
            };
            axios.spread = __webpack_require__(/*! ./helpers/spread */ "./lib/helpers/spread.js");
            // Expose isAxiosError
            axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./lib/helpers/isAxiosError.js");
            module1.exports = axios;
            // Allow use of default import syntax in TypeScript
            module1.exports.default = axios;
        /***/ },
        /***/ "./lib/cancel/CancelToken.js": /*!***********************************!*\
  !*** ./lib/cancel/CancelToken.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var CanceledError = __webpack_require__(/*! ./CanceledError */ "./lib/cancel/CanceledError.js");
            /**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
                if (typeof executor !== "function") throw new TypeError("executor must be a function.");
                var resolvePromise;
                this.promise = new Promise(function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                });
                var token = this;
                // eslint-disable-next-line func-names
                this.promise.then(function(cancel) {
                    if (!token._listeners) return;
                    var i;
                    var l = token._listeners.length;
                    for(i = 0; i < l; i++)token._listeners[i](cancel);
                    token._listeners = null;
                });
                // eslint-disable-next-line func-names
                this.promise.then = function(onfulfilled) {
                    var _resolve;
                    // eslint-disable-next-line func-names
                    var promise = new Promise(function(resolve) {
                        token.subscribe(resolve);
                        _resolve = resolve;
                    }).then(onfulfilled);
                    promise.cancel = function reject() {
                        token.unsubscribe(_resolve);
                    };
                    return promise;
                };
                executor(function cancel(message) {
                    if (token.reason) // Cancellation has already been requested
                    return;
                    token.reason = new CanceledError(message);
                    resolvePromise(token.reason);
                });
            }
            /**
 * Throws a `CanceledError` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason) throw this.reason;
            };
            /**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
                if (this.reason) {
                    listener(this.reason);
                    return;
                }
                if (this._listeners) this._listeners.push(listener);
                else this._listeners = [
                    listener
                ];
            };
            /**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
                if (!this._listeners) return;
                var index = this._listeners.indexOf(listener);
                if (index !== -1) this._listeners.splice(index, 1);
            };
            /**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
                var cancel;
                var token = new CancelToken(function executor(c) {
                    cancel = c;
                });
                return {
                    token: token,
                    cancel: cancel
                };
            };
            module1.exports = CancelToken;
        /***/ },
        /***/ "./lib/cancel/CanceledError.js": /*!*************************************!*\
  !*** ./lib/cancel/CanceledError.js ***!
  \*************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./lib/core/AxiosError.js");
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            /**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function CanceledError(message) {
                // eslint-disable-next-line no-eq-null,eqeqeq
                AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
                this.name = "CanceledError";
            }
            utils.inherits(CanceledError, AxiosError, {
                __CANCEL__: true
            });
            module1.exports = CanceledError;
        /***/ },
        /***/ "./lib/cancel/isCancel.js": /*!********************************!*\
  !*** ./lib/cancel/isCancel.js ***!
  \********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = function isCancel(value) {
                return !!(value && value.__CANCEL__);
            };
        /***/ },
        /***/ "./lib/core/Axios.js": /*!***************************!*\
  !*** ./lib/core/Axios.js ***!
  \***************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./lib/helpers/buildURL.js");
            var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./lib/core/InterceptorManager.js");
            var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./lib/core/dispatchRequest.js");
            var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./lib/core/mergeConfig.js");
            var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./lib/core/buildFullPath.js");
            var validator = __webpack_require__(/*! ../helpers/validator */ "./lib/helpers/validator.js");
            var validators = validator.validators;
            /**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new InterceptorManager(),
                    response: new InterceptorManager()
                };
            }
            /**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(configOrUrl, config) {
                /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof configOrUrl === "string") {
                    config = config || {};
                    config.url = configOrUrl;
                } else config = configOrUrl || {};
                config = mergeConfig(this.defaults, config);
                // Set config.method
                if (config.method) config.method = config.method.toLowerCase();
                else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
                else config.method = "get";
                var transitional = config.transitional;
                if (transitional !== undefined) validator.assertOptions(transitional, {
                    silentJSONParsing: validators.transitional(validators.boolean),
                    forcedJSONParsing: validators.transitional(validators.boolean),
                    clarifyTimeoutError: validators.transitional(validators.boolean)
                }, false);
                // filter out skipped interceptors
                var requestInterceptorChain = [];
                var synchronousRequestInterceptors = true;
                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
                    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
                    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
                });
                var responseInterceptorChain = [];
                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
                });
                var promise;
                if (!synchronousRequestInterceptors) {
                    var chain = [
                        dispatchRequest,
                        undefined
                    ];
                    Array.prototype.unshift.apply(chain, requestInterceptorChain);
                    chain = chain.concat(responseInterceptorChain);
                    promise = Promise.resolve(config);
                    while(chain.length)promise = promise.then(chain.shift(), chain.shift());
                    return promise;
                }
                var newConfig = config;
                while(requestInterceptorChain.length){
                    var onFulfilled = requestInterceptorChain.shift();
                    var onRejected = requestInterceptorChain.shift();
                    try {
                        newConfig = onFulfilled(newConfig);
                    } catch (error) {
                        onRejected(error);
                        break;
                    }
                }
                try {
                    promise = dispatchRequest(newConfig);
                } catch (error1) {
                    return Promise.reject(error1);
                }
                while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
                return promise;
            };
            Axios.prototype.getUri = function getUri(config) {
                config = mergeConfig(this.defaults, config);
                var fullPath = buildFullPath(config.baseURL, config.url);
                return buildURL(fullPath, config.params, config.paramsSerializer);
            };
            // Provide aliases for supported request methods
            utils.forEach([
                "delete",
                "get",
                "head",
                "options"
            ], function forEachMethodNoData(method) {
                /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
                    return this.request(mergeConfig(config || {}, {
                        method: method,
                        url: url,
                        data: (config || {}).data
                    }));
                };
            });
            utils.forEach([
                "post",
                "put",
                "patch"
            ], function forEachMethodWithData(method) {
                /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
                    return function httpMethod(url, data, config) {
                        return this.request(mergeConfig(config || {}, {
                            method: method,
                            headers: isForm ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: url,
                            data: data
                        }));
                    };
                }
                Axios.prototype[method] = generateHTTPMethod();
                Axios.prototype[method + "Form"] = generateHTTPMethod(true);
            });
            module1.exports = Axios;
        /***/ },
        /***/ "./lib/core/AxiosError.js": /*!********************************!*\
  !*** ./lib/core/AxiosError.js ***!
  \********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            /**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
                Error.call(this);
                this.message = message;
                this.name = "AxiosError";
                code && (this.code = code);
                config && (this.config = config);
                request && (this.request = request);
                response && (this.response = response);
            }
            utils.inherits(AxiosError, Error, {
                toJSON: function toJSON() {
                    return {
                        // Standard
                        message: this.message,
                        name: this.name,
                        // Microsoft
                        description: this.description,
                        number: this.number,
                        // Mozilla
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        // Axios
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    };
                }
            });
            var prototype = AxiosError.prototype;
            var descriptors = {};
            [
                "ERR_BAD_OPTION_VALUE",
                "ERR_BAD_OPTION",
                "ECONNABORTED",
                "ETIMEDOUT",
                "ERR_NETWORK",
                "ERR_FR_TOO_MANY_REDIRECTS",
                "ERR_DEPRECATED",
                "ERR_BAD_RESPONSE",
                "ERR_BAD_REQUEST",
                "ERR_CANCELED"
            ].forEach(function(code) {
                descriptors[code] = {
                    value: code
                };
            });
            Object.defineProperties(AxiosError, descriptors);
            Object.defineProperty(prototype, "isAxiosError", {
                value: true
            });
            // eslint-disable-next-line func-names
            AxiosError.from = function(error, code, config, request, response, customProps) {
                var axiosError = Object.create(prototype);
                utils.toFlatObject(error, axiosError, function filter(obj) {
                    return obj !== Error.prototype;
                });
                AxiosError.call(axiosError, error.message, code, config, request, response);
                axiosError.name = error.name;
                customProps && Object.assign(axiosError, customProps);
                return axiosError;
            };
            module1.exports = AxiosError;
        /***/ },
        /***/ "./lib/core/InterceptorManager.js": /*!****************************************!*\
  !*** ./lib/core/InterceptorManager.js ***!
  \****************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            function InterceptorManager() {
                this.handlers = [];
            }
            /**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
                this.handlers.push({
                    fulfilled: fulfilled,
                    rejected: rejected,
                    synchronous: options ? options.synchronous : false,
                    runWhen: options ? options.runWhen : null
                });
                return this.handlers.length - 1;
            };
            /**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
                if (this.handlers[id]) this.handlers[id] = null;
            };
            /**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                    if (h !== null) fn(h);
                });
            };
            module1.exports = InterceptorManager;
        /***/ },
        /***/ "./lib/core/buildFullPath.js": /*!***********************************!*\
  !*** ./lib/core/buildFullPath.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./lib/helpers/isAbsoluteURL.js");
            var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./lib/helpers/combineURLs.js");
            /**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module1.exports = function buildFullPath(baseURL, requestedURL) {
                if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
                return requestedURL;
            };
        /***/ },
        /***/ "./lib/core/dispatchRequest.js": /*!*************************************!*\
  !*** ./lib/core/dispatchRequest.js ***!
  \*************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            var transformData = __webpack_require__(/*! ./transformData */ "./lib/core/transformData.js");
            var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./lib/cancel/isCancel.js");
            var defaults = __webpack_require__(/*! ../defaults */ "./lib/defaults/index.js");
            var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./lib/cancel/CanceledError.js");
            /**
 * Throws a `CanceledError` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
                if (config.cancelToken) config.cancelToken.throwIfRequested();
                if (config.signal && config.signal.aborted) throw new CanceledError();
            }
            /**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module1.exports = function dispatchRequest(config) {
                throwIfCancellationRequested(config);
                // Ensure headers exist
                config.headers = config.headers || {};
                // Transform request data
                config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
                // Flatten headers
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
                utils.forEach([
                    "delete",
                    "get",
                    "head",
                    "post",
                    "put",
                    "patch",
                    "common"
                ], function cleanHeaderConfig(method) {
                    delete config.headers[method];
                });
                var adapter = config.adapter || defaults.adapter;
                return adapter(config).then(function onAdapterResolution(response) {
                    throwIfCancellationRequested(config);
                    // Transform response data
                    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
                    return response;
                }, function onAdapterRejection(reason) {
                    if (!isCancel(reason)) {
                        throwIfCancellationRequested(config);
                        // Transform response data
                        if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
                    }
                    return Promise.reject(reason);
                });
            };
        /***/ },
        /***/ "./lib/core/mergeConfig.js": /*!*********************************!*\
  !*** ./lib/core/mergeConfig.js ***!
  \*********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            /**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module1.exports = function mergeConfig(config1, config2) {
                // eslint-disable-next-line no-param-reassign
                config2 = config2 || {};
                var config = {};
                function getMergedValue(target, source) {
                    if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
                    else if (utils.isPlainObject(source)) return utils.merge({}, source);
                    else if (utils.isArray(source)) return source.slice();
                    return source;
                }
                // eslint-disable-next-line consistent-return
                function mergeDeepProperties(prop) {
                    if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
                    else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
                }
                // eslint-disable-next-line consistent-return
                function valueFromConfig2(prop) {
                    if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
                }
                // eslint-disable-next-line consistent-return
                function defaultToConfig2(prop) {
                    if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
                    else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
                }
                // eslint-disable-next-line consistent-return
                function mergeDirectKeys(prop) {
                    if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
                    else if (prop in config1) return getMergedValue(undefined, config1[prop]);
                }
                var mergeMap = {
                    "url": valueFromConfig2,
                    "method": valueFromConfig2,
                    "data": valueFromConfig2,
                    "baseURL": defaultToConfig2,
                    "transformRequest": defaultToConfig2,
                    "transformResponse": defaultToConfig2,
                    "paramsSerializer": defaultToConfig2,
                    "timeout": defaultToConfig2,
                    "timeoutMessage": defaultToConfig2,
                    "withCredentials": defaultToConfig2,
                    "adapter": defaultToConfig2,
                    "responseType": defaultToConfig2,
                    "xsrfCookieName": defaultToConfig2,
                    "xsrfHeaderName": defaultToConfig2,
                    "onUploadProgress": defaultToConfig2,
                    "onDownloadProgress": defaultToConfig2,
                    "decompress": defaultToConfig2,
                    "maxContentLength": defaultToConfig2,
                    "maxBodyLength": defaultToConfig2,
                    "beforeRedirect": defaultToConfig2,
                    "transport": defaultToConfig2,
                    "httpAgent": defaultToConfig2,
                    "httpsAgent": defaultToConfig2,
                    "cancelToken": defaultToConfig2,
                    "socketPath": defaultToConfig2,
                    "responseEncoding": defaultToConfig2,
                    "validateStatus": mergeDirectKeys
                };
                utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
                    var merge = mergeMap[prop] || mergeDeepProperties;
                    var configValue = merge(prop);
                    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
                });
                return config;
            };
        /***/ },
        /***/ "./lib/core/settle.js": /*!****************************!*\
  !*** ./lib/core/settle.js ***!
  \****************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var AxiosError = __webpack_require__(/*! ./AxiosError */ "./lib/core/AxiosError.js");
            /**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module1.exports = function settle(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
                else reject(new AxiosError("Request failed with status code " + response.status, [
                    AxiosError.ERR_BAD_REQUEST,
                    AxiosError.ERR_BAD_RESPONSE
                ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
            };
        /***/ },
        /***/ "./lib/core/transformData.js": /*!***********************************!*\
  !*** ./lib/core/transformData.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            var defaults = __webpack_require__(/*! ../defaults */ "./lib/defaults/index.js");
            /**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module1.exports = function transformData(data, headers, fns) {
                var context = this || defaults;
                /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
                    data = fn.call(context, data, headers);
                });
                return data;
            };
        /***/ },
        /***/ "./lib/defaults/index.js": /*!*******************************!*\
  !*** ./lib/defaults/index.js ***!
  \*******************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./lib/helpers/normalizeHeaderName.js");
            var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./lib/core/AxiosError.js");
            var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./lib/defaults/transitional.js");
            var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./lib/helpers/toFormData.js");
            var DEFAULT_CONTENT_TYPE = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
            }
            function getDefaultAdapter() {
                var adapter;
                if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
                adapter = __webpack_require__(/*! ../adapters/xhr */ "./lib/adapters/xhr.js");
                else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
                adapter = __webpack_require__(/*! ../adapters/http */ "./lib/adapters/xhr.js");
                return adapter;
            }
            function stringifySafely(rawValue, parser, encoder) {
                if (utils.isString(rawValue)) try {
                    (parser || JSON.parse)(rawValue);
                    return utils.trim(rawValue);
                } catch (e) {
                    if (e.name !== "SyntaxError") throw e;
                }
                return (encoder || JSON.stringify)(rawValue);
            }
            var defaults = {
                transitional: transitionalDefaults,
                adapter: getDefaultAdapter(),
                transformRequest: [
                    function transformRequest(data, headers) {
                        normalizeHeaderName(headers, "Accept");
                        normalizeHeaderName(headers, "Content-Type");
                        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
                        if (utils.isArrayBufferView(data)) return data.buffer;
                        if (utils.isURLSearchParams(data)) {
                            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                            return data.toString();
                        }
                        var isObjectPayload = utils.isObject(data);
                        var contentType = headers && headers["Content-Type"];
                        var isFileList;
                        if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
                            var _FormData = this.env && this.env.FormData;
                            return toFormData(isFileList ? {
                                "files[]": data
                            } : data, _FormData && new _FormData());
                        } else if (isObjectPayload || contentType === "application/json") {
                            setContentTypeIfUnset(headers, "application/json");
                            return stringifySafely(data);
                        }
                        return data;
                    }
                ],
                transformResponse: [
                    function transformResponse(data) {
                        var transitional = this.transitional || defaults.transitional;
                        var silentJSONParsing = transitional && transitional.silentJSONParsing;
                        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
                        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                            return JSON.parse(data);
                        } catch (e) {
                            if (strictJSONParsing) {
                                if (e.name === "SyntaxError") throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e;
                            }
                        }
                        return data;
                    }
                ],
                /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: __webpack_require__(/*! ./env/FormData */ "./lib/helpers/null.js")
                },
                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                },
                headers: {
                    common: {
                        "Accept": "application/json, text/plain, */*"
                    }
                }
            };
            utils.forEach([
                "delete",
                "get",
                "head"
            ], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });
            utils.forEach([
                "post",
                "put",
                "patch"
            ], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });
            module1.exports = defaults;
        /***/ },
        /***/ "./lib/defaults/transitional.js": /*!**************************************!*\
  !*** ./lib/defaults/transitional.js ***!
  \**************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = {
                silentJSONParsing: true,
                forcedJSONParsing: true,
                clarifyTimeoutError: false
            };
        /***/ },
        /***/ "./lib/env/data.js": /*!*************************!*\
  !*** ./lib/env/data.js ***!
  \*************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {
                "version": "0.27.2"
            };
        /***/ },
        /***/ "./lib/helpers/bind.js": /*!*****************************!*\
  !*** ./lib/helpers/bind.js ***!
  \*****************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = function bind(fn, thisArg) {
                return function wrap() {
                    var args = new Array(arguments.length);
                    for(var i = 0; i < args.length; i++)args[i] = arguments[i];
                    return fn.apply(thisArg, args);
                };
            };
        /***/ },
        /***/ "./lib/helpers/buildURL.js": /*!*********************************!*\
  !*** ./lib/helpers/buildURL.js ***!
  \*********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            function encode(val) {
                return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            }
            /**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module1.exports = function buildURL(url, params, paramsSerializer) {
                /*eslint no-param-reassign:0*/ if (!params) return url;
                var serializedParams;
                if (paramsSerializer) serializedParams = paramsSerializer(params);
                else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
                else {
                    var parts = [];
                    utils.forEach(params, function serialize(val, key) {
                        if (val === null || typeof val === "undefined") return;
                        if (utils.isArray(val)) key = key + "[]";
                        else val = [
                            val
                        ];
                        utils.forEach(val, function parseValue(v) {
                            if (utils.isDate(v)) v = v.toISOString();
                            else if (utils.isObject(v)) v = JSON.stringify(v);
                            parts.push(encode(key) + "=" + encode(v));
                        });
                    });
                    serializedParams = parts.join("&");
                }
                if (serializedParams) {
                    var hashmarkIndex = url.indexOf("#");
                    if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
                    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
                }
                return url;
            };
        /***/ },
        /***/ "./lib/helpers/combineURLs.js": /*!************************************!*\
  !*** ./lib/helpers/combineURLs.js ***!
  \************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module1.exports = function combineURLs(baseURL, relativeURL) {
                return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
            };
        /***/ },
        /***/ "./lib/helpers/cookies.js": /*!********************************!*\
  !*** ./lib/helpers/cookies.js ***!
  \********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            module1.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
            function standardBrowserEnv() {
                return {
                    write: function write(name, value, expires, path, domain, secure) {
                        var cookie = [];
                        cookie.push(name + "=" + encodeURIComponent(value));
                        if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
                        if (utils.isString(path)) cookie.push("path=" + path);
                        if (utils.isString(domain)) cookie.push("domain=" + domain);
                        if (secure === true) cookie.push("secure");
                        document.cookie = cookie.join("; ");
                    },
                    read: function read(name) {
                        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                        return match ? decodeURIComponent(match[3]) : null;
                    },
                    remove: function remove(name) {
                        this.write(name, "", Date.now() - 86400000);
                    }
                };
            }() : // Non standard browser env (web workers, react-native) lack needed support.
            function nonStandardBrowserEnv() {
                return {
                    write: function write() {},
                    read: function read() {
                        return null;
                    },
                    remove: function remove() {}
                };
            }();
        /***/ },
        /***/ "./lib/helpers/isAbsoluteURL.js": /*!**************************************!*\
  !*** ./lib/helpers/isAbsoluteURL.js ***!
  \**************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module1.exports = function isAbsoluteURL(url) {
                // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                // by any combination of letters, digits, plus, period, or hyphen.
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
            };
        /***/ },
        /***/ "./lib/helpers/isAxiosError.js": /*!*************************************!*\
  !*** ./lib/helpers/isAxiosError.js ***!
  \*************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            /**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module1.exports = function isAxiosError(payload) {
                return utils.isObject(payload) && payload.isAxiosError === true;
            };
        /***/ },
        /***/ "./lib/helpers/isURLSameOrigin.js": /*!****************************************!*\
  !*** ./lib/helpers/isURLSameOrigin.js ***!
  \****************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            module1.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
            // whether the request URL is of the same origin as current location.
            function standardBrowserEnv() {
                var msie = /(msie|trident)/i.test(navigator.userAgent);
                var urlParsingNode = document.createElement("a");
                var originURL;
                /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
                    var href = url;
                    if (msie) {
                        // IE needs attribute set twice to normalize properties
                        urlParsingNode.setAttribute("href", href);
                        href = urlParsingNode.href;
                    }
                    urlParsingNode.setAttribute("href", href);
                    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                    return {
                        href: urlParsingNode.href,
                        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                        host: urlParsingNode.host,
                        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                        hostname: urlParsingNode.hostname,
                        port: urlParsingNode.port,
                        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                    };
                }
                originURL = resolveURL(window.location.href);
                /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
                    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
                };
            }() : // Non standard browser envs (web workers, react-native) lack needed support.
            function nonStandardBrowserEnv() {
                return function isURLSameOrigin() {
                    return true;
                };
            }();
        /***/ },
        /***/ "./lib/helpers/normalizeHeaderName.js": /*!********************************************!*\
  !*** ./lib/helpers/normalizeHeaderName.js ***!
  \********************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            module1.exports = function normalizeHeaderName(headers, normalizedName) {
                utils.forEach(headers, function processHeader(value, name) {
                    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                        headers[normalizedName] = value;
                        delete headers[name];
                    }
                });
            };
        /***/ },
        /***/ "./lib/helpers/null.js": /*!*****************************!*\
  !*** ./lib/helpers/null.js ***!
  \*****************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // eslint-disable-next-line strict
            module1.exports = null;
        /***/ },
        /***/ "./lib/helpers/parseHeaders.js": /*!*************************************!*\
  !*** ./lib/helpers/parseHeaders.js ***!
  \*************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ./../utils */ "./lib/utils.js");
            // Headers whose duplicates are ignored by node
            // c.f. https://nodejs.org/api/http.html#http_message_headers
            var ignoreDuplicateOf = [
                "age",
                "authorization",
                "content-length",
                "content-type",
                "etag",
                "expires",
                "from",
                "host",
                "if-modified-since",
                "if-unmodified-since",
                "last-modified",
                "location",
                "max-forwards",
                "proxy-authorization",
                "referer",
                "retry-after",
                "user-agent"
            ];
            /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module1.exports = function parseHeaders(headers) {
                var parsed = {};
                var key;
                var val;
                var i;
                if (!headers) return parsed;
                utils.forEach(headers.split("\n"), function parser(line) {
                    i = line.indexOf(":");
                    key = utils.trim(line.substr(0, i)).toLowerCase();
                    val = utils.trim(line.substr(i + 1));
                    if (key) {
                        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
                        if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                            val
                        ]);
                        else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
                    }
                });
                return parsed;
            };
        /***/ },
        /***/ "./lib/helpers/parseProtocol.js": /*!**************************************!*\
  !*** ./lib/helpers/parseProtocol.js ***!
  \**************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = function parseProtocol(url) {
                var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
                return match && match[1] || "";
            };
        /***/ },
        /***/ "./lib/helpers/spread.js": /*!*******************************!*\
  !*** ./lib/helpers/spread.js ***!
  \*******************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module1.exports = function spread(callback) {
                return function wrap(arr) {
                    return callback.apply(null, arr);
                };
            };
        /***/ },
        /***/ "./lib/helpers/toFormData.js": /*!***********************************!*\
  !*** ./lib/helpers/toFormData.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var utils = __webpack_require__(/*! ../utils */ "./lib/utils.js");
            /**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/ function toFormData(obj, formData) {
                // eslint-disable-next-line no-param-reassign
                formData = formData || new FormData();
                var stack = [];
                function convertValue(value) {
                    if (value === null) return "";
                    if (utils.isDate(value)) return value.toISOString();
                    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) return typeof Blob === "function" ? new Blob([
                        value
                    ]) : Buffer.from(value);
                    return value;
                }
                function build(data, parentKey) {
                    if (utils.isPlainObject(data) || utils.isArray(data)) {
                        if (stack.indexOf(data) !== -1) throw Error("Circular reference detected in " + parentKey);
                        stack.push(data);
                        utils.forEach(data, function each(value, key) {
                            if (utils.isUndefined(value)) return;
                            var fullKey = parentKey ? parentKey + "." + key : key;
                            var arr;
                            if (value && !parentKey && typeof value === "object") {
                                if (utils.endsWith(key, "{}")) // eslint-disable-next-line no-param-reassign
                                value = JSON.stringify(value);
                                else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                                    // eslint-disable-next-line func-names
                                    arr.forEach(function(el) {
                                        !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                                    });
                                    return;
                                }
                            }
                            build(value, fullKey);
                        });
                        stack.pop();
                    } else formData.append(parentKey, convertValue(data));
                }
                build(obj);
                return formData;
            }
            module1.exports = toFormData;
        /***/ },
        /***/ "./lib/helpers/validator.js": /*!**********************************!*\
  !*** ./lib/helpers/validator.js ***!
  \**********************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var VERSION = __webpack_require__(/*! ../env/data */ "./lib/env/data.js").version;
            var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./lib/core/AxiosError.js");
            var validators = {};
            // eslint-disable-next-line func-names
            [
                "object",
                "boolean",
                "number",
                "function",
                "string",
                "symbol"
            ].forEach(function(type, i) {
                validators[type] = function validator(thing) {
                    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
                };
            });
            var deprecatedWarnings = {};
            /**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
                function formatMessage(opt, desc) {
                    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
                }
                // eslint-disable-next-line func-names
                return function(value, opt, opts) {
                    if (validator === false) throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
                    if (version && !deprecatedWarnings[opt]) {
                        deprecatedWarnings[opt] = true;
                        // eslint-disable-next-line no-console
                        console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
                    }
                    return validator ? validator(value, opt, opts) : true;
                };
            };
            /**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
                if (typeof options !== "object") throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
                var keys = Object.keys(options);
                var i = keys.length;
                while(i-- > 0){
                    var opt = keys[i];
                    var validator = schema[opt];
                    if (validator) {
                        var value = options[opt];
                        var result = value === undefined || validator(value, opt, options);
                        if (result !== true) throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
                        continue;
                    }
                    if (allowUnknown !== true) throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
                }
            }
            module1.exports = {
                assertOptions: assertOptions,
                validators: validators
            };
        /***/ },
        /***/ "./lib/utils.js": /*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var bind = __webpack_require__(/*! ./helpers/bind */ "./lib/helpers/bind.js");
            // utils is a library of generic helper functions non-specific to axios
            var toString = Object.prototype.toString;
            // eslint-disable-next-line func-names
            var kindOf = function(cache) {
                // eslint-disable-next-line func-names
                return function(thing) {
                    var str = toString.call(thing);
                    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
                };
            }(Object.create(null));
            function kindOfTest(type) {
                type = type.toLowerCase();
                return function isKindOf(thing) {
                    return kindOf(thing) === type;
                };
            }
            /**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
                return Array.isArray(val);
            }
            /**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
                return typeof val === "undefined";
            }
            /**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
                return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
            }
            /**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ var isArrayBuffer = kindOfTest("ArrayBuffer");
            /**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
                var result;
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
                else result = val && val.buffer && isArrayBuffer(val.buffer);
                return result;
            }
            /**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
                return typeof val === "string";
            }
            /**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
                return typeof val === "number";
            }
            /**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
                return val !== null && typeof val === "object";
            }
            /**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
                if (kindOf(val) !== "object") return false;
                var prototype = Object.getPrototypeOf(val);
                return prototype === null || prototype === Object.prototype;
            }
            /**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ var isDate = kindOfTest("Date");
            /**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var isFile = kindOfTest("File");
            /**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ var isBlob = kindOfTest("Blob");
            /**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ var isFileList = kindOfTest("FileList");
            /**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
                return toString.call(val) === "[object Function]";
            }
            /**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
            }
            /**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(thing) {
                var pattern = "[object FormData]";
                return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
            }
            /**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ var isURLSearchParams = kindOfTest("URLSearchParams");
            /**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
                return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
            }
            /**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
                if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
                return typeof window !== "undefined" && typeof document !== "undefined";
            }
            /**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === "undefined") return;
                // Force an array if not already something iterable
                if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
                    obj
                ];
                if (isArray(obj)) // Iterate over array values
                for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
                else {
                    // Iterate over object keys
                    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
                }
            }
            /**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
                var result = {};
                function assignValue(val, key) {
                    if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
                    else if (isPlainObject(val)) result[key] = merge({}, val);
                    else if (isArray(val)) result[key] = val.slice();
                    else result[key] = val;
                }
                for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
                return result;
            }
            /**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                    if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
                    else a[key] = val;
                });
                return a;
            }
            /**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
                if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
                return content;
            }
            /**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */ function inherits(constructor, superConstructor, props, descriptors) {
                constructor.prototype = Object.create(superConstructor.prototype, descriptors);
                constructor.prototype.constructor = constructor;
                props && Object.assign(constructor.prototype, props);
            }
            /**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */ function toFlatObject(sourceObj, destObj, filter) {
                var props;
                var i;
                var prop;
                var merged = {};
                destObj = destObj || {};
                do {
                    props = Object.getOwnPropertyNames(sourceObj);
                    i = props.length;
                    while(i-- > 0){
                        prop = props[i];
                        if (!merged[prop]) {
                            destObj[prop] = sourceObj[prop];
                            merged[prop] = true;
                        }
                    }
                    sourceObj = Object.getPrototypeOf(sourceObj);
                }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
                return destObj;
            }
            /*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */ function endsWith(str, searchString, position) {
                str = String(str);
                if (position === undefined || position > str.length) position = str.length;
                position -= searchString.length;
                var lastIndex = str.indexOf(searchString, position);
                return lastIndex !== -1 && lastIndex === position;
            }
            /**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */ function toArray(thing) {
                if (!thing) return null;
                var i = thing.length;
                if (isUndefined(i)) return null;
                var arr = new Array(i);
                while(i-- > 0)arr[i] = thing[i];
                return arr;
            }
            // eslint-disable-next-line func-names
            var isTypedArray = function(TypedArray) {
                // eslint-disable-next-line func-names
                return function(thing) {
                    return TypedArray && thing instanceof TypedArray;
                };
            }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
            module1.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isPlainObject: isPlainObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                extend: extend,
                trim: trim,
                stripBOM: stripBOM,
                inherits: inherits,
                toFlatObject: toFlatObject,
                kindOf: kindOf,
                kindOfTest: kindOfTest,
                endsWith: endsWith,
                toArray: toArray,
                isTypedArray: isTypedArray,
                isFileList: isFileList
            };
        /***/ }
    });
});

},{}],"28JcJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSettings", ()=>updateSettings);
var _alerts = require("./alerts");
/* eslint-disable */ const axios = require("../../node_modules/axios/dist/axios");
const updateSettings = async (data, type)=>{
    try {
        const url = type === "password" ? "http://127.0.0.1:3000/api/v1/users/updateMyPassword" : "http://127.0.0.1:3000/api/v1/users/updateMe";
        const res = await axios({
            method: "PATCH",
            url,
            data
        });
        if (res.data.statue === "success") (0, _alerts.showAlert)("success", `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, _alerts.showAlert)("error", err.response.data.message);
    }
};

},{"./alerts":"j4hQk","../../node_modules/axios/dist/axios":"03fd0","@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}],"hu9K2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bookTour", ()=>bookTour);
var _alerts = require("./alerts");
/* eslint-disable */ const axios = require("../../node_modules/axios/dist/axios");
const stripe = Stripe("pk_test_51Lp892LNiEBWkF08FibkwNb9TwsSG5iDoGFGGp5BY8igHfUGAzeHnjHkdPf6qUNwZFAcF3EagNr98tuXjRvc7GQg00vy011IIE");
const bookTour = async (tourId)=>{
    try {
        // 1)  Get checkout session from API
        const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`);
        console.log(session);
        // 2) Creat checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        (0, _alerts.showAlert)("error", err);
    }
};

},{"./alerts":"j4hQk","../../node_modules/axios/dist/axios":"03fd0","@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}],"b76pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singup", ()=>singup);
var _alerts = require("./alerts");
/* eslint-disable */ const axios = require("../../node_modules/axios/dist/axios");
const singup = async (name, email, password, passwordConfirm)=>{
    try {
        const res = await axios({
            method: "POST",
            url: "http://127.0.0.1:3000/api/v1/users/singup",
            data: {
                name,
                email,
                password,
                passwordConfirm
            }
        });
        if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "Singup successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, _alerts.showAlert)("error", err.response.data.message);
    }
};

},{"./alerts":"j4hQk","../../node_modules/axios/dist/axios":"03fd0","@parcel/transformer-js/src/esmodule-helpers.js":"5Birt"}]},["7zAMY","4uyBp"], "4uyBp", "parcelRequire11c7")

//# sourceMappingURL=index.js.map