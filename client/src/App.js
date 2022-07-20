import './App.css';
import {ApartmentCard} from "./comps/ApartmentCard";

const appartments = [
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



function App() {
    return (
        <div className="App">
            <h1>Welcome to your dream apartment</h1>

            {appartments.map((appartment) => {
                return <ApartmentCard
                        title={appartment.title}
                        url={appartment.url}
                        imgUrl={appartment.imageLink}
                        key={appartment.url}
                       />
            })}


        </div>
    );
}

export default App;
