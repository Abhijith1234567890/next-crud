import Card from "../../../components/Card"

// export default function Home() {
// return (
//   <div style={{ display: "flex", flexWrap: "wrap" }}>
//     <Card />
//     <Card />
//     <Card />
//   </div>
// );

// }

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Card title="HTML" desc="Learn basics" />
      <Card title="CSS" desc="Style websites" />
      <Card title="JavaScript" desc="Make interactive apps" />
    </div>
  );
}
