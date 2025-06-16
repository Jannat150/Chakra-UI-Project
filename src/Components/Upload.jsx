import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
  } from "../components/ui/file-upload"
  import { Box } from "@chakra-ui/react"
  
  const Upload = () => {
    return (
      <Box w={'100vw'} h={'100vh'}  alignContent={'center'} >

      <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10} margin={'auto'}>
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg up to 5MB"
          />
        <FileUploadList />
      </FileUploadRoot>
    </Box>  
    )
  }
  export default Upload
  