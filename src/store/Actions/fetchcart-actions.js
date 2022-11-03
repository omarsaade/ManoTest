import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("ui/fetchWallet", async () => {
  const response = await fetch(
    "https://api.manoapp.com/api/v1/users/products/whats_new",
    {
      headers: {
        Accept: "application/json",
        StoreID: "4",
        "Content-Type": "application/json",
        Authentication: "f44a4aabfc5992514d262d7f517327e7",
        UserAddressID: "60877",
      },
    }
  );

  const responseData = await response.json();

  return responseData.data.items;
});
