import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import {styles} from "@/shared/components/button/buttonStyle"

type Props = TouchableOpacityProps & {
    title: string
    margin?: number
}

export default function Button ({title, margin=0, ...rest}:Props) {
    return (
        <TouchableOpacity style={[styles.button, {margin}]} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )    
}