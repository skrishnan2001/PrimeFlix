import { useEffect } from "react";
import * as React from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export function useAuth() {
    const [user, setUser] = React.useState<User>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
                setLoading(false);
            } else {
                // User is signed out
                setUser(undefined);
                setLoading(false);
            }
        });

        return unsubscribeFromAuthStateChanged;
    }, []);

    return {
        user,
        loading
    };
}