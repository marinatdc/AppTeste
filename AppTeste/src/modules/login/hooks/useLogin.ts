import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export const useLogin = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
        
    const hanldeOnPress = async () => {
        setLoading (true);
        const resultAxios = await axios.post('/auth/login', {
            //ip la do cara
            email,
            password,
        }).catch(() => {
            setErrorMessage('Usuário ou senha inválidos')
        });
            setLoading (false);
            console.log('clicou');
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