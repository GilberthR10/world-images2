import { createStore } from "vuex";
import  getSellers  from '../composables/useSellers'
import  useGetImage  from '../composables/getImages'
import  useCreateInvoice  from '../composables/createInvoice'

export default createStore({
  state: {
    isLoading: false,
    all: [],
    images: [],
    gameOver: false,
    invoiceCreated: []
  },
  mutations: {
    TOGGLE_LOADING(state) {
      state.isLoading =  !state.isLoading;
    },
    SET_SELLERS(state, payload){
      state.all.push(payload)
    },
    GET_IMAGES(state, payload){
      state.images.push(payload)
    },
    EMPTY_IMAGES(state){
      state.images = []
    },
    UP_VOTES(state, id){
      const seller = state.all[0].find(seller => seller.id === id)
      seller.votes+=3
    },
    GAME_OVER(state){
      state.gameOver = true
    },
    INVOICE_CREATED(state, payload){
      state.invoiceCreated.push(payload)
    }
  },
  getters: {
    allSellers: (state) => {
      return state.all
    },
    gallery: (state) => {
      return state.images
    },
    isLoading: (state) => {
      return state.isLoading
    },
    getVotes: (state) => {
      const sellers = state.all[0]
      const votes = []
      sellers.forEach((seller)=>{
      votes.push(seller.votes)
      })
      return votes.reduce((a,b)=>a+b)
    },
    getGameState: (state) => {
      return state.gameOver
    },
    invoiceCreated: (state) => {
      return state.invoiceCreated[0]
    }
  },
  actions: {
    async getAllSellers({ commit }){
     const tempSellers = await getSellers()
     commit('SET_SELLERS', tempSellers )
    },
    voting({ commit }, id ){
      commit('UP_VOTES', id )
    },
    async getImages({ commit }, searchTerm){
      commit('EMPTY_IMAGES')
      commit('TOGGLE_LOADING')
      const { getImages } = useGetImage()
      const tempGallery = await getImages(searchTerm)
      commit('GET_IMAGES', tempGallery)
      commit('TOGGLE_LOADING')
    },
    emptyGallery({ commit }){
      commit('EMPTY_IMAGES')
    },
    gameOver({ commit }){
      commit('GAME_OVER')
    },
    async createInvoice({ commit,state }, payload){
      if (state.gameOver === false) {
        const {clientId, sellerId, quantity, sellerName } = payload
        commit('TOGGLE_LOADING')
        const { createInvoice } = useCreateInvoice()
        const invoice = await createInvoice(clientId,sellerId,quantity, sellerName)
        commit('INVOICE_CREATED', invoice)
        commit('TOGGLE_LOADING')
      }
    }
  }
});
