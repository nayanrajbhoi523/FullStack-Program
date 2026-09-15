import { createContext } from "react";
import Home from "./components/Home";

export const UserContext = createContext();

function App() {
    return (
        <>
            <UserContext.Provider value="Darshan Dudhat">
                <Home />
            </UserContext.Provider>
        </>
    );
}

export default App;