import "./App.css"
export const ButtonItems = ({title, content, isOpen, onClick}) => {
    return (
        <div className="button-item">
            <button className={`button-header ${isOpen ? "open" : ""}`}
            onClick={onClick}>
                {title}
                <span className="icon">{isOpen? "^" : ">"}</span>
            </button>
            {isOpen && <div className="button-body">{content }</div> }
        </div>
    )
}

export default ButtonItems;