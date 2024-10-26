import React from "react"
import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles"
import { CapybaraCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {fadeIn, slideIn} from "../utils/motion";

//service_3sql3nb
//4r4LCgqi0g6KSkXGo

const Contact = ()=> {
    const formRef = useRef;
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading ,setloading] = useState(false)

    const handleChange = (e)=> {
        const {name, value} = e.target
        setForm({...form, [name]: value,
        });
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_3sql3nb',
            'template_1t76uxq',
            {from_name:form.name,
                            to_name:'Natalia',
                            from_email:form.email,
                            to_email:'natusia.taka@gmail.com',
                            message:form.message


            },
            '4r4LCgqi0g6KSkXGo'


            )

            .then(() => {
                setloading(false);
                alert('Thank you <3 I will get back to you as soon as possible')

                setForm({
                    name:"",
                    email:"",
                    message: ""

                })

            },  (error) => {
                setLoading(false);

                console.error(error);

                alert("Something went wrong. Please try again.");

                }
            );
    };

    return(
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
            variants={slideIn("left","tween",0.2, 1)}
            className="flex-[0.75] bg-violet-800 p-8 rounded-2xl"
            >

                <h3 className={styles.sectionHeadText}>Contact</h3>
                <form

                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-7"

                >
                    <label className="flex flex-col">
                        <span className=" text-white font-medium mb-5">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className= "bg-black py-4 px-6 placeholder:text-secondary text-white rounded-xl line-clamp-4 font-medium"

                        />

                    </label>

                    <label className="flex flex-col">
                        <span className=" text-white font-medium mb-5">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your e-mail?"
                            className= "bg-black py-4 px-6 placeholder:text-secondary text-white rounded-xl line-clamp-4 font-medium"

                        />

                    </label>

                    <label className="flex flex-col">
                        <span className=" text-white font-medium mb-5">Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            className= "bg-black py-4 px-6 placeholder:text-secondary text-white rounded-xl line-clamp-4 font-medium"

                        />

                    </label>
                    <button
                    type="submit"
                    className=" flex mx-auto justify-center items-center bg-black py-4 rounded-xl px-8 w-fit text-white font-bold shadow-sm shadow-black-100 text-center"

                    >
                        {loading? "Sending..." : "Send"}

                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right","tween",0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]"
            >
                <CapybaraCanvas/>

            </motion.div>

        </div>
    )

}
export default SectionWrapper(Contact, "contact");