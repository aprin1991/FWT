type TCharacterCardProps = {
  character: {
    comics: {
      available: number;
      collectionURI: string;
      items: Array<{
        name: string;
        resourceURI: string;
      }>;
      returned: number;
    };
    description: string;
    events: {
      available: number;
      collectionURI: string;
      resourceURI: string;
    };
    id: number;
    modified: string;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    };
  };
};
export type { TCharacterCardProps };
