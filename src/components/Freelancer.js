import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue, Link } from '@chakra-ui/react'
import * as React from 'react'

export default function Freelancer() {
  return (
    <Box id='freelance' as="section">
      <Container py={{ base: '16', md: '24' }}>
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })} color={'primary.800'}>
              Looking for a Developer?
            </Heading>
            <Text color="gray.500" maxW="2xl" textAlign="center" fontSize="xl">
              I’m a passionate Web Developer skilled in React, JavaScript, HTML, CSS, Java, and SQL. I’m currently pursuing a Full Stack Java course and always ready to take on exciting opportunities and freelance projects.
              <br />
              If you're hiring or have a project, let’s connect!
            </Text>
          </Stack>
          <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
            <Link href="mailto:rahulgopi1014@gmail.com" _hover={{ textDecoration: 'none' }}>
              <Button
                variant="primary"
                size="lg"
                bg="primary.700"
                _hover={{
                  bg: 'primary.900',
                }}
              >
                Send an Email
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
