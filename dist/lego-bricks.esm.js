import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withModifiers, withCtx, createTextVNode, toDisplayString, createElementBlock } from 'vue';
import { without, mapValues, pick } from 'lodash-es';

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
const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
const imageStylePropNames = without(Object.keys(imageDefaultProps), 'src');
const shapeStylePropNames = without(Object.keys(shapeDefaultProps), 'actionType', 'url');
const transformToComponentProps = (props) => {
    const mapProps = mapValues(props, item => {
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
    const styleProps = computed(() => pick(props, picks));
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
var script$2 = defineComponent({
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
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-text-component",
    onClick: withModifiers(_ctx.handleClick, ["prevent"])
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
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
var script$1 = defineComponent({
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
  return (openBlock(), createElementBlock("img", {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-image-component",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
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
var script = defineComponent({
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
  return (openBlock(), createElementBlock("div", {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-shape-component",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
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

export { script$1 as LImage, script as LShape, script$2 as LText, index as default, install };
