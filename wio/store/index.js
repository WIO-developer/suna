export const state = () => ({
  isFirstPopupViewed: true,
  isPreviousPageIndex: false,
  isPreviousPageInitUrl: "",
  isPreviousPageInitIndex: false,
  isPreviousPageUsedIndex: false,
})

export const mutations = {
  changePopupStatus(state) {
    state.isFirstPopupViewed = false
  },
  PreviousPageIndexStatus(state, index) {
    state.isPreviousPageIndex = index
  },
  PreviousPageInitIndexStatus(state, index) {
    state.isPreviousPageInitIndex = index
  },
  PreviousPageUsedIndexStatus(state, index) {
    state.isPreviousPageUsedIndex = index
  },
  PreviousPageInitUrlStatus(state, url) {
    state.isPreviousPageInitUrl = url
  }

}

