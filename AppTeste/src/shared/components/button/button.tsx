import { TouchableOpacity, TouchableOpacityProps} from "react-native"
import { styles } from "@/shared/components/button/buttonStyle"

import {Text} from "@/shared/components/text/text"
import { ContainerText } from "../text/textStyle"
import { theme } from "@/shared/themes/theme"
import { textTypes } from "../text/textTypes"

type Props = TouchableOpacityProps & {
    title: string
    margin?: number
}

export default function Button ({title, margin=0, ...rest}:Props) {
    return (
        <TouchableOpacity style={[styles.button, {margin}]} {...rest}>
            <Text color={theme.colors.white.white} style={styles.text} >{title}</Text>
        </TouchableOpacity>
    )    
}