import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ApartmentCard from 'components/ApartmentCard';


const apartments = [
    {
        title: 'Auction apartment 2+kt 83 m²',
        imageLink: 'https://d18-a.sdn.cz/d_18/c_img_QO_Kf/PMmBLA.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
        url: 'https://www.sreality.cz//en/detail/auction/flat/2+kt/opava-kylesovice-vanickova/2443630156'
    },
    {
        title: 'Auction apartment 4+1 67 m²',
        imageLink: 'https://d18-a.sdn.cz/d_18/c_img_gT_m/C6KfGG.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
        url: 'https://www.sreality.cz//en/detail/auction/flat/4+1/litvinov-janov-hamerska/1569155420'
    },
    {
        title: 'Auction apartment 2+kt 49 m²',
        imageLink: 'https://d18-a.sdn.cz/d_18/c_img_QN_Jr/v0inEL.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
        url: 'https://www.sreality.cz//en/detail/auction/flat/2+kt/nove-mesto-na-morave-nove-mesto-na-morave-zdarska/1905256012'
    },
    {
        title: 'Auction apartment 3+kt 67 m²',
        imageLink: 'https://d18-a.sdn.cz/d_18/c_img_gS_m/dr5u1W.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
        url: 'https://www.sreality.cz//en/detail/auction/flat/3+kt/nove-mesto-na-morave-nove-mesto-na-morave-zdarska/2995775052'
    },
]

export default function HomePage() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />

                {
                    apartments.map((apartment) => {
                        return <ApartmentCard
                                title={apartment.title}
                                url={apartment.url}
                                imageLink={apartment.imageLink}
                                key={apartment.url}
                               />
                    })
                }

                <ApartmentCard />
            </main>
            <DefaultFooter />
        </>

    );
}
