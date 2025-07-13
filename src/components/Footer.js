import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => (
  <Container
    maxW={'100%'}
    as="footer"
    role="contentinfo"
    py={{ base: '8', md: '8' }}
    bg="white"
    color={'primary.800'}
  >
    <Stack justify="center" spacing={{ base: '4', md: '5' }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup justifyContent="center" alignItems="center" variant="ghost" spacing={1.9}>

          {/* Facebook */}
          <IconButton
            as="a"
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook size={24} />}
            _hover={{
              color: '#1877F2',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: '#1877F2',
            }}
          />

          {/* Instagram */}
          <IconButton
            as="a"
            href="https://instagram.com/_rahul_gopi"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram size={24} />}
            _hover={{
              color: 'white',
              bgGradient: 'linear(to-tr, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
              border: '1px solid',
              borderColor: '#d62976',
            }}
          />

          {/* Twitter */}
          <IconButton
            as="a"
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter size={24} />}
            _hover={{
              color: 'white',
              bgGradient: 'linear(to-tr, #1DA1F2, #0d8ddb)',
              border: '1px solid',
              borderColor: '#1DA1F2',
            }}
          />
        </ButtonGroup>
      </Stack>

      <Text textAlign="center" fontSize="20px" fontWeight="bold" color="gray.600">
        Thank You ❤️
      </Text>
    </Stack>
  </Container>
);
