import React from 'react';

function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

var css = ".scrolling {\n display: flex;\n width: 100%;\n overflow-x: scroll;\n}\n";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var HorizontalScrollContainer = function (_React$Component) {
    inherits(HorizontalScrollContainer, _React$Component);

    function HorizontalScrollContainer() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, HorizontalScrollContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HorizontalScrollContainer.__proto__ || Object.getPrototypeOf(HorizontalScrollContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleWheel = function (event) {
            if (event.deltaY < 0) {
                if (_this.props.invert) {
                    document.querySelector('.scrolling').scrollLeft -= _this.props.sensibility;
                } else {
                    document.querySelector('.scrolling').scrollLeft += _this.props.sensibility;
                }
            }

            if (event.deltaY > 0) {
                if (_this.props.invert) {
                    document.querySelector('.scrolling').scrollLeft += _this.props.sensibility;
                } else {
                    document.querySelector('.scrolling').scrollLeft -= _this.props.sensibility;
                }
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(HorizontalScrollContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.querySelector('.scrolling').addEventListener('wheel', this.handleWheel);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.querySelector('.scrolling').removeEventListener('wheel', this.handleWheel);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'scrolling', onScroll: function onScroll() {
                        return _this2.props.onScroll();
                    } },
                this.props.children
            );
        }
    }]);
    return HorizontalScrollContainer;
}(React.Component);

HorizontalScrollContainer.defaultProps = {
    sensibility: 100,
    onScroll: function onScroll() {},
    invert: false
};

export default HorizontalScrollContainer;
//# sourceMappingURL=index.es.js.map
