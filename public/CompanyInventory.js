"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductList, _React$Component);

  var _super = _createSuper(ProductList);

  function ProductList(props) {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _super.call(this, props);
    _this.state = {
      products: []
    };
    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          products: []
        });
      }, 500);
    }
  }, {
    key: "createProduct",
    value: function createProduct(product) {
      var newProductList = this.state.products.slice();
      newProductList.push(product);
      this.setState({
        products: newProductList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "My Company Inventory"), /*#__PURE__*/React.createElement(ProductTable, {
        products: this.state.products
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
        createProduct: this.createProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

var ProductTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductTable, _React$Component2);

  var _super2 = _createSuper(ProductTable);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _super2.apply(this, arguments);
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var productRows = this.props.products.map(function (product) {
        return /*#__PURE__*/React.createElement(ProductRow, {
          product: product
        });
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows)));
    }
  }]);

  return ProductTable;
}(React.Component);

var ProductRow = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductRow, _React$Component3);

  var _super3 = _createSuper(ProductRow);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _super3.apply(this, arguments);
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, product.productName), /*#__PURE__*/React.createElement("td", null, "$", product.price), /*#__PURE__*/React.createElement("td", null, product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
        href: product.imageUrl,
        target: "_blank"
      }, "View")));
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(ProductAdd, _React$Component4);

  var _super4 = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this3;

    _classCallCheck(this, ProductAdd);

    _this3 = _super4.call(this);
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.productAdd;
      var product = {
        productName: form.productName.value,
        price: form.price.value,
        category: form.category.value,
        imageUrl: form.imageUrl.value
      };
      this.props.createProduct(product);
      form.productName.value = "";
      form.price.value = "";
      form.category.value = "";
      form.imageUrl.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", null, "Category"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
        id: "category",
        name: "category"
      }, /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", null, "Price Per Unit"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        placeholder: "$"
      }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", null, "Product Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "productName"
      })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", null, "Image URL"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "imageUrl"
      }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/React.createElement("button", {
        name: "submit"
      }, "Add Product")))))));
    }
  }]);

  return ProductAdd;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(ProductList, null), document.getElementById("contents"));