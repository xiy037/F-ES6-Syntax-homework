const inject = (items, sections) => {
  const { content: content1, index: index1 } = sections[0]
  const { content: content2, index: index2 } = sections[1]
  return [
    ...items.slice(0, index1),
    content1,
    ...items.slice(index1, index2),
    content2,
    ...items.slice(index2)
  ]
}

export { inject };
