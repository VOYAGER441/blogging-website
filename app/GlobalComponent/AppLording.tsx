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

      <h2>Don`t worry, it may take some time the first time because I am using a free server to host this website. 😇</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <h2>Lording....</h2>
      </div>
    </div>
  );
};

export default AppLording;
