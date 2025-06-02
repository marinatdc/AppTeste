import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "@/shared/components/hooks/useRequest";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReduce";

export const useLogin = () => {

    const { user } = useUserReducer();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, setErrorMessage, errorMessage, loading } = useRequest();
        

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