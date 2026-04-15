const BASE_URL = "http://10.221.152.208:7000";

/* =========================
   GET ALL LISTINGS
========================= */
export const getListings = async () => {
  const res = await fetch(`${BASE_URL}/api/listings`);
  return res.json();
};

/* =========================
   ADD LISTING
========================= */
export const addListing = async (data: any) => {
  const res = await fetch(`${BASE_URL}/api/listings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};