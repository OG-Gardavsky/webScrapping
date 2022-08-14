import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Header';
import ApartmentCard from 'components/ApartmentCard';
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@material-tailwind/react";


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
    {
        "title": "For sale apartment 3+1 69 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QL_Ju/aiBUYu.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QK_JX/vpbUS8.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gY_n/7Qlmu7.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/3+1/litvinov-janov-albrechticka/1529620044"
    },
    {
        "title": "For sale apartment 1+kt 21 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QP_Kn/e5XlcK.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LR/wFslYp.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QP_Kn/3X0lcL.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+kt/sluknov-sluknov-sidliste/1942287948"
    },
    {
        "title": "Auction apartment 3+1 69 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gV_o/A426Jn.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gU_l/IfM6IT.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gR_l/cZ4V2L.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/auction/flat/3+1/kutna-hora--/1753339468"
    },
    {
        "title": "For sale apartment 1+1 35 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LS/juKM7g.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LS/x40M7h.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QN_Js/f07M7J.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+1/krupka-marsov-karla-capka/2634233420"
    },
    {
        "title": "For sale apartment 1+kt 22 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QK_JX/lhNSLr.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QP_Ko/V1eSVL.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QJ_Jc/tFdSSJ.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+kt/nyrsko-nyrsko-tylova/774841932"
    },
    {
        "title": "For sale apartment 4+1 80 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gT_o/V81urD.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gQ_n/ibRur1.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QM_KP/OTTZ1B.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/4+1/litvinov-janov-lucni/2698430812"
    },
    {
        "title": "For sale apartment 3+1 96 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gZ_n/tyoR6H.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gZ_n/MzER6I.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gV_o/jWQR02.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/3+1/teplice-teplice-jiriho-wolkera/2691475020"
    },
    {
        "title": "For sale apartment 3+1 88 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_F_Bd/jD2KwM.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_H_BY/Q6wOjH.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_E_Bi/c1xBPkN.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/3+1/velka-hledsebe-klimentov-/3663519324"
    },
    {
        "title": "For sale apartment 1+1 36 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QJ_Ja/x1UQa3.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QR_L0/nbaP6Q.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QO_Kd/AFIP5W.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+1/krupka-marsov-karla-capka/2584422748"
    },
    {
        "title": "For sale apartment 1+1 36 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QN_Jq/ComKJ1.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QP_Km/o8jKUu.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QN_Jq/mMRKJ2.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+1/krupka-marsov-karla-capka/4184553820"
    },
    {
        "title": "For sale apartment 1+1 36 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QK_JT/ku1I8y.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QK_JT/GtmI8z.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LO/ZNYJDN.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+1/krupka-marsov-karla-capka/3332601948"
    },
    {
        "title": "For sale apartment 1+1 37 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_gX_m/BxBUk3.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gQ_n/fk5Ui6.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_gW_m/uCnUll.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/1+1/hostomice-hostomice-skolni-namesti/810497612"
    },
    {
        "title": "For sale apartment 2+kt 40 m²",
        "imageLinks": [
            "https://d18-a.sdn.cz/d_18/c_img_QN_Jr/6urPQo.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QQ_LR/IyUPIr.jpeg?fl=res,400,300,3|shr,,20|jpg,90",
            "https://d18-a.sdn.cz/d_18/c_img_QR_L1/eHgPN9.jpeg?fl=res,400,300,3|shr,,20|jpg,90"
        ],
        "url": "https://www.sreality.cz//en/detail/sale/flat/2+kt/krupka-marsov-dukelskych-hrdinu/2357274972"
    },
]

export default function HomePage() {

    const [estatelist, setEstatelist] = useState([])

    const getEstates = async () => {

        const res = await fetch('http://localhost:4000/estates')
        const { estates } = await res.json()
        setEstatelist(estates)
    }

    useEffect(() => {
        getEstates()
            .then()
            .catch((err) => console.log(err))

    }, [])

    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />

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
