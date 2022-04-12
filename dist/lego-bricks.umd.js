(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LegoComponents = {}, global.Vue, global._));
})(this, (function (exports, vue, lodashEs) { 'use strict';

  const commonDefaultProps = {
      actionType: '',
      url: '',
      height: '',
      width: '318px',
      paddingLeft: '0px',
      paddinngRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRaius: '0',
      boxShadow: '0 0 0 #000',
      opacity: '1',
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0'
  };
  const textDefaultProps = {
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000',
      backgroundColor: '',
      ...commonDefaultProps
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps
  };
  const shapeDefaultProps = {
      backgroundColor: '',
      ...commonDefaultProps
  };
  const isEditingProp = {
      isEditing: {
          type: Boolean,
          default: false
      }
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
  const imageStylePropNames = lodashEs.without(Object.keys(imageDefaultProps), 'src');
  const shapeStylePropNames = lodashEs.without(Object.keys(shapeDefaultProps), 'actionType', 'url');
  const transformToComponentProps = (props) => {
      const mapProps = lodashEs.mapValues(props, item => {
          return {
              type: item.constructor,
              default: item
          };
      });
      return {
          ...mapProps,
          ...isEditingProp
      };
  };

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
      const handleClick = () => {
          if (props.actionType === 'url' && props.url && !props.isEditing) {
              window.location.href = props.url;
          }
      };
      return {
          styleProps,
          handleClick
      };
  };

  const defaultProps$2 = transformToComponentProps(textDefaultProps);
  var script$2 = vue.defineComponent({
      name: 'l-text',
      props: {
          tag: {
              type: String,
              default: 'div'
          },
          ...defaultProps$2
      },
      setup(props) {
          // 重用并且简化组件样式props，抽离
          const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-text-component",
      onClick: vue.withModifiers(_ctx.handleClick, ["prevent"])
    }, {
      default: vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-6bf95b7a";
  script$2.__file = "src/components/LText/LText.vue";

  script$2.install = (app) => {
      app.component(script$2.name, script$2);
  };

  const defaultProps$1 = transformToComponentProps(imageDefaultProps);
  var script$1 = vue.defineComponent({
      name: 'l-image',
      props: {
          ...defaultProps$1
      },
      setup(props) {
          const { styleProps, handleClick } = useComponentCommon(props, imageStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  const _hoisted_1 = ["src"];

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("img", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-image-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
      src: _ctx.src
    }, null, 12 /* STYLE, PROPS */, _hoisted_1))
  }

  script$1.render = render$1;
  script$1.__scopeId = "data-v-1e970aa2";
  script$1.__file = "src/components/LImage/LImage.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  const defaultProps = transformToComponentProps(shapeDefaultProps);
  var script = vue.defineComponent({
      name: 'l-shape',
      props: {
          ...defaultProps
      },
      setup(props) {
          const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropNames);
          return {
              styleProps,
              handleClick
          };
      }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      style: vue.normalizeStyle(_ctx.styleProps),
      class: "l-shape-component",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
    }, null, 4 /* STYLE */))
  }

  script.render = render;
  script.__file = "src/components/LShape/LShape.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$2,
      script$1,
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.LImage = script$1;
  exports.LShape = script;
  exports.LText = script$2;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
