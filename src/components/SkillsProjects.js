import React from 'react'
import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react'
import Projects from './Projects'
import CustomSkillTag from './utils/CustomSkillTag'
import FrameworkTag from './utils/FrameworkTag'
import ToolTag from './utils/ToolTag'
import skillData from '../data/skill'; // adjust path if needed


export default function SkillsProjects() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>

            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>

                <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Projects
                    </Heading>
                    <Projects />
                </Box>


                <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='start' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>

                    <Heading textAlign={'start'}>Skills</Heading>

                    <Text fontSize={'sm'} textAlign='start'>
                        My skills, which I constantly keep improving.
                    </Text>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        {/* Icons  */}

                        <Wrap>
                            <CustomSkillTag skill={'Java'} />
                            <CustomSkillTag skill={'SQL'} />
                            <CustomSkillTag skill={'React'} />
                            <CustomSkillTag skill={'Javascript'} />
                            <CustomSkillTag skill={'HTML'} />
                            <CustomSkillTag skill={'CSS'} />
                        </Wrap>
                    </Box>
                    <Box my={2}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> SoftSkills</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        <Wrap>
                            <FrameworkTag skill={'Communication'} />
                            <FrameworkTag skill={'Teamwork'} />
                            <FrameworkTag skill={'Time Management'} />
                            <FrameworkTag skill={'Adaptability'} />
                            <FrameworkTag skill={'Work Ethic'} />
                            <FrameworkTag skill={'Attention to Detail'} />
                        </Wrap>

                    </Box>
                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Other Tools</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />

                        <Wrap>
                        
                            <ToolTag skill={'VS Code'} />
                            
                            <ToolTag skill={'Git'} />
                            <ToolTag skill={'Github'} />
                            <ToolTag skill={'MySQL'} />
                            
                        </Wrap>

                    </Box>
                </Flex>
            </Flex>
        </Container>
    )
}
