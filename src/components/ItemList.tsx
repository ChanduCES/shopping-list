interface Props {
  items: string[];
  heading: string;
}

export default function ItemList({ items, heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <h1>No items Found</h1> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
