import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Header';
import ApartmentCard from 'components/ApartmentCard';
import {useEffect, useState} from "react";
import Card from '../components/Card'

export default function HomePage() {

    const [estatelist, setEstatelist] = useState([])
    const [loadError, setLoadError] = useState(false)

    const getEstates = async () => {

        const res = await fetch('http://localhost:8080/estates')
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

                { loadError && <Card><h1>Sorry, we are unable to load estates.</h1></Card> }

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
