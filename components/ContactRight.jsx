import  {useRef, useState} from 'react'
const ContactRight = ()=>{
    const email = useRef('')
    const name = useRef('')
    const message = useRef('')
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(null);
    const submit = () => {

            setLoading(true);
            email.current.value = ""
            name.current.value = ""
            message.current.value = ""


    }

    return (
            <div className="flex flex-col justify-center px-2 sm:px-20 xl:px-44 mt-16">
                <div className="text-2xl font-paytone text-secondary">
                    Have Something To Say?
                </div>
                <div className="mt-4">


                    <span>Whats your name? </span>
                    <input ref={name} className="px-2 py-2 mt-1 text-black border-2 border-secondary w-full" placeholder="Enter your name.." type="email" name="" id="" />

                 <div className="mt-4">
                 <span className="mt-4">Contact Email</span>
                    <input ref={email} className="px-2 py-2  text-black border-2 mt-1 border-secondary w-full" placeholder="Enter your email.." type="email" name="" id="" />
                 </div>
                    
                    <div className="mt-4">
                    <span className="mt-4">What is your message</span>
                    <textarea ref={message} className="px-2 mb-8 py-2 mt-1 text-black border-2 border-secondary w-full" placeholder="Enter your qurey" />

                    </div>

                    {
                        (dialog) ? (
                            <div className="bg-secondary text-primary py-4 px-2  rounded font-semibold">
                                {
                                    (dialog.status === "SUCCESS")? (<span> Thanks for contacting us . We will reach you back on the provided email soon </span>) : (<span> Sorry { "can't" } send your query at the moment, Try calling / messaging or emailing in the contact links  </span>)
                                }
                            </div>) : (

                            (loading) ? (<p>Thanks For Connecting</p>) : (<button onClick={submit} className="font-semibold  mt-4 text-lg hover:opacity-80 bg-secondary text-primary rounded-sm py-1 px-2  border-secondary  hover:bg-secondary hover:text-primary transition-all duration-500">Submit</button>)

                        )
                    }
                </div>
            </div>
        );

}

export  default  ContactRight;