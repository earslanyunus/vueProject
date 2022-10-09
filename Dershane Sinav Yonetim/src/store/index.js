import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({isCompression: false})

export default createStore({
    state: {
        user: null,
        isLogin: false,
        saltkey: 'cambazmasal123@',
        isAdmin:false,
        exams:null


    },
    getters: {
        _isLogin: state => state.user !== null,
        _isAdmin:state => state.isAdmin,
        _saltKey: state => state.saltkey,
        _getUser: state => state?.user,
        _getUserId: state => state?.user?.id,
        _getClassId: state => state?.user?.classId,
        _getExams: state => state?.exams


    },
    mutations: {
        setUser(state, user) {
            state.user = user
            delete state?.user?.password
        },
        setLogout(state) {
            state.user = null
            state.isAdmin = false
        },
        setAdmin(state,condition){
            state.isAdmin = condition
        },
        setExams(state,value){
            state.exams = value
        }

    },
    plugins: [createPersistedState({
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        },
    })]


})