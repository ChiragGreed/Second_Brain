import React, { useContext } from 'react'
import { AuthContext } from '../State/AuthContext'
import { loginAPi, protectedApi, registerApi } from '../Services/AuthApi';

const useAuth = () => {
    const context_auth = useContext(AuthContext);

    const { setUser, setLoading } = context_auth;

    const registerHandler = async ({ username, email, password }) => {

        try {
            setLoading(true);

            const response = await registerApi({ username, email, password });
            setUser(response.user);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false)
        }


    };

    const loginHandler = async ({ username, password }) => {

        try {
            setLoading(true);

            const response = await loginAPi({ username, password });
            setUser(response.user);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false)
        }


    };

    const protectedHandler = async () => {

        try {
            await protectedApi();
            return true;

        }
        catch (err) {
            return false;
        }

    }

    return { context_auth, registerHandler, loginHandler, protectedHandler }
}

export default useAuth
