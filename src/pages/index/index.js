import '../nav-left/nav-left'
import './index.css'
import utils from 'common/js/utils'
import { filter, writeFn } from 'common/js/filter'



console.log(utils)
console.log(filter)

let s = 'hello node bff'
let fn = () => {
    console.log(1111)
}
fn()
alert(`index page ${s}`)
writeFn('index filter')