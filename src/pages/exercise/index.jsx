// import UserExercises from "../../components/UserExercises";
// import Header from "../../components/header/Header";
// import { ThemeContext } from "../../ThemeContext";
// import { useContext } from "react";

import Exercises from "../../components/Exercise";
import UserExercises from "../../components/UserExercises";
import Navigation from "../../components/navigation/Navigation";

// const Exercise = () => {
//     const {DarkTheme} = useContext(ThemeContext)
//     return ( 
//         <main className={`${DarkTheme && "dark"}`}>
//             <Header />
//             <UserExercises />
//         </main>
//      );
// }
 
// export default Exercise;

const Exercise = () => {
  return ( 
    <main className="flex">
      <Navigation />
      <Exercises />
    </main>
   );
}
 
export default Exercise;