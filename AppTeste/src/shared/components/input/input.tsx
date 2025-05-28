import { TextInputProps, View } from "react-native";
import { ContainerInput, Icon } from "@/shared/components/input/inputStyle";
import { DisplayFlexColumn } from "../globalStyles/globalViewStyle";
import { Text } from "@/shared/components/text/text"
import { theme } from "@/shared/themes/theme";
import { textTypes } from "../text/textTypes";

import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";


interface InputProps extends TextInputProps {
    title ?: string;
    errorMessageError ?: string;
    secureTextEntry ?: boolean;
    margin?: string;
    
}
    
export default function Input({margin, secureTextEntry, errorMessageError, title, ...props} : InputProps) {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current);
    }

    return (
        <DisplayFlexColumn margin={margin}>
            {title && (
                <Text 
                margin="0px 0px 4px 10px" 
                fontWeight="bold" 
                color={theme.colors.darkBlue.blue100}
                >{title}</Text>
            )}

            <View>
                <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessageError} {...props}/>
                {secureTextEntry && (
                    <Icon onPress={handleOnPressEye} name={currentSecure ? "eye-outline" : "eye-off-outline" } size={22}/>
                )}
            </View>

            {errorMessageError && (
                <Text 
                margin="3px 0px 0px 9px"
                type={textTypes.SMALL} 
                color={theme.colors.alertRed.redAlert} >
                    {errorMessageError}
                </Text>
            )}
        </DisplayFlexColumn>
    )
}