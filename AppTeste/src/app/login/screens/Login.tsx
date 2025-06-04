import {View, Text, NativeSyntheticEvent, TextInputChangeEventData} from "react-native"
import {Imagelog, styles} from "@/app/login/styles/loginStyle"

import Button from "@/shared/components/button/button"
import Input from "@/shared/components/input/input"
import { theme } from "@/shared/themes/theme"
import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { router } from "expo-router"



export default function Login () {
    
    //Funcionalidade
    const {
        email,
        password,
        loading,
        errorMessage, 
        hanldeOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();


    return (
        <View style={styles.view}>

            <Imagelog resizeMode="contain" source={require('@/assets/images/Design_sem_nome-removebg-preview.png')}/>
            

            <Input
            value={email}
            margin="0px 0px 16px 0px" 
            title="Email: "
            placeholder="Digite seu email"
            errorMessageError={errorMessage}
            onChange={handleOnChangeEmail}
            />

            <Input 
            value={password}
            title="Senha: "
            placeholder="Digite sua senha"
            secureTextEntry
            onChange={handleOnChangePassword}
            />

            <Button 
            type={theme.buttons.buttonsTheme.secundary} 
            loading={loading}
            title="Entrar" 
            margin="15px" 
            onPress={hanldeOnPress}
            />

            <Button
            type={theme.buttons.buttonsTheme.primary}
            loading={loading}
            title="Teste de Navegação"
            onPress={() => router.navigate('/home/home')}
            /> 
        </View>
    )
}   