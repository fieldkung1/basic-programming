function st(fname: string , sname: string , tname: string) {
    if (!(fname === 'nan ' || sname === 'pleum') && tname === 'yo') {
        console.log ('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}
st('foke','nat','yo') 



function test(gender: string, height: number, weight: number){
    if (gender === 'ชาย' && height >170 || (weight >50 && weight <= 110)){
        console.log('จับใบดำใบแดง')
    }else{
        console.log('ไม่เข้าเกณฆ์')
    }
}
test('ชาย', 171, 55)

function money (age: number, salary: number, deposit: number){
    if(age >= 16 && salary < 70000 && deposit < 500000 ){
        console.log('รับ10000บาท')
    } else {
        console.log('อด')
    }
}
money(16,60000,400000)


//function st(fname: string, sname: string, tname: string) {
  //  if (fname === 'mix' && sname === 'zane' && tname === 'forth') {
   //     console.log('พร้อมเรียน')
   // } else {
   //     console.log('เป็นเท็จ')
   // }
//}


st('mix', 'zane', 'forth')
