import ConnectionAPI from "@/shared/function/connection/connectionAPI";
import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { connectionAPIPost } from '@/shared/function/connection/connectionAPI'
import { useRequest } from "@/shared/components/hooks/useRequest";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useLogin = () => {

    const { user } = useSelector((state: RootState) => state.userReducer);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, setErrorMessage, errorMessage, loading } = useRequest();
        
    console.log('user', user)

    const hanldeOnPress = async () => {
        authRequest ({
            email,
            password,
        })
    }    
    
        const handleOnChangeEmail = (event : NativeSyntheticEvent<TextInputChangeEventData>) => {
            setErrorMessage('');
            setEmail(event.nativeEvent.text);
        };
        
        const handleOnChangePassword = (event : NativeSyntheticEvent<TextInputChangeEventData>) => {
            setErrorMessage('');
            setPassword (event.nativeEvent.text);
        };

        return {
            email,
            password,
            loading,
            errorMessage, 
            hanldeOnPress,
            handleOnChangeEmail,
            handleOnChangePassword,
        }

}