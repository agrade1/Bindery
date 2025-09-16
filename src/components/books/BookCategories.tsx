import { listCategories } from '@/constants/listCategory';

type BookCategoriesProps = {
  selectedId: number;
  onSelect: (id: number) => void;
};

export default function BookCategories({ selectedId, onSelect }: BookCategoriesProps) {
  return (
    <aside className="border-r pr-4">
      <ul className="space-y-5">
        {listCategories.map((parent) => (
          <li key={parent.id}>
            {/* 부모 카테고리 */}
            <h3 className="mb-2 text-base font-semibold text-gray-800">{parent.name}</h3>

            {/* 자식 카테고리 */}
            <ul className="ml-3 space-y-2 border-l pl-3">
              {parent.children.map((child) => (
                <li key={child.id}>
                  <button
                    onClick={() => onSelect(child.id)}
                    className={`w-full text-left text-sm hover:text-emerald-600 ${
                      selectedId === child.id ? 'font-semibold text-emerald-700' : 'text-gray-600'
                    }`}
                  >
                    {child.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
