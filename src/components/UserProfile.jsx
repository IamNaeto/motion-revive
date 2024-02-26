import ProfileForm from "./ProfileForm";
import Header from "./header/Header";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const UserProfile = () => {
    const {DarkTheme} = useContext(ThemeContext)
    return ( 
        <main className={`main ${DarkTheme && "dark"} w-full`}>
            <Header />
            <ProfileForm />
        </main>
     );
}
 
export default UserProfile;