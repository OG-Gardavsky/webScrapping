import { Heading5, Image} from "@material-tailwind/react";
import Card from './Card';


export default function ApartmentCard({title, imageLinks, url}) {
    return (
        <Card>
            <a href={url} target={'_blank'}>
                <div className="flex flex-row container flex-wrap ">
                    {imageLinks.map((link) => <Image src={link} rounded={false} raised={false} key={link} />)}
                </div>

                <Heading5 color="gray">{title}</Heading5>
            </a>
        </Card>
    );
}
