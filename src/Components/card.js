import cardImage from '../images/cardImage.png'
const Card = () => {
    return (
      <>
        <div className="card bg-white w-[150px] h-[250px] md:w-[200px] md:h-[280px] m-2 rounded-lg shadow-lg">
          <div className="flex flex-col items-start">
            <img
              className="object-cover p-2 mb-2"
              src={cardImage}
              alt="img"
            />
            <h1 className='md:text-lg text-md  font-extrabold font-roboto mb-4 pl-2'>Harvard University</h1>
            <p className='text-[10px] pl-2'>Cambridge, Massachusetts, UK</p>
          </div>
        </div>
      </>
    );
  }
  export default Card;