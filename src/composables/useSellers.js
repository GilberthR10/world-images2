
const getSellers = async () => {
    const resp = await fetch('https://api.alegra.com/api/v1/sellers/', {
        headers: { Authorization: 'Basic Z2lsYmVydGhyMTBAZ21haWwuY29tOmNmNjA3Y2I2ZDFlYWMwMWE5YzIw' }
    })
    const data = await resp.json()
    const sellers = []
    data.forEach(element => {
      sellers.push({...element, votes: 0})
    })
    return sellers
}



export default getSellers