const checkin = (S_NAME) => {
  console.time(S_NAME);
};

const checkout = (S_NAME) => {
  console.timeEnd(S_NAME);
};

export { checkin, checkout };
