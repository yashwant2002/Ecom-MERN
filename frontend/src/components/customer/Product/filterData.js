export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'black', label: 'Black', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
      ],
    },
   
  ]
  
  export const singleFilter = [
      {
          id : "price",
          name : "Price",
          options : [
              {value : "159-399", label : "₹159 To ₹399"},
              {value : "399-999", label : "₹399 To ₹999"},
              {value : "999-1999", label : "₹999 To ₹1999"},
              {value : "1999-2999", label : "₹1999 To ₹2999"},
              {value : "3999-4999", label : "₹3999 To ₹4999"},
          ]
      }
  ]