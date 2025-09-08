import { HStack, Icon, Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const [switchChecked, checkSwitch] = useState(false);
  return (
    <HStack>
      <Switch.Root
        checked={switchChecked}
        onCheckedChange={(event) => {
          checkSwitch(event.checked);
          toggleColorMode();
        }}
      >
        <Switch.HiddenInput />
        <Switch.Control />

        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.500" />}>
          <Icon as={FaSun} color="yellow.500" />
        </Switch.Indicator>
        <Switch.Label>
          {switchChecked ? "Light Mode" : "Dark Mode"}
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
