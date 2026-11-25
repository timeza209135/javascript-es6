const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english; //ตรวจสอบว่ามีค่า property scores ใน employee1 หรือไม่

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english ?? "English score is not defined"; // ตรวจสอบว่ามีค่า property scores ใน employee2 หรือไม่ และ ?? ตรวจสอบอีกครั้งว่าเป็น null หรือ undefined หรือไม่ถ้าเป็นให้แสดงข้อความ "English score is not defined"

console.log(result1);
console.log(result2);