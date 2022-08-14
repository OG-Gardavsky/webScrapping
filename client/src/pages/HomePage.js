import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Header';
import ApartmentCard from 'components/ApartmentCard';
import {useEffect, useState} from "react";
import {Heading5, Image} from "@material-tailwind/react";

export default function HomePage() {

    const [estatelist, setEstatelist] = useState([])
    const [loadError, setLoadError] = useState(false)

    const getEstates = async () => {

        const res = await fetch('http://localhost:4000/estates')
        const { estates } = await res.json()
        setEstatelist(estates)
    }

    useEffect(() => {
        getEstates()
            .then()
            .catch((err) => setLoadError(true))

    }, [])

    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />

                {loadError &&

                    <section className="relative py-8 bg-gray-100">
                        <div className="container max-w-7xl px-4 mx-auto">
                            <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-xl rounded-2xl my-4">
                                <div className="px-6">
                                    <div className=" place-content-center my-8">

                                        <h1>Sorry, we are unable to load estates.</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }

                {
                    estatelist.map((estate) => {
                        return <ApartmentCard
                                title={estate.title}
                                url={estate.url}
                                imageLinks={estate.imagesurls}
                                key={estate.id}
                               />
                    })
                }
            </main>
            <DefaultFooter />
        </>

    );
}
