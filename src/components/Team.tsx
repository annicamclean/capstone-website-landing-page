// src/components/Team.tsx
import { Box, Container, SimpleGrid, Image, Text, Stack, Link,  useColorModeValue, IconButton, Tooltip, HStack, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaFileAlt } from 'react-icons/fa';

interface TeamMember {
    name: string;
    role: string;
    futureRole: string;
    image: string;
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    website?: string;
}

const TeamMember = ({ member }: { member: TeamMember }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const subTextColor = useColorModeValue('gray.600', 'gray.300');
    const iconColor = useColorModeValue('gray.600', 'gray.300');
    const iconHoverColor = useColorModeValue('blue.500', 'blue.300');
    const cardBorder = useColorModeValue('gray.200', 'gray.700');

    return (
        <Box
            p={6}
            bg={cardBg}
            rounded="xl"
            shadow="lg"
            borderWidth="1px"
            borderColor={cardBorder}
            transition="all 0.3s"
            _hover={{
                transform: 'translateY(-5px)',
                shadow: '2xl',
                borderColor: useColorModeValue('blue.500', 'blue.300'),
            }}
        >
            <VStack spacing={6}>
                <Box
                    position="relative"
                    w="150px"
                    h="150px"
                    rounded="full"
                    overflow="hidden"
                    shadow="lg"
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.3s ease"
                        _hover={{
                            transform: 'scale(1.1)',
                        }}
                    />
                </Box>
                <VStack spacing={2} textAlign="center">
                    <Text 
                        fontWeight="bold" 
                        fontSize="2xl"
                        color={textColor}
                    >
                        {member.name}
                    </Text>
                    <Text 
                        fontSize="md" 
                        color={subTextColor}
                        fontWeight="medium"
                    >
                        {member.role}
                    </Text>
                </VStack>
                <HStack spacing={4} justify="center">
                    {member.website && (
                        <Tooltip label="Personal Website" hasArrow>
                            <IconButton
                                as={Link}
                                href={member.website}
                                target="_blank"
                                aria-label="Personal Website"
                                icon={<FaGlobe />}
                                variant="ghost"
                                color={iconColor}
                                _hover={{
                                    bg: useColorModeValue('gray.100', 'gray.700'),
                                    color: iconHoverColor,
                                    transform: 'scale(1.1)',
                                }}
                                transition="all 0.3s"
                            />
                        </Tooltip>
                    )}
                    <Tooltip label="GitHub" hasArrow>
                        <IconButton
                            as={Link}
                            href={member.github}
                            target="_blank"
                            aria-label="GitHub"
                            icon={<FaGithub />}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                bg: useColorModeValue('gray.100', 'gray.700'),
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                        />
                    </Tooltip>
                    <Tooltip label="LinkedIn" hasArrow>
                        <IconButton
                            as={Link}
                            href={member.linkedin}
                            target="_blank"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin />}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                bg: useColorModeValue('gray.100', 'gray.700'),
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                        />
                    </Tooltip>
                    <Tooltip label="Email" hasArrow>
                        <IconButton
                            as={Link}
                            href={`mailto:${member.email}`}
                            aria-label="Email"
                            icon={<FaEnvelope />}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                bg: useColorModeValue('gray.100', 'gray.700'),
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                        />
                    </Tooltip>
                    <Tooltip label="Download Resume" hasArrow>
                        <IconButton
                            as={Link}
                            href={member.resume}
                            target="_blank"
                            aria-label="Download Resume"
                            icon={<FaFileAlt />}
                            variant="ghost"
                            color={iconColor}
                            _hover={{
                                bg: useColorModeValue('gray.100', 'gray.700'),
                                color: iconHoverColor,
                                transform: 'scale(1.1)',
                            }}
                            transition="all 0.3s"
                            download
                        />
                    </Tooltip>
                </HStack>
            </VStack>
        </Box>
    );
};

const Team = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const headingColor = useColorModeValue('gray.800', 'white');

    const teamMembers: TeamMember[] = [
        {
            name: "Annica McLean",
            role: "Full Stack Developer",
            futureRole: "Software Engineer",
            image: "/images/annica.jpg",
            github: "https://github.com/annicamclean",
            linkedin: "https://linkedin.com/in/annicamclean",
            email: "annicamcl@gmail.com",
            resume: "/resumes/Annica_McLean_Current_Resume.pdf",
            website: "https://annicamclean.github.io/"
        },
        // Add other team members
        {
            name: "John Doe",
            role: "Full Stack Developer",
            futureRole: "Software Architect",
            image: "/path-to-image.jpg",
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            email: "john@example.com",
            resume: "/resumes/john-doe-resume.pdf",
            website: "https://johndoe.com"
        },
        {
            name: "John Doe",
            role: "Full Stack Developer",
            futureRole: "Software Architect",
            image: "/path-to-image.jpg",
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe",
            email: "john@example.com",
            resume: "/path-to-resume.pdf",
            website: "https://johndoe.com"
        },
    ];

    return (
        <Box py={20} bg={bg} id="team">
            <Container maxW="container.xl">
                <Stack gap={16}>
                    <Text 
                        fontSize="4xl" 
                        fontWeight="bold" 
                        textAlign="center"
                        color={headingColor}
                    >
                        Our Team
                    </Text>
                    <SimpleGrid 
                        columns={{ base: 1, md: 2, lg: 3 }} 
                        gap={8}
                        px={{ base: 4, md: 8 }}
                    >
                        {teamMembers.map((member) => (
                            <TeamMember key={member.name} member={member} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
};

export default Team;