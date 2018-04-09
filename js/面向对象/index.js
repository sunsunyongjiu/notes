/*
 * @Author: Sunshiyi 
 * @Date: 2018-04-12 09:55:10 
 * @Last Modified by: Sunshiyi
 * @Last Modified time: 2018-04-12 10:44:31
 */
(function () {
    console.log('第1种方法')
    // var Student = {
    //     name: 'Robot',
    //     height: 1.2,
    //     run: function () {
    //         console.log(this.name + ' is running...');
    //     }
    // };

    // var xiaoming = {
    //     name: '小明'
    // };

    // xiaoming.__proto__ = Student;
    // console.log(xiaoming.name)
    // xiaoming.run();
    console.log('第2种方法')
    // var Student={
    //     name:'robot',
    //     height:1.6,
    //     run:function () {
    //         console.log(this.name+'is running...')
    //     }
    // }
    // function createStudent(name) {
    //     var s=Object.create(Student);
    //     s.name=name;
    //     return s;
    // }
    // var xiaoming=createStudent('小明');
    // xiaoming.run();
    // console.log(xiaoming.__proto__===Student)
    console.log('第3种方法')

    // function Student(name) {
    //     this.name = name;
    //     // this.hello=function(){
    //     //     console.log('hello' + this.name)
    //     // }
    // }
    // Student.prototype.hello = function () {
    //     console.log('hello' + this.name)
    // }
    // var xiaoming = new Student('小明');
    // var xiaohong = new Student('小红');
    // xiaoming.hello();
    // 问题不共享同一方法
    // console.log(xiaoming.hello === xiaohong.hello);
    // 解决方法，将公用方法绑定到声明对象的prototype上
    console.log('class继承');
    class Student{
        constructor(name){
            this.name=name;
        }
        hello(){
            console.log(this.name)
        }
    }
    var xiaoming=new Student('小明');
    xiaoming.hello();
    class PrimaryStudent extends Student{
        constructor(name,grade){
            super(name);
            this.grade=grade;
        }
        myGrade(){
            console.log(this.grade)
        }
    }
    var xiaohong=new PrimaryStudent('小红',2)
    xiaohong.hello()

})()