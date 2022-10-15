import { Text, Input, Button } from '@mantine/core';
import { useState} from "react"

const Fields = ({ item, addOrEdit, condition, i }) => {
    const [toggle, setToggle] = useState(false)
    const toggleSymbol = toggle ? "❌" : "✅"
    return item.type === 'boolean' ? (
    <>
      <Text style={{ fontSize: 14 }}>
        {item.title && item.title.length > 2 ? item.title : item.name}
      </Text>
      <Button
        onClick={() => {
          setToggle(!toggle)
          addOrEdit(item, toggleSymbol, 'field_id_' + i, condition)
        }}
      >Toggle</Button>
    </>
  ) : (
    <>
      <Text style={{ fontSize: 14 }}>
        {item.title && item.title.length > 2 ? item.title : item.name}
      </Text>
      <Input
        onChange={(event) =>
          addOrEdit(item, event.currentTarget.value, 'field_id_' + i, condition)
        }
      />
    </>
  );
};

export default Fields;
