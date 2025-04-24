// src/components/Hero.tsx
import { Box, Container, Heading, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';

const Hero = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');  // Light mode, Dark mode
    const textColor = useColorModeValue('gray.800', 'gray.100');

    return (
        <Box bg={bg} py={20}>
            <Container maxW="container.xl">
                <Stack gap={8} alignItems="center" textAlign="center">
                    <Heading size="2xl" color={textColor}>MedAdhere</Heading>
                    <Text fontSize="xl" color={textColor}>
                        Your Personal Medication Management Assistant
                    </Text>
                    <Button
                        size="lg"
                        colorScheme="blue"
                        onClick={() => window.open('your-app-store-link', '_blank')}
                    >
                        Download Now
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;