import { createContext } from "react";
import Home from "./components/Home";

export const UserContext = createContext();

function App() {
    const UserInfo = {
        name: "Nayan Bhoi ",
        email: "nayan6536@gmail.com",
        class: "MCA"
    };

    return (
        <>
            <UserContext.Provider value={UserInfo}>
                <Home />
            </UserContext.Provider>
        </>
    );
}

export default App;