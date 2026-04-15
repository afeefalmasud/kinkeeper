import { use } from "react";
export const Card = ({cardPromise}) => {
  const cards = use(cardPromise);
  const statusStyle = {
    "overdue" : "bg-[#EF4444]",
    "almost due" : "bg-[#EFAD44]",
    "on-track" : "bg-[#244D3F]"
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {cards.map((card) =>(
            <div className="space-y-3 p-6 flex flex-col items-center shadow-md rounded-md">
              <img className="rounded-full mb-3" src={card.picture} alt="" />
              <h2 className="text-[#1F2937] text-[20px] font-semibold">{card.name}</h2>
              <p className="text-[#64748B] text-[12px]">{card.days_since_contact}d ago</p>
              <ul className="flex gap-2 flex-wrap">
                {card.tags.map((tag, id) => (
                  <li 
                    key={id} 
                    className="bg-[#CBFADB] text-[#244D3F] font-bold text-[12px] px-4 py-1.5 rounded-full"
                  >
                    {tag.toUpperCase()}
                  </li>
                ))}
              </ul>
              <div className={`font-bold text-[12px] w-fit text-[#ffffff] px-4 py-1.5 rounded-full ${statusStyle[card.status]}`}>
                <p>{card.status}</p>
              </div>
            </div> 
          ))}
      </div>
    </div>
  );
};