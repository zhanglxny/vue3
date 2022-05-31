
/**
 * 监听对象上的多个属性
 */
 let person = {
    name: '',
    age: 0
}
// 实现一个响应式函数
function defineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`访问了${key}属性`)
            return val
        },
        set(newVal) {
            console.log(`${key}属性被修改为${newVal}`)
            val = newVal
        }
    })
}

//实现一个遍历函数Observer
function Observer(obj) {
    Object.keys(obj).forEach(key => {
        defineProperty(obj, key, obj[key])
    })
}

Observer(person)
console.log(person.age) // 访问了age属性 0
person.age = 18 // age属性被修改为18
console.log(person.age) //访问了age属性 18

// 以上使用Observer作为中转，避免在get中访问对象本身数据造成递归调用，如：

Object.keys(person).forEach(key => {
    Object.defineProperty(person, key, {
        get() {
            return person[key] //此处会触发递归，一get就调用
        },
        set(val) {
            person[key] = val
        }
    })
})