const getDonation = () => {
  const storedDonation = localStorage.getItem("Donation");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const saveDonation = (id) => {
  const strodAllDonation = getDonation();
  const exist = strodAllDonation.find((donationId) => donationId === id);
  if (!exist) {
    strodAllDonation.push(id);
    localStorage.setItem("Donation", JSON.stringify(strodAllDonation));
  }
};

export { saveDonation, getDonation };
