const parseData = (input) => {
  const { data, column } = input
  return data.map(itemArray => {
    return column.reduce((prev, curr, index) => {
      return {
        ...prev,
        [curr.name] : itemArray[index]
      }
    }, {})
  })
}

export { parseData };
