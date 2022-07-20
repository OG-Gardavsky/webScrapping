import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
export default function DefaultNavbar() {
    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>Czech dream estates</NavbarBrand>
                </NavbarWrapper>

            </NavbarContainer>
        </Navbar>
    );
}
