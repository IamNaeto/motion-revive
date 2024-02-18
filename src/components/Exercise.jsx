import UserExercises from "./UserExercises";
import Header from "./header/Header";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const Exercises = () => {
    const {DarkTheme} = useContext(ThemeContext)
    return ( 
        <main className={`main ${DarkTheme && "dark"} relative right-0 w-full`}>
            <Header />
            <UserExercises />
        </main>
     );
}
 
export default Exercises;