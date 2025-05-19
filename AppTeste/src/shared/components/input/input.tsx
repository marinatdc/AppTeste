import { TextInput, TextInputProps } from "react-native"
import {styles} from "@/shared/components/input/inputStyle"

type InputProps = TextInputProps;
    
export default function Input({...props} : InputProps) {
    return <TextInput style={styles.input} {...props}/>
}