import { AxiosError } from "axios"
import moment from "moment"

export const contentMarkup = (e: string) => ({__html: e})

export const isEmptyObject = (obj: object) =>{
    for(let item in obj) return false
    return true 
}
export const getDepositPoint = (amount: number) =>{
    if(amount >= 25001){
        return Math.round((0.05 * amount))
    }
    else if(amount >= 10001){
        return Math.round((0.025 * amount))
    }
    else if(amount >= 5000){
        return Math.round((0.01 * amount))
    }
    else{
        return 0
    }
}
export const getErrorMessage = (error: AxiosError) =>{
    let message = error.message
    if(error.response){
        message = error.response.data.message
    }
    return message
}

export const formatDate = (date: string) =>moment(date).format("MMM Do YYYY, h:mm:ss a")

export const formatCurrency = (amount: number) =>{
    const formatter = new Intl.NumberFormat('en-Us',{
      currency: 'USD',
      style: 'currency'
    })
    return formatter.format(amount)
}

export const validateEmail = (email: string) =>{
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}