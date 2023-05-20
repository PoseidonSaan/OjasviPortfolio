import React from "react";

const Contacts = () => {
  return (
    <div id="contact" className="bg-[#404041]">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#F6EDE3]">
          Contact
        </h1>
        <form
          action="https://getform.io/f/6cdc589d-4ce2-4fd5-a578-0fdba5288c5d"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col text-[#F6EDE3]">
              <label className="uppercase text-sm py-2 ">Name </label>
              <input
                className="border-2 rounded-lg p-3 flex border-slate-700 bg-[#323233]"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col text-[#F6EDE3]">
              <label className="uppercase text-sm py-2 ">phone number </label>
              <input
                className="border-2 rounded-lg p-3 flex border-slate-700 bg-[#323233]"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2 text-[#F6EDE3]">
            <label className="uppercase text-sm py-2 ">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-slate-700 bg-[#323233]"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2 text-[#F6EDE3]">
            <label className="uppercase text-sm py-2 ">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-slate-700 bg-[#323233]"
              type="text"
              name="Subject"
            />
          </div>
          <div className="flex flex-col py-2 text-[#F6EDE3]">
            <label className="uppercase text-sm py-2 ">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-slate-700 bg-[#323233]"
              rows="10"
              name="message"
            />
          </div>
          <button className="capitalize bg-[#E6C17A] mt-1 p-4 w-full rounded-lg text-bold ">
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
