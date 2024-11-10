import './Message.css';
const Message = ({ text }) => {
    return (
        <div className="message">
            <p>{text}</p>
        </div>
    );
};

export default Message;