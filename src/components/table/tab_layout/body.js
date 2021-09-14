export default function Body({ totalRows, children }) {
  if (totalRows === 0) return null;

  return (
    <div style={{ flex: "1", position: "relative" }}>
      <div>{children}</div>
    </div>
  );
}
