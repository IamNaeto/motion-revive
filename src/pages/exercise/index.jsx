import Exercises from "../../components/Exercise";
import Navigation from "../../components/navigation/Navigation";

const Exercise = () => {
  return ( 
    <main className="flex">
      <Navigation />
      <Exercises />
    </main>
   );
}
 
export default Exercise;