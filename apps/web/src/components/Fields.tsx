import { Text, Input, Button, Box } from '@mantine/core';
import { useState} from "react"

const Fields = ({ item, addOrEdit, condition, i }) => {
    const [toggle, setToggle] = useState(false)
    const toggleSymbol = toggle ? "false" : "true"
    return item.type === 'boolean' ? (
    <Box style={{
        display: 'flex',
        flexDirection: 'column',
    }}>
      <Button
      style={{width: '70%', margin: 'auto'}}
        onClick={() => {
          setToggle(!toggle)
          addOrEdit(item, toggleSymbol, 'field_id_' + i, condition)
        }}
      >{item.title && item.title.length > 2 ? item.title : item.name}</Button>
      </Box>
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
