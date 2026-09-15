import { createContext } from "react";
import College from "./components/College";

export const CollegeContext = createContext();

function App() {
    const collegeInfo = {
        username: "Nayan Bhoi",
        email: "nayan6536@gmail.com",
        collegeName: "J G University",
        department: "Computer Applications",
        city: "Ahmedabad",
        state: "Gujarat"
    };

    return (
        <>
            <CollegeContext.Provider value={collegeInfo}>
                <College />
            </CollegeContext.Provider>
        </>
    );
}

export default App;