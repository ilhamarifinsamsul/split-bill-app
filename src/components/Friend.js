export default function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang ke {friend.name} Rp ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang ke kamu Rp ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>Kamu dan {friend.name} tidak punya hutang</p>}

      <button className="button">Pilih</button>
    </li>
  );
}
