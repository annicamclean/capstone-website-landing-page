// src/components/Features.tsx
import { Box, Container, SimpleGrid, Image, Text, Stack, useColorModeValue } from '@chakra-ui/react';

const Features = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    
    const features = [
        {
            title: "Medication Tracking",
            description: "Keep track of all your medications and schedules in one place",
            image: "/path-to-screenshot.png"
        },
        {
            title: "Health Integration",
            description: "Connect with Google Fit to monitor your health metrics",
            image: "/path-to-screenshot.png"
        },
        // Add more features
    ];

    return (
        <Box py={20} bg={bg} id="features">
            <Container maxW="container.xl">
                <Stack gap={12}>
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                        Features
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                        {features.map((feature) => (
                            <Box key={feature.title} bg={cardBg} p={6} rounded="lg" shadow="md">
                                <Stack gap={4}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        rounded="lg"
                                        objectFit="cover"
                                    />
                                    <Text fontSize="xl" fontWeight="bold">{feature.title}</Text>
                                    <Text color={textColor}>{feature.description}</Text>
                                </Stack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
};

export default Features;