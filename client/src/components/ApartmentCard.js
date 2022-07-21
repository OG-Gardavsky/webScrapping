import H3 from '@material-tailwind/react/Heading3';
import {Image} from "@material-tailwind/react";


export default function ApartmentCard({title, imageLink, url}) {
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-2xl mt-64">
                {/*<div>*/}
                    <div className="px-6">





                        <div className="text-center my-8">
                            <a href={url} target={'_blank'}>
                                <Image src={imageLink} rounded={false} raised={true} />
                                <H3 color="gray">{title}</H3>
                                <H3 color="gray">dfdkfjdfjkdj</H3>
                            </a>


                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
