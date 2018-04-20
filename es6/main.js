// 浅拷贝
var aa={
    a:1,
    b:2
}
var b=aa;
console.log(b)
aa.a=2;
console.log(b)
console.log(aa)

var eson=(function(){
    var a=2;
    return {
        show:function(){
           console.log(a)
        }
    }
}())
eson.show()