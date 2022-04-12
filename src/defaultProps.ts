import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
   // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddinngRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRaius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x, y
  position: string;
  left: string;
  top: string;
  right: string;
}
const commonDefaultProps: CommonComponentProps = {
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
}

interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}
export const textDefaultProps: TextComponentProps = {
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
}

interface ImageComponentProps extends CommonComponentProps {
  src: string;
}
export const imageDefaultProps: ImageComponentProps = {
  src: 'test.url',
  ...commonDefaultProps
}

interface ShapeComponentProps extends CommonComponentProps {
  backgroundColor: string;
}
export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
}

export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
}
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const imageStylePropNames = without(Object.keys(imageDefaultProps), 'src')
export const shapeStylePropNames = without(Object.keys(shapeDefaultProps), 'actionType', 'url')

export const transformToComponentProps = <T extends {}>(props: T) => {
  const mapProps = mapValues(props, item => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item
    }
  })
  return {
    ...mapProps,
    ...isEditingProp
  }
}
