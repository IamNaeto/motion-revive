import { Link } from "react-router-dom";
const AuthSideDesign = () => {
    return ( 
        <main className="hidden md:grid bg-[#F99025] min-h-screen p-10">
            <section className="grid grid-cols-1 gap-8 items-center justify-center place-items-center">
            <Link to={"/"}>
            <img src="/img/logo-black.png" alt="logo" width={300} height={300}/>
            </Link>

           <img src="/img/auth-img.png" alt="auth-img"  width={400} height={400}/>
            </section>
        </main>
     );
}
 
export default AuthSideDesign;