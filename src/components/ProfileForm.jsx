import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineUpload } from "react-icons/ai";

const ProfileForm = () => {
    return (
        <main className="grid gap-4 px-[2%] py-10">
            <h1 className="text-2xl font-semibold text-[#555555]">Update Profile</h1>

            <form action="" className="text-[14px] md:text-[16px] grid gap-4 bg-[#F5F5F5] p-5 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                    <label htmlFor="">First Name
                        <input type="text" className="input" />
                    </label>
                    <label htmlFor="">Last Name
                        <input type="text" className="input" />
                    </label>
                </div>
                <label htmlFor="">Email
                    <input type="email" className="input" />
                </label>
                <label htmlFor="">Gender
                    <input type="text" className="input" />
                </label>
                <label htmlFor="">Change Password
                    <input type="password" className="input" />
                </label>

                <button
                    className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg"
                    type="submit"
                >Update Profile</button>
                <button
                    className="bg-[#fff] border border-[#555555] text-black font-medium py-3 px-5 text-center rounded-lg flex flex-col items-center justify-center hover:text-[#F99025] hover:border-[#F99025] transition-all delay-150"
                    type="button"
                ><AiOutlineUpload className="text-2xl"/> Upload profile picture</button>
                <button
                    className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg flex items-center justify-between mt-16"
                    type="button"
                >Delete my profile and data <FaAngleRight className="text-3xl"/></button>

            </form>


        </main>
    );
}

export default ProfileForm;