// src/components/Navbar.tsx
import {
    Box,
    Container,
    Stack,
    Button,
    useColorMode,
    IconButton,
    useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    HStack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useRef } from 'react';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    
    const isMobile = useBreakpointValue({ base: true, md: false });

    const navItems = [
        { name: 'About', to: 'about' },
        { name: 'Features', to: 'features' },
        { name: 'Team', to: 'team' },
        { name: 'Installation', to: 'installation' },
    ];

    const NavLink = ({ item, onClose: onDrawerClose }: { item: { name: string; to: string }, onClose?: () => void }) => (
        <ScrollLink
            to={item.to}
            smooth={true}
            duration={500}
            cursor="pointer"
            onClick={onDrawerClose}
        >
            <Button variant="ghost" w={isMobile ? "full" : "auto"}>
                {item.name}
            </Button>
        </ScrollLink>
    );

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bg={bgColor}
            color={textColor}
            boxShadow="sm"
            zIndex={1000}
            borderBottom="1px"
            borderColor={borderColor}
        >
            <Container maxW="container.xl" py={4}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <ScrollLink to="hero" smooth={true} duration={500} cursor="pointer">
                        <Text fontSize="2xl" fontWeight="bold">MedAdhere</Text>
                    </ScrollLink>

                    {isMobile ? (
                        // Mobile View
                        <HStack spacing={4}>
                            <IconButton
                                aria-label="Toggle color mode"
                                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                                onClick={toggleColorMode}
                                variant="ghost"
                            />
                            <IconButton
                                ref={btnRef}
                                aria-label="Open menu"
                                icon={<FaBars />}
                                onClick={onOpen}
                                variant="ghost"
                            />
                        </HStack>
                    ) : (
                        // Desktop View
                        <HStack spacing={8}>
                            {navItems.map((item) => (
                                <NavLink key={item.to} item={item} />
                            ))}
                            <IconButton
                                aria-label="Toggle color mode"
                                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                                onClick={toggleColorMode}
                                variant="ghost"
                            />
                        </HStack>
                    )}
                </Stack>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={bgColor}>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Menu
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="stretch" pt={4}>
                            {navItems.map((item) => (
                                <NavLink key={item.to} item={item} onClose={onClose} />
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;