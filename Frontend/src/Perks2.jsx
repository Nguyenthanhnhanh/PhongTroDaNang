export default function Perks2({selected,onChange}) {
  return (
    <>
       <select
            onChange={(e) => onChange(e.target.value)}
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value=""></option>
            <option selected={selected == "nhanguyencan" } value="nhanguyencan">Nhà nguyên căn</option>
            <option selected={selected == "phongtro" } value="phongtro">Phòng trọ</option>
            <option selected={selected == "canho" } value="canho">Căn Hộ</option>
          </select>
    </>
  );
}