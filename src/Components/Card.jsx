const Card = (props) => {
  return (
    <div>
      <div className="max-w-md min-h-[290px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-10">
        <p className="text-zinc-400 geist font-semibold inline-flex items-center gap-2 ">
          {props.Section}
          <span className=" md:ml-3 inline-flex items-center bg-[#1D1D1F] p-2 rounded-2xl text-[10px]">
            <span className="animate-ping inline-block w-3 h-3 rounded-full bg-zinc-200 mr-2"></span>
            {props.Work}
          </span>
        </p>

        <h1 className="text-zinc-200 geist font-semibold text-3xl giest mt-3">
          {props.name}
        </h1>
        <p className="text-zinc-200 geist font-semibold text-[18px] edu-sa-beginner mt-1">
          {props.Summery}
        </p>
      </div>
    </div>
  );
};

export default Card;
