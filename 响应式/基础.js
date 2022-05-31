let person = { }
let personName = 'lihua'

/**
 * JS对象有数据属性和访问器属性，一个对象只能有一种数据属性。
 * 
 * 1. 通过new object或对象字面量设置的属性值，均为数据属性，含有
 * [[Configurable]] [[Enumerable]] [[Writable]] [[Value]] 内部属性，
 * 且默认都是 true
 * 
 * 2. 通过Object.defineProperty添加属性，且包含get set方法和
 * [[Configurable]] [[Enumerable]] 内部属性，如果没有定义默认为false
 */

//在person对象上添加属性namep， 值为personName

Object.defineProperty(person, 'namep', {
    //默认不可枚举, enumerable: false
    //默认不可删除，configurable：false    
    get: function() {
        console.log('触发了get方法');
        return personName
    },
    set: function(val) {
        console.log('触发了set方法');
        personName = val
    }
})

// 当读取person对象的namep属性时，触发get方法
console.log(person.namep) //触发了get方法 lihua

//修改 personName 的值，获取对象namep属性修改成功
personName = 'liming'
console.log(person.namep) //触发了get方法 liming

// 对person.namep进行修改，触发set方法
person.namep = 'huahua' // 触发了set方法
console.log(person.namep) // 触发了get方法  huahua

