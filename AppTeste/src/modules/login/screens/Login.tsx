import {View, Text} from "react-native"
import {styles} from "@/modules/login/styles/loginStyle"

//import {Text} from "@/shared/components/text/text"
//import { theme } from "@/shared/themes/theme"

import Button from "@/shared/components/button/button"
import Input from "@/shared/components/input/input"
import { theme } from "@/shared/themes/theme"


export default function Login () {
    const hanldeOnPress = () => {
        console.log('clicou')
    }    

    return (
        <View style={styles.view}>

            <Input
            margin="0px 0px 16px 0px" 
            title="Email: "
            placeholder="Digite seu email"
            />

            <Input 
            title="Senha: "
            placeholder="Digite sua senha"
            secureTextEntry
            />

            <Button 
            type={theme.buttons.buttonsTheme.secundary} 
            title="ENTRAR" 
            margin="15px" 
            onPress={hanldeOnPress}/>
        </View>
    )
}