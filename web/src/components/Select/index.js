import React from 'react';

function SelectComponent({ onChange, option, id }) {
  return (
      <select onChange={onChange} id={id}>
          <option key="0" value="">Nenhum</option>
          {option ? option.map(element => (
              <option key={element} value={element}>{element}</option>
          )): null}
      </select>
  );
}

export default SelectComponent;