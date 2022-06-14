import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
    index * 5
  }, ${132})`,
}));

const FuncExample = () => {
  const [data, setData] = useState<any>(exampleData);
  const renderItem = ({item, index, drag, isActive}: any) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={drag}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 32,
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any, index: any) => `draggable-item-${item.key}`}
        onDragEnd={({d}: any) => setData({d})}
      />
    </View>
  );
};

export default FuncExample;
