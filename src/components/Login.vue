
<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    Войти
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        {{ incorrectData }}
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Имя пользователя" v-model="username" v-bind:rules="usernameRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Пароль" v-model="password" v-bind:rules="passwordRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div>
                    <v-btn color="blue darken-1" text v-on:click="verifyPassword()">Войти</v-btn>
                </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    </v-container>
</template>

<script>
import Service from '../service/service.js'

export default {
    name: 'Login',
    components: {  },
    props: [ 'login' ],
    data() {
        return {
            dialog: false,
            username: '',
            password: '',
            usernameRules: [
                v => !!v || 'Имя не может быть пустым',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            passwordRules: [
                v => !!v || 'Пароль не может быть пустым',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'],
            incorrectData: ''
        }
    },
    methods: {
        verifyPassword() {
            if (this.username.length == 0 || this.username.length > 25)
                this.incorrectData = 'Имя должно содержать от 1 до 25 символов'
            else if (this.password.length == 0 || this.password.length > 25)
                this.incorrectData = 'Пароль должен содержать от 1 до 25 символов'
            else {
                Service.verifyPassword(this.username, this.password)
                    .then(response => {
                        let user = response.data
                        if (user.verified == false) {
                            if (user.error == 'name')
                                this.incorrectData = 'Пользователь не найден'
                            else
                                this.incorrectData = 'Неверный пароль'
                        }
                        else {
                            this.login(user)
                            this.dialog = false
                        }
                    })
            }
        }
    }
}
</script>

<style>

</style>