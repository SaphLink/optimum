import { confirmable, createConfirmation } from "react-confirm";


export const modal = async (el:any) => {
    return await createConfirmation(confirmable(el))(()=>{});
}