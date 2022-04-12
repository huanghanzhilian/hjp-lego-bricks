export interface CommonComponentProps {
    actionType: string;
    url: string;
    height: string;
    width: string;
    paddingLeft: string;
    paddinngRight: string;
    paddingTop: string;
    paddingBottom: string;
    borderStyle: string;
    borderColor: string;
    borderWidth: string;
    borderRaius: string;
    boxShadow: string;
    opacity: string;
    position: string;
    left: string;
    top: string;
    right: string;
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
export declare const textDefaultProps: TextComponentProps;
interface ImageComponentProps extends CommonComponentProps {
    src: string;
}
export declare const imageDefaultProps: ImageComponentProps;
interface ShapeComponentProps extends CommonComponentProps {
    backgroundColor: string;
}
export declare const shapeDefaultProps: ShapeComponentProps;
export declare const isEditingProp: {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const textStylePropNames: string[];
export declare const imageStylePropNames: string[];
export declare const shapeStylePropNames: string[];
export declare const transformToComponentProps: <T extends {}>(props: T) => { [P in keyof T]: {
    type: StringConstructor;
    default: T[keyof T];
}; } & {
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export {};