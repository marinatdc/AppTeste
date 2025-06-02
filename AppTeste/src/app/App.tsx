import { SafeAreaView } from "react-native"

import Login from "@/modules/login/screens/Login"
import { useState } from "react";

import { Provider } from 'react-redux'
import store from "@/store";

export default function App () {
    return (
        <Provider store={store}>
        
        <SafeAreaView>
            {/*<Modal 
            onCloseModal={()=> setModalVisible(false)} 
            visible={modalVisible} 
            text="TEXTO TESTE" 
            title="TÍTULO TESTE"/>

            <Button 
            type={buttonsTheme.secundary}
            title="open" 
            onPress={()=> setModalVisible(true)}/>
             */}

            <Login />
        </SafeAreaView>
        
        </Provider>
    )
}
