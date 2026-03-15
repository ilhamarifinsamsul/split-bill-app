import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState(0);
  const [myBill, setMyBill] = useState(0);

  const friendBill = amount ? amount - myBill : 0;

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  const [whoIsPaying, setWhoIsPaying] = useState("user");
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan Bareng si {selectedFriend.name}</h2>

      <label htmlFor="">💰 Total Biaya</label>
      <input
        type="number"
        name=""
        id=""
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="">🧾 Tagihan Kamu</label>
      <input
        type="number"
        name=""
        id=""
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">📊 Tagihan {selectedFriend.name}</label>
      <input type="text" name="" id="" disabled value={friendBill} />

      <label htmlFor="">🤝 Ditalangin sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Add</button>
    </form>
  );
}
