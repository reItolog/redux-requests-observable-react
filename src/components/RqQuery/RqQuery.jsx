import React, { memo } from "react";
import { Query } from "@redux-requests/react";

import Loader from "../Loader/Loader";

const RqQuery = memo(({ queryType, render }) => {
  return (
    <Query
      type={queryType}
      isDataEmpty={(query) =>
        Array.isArray(query.data) ? query.data.length === 0 : !query.data
      }
      showLoaderDuringRefetch={false}
      noDataMessage="There is no data"
      errorComponentProps={{ label: "Error label" }}
      loadingComponent={() => <Loader />}
      loadingComponentProps={{ label: "Loading label" }}
    >
      {({ data }) => {
        return render(data);
      }}
    </Query>
  );
});

export default RqQuery;
