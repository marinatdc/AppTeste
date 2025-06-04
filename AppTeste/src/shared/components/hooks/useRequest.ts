import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "@/shared/function/connection/connectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";
import { setUserAction } from "@/store/reducers/UserReducer";
import { useUserReducer } from "@/store/reducers/UserReducer/useUserReduce";
import { useGlobalReducer } from "@/store/reducers/globalReducer/useGlobalReducer";

export const useRequest = () => {

    const { setUser } = useUserReducer ();

    const { setModal } = useGlobalReducer();

    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
            const x = await connectionAPIPost<ReturnLogin>('/auth/login', body)
            .then((result) => {
                setUser(result.user)
            })
            .catch(() => {
                        setModal({
                            visible: true,
                            title: 'erro',
                            text: 'erro',
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