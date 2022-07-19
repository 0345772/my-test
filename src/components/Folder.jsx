import React from 'react';
import { FolderItem } from './FolderItem';

export const Folder = ({ folder }) => {
  const [title, folderEl] = folder

  return (
    <div className='folder'>
      <strong>{title}</strong>
      {
        folderEl.map((el, i) =>
          <FolderItem key={el.i} item={el} />
        )
      }
    
    </div>
  );
};
