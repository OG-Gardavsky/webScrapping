import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Header';
import ApartmentCard from 'components/ApartmentCard';
import {useEffect, useState} from "react";
import Card from '../components/Card'
import Pagination from "../components/Pagination";

export default function HomePage() {

    const [estatelist, setEstatelist] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadError, setLoadError] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPosts, setTotalPosts] = useState(200)



    useEffect(() => {
        getEstates(currentPage)
            .then(() => {
                setLoading(false)
                setLoadError(false)
            })
            .catch((err) => setLoadError(true))

    }, [])

    const getEstates = async (pageNum) => {
        const res = await fetch(`http://localhost:8080/estates?page=${pageNum}`)
        const { estates } = await res.json()
        setEstatelist(estates)
    }

    const paginate = async (number) => {
        setCurrentPage(number)
        await getEstates(number)
    }

    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />

                <Card><Pagination currentPage={currentPage} postsPerPage={20} totalPosts={totalPosts} paginate={paginate}/></Card>
                { loadError && <Card><h1>Sorry, we are unable to load estates.</h1></Card> }
                { loading && <Card><h1>Loading....</h1></Card> }



                {estatelist.map((estate) => {
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
