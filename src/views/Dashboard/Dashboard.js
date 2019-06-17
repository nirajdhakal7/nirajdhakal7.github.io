import React, { memo } from "react";
import ItemCard from "../../components/ItemCard";
import { useHttp } from "../../hooks/http";

const DashboardPage = () => {
  const [isLoading, items, fetchError] = useHttp(
    "http://laract.test/api/items",
    []
  );
  const dashItem = () => {
    if (isLoading) {
      return (
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      if (fetchError) {
        return <small> Some Error Occured While Fetching Data !</small>;
      } else {
        return items
          ? items.data.map((prop, key) => (
              <div className="row" key={key}>
                <div className="col-sm">
                  <ItemCard
                    name={prop.name}
                    description={prop.description}
                    price={prop.price}
                  />
                </div>
              </div>
            ))
          : [];
      }
    }
  };

  return (
    <>
      <h4>Dashboard </h4>
      <div className="container">{dashItem()}</div>
    </>
  );
};

export default memo(DashboardPage);
