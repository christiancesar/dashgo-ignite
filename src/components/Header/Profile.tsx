import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Christian Cesar</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            christian.cesar@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Christian Cesar"
        src="https://github.com/christiancesar.png"
      />
    </Flex>
  )
}