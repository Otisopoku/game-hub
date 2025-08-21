import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';

const NavBar = () => {

    return (
        <HStack> 
            <Image src={logo} boxSize={10}/>
            <Text>NavBar</Text>
        </HStack> // horizontal stack for making the navigation bar
    )
}

export default NavBar