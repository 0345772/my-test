
export const FolderItem = ({ item }) => {
  const { name, type, size, atime, mtime, dev } = item
  return (
    <div className='item'>
      <strong className="name">{name}</strong>
      <span className="type">{type}</span>
      <span className="size"> {size} </span>
      <span className="atime"> {atime} </span>
      <span className="mtime"> {mtime} </span>
      <span className="dev"> {dev} </span>
    </div>
  );
};

