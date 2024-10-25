function StackItem({ stack }) {
  return (
    <div className="flex-row items-center">
      <img
        src={stack.Image}
        alt={stack.name}
        className="w-10 h-10 mr-2"
      />
      <span>{stack.name}</span>
    </div>
  );
}

export default StackItem;
