/**import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortDescending } from "react-icons/hi";

// const sortOptions = {
//   sort: "Sort", // no sorting is required for this option. Just the default
//   popularity: "Most Popular",
//   releaseDate: "Newest Releases",
//   "Number of votes",
//   "Average votes",
// };

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
  const [choice, setChoice] = useState("Sort");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md" marginLeft="12px">
          <HiSortDescending />
          {choice}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={choice}
              onValueChange={(event) => {
                setChoice(event.value);
                sortBy(event.value);
              }}
            >
              {sortOptions.map((option) => (
                <Menu.RadioItem key={option.value} value={option.value}>
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
*/

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
        <Button variant="outline" size="md" marginLeft="12px">
          <HiSortDescending style={{ marginRight: "6px" }} />
          {selectedLabel}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
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
