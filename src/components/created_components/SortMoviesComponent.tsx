import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortDescending } from "react-icons/hi";

const sortOptions = [
  { label: "Sort", value: "" },
  { label: "Most Popular", value: "popularity" },
  { label: "Most Voted", value: "votes" },
  { label: "Highest Rated", value: "averageVotes" },
  { label: "Newest Releases", value: "releaseDate" },
];

interface Props {
  sortBy: (sortOption: string) => void;
}

const SortMoviesComponent = ({ sortBy }: Props) => {
  const [selectedLabel, setSelectedLabel] = useState("Sort");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          borderRadius="20px"
          borderWidth="3px"
          variant="outline"
          size="md"
          margin="0 0 12px 12px"
        >
          <HiSortDescending style={{ marginRight: "6px" }} />
          {selectedLabel}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              fontFamily="sans-serif"
              value={selectedLabel}
              onValueChange={(event) => {
                const label = event.value;
                setSelectedLabel(label);
                const selectedOption = sortOptions.find(
                  (opt) => opt.label === label // find the object with corresponding label
                );
                sortBy(selectedOption?.value || ""); // pass value of object to the sortBy function
              }}
            >
              {sortOptions.map((option) => (
                <Menu.RadioItem key={option.value} value={option.label}>
                  {option.label}
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
