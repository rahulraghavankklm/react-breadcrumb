'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function (_React$Component) {
  (0, _inherits3.default)(Breadcrumb, _React$Component);

  function Breadcrumb(props) {
    (0, _classCallCheck3.default)(this, Breadcrumb);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Breadcrumb.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumb)).call(this, props));

    _this._bindFunctions();
    _this.state = {
      pathConfiguration: _this._buildPath(props)
    };
    return _this;
  }

  (0, _createClass3.default)(Breadcrumb, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        pathConfiguration: this._buildPath(nextProps)
      });
    }
  }, {
    key: '_bindFunctions',
    value: function _bindFunctions() {
      this.handleClick = this.handleClick.bind(this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(path) {
      var _this2 = this;

      return function (e) {
        _this2.props.onClick(e, path);
      };
    }
  }, {
    key: '_buildPath',
    value: function _buildPath(props) {
      if (typeof props.path === 'string') {
        return this._buildPathForString(props);
      }
      return this._buildPathForArray(props);
    }
  }, {
    key: '_buildPathForString',
    value: function _buildPathForString(props) {
      var pathConfiguration = {
        separatorChar: props.separatorChar,
        breadcrumbPath: []
      };

      var pathSections = props.path.split('/');
      var accumulatePath = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(pathSections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var path = _step.value;

          if (path && path !== '') {
            accumulatePath += '/' + path;
            pathConfiguration.breadcrumbPath.push({
              label: path,
              path: accumulatePath
            });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return pathConfiguration;
    }
  }, {
    key: '_buildPathForArray',
    value: function _buildPathForArray(props) {
      return {
        separatorChar: props.separatorChar,
        breadcrumbPath: props.path
      };
    }
  }, {
    key: '_getPathComponents',
    value: function _getPathComponents() {
      var _this3 = this;

      var pathConfiguration = this.state.pathConfiguration;

      return pathConfiguration.breadcrumbPath.map(function (path, index) {
        return _this3._getPathComponent(path, pathConfiguration.separatorChar, index);
      });
    }
  }, {
    key: '_getPathComponent',
    value: function _getPathComponent(pathObj, separatorChar, index) {
      var classes = this.props.classes;

      var classNameContainer = (0, _classnames2.default)('Breadcrumb-container', (0, _defineProperty3.default)({}, classes['Breadcrumb-container'], !!classes['Breadcrumb-container']));
      var classNameSeparator = (0, _classnames2.default)('Breadcrumb-separator', (0, _defineProperty3.default)({}, classes['Breadcrumb-separator'], !!classes['Breadcrumb-separator']));

      var classNamePath = (0, _classnames2.default)('Breadcrumb-path', (0, _defineProperty3.default)({}, classes['Breadcrumb-path'], !!classes['Breadcrumb-path']));

      return _react2.default.createElement(
        'span',
        {
          className: classNameContainer,
          key: index
        },
        index > 0 && _react2.default.createElement(
          'span',
          { className: classNameSeparator },
          separatorChar
        ),
        _react2.default.createElement(
          'span',
          {
            onClick: this.handleClick(pathObj),
            className: classNamePath
          },
          this._getLinkPath(pathObj)
        )
      );
    }
  }, {
    key: '_getLinkPath',
    value: function _getLinkPath(pathObj) {
      if (pathObj.path && pathObj.path !== '') {
        return _react2.default.createElement(
          'a',
          { href: pathObj.path },
          pathObj.label
        );
      }
      return pathObj.label;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;

      var classNameParent = (0, _classnames2.default)('Breadcrumb', (0, _defineProperty3.default)({}, className, !!className));
      return _react2.default.createElement(
        'div',
        { className: classNameParent },
        this._getPathComponents()
      );
    }
  }]);
  return Breadcrumb;
}(_react2.default.Component);

Breadcrumb.propTypes = {
  path: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]).isRequired,
  separatorChar: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  classes: _propTypes2.default.object
};
Breadcrumb.defaultProps = {
  separatorChar: '/',
  classes: {},
  onClick: function onClick() {}
};
exports.default = Breadcrumb;
module.exports = exports['default'];