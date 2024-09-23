const Board = ({items, clickOnItem}) => {
    return (
        <div className="board">
            {items.map((item, index) => (
            <div key={index} className="board-item" onClick={() => clickOnItem(index)} style={{background: item.clicked ? 'white' : 'gray'}}>
                {item.clicked && item.hasItem && '🩵'}
            </div>
            ))}
        </div>
    )
};

export default Board;