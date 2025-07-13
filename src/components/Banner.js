import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import Education from './Education'
import { Link } from '@chakra-ui/react';
import myPhoto from '../images/rahul_gopi.jpg';
export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image
                            borderColor={'gray.100'}
                            src={myPhoto}
                            width='150px'
                            height='170px'
                            borderRadius='full'
                            objectFit='cover'
                            alt='Rahul Gopi Avatar'
                            
                            />
                        </Flex>

                        <Heading textAlign={'center'}>RAHUL G</Heading>

                        <Text fontSize="sm" textAlign="center">
                        Bachelor of Engineering in Computer Science Graduate(2025), currently upskilling through a 4-month Java Full Stack course.
                         Skilled in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>Java</b>,<b>SQL</b>
                         . Open to <Tag variant="solid">Internship</Tag>
                         and <Tag variant="solid" ml={1}>Job Opportunities</Tag> in Web Development.
                        </Text>


                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack Developer</Tag>
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'} color="#1a73e8">Email</Text>
                                    <Text >
                                    <Link
                                        href="mailto:rahulgopi1014@gmail.com"
                                        color="#1a73e8"
                                    >
                                        rahulgopi1014@gmail.com
                                    </Link>
                                    </Text>
                                </VStack>
                            </HStack>

                        <HStack>
                        <Box me={2}>
                            <IconButton shadow="md" variant="ghost" border="1px solid" borderColor="gray.300">
                            <FaInstagram />
                            </IconButton>
                        </Box>
                        <VStack alignItems="start" spacing={0.1}>
                            <Text
                            fontSize="sm"
                            bgGradient="linear(to-r, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                            bgClip="text"
                            >
                            Instagram
                            </Text>
                            <Text bgGradient="linear(to-r, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                            bgClip="text">_rahul_gopi</Text>
                        </VStack>
                        </HStack>



                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'} color="#24292e">Github</Text>
                                    <Text fontWeight="600">
                                    <Link
                                        href="https://github.com/rahulgopi1014"
                                        isExternal
                                        color="#333333"
                                    >
                                        github.com
                                    </Link>
                                    </Text>

                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaLinkedin /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize="sm"
                                    bgGradient="linear(to-l, #0077B5, #93c0eeff)"
                                    bgClip="text">Linkedin</Text>
                                    <Text fontWeight="100">
                                    <Link
                                        href="https://www.linkedin.com/in/rahul-g-187254293"
                                        isExternal
                                         bgGradient="linear(to-r, #0077B5, #93c0eeff)"
                                    bgClip="text"
                                    >
                                        rahul@linkedin
                                    </Link>
                                    </Text>

                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaTwitter /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                <Text fontSize={'sm'} bgGradient="linear(to-r, #1DA1F2, #0d8ddb)"
                                    bgClip="text">Twitter</Text>
                                <Text bgGradient="linear(to-r, #1DA1F2, #0d8ddb)"
                                    bgClip="text">
                                    rahul gopi
                                </Text>
                                </VStack>
                                </HStack>

                                </VStack>
                                </Box>


                                <ButtonGroup justifyContent="center" alignItems="center" variant="ghost" spacing={1.9}>
                                <IconButton
                                    _hover={{
                                    color: '#1877F2', // Facebook Blue
                                    bgColor: '#E7F3FF',
                                    border: '1px solid',
                                    borderColor: '#1877F2',
                                    }}
                                    icon={<FaFacebook size={24} />}
                                />
                                <IconButton
                                    _hover={{
                                    color: '#df5a86ff', // Instagram Pink
                                    bgColor: '#FDECEF',
                                    border: '1px solid',
                                    borderColor: '#da658cff',
                                    }}
                                    icon={<FaInstagram size={24} />}
                                />
                                <IconButton
                                    _hover={{
                                    color: '#1DA1F2', // Twitter Blue
                                    bgColor: '#E8F5FD',
                                    border: '1px solid',
                                    borderColor: '#1DA1F2',
                                    }}
                                    icon={<FaTwitter size={24} />}
                                />
                                </ButtonGroup>

                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Education
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}
