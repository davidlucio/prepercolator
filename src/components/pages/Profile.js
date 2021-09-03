import React, { useState, useEffect } from "react";

import Header from "../Header";
import Settings from "../cards/Settings";
import ProfileCupCard from "../cards/ProfileCupCard";
import Footer from "../Footer";

import { useHistory } from "react-router-dom";
import DrinkTemplateCard from "../cards/DrinkTemplateCard";
import API from "../utils/API";

export default function Profile({ user }) {
    let history = useHistory();
    const [usersDrinks, setUsersDrinks] = useState([]);
    const [currentDrink, setCurrentDrink] = useState(0);

    useEffect(() => {
        if (!user.username) {
            history.push("/login");
        }
        let token = localStorage.getItem("token");
        API.getUserDrinks(token).then((res) => {
            // console.log(res.data);
            setUsersDrinks(res.data);
        });
    }, []);
    return (
        <>
            <Header user={user} />
            <main>
                <div className="profile">
                    <h2><span className="username">{user.username}</span>'s Profile</h2>
                    <h3>Saved Drinks</h3>
                    <div className="display-drink-details">
                        <div className="card-wrapper">
                            {usersDrinks ? (
                                usersDrinks.map((drink) => {
                                    return <DrinkTemplateCard key={drink.id} 
                                    drink={drink}
                                    currentDrink={currentDrink}
                                    setCurrentDrink={setCurrentDrink} />;
                                })
                            ) : (
                                <>Loading...</>
                            )}
                        </div>
                        <ProfileCupCard 
                            usersDrinks={usersDrinks}
                            currentDrink={currentDrink}
                        />
                    </div>

                    <Settings user={user} />
                </div>
            </main>
            <Footer />
        </>
    );
}
