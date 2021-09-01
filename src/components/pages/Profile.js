import React, { useContext, useEffect } from "react";

import Header from "../Header";
import Settings from "../cards/Settings";
import Footer from "../Footer";

import { useHistory } from "react-router-dom";

export default function Profile({ user }) {
    let history = useHistory();

    useEffect(() => {
        if (!user.username) {
            history.push("/login");
        }
    }, []);
    return (
        <>
            <Header user={user} />
            <main>
                <h2>{user.username}'s Profile</h2>
                <Settings user={user} />
            </main>
            <Footer/>
        </>
    );
}
