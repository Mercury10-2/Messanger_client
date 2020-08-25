
<template>
    <v-container fluid app>
    <v-row>
        <v-dialog v-model="dialog" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    Регистрация
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
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
                        <v-row>
                            <v-col cols="3">
                                <p>Пол:</p>
                            </v-col>
                            <v-col cols="9">
                                <input type="radio" id="one" value="male" v-model="gender">
                                <label class="ml-3" for="one">Мужчина</label>
                                <br>
                                <input type="radio" id="two" value="female" v-model="gender">
                                <label class="ml-3" for="two">Женщина</label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Почта" v-model="email" v-bind:rules="emailRules"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <div>
                    <v-btn color="blue darken-1" text v-on:click="registration()">Зарегистрировать</v-btn>
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
    name: 'Registration',
    components: {  },
    props: [ '' ],
    data() {
        return {
            dialog: false,
            username: '',
            password: '',
            gender: 'male',
            email: '',
            usernameRules: [
                v => !!v || 'Имя не может быть пустым',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            passwordRules: [
                v => !!v || 'Пароль не может быть пустым',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ],
            emailRules: [
                v => !!v || 'Необходимо указать почтовый адрес',
                v => (v && v.length <= 25) || 'Максимум 25 символов (у вас ' + v.length + ')'
            ]
        }
    },
    methods: {
        registration() {
            Service.registration(this.username, this.password)
                .then(response => {
                    let user = response.data
                    if (user == null)
                        console.log('Пользователь с таким именем уже существует')
                    else {
                        console.log('Пользователь зарегистрирован')
                        this.dialog = false
                    }
                })
        }
    }
}
</script>

<style>

</style>