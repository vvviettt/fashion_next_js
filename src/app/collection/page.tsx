import CollectionItem from "@/components/ColecttionItem";
import json from "@/constant/collection.json";
const CollectionPage = () => {
  return (
    <>
      {json.all.map((collection, index) => {
        return (
          <CollectionItem
            index={index}
            key={collection.id}
            collection={collection}
          />
        );
      })}
    </>
  );
};

export default CollectionPage;
