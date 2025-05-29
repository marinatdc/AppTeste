import { TextProps as TextPropsNative } from "react-native"

import { ContainerText } from "./textStyle"
import { textTypes } from "@/shared/components/text/textTypes"
import { useMemo } from "react"

interface TextProps extends TextPropsNative {
    color ?: string
    type ?: string
    fontWeight ?: string
    margin ?: string
}

export const Text = ({margin, fontWeight, color, type, ...props}: TextProps) => {
    const handleFontSize = useMemo(() => {
        switch (type) {
            case textTypes.TITLE:
                return '32px'
            
            case textTypes.SMALL:
                return '14px'
            
            case textTypes.MEDIUM:
                return '20px'
            default:
                return '16px';
        }
    }, [type]);
    return ( 
        <ContainerText margin={margin} fontWeight={fontWeight} fontSize={handleFontSize} color={color} {...props} />
    ) 
}