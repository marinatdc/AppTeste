import { SafeAreaView } from "react-native"

import Login from "@/modules/login/screens/Login"
import { useState } from "react";
import Button from "@/shared/components/button/button";
import Modal from '@/shared/components/modal/modal'
import { buttonsTheme } from "@/shared/themes/buttons";

export default function App () {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView>
            <Modal 
            onCloseModal={()=> setModalVisible(false)} 
            visible={modalVisible} 
            text="TEXTO TESTE" 
            title="TÍTULO TESTE"/>

            <Button 
            type={buttonsTheme.secundary}
            title="open" 
            onPress={()=> setModalVisible(true)}/>

            <Login />
        </SafeAreaView>
    )
}
