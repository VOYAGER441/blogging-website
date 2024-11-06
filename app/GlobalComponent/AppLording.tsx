import ReactLoading from "react-loading";
// import animationData from ''; // Update this path as needed

const AppLording = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactLoading type={"bars"} color={"black"} height={200} width={200} />
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <h2>Lording....</h2>
      </div>
    </div>
  );
};

export default AppLording;
