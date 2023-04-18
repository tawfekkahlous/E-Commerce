import { useGetProductByCategoryQuery } from "@/api/product-api/product-api";
import React from "react";
import { useRouter } from "next/router";
import Card from "@/components/card";
import Loader from "@/components/loader";
const Index = () => {
  const router = useRouter();
  const category = router.query;
  const { data, isLoading } = useGetProductByCategoryQuery(category);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 gap-2 gap-y-8 py-8  wrapper">
          {data?.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                className={"card"}
                id={item.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Index;
