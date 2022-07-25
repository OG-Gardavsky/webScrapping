import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Header';
import ApartmentCard from 'components/ApartmentCard';


const apartments = [
    {
        "title": "Auction apartment 2+kt 83 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QO_Kf/PMmBLA.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QM_KP/XJBBKK.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LS/KiSBMn.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/auction/flat/2+kt/opava-kylesovice-vanickova/2443630156"
    },
    {
        "title": "Auction apartment 4+1 67 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gT_m/C6KfGG.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gU_k/68VeqQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gR_j/SiReGe.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/auction/flat/4+1/litvinov-janov-hamerska/1569155420"
    },
    {
        "title": "For sale apartment 3+1 82 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gT_o/Qn9xUd.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QI_JX/CfMbUd.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gR_m/wVexOz.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/3+1/pardubice-bile-predmesti-dasicka/71505484"
    },
    {
        "title": "Auction apartment 2+kt 41 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gT_o/ThBIHJ.png?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gT_o/P1iIHK.png?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gX_m/2p1IIk.png?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/auction/flat/2+kt/litvinov-janov-albrechticka/2272511564"
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
                                imageLinks={apartment.imageLinks}
                                key={apartment.url}
                               />
                    })
                }
            </main>
            <DefaultFooter />
        </>

    );
}
