import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u6rqffl', 'template_3gxnpth', form.current, {
        publicKey: 'X61iQo0Q8C6yKRFjX',
      })
      .then(
        () => {
          props.showAlert("Email has been send successfully!", "success");
        },
        (error) => {
         props.showAlert("An error ocurred. Try it again!", "danger");
        },
      );

      e.target.reset();
      
  };

  const {
    register,
    formState: { errors },
  } = useForm();


  return (
    <section id="contact" className="contact py-48 mb-13">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="w-full text-black bg-white font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              name="name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full text-black bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              type="email" 
              name="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full text-black bg-white font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>


      <footer className="h-30 bg-cyan pt-10 mt-10">
      <div className="w-10/12 mx-auto flex justify-center">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-xl text-cyan-200">
          Designed and Developed By <a 
           className="hover:opacity-50 transition duration-500"
           href="https://www.linkedin.com/in/gaurav-sharma5764/"
           target="_blank"
           rel="noreferrer"> Gaurav Sharma</a>
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Contact;
