export default function ContactForm() {
  return (
    <section className="relative top-[80px] px-[5%] py-10 grid items-center justify-center place-items-center gap-6">
      <h1 className="text-[#EA7600] text-3xl lg:text-4xl xl:text-5xl text-center font-semibold">Contact Us</h1>
      <p className="w-full sm:w-[80%] lg:w-[60%] text-center mx-auto">For inquiries, assistance, or feedback, our team at Motion Revive is here to help. 
      Feel free to reach out to us via email, phone, or the contact form below.</p>
      <form className="w-full sm:w-[80%] lg:w-[60%] grid" action="#">
        <label className="mt-[16px] font-bold" htmlFor="name">Name</label>
        <input className="input" type="text" name="Name" id="name" />
        <label className="mt-[16px] font-bold" htmlFor="email">Email</label>
        <input className="input" />
        <label className="mt-[16px] font-bold" htmlFor="message">Message</label>
        <textarea className="input" cols={30} rows={10} type="text" name="Message" id="message"/>
        <button className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg mt-5">Submit</button>
      </form>
    </section>
  )
}