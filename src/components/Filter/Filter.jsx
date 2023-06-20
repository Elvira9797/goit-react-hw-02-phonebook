import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;
