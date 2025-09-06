import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card.Root maxW="2xl" overflow="hidden" borderRadius="4xl" boxShadow="md">
      <Skeleton height="200px" maxW="2xl" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default MovieCardSkeleton;
