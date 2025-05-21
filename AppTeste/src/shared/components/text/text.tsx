import { TextProps as TextPropsNative } from "react-native"

import { ContainerText } from "./textStyle"
import { textTypes } from "@/shared/components/text/textTypes"
import { useMemo } from "react"

interface TextProps extends TextPropsNative {
    color ?: string
    type ?: string
}

export const Text = ({color, type, ...props}: TextProps) => {
    const handleFontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px'
            default:
                return '16px';
        }
    }, [type]);
    return ( 
        <ContainerText fontSize={handleFontSize} color={color} {...props} />
    ) 
}