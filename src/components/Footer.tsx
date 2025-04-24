// src/components/Footer.tsx
import { Box, Container, Stack, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';  // Import Notion icon from Simple Icons

const Footer = () => {
    const bg = useColorModeValue('gray.100', 'gray.900');
    const textColor = useColorModeValue('gray.600', 'gray.400');
    const iconColor = useColorModeValue('gray.600', 'gray.400');
    const iconHoverColor = useColorModeValue('blue.500', 'blue.300');

    return (
        <Box bg={bg} py={10}>
            <Container maxW="container.xl">
                <Stack gap={8} alignItems="center">
                    <Stack direction="row" gap={4}>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FaGithub />}
                            onClick={() => window.open('https://github.com/yourusername/MedAdhere', '_blank')}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                        />
                        <IconButton
                            aria-label="Notion"
                            icon={<SiNotion />}
                            onClick={() => window.open('your-notion-link', '_blank')}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                        />
                    </Stack>
                    <Text color={textColor}>
                        © {new Date().getFullYear()} MedAdhere. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;