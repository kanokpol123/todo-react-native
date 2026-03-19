## Todo List
 
```

todo-react-native/
├── app/                    หน้าจอทั้งหมดของ app
│   ├── (auth)/             กลุ่มหน้าจอสำหรับ Authentication (Login, Register)
│   ├── (tabs)/             กลุ่มหน้าจอ Tab Navigation
│   ├── (content)/          กลุ่มหน้าจอเนื้อหาการทำงาน อาจไม่ใช้แค่ชื่อ content อาจเป็นชื่ออื่น เช่น (notification), (profile), (setting)
│   ├── _layout.tsx         กำหนด Layout และ Navigation หลักของแอป
│
├── assets/                 รูปภาพ, ฟอนต์, ไอคอน
│
├── components/             Component ย่อยที่ใช้ซ้ำได้หลายหน้า เช่น Button, Badge, Checkbox, TodoItem
│
├── constants/              ค่าคงที่ที่ใช้ทั้งแอป เช่น สี (Colors), ขนาด (Spacing), ชื่อหมวดหมู่
│
├── context/
│   └── AuthContext.js      จัดการ State ของ User ที่ Login อยู่ทุก Component สามารถดึงข้อมูล User ได้จากที่นี่
│
├── hooks/                  Custom Hooks แยก Logic ออกจาก UI เช่น useTodos (จัดการ todo + AsyncStorage)
│
├── utils/
│   └── config.ts           ค่า config กลาง เช่น API URL, Storage Key
│
├── .gitignore              บอก Git ว่าไม่ต้อง push ไฟล์ไหน (เช่น node_modules)
├── app.json                ตั้งค่าแอป เช่น ชื่อแอป, ไอคอน, splash screen
├── package.json            รายการ dependencies และ scripts ของโปรเจค
├── tsconfig.json           ตั้งค่า TypeScript
└── README.md               คำอธิบายรายละเอียด
