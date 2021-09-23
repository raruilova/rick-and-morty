import React from "react";

const Characters = ({character, search}) => {

    const filterCharacter = character.filter((ch) => ch.name.toLowerCase().includes(search.toLowerCase())
    | ch.species.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <div className="characters">
                {
                    filterCharacter.length === 0 ? <p>Sorry, not found</p> :
                    filterCharacter.map(item => (
                        <div className="box" key={item.id}>
                            <img src={item.image}  />
                            <div className="character">
                                <h3 className="name">{item.name}</h3>
                                <p className="specie">{item.species}</p>
                                <p className="status">{item.status}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Characters;