const Banner = props => {
  return (
    <div className={`flex items-center justify-center pa2 ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Banner;
