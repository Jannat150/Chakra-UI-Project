import { Box,Button,Heading,HStack,Input,Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={['coloumn','row']}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading size={"md"} textTransform={"uppercase"}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white' } py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor="none"/>
                    <Button
                    p={0}
                    colorPalette={"purple"}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack >

            <VStack w={'full'}
            borderLeft={["none","1px solid white"]}
            borderright={["none","1px solid white"]}
            
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                  VEDIO HUB
                </Heading>
                <Text>All rights recieved</Text>

            </VStack>

            <VStack w={'full'}
            borderLeft={["none","1px solid white"]}
            borderright={["none","1px solid white"]}
            
            >
                <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
                <Button colorPalette={"white"} variant={"link"}>
                Youtube
                </Button>
                <Button colorPalette={"white"} variant={"link"}>
                Instagram
                </Button>
                <Button colorPalette={"white"} variant={"link"}>
                Github
                </Button>
                

            </VStack>

        </Stack>
      </Box>
    </div>
  )
}

export default Footer
