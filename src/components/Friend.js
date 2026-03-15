export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang ke {friend.name} Rp{" "}
          {Math.abs(friend.balance).toLocaleString("id-ID")}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang ke kamu Rp{" "}
          {friend.balance.toLocaleString("id-ID")}
        </p>
      )}

      {friend.balance === 0 && <p>Kamu dan {friend.name} tidak punya hutang</p>}

      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
