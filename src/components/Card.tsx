interface CardProps {
  img?: string;
  children: React.ReactNode;
}

const Card = ({ img, children }: CardProps) => {
  return (
    <div className='card'>
      {img ? <img src={img} className='card-img-top' alt='img' /> : ''}
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;