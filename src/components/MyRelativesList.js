import React from 'react';

function MyRelativesList() {
  const relatives = [
    {id: 1, name: 'Cousin Sarah'},
    {id: 2, name: 'Uncle John'},
    {id: 3, name: 'Aunt Maria'},
  ];

  return (
    <ol key="relativeList">
      {relatives.map((relative) => (
        <li key={`relativeListItem${relative.id}`}>{relative.name}</li>
      ))}
    </ol>
  );
}

export default MyRelativesList;