const CarouselCard = ({ photoBuffer }) => {

  return (
    <>
      { photoBuffer.map((photo) => {
        <div className="profilePicture__container">
          <img src={photo} className="profilePicture" />
        </div>
      })
      }
    </>
  )

}
export default CarouselCard;