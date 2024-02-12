export default function Contactpage() {
  return (
    <section>
      <h1 className="text-[#EA7600] text-[48px] text-center font-semibold">Contact Us</h1>
      <p className="w-[60%] mt-[23px] text-center mx-auto">For inquiries, assistance, or feedback, our team at Motion Revive is here to help. 
      Feel free to reach out to us via email, phone, or the contact form below.</p>
      <form className="w-[40%] mx-auto mt-[50px]" action="">
        <label className="mb-[16px] font-bold block" htmlFor="name">Name</label>
        <input className="mb-[21px] outline-none border-solid border-2 border-[#CCCCCC] h-[60px] w-full rounded-[5px]" type="text" name="Name" id="name" />
        <label className="mb-[16px] font-bold block" htmlFor="email">Email</label>
        <input className="mb-[21px] outline-none border-solid border-2 border-[#CCCCCC] h-[60px] w-full rounded-[5px]" type="email" name="Email" id="email" />
        <label className="mb-[16px] font-bold block" htmlFor="message">Message</label>
        <textarea className="mb-[21px] outline-none border-solid border-2 border-[#CCCCCC] h-[120px] w-full rounded-[5px]" type="text" name="Message" id="message"/>
        <button className="text-[#FFFFFF] bg-[#F99025] w-full py-[16px]">Submit</button>
      </form>
    </section>
  )
}