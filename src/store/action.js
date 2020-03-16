/* eslint-disable no-case-declarations */
let initialState = {

  categories: [
    { catName: 'clothes ', displayName: 'Dress', description: 'is a garment traditionally worn by women or girls ' },
    { catName: 'clothes ', displayName: 'Jackets', description: ' is generally lighter, tighter-fitting, and less insulating than a coat, which is outerwear' },
    { catName: 'clothes ', displayName: 'Shoes', description: 's an item of footwear intended to protect and comfort the human foot' }],
  products: [
    { categoryType: 'Dress', name: 'Halter', description: 'top is a type of sleeveless shirt similar to a tank top', price: 1000, inventoryCount: 40 },
    { categoryType: 'Jackets', name: 'trucker', description: 'typically has sleeves, and fastens in the front or slightly on the side', price: 30, inventoryCount: 50 },
    { categoryType: 'Shoes', name: 'heels', description: 'a solid, raised base or support of leather, wood, rubber, etc', price: 50, inventoryCount: 60 }],

  activeCategories: '',

};