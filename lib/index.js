'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./RichTextInput.css');

var RichTextInput = function (_Component) {
    _inherits(RichTextInput, _Component);

    function RichTextInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RichTextInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RichTextInput.__proto__ || Object.getPrototypeOf(RichTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.onTextChange = function () {
            _this.props.input.onChange(_this.editor.innerHTML);
        }, _this.updateDivRef = function (ref) {
            _this.divRef = ref;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RichTextInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                value = _props.input.value,
                toolbar = _props.toolbar;


            this.quill = new _quill2.default(this.divRef, {
                modules: { toolbar: toolbar },
                theme: 'snow'
            });

            // this.quill.pasteHTML(value);
            this.quill.setContents(this.quill.clipboard.convert(value));

            this.editor = this.divRef.querySelector('.ql-editor');
            this.quill.on('text-change', (0, _lodash2.default)(this.onTextChange, 500));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.quill.off('text-change', this.onTextChange);
            this.quill = null;
        }
    }, {
        key: 'render',


        /*
        componentWillReceiveProps(nextProps) {
            if (nextProps.input.value !== this.props.input.value) {
                this.quill.pasteHTML(nextProps.input.value);
            }
        }
        */

        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'aor-rich-text-input' },
                _react2.default.createElement('div', { ref: this.updateDivRef })
            );
        }
    }]);

    return RichTextInput;
}(_react.Component);

RichTextInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    addLabel: _propTypes2.default.bool.isRequired,
    input: _propTypes2.default.object,
    label: _propTypes2.default.string,
    options: _propTypes2.default.object,
    source: _propTypes2.default.string,
    toolbar: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.bool])
};

RichTextInput.defaultProps = {
    addField: true,
    addLabel: true,
    options: {},
    record: {},
    toolbar: true
};

exports.default = RichTextInput;
module.exports = exports['default'];