import { Store } from "./Store"


export const setupRootStore =()=>{
    const rootTree = Store.create({
        messages:[],
        conversations:[],
        members:[]
    })

    return {rootTree}
}