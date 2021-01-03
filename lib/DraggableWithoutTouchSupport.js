(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./utils.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./utils.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utilsJs);
    global.DraggableWithoutTouchSupport = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var DraggableWithoutTouchSupport = function DraggableWithoutTouchSupport(_ref) {
    var _this = this;

    var dialogId = _ref.dialogId,
        elementThatCaptureThatClickId = _ref.elementThatCaptureThatClickId,
        showButtonId = _ref.showButtonId,
        hideButtonId = _ref.hideButtonId;

    _classCallCheck(this, DraggableWithoutTouchSupport);

    _defineProperty(this, "centerDialog", function () {
      var _getPositionTocenterE = (0, _utils.getPositionTocenterElement)(_this.dialog, window),
          _getPositionTocenterE2 = _slicedToArray(_getPositionTocenterE, 2),
          top = _getPositionTocenterE2[0],
          left = _getPositionTocenterE2[1];

      _this.top = top;
      _this.left = left;

      _this.updatePosition(0, 0);
    });

    _defineProperty(this, "updatePosition", function (movementX, movementY) {
      _this.top = _this.top + movementY;
      _this.left = _this.left + movementX;
      _this.dialog.style.top = String(_this.top) + "px";
      _this.dialog.style.left = String(_this.left) + "px";
    });

    _defineProperty(this, "updatePositionWhenHoldClick", function (clickEvent) {
      _this.updatePosition(clickEvent.movementX, clickEvent.movementY);
    });

    _defineProperty(this, "click", function (mouseEvent) {
      window.onmousemove = _this.updatePositionWhenHoldClick;
      window.onmouseup = _this.endClick;
    });

    _defineProperty(this, "endClick", function () {
      window.onmousemove = null;
      window.onmouseup = null;
    });

    this.top = 0;
    this.left = 0;
    this.dialog = document.getElementById(dialogId);
    this.elementThatCaptureThatClick = document.getElementById(elementThatCaptureThatClickId);
    this.centerDialog();
    this.elementThatCaptureThatClick.onmousedown = this.click;
    (0, _utils.addEventToHideAndShowDialog)(hideButtonId, showButtonId, dialogId);
  };

  var _default = DraggableWithoutTouchSupport;
  _exports.default = _default;
  module.exports = exports.default;
});