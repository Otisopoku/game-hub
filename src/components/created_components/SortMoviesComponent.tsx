import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortDescending } from "react-icons/hi";

const filterOptions = [
  "Popularity",
  "Release date",
  "Number of votes",
  "Average votes",
];

const SortMoviesComponent = () => {
  const [choice, setChoice] = useState("");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md" marginLeft="12px">
          <HiSortDescending /> Sort
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={choice}
              onValueChange={(event) => setChoice(event.value)}
            >
              {filterOptions.map((option, index) => (
                <Menu.RadioItem key={index} value={option}>
                  {option}
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortMoviesComponent;
