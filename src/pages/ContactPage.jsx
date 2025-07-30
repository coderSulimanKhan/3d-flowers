const ContactPage = ({ theme }) => {
  return (
    <div className={`h-[652px] flex flex-col items-center justify-center ${theme == "dark" ? "text-zinc-100" : "text-zinc-900"}`}>
      <h1 className="text-orange-400 text-4xl mt-15 lg:mt-10">Get In Touch</h1>
      <p className="mb-4 p-3">Hava questions about our flowers? We would love to hear from you and help make your floral dreams come true.</p>
      <div className={`rounded p-3 ${theme == "dark" ? "bg-zinc-800 border border-zinc-100" : "bg-zinc-200 border border-zinc-900"}`}>
        <h1 className="text-orange-400 text-2xl mb-5">Send us a Message</h1>
        <div className="w-[90vw] md:w-[50vw] flex flex-col gap-4">
          <div className="flex flex-col">
            <label className={`${theme == "dark" ? "text-blue-400" : "text-blue-700"}`} htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="e.g Suliman Khan" className={`border px-3 py-1 text-xl rounded outline-none focus:border-blue-900 focus:border-2 ${theme == "dark" ? "border-zinc-100" : "border-zinc-900"}`} />
          </div>
          <div className="flex flex-col">
            <label className={`${theme == "dark" ? "text-blue-400" : "text-blue-700"}`} htmlFor="email">Email Address</label>
            <input type="text" id="email" placeholder="e.g suliman@example.com" className={`border px-3 py-1 text-xl rounded outline-none focus:border-blue-900 focus:border-2 ${theme == "dark" ? "border-zinc-100" : "border-zinc-900"}`} />
          </div>
          <div className="flex flex-col">
            <label className={`${theme == "dark" ? "text-blue-400" : "text-blue-700"}`} htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g 03456789" className={`border px-3 py-1 text-xl rounded outline-none focus:border-blue-900 focus:border-2 ${theme == "dark" ? "border-zinc-100" : "border-zinc-900"}`} />
          </div>
          <div className="flex flex-col">
            <label className={`${theme == "dark" ? "text-blue-400" : "text-blue-700"}`} htmlFor="message">Message</label>
            <input type="text" id="username" placeholder="e.g Tell us about you needs." className={`border px-3 py-1 text-xl rounded outline-none focus:border-blue-900 focus:border-2 ${theme == "dark" ? "border-zinc-100" : "border-zinc-900"}`} />
          </div>
          <button className={`py-2 text-xl rounded border cursor-pointer transition duration-300 ${theme == "dark" ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 border-zinc-100" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100 border-zinc-900"}}`}>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage