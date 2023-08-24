
const Tags = ({ text, color }) => {
  return <span className={`badge bg-${color}`}>{text}</span>;
};

export default Tags;
