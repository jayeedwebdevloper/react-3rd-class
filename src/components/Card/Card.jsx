const Card = (props) => {
    const { dat, dat2, dat3 } = props;
    // (map, find, filter), forEach, while, findOne

    return (
        <div>
            Card
            <div className="py-2 flex flex-wrap gap-3">
                {
                    dat.map((singleCard, i) => (
                        <div key={i} className={`rounded overflow-hidden shadow border ${i % 2 == 1 ? "bg-green-300" : "bg-blue-300"} w-[30%]`}>
                            <h3>{singleCard.title}</h3>
                            <p>{singleCard.date}</p>
                            <img className="w-full" src={singleCard.img} alt="" />
                        </div>
                    ))
                }
              
            </div>
        </div>
    );
};

export default Card;