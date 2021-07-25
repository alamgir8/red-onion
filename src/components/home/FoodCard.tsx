

interface IProps {
  title: string;
  image: string;
}

const FoodCard = ({ title, image }: IProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3 mx-auto">
      <div className="bg-white rounded-lg shadow-lg cursor-pointer">
        <div className="p-4 text-center align-middle justify-center">
          <img src={image} width={180} height={180} alt={title} />
        </div>
        <div className="p-4 text-center">
          <h3 className="mb-4">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
