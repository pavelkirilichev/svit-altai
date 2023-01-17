import Cash from "../components/Cash";
import EditProfile from "../components/EditProfile";

function Test() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "100vh",
        display: "flex",
        gap: "100px",
        flexWrap: "wrap",
        padding: 10,
      }}
    >
      <Cash />
      <EditProfile />
    </div>
  );
}

export default Test;
