export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Patungan Bareng si X</h2>

      <label htmlFor="">💰 Total Biaya</label>
      <input type="text" name="" id="" />

      <label htmlFor="">🧾 Tagihan Kamu</label>
      <input type="text" name="" id="" />

      <label htmlFor="">📊 Tagihan x</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">🤝 Ditalangin sama</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">X</option>
      </select>

      <button className="button">Add</button>
    </form>
  );
}
