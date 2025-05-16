export interface Customer {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  lastOrder: string
  totalSpent: string
}

export const customerData: Customer[] = [
  {
    id: "cus_001",
    name: "John Smith",
    email: "john.smith@example.com",
    status: "active",
    lastOrder: "2023-05-15",
    totalSpent: "1250.00",
  },
  {
    id: "cus_002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    lastOrder: "2023-05-12",
    totalSpent: "876.50",
  },
  {
    id: "cus_003",
    name: "Michael Brown",
    email: "m.brown@example.com",
    status: "inactive",
    lastOrder: "2023-04-22",
    totalSpent: "432.25",
  },
  {
    id: "cus_004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "active",
    lastOrder: "2023-05-18",
    totalSpent: "1567.75",
  },
  {
    id: "cus_005",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    status: "pending",
    lastOrder: "2023-05-10",
    totalSpent: "289.99",
  },
  {
    id: "cus_006",
    name: "Jennifer Taylor",
    email: "j.taylor@example.com",
    status: "active",
    lastOrder: "2023-05-16",
    totalSpent: "932.50",
  },
  {
    id: "cus_007",
    name: "David Martinez",
    email: "d.martinez@example.com",
    status: "inactive",
    lastOrder: "2023-03-25",
    totalSpent: "175.25",
  },
  {
    id: "cus_008",
    name: "Lisa Anderson",
    email: "l.anderson@example.com",
    status: "active",
    lastOrder: "2023-05-14",
    totalSpent: "2345.00",
  },
  {
    id: "cus_009",
    name: "James Thomas",
    email: "j.thomas@example.com",
    status: "active",
    lastOrder: "2023-05-17",
    totalSpent: "876.25",
  },
  {
    id: "cus_010",
    name: "Patricia White",
    email: "p.white@example.com",
    status: "pending",
    lastOrder: "2023-05-11",
    totalSpent: "432.75",
  },
]

export interface Product {
  id: string
  name: string
  category: string
  stock: string
  price: string
  rating: string
}

export const productData: Product[] = [
  {
    id: "prod_001",
    name: "Premium Headphones",
    category: "Electronics",
    stock: "45",
    price: "199.99",
    rating: "4.7",
  },
  {
    id: "prod_002",
    name: "Wireless Mouse",
    category: "Electronics",
    stock: "78",
    price: "49.99",
    rating: "4.5",
  },
  {
    id: "prod_003",
    name: "Ergonomic Keyboard",
    category: "Electronics",
    stock: "32",
    price: "89.99",
    rating: "4.3",
  },
  {
    id: "prod_004",
    name: "Ultra HD Monitor",
    category: "Electronics",
    stock: "12",
    price: "349.99",
    rating: "4.8",
  },
  {
    id: "prod_005",
    name: "Smartphone Stand",
    category: "Accessories",
    stock: "120",
    price: "19.99",
    rating: "4.2",
  },
  {
    id: "prod_006",
    name: "Laptop Backpack",
    category: "Accessories",
    stock: "65",
    price: "79.99",
    rating: "4.6",
  },
  {
    id: "prod_007",
    name: "Bluetooth Speaker",
    category: "Electronics",
    stock: "28",
    price: "129.99",
    rating: "4.4",
  },
  {
    id: "prod_008",
    name: "USB-C Hub",
    category: "Accessories",
    stock: "53",
    price: "59.99",
    rating: "4.1",
  },
  {
    id: "prod_009",
    name: "Wireless Charger",
    category: "Electronics",
    stock: "42",
    price: "39.99",
    rating: "4.0",
  },
  {
    id: "prod_010",
    name: "External SSD",
    category: "Storage",
    stock: "8",
    price: "149.99",
    rating: "4.9",
  },
]
