export const sortProducts = (products: Product[], type: 'DESC' | 'ASC') => {
  const n1 = type === 'DESC' ? 1 : -1;
  const n2 = type === 'ASC' ? 1 : -1;
  return products.sort(
    (a, b) => 0 - (Number(a.price ?? '0') > Number(b.price ?? '0') ? n1 : n2),
  );
};
