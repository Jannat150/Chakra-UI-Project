import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
  } from "../components/ui/drawer";
  import { BiMenuAltLeft } from "react-icons/bi";
  import { Box, VStack, Button, HStack } from "@chakra-ui/react"; // Import Chakra UI Button directly
  import { Link } from "react-router-dom";
  
  const Header = () => {
    return (
      <DrawerRoot placement={"start"}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            pos={"fixed"}
            top={"4"}
            left={"4"}
            colorPalette={"purple"}
            p={"0"}
            w={"10"}
            h={"10"}
            borderRadius={"full"}
            zIndex={'overlay'}
          >
            <Box fontSize="24px">
              <BiMenuAltLeft />
            </Box>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Video Hub</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
          <DrawerActionTrigger asChild>
            <VStack alignItems={"flex-start"}>
              <Button colorPalette={"purple"} variant={"ghost"}>
                <Link to="/">Home</Link>
              </Button>
              <Button colorPalette={"purple"} variant={"ghost"}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button colorPalette={"purple"} variant={"ghost"}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button colorPalette={"purple"} variant={"ghost"}>
                <Link to="/upload">Upload Video</Link>
              </Button>
            </VStack>
            </DrawerActionTrigger>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
            <HStack  w={"full"} justifyContent={"space-evenly"}>
                <Button colorPalette={"purple"}>
                    <Link to="/login">Login</Link>
                </Button>
                <Button colorPalette={"purple"} variant={"outline"}>
                    <Link t0="/signup">Sign Up</Link>
                </Button>
            </HStack>
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    );
  };
  
  export default Header;
  