import { ICON_KEYS, type IconKey } from "@/lib/content-schema";
import { iconLabel } from "@/lib/icons";

export function IconSelect({
  value,
  onChange,
}: {
  value: IconKey;
  onChange: (v: IconKey) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">Ícone</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as IconKey)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        {ICON_KEYS.map((key) => (
          <option key={key} value={key}>
            {iconLabel(key)}
          </option>
        ))}
      </select>
    </label>
  );
}
