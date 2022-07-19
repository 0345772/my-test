import { useState, useEffect } from 'react';
import axios from 'axios';
import { Folder } from './Folder';
import { MySelect } from './UI'

export const MyTest = () => {

  const [folders, setFolders] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

  async function fetchData() {
    const response = await axios.get('https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8')

    setFolders(response.data.data)
  }
  useEffect(() => {
    fetchData()
  }, []);

  const title1 = Object.keys(folders).toString()

  const obj = { ...folders.files }

  const arr =  Object.entries(obj)

  console.log(arr)

  const sortItems = (sort) => {
    setSelectedSort(sort)
    setFolders([...folders].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div>
      <strong>{title1}:</strong>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortItems}
          defaultValue="sort"
          options={[
            { value: 'name', name: 'по имени' },
            { value: 'size', name: 'по размеру' },
            { value: 'atime', name: 'по дате создания' },
          ]}
        />
      </div>
      {
        arr.map((el, i) =>
          <Folder key={el[i]} folder={el} />
        )
      }

    </div>
  );
};
