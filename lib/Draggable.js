"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DraggableWithoutTouchSupport = _interopRequireDefault(require("./DraggableWithoutTouchSupport.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Draggable = /*#__PURE__*/function (_DraggableWithoutTouc) {
  _inherits(Draggable, _DraggableWithoutTouc);

  var _super = _createSuper(Draggable);

  function Draggable(_ref) {
    var _this;

    var dialogId = _ref.dialogId,
        elementThatCaptureThatClickId = _ref.elementThatCaptureThatClickId,
        showButtonId = _ref.showButtonId,
        hideButtonId = _ref.hideButtonId;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, {
      dialogId: dialogId,
      elementThatCaptureThatClickId: elementThatCaptureThatClickId,
      showButtonId: showButtonId,
      hideButtonId: hideButtonId
    });

    _defineProperty(_assertThisInitialized(_this), "updateLastTouch", function (touch) {
      _this.lastTouchX = touch.clientX;
      _this.lastTouchY = touch.clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "updatePositionWhenHoldTouch", function (touchEvent) {
      if (touchEvent.touches.length === 1) {
        var touch = touchEvent.touches[0];
        var movementX = touch.clientX - _this.lastTouchX;
        var movementY = touch.clientY - _this.lastTouchY;

        _this.updatePosition(movementX, movementY);

        _this.updateLastTouch(touch);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touch", function (touchEvent) {
      var touch = touchEvent.touches[0];
      window.ontouchmove = _this.updatePositionWhenHoldTouch;
      window.ontouchend = _this.endTouch;

      _this.updateLastTouch(touch);
    });

    _defineProperty(_assertThisInitialized(_this), "endTouch", function () {
      window.ontouchmove = null;
      window.ontouchend = null;
    });

    _this.lastTouchX = 0;
    _this.lastTouchY = 0;
    _this.elementThatCaptureThatClick.ontouchstart = _this.touch;
    return _this;
  }

  return Draggable;
}(_DraggableWithoutTouchSupport.default);

var _default = Draggable;
exports.default = _default;