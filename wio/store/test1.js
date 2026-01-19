export const state = () => ({
  answers: []
})

export const mutations = {
  add(state, v) {
    state.answers.push(v)
  }
}
