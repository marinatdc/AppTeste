import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "@/shared/function/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { useDispatch } from "react-redux";
import { setUserAction } from "@/store/reducers/UserReducer";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReduce";

export const useRequest = () => {

    const { setUser } = useUserReducer ();

    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
            const x = await connectionAPIPost<ReturnLogin>('/auth/login', body)
            .then((result) => {
                setUser(result.user)
            })
            .catch(() => {
                        setErrorMessage('Usuário ou senha inválidos')
                    });
            
        setLoading(false);
    }

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage,
    }
}