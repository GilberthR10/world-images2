import { ref } from 'vue';
const error = ref(null)

const date = new Date().toISOString().split('T')[0]
const createInvoice = async (clientId,sellerId,quatity,sellerName) => {
    error.value = null
    let bodyInvoice = {
        date      :  date,
        dueDate   :  date,
        client    :  clientId,
        anotation :  `Nota : Favor consignar a la cuenta XXXXXX del vendedor ${sellerName}`,
        seller    :  sellerId,
        items     :  [
          {
            "id": 1,
            "price" : 3,
            "quantity" : quatity
          }
        ]
    }
    try {
        const data = await fetch('https://api.alegra.com/api/v1/invoices', {
            method: 'POST',
            body: JSON.stringify(bodyInvoice),
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Basic Z2lsYmVydGhyMTBAZ21haWwuY29tOmNmNjA3Y2I2ZDFlYWMwMWE5YzIw'
            }
        })
        const invoice = await data.json()
        return invoice
    } catch (e) {
        error.value = e.message;
    }
}


const useCreateInvoice = () => {
  return { error, createInvoice };
}

export default useCreateInvoice