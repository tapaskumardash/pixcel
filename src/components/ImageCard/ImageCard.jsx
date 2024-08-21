import "./ImageCard.css";

const ImageCard = (props) => {
  const triggerDownload = async (url, filename) => {
    props.downloadProgress(true);
    const response = await fetch(url, {mode: 'cors'});
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    props.downloadProgress(false);
  }

  return (
    <div className="image-card">
      <img src={props.imageUrl} alt="thumnail" />
      <button onClick={() => triggerDownload(props.fullSizeImage, props.slug)}><i className='bx bxs-download'></i></button>
    </div>
  )
}

export default ImageCard;
