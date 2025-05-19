import {View, Text} from "react-native"
import {styles} from "@/modules/login/styles/loginStyle"

import Button from "@/shared/components/button/button"
import Input from "@/shared/components/input/input"

export default function Login () {
    const hanldeOnPress = () => {
        console.log('clicou')
    }    

    return (
        <View style={styles.view}>
            <Text>Login :3</Text>
            <Input />
            <Button title="Entrar" margin={15} onPress={hanldeOnPress}/>
        </View>
    )
}