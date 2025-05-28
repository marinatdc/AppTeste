import { ActivityIndicator, TouchableOpacityProps} from "react-native"
import { ButtonContainer, ButtonSecundary, ActivityIndicatorButton, ButtonDisable } from "@/shared/components/button/buttonStyle"

import { Text } from "../text/text"
import { theme } from "@/shared/themes/theme"

interface ButtonProps extends TouchableOpacityProps {
    title: string
    margin?: string
    type?: string
    disable?: boolean
    loading?: boolean
    onPress?: () => void
}

export default function Button ({title, type, disable, onPress, loading, margin, ...props}:ButtonProps) {
    
    const hanldeOnPress = () => { //não carregar no console log quando estiver no loading
        if (!loading && !disable && onPress) {
            onPress();
        }
    }
    const renderText = (color: string) => ( 
        <>
        <Text fontWeight="bold" color={color}>{title}</Text>
        {loading && <ActivityIndicatorButton color={theme.colors.realWhite.realWhite}/>}
        </>
        //carrega o disable
    )

    if (disable) {
        return (
            <ButtonDisable {...props} margin={margin}> 
                {renderText(theme.colors.realWhite.realWhite)}
            </ButtonDisable>
        ) //sem onpress pq é desabilitado para ação
    }

    switch (type) {
        case theme.buttons.buttonsTheme.secundary:
            return (
        <ButtonSecundary {...props} margin={margin} onPress={hanldeOnPress} >
            {renderText(theme.colors.realWhite.realWhite)}
        </ButtonSecundary>
    ) 
    
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
        <ButtonContainer {...props} margin={margin} onPress={hanldeOnPress} >
            {renderText(theme.colors.realWhite.realWhite)}
        </ButtonContainer>
    ) 
    }  
}