// src/components/About.tsx
import { Box, Container, Text, Stack, useColorModeValue } from '@chakra-ui/react';

const About = () => {
    const bg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Box py={20} bg={bg} id="about">
            <Container maxW="container.xl">
                <Stack gap={8} alignItems="center" textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold">
                        About MedAdhere
                    </Text>
                    <Text fontSize="xl" color={textColor} maxW="3xl">
                        MedAdhere is a comprehensive medication management application designed
                        to help users track their medications, monitor health metrics, and maintain
                        better medication adherence. With features like Google Fit integration and
                        detailed health tracking, MedAdhere makes it easier than ever to stay on
                        top of your health routine.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default About;
