
export const updateObjectInArray = (
  items: any,
  itemId: number,
  objPropName: string,
  newObjectProps: any
): any => {
  items.map((u: any) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjectProps };
    }
    return u;
  });
};
