const ImageCard = ({ classnames, userImage }) => {
  return (
    <div
      className={classnames}
      style={{ backgroundImage: `url(${userImage})` }}
    ></div>
  );
};
export default ImageCard;
