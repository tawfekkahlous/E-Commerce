import { useGetAllProductsQuery } from "@/api/product-api/product-api";
import Card from "@/components/card";
import Loader from "@/components/loader";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Home() {
  const router=useRouter()
  const { data, isLoading } = useGetAllProductsQuery();
  const handleLogout=() => {
    // localStorage.removeItem("login-token");
    router.push("/");
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-12 sm:gap-x-8 sm:gap-y-8  gap-y-8 py-8 wrapper">
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
}
