import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const videoArray = [
  { src: "https://www.youtube.com/watch?v=BHACKCNDMW8" },
  { src: "https://www.youtube.com/watch?v=zvUdwRvVirk" },
  { src: "https://www.youtube.com/watch?v=77ZozI0rw7w" },
  { src: "https://www.youtube.com/watch?v=g9yQoMe8VDA" },
  { src: "https://www.youtube.com/watch?v=joRVkFrxuS4" },
  { src: "https://www.youtube.com/watch?v=6m0xbFKKPx0" }
];

const Videos = () => {
  const [index, setIndex] = useState(0);
  const [video, setVideo] = useState(videoArray[index].src);

  const handleVideoChange = (index) => {
    setIndex(index+1);
    setVideo(videoArray[index].src);
  };

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video controls controlsList='nodownload' src={video} style={{ width: '100%' }} />
        <VStack alignItems={"flex-start"} p={'8'} width={'full'}>
          <Heading>Sample Video {index + 1}</Heading>
          <Text>This is video {index + 1}</Text>
        </VStack>
      </VStack>

      <VStack w={['full', 'xl']} alignItems={'stretch'} p={8} spacing={8} overflowY={'auto'}>
        {videoArray.map((video, idx) => (
          <Button 
            key={idx} 
            variant={'ghost'} 
            colorScheme={'purple'} 
            onClick={() => handleVideoChange(idx)}
          >
            Lecture {idx + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
