import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "@/shared/function/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { setUserAction } from "@/store/reducers/UserReducer";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReduce";
import { useGlobalReducer } from "@/store/reducers/globalReducer/useGlobalReducer";

import { useRouter } from 'expo-router';

export const useRequest = () => {

    const router = useRouter();

    const { setUser } = useUserReducer ();

    const { setModal } = useGlobalReducer();

    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
            const x = await connectionAPIPost<ReturnLogin>('/auth/login', body)
            .then((result) => {
                setUser(result.user);
                 router.push('/home/home');
            })
            .catch(() => {
                        setModal({
                            visible: true,
                            title: 'Erro',
                            text: 'Usuário ou senha incorretos',
                        });
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