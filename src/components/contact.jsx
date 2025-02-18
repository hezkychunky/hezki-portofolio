import { Mail, Linkedin, Instagram } from "lucide-react";

function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center pt-20 pb-14">
      <h1 className="text-3xl text-slate-600 pb-4">Hit Me Up </h1>
      <p className="">
        Let{"'"}s build something great together! Drop me a message, and I{"'"}
        ll get back to you soon.
      </p>
      <div className="flex space-x-4 items-center justify-center p-4">
        {/* Email */}
        <a
          href="mailto:yehezkielbudiyana@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Mail className="w-8 h-8 text-gray-600 group-hover:text-red-500 transition duration-300" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yehezkiel-budiyana/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-blue-700 transition duration-300" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hezkycrunchy/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Instagram className="w-8 h-8 text-gray-600 group-hover:text-pink-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
