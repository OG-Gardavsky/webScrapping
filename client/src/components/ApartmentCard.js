import H3 from '@material-tailwind/react/Heading3';
import {Heading4, Heading5, Image} from "@material-tailwind/react";


export default function ApartmentCard({title, imageLinks, url}) {
    return (
        <section className="relative py-8 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-2xl my-4">
                {/*<div>*/}
                    <div className="px-6">





                        <div className=" place-content-center my-8">
                            <a href={url} target={'_blank'}>
                                <div className="flex flex-row container flex-wrap ">
                                    {imageLinks.map((link) => <Image src={link} rounded={false} raised={false} />)}
                                </div>

                                <Heading5 color="gray">{title}</Heading5>
                            </a>


                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
