import { SafeAreaView } from "react-native"

import Login from "@/app/login/screens/Login"
import { useState } from "react";

import { Provider } from 'react-redux'
import store from "@/store";
import GlobalModal from "@/shared/components/modal/globalModal/globalModal";
import Home from "@/app/home/home";


export default function App () {
    return (
        <Provider store={store}>
        
        <SafeAreaView>
            
            <GlobalModal/>

            <Login />
          
        </SafeAreaView>
        
        </Provider>
    )
}
