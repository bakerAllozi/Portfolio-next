import BgStars from "./Bgstars";

function Container({ children }) {
  return (
    <div className="">
      <BgStars />
      {children}
    </div>
  );
}

export default Container;
