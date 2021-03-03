const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            profilepic: './images/1.png',
            firstname: 'Sapondanai',
            lastname: 'Jamorn',
            position: 'SIT Student',
            article : 69,
            followers: '1.2M',
            rating: 10.0,
            username:null,
            password:null,
            email:null,
            fullname:null,
            errors:[]
        }
    },
        methods:{
            checkForm(){
                this.errors = []
                if(this.username&&this.password&&this.email&&this.fullname){
                    alert("Your profile is updated successfully")
                }
                if(!this.username){
                    this.errors.push('username required')
                }
                if(!this.password){
                    this.errors.push('password required')
                }
                if(!this.email){
                    this.errors.push('email required')
                }
                if(!this.fullname){
                    this.errors.push('fullname required ')
                }
            }
        }

}
Vue.createApp(app).mount('#app')