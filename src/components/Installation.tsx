// src/components/Installation.tsx
import { Box, Container, Text, Stack, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const Installation = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.600', 'gray.300');

    return (
        <Box py={20} bg={bg} id="installation">
            <Container maxW="container.xl">
                <Stack gap={8}>
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                        Installation Guide
                    </Text>
                    <List spacing={4}>
                        <ListItem>
                            <Stack direction="row" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                <Text color={textColor}>
                                    Download MedAdhere from the App Store or Google Play Store
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                <Text color={textColor}>
                                    Create an account or sign in with your existing credentials
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                <Text color={textColor}>
                                    Connect your Google Fit account for health tracking
                                </Text>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack direction="row" alignItems="center">
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                <Text color={textColor}>
                                    Start adding your medications and setting up reminders
                                </Text>
                            </Stack>
                        </ListItem>
                    </List>
                </Stack>
            </Container>
        </Box>
    );
};

export default Installation;