const Services = (props) => {
  const { Quotes, labels } = props;
  return (
    <div>
      <div className="max-w-md min-h-[290px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-9">
        <div>
          <h1
            className="text-zinc-400 geist font-semibold text-center text-2xl mt-8 lg:mt-4
                       min-h-[72px] leading-tight whitespace-pre-line overflow-hidden "
          >
            {Quotes}
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-4  lg:mt-8">
          {Object.entries(labels).map(([label, src]) => (
            <img
              key={label}
              src={src}
              alt={label}
              className="w-16 h-16 bg-[#141314] border rounded-xl border-[#26252C] text-white flex items-center justify-center mt-3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
