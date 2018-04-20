window.onload = function () {
    var canvas = document.querySelector('#test-canvas');
    if (canvas.getContext) {
        console.log(`您的浏览器支持canvas`)
    } else {
        console.log(`您的浏览器不支持canvas`)
    }
    var ctx = canvas.getContext('2d');
    var gl = canvas.getContext('webgl');
    ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#dddddd'; // 设置颜色
    ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
    // 利用Path绘制复杂路径:
    var path = new Path2D();
    path.arc(75, 75, 50, 0, Math.PI * 2, true);
    path.moveTo(110, 75);
    path.arc(75, 75, 35, 0, Math.PI, false);
    path.moveTo(65, 65);
    path.arc(60, 65, 5, 0, Math.PI * 2, true);
    path.moveTo(95, 65);
    path.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctx.strokeStyle = '#0000ff';
    ctx.stroke(path);
}

// function Student(name, age) {
//     this.name = name;
// }
// Student.prototype.say = function () {
//     console.log('hello' + this.name)
// }
// var xiaohong = new Student('小红')
// var xiaoming = new Student('小明')
// xiaohong.say()
// xiaoming.say()
// console.log(Student.prototype)
// console.log(xiaoming.__proto__.constructor===Student)
// console.log(xiaohong.say === xiaoming.say)

// var a=[1];
// var b=[1];
// console.log(a)
// function JsonA(name){
//     this.name=name;
// }
// var B=new JsonA()
// console.log(JsonA.prototype.constructor===JsonA)
// console.log(B.__proto__.constructor)
// class Student{
//     constructor(name){
//         this.name=name;
//         this.zhiye='学生'
//     }
//     show(){
//         console.log(this.name)
//     }
//     showZhiye(){
//         console.log(this.zhiye)
//     }
// }
// class H5 extends Student{
//     constructor(name){
//         super (name);
//         this.name=name

//     }
// }
// var zhipeng=new Student('孙志鹏');
// zhipeng.show();
// var sunshiyi=new H5('孙世一');
// sunshiyi.show();
// console.log(sunshiyi.__proto__)
// console.log(Student.prototype)

// function show(){
//     console.log(this)
// }
// show()
// var a={
//     a1:1,
//     a2:2
// }
// console.log(a)
// delete a.a2
// console.log(a)