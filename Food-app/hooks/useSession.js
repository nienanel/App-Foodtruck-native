import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSession } from "../db";
import { setUser } from "../store/authSlice";

const useSession = () => {
    const [session, setSession] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const sessionResult = await getSession();
                console.log(sessionResult);
                if (sessionResult?.rows.length > 0) {
                    const user = sessionResult.rows.item(0);
                    setSession(user);
                    dispatch(setUser(user));
                    console.log("User:", user);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        })();
    },[]);

    return { session, isloading };
};

export default useSession;


